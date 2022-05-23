import { App } from 'vue';
import { SFCWithInstall } from 'vue-cesium/es/utils/types';
declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;
export declare const VcImageryProviderAmap: SFCWithInstall<import("vue").DefineComponent<{
    projectionTransforms: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").ProjectionTransforms>;
        default: boolean;
    };
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    subdomains: {
        type: import("vue").PropType<string[]>;
        default: () => string[];
    };
    domain: {
        type: import("vue").PropType<"webrd" | "webst">;
        default: string;
    };
    lang: {
        type: import("vue").PropType<"zh_cn" | "en">;
        default: string;
    };
    mapStyle: {
        type: import("vue").PropType<"6" | "7" | "8">;
        default: string;
    };
    scl: {
        type: import("vue").PropType<"1" | "2">;
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
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    projectionTransforms: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").ProjectionTransforms>;
        default: boolean;
    };
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    subdomains: {
        type: import("vue").PropType<string[]>;
        default: () => string[];
    };
    domain: {
        type: import("vue").PropType<"webrd" | "webst">;
        default: string;
    };
    lang: {
        type: import("vue").PropType<"zh_cn" | "en">;
        default: string;
    };
    mapStyle: {
        type: import("vue").PropType<"6" | "7" | "8">;
        default: string;
    };
    scl: {
        type: import("vue").PropType<"1" | "2">;
        default: string;
    };
    ltype: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    lang: "zh_cn" | "en";
    url: string;
    projectionTransforms: import("vue-cesium/es/utils/types").ProjectionTransforms;
    minimumLevel: number;
    subdomains: string[];
    domain: "webrd" | "webst";
    mapStyle: "6" | "7" | "8";
    scl: "1" | "2";
    ltype: string;
}>>;
export declare const VcImageryProviderArcgis: SFCWithInstall<import("vue").DefineComponent<{
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
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
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
    tileDiscardPolicy: import("vue").PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
    token: StringConstructor;
    url: {
        type: import("vue").PropType<string | Cesium.Resource>;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
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
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
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
    tileDiscardPolicy: import("vue").PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
    token: StringConstructor;
    url: {
        type: import("vue").PropType<string | Cesium.Resource>;
        default: string;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    url: string | Cesium.Resource;
    tileHeight: number;
    tileWidth: number;
    enablePickFeatures: boolean;
    usePreCachedTilesIfAvailable: boolean;
}>>;
export declare const VcImageryProviderBaidu: SFCWithInstall<import("vue").DefineComponent<{
    protocol: {
        type: StringConstructor;
        default: string;
    };
    projectionTransforms: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").ProjectionTransforms>;
        default: () => {
            from: string;
            to: string;
        };
    };
    scale: {
        type: NumberConstructor;
        default: number;
    };
    ak: {
        type: StringConstructor;
        default: string;
    };
    customid: {
        type: import("vue").PropType<"normal" | "darkgreen" | "pink" | "img" | "vec" | "traffic" | "light" | "dark" | "redalert" | "googlelite" | "grassgreen" | "midnight" | "bluish" | "grayscale" | "hardedge">;
        default: string;
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    tileDiscardPolicy: import("vue").PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    url: import("vue").PropType<string | Cesium.Resource>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    protocol: {
        type: StringConstructor;
        default: string;
    };
    projectionTransforms: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").ProjectionTransforms>;
        default: () => {
            from: string;
            to: string;
        };
    };
    scale: {
        type: NumberConstructor;
        default: number;
    };
    ak: {
        type: StringConstructor;
        default: string;
    };
    customid: {
        type: import("vue").PropType<"normal" | "darkgreen" | "pink" | "img" | "vec" | "traffic" | "light" | "dark" | "redalert" | "googlelite" | "grassgreen" | "midnight" | "bluish" | "grayscale" | "hardedge">;
        default: string;
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    tileDiscardPolicy: import("vue").PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    url: import("vue").PropType<string | Cesium.Resource>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    scale: number;
    projectionTransforms: import("vue-cesium/es/utils/types").ProjectionTransforms;
    minimumLevel: number;
    protocol: string;
    ak: string;
    customid: "normal" | "darkgreen" | "pink" | "img" | "vec" | "traffic" | "light" | "dark" | "redalert" | "googlelite" | "grassgreen" | "midnight" | "bluish" | "grayscale" | "hardedge";
}>>;
export declare const VcImageryProviderBing: SFCWithInstall<import("vue").DefineComponent<{
    tileDiscardPolicy: import("vue").PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    url: {
        type: import("vue").PropType<string | Cesium.Resource>;
        default: string;
    };
    bmKey: StringConstructor;
    tileProtocol: StringConstructor;
    mapStyle: {
        type: import("vue").PropType<string>;
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
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tileDiscardPolicy: import("vue").PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    url: {
        type: import("vue").PropType<string | Cesium.Resource>;
        default: string;
    };
    bmKey: StringConstructor;
    tileProtocol: StringConstructor;
    mapStyle: {
        type: import("vue").PropType<string>;
        default: string;
    };
    culture: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    url: string | Cesium.Resource;
    mapStyle: string;
    culture: string;
}>>;
export declare const VcImageryProviderGoogle: SFCWithInstall<import("vue").DefineComponent<{
    metadata: import("vue").PropType<Cesium.GoogleEarthEnterpriseMetadata>;
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    tileDiscardPolicy: import("vue").PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    url: import("vue").PropType<string | Cesium.Resource>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    metadata: import("vue").PropType<Cesium.GoogleEarthEnterpriseMetadata>;
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    tileDiscardPolicy: import("vue").PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    url: import("vue").PropType<string | Cesium.Resource>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
}>>;
export declare const VcImageryProviderGrid: SFCWithInstall<import("vue").DefineComponent<{
    canvasSize: {
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
    glowWidth: {
        type: NumberConstructor;
        default: number;
    };
    backgroundColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    glowColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    cells: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    canvasSize: {
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
    glowWidth: {
        type: NumberConstructor;
        default: number;
    };
    backgroundColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    glowColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    cells: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    color: import("vue-cesium/es/utils/types").VcColor;
    backgroundColor: import("vue-cesium/es/utils/types").VcColor;
    tileHeight: number;
    tileWidth: number;
    canvasSize: number;
    glowWidth: number;
    glowColor: import("vue-cesium/es/utils/types").VcColor;
    cells: number;
}>>;
export declare const VcImageryProviderIon: SFCWithInstall<import("vue").DefineComponent<{
    server: import("vue").PropType<string | Cesium.Resource>;
    accessToken: StringConstructor;
    assetId: NumberConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    server: import("vue").PropType<string | Cesium.Resource>;
    accessToken: StringConstructor;
    assetId: NumberConstructor;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {}>>;
export declare const VcImageryProviderMapbox: SFCWithInstall<import("vue").DefineComponent<{
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    tilesize: {
        type: NumberConstructor;
        default: number;
    };
    scaleFactor: BooleanConstructor;
    accessToken: StringConstructor;
    url: {
        type: import("vue").PropType<string | Cesium.Resource>;
        default: string;
    };
    username: {
        type: StringConstructor;
        default: string;
    };
    styleId: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    tilesize: {
        type: NumberConstructor;
        default: number;
    };
    scaleFactor: BooleanConstructor;
    accessToken: StringConstructor;
    url: {
        type: import("vue").PropType<string | Cesium.Resource>;
        default: string;
    };
    username: {
        type: StringConstructor;
        default: string;
    };
    styleId: StringConstructor;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    url: string | Cesium.Resource;
    minimumLevel: number;
    tilesize: number;
    scaleFactor: boolean;
    username: string;
}>>;
export declare const VcImageryProviderOsm: SFCWithInstall<import("vue").DefineComponent<{
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
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    fileExtension: {
        type: StringConstructor;
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    fileExtension: {
        type: StringConstructor;
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    url: string;
    minimumLevel: number;
    fileExtension: string;
}>>;
export declare const VcImageryProviderSingletile: SFCWithInstall<import("vue").DefineComponent<{
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    url: import("vue").PropType<string | Cesium.Resource>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    url: import("vue").PropType<string | Cesium.Resource>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
}>>;
export declare const VcImageryProviderSupermap: SFCWithInstall<import("vue").DefineComponent<{
    projectionTransforms: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").ProjectionTransforms>;
        default: boolean;
    };
    name: StringConstructor;
    transparent: {
        type: BooleanConstructor;
        default: boolean;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
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
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    projectionTransforms: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").ProjectionTransforms>;
        default: boolean;
    };
    name: StringConstructor;
    transparent: {
        type: BooleanConstructor;
        default: boolean;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    url: StringConstructor;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    transparent: boolean;
    projectionTransforms: import("vue-cesium/es/utils/types").ProjectionTransforms;
    minimumLevel: number;
}>>;
export declare const VcImageryProviderTencent: SFCWithInstall<import("vue").DefineComponent<{
    projectionTransforms: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").ProjectionTransforms>;
        default: boolean;
    };
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    subdomains: {
        type: import("vue").PropType<string[]>;
        default: () => string[];
    };
    mapStyle: {
        type: import("vue").PropType<"img" | "terrain" | "vector">;
        default: string;
    };
    styleId: {
        type: StringConstructor;
        default: string;
    };
    protocol: import("vue").PropType<"https" | "http">;
    url: import("vue").PropType<string | Cesium.Resource>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    projectionTransforms: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").ProjectionTransforms>;
        default: boolean;
    };
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    subdomains: {
        type: import("vue").PropType<string[]>;
        default: () => string[];
    };
    mapStyle: {
        type: import("vue").PropType<"img" | "terrain" | "vector">;
        default: string;
    };
    styleId: {
        type: StringConstructor;
        default: string;
    };
    protocol: import("vue").PropType<"https" | "http">;
    url: import("vue").PropType<string | Cesium.Resource>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    projectionTransforms: import("vue-cesium/es/utils/types").ProjectionTransforms;
    minimumLevel: number;
    subdomains: string[];
    mapStyle: "img" | "terrain" | "vector";
    styleId: string;
}>>;
export declare const VcImageryProviderTianditu: SFCWithInstall<import("vue").DefineComponent<{
    projectionTransforms: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").ProjectionTransforms>;
        default: boolean;
    };
    mapStyle: {
        type: import("vue").PropType<"cia_c" | "cia_w" | "cta_c" | "cta_w" | "cva_c" | "cva_w" | "ela_c" | "ela_w" | "eva_c" | "eva_w" | "img_c" | "img_w" | "ter_c" | "ter_w" | "vec_c" | "vec_w" | "ibo_c" | "ibo_w">;
        default: string;
        validator: (v: string) => boolean;
    };
    token: StringConstructor;
    protocol: {
        type: StringConstructor;
        default: string;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    url: import("vue").PropType<string | Cesium.Resource>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    projectionTransforms: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").ProjectionTransforms>;
        default: boolean;
    };
    mapStyle: {
        type: import("vue").PropType<"cia_c" | "cia_w" | "cta_c" | "cta_w" | "cva_c" | "cva_w" | "ela_c" | "ela_w" | "eva_c" | "eva_w" | "img_c" | "img_w" | "ter_c" | "ter_w" | "vec_c" | "vec_w" | "ibo_c" | "ibo_w">;
        default: string;
        validator: (v: string) => boolean;
    };
    token: StringConstructor;
    protocol: {
        type: StringConstructor;
        default: string;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    url: import("vue").PropType<string | Cesium.Resource>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    projectionTransforms: import("vue-cesium/es/utils/types").ProjectionTransforms;
    minimumLevel: number;
    mapStyle: "cia_c" | "cia_w" | "cta_c" | "cta_w" | "cva_c" | "cva_w" | "ela_c" | "ela_w" | "eva_c" | "eva_w" | "img_c" | "img_w" | "ter_c" | "ter_w" | "vec_c" | "vec_w" | "ibo_c" | "ibo_w";
    protocol: string;
}>>;
export declare const VcImageryProviderTileCoordinates: SFCWithInstall<import("vue").DefineComponent<{
    tileHeight: {
        type: NumberConstructor;
        default: number;
    };
    tileWidth: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tileHeight: {
        type: NumberConstructor;
        default: number;
    };
    tileWidth: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    color: import("vue-cesium/es/utils/types").VcColor;
    tileHeight: number;
    tileWidth: number;
}>>;
export declare const VcImageryProviderTms: SFCWithInstall<import("vue").DefineComponent<{
    projectionTransforms: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").ProjectionTransforms>;
        default: boolean;
    };
    flipXY: BooleanConstructor;
    tileHeight: {
        type: NumberConstructor;
        default: number;
    };
    tileWidth: {
        type: NumberConstructor;
        default: number;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    fileExtension: {
        type: StringConstructor;
        default: string;
    };
    url: import("vue").PropType<string | Promise<string> | Cesium.Resource | Promise<Cesium.Resource>>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    projectionTransforms: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").ProjectionTransforms>;
        default: boolean;
    };
    flipXY: BooleanConstructor;
    tileHeight: {
        type: NumberConstructor;
        default: number;
    };
    tileWidth: {
        type: NumberConstructor;
        default: number;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    fileExtension: {
        type: StringConstructor;
        default: string;
    };
    url: import("vue").PropType<string | Promise<string> | Cesium.Resource | Promise<Cesium.Resource>>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    projectionTransforms: import("vue-cesium/es/utils/types").ProjectionTransforms;
    minimumLevel: number;
    tileHeight: number;
    tileWidth: number;
    fileExtension: string;
    flipXY: boolean;
}>>;
export declare const VcImageryProviderTiledcache: SFCWithInstall<import("vue").DefineComponent<{
    dir: {
        type: StringConstructor;
        reqiured: boolean;
    };
    scales: {
        type: import("vue").PropType<number[]>;
        default: () => number[];
    };
    tileHeight: {
        type: NumberConstructor;
        default: number;
    };
    tileWidth: {
        type: NumberConstructor;
        default: number;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    url: import("vue").PropType<string | Cesium.Resource>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    dir: {
        type: StringConstructor;
        reqiured: boolean;
    };
    scales: {
        type: import("vue").PropType<number[]>;
        default: () => number[];
    };
    tileHeight: {
        type: NumberConstructor;
        default: number;
    };
    tileWidth: {
        type: NumberConstructor;
        default: number;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    url: import("vue").PropType<string | Cesium.Resource>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    minimumLevel: number;
    tileHeight: number;
    tileWidth: number;
    scales: number[];
    format: string;
}>>;
export declare const VcImageryProviderUrltemplate: SFCWithInstall<import("vue").DefineComponent<{
    projectionTransforms: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").ProjectionTransforms>;
        default: boolean;
    };
    customTags: ObjectConstructor;
    enablePickFeatures: {
        type: BooleanConstructor;
        default: boolean;
    };
    getFeatureInfoFormats: import("vue").PropType<Cesium.GetFeatureInfoFormat[]>;
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
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    subdomains: import("vue").PropType<string | string[]>;
    pickFeaturesUrl: import("vue").PropType<string | Cesium.Resource>;
    urlSchemeZeroPadding: ObjectConstructor;
    url: import("vue").PropType<string | Cesium.Resource>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    projectionTransforms: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").ProjectionTransforms>;
        default: boolean;
    };
    customTags: ObjectConstructor;
    enablePickFeatures: {
        type: BooleanConstructor;
        default: boolean;
    };
    getFeatureInfoFormats: import("vue").PropType<Cesium.GetFeatureInfoFormat[]>;
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
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumLevel: NumberConstructor;
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    subdomains: import("vue").PropType<string | string[]>;
    pickFeaturesUrl: import("vue").PropType<string | Cesium.Resource>;
    urlSchemeZeroPadding: ObjectConstructor;
    url: import("vue").PropType<string | Cesium.Resource>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    projectionTransforms: import("vue-cesium/es/utils/types").ProjectionTransforms;
    minimumLevel: number;
    tileHeight: number;
    tileWidth: number;
    enablePickFeatures: boolean;
    hasAlphaChannel: boolean;
}>>;
export declare const VcImageryProviderWms: SFCWithInstall<import("vue").DefineComponent<{
    getFeatureInfoUrl: import("vue").PropType<string | Cesium.Resource>;
    times: import("vue").PropType<Cesium.TimeIntervalCollection>;
    clock: import("vue").PropType<Cesium.Clock>;
    subdomains: import("vue").PropType<string | string[]>;
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
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
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    getFeatureInfoFormats: import("vue").PropType<Cesium.GetFeatureInfoFormat[]>;
    enablePickFeatures: {
        type: BooleanConstructor;
        default: boolean;
    };
    parameters: ObjectConstructor;
    getFeatureInfoParameters: ObjectConstructor;
    layers: StringConstructor;
    url: import("vue").PropType<string | Cesium.Resource>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    getFeatureInfoUrl: import("vue").PropType<string | Cesium.Resource>;
    times: import("vue").PropType<Cesium.TimeIntervalCollection>;
    clock: import("vue").PropType<Cesium.Clock>;
    subdomains: import("vue").PropType<string | string[]>;
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
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
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    tilingScheme: import("vue").PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    getFeatureInfoFormats: import("vue").PropType<Cesium.GetFeatureInfoFormat[]>;
    enablePickFeatures: {
        type: BooleanConstructor;
        default: boolean;
    };
    parameters: ObjectConstructor;
    getFeatureInfoParameters: ObjectConstructor;
    layers: StringConstructor;
    url: import("vue").PropType<string | Cesium.Resource>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    minimumLevel: number;
    tileHeight: number;
    tileWidth: number;
    enablePickFeatures: boolean;
}>>;
export declare const VcImageryProviderWmts: SFCWithInstall<import("vue").DefineComponent<{
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
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
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
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
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
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
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
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    minimumLevel: number;
    tileHeight: number;
    tileWidth: number;
    format: string;
}>>;
export declare const VcTerrainProviderCesium: SFCWithInstall<import("vue").DefineComponent<{
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    url: import("vue").PropType<string | Promise<string> | Cesium.Resource | Promise<Cesium.Resource>>;
    requestVertexNormals: {
        type: BooleanConstructor;
        default: boolean;
    };
    requestWaterMask: {
        type: BooleanConstructor;
        default: boolean;
    };
    requestMetadata: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    url: import("vue").PropType<string | Promise<string> | Cesium.Resource | Promise<Cesium.Resource>>;
    requestVertexNormals: {
        type: BooleanConstructor;
        default: boolean;
    };
    requestWaterMask: {
        type: BooleanConstructor;
        default: boolean;
    };
    requestMetadata: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    requestVertexNormals: boolean;
    requestWaterMask: boolean;
    requestMetadata: boolean;
}>>;
export declare const VcTerrainProviderArcgis: SFCWithInstall<import("vue").DefineComponent<{
    token: StringConstructor;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    url: {
        type: import("vue").PropType<string | Cesium.Resource>;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    token: StringConstructor;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    url: {
        type: import("vue").PropType<string | Cesium.Resource>;
        default: string;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    url: string | Cesium.Resource;
}>>;
export declare const VcTerrainProviderVrTheworld: SFCWithInstall<import("vue").DefineComponent<{
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    url: {
        type: import("vue").PropType<string | Promise<string> | Cesium.Resource | Promise<Cesium.Resource>>;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    url: {
        type: import("vue").PropType<string | Promise<string> | Cesium.Resource | Promise<Cesium.Resource>>;
        default: string;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    url: string | Promise<string> | Cesium.Resource | Promise<Cesium.Resource>;
}>>;
export declare const VcTerrainProviderTianditu: SFCWithInstall<import("vue").DefineComponent<{
    url: {
        type: StringConstructor;
        default: string;
    };
    subdomains: {
        type: import("vue").PropType<string[]>;
        default: () => string[];
    };
    pluginPath: {
        type: StringConstructor;
        default: string;
    };
    dataType: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    tileType: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    token: StringConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    url: {
        type: StringConstructor;
        default: string;
    };
    subdomains: {
        type: import("vue").PropType<string[]>;
        default: () => string[];
    };
    pluginPath: {
        type: StringConstructor;
        default: string;
    };
    dataType: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    tileType: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    token: StringConstructor;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    url: string;
    subdomains: string[];
    pluginPath: string;
    dataType: string;
    tileType: string;
}>>;
export * from './amap';
export * from './arcgis/imagery';
export * from './arcgis/terrain';
export * from './baidu';
export * from './bingmaps';
export * from './cesium-terrain';
export * from './google-earth';
export * from './grid';
export * from './ion';
export * from './mapbox-style';
export * from './osm';
export * from './single-tile';
export * from './supermap';
export * from './tencent';
export * from './tianditu/imagery';
export * from './tianditu/terrain';
export * from './tile-coordinates';
export * from './tile-map-service';
export * from './tiled-cache';
export * from './url-template';
export * from './vr-theworld';
export * from './wms';
export * from './wmts';
