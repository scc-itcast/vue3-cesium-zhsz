import type { PropType } from 'vue';
import { VcTooltipProps } from '../../ui';
declare const _default: {
    icon: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: StringConstructor;
    stack: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: PropType<false | VcTooltipProps>;
        default: () => false | VcTooltipProps;
    };
    screenshotName: StringConstructor;
    position: {
        type: PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    showCredit: {
        type: BooleanConstructor;
        default: boolean;
    };
    printAutomatically: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPrintView: {
        type: BooleanConstructor;
        default: boolean;
    };
    downloadAutomatically: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export default _default;
