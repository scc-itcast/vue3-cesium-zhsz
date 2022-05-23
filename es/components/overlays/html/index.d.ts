import type { TeleportProps, PropType, VNode } from 'vue';
import type { VcCartesian2, VcComponentInternalInstance, VcComponentPublicInstance, VcPosition, VcReadyObject } from 'vue-cesium/es/utils/types';
import { makeCartesian2, makeCartesian3 } from 'vue-cesium/es/utils/cesium-helpers';
export declare const htmlOverlayProps: {
    autoHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: StringConstructor;
    teleport: PropType<TeleportProps>;
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
    pixelOffset: {
        type: PropType<VcCartesian2>;
        default: () => {
            x: number;
            y: number;
        };
        validator: (v: any) => boolean;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
    position: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
            deep: boolean;
        };
    };
};
declare const emits: {
    mouseenter: (evt: MouseEvent) => boolean;
    mouseleave: (evt: MouseEvent) => boolean;
    click: (evt: MouseEvent) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
};
declare const _default: import("vue").DefineComponent<{
    autoHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: StringConstructor;
    teleport: PropType<TeleportProps>;
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
    pixelOffset: {
        type: PropType<VcCartesian2>;
        default: () => {
            x: number;
            y: number;
        };
        validator: (v: any) => boolean;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
    position: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
            deep: boolean;
        };
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    mouseenter: (evt: MouseEvent) => boolean;
    mouseleave: (evt: MouseEvent) => boolean;
    click: (evt: MouseEvent) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    autoHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: StringConstructor;
    teleport: PropType<TeleportProps>;
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
    pixelOffset: {
        type: PropType<VcCartesian2>;
        default: () => {
            x: number;
            y: number;
        };
        validator: (v: any) => boolean;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
    position: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
            deep: boolean;
        };
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onClick?: (evt: MouseEvent) => any;
    onMouseenter?: (evt: MouseEvent) => any;
    onMouseleave?: (evt: MouseEvent) => any;
}, {
    show: boolean;
    pixelOffset: VcCartesian2;
    autoHidden: boolean;
}>;
export default _default;
export declare type VcOverlayHtmlEmits = typeof emits;
export interface VcOverlayHtmlProps {
    /**
     * Specify the geographic location of the HTML element.
     */
    position?: VcPosition;
    /**
     * Specify the pixel offset of the HTML.
     */
    pixelOffset?: VcCartesian2;
    /**
     * Specify whether to display the HTML overlay.
     * Default value: true
     */
    show?: boolean;
    /**
     * Specifies whether HTML is automatically hidden when it is on the back of the earth.
     * Default value: true
     */
    autoHidden?: boolean;
    /**
     * Specify an HTML custom class.
     */
    customClass?: string;
    /**
     * Specify the teleport props.
     */
    teleport?: TeleportProps;
    /**
     * Triggers before the VcOverlayHtml is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcOverlayHtml is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcOverlayHtml is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
}
export declare type VcOverlayHtmlRef = VcComponentPublicInstance<VcOverlayHtmlProps>;
export declare type VcOverlayHtmlSlots = {
    /**
     * Slot for html element tag.
     */
    default: () => VNode[];
};
