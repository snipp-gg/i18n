# Snipp i18n

This repository contains the translation files for [Snipp](https://snipp.gg).

Each file is a flat JSON map of opaque string IDs to translated text. `source/en-US.json` is the source of truth. Every other locale lives in `strings/` and mirrors its keys.

## Available Locales

| Locale                                         | Language             |
| ---------------------------------------------- | -------------------- |
| [`source/en-US.json`](./source/en-US.json)     | English (source)     |
| [`strings/pl-PL.json`](./strings/pl-PL.json)   | Polski               |
| [`strings/fr-FR.json`](./strings/fr-FR.json)   | Français             |
| [`strings/de-DE.json`](./strings/de-DE.json)   | Deutsch              |
| [`strings/es-ES.json`](./strings/es-ES.json)   | Español              |
| [`strings/pt-PT.json`](./strings/pt-PT.json)   | Português (Portugal) |
| [`strings/pt-BR.json`](./strings/pt-BR.json)   | Português (Brasil)   |
| [`strings/sv-SE.json`](./strings/sv-SE.json)   | Svenska              |
| [`strings/fil-PH.json`](./strings/fil-PH.json) | Filipino             |
| [`strings/tr-TR.json`](./strings/tr-TR.json)   | Türkçe               |
| [`strings/ja-JP.json`](./strings/ja-JP.json)   | 日本語                  |
| [`strings/uk-UA.json`](./strings/uk-UA.json)   | Українська           |
| [`strings/el-GR.json`](./strings/el-GR.json)   | Ελληνικά             |
| [`strings/ru-RU.json`](./strings/ru-RU.json)   | Русский              |
| [`strings/th-TH.json`](./strings/th-TH.json)   | ไทย                  |
| [`strings/zh-CN.json`](./strings/zh-CN.json)   | 中文（简体）               |
| [`strings/nl-NL.json`](./strings/nl-NL.json)   | Nederlands           |
| [`strings/ko-KR.json`](./strings/ko-KR.json)   | 한국어                  |
| [`strings/id-ID.json`](./strings/id-ID.json)   | Bahasa Indonesia     |
| [`strings/vi-VN.json`](./strings/vi-VN.json)   | Tiếng Việt           |
| [`strings/ro-RO.json`](./strings/ro-RO.json)   | Română               |
| [`strings/it-IT.json`](./strings/it-IT.json)   | Italiano             |
| [`strings/cs-CZ.json`](./strings/cs-CZ.json)   | Čeština              |
| [`strings/fi-FI.json`](./strings/fi-FI.json)   | Suomi                |
| [`strings/nb-NO.json`](./strings/nb-NO.json)   | Norsk                |
| [`strings/sk-SK.json`](./strings/sk-SK.json)   | Slovenčina           |
| [`strings/hr-HR.json`](./strings/hr-HR.json)   | Hrvatski             |
| [`strings/bg-BG.json`](./strings/bg-BG.json)   | Български            |
| [`strings/sr-RS.json`](./strings/sr-RS.json)   | Srpski               |


## Want to help?

Read [CONTRIBUTING.md](CONTRIBUTING.md). You don't need to be a developer. If you can read JSON, you can translate.

## Adding a new language

Open an issue first so it can be tracked. Locale codes use BCP-47 (e.g. `it-IT`, `zh-CN`). Then copy `source/en-US.json` to `strings/<code>.json` (e.g. `strings/it-IT.json`), translate every value, and open a PR. A maintainer wires the new locale into the website.

## License

MIT License © 2026 Snipp. See [LICENSE](LICENSE) for full details.
