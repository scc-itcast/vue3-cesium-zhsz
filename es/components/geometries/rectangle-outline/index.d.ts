import { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject, VcRectangle } from 'vue-cesium/es/utils/types';
export declare const rectangleOutlineGeometryProps: {
    extrudedHeight: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    rotation: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    height: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    granularity: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    rectangle: {
        type: import("vue").PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
};
declare const _default: import("vue").DefineComponent<{
    extrudedHeight: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    rotation: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    height: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    granularity: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    rectangle: {
        type: import("vue").PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    extrudedHeight: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    rotation: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    height: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    granularity: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    rectangle: {
        type: import("vue").PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
}, {
    rotation: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
}>;
export default _default;
export declare type VcGeometryRectangleOutlineProps = {
    /**
     * A cartographic rectangle with north, south, east and west properties in radians.
     */
    rectangle: VcRectangle;
    /**
     * The ellipsoid on which the rectangle lies.
     */
    ellipsoid?: Cesium.Ellipsoid;
    /**
     * The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer.
     */
    granularity?: number;
    /**
     * The distance in meters between the rectangle and the ellipsoid surface.
     */
    height?: number;
    /**
     * The rotation of the rectangle, in radians. A positive rotation is counter-clockwise.
     * Default value: 0.0
     */
    rotation?: number;
    /**
     * The distance in meters between the rectangle's extruded face and the ellipsoid surface.
     */
    extrudedHeight: number;
    /**
     * Triggers before the VcGeometryRectangleOutline is loaded
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGeometryRectangleOutline is successfully loaded
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGeometryRectangleOutline is destroyed
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
};
export declare type VcGeometryRectangleOutlineRef = VcComponentPublicInstance<VcGeometryRectangleOutlineProps>;
