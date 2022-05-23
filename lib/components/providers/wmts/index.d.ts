import type { AnyObject, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject, VcRectangle } from 'vue-cesium/es/utils/types';
export declare const wmtsImageryProviderProps: {
    subdomains: import("vue").PropType<string | string[]>;
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    rectangle: {
        type: import("vue").PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    tileHeight: {
        type: NumberConstructor;
        default: number;
    };
    tileWidth: {
        type: NumberConstructor;
        default: number;
    };
    dimensions: ObjectConstructor;
    times: import("vue").PropType<Cesium.TimeIntervalCollection>;
    clock: import("vue").PropType<Cesium.Clock>;
    layer: {
        type: StringConstructor;
        required: boolean;
    };
    wmtsStyle: {
        type: StringConstructor;
        required: boolean;
    };
    tileMatrixSetID: {
        type: StringConstructor;
        required: boolean;
    };
    tileMatrixLabels: ArrayConstructor;
    format: {
        type: StringConstructor;
        default: string;
    };
    url: import("vue").PropType<string | Cesium.Resource>;
};
declare const _default: import("vue").DefineComponent<{
    subdomains: import("vue").PropType<string | string[]>;
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    rectangle: {
        type: import("vue").PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    tileHeight: {
        type: NumberConstructor;
        default: number;
    };
    tileWidth: {
        type: NumberConstructor;
        default: number;
    };
    dimensions: ObjectConstructor;
    times: import("vue").PropType<Cesium.TimeIntervalCollection>;
    clock: import("vue").PropType<Cesium.Clock>;
    layer: {
        type: StringConstructor;
        required: boolean;
    };
    wmtsStyle: {
        type: StringConstructor;
        required: boolean;
    };
    tileMatrixSetID: {
        type: StringConstructor;
        required: boolean;
    };
    tileMatrixLabels: ArrayConstructor;
    format: {
        type: StringConstructor;
        default: string;
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
    subdomains: import("vue").PropType<string | string[]>;
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    rectangle: {
        type: import("vue").PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    tileHeight: {
        type: NumberConstructor;
        default: number;
    };
    tileWidth: {
        type: NumberConstructor;
        default: number;
    };
    dimensions: ObjectConstructor;
    times: import("vue").PropType<Cesium.TimeIntervalCollection>;
    clock: import("vue").PropType<Cesium.Clock>;
    layer: {
        type: StringConstructor;
        required: boolean;
    };
    wmtsStyle: {
        type: StringConstructor;
        required: boolean;
    };
    tileMatrixSetID: {
        type: StringConstructor;
        required: boolean;
    };
    tileMatrixLabels: ArrayConstructor;
    format: {
        type: StringConstructor;
        default: string;
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
    minimumLevel: number;
    tileHeight: number;
    tileWidth: number;
    format: string;
}>;
export default _default;
export declare type VcImageryProviderWmtsProps = {
    /**
     * The base URL for the WMTS GetTile operation (for KVP-encoded requests) or the tile-URL template (for RESTful requests). The tile-URL template should contain the following variables: {style}, {TileMatrixSet}, {TileMatrix}, {TileRow}, {TileCol}. The first two are optional if actual values are hardcoded or not required by the server. The {s} keyword may be used to specify subdomains.
     */
    url: string | Cesium.Resource;
    /**
     * The MIME type for images to retrieve from the server.
     * Default value: 'image/jpeg'
     */
    format?: string;
    /**
     * The layer name for WMTS requests.
     */
    layer: string;
    /**
     * The style name for WMTS requests.
     */
    wmtsStyle: string;
    /**
     * The identifier of the TileMatrixSet to use for WMTS requests.
     */
    tileMatrixSetID: string;
    /**
     * A list of identifiers in the TileMatrix to use for WMTS requests, one per TileMatrix level.
     */
    tileMatrixLabels: Array<any>;
    /**
     * A Clock instance that is used when determining the value for the time dimension. Required when `times` is specified.
     */
    clock?: Cesium.Clock;
    /**
     * TimeIntervalCollection with its data property being an object containing time dynamic dimension and their values.
     */
    times?: Cesium.TimeIntervalCollection;
    /**
     * A object containing static dimensions and their values.
     */
    dimensions?: AnyObject;
    /**
     * The tile width in pixels.
     * Default value: 256
     */
    tileWidth?: number;
    /**
     * The tile height in pixels.
     * Default value: 256
     */
    tileHeight?: number;
    /**
     * The tiling scheme corresponding to the organization of the tiles in the TileMatrixSet.
     */
    tilingScheme?: Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme;
    /**
     * The rectangle covered by the layer.
     */
    rectangle?: VcRectangle;
    /**
     * The minimum level-of-detail supported by the imagery provider.
     */
    minimumLevel?: number;
    /**
     * The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit.
     */
    maximumLevel?: number;
    /**
     * The ellipsoid. If not specified, the WGS84 ellipsoid is used.
     */
    ellipsoid?: Cesium.Ellipsoid;
    /**
     * A credit for the data source, which is displayed on the canvas.
     */
    credit?: Cesium.Credit | string;
    /**
     * The subdomains to use for the {s} placeholder in the URL template. If this parameter is a single string, each character in the string is a subdomain. If it is an array, each element in the array is a subdomain.
     */
    subdomains?: string | string[];
    /**
     * Triggers before the VcImageryProviderWmts is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcImageryProviderWmts is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcImageryProviderWmts is destroyed.
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
export declare type VcImageryProviderWmtsRef = VcComponentPublicInstance<VcImageryProviderWmtsProps>;
