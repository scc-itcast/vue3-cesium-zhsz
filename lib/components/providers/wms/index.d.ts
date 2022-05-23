import type { PropType } from 'vue';
import type { AnyObject, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject, VcRectangle } from 'vue-cesium/es/utils/types';
export declare const wmsImageryProviderProps: {
    getFeatureInfoUrl: PropType<string | Cesium.Resource>;
    times: PropType<Cesium.TimeIntervalCollection>;
    clock: PropType<Cesium.Clock>;
    subdomains: PropType<string | string[]>;
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    crs: StringConstructor;
    srs: StringConstructor;
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    tileHeight: {
        type: NumberConstructor;
        default: number;
    };
    tileWidth: {
        type: NumberConstructor;
        default: number;
    };
    ellipsoid: PropType<Cesium.Ellipsoid>;
    tilingScheme: PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    rectangle: {
        type: PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    getFeatureInfoFormats: PropType<Cesium.GetFeatureInfoFormat[]>;
    enablePickFeatures: {
        type: BooleanConstructor;
        default: boolean;
    };
    parameters: ObjectConstructor;
    getFeatureInfoParameters: ObjectConstructor;
    layers: StringConstructor;
    url: PropType<string | Cesium.Resource>;
};
declare const _default: import("vue").DefineComponent<{
    getFeatureInfoUrl: PropType<string | Cesium.Resource>;
    times: PropType<Cesium.TimeIntervalCollection>;
    clock: PropType<Cesium.Clock>;
    subdomains: PropType<string | string[]>;
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    crs: StringConstructor;
    srs: StringConstructor;
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    tileHeight: {
        type: NumberConstructor;
        default: number;
    };
    tileWidth: {
        type: NumberConstructor;
        default: number;
    };
    ellipsoid: PropType<Cesium.Ellipsoid>;
    tilingScheme: PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    rectangle: {
        type: PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    getFeatureInfoFormats: PropType<Cesium.GetFeatureInfoFormat[]>;
    enablePickFeatures: {
        type: BooleanConstructor;
        default: boolean;
    };
    parameters: ObjectConstructor;
    getFeatureInfoParameters: ObjectConstructor;
    layers: StringConstructor;
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
    getFeatureInfoUrl: PropType<string | Cesium.Resource>;
    times: PropType<Cesium.TimeIntervalCollection>;
    clock: PropType<Cesium.Clock>;
    subdomains: PropType<string | string[]>;
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    crs: StringConstructor;
    srs: StringConstructor;
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    tileHeight: {
        type: NumberConstructor;
        default: number;
    };
    tileWidth: {
        type: NumberConstructor;
        default: number;
    };
    ellipsoid: PropType<Cesium.Ellipsoid>;
    tilingScheme: PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    rectangle: {
        type: PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    getFeatureInfoFormats: PropType<Cesium.GetFeatureInfoFormat[]>;
    enablePickFeatures: {
        type: BooleanConstructor;
        default: boolean;
    };
    parameters: ObjectConstructor;
    getFeatureInfoParameters: ObjectConstructor;
    layers: StringConstructor;
    url: PropType<string | Cesium.Resource>;
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
    enablePickFeatures: boolean;
}>;
export default _default;
export declare type VcImageryProviderWmsProps = {
    /**
     * The URL of the WMS service. The URL supports the same keywords as the UrlTemplateImageryProvider.
     */
    url: string | Cesium.Resource;
    /**
     * The layers to include, separated by commas.
     */
    layers: string;
    /**
     * Additional parameters to pass to the WMS server in the GetMap URL.
     */
    parameters?: AnyObject;
    /**
     * Additional parameters to pass to the WMS server in the GetFeatureInfo URL.
     */
    getFeatureInfoParameters?: AnyObject;
    /**
     * If true, WebMapServiceImageryProvider#pickFeatures will invoke the GetFeatureInfo operation on the WMS server and return the features included in the response. If false, WebMapServiceImageryProvider#pickFeatures will immediately return undefined (indicating no pickable features) without communicating with the server. Set this property to false if you know your WMS server does not support GetFeatureInfo or if you don't want this provider's features to be pickable. Note that this can be dynamically overridden by modifying the WebMapServiceImageryProvider#enablePickFeatures property.
     * Default value: true
     */
    enablePickFeatures?: boolean;
    /**
     * The formats in which to try WMS GetFeatureInfo requests.
     */
    getFeatureInfoFormats?: Array<Cesium.GetFeatureInfoFormat>;
    /**
     * The rectangle, in radians, covered by the image.
     */
    rectangle?: VcRectangle;
    /**
     * The tiling scheme specifying how the ellipsoidal surface is broken into tiles. If this parameter is not provided, a WebMercatorTilingScheme is used.
     */
    tilingScheme?: Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme;
    /**
     * The ellipsoid. If the tilingScheme is specified, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.
     */
    ellipsoid?: Cesium.Ellipsoid;
    /**
     * Pixel width of image tiles.
     * Default value: 256
     */
    tileWidth?: number;
    /**
     * Pixel height of image tiles.
     * Default value: 256
     */
    tileHeight?: number;
    /**
     * The minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems.
     */
    minimumLevel?: number;
    /**
     * The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit.
     */
    maximumLevel?: number;
    /**
     * CRS specification, for use with WMS specification >= 1.3.0.
     */
    crs?: string;
    /**
     * SRS specification, for use with WMS specification 1.1.0 or 1.1.1
     */
    srs?: string;
    /**
     * A credit for the data source, which is displayed on the canvas.
     */
    credit?: Cesium.Credit | string;
    /**
     * The subdomains to use for the {s} placeholder in the URL template. If this parameter is a single string, each character in the string is a subdomain. If it is an array, each element in the array is a subdomain.
     */
    subdomains?: string | string[];
    /**
     * A Clock instance that is used when determining the value for the time dimension. Required when `times` is specified.
     */
    clock?: Cesium.Clock;
    /**
     * TimeIntervalCollection with its data property being an object containing time dynamic dimension and their values.
     */
    times?: Cesium.TimeIntervalCollection;
    /**
     * The getFeatureInfo URL of the WMS service. If the property is not defined then we use the property value of url.
     */
    getFeatureInfoUrl?: string | Cesium.Resource;
    /**
     * Triggers before the VcImageryProviderWms is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcImageryProviderWms is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcImageryProviderWms is destroyed.
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
export declare type VcImageryProviderWmsRef = VcComponentPublicInstance<VcImageryProviderWmsProps>;
