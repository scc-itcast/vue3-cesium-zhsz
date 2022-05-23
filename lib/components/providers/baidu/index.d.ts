import type { PropType } from 'vue';
import type { ProjectionTransforms, VcComponentInternalInstance, VcComponentPublicInstance, VcImageryProvider, VcReadyObject, VcRectangle } from 'vue-cesium/es/utils/types';
export declare const baiduImageryProviderProps: {
    protocol: {
        type: StringConstructor;
        default: string;
    };
    projectionTransforms: {
        type: PropType<ProjectionTransforms>;
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
        type: PropType<"normal" | "darkgreen" | "pink" | "img" | "vec" | "traffic" | "light" | "dark" | "redalert" | "googlelite" | "grassgreen" | "midnight" | "bluish" | "grayscale" | "hardedge">;
        default: string;
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
    tileDiscardPolicy: PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
    ellipsoid: PropType<Cesium.Ellipsoid>;
    rectangle: {
        type: PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    url: PropType<string | Cesium.Resource>;
};
declare const _default: import("vue").DefineComponent<{
    protocol: {
        type: StringConstructor;
        default: string;
    };
    projectionTransforms: {
        type: PropType<ProjectionTransforms>;
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
        type: PropType<"normal" | "darkgreen" | "pink" | "img" | "vec" | "traffic" | "light" | "dark" | "redalert" | "googlelite" | "grassgreen" | "midnight" | "bluish" | "grayscale" | "hardedge">;
        default: string;
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
    tileDiscardPolicy: PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
    ellipsoid: PropType<Cesium.Ellipsoid>;
    rectangle: {
        type: PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
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
    protocol: {
        type: StringConstructor;
        default: string;
    };
    projectionTransforms: {
        type: PropType<ProjectionTransforms>;
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
        type: PropType<"normal" | "darkgreen" | "pink" | "img" | "vec" | "traffic" | "light" | "dark" | "redalert" | "googlelite" | "grassgreen" | "midnight" | "bluish" | "grayscale" | "hardedge">;
        default: string;
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
    tileDiscardPolicy: PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
    ellipsoid: PropType<Cesium.Ellipsoid>;
    rectangle: {
        type: PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    url: PropType<string | Cesium.Resource>;
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    scale: number;
    projectionTransforms: ProjectionTransforms;
    minimumLevel: number;
    protocol: string;
    ak: string;
    customid: "normal" | "darkgreen" | "pink" | "img" | "vec" | "traffic" | "light" | "dark" | "redalert" | "googlelite" | "grassgreen" | "midnight" | "bluish" | "grayscale" | "hardedge";
}>;
export default _default;
export declare type VcImageryProviderBaiduProps = {
    /**
     * The URL of the Baidu Imagery service.
     */
    url?: string | Cesium.Resource;
    /**
     * The rectangle of the layer. This parameter is ignored when accessing a tiled layer.
     */
    rectangle?: VcRectangle;
    /**
     * The ellipsoid. If the tilingScheme is specified and used, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.
     */
    ellipsoid?: Cesium.Ellipsoid;
    /**
     * The policy that determines if a tile is invalid and should be discarded. If this value is not specified, a default DiscardMissingTileImagePolicy is used for tiled map servers, and a NeverTileDiscardPolicy is used for non-tiled map servers. In the former case, we request tile 0,0 at the maximum tile level and check pixels (0,0), (200,20), (20,200), (80,110), and (160, 130). If all of these pixels are transparent, the discard check is disabled and no tiles are discarded. If any of them have a non-transparent color, any tile that has the same values in these pixel locations is discarded. The end result of these defaults should be correct tile discarding for a standard ArcGIS Server. To ensure that no tiles are discarded, construct and pass a NeverTileDiscardPolicy for this parameter.
     */
    tileDiscardPolicy?: Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy;
    /**
     * A credit for the data source, which is displayed on the canvas. This parameter is ignored when accessing a tiled server.
     */
    credit?: string | Cesium.Credit;
    /**
     * The minimumLevel tile level to request, or undefined if there is no minimumLevel. This parameter is ignored when accessing a tiled server.
     */
    minimumLevel?: number;
    /**
     * The maximum tile level to request, or undefined if there is no maximum. This parameter is ignored when accessing a tiled server.
     */
    maximumLevel?: number;
    /**
     * Specify protocol of service.
     * Default value: https
     */
    protocol?: string;
    /**
     * Specify the scale
     */
    scale?: number;
    /**
     * Specify the baidumap key
     */
    ak?: string;
    /**
     * Specify the customid
     */
    customid?: 'img' | 'vec' | 'traffic' | 'normal' | 'light' | 'dark' | 'redalert' | 'googlelite' | 'grassgreen' | 'midnight' | 'pink' | 'darkgreen' | 'bluish' | 'grayscale' | 'hardedge';
    /**
     * Specify the projection transformation parameters. such as { from: 'BD09', to: 'WGS84' }
     */
    projectionTransforms?: ProjectionTransforms;
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
    onReadyPromise?: (evt: boolean | VcImageryProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => void;
};
export declare type VcImageryProviderBaiduRef = VcComponentPublicInstance<VcImageryProviderBaiduProps>;
