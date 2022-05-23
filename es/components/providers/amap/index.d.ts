import type { PropType } from 'vue';
import type { ProjectionTransforms, VcComponentInternalInstance, VcComponentPublicInstance, VcImageryProvider, VcReadyObject, VcRectangle } from 'vue-cesium/es/utils/types';
export declare const amapImageryProviderProps: {
    projectionTransforms: {
        type: PropType<ProjectionTransforms>;
        default: boolean;
    };
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
    url: {
        type: StringConstructor;
        default: string;
    };
    subdomains: {
        type: PropType<string[]>;
        default: () => string[];
    };
    domain: {
        type: PropType<"webrd" | "webst">;
        default: string;
    };
    lang: {
        type: PropType<"zh_cn" | "en">;
        default: string;
    };
    mapStyle: {
        type: PropType<"6" | "7" | "8">;
        default: string;
    };
    scl: {
        type: PropType<"1" | "2">;
        default: string;
    };
    ltype: {
        type: StringConstructor;
        default: string;
    };
};
declare const _default: import("vue").DefineComponent<{
    projectionTransforms: {
        type: PropType<ProjectionTransforms>;
        default: boolean;
    };
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
    url: {
        type: StringConstructor;
        default: string;
    };
    subdomains: {
        type: PropType<string[]>;
        default: () => string[];
    };
    domain: {
        type: PropType<"webrd" | "webst">;
        default: string;
    };
    lang: {
        type: PropType<"zh_cn" | "en">;
        default: string;
    };
    mapStyle: {
        type: PropType<"6" | "7" | "8">;
        default: string;
    };
    scl: {
        type: PropType<"1" | "2">;
        default: string;
    };
    ltype: {
        type: StringConstructor;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    projectionTransforms: {
        type: PropType<ProjectionTransforms>;
        default: boolean;
    };
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
    url: {
        type: StringConstructor;
        default: string;
    };
    subdomains: {
        type: PropType<string[]>;
        default: () => string[];
    };
    domain: {
        type: PropType<"webrd" | "webst">;
        default: string;
    };
    lang: {
        type: PropType<"zh_cn" | "en">;
        default: string;
    };
    mapStyle: {
        type: PropType<"6" | "7" | "8">;
        default: string;
    };
    scl: {
        type: PropType<"1" | "2">;
        default: string;
    };
    ltype: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    lang: "zh_cn" | "en";
    url: string;
    projectionTransforms: ProjectionTransforms;
    minimumLevel: number;
    subdomains: string[];
    domain: "webrd" | "webst";
    mapStyle: "6" | "7" | "8";
    scl: "1" | "2";
    ltype: string;
}>;
export default _default;
export interface VcImageryProviderAmapProps {
    /**
     * Specify the URL template.
     * Default value: https://{domain}{s}.is.autonavi.com/appmaptile?lang={lang}&size=1&style={style}&scl={scl}&ltype={ltype}&x={x}&y={y}&z={z}
     */
    url?: string;
    /**
     * Specify the domain name.
     * Default value: webst
     */
    domain?: 'webrd' | 'webst';
    /**
     * Specify the service polling parameters.
     * Default value: ['01', '02', '03', '04']
     */
    subdomains?: string[];
    /**
     * Specify the language.
     * Default value: zh_cn
     */
    lang?: 'zh_cn' | 'en';
    /**
     * Specify the map style type of the amap service. '6': satellite image; '7': road map; '8': road map (with transparent background).
     * Default value: 6
     */
    mapStyle: '6' | '7' | '8';
    /**
     * Specify size control parameters. '1': 256*256; '2': 512*512
     * Default value: 1
     */
    scl?: '1' | '2';
    /**
     * Specify the type parameter. '0': default; '4': only annotations; '8': only roads
     * Default value: 0
     */
    ltype?: string;
    /**
     * A credit for the data source, which is displayed on the canvas.
     */
    credit?: string | Cesium.Credit;
    /**
     * The minimum level-of-detail supported by the imagery provider.
     * Default value: 0
     */
    minimumLevel?: number;
    /**
     * The maximum level-of-detail supported by the imagery provider.
     * Default value: 20
     */
    maximumLevel?: number;
    /**
     * The rectangle, in radians, covered by the image.
     */
    rectangle?: VcRectangle;
    /**
     * The tiling scheme specifying how the ellipsoidal surface is broken into tiles.
     */
    tilingScheme?: Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme;
    /**
     * Specify the projection transformation parameters.
     */
    projectionTransforms?: false | ProjectionTransforms;
    /**
     * Triggers before the VcImageryProviderAmap is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcImageryProviderAmap is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcImageryProviderAmap is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the imagery provider encounters an asynchronous error.
     */
    errorEvent?: (evt: Cesium.TileProviderError) => void;
    /**
     * Triggers when the provider is ready for use.
     */
    readyPromise?: (provider: VcImageryProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => void;
}
export declare type VcImageryProviderAmapRef = VcComponentPublicInstance<VcImageryProviderAmapProps>;
