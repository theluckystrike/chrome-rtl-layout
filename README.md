# chrome-rtl-layout

RTL layout utilities for Chrome extensions. Handles direction detection, CSS property mirroring, bidirectional text analysis, and scoped RTL stylesheet injection. Built for Manifest V3.

INSTALL

```
npm install chrome-rtl-layout
```

USAGE

```js
import { RTLLayout } from 'chrome-rtl-layout';

// Check if a locale is RTL
RTLLayout.isRTL('ar');    // true
RTLLayout.isRTL('en-US'); // false

// Apply direction to the document based on a locale string
RTLLayout.applyDirection('he');
// sets document.documentElement.dir = 'rtl' and lang = 'he'

// Auto-detect locale from Chrome and apply direction
RTLLayout.autoApply();

// Mirror a CSS property name for RTL layouts
RTLLayout.mirrorProperty('margin-left');   // 'margin-right'
RTLLayout.mirrorProperty('padding-right'); // 'padding-left'
RTLLayout.mirrorProperty('float: left');   // 'float: right'

// Mirror inline styles on an element (swaps left/right margins and padding)
const el = document.getElementById('sidebar');
RTLLayout.mirrorElement(el);

// Inject a scoped RTL stylesheet wrapped in [dir="rtl"]
const styleEl = RTLLayout.injectRTLStyles('.sidebar { float: right; }');

// Detect text direction from content
RTLLayout.getTextDirection('مرحبا'); // 'rtl'
RTLLayout.getTextDirection('Hello'); // 'ltr'
```

API

All methods live on the RTLLayout class as static members. No instantiation needed.

RTLLayout.isRTL(locale) returns boolean. Returns true when the base language tag matches a known RTL language. Supported languages are Arabic, Hebrew, Farsi, Urdu, Pashto, Sindhi, Yiddish, Kurdish, Divehi, and Central Kurdish.

RTLLayout.applyDirection(locale) returns void. Sets document.documentElement.dir to rtl or ltr and sets document.documentElement.lang to the provided locale string.

RTLLayout.autoApply() returns void. Reads the user locale from chrome.i18n.getUILanguage() and passes it to applyDirection. Call this once when your popup or options page loads.

RTLLayout.mirrorProperty(prop) returns string. Maps a CSS property or declaration to its RTL counterpart. Handles margin-left/right, padding-left/right, left/right, border-left/right, text-align, and float. Returns the original string when no mapping exists.

RTLLayout.mirrorElement(el) returns void. Swaps left/right margin and padding inline styles on the given HTMLElement. Only runs when document direction is rtl.

RTLLayout.injectRTLStyles(css) returns HTMLStyleElement. Creates a style element scoped under [dir="rtl"], fills it with the provided CSS, and appends it to document.head. Returns the created element so you can remove it later if needed.

RTLLayout.getTextDirection(text) returns "rtl" or "ltr". Inspects the first character of the string against Unicode ranges for Arabic, Hebrew, Syriac, Thaana, and Arabic Presentation Forms. Returns rtl if matched, ltr otherwise.

SUPPORTED RTL LANGUAGES

Arabic (ar), Hebrew (he), Farsi (fa), Urdu (ur), Pashto (ps), Sindhi (sd), Yiddish (yi), Kurdish (ku), Divehi (dv), Central Kurdish (ckb).

LICENSE

MIT. See LICENSE file.

---

Built at zovo.one
