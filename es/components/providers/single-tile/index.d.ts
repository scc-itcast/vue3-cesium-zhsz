import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject, VcRectangle } from 'vue-cesium/es/utils/types';
export declare const singletileImageryProviderProps: {
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    rectangle: {
        type: import("vue").PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    url: import("vue").PropType<string | Cesium.Resource>;
};
declare const _default: import("vue").DefineComponent<{
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    rectangle: {
        type: import("vue").PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    url: import("vue").PropType<string | Cesium.Resource>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    rectangle: {
        type: import("vue").PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    url: import("vue").PropType<string | Cesium.Resource>;
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
}>;
export default _default;
export declare type VcImageryProviderSingletileProps = {
    /**
     * The url for the tile
     */
    url: string | Cesium.Resource;
    /**
     * The rectangle, in radians, covered by the image.
     */
    rectangle?: VcRectangle;
    /**
     * A credit for the data source, which is displayed on the canvas.
     */
    credit?: string | Cesium.Credit;
    /**
     * The ellipsoid. If not specified, the WGS84 ellipsoid is used.
     */
    ellipsoid?: Cesium.Ellipsoid;
    /**
     * Triggers before the VcImageryProviderSingletile is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcImageryProviderSingletile is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcImageryProviderSingletile is destroyed.
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
export declare type VcImageryProviderSingletileRef = VcComponentPublicInstance<VcImageryProviderSingletileProps>;
