import { PropType } from 'vue';
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject, VcRectangle } from 'vue-cesium/es/utils/types';
export declare const tiledcacheImageryProviderProps: {
    dir: {
        type: StringConstructor;
        reqiured: boolean;
    };
    scales: {
        type: PropType<number[]>;
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
    format: {
        type: StringConstructor;
        default: string;
    };
    url: PropType<string | Cesium.Resource>;
};
declare const _default: import("vue").DefineComponent<{
    dir: {
        type: StringConstructor;
        reqiured: boolean;
    };
    scales: {
        type: PropType<number[]>;
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
    format: {
        type: StringConstructor;
        default: string;
    };
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
    dir: {
        type: StringConstructor;
        reqiured: boolean;
    };
    scales: {
        type: PropType<number[]>;
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
    format: {
        type: StringConstructor;
        default: string;
    };
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
    scales: number[];
    format: string;
}>;
export default _default;
export declare type VcImageryProviderTiledcacheProps = {
    /**
     * Path to image tiles on server.
     * Default value: '.'
     */
    url?: string | Cesium.Resource | Promise<string> | Promise<Cesium.Resource>;
    /**
     * Default value: 'png'
     */
    format?: string;
    /**
     * A credit for the data source, which is displayed on the canvas.
     * Default value: ''
     */
    credit?: string | Cesium.Credit;
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
     * The rectangle, in radians, covered by the image.
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
     * Triggers before the VcImageryProviderTiledcache is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcImageryProviderTiledcache is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcImageryProviderTiledcache is destroyed.
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
export declare type VcImageryProviderTiledcacheRef = VcComponentPublicInstance<VcImageryProviderTiledcacheProps>;
