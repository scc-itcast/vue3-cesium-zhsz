import type { PropType } from 'vue';
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
import { ParticleSystemOptions, VcWindData, ViewerParameters } from './types';
export declare const windmapOverlayProps: {
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: PropType<VcWindData>;
        required: boolean;
    };
    options: {
        type: PropType<ParticleSystemOptions>;
        default: () => ParticleSystemOptions;
    };
    viewerParameters: PropType<ViewerParameters>;
};
declare const _default: import("vue").DefineComponent<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: PropType<VcWindData>;
        required: boolean;
    };
    options: {
        type: PropType<ParticleSystemOptions>;
        default: () => ParticleSystemOptions;
    };
    viewerParameters: PropType<ViewerParameters>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: PropType<VcWindData>;
        required: boolean;
    };
    options: {
        type: PropType<ParticleSystemOptions>;
        default: () => ParticleSystemOptions;
    };
    viewerParameters: PropType<ViewerParameters>;
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
}, {
    show: boolean;
    options: ParticleSystemOptions;
}>;
export default _default;
export interface VcOverlayWindmapProps {
    /**
     * Specify wind map data.
     */
    data: VcWindData;
    /**
     * Specify whether to display the wind map.
     * Default value: true
     */
    show?: boolean;
    /**
     * Specify the rendering parameters of the wind map.
     */
    options?: ParticleSystemOptions;
    /**
     * Specify the wind field display range.
     */
    viewerParameters?: ViewerParameters;
    /**
     * Triggers before the VcOverlayWindmap is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcOverlayWindmap is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcOverlayWindmap is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
}
export interface VcOverlayWindmapRef extends VcComponentPublicInstance<VcOverlayWindmapProps> {
    /**
     * Get near UV values.
     * @param longitude longitude (degrees)
     * @param latitude latitude (degrees)
     */
    getNearestUV: (longitude: number, latitude: number) => [number, number];
}
