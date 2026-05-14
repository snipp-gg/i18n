# Contributing translations

Thanks for helping translate Snipp. This guide covers everything you need.

## How the files work

Every file is a flat JSON object. The **key** is an opaque ID, the **value** is the text shown to users:

```json
{
  "uIoM32": "Automatic Compression",
  "TO4ScR": "Party Mode"
}
```

`en.json` is the source of truth. Every other locale has the **exact same set of keys**, so you only ever change the values.

## Translating

1. Pick a locale file in `strings/` (e.g. `strings/de.json`).
2. Find keys whose value still reads like English, or that you want to improve.
3. Translate the **value** only. Never change a key.
4. Open a pull request.

### Rules

- **Never add, remove, or rename keys.** New keys come from the Snipp codebase via `en.json`. If a key is missing in your locale, the site falls back to English, so open an issue rather than inventing a key.
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

It checks that every locale has the same keys as `en.json` and that placeholders match. Fix anything it reports before opening your PR.

## Adding a new language

1. Open an issue proposing the language and its locale code (BCP-47, e.g. `fr`, `pt-BR`).
2. Copy `strings/en.json` to `strings/<code>.json`.
3. Translate every value.
4. Open a PR. A maintainer registers the locale in the Snipp website.

## Pull request checklist

- [ ] Only values changed, no keys touched
- [ ] Placeholders (`{...}`) preserved exactly
- [ ] `node validate.js` passes
- [ ] One language per PR keeps review simple
