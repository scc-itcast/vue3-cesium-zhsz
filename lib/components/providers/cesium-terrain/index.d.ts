import type { PropType } from 'vue';
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const cesiumTerrainProviderProps: {
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    ellipsoid: PropType<Cesium.Ellipsoid>;
    url: PropType<string | Promise<string> | Cesium.Resource | Promise<Cesium.Resource>>;
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
};
declare const _default: import("vue").DefineComponent<{
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    ellipsoid: PropType<Cesium.Ellipsoid>;
    url: PropType<string | Promise<string> | Cesium.Resource | Promise<Cesium.Resource>>;
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
    readyPromise: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    ellipsoid: PropType<Cesium.Ellipsoid>;
    url: PropType<string | Promise<string> | Cesium.Resource | Promise<Cesium.Resource>>;
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
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onReadyPromise?: (evt: boolean | import("vue-cesium/es/utils/types").VcImageryProvider | import("vue-cesium/es/utils/types").VcTerrainProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => any;
    onErrorEvent?: (evt: Cesium.TileProviderError) => any;
}, {
    credit: string | Cesium.Credit;
    requestVertexNormals: boolean;
    requestWaterMask: boolean;
    requestMetadata: boolean;
}>;
export default _default;
export declare type VcTerrainProviderCesiumProps = {
    /**
     * The URL of the Cesium terrain server.
     */
    url?: string;
    /**
     * Flag that indicates if the client should request additional lighting information from the server, in the form of per vertex normals if available.
     * Default value: false
     */
    requestVertexNormals?: boolean;
    /**
     * Flag that indicates if the client should request per tile water masks from the server, if available.
     * Default value: false
     */
    requestWaterMask?: boolean;
    /**
     * Flag that indicates if the client should request per tile metadata from the server, if available.
     * Default value: true
     */
    requestMetadata?: boolean;
    /**
     * The ellipsoid. If not specified, the WGS84 ellipsoid is used.
     */
    ellipsoid?: Cesium.Ellipsoid;
    /**
     * A credit for the data source, which is displayed on the canvas.
     */
    credit?: string;
    /**
     * Triggers before the VcTerrainProviderCesium is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcTerrainProviderCesium is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcTerrainProviderCesium is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the terrain provider encounters an asynchronous error.
     */
    onErrorEvent?: (evt: Cesium.TileProviderError) => void;
    /**
     * Triggers when the provider is ready for use.
     */
    onReadyPromise?: (evt: boolean, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => void;
};
export declare type VcTerrainProviderCesiumRef = VcComponentPublicInstance<VcTerrainProviderCesiumProps>;
