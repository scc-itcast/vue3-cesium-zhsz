export declare type TranslatePair = {
    [key: string]: string | string[] | TranslatePair;
};
export declare type Language = {
    name: string;
    nativeName: string;
    vc: TranslatePair;
};
export declare const t: (...args: any[]) => string;
export declare const use: (l: Language) => void;
export declare const setLocale: (l: Language) => void;
