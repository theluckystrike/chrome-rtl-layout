# chrome-rtl-layout — RTL Layout Utilities
> **Built by [Zovo](https://zovo.one)** | `npm i chrome-rtl-layout`

Auto-detect RTL languages, apply direction, mirror CSS properties, and detect text direction.

```typescript
import { RTLLayout } from 'chrome-rtl-layout';
RTLLayout.autoApply();
RTLLayout.injectRTLStyles('padding-left: 0; padding-right: 16px;');
const dir = RTLLayout.getTextDirection('مرحبا'); // 'rtl'
```
MIT License
