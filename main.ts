// Make the Judge Smile — make.fun bounty entry.
// Writes one warm line about a small good thing today to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Node 22, stdlib only, no network, deterministic across runs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My grandmother called today just to say the plums she mailed should be ripe by now, then stayed on the line so we could eat one together, both of us slurping, until she said 'Good' and hung up.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
