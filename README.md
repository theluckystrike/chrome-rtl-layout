# chrome-rtl-layout

Detect and handle RTL (right-to-left) layouts in Chrome extensions.

## Overview

chrome-rtl-layout provides utilities to detect text direction, handle RTL layouts, and create LTR/RTL aware UIs.

## Installation

```bash
npm install chrome-rtl-layout
```

## Usage

### Detect Direction

```javascript
import { isRtl, getDirection } from 'chrome-rtl-layout';

const dir = getDirection('مرحبا');
console.log(dir); // 'rtl'

const rtl = isRtl('Hello');
console.log(rtl); // false
```

### Handle RTL in CSS

```javascript
import { rtl } from 'chrome-rtl-layout';

document.body.classList.add(rtl ? 'rtl' : 'ltr');
```

## API

### Functions

- `isRtl(text)` - Check if text is RTL
- `getDirection(text)` - Get 'ltr' or 'rtl'
- `getDirectionFromLang(lang)` - Get direction from language code

## Browser Support

- Chrome 90+

## License

MIT
