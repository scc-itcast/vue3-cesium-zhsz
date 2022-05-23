import type { PropType } from 'vue';
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const googleImageryProviderProps: {
    metadata: PropType<Cesium.GoogleEarthEnterpriseMetadata>;
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    tileDiscardPolicy: PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
    ellipsoid: PropType<Cesium.Ellipsoid>;
    url: PropType<string | Cesium.Resource>;
};
declare const _default: import("vue").DefineComponent<{
    metadata: PropType<Cesium.GoogleEarthEnterpriseMetadata>;
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    tileDiscardPolicy: PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
    ellipsoid: PropType<Cesium.Ellipsoid>;
    url: PropType<string | Cesium.Resource>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    metadata: PropType<Cesium.GoogleEarthEnterpriseMetadata>;
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    tileDiscardPolicy: PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
    ellipsoid: PropType<Cesium.Ellipsoid>;
    url: PropType<string | Cesium.Resource>;
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
export declare type VcImageryProviderGoogleProps = {
    /**
     * The url of the Google Earth Enterprise server hosting the imagery.
     */
    url: string | Cesium.Resource;
    /**
     * A metadata object that can be used to share metadata requests with a GoogleEarthEnterpriseTerrainProvider.
     */
    metadata: string;
    /**
     * The ellipsoid. If not specified, the WGS84 ellipsoid is used.
     */
    ellipsoid?: Cesium.Ellipsoid;
    /**
     * The policy that determines if a tile is invalid and should be discarded. If this value is not specified, a default is to discard tiles that fail to download.
     */
    tileDiscardPolicy?: Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy;
    /**
     * A credit for the data source, which is displayed on the canvas.
     */
    credit?: Cesium.Credit | string;
    /**
     * Triggers before the VcImageryProviderGoogle is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcImageryProviderGoogle is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcImageryProviderGoogle is destroyed.
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
export declare type VcImageryProviderGoogleRef = VcComponentPublicInstance<VcImageryProviderGoogleProps>;
