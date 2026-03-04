# chrome-rtl-layout

[![npm version](https://img.shields.io/npm/v/chrome-rtl-layout)](https://npmjs.com/package/chrome-rtl-layout)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Chrome Web Extension](https://img.shields.io/badge/Chrome-Web%20Extension-orange.svg)](https://developer.chrome.com/docs/extensions/)
[![CI Status](https://github.com/theluckystrike/chrome-rtl-layout/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/chrome-rtl-layout/actions)
[![Discord](https://img.shields.io/badge/Discord-Zovo-blueviolet.svg?logo=discord)](https://discord.gg/zovo)
[![Website](https://img.shields.io/badge/Website-zovo.one-blue)](https://zovo.one)
[![GitHub Stars](https://img.shields.io/github/stars/theluckystrike/chrome-rtl-layout?style=social)](https://github.com/theluckystrike/chrome-rtl-layout)

> Detect and handle RTL (right-to-left) layouts in Chrome extensions.

**chrome-rtl-layout** provides utilities to detect text direction, handle RTL layouts, and create LTR/RTL aware UIs — essential for building extensions that support multiple languages and regions.

Part of the [Zovo](https://zovo.one) developer tools family.

## Features

- ✅ **Text Direction Detection** - Detect RTL/LTR from text content
- ✅ **Language-based Detection** - Get direction from language codes
- ✅ **CSS Integration** - Easy RTL/LTR class handling
- ✅ **TypeScript Support** - Full type definitions included
- ✅ **Privacy-First** - No data collection, all local

## Installation

```bash
npm install chrome-rtl-layout
```

## Quick Start

```typescript
import { isRtl, getDirection } from 'chrome-rtl-layout';

const dir = getDirection('مرحبا');
console.log(dir); // 'rtl'

const rtl = isRtl('Hello');
console.log(rtl); // false
```

## Usage Examples

### Detect Direction

```typescript
import { isRtl, getDirection } from 'chrome-rtl-layout';

const dir = getDirection('مرحبا');
console.log(dir); // 'rtl'

const rtl = isRtl('Hello');
console.log(rtl); // false
```

### Handle RTL in CSS

```typescript
import { rtl } from 'chrome-rtl-layout';

document.body.classList.add(rtl ? 'rtl' : 'ltr');
```

### Language-based Detection

```typescript
import { getDirectionFromLang } from 'chrome-rtl-layout';

const dir1 = getDirectionFromLang('ar');  // 'rtl'
const dir2 = getDirectionFromLang('en');  // 'ltr'
const dir3 = getDirectionFromLang('he');  // 'rtl'
```

## API

### Functions

| Function | Description |
|----------|-------------|
| `isRtl(text)` | Check if text is RTL |
| `getDirection(text)` | Get 'ltr' or 'rtl' |
| `getDirectionFromLang(lang)` | Get direction from language code |

## Browser Support

- Chrome 90+
- Manifest V3

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/rtl-feature`
3. **Make** your changes
4. **Test** your changes: `npm test`
5. **Commit** your changes: `git commit -m 'Add new feature'`
6. **Push** to the branch: `git push origin feature/rtl-feature`
7. **Submit** a Pull Request

### Development Setup

```bash
# Clone the repository
git clone https://github.com/theluckystrike/chrome-rtl-layout.git
cd chrome-rtl-layout

# Install dependencies
npm install

# Build
npm run build
```

## Built by Zovo

Part of the [Zovo](https://zovo.one) developer tools family — privacy-first Chrome extensions built by developers, for developers.

## See Also

### Related Zovo Repositories

- [chrome-page-info](https://github.com/theluckystrike/chrome-page-info) - Page information extractor
- [chrome-storage-plus](https://github.com/theluckystrike/chrome-storage-plus) - Type-safe storage
- [chrome-extension-starter-mv3](https://github.com/theluckystrike/chrome-extension-starter-mv3) - Extension template

### Zovo Chrome Extensions

- [Zovo Tab Manager](https://chrome.google.com/webstore/detail/zovo-tab-manager) - Manage tabs efficiently
- [Zovo Focus](https://chrome.google.com/webstore/detail/zovo-focus) - Block distractions
- [Zovo Permissions Scanner](https://chrome.google.com/webstore/detail/zovo-permissions-scanner) - Check extension privacy grades

Visit [zovo.one](https://zovo.one) for more information.

## License

MIT — [Zovo](https://zovo.one)

---

*Built by developers, for developers. No compromises on privacy.*
