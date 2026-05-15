# Snipp i18n

This repository contains the translation files for [Snipp](https://snipp.gg).

Each file is a flat JSON map of opaque string IDs to translated text. `en.json` is the source of truth. Every other locale mirrors its keys.

## Locales

All locale files live in `strings/`.

| File | Language |
|------|----------|
| `strings/en.json` | English (source) |
| `strings/pl.json` | Polski |
| `strings/fr.json` | Français |
| `strings/de.json` | Deutsch |
| `strings/es.json` | Español |
| `strings/pt-BR.json` | Português (Brasil) |
| `strings/sv.json` | Svenska |
| `strings/tr.json` | Türkçe |
| `strings/ja.json` | 日本語 |
| `strings/uk.json` | Українська |
| `strings/ru.json` | Русский |

## Want to help?

Read [CONTRIBUTING.md](CONTRIBUTING.md). You don't need to be a developer. If you can read JSON, you can translate.

## Adding a new language

Open an issue first so it can be tracked. Then copy `strings/en.json` to `strings/<code>.json` (e.g. `strings/fr.json`), translate every value, and open a PR. A maintainer wires the new locale into the website.

## License

MIT License © 2026 Snipp. See [LICENSE](LICENSE) for full details.