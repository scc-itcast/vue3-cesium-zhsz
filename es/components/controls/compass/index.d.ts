import type { VNode } from 'vue';
import type { VcCompassEvt, VcBtnTooltipProps, VcComponentInternalInstance, VcReadyObject, VcComponentPublicInstance } from 'vue-cesium/es/utils/types';
declare const emits: {
    compassEvt: (evt: VcCompassEvt) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
};
export declare const compassProps: {
    outerOptions: {
        type: import("vue").PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    innerOptions: {
        type: import("vue").PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    markerOptions: {
        type: import("vue").PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
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
declare const _default: import("vue").DefineComponent<{
    outerOptions: {
        type: import("vue").PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    innerOptions: {
        type: import("vue").PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    markerOptions: {
        type: import("vue").PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
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
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    compassEvt: (evt: VcCompassEvt) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    outerOptions: {
        type: import("vue").PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    innerOptions: {
        type: import("vue").PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    markerOptions: {
        type: import("vue").PropType<VcBtnTooltipProps>;
        default: () => VcBtnTooltipProps;
    };
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
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
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onCompassEvt?: (evt: VcCompassEvt) => any;
}, {
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    outerOptions: VcBtnTooltipProps;
    innerOptions: VcBtnTooltipProps;
    markerOptions: VcBtnTooltipProps;
    enableCompassOuterRing: boolean;
    duration: number;
}>;
export default _default;
export declare type VcCompassEmits = typeof emits;
export declare type VcCompassProps = {
    /**
     * Specify the position of the VcCompass.
     * Default value: top-right
     */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left';
    /**
     * An array of two numbers to offset the VcCompass horizontally and vertically in pixels.
     * Default value: [0, 0]
     */
    offset?: [number, number];
    /**
     * Specify whether the outer ring of the compass can be operated.
     */
    enableCompassOuterRing?: boolean;
    /**
     * Specify the flight time to restore the camera, in seconds.
     */
    duration?: number;
    /**
     * Specify the parameters of the compass outer ring.
     */
    outerOptions?: VcBtnTooltipProps;
    /**
     * Specify the parameters of the inner ring.
     */
    innerOptions?: VcBtnTooltipProps;
    /**
     * Specify the parameters of the maker when the compass rotates.
     */
    markerOptions?: VcBtnTooltipProps;
    /**
     * Triggers before the VcCompass is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcCompass is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcCompass is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcCompass is operated.
     */
    onCompassEvt?: (evt: VcCompassEvt) => void;
};
export declare type VcCompassRef = VcComponentPublicInstance<VcCompassProps>;
