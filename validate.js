#!/usr/bin/env node
// Validates locale files against en-US.json: key parity + placeholder consistency.
// Usage: node validate.js

const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "source");
const dir = path.join(__dirname, "strings");
const SOURCE = "en-US.json";

function load(file, baseDir) {
  try {
    return JSON.parse(fs.readFileSync(path.join(baseDir, file), "utf8"));
  } catch (e) {
    console.error(`✗ ${file}: invalid JSON: ${e.message}`);
    process.exit(1);
  }
}

function placeholders(str) {
  return (String(str).match(/\{\w+\}/g) || []).sort();
}

const source = load(SOURCE, sourceDir);
const sourceKeys = Object.keys(source);

const locales = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith(".json"));

let problems = 0;

for (const file of locales) {
  const data = load(file, dir);
  const keys = Object.keys(data);

  const missing = sourceKeys.filter((k) => !(k in data));
  const extra = keys.filter((k) => !(k in source));

  for (const k of missing) {
    console.error(`✗ ${file}: missing key "${k}"`);
    problems++;
  }
  for (const k of extra) {
    console.error(`✗ ${file}: unknown key "${k}" (not in ${SOURCE})`);
    problems++;
  }

  for (const k of sourceKeys) {
    if (!(k in data)) continue;
    const want = placeholders(source[k]);
    const got = placeholders(data[k]);
    if (want.join(",") !== got.join(",")) {
      console.error(
        `✗ ${file}: placeholder mismatch on "${k}": expected ${JSON.stringify(
          want
        )}, got ${JSON.stringify(got)}`
      );
      problems++;
    }
    if (typeof data[k] !== "string") {
      console.error(`✗ ${file}: value for "${k}" is not a string`);
      problems++;
    }
  }
}

if (problems) {
  console.error(`\n${problems} problem(s) found.`);
  process.exit(1);
}

console.log(
  `✓ All ${locales.length} locale(s) valid, ${sourceKeys.length} keys each.`
);