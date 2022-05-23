import type { VcBtnTooltipProps, VcCamera } from 'vue-cesium/es/utils/types';
import type { PropType } from 'vue';
declare const defaultProps: {
    background: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: StringConstructor;
        default: string;
    };
    borderRadius: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: string) => boolean;
    };
    zoomInOptions: {
        type: PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    zoomOutOptions: {
        type: PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    zoomResetOptions: {
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
    enableResetButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomAmount: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    durationReset: {
        type: NumberConstructor;
    };
    defaultResetView: {
        type: PropType<VcCamera>;
        default: () => VcCamera;
    };
    overrideViewerCamera: {
        type: BooleanConstructor;
        default: boolean;
    };
};
declare const defaultOptions: {
    background: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: StringConstructor;
        default: string;
    };
    borderRadius: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: string) => boolean;
    };
    zoomInOptions: {
        type: PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    zoomOutOptions: {
        type: PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    zoomResetOptions: {
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
    enableResetButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomAmount: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    durationReset: {
        type: NumberConstructor;
    };
    defaultResetView: {
        type: PropType<VcCamera>;
        default: () => VcCamera;
    };
    overrideViewerCamera: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export { defaultProps, defaultOptions };
