import type { PropType } from 'vue';
import type { AnyObject, ProjectionTransforms, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject, VcRectangle } from 'vue-cesium/es/utils/types';
export declare const urltemplateImageryProviderProps: {
    projectionTransforms: {
        type: PropType<ProjectionTransforms>;
        default: boolean;
    };
    customTags: ObjectConstructor;
    enablePickFeatures: {
        type: BooleanConstructor;
        default: boolean;
    };
    getFeatureInfoFormats: PropType<Cesium.GetFeatureInfoFormat[]>;
    hasAlphaChannel: {
        type: BooleanConstructor;
        default: boolean;
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
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    subdomains: PropType<string | string[]>;
    pickFeaturesUrl: PropType<string | Cesium.Resource>;
    urlSchemeZeroPadding: ObjectConstructor;
    url: PropType<string | Cesium.Resource>;
};
declare const _default: import("vue").DefineComponent<{
    projectionTransforms: {
        type: PropType<ProjectionTransforms>;
        default: boolean;
    };
    customTags: ObjectConstructor;
    enablePickFeatures: {
        type: BooleanConstructor;
        default: boolean;
    };
    getFeatureInfoFormats: PropType<Cesium.GetFeatureInfoFormat[]>;
    hasAlphaChannel: {
        type: BooleanConstructor;
        default: boolean;
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
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    subdomains: PropType<string | string[]>;
    pickFeaturesUrl: PropType<string | Cesium.Resource>;
    urlSchemeZeroPadding: ObjectConstructor;
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
    projectionTransforms: {
        type: PropType<ProjectionTransforms>;
        default: boolean;
    };
    customTags: ObjectConstructor;
    enablePickFeatures: {
        type: BooleanConstructor;
        default: boolean;
    };
    getFeatureInfoFormats: PropType<Cesium.GetFeatureInfoFormat[]>;
    hasAlphaChannel: {
        type: BooleanConstructor;
        default: boolean;
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
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    subdomains: PropType<string | string[]>;
    pickFeaturesUrl: PropType<string | Cesium.Resource>;
    urlSchemeZeroPadding: ObjectConstructor;
    url: PropType<string | Cesium.Resource>;
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    projectionTransforms: ProjectionTransforms;
    minimumLevel: number;
    tileHeight: number;
    tileWidth: number;
    enablePickFeatures: boolean;
    hasAlphaChannel: boolean;
}>;
export default _default;
export declare type VcImageryProviderUrltemplateProps = {
    /**
     * The URL template to use to request tiles.
     */
    url: string | Cesium.Resource;
    /**
     * The URL template to use to pick features. If this property is not specified, UrlTemplateImageryProvider#pickFeatures will immediately returned undefined, indicating no features picked.
     */
    pickFeaturesUrl?: string | Cesium.Resource;
    /**
     * Gets the URL scheme zero padding for each tile coordinate. The format is '000' where each coordinate will be padded on the left with zeros to match the width of the passed string of zeros. e.g. Setting: urlSchemeZeroPadding : { '{x}' : '0000'} will cause an 'x' value of 12 to return the string '0012' for {x} in the generated URL.
     */
    urlSchemeZeroPadding?: AnyObject;
    /**
     * The subdomains to use for the {s} placeholder in the URL template. If this parameter is a single string, each character in the string is a subdomain. If it is an array, each element in the array is a subdomain.
     */
    subdomains?: string | string[];
    /**
     * A credit for the data source, which is displayed on the canvas.
     * Default value: ''
     */
    credit?: Cesium.Credit | string;
    /**
     * The minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems.
     * Default value: 0
     */
    minimumLevel?: number;
    /**
     * The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit.
     */
    maximumLevel?: number;
    /**
     * The VcRectangle, covered by the image.
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
     * true if the images provided by this imagery provider include an alpha channel; otherwise, false. If this property is false, an alpha channel, if present, will be ignored. If this property is true, any images without an alpha channel will be treated as if their alpha is 1.0 everywhere. When this property is false, memory usage and texture upload time are potentially reduced.
     * Default value: true
     */
    hasAlphaChannel?: boolean;
    /**
     * The formats in which to get feature information at a specific location when UrlTemplateImageryProvider#pickFeatures is invoked. If this parameter is not specified, feature picking is disabled.
     */
    getFeatureInfoFormats?: Array<Cesium.GetFeatureInfoFormat>;
    /**
     * If true, UrlTemplateImageryProvider#pickFeatures will request the pickFeaturesUrl and attempt to interpret the features included in the response. If false, UrlTemplateImageryProvider#pickFeatures will immediately return undefined (indicating no pickable features) without communicating with the server. Set this property to false if you know your data source does not support picking features or if you don't want this provider's features to be pickable. Note that this can be dynamically overridden by modifying the UriTemplateImageryProvider#enablePickFeatures property.
     * Default value: true
     */
    enablePickFeatures?: boolean;
    /**
     * Allow to replace custom keywords in the URL template. The object must have strings as keys and functions as values.
     */
    customTags?: AnyObject;
    /**
     * Specify the projection transformation parameters.
     * Default value: false
     */
    projectionTransforms?: ProjectionTransforms;
    /**
     * Triggers before the VcImageryProviderUrltemplate is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcImageryProviderUrltemplate is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcImageryProviderUrltemplate is destroyed.
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
export declare type VcImageryProviderUrltemplateRef = VcComponentPublicInstance<VcImageryProviderUrltemplateProps>;
