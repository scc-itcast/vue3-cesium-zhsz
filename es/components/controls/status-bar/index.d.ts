import type { VNode } from 'vue';
import type { VcStatusBarEvt, VcComponentInternalInstance, VcReadyObject, VcComponentPublicInstance } from 'vue-cesium/es/utils/types';
import MouseCoords from './MouseCoords';
import { VcTooltipProps } from 'vue-cesium/es/components/ui';
declare const emits: {
    statusBarEvt: (evt: VcStatusBarEvt) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
};
export declare const statusBarProps: {
    gridFileUrl: {
        type: StringConstructor;
        default: string;
    };
    proj4Projection: {
        type: StringConstructor;
        default: string;
    };
    projectionUnits: {
        type: StringConstructor;
        default: string;
    };
    proj4longlat: {
        type: StringConstructor;
        default: string;
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
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    showCameraInfo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showMouseInfo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showPerformanceInfo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    useProjection: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    tooltip: {
        type: import("vue").PropType<false | VcTooltipProps>;
        default: () => false | VcTooltipProps;
    };
};
declare const _default: import("vue").DefineComponent<{
    gridFileUrl: {
        type: StringConstructor;
        default: string;
    };
    proj4Projection: {
        type: StringConstructor;
        default: string;
    };
    projectionUnits: {
        type: StringConstructor;
        default: string;
    };
    proj4longlat: {
        type: StringConstructor;
        default: string;
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
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    showCameraInfo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showMouseInfo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showPerformanceInfo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    useProjection: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    tooltip: {
        type: import("vue").PropType<false | VcTooltipProps>;
        default: () => false | VcTooltipProps;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    statusBarEvt: (evt: VcStatusBarEvt) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    gridFileUrl: {
        type: StringConstructor;
        default: string;
    };
    proj4Projection: {
        type: StringConstructor;
        default: string;
    };
    projectionUnits: {
        type: StringConstructor;
        default: string;
    };
    proj4longlat: {
        type: StringConstructor;
        default: string;
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
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    showCameraInfo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showMouseInfo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showPerformanceInfo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    useProjection: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    tooltip: {
        type: import("vue").PropType<false | VcTooltipProps>;
        default: () => false | VcTooltipProps;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onStatusBarEvt?: (evt: VcStatusBarEvt) => any;
}, {
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    color: string;
    tooltip: false | VcTooltipProps;
    background: string;
    gridFileUrl: string;
    proj4Projection: string;
    projectionUnits: string;
    proj4longlat: string;
    showCameraInfo: boolean;
    showMouseInfo: boolean;
    showPerformanceInfo: boolean;
    useProjection: boolean;
}>;
export default _default;
export declare type VcStatusBarEmits = typeof emits;
export interface VcStatusBarProps {
    /**
     * Specify the position of the VcStatusBar.
     * Default value: bottom-right
     */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left';
    /**
     * An array of two numbers to offset the VcStatusBar horizontally and vertically in pixels.
     * Default value: [0, 0]
     */
    offset?: [number, number];
    /**
     * Specify the mouse to pick up the height model, use this to improve the accuracy of the height obtained.
     * Default value: https://zouyaoji.top/vue-cesium/statics/SampleData/WW15MGH.DAC
     */
    gridFileUrl?: string;
    /**
     * Specify the proj4 projection.
     * Default value: +proj=utm +ellps=GRS80 +units=m +no_defs
     */
    proj4Projection?: string;
    /**
     * Specify the projection units.
     * Default value: m
     */
    projectionUnits?: string;
    /**
     * Specify the proj4 longlat.
     * Default value: +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees +no_defs
     */
    proj4longlat?: string;
    /**
     * Specify the css color of the information bar.
     * Default value: #fff
     */
    color?: string;
    /**
     * Specify the background of the information bar.
     * Default value: #3f4854
     */
    background?: string;
    /**
     * Specify whether to display camera information in the information bar.
     * Default value: true
     */
    showCameraInfo?: boolean;
    /**
     * Specify whether to display mouse coords information in the information bar.
     * Default value: true
     */
    showMouseInfo?: boolean;
    /**
     * Specify whether to display frame rate information in the information bar.
     * Default value: true
     */
    showPerformanceInfo?: boolean;
    /**
     * Specify whether the latitude and longitude coordinates on the information bar can be switched to UTM projected coordinates.
     * Default value: true
     */
    useProjection?: boolean;
    /**
     * The tooltip parameter.
     */
    tooltip?: false | VcTooltipProps;
    /**
     * Triggers before the VcStatusBar is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcStatusBar is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcStatusBar is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the information changed.
     */
    onStatusBarEvt?: (evt: VcStatusBarEvt) => void;
}
export interface VcStatusBarRef extends VcComponentPublicInstance<VcStatusBarProps> {
    /**
     * Get the mouseCoords info.
     */
    getMouseCoordsInfo: () => MouseCoords;
    /**
     * Get the camera info.
     */
    getCameraInfo: () => {
        heading: string;
        pitch: string;
        roll: string;
        height: string;
        level: string;
    };
    /**
     * Get the performance info.
     */
    getPerformanceInfo: () => {
        fps: string;
        ms: string;
    };
}
