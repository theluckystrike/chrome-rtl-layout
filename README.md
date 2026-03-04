# chrome-rtl-layout

> RTL layout utilities for Chrome extensions — auto-detect, mirror CSS, bidirectional text, and direction switching for MV3.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

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
