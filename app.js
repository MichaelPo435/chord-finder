'use strict';

// ════════════════════════════════════════════════════════
// GUITAR CHORD DIAGRAM
// ════════════════════════════════════════════════════════

const G = {
  LEFT:   32,
  TOP:    44,
  STRINGS: 6,
  FRETS:   5,
  SW:     28,
  FH:     34,
  DOT_R:  11,
};
G.WIDTH  = G.LEFT + (G.STRINGS - 1) * G.SW + 24;
G.HEIGHT = G.TOP  + G.FRETS * G.FH + 18;

function svgEl(tag, attrs) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}
function svgText(txt, attrs) {
  const el = svgEl('text', attrs);
  el.textContent = txt;
  return el;
}

function renderGuitar(chord) {
  const g = chord.guitar;
  const svg = svgEl('svg', {
    viewBox: `0 0 ${G.WIDTH} ${G.HEIGHT}`,
    width: G.WIDTH, height: G.HEIGHT,
  });

  // Fret lines
  for (let f = 0; f <= G.FRETS; f++) {
    const y = G.TOP + f * G.FH;
    const isNut = (f === 0 && g.startFret === 1);
    svg.appendChild(svgEl('rect', {
      x: G.LEFT, y: y - (isNut ? 3 : 0.5),
      width: (G.STRINGS - 1) * G.SW,
      height: isNut ? 6 : 1.5,
      fill: '#b0b0cc', rx: isNut ? 2 : 0,
    }));
  }

  if (g.startFret > 1) {
    svg.appendChild(svgText(g.startFret + 'fr', {
      x: G.LEFT - 6, y: G.TOP + G.FH * 0.5 + 5,
      'text-anchor': 'end', 'font-size': '12', fill: '#9090bb',
      'font-family': 'monospace',
    }));
  }

  // String lines
  for (let s = 0; s < G.STRINGS; s++) {
    const x = G.LEFT + s * G.SW;
    svg.appendChild(svgEl('line', {
      x1: x, y1: G.TOP, x2: x, y2: G.TOP + G.FRETS * G.FH,
      stroke: '#9090bb', 'stroke-width': s === 0 || s === 5 ? 2 : 1.5,
    }));
  }

  // Barre
  if (g.barre) {
    const { fret, fromString, toString } = g.barre;
    const by = G.TOP + (fret - g.startFret) * G.FH + G.FH / 2;
    const bx1 = G.LEFT + fromString * G.SW;
    const bx2 = G.LEFT + toString * G.SW;
    svg.appendChild(svgEl('rect', {
      x: bx1 - G.DOT_R, y: by - G.DOT_R,
      width: bx2 - bx1 + G.DOT_R * 2,
      height: G.DOT_R * 2,
      rx: G.DOT_R, fill: '#4a9eff', opacity: '0.85',
    }));
  }

  // Open / muted / finger dots
  for (let s = 0; s < G.STRINGS; s++) {
    const str = g.strings[s];
    const x = G.LEFT + s * G.SW;

    if (str.fret === -1) {
      svg.appendChild(svgText('✕', {
        x, y: G.TOP - 12,
        'text-anchor': 'middle', 'font-size': '14', fill: '#cc4444',
        'font-family': 'sans-serif',
      }));
    } else if (str.fret === 0) {
      svg.appendChild(svgEl('circle', {
        cx: x, cy: G.TOP - 14, r: 6,
        fill: 'none', stroke: '#9090bb', 'stroke-width': 1.5,
      }));
    } else {
      const cy = G.TOP + (str.fret - g.startFret) * G.FH + G.FH / 2;
      svg.appendChild(svgEl('circle', {
        cx: x, cy, r: G.DOT_R, fill: '#4a9eff',
      }));
      if (str.finger) {
        svg.appendChild(svgText(str.finger, {
          x, y: cy + 4,
          'text-anchor': 'middle', 'font-size': '11',
          fill: '#fff', 'font-weight': 'bold',
        }));
      }
    }
  }

  document.getElementById('guitar-diagram').innerHTML = '';
  document.getElementById('guitar-diagram').appendChild(svg);
}


// ════════════════════════════════════════════════════════
// PIANO DIAGRAM (used for both chords and scales)
// chord-like object: { notes: string[], root?: string }
// root is highlighted in red (#ff6b6b) when provided
// ════════════════════════════════════════════════════════

