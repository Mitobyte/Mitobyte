#!/usr/bin/env node
/**
 * Resize site images to display size and convert them to WebP.
 *
 * The site runs on Cloudflare Workers with `images.unoptimized: true`, so
 * next/image serves whatever file is imported, byte for byte. This script is
 * the substitute for a runtime optimizer: run it on new photos before you
 * import them, and they ship at a sensible size.
 *
 * Usage:
 *   node scripts/optimize-images.mjs <file-or-dir>... [--dry-run] [--width N]
 *   npm run images -- src/common/assets/images/events/hackreation
 *
 * For each jpg/jpeg/png/webp it finds, the script:
 *   - auto-rotates from EXIF and strips metadata (drops GPS from phone photos)
 *   - resizes down to the target width, never up
 *   - writes <name>.webp next to the original and deletes the original
 *   - rewrites `common/assets/...` imports under src/ to the new extension
 * A file is left untouched when WebP would not save at least 10%.
 *
 * Target width is --width if given, otherwise chosen by folder:
 *   logos-third-party  100   Meetup/Eventbrite marks inside buttons
 *   logos-*            400   rendered at 200px or less
 *   images/heroes     1920   full-bleed backdrop
 *   images/showcase   1200
 *   images/team        800
 *   images/events     1200   two-column gallery inside a 6xl container
 *   anything else     1600
 * A few event photos render wider than a gallery cell; see WIDE_HEROES.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ASSETS = path.join(ROOT, "src", "common", "assets");
const SRC = path.join(ROOT, "src");

const RASTER = new Set([".jpg", ".jpeg", ".png", ".webp"]);

/** Width overrides keyed by asset path without extension. */
const WIDE_HEROES = {
  "images/events/code-and-coffee/codeCoffee1": 1800, // home hero, 900px
  "images/events/code-and-brews/candb": 1800, // home about-us, 900px
  "images/events/code-and-brews/IMG_4372": 1400, // team hero, 680px
};

const FOLDER_WIDTHS = [
  [/^logos-third-party\//, 100], // Meetup/Eventbrite marks in buttons, ~35px
  [/^logos-/, 400],
  [/^images\/heroes\//, 1920],
  [/^images\/showcase\//, 1200],
  [/^images\/team\//, 800],
  [/^images\/events\//, 1200],
];
const DEFAULT_WIDTH = 1600;
const MIN_SAVINGS = 0.1;

function targetWidth(rel, override) {
  if (override) return override;
  const noExt = rel.replace(/\.[^.]+$/, "");
  if (WIDE_HEROES[noExt]) return WIDE_HEROES[noExt];
  for (const [re, w] of FOLDER_WIDTHS) if (re.test(rel)) return w;
  return DEFAULT_WIDTH;
}

async function collect(inputs) {
  const files = [];
  for (const input of inputs) {
    const abs = path.resolve(input);
    const stat = await fs.stat(abs);
    if (stat.isDirectory()) {
      for (const entry of await fs.readdir(abs, {
        withFileTypes: true,
        recursive: true,
      })) {
        if (!entry.isFile()) continue;
        const p = path.join(entry.parentPath ?? entry.path, entry.name);
        if (RASTER.has(path.extname(p).toLowerCase())) files.push(p);
      }
    } else if (RASTER.has(path.extname(abs).toLowerCase())) {
      files.push(abs);
    }
  }
  return [...new Set(files)].sort();
}

async function encode(file, rel, width) {
  const isLogo = rel.startsWith("logos-");
  const isPng = path.extname(file).toLowerCase() === ".png";
  const pipeline = sharp(file)
    .rotate()
    .resize({ width, withoutEnlargement: true });
  // Logos are flat colour with hard edges and often transparent; keep them
  // lossless. Everything else (photos, screenshots) is fine lossy.
  const options = isLogo ? { lossless: true } : { quality: isPng ? 85 : 80 };
  const buffer = await pipeline.webp(options).toBuffer();
  const meta = await sharp(buffer).metadata();
  return { buffer, width: meta.width, height: meta.height };
}

async function rewriteImports(oldRel, newRel) {
  let touched = 0;
  const from = `common/assets/${oldRel}`;
  const to = `common/assets/${newRel}`;
  for (const entry of await fs.readdir(SRC, {
    withFileTypes: true,
    recursive: true,
  })) {
    if (!entry.isFile() || !/\.(tsx?|mdx?)$/.test(entry.name)) continue;
    const p = path.join(entry.parentPath ?? entry.path, entry.name);
    const text = await fs.readFile(p, "utf8");
    if (!text.includes(from)) continue;
    await fs.writeFile(p, text.split(from).join(to));
    touched++;
  }
  return touched;
}

const kb = (n) => `${Math.round(n / 1024)}`.padStart(5) + " KB";

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const widthFlag = args.indexOf("--width");
  const override = widthFlag !== -1 ? Number(args[widthFlag + 1]) : undefined;
  const inputs = args.filter(
    (a, i) => !a.startsWith("--") && (widthFlag === -1 || i !== widthFlag + 1),
  );
  if (inputs.length === 0) {
    console.error(
      "usage: optimize-images.mjs <file-or-dir>... [--dry-run] [--width N]",
    );
    process.exit(1);
  }

  const files = await collect(inputs);
  let before = 0;
  let after = 0;
  let converted = 0;

  for (const file of files) {
    const rel = path.relative(ASSETS, file).split(path.sep).join("/");
    if (rel.startsWith("..")) {
      console.log(`skip  ${file} (outside src/common/assets)`);
      continue;
    }
    const orig = await fs.stat(file);
    const origMeta = await sharp(file).metadata();
    const width = targetWidth(rel, override);
    const out = await encode(file, rel, width);
    before += orig.size;

    const dims = `${origMeta.width}x${origMeta.height} -> ${out.width}x${out.height}`;
    if (out.buffer.length > orig.size * (1 - MIN_SAVINGS)) {
      after += orig.size;
      console.log(
        `keep  ${kb(orig.size)}            ${rel}  (webp would be ${kb(out.buffer.length).trim()})`,
      );
      continue;
    }

    after += out.buffer.length;
    converted++;
    const newRel = rel.replace(/\.[^.]+$/, ".webp");
    console.log(
      `${dryRun ? "would" : "write"} ${kb(orig.size)} -> ${kb(out.buffer.length)}  ${newRel}  ${dims}`,
    );
    if (dryRun) continue;

    await fs.writeFile(path.join(ASSETS, newRel), out.buffer);
    if (newRel !== rel) {
      await fs.unlink(file);
      const n = await rewriteImports(rel, newRel);
      if (n)
        console.log(`      rewrote imports in ${n} file${n === 1 ? "" : "s"}`);
    }
  }

  console.log(
    `\n${converted}/${files.length} files ${dryRun ? "would be " : ""}converted: ${kb(before).trim()} -> ${kb(after).trim()}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
