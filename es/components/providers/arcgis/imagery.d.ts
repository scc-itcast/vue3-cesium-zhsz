import type { PropType } from 'vue';
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject, VcRectangle } from 'vue-cesium/es/utils/types';
export declare const arcgisImageryProviderProps: {
    maximumLevel: NumberConstructor;
    tileHeight: {
        type: NumberConstructor;
        default: number;
    };
    tileWidth: {
        type: NumberConstructor;
        default: number;
    };
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    ellipsoid: PropType<Cesium.Ellipsoid>;
    tilingScheme: PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    rectangle: {
        type: PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    enablePickFeatures: {
        type: BooleanConstructor;
        default: boolean;
    };
    layers: StringConstructor;
    usePreCachedTilesIfAvailable: {
        type: BooleanConstructor;
        default: boolean;
    };
    tileDiscardPolicy: PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
    token: StringConstructor;
    url: {
        type: PropType<string | Cesium.Resource>;
        default: string;
    };
};
declare const _default: import("vue").DefineComponent<{
    maximumLevel: NumberConstructor;
    tileHeight: {
        type: NumberConstructor;
        default: number;
    };
    tileWidth: {
        type: NumberConstructor;
        default: number;
    };
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    ellipsoid: PropType<Cesium.Ellipsoid>;
    tilingScheme: PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    rectangle: {
        type: PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    enablePickFeatures: {
        type: BooleanConstructor;
        default: boolean;
    };
    layers: StringConstructor;
    usePreCachedTilesIfAvailable: {
        type: BooleanConstructor;
        default: boolean;
    };
    tileDiscardPolicy: PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
    token: StringConstructor;
    url: {
        type: PropType<string | Cesium.Resource>;
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
    maximumLevel: NumberConstructor;
    tileHeight: {
        type: NumberConstructor;
        default: number;
    };
    tileWidth: {
        type: NumberConstructor;
        default: number;
    };
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    ellipsoid: PropType<Cesium.Ellipsoid>;
    tilingScheme: PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    rectangle: {
        type: PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    enablePickFeatures: {
        type: BooleanConstructor;
        default: boolean;
    };
    layers: StringConstructor;
    usePreCachedTilesIfAvailable: {
        type: BooleanConstructor;
        default: boolean;
    };
    tileDiscardPolicy: PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
    token: StringConstructor;
    url: {
        type: PropType<string | Cesium.Resource>;
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
    url: string | Cesium.Resource;
    tileHeight: number;
    tileWidth: number;
    enablePickFeatures: boolean;
    usePreCachedTilesIfAvailable: boolean;
}>;
export default _default;
export declare type VcImageryProviderArcgisProps = {
    /**
     * The URL of the ArcGIS MapServer service.
     */
    url?: string | Cesium.Resource;
    /**
     * The ArcGIS token used to authenticate with the ArcGIS MapServer service.
     */
    token?: string;
    /**
     * The policy that determines if a tile is invalid and should be discarded. If this value is not specified, a default DiscardMissingTileImagePolicy is used for tiled map servers, and a NeverTileDiscardPolicy is used for non-tiled map servers. In the former case, we request tile 0,0 at the maximum tile level and check pixels (0,0), (200,20), (20,200), (80,110), and (160, 130). If all of these pixels are transparent, the discard check is disabled and no tiles are discarded. If any of them have a non-transparent color, any tile that has the same values in these pixel locations is discarded. The end result of these defaults should be correct tile discarding for a standard ArcGIS Server. To ensure that no tiles are discarded, construct and pass a NeverTileDiscardPolicy for this parameter.
     */
    tileDiscardPolicy?: Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy;
    /**
     * If true, the server's pre-cached tiles are used if they are available. If false, any pre-cached tiles are ignored and the 'export' service is used.
     * Default value: true
     */
    usePreCachedTilesIfAvailable?: boolean;
    /**
     * A comma-separated list of the layers to show, or undefined if all layers should be shown.
     */
    layers?: string;
    /**
     * If true, ArcGisMapServerImageryProvider#pickFeatures will invoke the Identify service on the MapServer and return the features included in the response. If false, ArcGisMapServerImageryProvider#pickFeatures will immediately return undefined (indicating no pickable features) without communicating with the server. Set this property to false if you don't want this provider's features to be pickable. Can be overridden by setting the ArcGisMapServerImageryProvider#enablePickFeatures property on the object.
     * Default value: true
     */
    enablePickFeatures?: boolean;
    /**
     * The rectangle of the layer. This parameter is ignored when accessing a tiled layer.
     */
    rectangle?: VcRectangle;
    /**
     * The tiling scheme to use to divide the world into tiles. This parameter is ignored when accessing a tiled server.
     */
    tilingScheme?: Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme;
    /**
     * The ellipsoid. If the tilingScheme is specified and used, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.
     */
    ellipsoid?: Cesium.Ellipsoid;
    /**
     * A credit for the data source, which is displayed on the canvas. This parameter is ignored when accessing a tiled server.
     */
    credit?: string | Cesium.Credit;
    /**
     * The width of each tile in pixels. This parameter is ignored when accessing a tiled server.
     * Default value: 256
     */
    tileWidth?: number;
    /**
     * The height of each tile in pixels. This parameter is ignored when accessing a tiled server.
     * Default value: 256
     */
    tileHeight?: number;
    /**
     * The maximum tile level to request, or undefined if there is no maximum. This parameter is ignored when accessing a tiled server.
     */
    maximumLevel?: number;
    /**
     * Triggers before the VcImageryProviderArcgis is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcImageryProviderArcgis is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcImageryProviderArcgis is destroyed.
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
export declare type VcImageryProviderArcgisRef = VcComponentPublicInstance<VcImageryProviderArcgisProps>;
