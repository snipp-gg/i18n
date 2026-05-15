# Contributing translations

Thanks for helping translate Snipp. This guide covers everything you need.

## How the files work

Every file is a flat JSON object. The **key** is a stable ID, the **value** is the text shown to users:

```json
{
  "SETTINGS_PREFS_AUTO_COMPRESSION_LABEL": "Automatic Compression",
  "SETTINGS_PREFS_PARTY_MODE_LABEL": "Party Mode"
}
```

`source/en-US.json` is the source of truth. Every other locale lives in `strings/` and has the **exact same set of keys**, so you only ever change the values.

## Translating

1. Pick a locale file in `strings/` (e.g. `strings/de-DE.json`).
2. Find keys whose value still reads like English, or that you want to improve.
3. Translate the **value** only. Never change a key.
4. Open a pull request (see [Submitting a pull request](#submitting-a-pull-request) below).

## Submitting a pull request

You don't need write access to this repo. The standard GitHub fork-and-PR flow:

1. **Fork** this repo on GitHub (the **Fork** button, top right of the repo page).
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/<your-username>/i18n.git
   cd i18n
   ```
3. **Create a branch** for your change:
   ```bash
   git checkout -b translate-de
   ```
4. **Edit the locale file** in `strings/` and save.
5. **Validate** your change:
   ```bash
   node validate.js
   ```
   Fix anything it reports.
6. **Commit and push** to your fork:
   ```bash
   git add strings/<code>.json
   git commit -m "Improve German translations"
   git push origin translate-de
   ```
7. **Open a pull request** from your fork's branch to `snipp-gg/i18n` `main`. GitHub shows a "Compare & pull request" button after you push.
8. A maintainer reviews and merges. Translations ship to the live site on the next release.

If you don't want to use the command line, GitHub's web editor works too: fork the repo, open the locale file, click the pencil icon, edit, and propose changes. GitHub creates the branch and PR for you.

### Rules

- **Never add, remove, or rename keys.** New keys come from the Snipp codebase via `en-US.json`. If a key is missing in your locale, the site falls back to English, so open an issue rather than inventing a key.
- **Keep placeholders identical.** Text like `{count}`, `{username}`, `{email}` is replaced at runtime. Keep the exact same placeholders, spelled the same way. You may move them to fit your language's word order.
  ```json
  "en": "Adding {count} files",
  "de": "{count} Dateien werden hinzugefügt"
  ```
- **Match the casing convention.** Short UI labels (buttons, setting names, menu items, section headings) use Title Case in every language. Capitalize each significant word, keep small joiners lowercase (de/do/da, der/die/das, de/del/la, etc.). Full sentences use normal sentence case for your language.
- **Keep it valid JSON.** Double quotes, comma after every entry except the last, no trailing commas. Run the check below before opening a PR.
- **Don't translate brand or technical tokens.** Leave `Snipp`, `Discord`, `ShareX`, `URL`, `API`, `PLUS`, and file extensions like `PNG`/`MP4` as-is.
- **Preserve leading/trailing spaces** if a value has them. They're intentional (used for sentence joining).

## Validate before you submit

From the repo root:

```bash
node validate.js
```

It checks that every locale has the same keys as `en-US.json` and that placeholders match. Fix anything it reports before opening your PR.

## Adding a new language

1. Open an issue proposing the language and its locale code (BCP-47, e.g. `fr-FR`, `pt-BR`).
2. Copy `source/en-US.json` to `strings/<code>.json` (e.g. `it-IT.json`, BCP-47).
3. Translate every value.
4. Open a PR. A maintainer registers the locale in the Snipp website.

## Pull request checklist

- [ ] Only values changed, no keys touched
- [ ] Placeholders (`{...}`) preserved exactly
- [ ] `node validate.js` passes
- [ ] One language per PR keeps review simple