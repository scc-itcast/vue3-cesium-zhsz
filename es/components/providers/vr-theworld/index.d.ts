import type { PropType } from 'vue';
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const vrTheworldImageryProviderProps: {
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    ellipsoid: PropType<Cesium.Ellipsoid>;
    url: {
        type: PropType<string | Promise<string> | Cesium.Resource | Promise<Cesium.Resource>>;
        default: string;
    };
};
declare const _default: import("vue").DefineComponent<{
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    ellipsoid: PropType<Cesium.Ellipsoid>;
    url: {
        type: PropType<string | Promise<string> | Cesium.Resource | Promise<Cesium.Resource>>;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    ellipsoid: PropType<Cesium.Ellipsoid>;
    url: {
        type: PropType<string | Promise<string> | Cesium.Resource | Promise<Cesium.Resource>>;
        default: string;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    url: string | Promise<string> | Cesium.Resource | Promise<Cesium.Resource>;
}>;
export default _default;
export declare type VcTerrainProviderVrTheworldProps = {
    /**
     * The URL of the VR-TheWorld TileMap.
     */
    url: string;
    /**
     * The ellipsoid. If not specified, the WGS84 ellipsoid is used.
     */
    ellipsoid?: Cesium.Ellipsoid;
    /**
     * A credit for the data source, which is displayed on the canvas.
     */
    credit?: string;
    /**
     * Triggers before the VcTerrainProviderVrTheworld is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcTerrainProviderVrTheworld is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcTerrainProviderVrTheworld is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the terrain provider encounters an asynchronous error.
     */
    onErrorEvent?: (evt: Cesium.TileProviderError) => void;
    /**
     * Triggers when the provider is ready for use.
     */
    onReadyPromise?: (evt: boolean, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => void;
};
export declare type VcTerrainProviderVrTheworldRef = VcComponentPublicInstance<VcTerrainProviderVrTheworldProps>;
