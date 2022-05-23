import { VcComponentInternalInstance, VcComponentPublicInstance, VcPosition, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const ellipseGeometryProps: {
    vertexFormat: import("vue").PropType<Cesium.VertexFormat>;
    granularity: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    stRotation: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    rotation: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    extrudedHeight: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    height: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    semiMinorAxis: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    semiMajorAxis: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    center: {
        type: import("vue").PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
        };
    };
};
declare const _default: import("vue").DefineComponent<{
    vertexFormat: import("vue").PropType<Cesium.VertexFormat>;
    granularity: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    stRotation: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    rotation: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    extrudedHeight: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    height: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    semiMinorAxis: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    semiMajorAxis: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    center: {
        type: import("vue").PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
        };
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    vertexFormat: import("vue").PropType<Cesium.VertexFormat>;
    granularity: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    stRotation: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    rotation: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    extrudedHeight: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    height: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    semiMinorAxis: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    semiMajorAxis: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    center: {
        type: import("vue").PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
        };
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
}, {
    rotation: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    stRotation: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
}>;
export default _default;
export declare type VcGeometryEllipseProps = {
    /**
     * The ellipse's center point in the fixed frame.
     */
    center: VcPosition;
    /**
     * The length of the ellipse's semi-major axis in meters.
     */
    semiMajorAxis: number;
    /**
     * The length of the ellipse's semi-minor axis in meters.
     */
    semiMinorAxis: number;
    /**
     * The ellipsoid the ellipse will be on.
     */
    ellipsoid?: Cesium.Ellipsoid;
    /**
     * The distance in meters between the ellipse and the ellipsoid surface.
     */
    height?: number;
    /**
     * The distance in meters between the ellipse's extruded face and the ellipsoid surface.
     */
    extrudedHeight?: number;
    /**
     * The angle of rotation counter-clockwise from north.
     * Default value: 0.0
     */
    rotation?: number;
    /**
     * The rotation of the texture coordinates counter-clockwise from north.
     * Default value: 0.0
     */
    stRotation?: number;
    /**
     * The angular distance between points on the ellipse in radians.
     */
    granularity?: number;
    /**
     * The vertex attributes to be computed.
     */
    vertexFormat?: Cesium.VertexFormat;
    /**
     * Triggers before the VcGeometryEllipse is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGeometryEllipse is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGeometryEllipse is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
};
export declare type VcGeometryEllipseRef = VcComponentPublicInstance<VcGeometryEllipseProps>;
