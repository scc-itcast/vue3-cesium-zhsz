import type { PropType } from 'vue';
import type { ProjectionTransforms, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const supermapImageryProviderProps: {
    projectionTransforms: {
        type: PropType<ProjectionTransforms>;
        default: boolean;
    };
    name: StringConstructor;
    transparent: {
        type: BooleanConstructor;
        default: boolean;
    };
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    url: StringConstructor;
};
declare const _default: import("vue").DefineComponent<{
    projectionTransforms: {
        type: PropType<ProjectionTransforms>;
        default: boolean;
    };
    name: StringConstructor;
    transparent: {
        type: BooleanConstructor;
        default: boolean;
    };
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    url: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    projectionTransforms: {
        type: PropType<ProjectionTransforms>;
        default: boolean;
    };
    name: StringConstructor;
    transparent: {
        type: BooleanConstructor;
        default: boolean;
    };
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    url: StringConstructor;
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    transparent: boolean;
    projectionTransforms: ProjectionTransforms;
    minimumLevel: number;
}>;
export default _default;
export declare type VcImageryProviderSupermapProps = {
    /**
     * The URL of the SuperMap iServer service.
     */
    url: string;
    /**
     * The name of the layer.
     */
    name?: string;
    /**
     * The minimum tile level to request, or undefined if there is no minimum.
     * Default value: 0
     */
    minimumLevel?: number;
    /**
     * The maximum tile level to request, or undefined if there is no maximum.
     * Default value: 20
     */
    maximumLevel?: number;
    /**
     * Whether the parameter of the requested map service is transparent.
     * Default value: true
     */
    transparent?: boolean;
    /**
     * A credit for the data source, which is displayed on the canvas.
     * Default value: 'MapQuest, SuperMap iServer Imagery'
     */
    credit?: string | Cesium.Credit;
    /**
     * Specify the projection transformation parameters. such as { from: 'BD09', to: 'WGS84' }
     */
    projectionTransforms?: ProjectionTransforms;
    /**
     * Triggers before the VcImageryProviderSupermap is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcImageryProviderSupermap is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcImageryProviderSupermap is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the imagery provider encounters an asynchronous error.
     */
    onErrorEvent?: (evt: Cesium.TileProviderError) => void;
    /**
     * Triggers when the provider is ready for use.
     */
    onReadyPromise?: (evt: boolean, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => void;
};
export declare type VcImageryProviderSupermapRef = VcComponentPublicInstance<VcImageryProviderSupermapProps>;
