import type { PropType } from 'vue';
import type { VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const tileCoordinatesImageryProviderProps: {
    tileHeight: {
        type: NumberConstructor;
        default: number;
    };
    tileWidth: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: PropType<VcColor>;
        default: string;
    };
    ellipsoid: PropType<Cesium.Ellipsoid>;
    tilingScheme: PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
};
declare const _default: import("vue").DefineComponent<{
    tileHeight: {
        type: NumberConstructor;
        default: number;
    };
    tileWidth: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: PropType<VcColor>;
        default: string;
    };
    ellipsoid: PropType<Cesium.Ellipsoid>;
    tilingScheme: PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    errorEvent: (evt: Cesium.TileProviderError) => boolean;
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
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
        type: PropType<VcColor>;
        default: string;
    };
    ellipsoid: PropType<Cesium.Ellipsoid>;
    tilingScheme: PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    color: VcColor;
    tileHeight: number;
    tileWidth: number;
}>;
export default _default;
export declare type VcImageryProviderTileCoordinatesProps = {
    /**
     * The tiling scheme to use to divide the world into tiles. This parameter is ignored when accessing a tiled server.
     */
    tileScheme?: Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme;
    /**
     * The ellipsoid. If the tilingScheme is specified and used, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.
     */
    ellipsoid?: Cesium.Ellipsoid;
    /**
     * The color to draw the tile box and label.
     * Default value: 'YELLOW'
     */
    color?: VcColor;
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
     * Triggers before the VcImageryProviderTileCoordinates is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcImageryProviderTileCoordinates is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcImageryProviderTileCoordinates is destroyed.
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
export declare type VcImageryProviderTileCoordinatesRef = VcComponentPublicInstance<VcImageryProviderTileCoordinatesProps>;