const WHITE_NAMES = ['C','D','E','F','G','A','B'];
const BLACK_MAP   = { C:'C#', D:'D#', F:'F#', G:'G#', A:'A#' };

const P = {
  WW: 36, WH: 130, BW: 22, BH: 82, GAP: 2,
  OCTAVES: 2, START_OCT: 3,
};

function buildPianoKeys() {
  const keys = [];
  for (let oct = 0; oct < P.OCTAVES; oct++) {
    let wIdx = 0;
    WHITE_NAMES.forEach((name) => {
      const xOct = oct * 7 * (P.WW + P.GAP);
      const x = xOct + wIdx * (P.WW + P.GAP);
      keys.push({ name, octave: P.START_OCT + oct, x, type: 'white' });
      if (BLACK_MAP[name]) {
        keys.push({
          name: BLACK_MAP[name],
          octave: P.START_OCT + oct,
          x: x + P.WW - P.BW / 2,
          type: 'black',
        });
      }
      wIdx++;
    });
  }
  return keys;
}

function enharmonicMatch(noteName, chordNotes) {
  const ENHARMONIC = {
    'C#':'Db','Db':'C#','D#':'Eb','Eb':'D#','F#':'Gb','Gb':'F#',
    'G#':'Ab','Ab':'G#','A#':'Bb','Bb':'A#','B#':'C','Cb':'B','E#':'F','Fb':'E',
  };
  if (chordNotes.includes(noteName)) return true;
  const enh = ENHARMONIC[noteName];
  return !!(enh && chordNotes.includes(enh));
}

function renderPiano(chord, targetId) {
  const id = targetId || 'piano-diagram';
  const allKeys = buildPianoKeys();
  const white = allKeys.filter(k => k.type === 'white');
  const black = allKeys.filter(k => k.type === 'black');

  const totalW = P.OCTAVES * 7 * (P.WW + P.GAP) - P.GAP;
  const totalH = P.WH + 20;

  const svg = svgEl('svg', {
    viewBox: `0 0 ${totalW} ${totalH}`,
    width: totalW, height: totalH,
  });

  const rootNote = chord.root || null;

  white.forEach(k => {
    const active = enharmonicMatch(k.name, chord.notes);
    const isRoot = active && rootNote && enharmonicMatch(k.name, [rootNote]);
    svg.appendChild(svgEl('rect', {
      x: k.x, y: 0, width: P.WW, height: P.WH,
      fill: isRoot ? '#ff6b6b' : active ? '#4a9eff' : '#f0f0eb',
      stroke: '#888', 'stroke-width': 1, rx: 3,
    }));
    if (active) {
      svg.appendChild(svgText(k.name, {
        x: k.x + P.WW / 2, y: P.WH - 10,
        'text-anchor': 'middle', 'font-size': '11',
        fill: '#fff', 'font-weight': 'bold',
      }));
    }
  });

  black.forEach(k => {
    const active = enharmonicMatch(k.name, chord.notes);
    const isRoot = active && rootNote && enharmonicMatch(k.name, [rootNote]);
    svg.appendChild(svgEl('rect', {
      x: k.x, y: 0, width: P.BW, height: P.BH,
      fill: isRoot ? '#cc3333' : active ? '#1a6ecf' : '#1a1a1a',
      stroke: '#555', 'stroke-width': 1, rx: 2,
    }));
    if (active) {
      svg.appendChild(svgText(k.name, {
        x: k.x + P.BW / 2, y: P.BH - 6,
        'text-anchor': 'middle', 'font-size': '9',
        fill: '#fff', 'font-weight': 'bold',
      }));
    }
  });

  // Octave labels
  for (let o = 0; o < P.OCTAVES; o++) {
    const xOct = o * 7 * (P.WW + P.GAP);
    svg.appendChild(svgText('C' + (P.START_OCT + o), {
      x: xOct + 2, y: P.WH + 15,
      'font-size': '11', fill: '#7878aa',
    }));
  }

  document.getElementById(id).innerHTML = '';
  document.getElementById(id).appendChild(svg);
}


