/**
 * RTL Layout — Right-to-left layout utilities
 */
export class RTLLayout {
    private static RTL_LANGS = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'yi', 'ku', 'dv', 'ckb'];

    /** Check if language is RTL */
    static isRTL(locale: string): boolean {
        return this.RTL_LANGS.includes(locale.split('-')[0].toLowerCase());
    }

    /** Apply RTL direction to document */
    static applyDirection(locale: string): void {
        const isRtl = this.isRTL(locale);
        document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
        document.documentElement.lang = locale;
    }

    /** Auto-detect and apply */
    static autoApply(): void {
        const locale = chrome.i18n.getUILanguage();
        this.applyDirection(locale);
    }

    /** Mirror CSS property names for RTL */
    static mirrorProperty(prop: string): string {
        const mirrors: Record<string, string> = {
            'margin-left': 'margin-right', 'margin-right': 'margin-left',
            'padding-left': 'padding-right', 'padding-right': 'padding-left',
            'left': 'right', 'right': 'left',
            'border-left': 'border-right', 'border-right': 'border-left',
            'text-align: left': 'text-align: right', 'text-align: right': 'text-align: left',
            'float: left': 'float: right', 'float: right': 'float: left',
        };
        return mirrors[prop] || prop;
    }

    /** Apply mirrored inline styles to element */
    static mirrorElement(el: HTMLElement): void {
        if (document.documentElement.dir !== 'rtl') return;
        const style = el.style;
        const swaps: Array<[string, string]> = [];
        if (style.marginLeft) swaps.push(['marginRight', style.marginLeft]);
        if (style.marginRight) swaps.push(['marginLeft', style.marginRight]);
        if (style.paddingLeft) swaps.push(['paddingRight', style.paddingLeft]);
        if (style.paddingRight) swaps.push(['paddingLeft', style.paddingRight]);
        swaps.forEach(([prop, val]) => { (style as any)[prop] = val; });
    }

    /** Inject RTL stylesheet */
    static injectRTLStyles(css: string): HTMLStyleElement {
        const style = document.createElement('style');
        style.textContent = `[dir="rtl"] { ${css} }`;
        document.head.appendChild(style);
        return style;
    }

    /** Get text direction for mixed content */
    static getTextDirection(text: string): 'rtl' | 'ltr' {
        const rtlChars = /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F\u0780-\u07BF\uFB50-\uFDFF\uFE70-\uFEFF]/;
        return rtlChars.test(text.charAt(0)) ? 'rtl' : 'ltr';
    }
}
