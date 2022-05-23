import type { PropType } from 'vue';
import type { ProjectionTransforms, VcComponentInternalInstance, VcComponentPublicInstance, VcImageryProvider, VcReadyObject, VcRectangle } from 'vue-cesium/es/utils/types';
export declare const tencentImageryProviderProps: {
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
    subdomains: {
        type: PropType<string[]>;
        default: () => string[];
    };
    mapStyle: {
        type: PropType<"img" | "terrain" | "vector">;
        default: string;
    };
    styleId: {
        type: StringConstructor;
        default: string;
    };
    protocol: PropType<"https" | "http">;
    url: PropType<string | Cesium.Resource>;
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
    subdomains: {
        type: PropType<string[]>;
        default: () => string[];
    };
    mapStyle: {
        type: PropType<"img" | "terrain" | "vector">;
        default: string;
    };
    styleId: {
        type: StringConstructor;
        default: string;
    };
    protocol: PropType<"https" | "http">;
    url: PropType<string | Cesium.Resource>;
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
    subdomains: {
        type: PropType<string[]>;
        default: () => string[];
    };
    mapStyle: {
        type: PropType<"img" | "terrain" | "vector">;
        default: string;
    };
    styleId: {
        type: StringConstructor;
        default: string;
    };
    protocol: PropType<"https" | "http">;
    url: PropType<string | Cesium.Resource>;
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    projectionTransforms: ProjectionTransforms;
    minimumLevel: number;
    subdomains: string[];
    mapStyle: "img" | "terrain" | "vector";
    styleId: string;
}>;
export default _default;
export interface VcImageryProviderTencentProps {
    /**
     * Specify the URL template.
     */
    url?: string;
    /**
     * Specify the service polling parameters.
     * Default value: ['1', '2', '3']
     */
    subdomains?: string[];
    /**
     * Specify the map style type of the tencent service.
     * Default value: vector
     */
    mapStyle: 'img' | 'terrain' | 'vector';
    /**
     * Specify the map style type of the tencent service. Valid when mapStyle is vector. 1: Classic; 2: Label; 3: Label; 4: Mo Yuan; 8: White Light; 9: Gray
     * Default value: 1
     */
    styleId?: string;
    /**
     * Specify protocol of service.
     */
    protocol?: 'https' | 'http';
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
     * Triggers before the VcImageryProviderTencent is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcImageryProviderTencent is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcImageryProviderTencent is destroyed.
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
export declare type VcImageryProviderTencentRef = VcComponentPublicInstance<VcImageryProviderTencentProps>;
