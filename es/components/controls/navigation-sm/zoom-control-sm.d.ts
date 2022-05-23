import type { VNode } from 'vue';
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcZoomEvt } from 'vue-cesium/es/utils/types';
import { VcTooltipProps } from 'vue-cesium/es/components/ui';
export declare const zoomControlSmProps: {
    autoHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: ObjectConstructor;
        default: () => {
            delay: number;
            anchor: string;
            offset: number[];
            zoomInTip: any;
            zoomOutTip: any;
            zoomBarTip: any;
        };
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
};
declare const emits: {
    zoomEvt: (evt: VcZoomEvt) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
};
declare const _default: import("vue").DefineComponent<{
    autoHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: ObjectConstructor;
        default: () => {
            delay: number;
            anchor: string;
            offset: number[];
            zoomInTip: any;
            zoomOutTip: any;
            zoomBarTip: any;
        };
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
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    zoomEvt: (evt: VcZoomEvt) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    autoHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: ObjectConstructor;
        default: () => {
            delay: number;
            anchor: string;
            offset: number[];
            zoomInTip: any;
            zoomOutTip: any;
            zoomBarTip: any;
        };
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
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onZoomEvt?: (evt: VcZoomEvt) => any;
}, {
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    tooltip: Record<string, any>;
    autoHidden: boolean;
}>;
export default _default;
export declare type VcZoomControlSmEmits = typeof emits;
export declare type VcZoomControlSmProps = {
    /**
     * Specify the position of the VcZoomControlSm.
     * Default value: top-right
     */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left';
    /**
     * An array of two numbers to offset the VcZoomControlSm horizontally and vertically in pixels.
     * Default value: [0, 0]
     */
    offset?: [number, number];
    /**
     * Specify whether the outer ring of the compass can be operated.
     * Default value: true
     */
    /**
     * Specify whether to automatically hide the zoom control.
     * Default value: true
     */
    autoHidden?: boolean;
    /**
     * Specify the compass prompt information.
     */
    tooltip?: false | (VcTooltipProps & {
        zoomInTip: string;
        zoomOutTip: string;
        zoomBarTip: string;
    });
};
export declare type VcZoomControlSmRef = VcComponentPublicInstance<VcZoomControlSmProps>;
