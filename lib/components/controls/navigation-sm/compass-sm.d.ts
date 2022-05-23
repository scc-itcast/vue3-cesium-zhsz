import type { VNode, PropType } from 'vue';
import type { VcCompassEvt, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
import { VcTooltipProps } from 'vue-cesium/es/components/ui';
export declare const compassSmProps: {
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
    tooltip: {
        type: PropType<false | VcTooltipProps>;
        default: () => false | VcTooltipProps;
    };
    autoHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
};
declare const emits: {
    compassEvt: (evt: VcCompassEvt) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
};
declare const _default: import("vue").DefineComponent<{
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
    tooltip: {
        type: PropType<false | VcTooltipProps>;
        default: () => false | VcTooltipProps;
    };
    autoHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    compassEvt: (evt: VcCompassEvt) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    tooltip: {
        type: PropType<false | VcTooltipProps>;
        default: () => false | VcTooltipProps;
    };
    autoHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onCompassEvt?: (evt: VcCompassEvt) => any;
}, {
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    tooltip: false | VcTooltipProps;
    enableCompassOuterRing: boolean;
    duration: number;
    autoHidden: boolean;
}>;
export default _default;
export declare type VcCompassSmEmits = typeof emits;
export declare type VcCompassSmProps = {
    /**
     * Specify the position of the VcCompassSm.
     * Default value: top-right
     */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left';
    /**
     * An array of two numbers to offset the VcCompassSm horizontally and vertically in pixels.
     * Default value: [0, 0]
     */
    offset?: [number, number];
    /**
     * Specify whether the outer ring of the compass can be operated.
     * Default value: true
     */
    enableCompassOuterRing?: boolean;
    /**
     * Specify the flight time of double-clicking the compass to restore the pitch angle, in seconds.
     * Default value: 1.5
     */
    duration?: number;
    /**
     * Specify the compass prompt information.
     */
    tooltip?: false | VcTooltipProps;
    /**
     * Specify whether to automatically hide parts of the compass controls.
     * Default value: true
     */
    autoHidden?: boolean;
    /**
     * Triggers before the VcNavigationSm is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcNavigationSm is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcNavigationSm is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the compass control is operated.
     */
    compassEvt?: (evt: VcCompassEvt) => void;
};
export declare type VcCompassSmRef = VcComponentPublicInstance<VcCompassSmProps>;
