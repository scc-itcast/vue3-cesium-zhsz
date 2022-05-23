import type { VNode, PropType } from 'vue';
import type { VcCompassEvt, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject, VcZoomEvt } from 'vue-cesium/es/utils/types';
import type { VcZoomControlSmProps } from './zoom-control-sm';
import type { VcCompassSmProps } from './compass-sm';
export declare const navigationSmProps: {
    compassOpts: {
        type: PropType<false | VcCompassSmProps>;
        default: () => VcCompassSmProps;
    };
    zoomOpts: {
        type: PropType<false | VcZoomControlSmProps>;
        default: () => VcZoomControlSmProps;
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
};
declare const emits: {
    zoomEvt: (evt: VcZoomEvt) => boolean;
    compassEvt: (evt: VcCompassEvt) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
};
declare const _default: import("vue").DefineComponent<{
    compassOpts: {
        type: PropType<false | VcCompassSmProps>;
        default: () => VcCompassSmProps;
    };
    zoomOpts: {
        type: PropType<false | VcZoomControlSmProps>;
        default: () => VcZoomControlSmProps;
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
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    zoomEvt: (evt: VcZoomEvt) => boolean;
    compassEvt: (evt: VcCompassEvt) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    compassOpts: {
        type: PropType<false | VcCompassSmProps>;
        default: () => VcCompassSmProps;
    };
    zoomOpts: {
        type: PropType<false | VcZoomControlSmProps>;
        default: () => VcZoomControlSmProps;
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
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onCompassEvt?: (evt: VcCompassEvt) => any;
    onZoomEvt?: (evt: VcZoomEvt) => any;
}, {
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    compassOpts: VcCompassSmProps;
    zoomOpts: VcZoomControlSmProps;
}>;
export default _default;
export declare type VcNavigationSmEmits = typeof emits;
export declare type VcNavigationSmProps = {
    /**
     * Specify the position of the VcNavigationSm.
     * Default value: top-right
     */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left';
    /**
     * An array of two numbers to offset the VcNavigationSm horizontally and vertically in pixels.
     * Default value: [0, 0]
     */
    offset?: [number, number];
    /**
     * Specify the compass options of the component. false means no display.
     */
    compassOpts?: false | VcCompassSmProps;
    /**
     * Specify the zoom control options of the component. false means no display.
     */
    zoomOpts?: false | VcZoomControlSmProps;
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
     * Triggers when the zoom control is operated.
     */
    onZoomEvt?: (evt: VcZoomEvt) => void;
    /**
     * Triggers when the compass control is operated.
     */
    onCompassEvt?: (evt: VcCompassEvt) => void;
};
export interface VcNavigationSmSlots {
    /**
     * Suggestion: VcCompassSm, VcZoomControlSm
     */
    default: () => VNode[];
}
export declare type VcNavigationSmRef = VcComponentPublicInstance<VcNavigationSmProps>;