// ════════════════════════════════════════════════════════
// SCALE GUITAR DIAGRAM (landscape fretboard)
// ════════════════════════════════════════════════════════

const SG = {
  LEFT:       52,
  TOP:        28,
  STRING_GAP: 22,
  FRET_W:     40,
  DOT_R:       8,
  NUT_W:       5,
  STRINGS:     6,
  FRETS:      12,
};
SG.WIDTH  = SG.LEFT + SG.FRETS * SG.FRET_W + 24;
SG.HEIGHT = SG.TOP  + (SG.STRINGS - 1) * SG.STRING_GAP + 24;

// Standard tuning open-string semitones (0=C): E A D G B e
const STRING_OPEN = [4, 9, 2, 7, 11, 4];
const SEMI_TO_NOTE = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const STRING_NAMES = ['E','A','D','G','B','e'];

function computeScalePositions(rootName, intervals) {
  const rootSemi = NOTE_SEMIS[rootName] ?? 0;
  const scaleSet = new Set(intervals.map(i => (rootSemi + i) % 12));
  const positions = [];
  for (let s = 0; s < 6; s++) {
    for (let f = 0; f <= SG.FRETS; f++) {
      const noteSemi = (STRING_OPEN[s] + f) % 12;
      if (scaleSet.has(noteSemi)) {
        positions.push({ string: s, fret: f, isRoot: noteSemi === ((rootSemi) % 12) });
      }
    }
  }
  return positions;
}

function renderScaleGuitar(positions) {
  const svg = svgEl('svg', {
    viewBox: `0 0 ${SG.WIDTH} ${SG.HEIGHT}`,
    width: SG.WIDTH, height: SG.HEIGHT,
  });

  // Nut
  svg.appendChild(svgEl('rect', {
    x: SG.LEFT - SG.NUT_W / 2, y: SG.TOP,
    width: SG.NUT_W,
    height: (SG.STRINGS - 1) * SG.STRING_GAP,
    fill: '#c0c0d8', rx: 2,
  }));

  // Fret lines (vertical)
  for (let f = 1; f <= SG.FRETS; f++) {
    const x = SG.LEFT + f * SG.FRET_W;
    svg.appendChild(svgEl('line', {
      x1: x, y1: SG.TOP,
      x2: x, y2: SG.TOP + (SG.STRINGS - 1) * SG.STRING_GAP,
      stroke: '#3a3a5a', 'stroke-width': 1,
    }));
  }

  // String lines (horizontal)
  const stringWidths = [2.5, 2, 1.8, 1.5, 1.2, 1];
  for (let s = 0; s < SG.STRINGS; s++) {
    const y = SG.TOP + s * SG.STRING_GAP;
    svg.appendChild(svgEl('line', {
      x1: SG.LEFT, y1: y,
      x2: SG.LEFT + SG.FRETS * SG.FRET_W, y2: y,
      stroke: '#9090bb', 'stroke-width': stringWidths[s],
    }));
  }

  // Fret number labels (top)
  for (let f = 0; f <= SG.FRETS; f++) {
    const x = f === 0
      ? SG.LEFT - SG.FRET_W * 0.35
      : SG.LEFT + (f - 0.5) * SG.FRET_W;
    const label = f === 0 ? '0' : String(f);
    svg.appendChild(svgText(label, {
      x, y: SG.TOP - 8,
      'text-anchor': 'middle', 'font-size': '10',
      fill: '#6060aa', 'font-family': 'monospace',
    }));
  }

  // String name labels (left)
  for (let s = 0; s < SG.STRINGS; s++) {
    const y = SG.TOP + s * SG.STRING_GAP;
    svg.appendChild(svgText(STRING_NAMES[s], {
      x: SG.LEFT - SG.NUT_W - 6, y: y + 4,
      'text-anchor': 'end', 'font-size': '11',
      fill: '#8080aa', 'font-family': 'monospace', 'font-weight': 'bold',
    }));
  }

  // Scale dots
  positions.forEach(({ string: s, fret: f, isRoot }) => {
    const cx = f === 0
      ? SG.LEFT - 15
      : SG.LEFT + (f - 0.5) * SG.FRET_W;
    const cy = SG.TOP + s * SG.STRING_GAP;
    const fill  = isRoot ? '#ff6b6b' : '#4a9eff';
    const stroke = isRoot ? '#cc2222' : '#1a6ecf';

    if (f === 0) {
      // Open string: hollow circle
      svg.appendChild(svgEl('circle', {
        cx, cy, r: SG.DOT_R,
        fill: 'none', stroke: fill, 'stroke-width': 2,
      }));
    } else {
      svg.appendChild(svgEl('circle', { cx, cy, r: SG.DOT_R, fill, stroke, 'stroke-width': 1 }));
    }
  });

  document.getElementById('scale-guitar-diagram').innerHTML = '';
  document.getElementById('scale-guitar-diagram').appendChild(svg);
}


