import type { VcBtnTooltipProps } from 'vue-cesium/es/utils/types';
import type { PropType } from 'vue';
declare const defaultProps: {
    outerOptions: {
        type: PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    innerOptions: {
        type: PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    markerOptions: {
        type: PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    position: {
        type: PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    enableCompassOuterRing: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
};
declare const defaultOptions: {
    outerOptions: {
        type: PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    innerOptions: {
        type: PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    markerOptions: {
        type: PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    position: {
        type: PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    enableCompassOuterRing: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
};
export { defaultProps, defaultOptions };
