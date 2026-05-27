# Snipp i18n

This repository contains the translation files for [Snipp](https://snipp.gg).

Each file is a flat JSON map of opaque string IDs to translated text. `source/en-US.json` is the source of truth. Every other locale lives in `strings/` and mirrors its keys.

## Locales

| File | Language |
|------|----------|
| `source/en-US.json` | English (source) |
| `strings/pl-PL.json` | Polski |
| `strings/fr-FR.json` | Français |
| `strings/de-DE.json` | Deutsch |
| `strings/es-ES.json` | Español |
| `strings/pt-BR.json` | Português (Brasil) |
| `strings/el-GR.json` | ελληνικά |
| `strings/sv-SE.json` | Svenska |
| `strings/fil-PH.json` | Filipino |
| `strings/tr-TR.json` | Türkçe |
| `strings/ja-JP.json` | 日本語 |
| `strings/uk-UA.json` | Українська |
| `strings/ru-RU.json` | Русский |
| `strings/th-TH.json` | ไทย |
| `strings/zh-CN.json` | Chinese (China) |

## Want to help?

Read [CONTRIBUTING.md](CONTRIBUTING.md). You don't need to be a developer. If you can read JSON, you can translate.

## Adding a new language

Open an issue first so it can be tracked. Locale codes use BCP-47 (e.g. `it-IT`, `zh-CN`). Then copy `source/en-US.json` to `strings/<code>.json` (e.g. `strings/it-IT.json`), translate every value, and open a PR. A maintainer wires the new locale into the website.

## License

MIT License © 2026 Snipp. See [LICENSE](LICENSE) for full details.
