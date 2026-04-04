// Scale & Mode database
// intervals: semitones from root (0 = root, always included)

window.SCALE_TYPES = {
  "major":            { nameHe: "מז'ור",           intervals: [0,2,4,5,7,9,11] },
  "natural-minor":    { nameHe: "מינור טבעי",      intervals: [0,2,3,5,7,8,10] },
  "harmonic-minor":   { nameHe: "מינור הרמוני",    intervals: [0,2,3,5,7,8,11] },
  "melodic-minor":    { nameHe: "מינור מלודי",     intervals: [0,2,3,5,7,9,11] },
  "dorian":           { nameHe: "דוריאן",          intervals: [0,2,3,5,7,9,10] },
  "phrygian":         { nameHe: "פריגי",           intervals: [0,1,3,5,7,8,10] },
  "lydian":           { nameHe: "לידי",            intervals: [0,2,4,6,7,9,11] },
  "mixolydian":       { nameHe: "מיקסולידי",       intervals: [0,2,4,5,7,9,10] },
  "locrian":          { nameHe: "לוקרי",           intervals: [0,1,3,5,6,8,10] },
  "pentatonic-major": { nameHe: "פנטטוני מז'ור",   intervals: [0,2,4,7,9] },
  "pentatonic-minor": { nameHe: "פנטטוני מינור",   intervals: [0,3,5,7,10] },
  "blues":            { nameHe: "בלוז",            intervals: [0,3,5,6,7,10] },
};
