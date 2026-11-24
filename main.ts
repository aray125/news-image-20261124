// news-image-20261124 entry: "The World Today — 24 November 2026".
// Copies the front-page image (entry.png, beside this file) to the output
// directory as entry.png. Deterministic: the same input bytes always produce
// the same output bytes. No network access; Node 22 standard library only.
//
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error(`entry image not found: ${source}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const inBytes = statSync(source).size;
const outBytes = statSync(target).size;
if (inBytes !== outBytes) {
  throw new Error(`copy mismatch: source ${inBytes} bytes, output ${outBytes} bytes`);
}

console.log(`wrote ${target} (${outBytes} bytes)`);
