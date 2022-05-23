import type { PropType } from 'vue';
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject, VcRectangle } from 'vue-cesium/es/utils/types';
export declare const mapboxImageryProviderProps: {
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
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
    ellipsoid: PropType<Cesium.Ellipsoid>;
    tilesize: {
        type: NumberConstructor;
        default: number;
    };
    scaleFactor: BooleanConstructor;
    accessToken: StringConstructor;
    url: {
        type: PropType<string | Cesium.Resource>;
        default: string;
    };
    username: {
        type: StringConstructor;
        default: string;
    };
    styleId: StringConstructor;
};
declare const _default: import("vue").DefineComponent<{
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
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
    ellipsoid: PropType<Cesium.Ellipsoid>;
    tilesize: {
        type: NumberConstructor;
        default: number;
    };
    scaleFactor: BooleanConstructor;
    accessToken: StringConstructor;
    url: {
        type: PropType<string | Cesium.Resource>;
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
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
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
    ellipsoid: PropType<Cesium.Ellipsoid>;
    tilesize: {
        type: NumberConstructor;
        default: number;
    };
    scaleFactor: BooleanConstructor;
    accessToken: StringConstructor;
    url: {
        type: PropType<string | Cesium.Resource>;
        default: string;
    };
    username: {
        type: StringConstructor;
        default: string;
    };
    styleId: StringConstructor;
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    url: string | Cesium.Resource;
    minimumLevel: number;
    tilesize: number;
    scaleFactor: boolean;
    username: string;
}>;
export default _default;
export declare type VcImageryProviderMapboxProps = {
    /**
     * The Mapbox server url.
     * Default value: 'https://api.mapbox.com/v4/'
     */
    url?: string | Cesium.Resource;
    /**
     * The username of the map account.
     * Default value: 'mapbox'
     */
    username?: string;
    /**
     * The Mapbox Style ID.
     */
    styleId?: string;
    /**
     * The public access token for the imagery.
     */
    accessToken?: string;
    /**
     * The size of the image tiles.
     * Default value: 512
     */
    tilesize?: number;
    /**
     * Determines if tiles are rendered at a @2x scale factor.
     */
    scaleFactor?: boolean;
    /**
     * The ellipsoid. If not specified, the WGS84 ellipsoid is used.
     */
    ellipsoid?: Cesium.Ellipsoid;
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
     * A credit for the data source, which is displayed on the canvas.
     */
    credit?: string;
    /**
     * Triggers before the VcImageryProviderMapbox is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcImageryProviderMapbox is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcImageryProviderMapbox is destroyed.
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
export declare type VcImageryProviderMapboxRef = VcComponentPublicInstance<VcImageryProviderMapboxProps>;
