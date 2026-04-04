// Chord database
// guitar.strings: array of 6, index 0 = low E, index 5 = high e
// fret: -1=muted, 0=open, 1-12=fret number
// barre: { fret, fromString, toString } or null

window.CHORDS = {

  // ── MAJOR ────────────────────────────────────────────────
  "C": {
    notes: ["C","E","G"], octaves: [3,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:3,finger:3},{fret:2,finger:2},
      {fret:0,finger:null},{fret:1,finger:1},{fret:0,finger:null}
    ]}
  },
  "D": {
    notes: ["D","F#","A"], octaves: [3,3,3],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:-1,finger:null},{fret:0,finger:null},
      {fret:2,finger:1},{fret:3,finger:3},{fret:2,finger:2}
    ]}
  },
  "E": {
    notes: ["E","G#","B"], octaves: [2,3,3],
    guitar: { startFret:1, barre:null, strings:[
      {fret:0,finger:null},{fret:2,finger:2},{fret:2,finger:3},
      {fret:1,finger:1},{fret:0,finger:null},{fret:0,finger:null}
    ]}
  },
  "F": {
    notes: ["F","A","C"], octaves: [3,3,4],
    guitar: { startFret:1, barre:{fret:1,fromString:0,toString:5}, strings:[
      {fret:1,finger:1},{fret:1,finger:1},{fret:2,finger:2},
      {fret:3,finger:4},{fret:3,finger:3},{fret:1,finger:1}
    ]}
  },
  "G": {
    notes: ["G","B","D"], octaves: [2,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:3,finger:2},{fret:2,finger:1},{fret:0,finger:null},
      {fret:0,finger:null},{fret:0,finger:null},{fret:3,finger:3}
    ]}
  },
  "A": {
    notes: ["A","C#","E"], octaves: [2,3,3],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:0,finger:null},{fret:2,finger:2},
      {fret:2,finger:3},{fret:2,finger:4},{fret:0,finger:null}
    ]}
  },
  "B": {
    notes: ["B","D#","F#"], octaves: [2,3,3],
    guitar: { startFret:2, barre:{fret:2,fromString:0,toString:5}, strings:[
      {fret:2,finger:1},{fret:2,finger:1},{fret:4,finger:3},
      {fret:4,finger:4},{fret:4,finger:3},{fret:2,finger:1}
    ]}
  },

  // ── MINOR ────────────────────────────────────────────────
  "Cm": {
    notes: ["C","Eb","G"], octaves: [3,3,4],
    guitar: { startFret:3, barre:{fret:3,fromString:0,toString:5}, strings:[
      {fret:3,finger:1},{fret:3,finger:1},{fret:5,finger:3},
      {fret:5,finger:4},{fret:4,finger:2},{fret:3,finger:1}
    ]}
  },
  "Dm": {
    notes: ["D","F","A"], octaves: [3,4,3],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:-1,finger:null},{fret:0,finger:null},
      {fret:2,finger:2},{fret:3,finger:3},{fret:1,finger:1}
    ]}
  },
  "Em": {
    notes: ["E","G","B"], octaves: [2,3,3],
    guitar: { startFret:1, barre:null, strings:[
      {fret:0,finger:null},{fret:2,finger:2},{fret:2,finger:3},
      {fret:0,finger:null},{fret:0,finger:null},{fret:0,finger:null}
    ]}
  },
  "Fm": {
    notes: ["F","Ab","C"], octaves: [3,3,4],
    guitar: { startFret:1, barre:{fret:1,fromString:0,toString:5}, strings:[
      {fret:1,finger:1},{fret:1,finger:1},{fret:3,finger:3},
      {fret:3,finger:4},{fret:2,finger:2},{fret:1,finger:1}
    ]}
  },
  "Gm": {
    notes: ["G","Bb","D"], octaves: [3,3,4],
    guitar: { startFret:3, barre:{fret:3,fromString:0,toString:5}, strings:[
      {fret:3,finger:1},{fret:3,finger:1},{fret:5,finger:3},
      {fret:5,finger:4},{fret:3,finger:1},{fret:3,finger:1}
    ]}
  },
  "Am": {
    notes: ["A","C","E"], octaves: [2,3,3],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:0,finger:null},{fret:2,finger:2},
      {fret:2,finger:3},{fret:1,finger:1},{fret:0,finger:null}
    ]}
  },
  "Bm": {
    notes: ["B","D","F#"], octaves: [2,3,3],
    guitar: { startFret:2, barre:{fret:2,fromString:0,toString:5}, strings:[
      {fret:2,finger:1},{fret:2,finger:1},{fret:4,finger:3},
      {fret:4,finger:4},{fret:3,finger:2},{fret:2,finger:1}
    ]}
  },

  // ── DOMINANT 7th ─────────────────────────────────────────
  "C7": {
    notes: ["C","E","G","Bb"], octaves: [3,3,4,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:3,finger:3},{fret:2,finger:2},
      {fret:3,finger:4},{fret:1,finger:1},{fret:0,finger:null}
    ]}
  },
  "D7": {
    notes: ["D","F#","A","C"], octaves: [3,3,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:-1,finger:null},{fret:0,finger:null},
      {fret:2,finger:2},{fret:1,finger:1},{fret:2,finger:3}
    ]}
  },
  "E7": {
    notes: ["E","G#","B","D"], octaves: [2,3,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:0,finger:null},{fret:2,finger:2},{fret:0,finger:null},
      {fret:1,finger:1},{fret:0,finger:null},{fret:0,finger:null}
    ]}
  },
  "F7": {
    notes: ["F","A","C","Eb"], octaves: [3,3,4,4],
    guitar: { startFret:1, barre:{fret:1,fromString:0,toString:5}, strings:[
      {fret:1,finger:1},{fret:1,finger:1},{fret:2,finger:2},
      {fret:3,finger:4},{fret:1,finger:1},{fret:1,finger:1}
    ]}
  },
  "G7": {
    notes: ["G","B","D","F"], octaves: [2,3,4,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:3,finger:3},{fret:2,finger:2},{fret:0,finger:null},
      {fret:0,finger:null},{fret:0,finger:null},{fret:1,finger:1}
    ]}
  },
  "A7": {
    notes: ["A","C#","E","G"], octaves: [2,3,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:0,finger:null},{fret:2,finger:2},
      {fret:0,finger:null},{fret:2,finger:3},{fret:0,finger:null}
    ]}
  },
  "B7": {
    notes: ["B","D#","F#","A"], octaves: [2,3,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:2,finger:2},{fret:1,finger:1},
      {fret:2,finger:3},{fret:0,finger:null},{fret:2,finger:4}
    ]}
  },

  // ── MAJOR 7th ─────────────────────────────────────────────
  "Cmaj7": {
    notes: ["C","E","G","B"], octaves: [3,3,4,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:3,finger:3},{fret:2,finger:2},
      {fret:0,finger:null},{fret:0,finger:null},{fret:0,finger:null}
    ]}
  },
  "Dmaj7": {
    notes: ["D","F#","A","C#"], octaves: [3,3,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:-1,finger:null},{fret:0,finger:null},
      {fret:2,finger:2},{fret:2,finger:3},{fret:2,finger:4}
    ]}
  },
  "Emaj7": {
    notes: ["E","G#","B","D#"], octaves: [2,3,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:0,finger:null},{fret:2,finger:2},{fret:1,finger:1},
      {fret:1,finger:1},{fret:0,finger:null},{fret:0,finger:null}
    ]}
  },
  "Gmaj7": {
    notes: ["G","B","D","F#"], octaves: [2,3,4,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:3,finger:3},{fret:2,finger:2},{fret:0,finger:null},
      {fret:0,finger:null},{fret:0,finger:null},{fret:2,finger:1}
    ]}
  },
  "Amaj7": {
    notes: ["A","C#","E","G#"], octaves: [2,3,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:0,finger:null},{fret:2,finger:2},
      {fret:1,finger:1},{fret:2,finger:3},{fret:0,finger:null}
    ]}
  },

  // ── MINOR 7th ─────────────────────────────────────────────
  "Cm7": {
    notes: ["C","Eb","G","Bb"], octaves: [3,3,4,4],
    guitar: { startFret:3, barre:{fret:3,fromString:0,toString:5}, strings:[
      {fret:3,finger:1},{fret:3,finger:1},{fret:5,finger:4},
      {fret:3,finger:1},{fret:4,finger:3},{fret:3,finger:1}
    ]}
  },
  "Dm7": {
    notes: ["D","F","A","C"], octaves: [3,4,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:-1,finger:null},{fret:0,finger:null},
      {fret:2,finger:2},{fret:1,finger:1},{fret:1,finger:1}
    ]}
  },
  "Em7": {
    notes: ["E","G","B","D"], octaves: [2,3,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:0,finger:null},{fret:2,finger:2},{fret:0,finger:null},
      {fret:0,finger:null},{fret:0,finger:null},{fret:0,finger:null}
    ]}
  },
  "Am7": {
    notes: ["A","C","E","G"], octaves: [2,3,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:0,finger:null},{fret:2,finger:2},
      {fret:0,finger:null},{fret:1,finger:1},{fret:0,finger:null}
    ]}
  },
  "Bm7": {
    notes: ["B","D","F#","A"], octaves: [2,3,3,4],
    guitar: { startFret:2, barre:{fret:2,fromString:0,toString:5}, strings:[
      {fret:2,finger:1},{fret:2,finger:1},{fret:4,finger:3},
      {fret:2,finger:1},{fret:3,finger:2},{fret:2,finger:1}
    ]}
  },

  // ── sus2 ──────────────────────────────────────────────────
  "Csus2": {
    notes: ["C","D","G"], octaves: [3,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:3,finger:3},{fret:0,finger:null},
      {fret:0,finger:null},{fret:1,finger:1},{fret:0,finger:null}
    ]}
  },
  "Dsus2": {
    notes: ["D","E","A"], octaves: [3,3,3],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:-1,finger:null},{fret:0,finger:null},
      {fret:2,finger:2},{fret:3,finger:3},{fret:0,finger:null}
    ]}
  },
  "Gsus2": {
    notes: ["G","A","D"], octaves: [3,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:3,finger:3},{fret:0,finger:null},{fret:0,finger:null},
      {fret:0,finger:null},{fret:1,finger:1},{fret:3,finger:4}
    ]}
  },
  "Asus2": {
    notes: ["A","B","E"], octaves: [2,2,3],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:0,finger:null},{fret:2,finger:2},
      {fret:2,finger:3},{fret:0,finger:null},{fret:0,finger:null}
    ]}
  },

  // ── sus4 ──────────────────────────────────────────────────
  "Csus4": {
    notes: ["C","F","G"], octaves: [3,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:3,finger:3},{fret:3,finger:4},
      {fret:0,finger:null},{fret:1,finger:1},{fret:1,finger:1}
    ]}
  },
  "Dsus4": {
    notes: ["D","G","A"], octaves: [3,4,3],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:-1,finger:null},{fret:0,finger:null},
      {fret:2,finger:2},{fret:3,finger:3},{fret:3,finger:4}
    ]}
  },
  "Gsus4": {
    notes: ["G","C","D"], octaves: [3,4,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:3,finger:3},{fret:3,finger:4},{fret:0,finger:null},
      {fret:0,finger:null},{fret:1,finger:1},{fret:1,finger:1}
    ]}
  },
  "Asus4": {
    notes: ["A","D","E"], octaves: [2,3,3],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:0,finger:null},{fret:2,finger:2},
      {fret:2,finger:3},{fret:3,finger:4},{fret:0,finger:null}
    ]}
  },

  // ── add9 ──────────────────────────────────────────────────
  "Cadd9": {
    notes: ["C","D","E","G"], octaves: [3,4,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:3,finger:3},{fret:2,finger:2},
      {fret:0,finger:null},{fret:3,finger:4},{fret:0,finger:null}
    ]}
  },
  "Dadd9": {
    notes: ["D","E","F#","A"], octaves: [3,4,3,3],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:-1,finger:null},{fret:0,finger:null},
      {fret:2,finger:2},{fret:3,finger:3},{fret:0,finger:null}
    ]}
  },
  "Gadd9": {
    notes: ["G","A","B","D"], octaves: [3,3,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:3,finger:2},{fret:2,finger:1},{fret:0,finger:null},
      {fret:2,finger:3},{fret:0,finger:null},{fret:3,finger:4}
    ]}
  },
  "Aadd9": {
    notes: ["A","B","C#","E"], octaves: [2,2,3,3],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:0,finger:null},{fret:2,finger:2},
      {fret:4,finger:4},{fret:2,finger:1},{fret:0,finger:null}
    ]}
  },

  // ── DIMINISHED ────────────────────────────────────────────
  "Cdim": {
    notes: ["C","Eb","Gb"], octaves: [3,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:3,finger:3},{fret:1,finger:1},
      {fret:2,finger:2},{fret:1,finger:1},{fret:-1,finger:null}
    ]}
  },
  "Ddim": {
    notes: ["D","F","Ab"], octaves: [3,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:-1,finger:null},{fret:0,finger:null},
      {fret:1,finger:1},{fret:3,finger:3},{fret:1,finger:2}
    ]}
  },
  "Edim": {
    notes: ["E","G","Bb"], octaves: [2,3,3],
    guitar: { startFret:1, barre:null, strings:[
      {fret:0,finger:null},{fret:1,finger:1},{fret:2,finger:3},
      {fret:2,finger:4},{fret:-1,finger:null},{fret:-1,finger:null}
    ]}
  },
  "Gdim": {
    notes: ["G","Bb","Db"], octaves: [3,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:3,finger:3},{fret:1,finger:1},{fret:2,finger:2},
      {fret:3,finger:4},{fret:-1,finger:null},{fret:-1,finger:null}
    ]}
  },
  "Adim": {
    notes: ["A","C","Eb"], octaves: [2,3,3],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:0,finger:null},{fret:1,finger:1},
      {fret:2,finger:3},{fret:1,finger:2},{fret:-1,finger:null}
    ]}
  },
  "Bdim": {
    notes: ["B","D","F"], octaves: [2,3,3],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:2,finger:2},{fret:0,finger:null},
      {fret:0,finger:null},{fret:0,finger:null},{fret:1,finger:1}
    ]}
  },

  // ── AUGMENTED ─────────────────────────────────────────────
  "Caug": {
    notes: ["C","E","G#"], octaves: [3,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:3,finger:4},{fret:2,finger:3},
      {fret:1,finger:1},{fret:1,finger:2},{fret:0,finger:null}
    ]}
  },
  "Daug": {
    notes: ["D","F#","A#"], octaves: [3,3,3],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:-1,finger:null},{fret:0,finger:null},
      {fret:3,finger:3},{fret:3,finger:4},{fret:2,finger:2}
    ]}
  },
  "Eaug": {
    notes: ["E","G#","B#"], octaves: [2,3,3],
    guitar: { startFret:1, barre:null, strings:[
      {fret:0,finger:null},{fret:3,finger:4},{fret:2,finger:3},
      {fret:1,finger:1},{fret:1,finger:2},{fret:0,finger:null}
    ]}
  },
  "Gaug": {
    notes: ["G","B","D#"], octaves: [3,3,4],
    guitar: { startFret:1, barre:null, strings:[
      {fret:3,finger:3},{fret:2,finger:2},{fret:1,finger:1},
      {fret:0,finger:null},{fret:-1,finger:null},{fret:-1,finger:null}
    ]}
  },
  "Aaug": {
    notes: ["A","C#","F"], octaves: [2,3,3],
    guitar: { startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:0,finger:null},{fret:3,finger:4},
      {fret:2,finger:3},{fret:2,finger:2},{fret:1,finger:1}
    ]}
  }
};
