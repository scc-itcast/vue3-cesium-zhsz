import type { PropType } from 'vue';
declare const _default: {
    position: {
        type: PropType<"top" | "left" | "right" | "bottom" | "top-right" | "top-left" | "bottom-right" | "bottom-left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    barBackground: {
        type: StringConstructor;
        default: string;
    };
};
export default _default;
