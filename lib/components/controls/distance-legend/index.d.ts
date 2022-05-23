import type { VcDistanceLegendEvt, VcComponentInternalInstance, VcReadyObject, VcComponentPublicInstance } from '@vue-cesium/utils/types';
declare const emits: {
    distanceLegendEvt: (evt: VcDistanceLegendEvt) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
};
export declare const distanceLegendProps: {
    position: {
        type: import("vue").PropType<"top" | "left" | "right" | "bottom" | "top-right" | "top-left" | "bottom-right" | "bottom-left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
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
declare const _default: import("vue").DefineComponent<{
    position: {
        type: import("vue").PropType<"top" | "left" | "right" | "bottom" | "top-right" | "top-left" | "bottom-right" | "bottom-left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
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
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    distanceLegendEvt: (evt: VcDistanceLegendEvt) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: import("vue").PropType<"top" | "left" | "right" | "bottom" | "top-right" | "top-left" | "bottom-right" | "bottom-left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
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
}>> & {
    onReady?: (readyObj: VcReadyObject) => any;
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onDistanceLegendEvt?: (evt: VcDistanceLegendEvt) => any;
}, {
    position: "top" | "left" | "right" | "bottom" | "top-right" | "top-left" | "bottom-right" | "bottom-left";
    width: number;
    color: string;
    background: string;
    barBackground: string;
}>;
export default _default;
export declare type VcDistanceLegendEmits = typeof emits;
export declare type VcDistanceLegendProps = {
    /**
     * Specify the position of the VcDistanceLegend.
     * Default value: bottom-right
     */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left';
    /**
     * An array of two numbers to offset the VcDistanceLegend horizontally and vertically in pixels.
     * Default value: [0, 0]
     */
    offset?: [number, number];
    /**
     * Specify the css color of the VcDistanceLegend.
     * Default value: #fff
     */
    color?: string;
    /**
     * Specify the css background of the VcDistanceLegend.
     * Default value: #3f4854
     */
    background?: string;
    /**
     * Specify the width of the VcDistanceLegend.
     * Default value: 100
     */
    width?: number;
    /**
     * Specify the css color of the horizontal line on the VcDistanceLegend.
     * Default value: #fff
     */
    barBackground?: string;
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
     * Triggers when the distance scale changed.
     */
    onDistanceLegendEvt?: (evt: VcDistanceLegendEvt) => void;
};
export declare type VcDistanceLegendRef = VcComponentPublicInstance<VcDistanceLegendProps>;