// ════════════════════════════════════════════════════════
// AUDIO
// ════════════════════════════════════════════════════════

const NOTE_SEMIS = {
  'C':0,'C#':1,'Db':1,'D':2,'D#':3,'Eb':3,
  'E':4,'Fb':4,'F':5,'E#':5,'F#':6,'Gb':6,
  'G':7,'G#':8,'Ab':8,'A':9,'A#':10,'Bb':10,
  'B':11,'B#':0,'Cb':11
};

function noteToFreq(name, octave) {
  const semi = NOTE_SEMIS[name] ?? 0;
  return 440 * Math.pow(2, ((octave - 4) * 12 + (semi - 9)) / 12);
}

function playChord(chord) {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const master = ctx.createGain();
  master.gain.value = 0.25;
  master.connect(ctx.destination);

  chord.notes.forEach((name, i) => {
    const freq = noteToFreq(name, chord.octaves[i]);
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.value = freq;
    const t = ctx.currentTime;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(1, t + 0.025);
    gain.gain.setValueAtTime(1, t + 1.1);
    gain.gain.linearRampToValueAtTime(0, t + 1.5);
    osc.connect(gain); gain.connect(master);
    osc.start(t); osc.stop(t + 1.6);
  });
}

function playScale(noteNames) {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const master = ctx.createGain();
  master.gain.value = 0.25;
  master.connect(ctx.destination);

  noteNames.forEach((name, i) => {
    const freq = noteToFreq(name, 4);
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.value = freq;
    const t = ctx.currentTime + i * 0.2;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.9, t + 0.02);
    gain.gain.linearRampToValueAtTime(0, t + 0.35);
    osc.connect(gain); gain.connect(master);
    osc.start(t); osc.stop(t + 0.4);
  });
}


// ════════════════════════════════════════════════════════
// CHORD SEARCH & WIRING
// ════════════════════════════════════════════════════════

const CHORD_NAMES = Object.keys(window.CHORDS);

function normalizeInput(raw) {
  const s = raw.trim();
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

let currentChord = null;
let activeIndex  = -1;

const input      = document.getElementById('chord-input');
const suggList   = document.getElementById('suggestions');
const resultsEl  = document.getElementById('results');
const notFoundEl = document.getElementById('not-found');
const chordTitle = document.getElementById('chord-title');
const notesList  = document.getElementById('notes-list');
const playBtn    = document.getElementById('play-btn');

function showSuggestions(query) {
  if (!query) { hideSuggestions(); return; }
  const matches = CHORD_NAMES.filter(n =>
    n.toLowerCase().startsWith(query.toLowerCase())
  ).slice(0, 8);
  suggList.innerHTML = '';
  activeIndex = -1;
  if (!matches.length) { hideSuggestions(); return; }
  matches.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    li.setAttribute('role', 'option');
    li.addEventListener('mousedown', e => { e.preventDefault(); selectChord(name); });
    suggList.appendChild(li);
  });
}

function hideSuggestions() { suggList.innerHTML = ''; activeIndex = -1; }

function selectChord(name) {
  input.value = name;
  hideSuggestions();
  renderResults(name);
}

function renderResults(name) {
  const chord = window.CHORDS[name];
  if (!chord) {
    resultsEl.hidden = true;
    notFoundEl.hidden = false;
    currentChord = null;
    return;
  }
  currentChord = chord;
  notFoundEl.hidden = true;
  resultsEl.hidden = false;
  chordTitle.textContent = name;

  notesList.innerHTML = '';
  chord.notes.forEach(n => {
    const pill = document.createElement('span');
    pill.className = 'note-pill';
    pill.textContent = n;
    notesList.appendChild(pill);
  });

  renderGuitar(chord);
  renderPiano(chord, 'piano-diagram');
}

