import { VcComponentInternalInstance, VcComponentPublicInstance, VcPosition, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const ellipseOutlineGeometryProps: {
    numberOfVerticalLines: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
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
    numberOfVerticalLines: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
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
    numberOfVerticalLines: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
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
    numberOfVerticalLines: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
}>;
export default _default;
export declare type VcGeometryEllipseOutlineProps = {
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
     * Number of lines to draw between the top and bottom surface of an extruded ellipse.
     * Default value: 16
     */
    numberOfVerticalLines?: number;
    /**
     * Triggers before the VcGeometryEllipseOutline is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGeometryEllipseOutline is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGeometryEllipseOutline is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
};
export declare type VcGeometryEllipseOutlineRef = VcComponentPublicInstance<VcGeometryEllipseOutlineProps>;
