import type { PropType } from 'vue';
import type { VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcImageryProvider, VcReadyObject } from 'vue-cesium/es/utils/types';
import { makeColor } from 'vue-cesium/es/utils/cesium-helpers';
export declare const gridImageryProviderProps: {
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
        type: PropType<VcColor>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
    glowColor: {
        type: PropType<VcColor>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
    cells: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: PropType<VcColor>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
    ellipsoid: PropType<Cesium.Ellipsoid>;
    tilingScheme: PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
};
declare const _default: import("vue").DefineComponent<{
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
        type: PropType<VcColor>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
    glowColor: {
        type: PropType<VcColor>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
    cells: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: PropType<VcColor>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
    ellipsoid: PropType<Cesium.Ellipsoid>;
    tilingScheme: PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
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
        type: PropType<VcColor>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
    glowColor: {
        type: PropType<VcColor>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
    cells: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: PropType<VcColor>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
    ellipsoid: PropType<Cesium.Ellipsoid>;
    tilingScheme: PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    color: VcColor;
    backgroundColor: VcColor;
    tileHeight: number;
    tileWidth: number;
    canvasSize: number;
    glowWidth: number;
    glowColor: VcColor;
    cells: number;
}>;
export default _default;
export declare type VcImageryProviderGridProps = {
    /**
     * The tiling scheme for which to draw tiles.
     */
    tileScheme?: Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme;
    /**
     * The ellipsoid. If the tilingScheme is specified, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.
     */
    ellipsoid?: Cesium.Ellipsoid;
    /**
     * The number of grids cells.
     * Default value: 8
     */
    cells?: number;
    /**
     * The color to draw grid lines.
     * Default value: [1.0, 1.0, 1.0, 0.4]
     */
    color?: VcColor;
    /**
     * The color to draw glow for grid lines.
     * Default value: [0.0, 1.0, 0.0, 0.05]
     */
    glowColor?: VcColor;
    /**
     * The width of lines used for rendering the line glow effect.
     * Default value: 6
     */
    glowWidth?: number;
    /**
     * Background fill color.
     * Default value: [0.0, 0.5, 0.0, 0.2]
     */
    backgroundColor?: VcColor;
    /**
     * The width of the tile for level-of-detail selection purposes.
     * Default value: 256
     */
    tileWidth?: number;
    /**
     * The height of the tile for level-of-detail selection purposes.
     * Default value: 256
     */
    tileHeight?: number;
    /**
     * The size of the canvas used for rendering.
     * Default value: 256
     */
    canvasSize?: number;
    /**
     * Triggers before the VcImageryProviderGrid is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcImageryProviderGrid is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcImageryProviderGrid is destroyed.
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
export declare type VcImageryProviderGridRef = VcComponentPublicInstance<VcImageryProviderGridProps>;
