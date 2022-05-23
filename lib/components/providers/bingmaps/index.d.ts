import type { PropType } from 'vue';
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const bingImageryProviderProps: {
    tileDiscardPolicy: PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
    ellipsoid: PropType<Cesium.Ellipsoid>;
    url: {
        type: PropType<string | Cesium.Resource>;
        default: string;
    };
    bmKey: StringConstructor;
    tileProtocol: StringConstructor;
    mapStyle: {
        type: PropType<string>;
        default: string;
    };
    culture: {
        type: StringConstructor;
        default: string;
    };
};
declare const _default: import("vue").DefineComponent<{
    tileDiscardPolicy: PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
    ellipsoid: PropType<Cesium.Ellipsoid>;
    url: {
        type: PropType<string | Cesium.Resource>;
        default: string;
    };
    bmKey: StringConstructor;
    tileProtocol: StringConstructor;
    mapStyle: {
        type: PropType<string>;
        default: string;
    };
    culture: {
        type: StringConstructor;
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
    tileDiscardPolicy: PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
    ellipsoid: PropType<Cesium.Ellipsoid>;
    url: {
        type: PropType<string | Cesium.Resource>;
        default: string;
    };
    bmKey: StringConstructor;
    tileProtocol: StringConstructor;
    mapStyle: {
        type: PropType<string>;
        default: string;
    };
    culture: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    url: string | Cesium.Resource;
    mapStyle: string;
    culture: string;
}>;
export default _default;
export declare type VcImageryProviderBingProps = {
    /**
     * The url of the Bing Maps server hosting the imagery.
     */
    url: string;
    /**
     * The Bing Maps key for your application, which can be created at https://www.bingmapsportal.com/. Note that it is bmKey
     */
    bmKey?: string;
    /**
     * The protocol to use when loading tiles, e.g. 'http:' or 'https:'. By default, tiles are loaded using the same protocol as the page.
     */
    tileProtocol?: string;
    /**
     * The type of Bing Maps imagery to load.
     * Default value: 'Aerial'
     */
    mapStyle?: 'Aerial' | 'AerialWithLabels' | 'AerialWithLabelsOnDemand' | 'CanvasDark' | 'CanvasGray' | 'CanvasLight';
    /**
     * The culture to use when requesting Bing Maps imagery. Not all cultures are supported. See http://msdn.microsoft.com/en-us/library/hh441729.aspx for information on the supported cultures.
     */
    culture?: string;
    /**
     * The ellipsoid. If not specified, the WGS84 ellipsoid is used.
     */
    ellipsoid?: Cesium.Ellipsoid;
    /**
     * The policy that determines if a tile is invalid and should be discarded. By default, a DiscardEmptyTileImagePolicy will be used, with the expectation that the Bing Maps server will send a zero-length response for missing tiles. To ensure that no tiles are discarded, construct and pass a NeverTileDiscardPolicy for this parameter.
     */
    tileDiscardPolicy?: Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy;
    /**
     * Triggers before the VcImageryProviderBing is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcImageryProviderBing is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcImageryProviderBing is destroyed.
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
export declare type VcImageryProviderBingRef = VcComponentPublicInstance<VcImageryProviderBingProps>;
