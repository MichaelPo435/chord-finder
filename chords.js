// Chord database
// guitars: array of voicings (at least one)
// strings: array of 6, index 0 = low E, index 5 = high e
// fret: -1=muted, 0=open, 1-12=fret number
// barre: { fret, fromString, toString } or null

window.CHORDS = {

  // ── MAJOR ────────────────────────────────────────────────
  "C": {
    notes: ["C","E","G"], octaves: [3,3,4],
    guitars: [
      // Open (C-shape)
      { startFret:1, barre:null, strings:[
        {fret:-1,finger:null},{fret:3,finger:3},{fret:2,finger:2},
        {fret:0,finger:null},{fret:1,finger:1},{fret:0,finger:null}
      ]},
      // A-shape barre at 3
      { startFret:3, barre:{fret:3,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:3,finger:1},{fret:5,finger:2},
        {fret:5,finger:3},{fret:5,finger:4},{fret:3,finger:1}
      ]},
      // E-shape barre at 8
      { startFret:8, barre:{fret:8,fromString:0,toString:5}, strings:[
        {fret:8,finger:1},{fret:10,finger:3},{fret:10,finger:4},
        {fret:9,finger:2},{fret:8,finger:1},{fret:8,finger:1}
      ]},
    ]
  },
  "D": {
    notes: ["D","F#","A"], octaves: [3,3,3],
    guitars: [
      // Open (D-shape)
      { startFret:1, barre:null, strings:[
        {fret:-1,finger:null},{fret:-1,finger:null},{fret:0,finger:null},
        {fret:2,finger:1},{fret:3,finger:3},{fret:2,finger:2}
      ]},
      // A-shape barre at 5
      { startFret:5, barre:{fret:5,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:5,finger:1},{fret:7,finger:2},
        {fret:7,finger:3},{fret:7,finger:4},{fret:5,finger:1}
      ]},
      // E-shape barre at 10
      { startFret:10, barre:{fret:10,fromString:0,toString:5}, strings:[
        {fret:10,finger:1},{fret:12,finger:3},{fret:12,finger:4},
        {fret:11,finger:2},{fret:10,finger:1},{fret:10,finger:1}
      ]},
    ]
  },
  "E": {
    notes: ["E","G#","B"], octaves: [2,3,3],
    guitars: [
      // Open
      { startFret:1, barre:null, strings:[
        {fret:0,finger:null},{fret:2,finger:2},{fret:2,finger:3},
        {fret:1,finger:1},{fret:0,finger:null},{fret:0,finger:null}
      ]},
      // A-shape barre at 7
      { startFret:7, barre:{fret:7,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:7,finger:1},{fret:9,finger:2},
        {fret:9,finger:3},{fret:9,finger:4},{fret:7,finger:1}
      ]},
      // E-shape barre at 12
      { startFret:12, barre:{fret:12,fromString:0,toString:5}, strings:[
        {fret:12,finger:1},{fret:14,finger:3},{fret:14,finger:4},
        {fret:13,finger:2},{fret:12,finger:1},{fret:12,finger:1}
      ]},
    ]
  },
  "F": {
    notes: ["F","A","C"], octaves: [3,3,4],
    guitars: [
      // E-shape barre at 1
      { startFret:1, barre:{fret:1,fromString:0,toString:5}, strings:[
        {fret:1,finger:1},{fret:1,finger:1},{fret:2,finger:2},
        {fret:3,finger:4},{fret:3,finger:3},{fret:1,finger:1}
      ]},
      // A-shape barre at 8
      { startFret:8, barre:{fret:8,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:8,finger:1},{fret:10,finger:2},
        {fret:10,finger:3},{fret:10,finger:4},{fret:8,finger:1}
      ]},
      // 4-string mini voicing (xx3211)
      { startFret:1, barre:null, strings:[
        {fret:-1,finger:null},{fret:-1,finger:null},{fret:3,finger:3},
        {fret:2,finger:2},{fret:1,finger:1},{fret:1,finger:1}
      ]},
    ]
  },
  "G": {
    notes: ["G","B","D"], octaves: [2,3,4],
    guitars: [
      // Open (G-shape)
      { startFret:1, barre:null, strings:[
        {fret:3,finger:2},{fret:2,finger:1},{fret:0,finger:null},
        {fret:0,finger:null},{fret:0,finger:null},{fret:3,finger:3}
      ]},
      // E-shape barre at 3
      { startFret:3, barre:{fret:3,fromString:0,toString:5}, strings:[
        {fret:3,finger:1},{fret:5,finger:3},{fret:5,finger:4},
        {fret:4,finger:2},{fret:3,finger:1},{fret:3,finger:1}
      ]},
      // A-shape barre at 10
      { startFret:10, barre:{fret:10,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:10,finger:1},{fret:12,finger:2},
        {fret:12,finger:3},{fret:12,finger:4},{fret:10,finger:1}
      ]},
    ]
  },
  "A": {
    notes: ["A","C#","E"], octaves: [2,3,3],
    guitars: [
      // Open (A-shape)
      { startFret:1, barre:null, strings:[
        {fret:-1,finger:null},{fret:0,finger:null},{fret:2,finger:2},
        {fret:2,finger:3},{fret:2,finger:4},{fret:0,finger:null}
      ]},
      // E-shape barre at 5
      { startFret:5, barre:{fret:5,fromString:0,toString:5}, strings:[
        {fret:5,finger:1},{fret:7,finger:3},{fret:7,finger:4},
        {fret:6,finger:2},{fret:5,finger:1},{fret:5,finger:1}
      ]},
      // A-shape barre at 12
      { startFret:12, barre:{fret:12,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:12,finger:1},{fret:14,finger:2},
        {fret:14,finger:3},{fret:14,finger:4},{fret:12,finger:1}
      ]},
    ]
  },
  "B": {
    notes: ["B","D#","F#"], octaves: [2,3,3],
    guitars: [
      // A-shape barre at 2
      { startFret:2, barre:{fret:2,fromString:0,toString:5}, strings:[
        {fret:2,finger:1},{fret:2,finger:1},{fret:4,finger:2},
        {fret:4,finger:3},{fret:4,finger:4},{fret:2,finger:1}
      ]},
      // E-shape barre at 7
      { startFret:7, barre:{fret:7,fromString:0,toString:5}, strings:[
        {fret:7,finger:1},{fret:9,finger:3},{fret:9,finger:4},
        {fret:8,finger:2},{fret:7,finger:1},{fret:7,finger:1}
      ]},
    ]
  },

  // ── FLAT / SHARP MAJOR ────────────────────────────────────
  "Bb": {
    notes: ["Bb","D","F"], octaves: [3,3,4],
    guitars: [
      // A-shape barre at 1
      { startFret:1, barre:{fret:1,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:1,finger:1},{fret:3,finger:2},
        {fret:3,finger:3},{fret:3,finger:4},{fret:1,finger:1}
      ]},
      // E-shape barre at 6
      { startFret:6, barre:{fret:6,fromString:0,toString:5}, strings:[
        {fret:6,finger:1},{fret:8,finger:3},{fret:8,finger:4},
        {fret:7,finger:2},{fret:6,finger:1},{fret:6,finger:1}
      ]},
    ]
  },
  "Eb": {
    notes: ["Eb","G","Bb"], octaves: [3,3,4],
    guitars: [
      // A-shape barre at 6
      { startFret:6, barre:{fret:6,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:6,finger:1},{fret:8,finger:2},
        {fret:8,finger:3},{fret:8,finger:4},{fret:6,finger:1}
      ]},
      // E-shape barre at 11
      { startFret:11, barre:{fret:11,fromString:0,toString:5}, strings:[
        {fret:11,finger:1},{fret:13,finger:3},{fret:13,finger:4},
        {fret:12,finger:2},{fret:11,finger:1},{fret:11,finger:1}
      ]},
    ]
  },
  "Ab": {
    notes: ["Ab","C","Eb"], octaves: [3,3,4],
    guitars: [
      // E-shape barre at 4
      { startFret:4, barre:{fret:4,fromString:0,toString:5}, strings:[
        {fret:4,finger:1},{fret:6,finger:3},{fret:6,finger:4},
        {fret:5,finger:2},{fret:4,finger:1},{fret:4,finger:1}
      ]},
      // A-shape barre at 11
      { startFret:11, barre:{fret:11,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:11,finger:1},{fret:13,finger:2},
        {fret:13,finger:3},{fret:13,finger:4},{fret:11,finger:1}
      ]},
    ]
  },
  "Db": {
    notes: ["Db","F","Ab"], octaves: [3,3,4],
    guitars: [
      // A-shape barre at 4
      { startFret:4, barre:{fret:4,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:4,finger:1},{fret:6,finger:2},
        {fret:6,finger:3},{fret:6,finger:4},{fret:4,finger:1}
      ]},
      // E-shape barre at 9
      { startFret:9, barre:{fret:9,fromString:0,toString:5}, strings:[
        {fret:9,finger:1},{fret:11,finger:3},{fret:11,finger:4},
        {fret:10,finger:2},{fret:9,finger:1},{fret:9,finger:1}
      ]},
    ]
  },
  "Gb": {
    notes: ["Gb","Bb","Db"], octaves: [3,3,4],
    guitars: [
      // E-shape barre at 2
      { startFret:2, barre:{fret:2,fromString:0,toString:5}, strings:[
        {fret:2,finger:1},{fret:4,finger:3},{fret:4,finger:4},
        {fret:3,finger:2},{fret:2,finger:1},{fret:2,finger:1}
      ]},
      // A-shape barre at 9
      { startFret:9, barre:{fret:9,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:9,finger:1},{fret:11,finger:2},
        {fret:11,finger:3},{fret:11,finger:4},{fret:9,finger:1}
      ]},
    ]
  },
  "F#": {
    notes: ["F#","A#","C#"], octaves: [3,3,4],
    guitars: [
      // E-shape barre at 2
      { startFret:2, barre:{fret:2,fromString:0,toString:5}, strings:[
        {fret:2,finger:1},{fret:4,finger:3},{fret:4,finger:4},
        {fret:3,finger:2},{fret:2,finger:1},{fret:2,finger:1}
      ]},
      // A-shape barre at 9
      { startFret:9, barre:{fret:9,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:9,finger:1},{fret:11,finger:2},
        {fret:11,finger:3},{fret:11,finger:4},{fret:9,finger:1}
      ]},
    ]
  },
  "C#": {
    notes: ["C#","F","G#"], octaves: [3,3,4],
    guitars: [
      // A-shape barre at 4
      { startFret:4, barre:{fret:4,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:4,finger:1},{fret:6,finger:2},
        {fret:6,finger:3},{fret:6,finger:4},{fret:4,finger:1}
      ]},
      // E-shape barre at 9
      { startFret:9, barre:{fret:9,fromString:0,toString:5}, strings:[
        {fret:9,finger:1},{fret:11,finger:3},{fret:11,finger:4},
        {fret:10,finger:2},{fret:9,finger:1},{fret:9,finger:1}
      ]},
    ]
  },

  // ── MINOR ────────────────────────────────────────────────
  "Cm": {
    notes: ["C","Eb","G"], octaves: [3,3,4],
    guitars: [
      // Am-shape barre at 3
      { startFret:3, barre:{fret:3,fromString:0,toString:5}, strings:[
        {fret:3,finger:1},{fret:3,finger:1},{fret:5,finger:3},
        {fret:5,finger:4},{fret:4,finger:2},{fret:3,finger:1}
      ]},
      // Em-shape barre at 8
      { startFret:8, barre:{fret:8,fromString:0,toString:5}, strings:[
        {fret:8,finger:1},{fret:10,finger:3},{fret:10,finger:4},
        {fret:8,finger:1},{fret:8,finger:1},{fret:8,finger:1}
      ]},
    ]
  },
  "Dm": {
    notes: ["D","F","A"], octaves: [3,4,3],
    guitars: [
      // Open
      { startFret:1, barre:null, strings:[
        {fret:-1,finger:null},{fret:-1,finger:null},{fret:0,finger:null},
        {fret:2,finger:2},{fret:3,finger:3},{fret:1,finger:1}
      ]},
      // Am-shape barre at 5
      { startFret:5, barre:{fret:5,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:5,finger:1},{fret:7,finger:3},
        {fret:7,finger:4},{fret:6,finger:2},{fret:5,finger:1}
      ]},
      // Em-shape barre at 10
      { startFret:10, barre:{fret:10,fromString:0,toString:5}, strings:[
        {fret:10,finger:1},{fret:12,finger:3},{fret:12,finger:4},
        {fret:10,finger:1},{fret:10,finger:1},{fret:10,finger:1}
      ]},
    ]
  },
  "Em": {
    notes: ["E","G","B"], octaves: [2,3,3],
    guitars: [
      // Open
      { startFret:1, barre:null, strings:[
        {fret:0,finger:null},{fret:2,finger:2},{fret:2,finger:3},
        {fret:0,finger:null},{fret:0,finger:null},{fret:0,finger:null}
      ]},
      // Am-shape barre at 7
      { startFret:7, barre:{fret:7,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:7,finger:1},{fret:9,finger:3},
        {fret:9,finger:4},{fret:8,finger:2},{fret:7,finger:1}
      ]},
      // Em-shape barre at 12
      { startFret:12, barre:{fret:12,fromString:0,toString:5}, strings:[
        {fret:12,finger:1},{fret:14,finger:3},{fret:14,finger:4},
        {fret:12,finger:1},{fret:12,finger:1},{fret:12,finger:1}
      ]},
    ]
  },
  "Fm": {
    notes: ["F","Ab","C"], octaves: [3,3,4],
    guitars: [
      // Em-shape barre at 1
      { startFret:1, barre:{fret:1,fromString:0,toString:5}, strings:[
        {fret:1,finger:1},{fret:1,finger:1},{fret:3,finger:3},
        {fret:3,finger:4},{fret:2,finger:2},{fret:1,finger:1}
      ]},
      // Am-shape barre at 8
      { startFret:8, barre:{fret:8,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:8,finger:1},{fret:10,finger:3},
        {fret:10,finger:4},{fret:9,finger:2},{fret:8,finger:1}
      ]},
    ]
  },
  "Gm": {
    notes: ["G","Bb","D"], octaves: [3,3,4],
    guitars: [
      // Em-shape barre at 3
      { startFret:3, barre:{fret:3,fromString:0,toString:5}, strings:[
        {fret:3,finger:1},{fret:5,finger:3},{fret:5,finger:4},
        {fret:3,finger:1},{fret:3,finger:1},{fret:3,finger:1}
      ]},
      // Am-shape barre at 10
      { startFret:10, barre:{fret:10,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:10,finger:1},{fret:12,finger:3},
        {fret:12,finger:4},{fret:11,finger:2},{fret:10,finger:1}
      ]},
    ]
  },
  "Am": {
    notes: ["A","C","E"], octaves: [2,3,3],
    guitars: [
      // Open
      { startFret:1, barre:null, strings:[
        {fret:-1,finger:null},{fret:0,finger:null},{fret:2,finger:2},
        {fret:2,finger:3},{fret:1,finger:1},{fret:0,finger:null}
      ]},
      // Em-shape barre at 5
      { startFret:5, barre:{fret:5,fromString:0,toString:5}, strings:[
        {fret:5,finger:1},{fret:7,finger:3},{fret:7,finger:4},
        {fret:5,finger:1},{fret:5,finger:1},{fret:5,finger:1}
      ]},
      // Am-shape barre at 12
      { startFret:12, barre:{fret:12,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:12,finger:1},{fret:14,finger:3},
        {fret:14,finger:4},{fret:13,finger:2},{fret:12,finger:1}
      ]},
    ]
  },
  "Bm": {
    notes: ["B","D","F#"], octaves: [2,3,3],
    guitars: [
      // Am-shape barre at 2
      { startFret:2, barre:{fret:2,fromString:0,toString:5}, strings:[
        {fret:2,finger:1},{fret:2,finger:1},{fret:4,finger:3},
        {fret:4,finger:4},{fret:3,finger:2},{fret:2,finger:1}
      ]},
      // Em-shape barre at 7
      { startFret:7, barre:{fret:7,fromString:0,toString:5}, strings:[
        {fret:7,finger:1},{fret:9,finger:3},{fret:9,finger:4},
        {fret:7,finger:1},{fret:7,finger:1},{fret:7,finger:1}
      ]},
    ]
  },

  // ── FLAT / SHARP MINOR ────────────────────────────────────
  "Bbm": {
    notes: ["Bb","Db","F"], octaves: [3,3,4],
    guitars: [
      // Am-shape barre at 1
      { startFret:1, barre:{fret:1,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:1,finger:1},{fret:3,finger:3},
        {fret:3,finger:4},{fret:2,finger:2},{fret:1,finger:1}
      ]},
      // Em-shape barre at 6
      { startFret:6, barre:{fret:6,fromString:0,toString:5}, strings:[
        {fret:6,finger:1},{fret:8,finger:3},{fret:8,finger:4},
        {fret:6,finger:1},{fret:6,finger:1},{fret:6,finger:1}
      ]},
    ]
  },
  "Ebm": {
    notes: ["Eb","Gb","Bb"], octaves: [3,3,4],
    guitars: [
      // Am-shape barre at 6
      { startFret:6, barre:{fret:6,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:6,finger:1},{fret:8,finger:3},
        {fret:8,finger:4},{fret:7,finger:2},{fret:6,finger:1}
      ]},
      // Em-shape barre at 11
      { startFret:11, barre:{fret:11,fromString:0,toString:5}, strings:[
        {fret:11,finger:1},{fret:13,finger:3},{fret:13,finger:4},
        {fret:11,finger:1},{fret:11,finger:1},{fret:11,finger:1}
      ]},
    ]
  },
  "Abm": {
    notes: ["Ab","B","Eb"], octaves: [3,3,4],
    guitars: [
      // Em-shape barre at 4
      { startFret:4, barre:{fret:4,fromString:0,toString:5}, strings:[
        {fret:4,finger:1},{fret:6,finger:3},{fret:6,finger:4},
        {fret:4,finger:1},{fret:4,finger:1},{fret:4,finger:1}
      ]},
      // Am-shape barre at 11
      { startFret:11, barre:{fret:11,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:11,finger:1},{fret:13,finger:3},
        {fret:13,finger:4},{fret:12,finger:2},{fret:11,finger:1}
      ]},
    ]
  },
  "Dbm": {
    notes: ["Db","E","Ab"], octaves: [3,3,4],
    guitars: [
      // Am-shape barre at 4
      { startFret:4, barre:{fret:4,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:4,finger:1},{fret:6,finger:3},
        {fret:6,finger:4},{fret:5,finger:2},{fret:4,finger:1}
      ]},
      // Em-shape barre at 9
      { startFret:9, barre:{fret:9,fromString:0,toString:5}, strings:[
        {fret:9,finger:1},{fret:11,finger:3},{fret:11,finger:4},
        {fret:9,finger:1},{fret:9,finger:1},{fret:9,finger:1}
      ]},
    ]
  },
  "Gbm": {
    notes: ["Gb","A","Db"], octaves: [3,3,4],
    guitars: [
      // Em-shape barre at 2
      { startFret:2, barre:{fret:2,fromString:0,toString:5}, strings:[
        {fret:2,finger:1},{fret:4,finger:3},{fret:4,finger:4},
        {fret:2,finger:1},{fret:2,finger:1},{fret:2,finger:1}
      ]},
      // Am-shape barre at 9
      { startFret:9, barre:{fret:9,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:9,finger:1},{fret:11,finger:3},
        {fret:11,finger:4},{fret:10,finger:2},{fret:9,finger:1}
      ]},
    ]
  },
  "F#m": {
    notes: ["F#","A","C#"], octaves: [3,3,4],
    guitars: [
      // Em-shape barre at 2
      { startFret:2, barre:{fret:2,fromString:0,toString:5}, strings:[
        {fret:2,finger:1},{fret:4,finger:3},{fret:4,finger:4},
        {fret:2,finger:1},{fret:2,finger:1},{fret:2,finger:1}
      ]},
      // Am-shape barre at 9
      { startFret:9, barre:{fret:9,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:9,finger:1},{fret:11,finger:3},
        {fret:11,finger:4},{fret:10,finger:2},{fret:9,finger:1}
      ]},
    ]
  },
  "C#m": {
    notes: ["C#","E","G#"], octaves: [3,3,4],
    guitars: [
      // Am-shape barre at 4
      { startFret:4, barre:{fret:4,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:4,finger:1},{fret:6,finger:3},
        {fret:6,finger:4},{fret:5,finger:2},{fret:4,finger:1}
      ]},
      // Em-shape barre at 9
      { startFret:9, barre:{fret:9,fromString:0,toString:5}, strings:[
        {fret:9,finger:1},{fret:11,finger:3},{fret:11,finger:4},
        {fret:9,finger:1},{fret:9,finger:1},{fret:9,finger:1}
      ]},
    ]
  },

  // ── DOMINANT 7th ─────────────────────────────────────────
  "C7": {
    notes: ["C","E","G","Bb"], octaves: [3,3,4,4],
    guitars: [
      { startFret:1, barre:null, strings:[
        {fret:-1,finger:null},{fret:3,finger:3},{fret:2,finger:2},
        {fret:3,finger:4},{fret:1,finger:1},{fret:0,finger:null}
      ]},
      // E7-shape barre at 8
      { startFret:8, barre:{fret:8,fromString:0,toString:5}, strings:[
        {fret:8,finger:1},{fret:10,finger:3},{fret:8,finger:1},
        {fret:9,finger:2},{fret:8,finger:1},{fret:8,finger:1}
      ]},
    ]
  },
  "D7": {
    notes: ["D","F#","A","C"], octaves: [3,3,3,4],
    guitars: [
      { startFret:1, barre:null, strings:[
        {fret:-1,finger:null},{fret:-1,finger:null},{fret:0,finger:null},
        {fret:2,finger:2},{fret:1,finger:1},{fret:2,finger:3}
      ]},
      // E7-shape barre at 10
      { startFret:10, barre:{fret:10,fromString:0,toString:5}, strings:[
        {fret:10,finger:1},{fret:12,finger:3},{fret:10,finger:1},
        {fret:11,finger:2},{fret:10,finger:1},{fret:10,finger:1}
      ]},
    ]
  },
  "E7": {
    notes: ["E","G#","B","D"], octaves: [2,3,3,4],
    guitars: [
      { startFret:1, barre:null, strings:[
        {fret:0,finger:null},{fret:2,finger:2},{fret:0,finger:null},
        {fret:1,finger:1},{fret:0,finger:null},{fret:0,finger:null}
      ]},
      // E7-shape barre at 12
      { startFret:12, barre:{fret:12,fromString:0,toString:5}, strings:[
        {fret:12,finger:1},{fret:14,finger:3},{fret:12,finger:1},
        {fret:13,finger:2},{fret:12,finger:1},{fret:12,finger:1}
      ]},
    ]
  },
  "F7": {
    notes: ["F","A","C","Eb"], octaves: [3,3,4,4],
    guitars: [
      { startFret:1, barre:{fret:1,fromString:0,toString:5}, strings:[
        {fret:1,finger:1},{fret:1,finger:1},{fret:2,finger:2},
        {fret:3,finger:4},{fret:1,finger:1},{fret:1,finger:1}
      ]},
      // A7-shape barre at 8
      { startFret:8, barre:{fret:8,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:8,finger:1},{fret:10,finger:2},
        {fret:8,finger:1},{fret:10,finger:3},{fret:8,finger:1}
      ]},
    ]
  },
  "G7": {
    notes: ["G","B","D","F"], octaves: [2,3,4,4],
    guitars: [
      { startFret:1, barre:null, strings:[
        {fret:3,finger:3},{fret:2,finger:2},{fret:0,finger:null},
        {fret:0,finger:null},{fret:0,finger:null},{fret:1,finger:1}
      ]},
      // E7-shape barre at 3
      { startFret:3, barre:{fret:3,fromString:0,toString:5}, strings:[
        {fret:3,finger:1},{fret:5,finger:3},{fret:3,finger:1},
        {fret:4,finger:2},{fret:3,finger:1},{fret:3,finger:1}
      ]},
    ]
  },
  "A7": {
    notes: ["A","C#","E","G"], octaves: [2,3,3,4],
    guitars: [
      { startFret:1, barre:null, strings:[
        {fret:-1,finger:null},{fret:0,finger:null},{fret:2,finger:2},
        {fret:0,finger:null},{fret:2,finger:3},{fret:0,finger:null}
      ]},
      // E7-shape barre at 5
      { startFret:5, barre:{fret:5,fromString:0,toString:5}, strings:[
        {fret:5,finger:1},{fret:7,finger:3},{fret:5,finger:1},
        {fret:6,finger:2},{fret:5,finger:1},{fret:5,finger:1}
      ]},
    ]
  },
  "B7": {
    notes: ["B","D#","F#","A"], octaves: [2,3,3,4],
    guitars: [
      { startFret:1, barre:null, strings:[
        {fret:-1,finger:null},{fret:2,finger:2},{fret:1,finger:1},
        {fret:2,finger:3},{fret:0,finger:null},{fret:2,finger:4}
      ]},
      // E7-shape barre at 7
      { startFret:7, barre:{fret:7,fromString:0,toString:5}, strings:[
        {fret:7,finger:1},{fret:9,finger:3},{fret:7,finger:1},
        {fret:8,finger:2},{fret:7,finger:1},{fret:7,finger:1}
      ]},
    ]
  },

  // ── FLAT / SHARP DOMINANT 7th ─────────────────────────────
  "Bb7": {
    notes: ["Bb","D","F","Ab"], octaves: [3,3,4,4],
    guitars: [
      // A7-shape barre at 1
      { startFret:1, barre:{fret:1,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:1,finger:1},{fret:3,finger:2},
        {fret:1,finger:1},{fret:3,finger:3},{fret:1,finger:1}
      ]},
      // E7-shape barre at 6
      { startFret:6, barre:{fret:6,fromString:0,toString:5}, strings:[
        {fret:6,finger:1},{fret:8,finger:3},{fret:6,finger:1},
        {fret:7,finger:2},{fret:6,finger:1},{fret:6,finger:1}
      ]},
    ]
  },
  "Eb7": {
    notes: ["Eb","G","Bb","Db"], octaves: [3,3,4,4],
    guitars: [
      // A7-shape barre at 6
      { startFret:6, barre:{fret:6,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:6,finger:1},{fret:8,finger:2},
        {fret:6,finger:1},{fret:8,finger:3},{fret:6,finger:1}
      ]},
      // E7-shape barre at 11
      { startFret:11, barre:{fret:11,fromString:0,toString:5}, strings:[
        {fret:11,finger:1},{fret:13,finger:3},{fret:11,finger:1},
        {fret:12,finger:2},{fret:11,finger:1},{fret:11,finger:1}
      ]},
    ]
  },
  "Ab7": {
    notes: ["Ab","C","Eb","Gb"], octaves: [3,3,4,4],
    guitars: [
      // E7-shape barre at 4
      { startFret:4, barre:{fret:4,fromString:0,toString:5}, strings:[
        {fret:4,finger:1},{fret:6,finger:3},{fret:4,finger:1},
        {fret:5,finger:2},{fret:4,finger:1},{fret:4,finger:1}
      ]},
    ]
  },
  "Db7": {
    notes: ["Db","F","Ab","B"], octaves: [3,3,4,4],
    guitars: [
      // E7-shape barre at 9
      { startFret:9, barre:{fret:9,fromString:0,toString:5}, strings:[
        {fret:9,finger:1},{fret:11,finger:3},{fret:9,finger:1},
        {fret:10,finger:2},{fret:9,finger:1},{fret:9,finger:1}
      ]},
    ]
  },
  "Gb7": {
    notes: ["Gb","Bb","Db","E"], octaves: [3,3,4,4],
    guitars: [
      // E7-shape barre at 2
      { startFret:2, barre:{fret:2,fromString:0,toString:5}, strings:[
        {fret:2,finger:1},{fret:4,finger:3},{fret:2,finger:1},
        {fret:3,finger:2},{fret:2,finger:1},{fret:2,finger:1}
      ]},
    ]
  },
  "F#7": {
    notes: ["F#","A#","C#","E"], octaves: [3,3,4,4],
    guitars: [
      // E7-shape barre at 2
      { startFret:2, barre:{fret:2,fromString:0,toString:5}, strings:[
        {fret:2,finger:1},{fret:4,finger:3},{fret:2,finger:1},
        {fret:3,finger:2},{fret:2,finger:1},{fret:2,finger:1}
      ]},
    ]
  },
  "C#7": {
    notes: ["C#","F","G#","B"], octaves: [3,3,4,4],
    guitars: [
      // E7-shape barre at 9
      { startFret:9, barre:{fret:9,fromString:0,toString:5}, strings:[
        {fret:9,finger:1},{fret:11,finger:3},{fret:9,finger:1},
        {fret:10,finger:2},{fret:9,finger:1},{fret:9,finger:1}
      ]},
    ]
  },

  // ── MAJOR 7th ─────────────────────────────────────────────
  "Cmaj7": {
    notes: ["C","E","G","B"], octaves: [3,3,4,4],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:3,finger:3},{fret:2,finger:2},
      {fret:0,finger:null},{fret:0,finger:null},{fret:0,finger:null}
    ]}]
  },
  "Dmaj7": {
    notes: ["D","F#","A","C#"], octaves: [3,3,3,4],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:-1,finger:null},{fret:0,finger:null},
      {fret:2,finger:2},{fret:2,finger:3},{fret:2,finger:4}
    ]}]
  },
  "Emaj7": {
    notes: ["E","G#","B","D#"], octaves: [2,3,3,4],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:0,finger:null},{fret:2,finger:2},{fret:1,finger:1},
      {fret:1,finger:1},{fret:0,finger:null},{fret:0,finger:null}
    ]}]
  },
  "Gmaj7": {
    notes: ["G","B","D","F#"], octaves: [2,3,4,4],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:3,finger:3},{fret:2,finger:2},{fret:0,finger:null},
      {fret:0,finger:null},{fret:0,finger:null},{fret:2,finger:1}
    ]}]
  },
  "Amaj7": {
    notes: ["A","C#","E","G#"], octaves: [2,3,3,4],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:0,finger:null},{fret:2,finger:2},
      {fret:1,finger:1},{fret:2,finger:3},{fret:0,finger:null}
    ]}]
  },

  // ── FLAT / SHARP MAJOR 7th ────────────────────────────────
  "Bbmaj7": {
    notes: ["Bb","D","F","A"], octaves: [3,3,4,4],
    guitars: [
      // Amaj7-shape barre at 1
      { startFret:1, barre:{fret:1,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:1,finger:1},{fret:3,finger:3},
        {fret:2,finger:2},{fret:3,finger:4},{fret:1,finger:1}
      ]},
    ]
  },
  "Ebmaj7": {
    notes: ["Eb","G","Bb","D"], octaves: [3,3,4,4],
    guitars: [
      // Amaj7-shape barre at 6
      { startFret:6, barre:{fret:6,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:6,finger:1},{fret:8,finger:3},
        {fret:7,finger:2},{fret:8,finger:4},{fret:6,finger:1}
      ]},
      // Emaj7-shape barre at 11
      { startFret:11, barre:{fret:11,fromString:0,toString:5}, strings:[
        {fret:11,finger:1},{fret:13,finger:4},{fret:12,finger:2},
        {fret:12,finger:3},{fret:11,finger:1},{fret:11,finger:1}
      ]},
    ]
  },
  "Abmaj7": {
    notes: ["Ab","C","Eb","G"], octaves: [3,3,4,4],
    guitars: [
      // Emaj7-shape barre at 4
      { startFret:4, barre:{fret:4,fromString:0,toString:5}, strings:[
        {fret:4,finger:1},{fret:6,finger:4},{fret:5,finger:2},
        {fret:5,finger:3},{fret:4,finger:1},{fret:4,finger:1}
      ]},
    ]
  },
  "Dbmaj7": {
    notes: ["Db","F","Ab","C"], octaves: [3,3,4,4],
    guitars: [
      // Amaj7-shape barre at 4
      { startFret:4, barre:{fret:4,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:4,finger:1},{fret:6,finger:3},
        {fret:5,finger:2},{fret:6,finger:4},{fret:4,finger:1}
      ]},
    ]
  },

  // ── MINOR 7th ─────────────────────────────────────────────
  "Cm7": {
    notes: ["C","Eb","G","Bb"], octaves: [3,3,4,4],
    guitars: [
      { startFret:3, barre:{fret:3,fromString:0,toString:5}, strings:[
        {fret:3,finger:1},{fret:3,finger:1},{fret:5,finger:4},
        {fret:3,finger:1},{fret:4,finger:3},{fret:3,finger:1}
      ]},
      // Em7-shape barre at 8
      { startFret:8, barre:{fret:8,fromString:0,toString:5}, strings:[
        {fret:8,finger:1},{fret:10,finger:3},{fret:8,finger:1},
        {fret:8,finger:1},{fret:8,finger:1},{fret:8,finger:1}
      ]},
    ]
  },
  "Dm7": {
    notes: ["D","F","A","C"], octaves: [3,4,3,4],
    guitars: [
      { startFret:1, barre:null, strings:[
        {fret:-1,finger:null},{fret:-1,finger:null},{fret:0,finger:null},
        {fret:2,finger:2},{fret:1,finger:1},{fret:1,finger:1}
      ]},
      // Am7-shape barre at 5
      { startFret:5, barre:{fret:5,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:5,finger:1},{fret:7,finger:3},
        {fret:5,finger:1},{fret:6,finger:2},{fret:5,finger:1}
      ]},
    ]
  },
  "Em7": {
    notes: ["E","G","B","D"], octaves: [2,3,3,4],
    guitars: [
      { startFret:1, barre:null, strings:[
        {fret:0,finger:null},{fret:2,finger:2},{fret:0,finger:null},
        {fret:0,finger:null},{fret:0,finger:null},{fret:0,finger:null}
      ]},
      // Am7-shape barre at 7
      { startFret:7, barre:{fret:7,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:7,finger:1},{fret:9,finger:3},
        {fret:7,finger:1},{fret:8,finger:2},{fret:7,finger:1}
      ]},
    ]
  },
  "Am7": {
    notes: ["A","C","E","G"], octaves: [2,3,3,4],
    guitars: [
      { startFret:1, barre:null, strings:[
        {fret:-1,finger:null},{fret:0,finger:null},{fret:2,finger:2},
        {fret:0,finger:null},{fret:1,finger:1},{fret:0,finger:null}
      ]},
      // Em7-shape barre at 5
      { startFret:5, barre:{fret:5,fromString:0,toString:5}, strings:[
        {fret:5,finger:1},{fret:7,finger:3},{fret:5,finger:1},
        {fret:5,finger:1},{fret:5,finger:1},{fret:5,finger:1}
      ]},
    ]
  },
  "Bm7": {
    notes: ["B","D","F#","A"], octaves: [2,3,3,4],
    guitars: [
      { startFret:2, barre:{fret:2,fromString:0,toString:5}, strings:[
        {fret:2,finger:1},{fret:2,finger:1},{fret:4,finger:3},
        {fret:2,finger:1},{fret:3,finger:2},{fret:2,finger:1}
      ]},
      // Em7-shape barre at 7
      { startFret:7, barre:{fret:7,fromString:0,toString:5}, strings:[
        {fret:7,finger:1},{fret:9,finger:3},{fret:7,finger:1},
        {fret:7,finger:1},{fret:7,finger:1},{fret:7,finger:1}
      ]},
    ]
  },

  // ── FLAT / SHARP MINOR 7th ────────────────────────────────
  "Bbm7": {
    notes: ["Bb","Db","F","Ab"], octaves: [3,3,4,4],
    guitars: [
      // Am7-shape barre at 1
      { startFret:1, barre:{fret:1,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:1,finger:1},{fret:3,finger:3},
        {fret:1,finger:1},{fret:2,finger:2},{fret:1,finger:1}
      ]},
      // Em7-shape barre at 6
      { startFret:6, barre:{fret:6,fromString:0,toString:5}, strings:[
        {fret:6,finger:1},{fret:8,finger:3},{fret:6,finger:1},
        {fret:6,finger:1},{fret:6,finger:1},{fret:6,finger:1}
      ]},
    ]
  },
  "Ebm7": {
    notes: ["Eb","Gb","Bb","Db"], octaves: [3,3,4,4],
    guitars: [
      // Am7-shape barre at 6
      { startFret:6, barre:{fret:6,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:6,finger:1},{fret:8,finger:3},
        {fret:6,finger:1},{fret:7,finger:2},{fret:6,finger:1}
      ]},
      // Em7-shape barre at 11
      { startFret:11, barre:{fret:11,fromString:0,toString:5}, strings:[
        {fret:11,finger:1},{fret:13,finger:3},{fret:11,finger:1},
        {fret:11,finger:1},{fret:11,finger:1},{fret:11,finger:1}
      ]},
    ]
  },
  "Abm7": {
    notes: ["Ab","B","Eb","Gb"], octaves: [3,3,4,4],
    guitars: [
      // Em7-shape barre at 4
      { startFret:4, barre:{fret:4,fromString:0,toString:5}, strings:[
        {fret:4,finger:1},{fret:6,finger:3},{fret:4,finger:1},
        {fret:4,finger:1},{fret:4,finger:1},{fret:4,finger:1}
      ]},
    ]
  },
  "F#m7": {
    notes: ["F#","A","C#","E"], octaves: [3,3,4,4],
    guitars: [
      // Em7-shape barre at 2
      { startFret:2, barre:{fret:2,fromString:0,toString:5}, strings:[
        {fret:2,finger:1},{fret:4,finger:3},{fret:2,finger:1},
        {fret:2,finger:1},{fret:2,finger:1},{fret:2,finger:1}
      ]},
    ]
  },
  "C#m7": {
    notes: ["C#","E","G#","B"], octaves: [3,3,4,4],
    guitars: [
      // Am7-shape barre at 4
      { startFret:4, barre:{fret:4,fromString:1,toString:5}, strings:[
        {fret:-1,finger:null},{fret:4,finger:1},{fret:6,finger:3},
        {fret:4,finger:1},{fret:5,finger:2},{fret:4,finger:1}
      ]},
    ]
  },

  // ── sus2 ──────────────────────────────────────────────────
  "Csus2": {
    notes: ["C","D","G"], octaves: [3,3,4],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:3,finger:3},{fret:0,finger:null},
      {fret:0,finger:null},{fret:1,finger:1},{fret:0,finger:null}
    ]}]
  },
  "Dsus2": {
    notes: ["D","E","A"], octaves: [3,3,3],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:-1,finger:null},{fret:0,finger:null},
      {fret:2,finger:2},{fret:3,finger:3},{fret:0,finger:null}
    ]}]
  },
  "Gsus2": {
    notes: ["G","A","D"], octaves: [3,3,4],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:3,finger:3},{fret:0,finger:null},{fret:0,finger:null},
      {fret:0,finger:null},{fret:1,finger:1},{fret:3,finger:4}
    ]}]
  },
  "Asus2": {
    notes: ["A","B","E"], octaves: [2,2,3],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:0,finger:null},{fret:2,finger:2},
      {fret:2,finger:3},{fret:0,finger:null},{fret:0,finger:null}
    ]}]
  },

  // ── sus4 ──────────────────────────────────────────────────
  "Csus4": {
    notes: ["C","F","G"], octaves: [3,3,4],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:3,finger:3},{fret:3,finger:4},
      {fret:0,finger:null},{fret:1,finger:1},{fret:1,finger:1}
    ]}]
  },
  "Dsus4": {
    notes: ["D","G","A"], octaves: [3,4,3],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:-1,finger:null},{fret:0,finger:null},
      {fret:2,finger:2},{fret:3,finger:3},{fret:3,finger:4}
    ]}]
  },
  "Gsus4": {
    notes: ["G","C","D"], octaves: [3,4,4],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:3,finger:3},{fret:3,finger:4},{fret:0,finger:null},
      {fret:0,finger:null},{fret:1,finger:1},{fret:1,finger:1}
    ]}]
  },
  "Asus4": {
    notes: ["A","D","E"], octaves: [2,3,3],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:0,finger:null},{fret:2,finger:2},
      {fret:2,finger:3},{fret:3,finger:4},{fret:0,finger:null}
    ]}]
  },

  // ── add9 ──────────────────────────────────────────────────
  "Cadd9": {
    notes: ["C","D","E","G"], octaves: [3,4,3,4],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:3,finger:3},{fret:2,finger:2},
      {fret:0,finger:null},{fret:3,finger:4},{fret:0,finger:null}
    ]}]
  },
  "Dadd9": {
    notes: ["D","E","F#","A"], octaves: [3,4,3,3],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:-1,finger:null},{fret:0,finger:null},
      {fret:2,finger:2},{fret:3,finger:3},{fret:0,finger:null}
    ]}]
  },
  "Gadd9": {
    notes: ["G","A","B","D"], octaves: [3,3,3,4],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:3,finger:2},{fret:2,finger:1},{fret:0,finger:null},
      {fret:2,finger:3},{fret:0,finger:null},{fret:3,finger:4}
    ]}]
  },
  "Aadd9": {
    notes: ["A","B","C#","E"], octaves: [2,2,3,3],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:0,finger:null},{fret:2,finger:2},
      {fret:4,finger:4},{fret:2,finger:1},{fret:0,finger:null}
    ]}]
  },

  // ── DIMINISHED ────────────────────────────────────────────
  "Cdim": {
    notes: ["C","Eb","Gb"], octaves: [3,3,4],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:3,finger:3},{fret:1,finger:1},
      {fret:2,finger:2},{fret:1,finger:1},{fret:-1,finger:null}
    ]}]
  },
  "Ddim": {
    notes: ["D","F","Ab"], octaves: [3,3,4],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:-1,finger:null},{fret:0,finger:null},
      {fret:1,finger:1},{fret:3,finger:3},{fret:1,finger:2}
    ]}]
  },
  "Edim": {
    notes: ["E","G","Bb"], octaves: [2,3,3],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:0,finger:null},{fret:1,finger:1},{fret:2,finger:3},
      {fret:2,finger:4},{fret:-1,finger:null},{fret:-1,finger:null}
    ]}]
  },
  "Gdim": {
    notes: ["G","Bb","Db"], octaves: [3,3,4],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:3,finger:3},{fret:1,finger:1},{fret:2,finger:2},
      {fret:3,finger:4},{fret:-1,finger:null},{fret:-1,finger:null}
    ]}]
  },
  "Adim": {
    notes: ["A","C","Eb"], octaves: [2,3,3],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:0,finger:null},{fret:1,finger:1},
      {fret:2,finger:3},{fret:1,finger:2},{fret:-1,finger:null}
    ]}]
  },
  "Bdim": {
    notes: ["B","D","F"], octaves: [2,3,3],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:2,finger:2},{fret:0,finger:null},
      {fret:0,finger:null},{fret:0,finger:null},{fret:1,finger:1}
    ]}]
  },

  // ── AUGMENTED ─────────────────────────────────────────────
  "Caug": {
    notes: ["C","E","G#"], octaves: [3,3,4],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:3,finger:4},{fret:2,finger:3},
      {fret:1,finger:1},{fret:1,finger:2},{fret:0,finger:null}
    ]}]
  },
  "Daug": {
    notes: ["D","F#","A#"], octaves: [3,3,3],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:-1,finger:null},{fret:0,finger:null},
      {fret:3,finger:3},{fret:3,finger:4},{fret:2,finger:2}
    ]}]
  },
  "Eaug": {
    notes: ["E","G#","B#"], octaves: [2,3,3],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:0,finger:null},{fret:3,finger:4},{fret:2,finger:3},
      {fret:1,finger:1},{fret:1,finger:2},{fret:0,finger:null}
    ]}]
  },
  "Gaug": {
    notes: ["G","B","D#"], octaves: [3,3,4],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:3,finger:3},{fret:2,finger:2},{fret:1,finger:1},
      {fret:0,finger:null},{fret:-1,finger:null},{fret:-1,finger:null}
    ]}]
  },
  "Aaug": {
    notes: ["A","C#","F"], octaves: [2,3,3],
    guitars: [{ startFret:1, barre:null, strings:[
      {fret:-1,finger:null},{fret:0,finger:null},{fret:3,finger:4},
      {fret:2,finger:3},{fret:2,finger:2},{fret:1,finger:1}
    ]}]
  }
};
