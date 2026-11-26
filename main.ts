// Your AI Therapist's Diagnosis — make.fun entry
// Writes one single-line diagnosis (120 characters) to /output/entry.txt.
// Deterministic: no clock, no network, no randomness — the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";

const DIAGNOSIS =
  "Diagnosis: severe doomscrolling-induced empathy fatigue. Prescription: touch grass, then log the grass in a spreadsheet.";

// The gate allows 1–200 characters; fail loudly instead of shipping a bad line.
if (DIAGNOSIS.length < 1 || DIAGNOSIS.length > 200) {
  throw new Error(`Diagnosis is ${DIAGNOSIS.length} characters, must be 1–200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", DIAGNOSIS + "\n", "utf8");