input.addEventListener('input', () => {
  const norm = normalizeInput(input.value);
  showSuggestions(norm);
  if (window.CHORDS[norm]) renderResults(norm);
  else if (!norm) { resultsEl.hidden = true; notFoundEl.hidden = true; }
});

input.addEventListener('keydown', e => {
  const items = suggList.querySelectorAll('li');
  if (!items.length) return;
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    activeIndex = Math.min(activeIndex + 1, items.length - 1);
    items.forEach((li, i) => li.classList.toggle('active', i === activeIndex));
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    activeIndex = Math.max(activeIndex - 1, 0);
    items.forEach((li, i) => li.classList.toggle('active', i === activeIndex));
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (activeIndex >= 0 && items[activeIndex]) selectChord(items[activeIndex].textContent);
    else { const norm = normalizeInput(input.value); if (norm) { hideSuggestions(); renderResults(norm); } }
  } else if (e.key === 'Escape') {
    hideSuggestions();
  }
});

input.addEventListener('blur', () => { setTimeout(hideSuggestions, 150); });
playBtn.addEventListener('click', () => { if (currentChord) playChord(currentChord); });


// ════════════════════════════════════════════════════════
// SCALES WIRING
// ════════════════════════════════════════════════════════

const scaleRootSel  = document.getElementById('scale-root');
const scaleTypeSel  = document.getElementById('scale-type');
const scaleTitle    = document.getElementById('scale-title');
const scaleNotesList = document.getElementById('scale-notes-list');
const playScaleBtn  = document.getElementById('play-scale-btn');

// Populate scale-type dropdown
Object.entries(window.SCALE_TYPES).forEach(([key, val]) => {
  const opt = document.createElement('option');
  opt.value = key;
  opt.textContent = val.nameHe;
  scaleTypeSel.appendChild(opt);
});

let currentScaleNotes = [];

function renderScale() {
  const root      = scaleRootSel.value;
  const typeKey   = scaleTypeSel.value;
  const scaleType = window.SCALE_TYPES[typeKey];
  if (!scaleType) return;

  const { intervals, nameHe } = scaleType;

  // Compute note names
  const rootSemi = NOTE_SEMIS[root] ?? 0;
  const notes    = intervals.map(i => SEMI_TO_NOTE[(rootSemi + i) % 12]);
  currentScaleNotes = notes;

  // Title
  scaleTitle.textContent = root + ' ' + nameHe;

  // Note pills
  scaleNotesList.innerHTML = '';
  notes.forEach((n, i) => {
    const pill = document.createElement('span');
    pill.className = 'note-pill' + (i === 0 ? ' note-pill-root' : '');
    pill.textContent = n;
    scaleNotesList.appendChild(pill);
  });

  // Guitar scale diagram
  const positions = computeScalePositions(root, intervals);
  renderScaleGuitar(positions);

  // Piano
  renderPiano({ notes, root }, 'scale-piano-diagram');
}

scaleRootSel.addEventListener('change', renderScale);
scaleTypeSel.addEventListener('change', renderScale);
playScaleBtn.addEventListener('click', () => {
  if (currentScaleNotes.length) playScale(currentScaleNotes);
});


// ════════════════════════════════════════════════════════
// TABS
// ════════════════════════════════════════════════════════

const tabChords = document.getElementById('tab-chords');
const tabScales = document.getElementById('tab-scales');
const panelChords = document.getElementById('panel-chords');
const panelScales = document.getElementById('panel-scales');

tabChords.addEventListener('click', () => {
  tabChords.classList.add('active');    tabChords.setAttribute('aria-selected','true');
  tabScales.classList.remove('active'); tabScales.setAttribute('aria-selected','false');
  panelChords.hidden = false;
  panelScales.hidden = true;
});

tabScales.addEventListener('click', () => {
  tabScales.classList.add('active');    tabScales.setAttribute('aria-selected','true');
  tabChords.classList.remove('active'); tabChords.setAttribute('aria-selected','false');
  panelScales.hidden = false;
  panelChords.hidden = true;
  renderScale(); // auto-render on first switch
});
