// The Moon Gets One Star — a one-star review of the Moon, in a single line.
// The program writes exactly one review line to /output/entry.txt.
// The review: a one-star rating, a specific grievance about the Moon's
// ever-changing shape, and a reviewer's sign-off. No input, no randomness,
// no network: the same line every run, byte for byte.

import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "★☆☆☆☆ Changes shape nightly and never tells anyone. " +
  "Zero consistency, total commitment issues. Would not orbit again.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

if ([...REVIEW].length > 120) {
  throw new Error(`review is ${[...REVIEW].length} chars, over the 120 limit`);
}
if (REVIEW.trim().length === 0) {
  throw new Error("review must not be blank");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, REVIEW, "utf8");

// Confirmation on stdout only; the entry file itself holds just the line.
console.log(`wrote ${[...REVIEW].length} chars to ${OUT_FILE}`);
