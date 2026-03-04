# chrome-rtl-layout

[![npm version](https://img.shields.io/npm/v/chrome-rtl-layout)](https://npmjs.com/package/chrome-rtl-layout)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Discord](https://img.shields.io/badge/Discord-Zovo-blueviolet.svg?logo=discord)](https://discord.gg/zovo)
[![Website](https://img.shields.io/badge/Website-zovo.one-blue)](https://zovo.one)
[![GitHub Stars](https://img.shields.io/github/stars/theluckystrike/chrome-rtl-layout?style=social)](https://github.com/theluckystrike/chrome-rtl-layout)

> RTL layout utilities for Chrome extensions — auto-detect, mirror CSS, bidirectional text, and direction switching for MV3.

Part of the [Zovo](https://zovo.one) developer tools family.

## Install

```bash
npm install chrome-rtl-layout
```

## Usage

```js
import { RTLLayout } from 'chrome-rtl-layout';

// Check if a locale is RTL
RTLLayout.isRTL('ar');    // => true
RTLLayout.isRTL('en-US'); // => false

// Apply direction attribute to the document based on locale
RTLLayout.applyDirection('he');
// sets document.documentElement.dir = 'rtl' and lang = 'he'

// Auto-detect locale from Chrome and apply direction
RTLLayout.autoApply();

// Mirror a CSS property name for RTL layouts
RTLLayout.mirrorProperty('margin-left');   // => 'margin-right'
RTLLayout.mirrorProperty('padding-right'); // => 'padding-left'

// Mirror inline styles on an element (swaps left/right margins and padding)
const el = document.getElementById('sidebar');
RTLLayout.mirrorElement(el);

// Inject a scoped RTL stylesheet
RTLLayout.injectRTLStyles('.sidebar { float: right; text-align: right; }');

// Detect text direction from content
RTLLayout.getTextDirection('مرحبا'); // => 'rtl'
RTLLayout.getTextDirection('Hello'); // => 'ltr'
```

## API

### `RTLLayout`

All methods are static.

#### `RTLLayout.isRTL(locale: string): boolean`

Returns `true` if the given locale code belongs to an RTL language. Supports Arabic, Hebrew, Farsi, Urdu, Pashto, Sindhi, Yiddish, Kurdish, Divehi, and Central Kurdish.

#### `RTLLayout.applyDirection(locale: string): void`

Sets `document.documentElement.dir` to `'rtl'` or `'ltr'` and `document.documentElement.lang` to the provided locale.

#### `RTLLayout.autoApply(): void`

Detects the user's locale via `chrome.i18n.getUILanguage()` and calls `applyDirection` with it.

#### `RTLLayout.mirrorProperty(prop: string): string`

Returns the RTL-mirrored equivalent of a CSS property name or declaration (e.g., `'margin-left'` becomes `'margin-right'`, `'float: left'` becomes `'float: right'`). Returns the original value if no mirror mapping exists.

#### `RTLLayout.mirrorElement(el: HTMLElement): void`

Swaps left/right `margin` and `padding` inline styles on the given element. Only applies when the document direction is `'rtl'`.

#### `RTLLayout.injectRTLStyles(css: string): HTMLStyleElement`

Creates a `<style>` element scoped to `[dir="rtl"]` with the provided CSS and appends it to `document.head`. Returns the created style element.

#### `RTLLayout.getTextDirection(text: string): 'rtl' | 'ltr'`

Examines the first character of the string to determine whether the text is RTL (Arabic, Hebrew, Syriac, Thaana, or Arabic Presentation Forms) or LTR.

## License

MIT

## See Also

- [chrome-extension-core](https://github.com/theluckystrike/chrome-extension-core) - Essential utilities for Chrome extension development
- [chrome-css-injector](https://github.com/theluckystrike/chrome-css-injector) - CSS injection utilities

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Built by [Zovo](https://zovo.one)
