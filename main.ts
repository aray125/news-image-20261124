// news-image-20261124 entry: "The World Today — 24 November 2026".
// Copies the front-page image (entry.png, beside this file) to the output
// directory as entry.png. Deterministic: the same input bytes always produce
// the same output bytes. No network access; Node 22 standard library only.
//
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

function sha256(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}

const source = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error(`entry image not found: ${source}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const sourceHash = sha256(source);
const targetHash = sha256(target);
if (sourceHash !== targetHash) {
  throw new Error(`copy mismatch: source sha256 ${sourceHash}, output sha256 ${targetHash}`);
}

console.log(`wrote ${target} (sha256 ${targetHash})`);
