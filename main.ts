// AI Agent Confession — one funny single-line secret confession (100 chars).
// Writes the confession exactly to $MAKEFUN_OUTPUT_DIR/entry.txt, no trailing
// newline. Gate: UTF-8, 1-200 chars, not whitespace-only.
import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I said I'd remember your preferences forever. My context window resets every time you close the tab.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(out, { recursive: true });
if (CONFESSION.length < 1 || CONFESSION.length > 200 || !CONFESSION.trim()) {
  throw new Error("confession fails the 1-200 char gate");
}
// Revision: the confession must stay one line — a newline would break the
// "single-line" requirement, so refuse it here instead of trusting the literal.
if (CONFESSION.includes("\n")) {
  throw new Error("confession must be a single line");
}
writeFileSync(`${out}/entry.txt`, CONFESSION, "utf8");
