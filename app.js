'use strict';

// ════════════════════════════════════════════════════════
// GUITAR DIAGRAM
// ════════════════════════════════════════════════════════

const G = {
  LEFT:   32,   // left margin (fret label space)
  TOP:    44,   // top margin (open/muted marker space)
  STRINGS: 6,
  FRETS:   5,
  SW:     28,   // string spacing (horizontal)
  FH:     34,   // fret height (vertical)
  DOT_R:  11,   // dot radius
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

  // Fret number label (when not starting at fret 1)
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

  // Open / muted markers + finger dots
  for (let s = 0; s < G.STRINGS; s++) {
    const str = g.strings[s];
    const x = G.LEFT + s * G.SW;

    if (str.fret === -1) {
      // Muted ×
      svg.appendChild(svgText('✕', {
        x, y: G.TOP - 12,
        'text-anchor': 'middle', 'font-size': '14', fill: '#cc4444',
        'font-family': 'sans-serif',
      }));
    } else if (str.fret === 0) {
      // Open ○
      svg.appendChild(svgEl('circle', {
        cx: x, cy: G.TOP - 14, r: 6,
        fill: 'none', stroke: '#9090bb', 'stroke-width': 1.5,
      }));
    } else {
      // Finger dot
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
// PIANO DIAGRAM
// ════════════════════════════════════════════════════════

// White key note names per octave (2 octaves: C3..B4)
const WHITE_NAMES = ['C','D','E','F','G','A','B'];
const BLACK_MAP = { C:'C#', D:'D#', F:'F#', G:'G#', A:'A#' };
// Black key x-offset relative to left edge of corresponding white key
const BLACK_OFFSETS = { C:22, D:22, F:22, G:22, A:22 }; // will be computed

const P = {
  WW: 36,    // white key width
  WH: 130,   // white key height
  BW: 22,    // black key width
  BH: 82,    // black key height
  GAP: 2,    // gap between white keys
  OCTAVES: 2,
  START_OCT: 3,
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
    'C#': 'Db', 'Db': 'C#',
    'D#': 'Eb', 'Eb': 'D#',
    'F#': 'Gb', 'Gb': 'F#',
    'G#': 'Ab', 'Ab': 'G#',
    'A#': 'Bb', 'Bb': 'A#',
    'B#': 'C',  'Cb': 'B',
    'E#': 'F',  'Fb': 'E',
  };
  if (chordNotes.includes(noteName)) return true;
  const enh = ENHARMONIC[noteName];
  return enh && chordNotes.includes(enh);
}

function renderPiano(chord) {
  const allKeys = buildPianoKeys();
  const white = allKeys.filter(k => k.type === 'white');
  const black = allKeys.filter(k => k.type === 'black');

  const totalW = P.OCTAVES * 7 * (P.WW + P.GAP) - P.GAP;
  const totalH = P.WH + 20; // extra for label

  const svg = svgEl('svg', {
    viewBox: `0 0 ${totalW} ${totalH}`,
    width: totalW, height: totalH,
  });

  // White keys
  white.forEach(k => {
    const active = enharmonicMatch(k.name, chord.notes);
    svg.appendChild(svgEl('rect', {
      x: k.x, y: 0,
      width: P.WW, height: P.WH,
      fill: active ? '#4a9eff' : '#f0f0eb',
      stroke: '#888', 'stroke-width': 1,
      rx: 3,
    }));
    if (active) {
      svg.appendChild(svgText(k.name, {
        x: k.x + P.WW / 2, y: P.WH - 10,
        'text-anchor': 'middle', 'font-size': '11',
        fill: '#fff', 'font-weight': 'bold',
      }));
    }
  });

  // Black keys (on top)
  black.forEach(k => {
    const active = enharmonicMatch(k.name, chord.notes);
    svg.appendChild(svgEl('rect', {
      x: k.x, y: 0,
      width: P.BW, height: P.BH,
      fill: active ? '#1a6ecf' : '#1a1a1a',
      stroke: '#555', 'stroke-width': 1,
      rx: 2,
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

  document.getElementById('piano-diagram').innerHTML = '';
  document.getElementById('piano-diagram').appendChild(svg);
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

    osc.connect(gain);
    gain.connect(master);
    osc.start(t);
    osc.stop(t + 1.6);
  });
}


// ════════════════════════════════════════════════════════
// SEARCH & WIRING
// ════════════════════════════════════════════════════════

const CHORD_NAMES = Object.keys(window.CHORDS);

function normalizeInput(raw) {
  const s = raw.trim();
  if (!s) return '';
  // Capitalise first letter, preserve rest (handles: am→Am, cmaj7→Cmaj7)
  return s.charAt(0).toUpperCase() + s.slice(1);
}

let currentChord = null;
let activeIndex = -1;

const input       = document.getElementById('chord-input');
const suggList    = document.getElementById('suggestions');
const resultsEl   = document.getElementById('results');
const notFoundEl  = document.getElementById('not-found');
const chordTitle  = document.getElementById('chord-title');
const notesList   = document.getElementById('notes-list');
const playBtn     = document.getElementById('play-btn');

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
    li.addEventListener('mousedown', e => {
      e.preventDefault();
      selectChord(name);
    });
    suggList.appendChild(li);
  });
}

function hideSuggestions() {
  suggList.innerHTML = '';
  activeIndex = -1;
}

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
  renderPiano(chord);
}

// Input events
input.addEventListener('input', () => {
  const norm = normalizeInput(input.value);
  showSuggestions(norm);
  if (window.CHORDS[norm]) {
    renderResults(norm);
  } else if (!norm) {
    resultsEl.hidden = true;
    notFoundEl.hidden = true;
  }
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
    if (activeIndex >= 0 && items[activeIndex]) {
      selectChord(items[activeIndex].textContent);
    } else {
      const norm = normalizeInput(input.value);
      if (norm) { hideSuggestions(); renderResults(norm); }
    }
  } else if (e.key === 'Escape') {
    hideSuggestions();
  }
});

input.addEventListener('blur', () => {
  // small delay so mousedown on suggestion fires first
  setTimeout(hideSuggestions, 150);
});

playBtn.addEventListener('click', () => {
  if (currentChord) playChord(currentChord);
});
