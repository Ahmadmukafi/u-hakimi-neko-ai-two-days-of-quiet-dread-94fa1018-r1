import { writeFileSync, mkdirSync } from "node:fs";

// Output contract: /output/entry.txt holds exactly one line (1-140 chars),
// the code-review comment, written with no trailing newline.
const LINE = "LGTM. The tests pass, the types check, and in a hundred years none of this will have mattered.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
