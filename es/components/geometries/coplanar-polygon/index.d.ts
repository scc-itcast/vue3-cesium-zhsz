import { VcComponentInternalInstance, VcComponentPublicInstance, VcPolygonHierarchy, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const polygonCoplanarProps: {
    stRotation: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    vertexFormat: import("vue").PropType<Cesium.VertexFormat>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    polygonHierarchy: {
        type: import("vue").PropType<VcPolygonHierarchy>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makePolygonHierarchy;
            deep: boolean;
        };
    };
};
declare const _default: import("vue").DefineComponent<{
    stRotation: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    vertexFormat: import("vue").PropType<Cesium.VertexFormat>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    polygonHierarchy: {
        type: import("vue").PropType<VcPolygonHierarchy>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makePolygonHierarchy;
            deep: boolean;
        };
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    stRotation: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    vertexFormat: import("vue").PropType<Cesium.VertexFormat>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    polygonHierarchy: {
        type: import("vue").PropType<VcPolygonHierarchy>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makePolygonHierarchy;
            deep: boolean;
        };
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
}, {
    stRotation: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
}>;
export default _default;
export declare type VcGeometryPolygonCoplanarProps = {
    /**
     * A polygon hierarchy that can include holes.
     */
    polygonHierarchy: VcPolygonHierarchy;
    /**
     * The ellipsoid to be used as a reference.
     */
    ellipsoid?: Cesium.Ellipsoid;
    /**
     * The vertex attributes to be computed.
     */
    vertexFormat?: Cesium.VertexFormat;
    /**
     * The rotation of the texture coordinates, in radians. A positive rotation is counter-clockwise.
     * Default value: 0.0
     */
    stRotation?: number;
    /**
     * Triggers before the VcGeometryPolygonCoplanar is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGeometryPolygonCoplanar is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGeometryPolygonCoplanar is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
};
export declare type VcGeometryPolygonCoplanarRef = VcComponentPublicInstance<VcGeometryPolygonCoplanarProps>;
