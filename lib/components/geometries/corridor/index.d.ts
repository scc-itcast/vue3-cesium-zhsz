import { VcCartesian3Array, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const corridorGeometryProps: {
    cornerType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    vertexFormat: import("vue").PropType<Cesium.VertexFormat>;
    extrudedHeight: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    height: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    granularity: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    width: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    positions: {
        type: import("vue").PropType<VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3Array;
            exclude: string;
            deep: boolean;
        };
    };
};
declare const _default: import("vue").DefineComponent<{
    cornerType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    vertexFormat: import("vue").PropType<Cesium.VertexFormat>;
    extrudedHeight: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    height: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    granularity: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    width: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    positions: {
        type: import("vue").PropType<VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3Array;
            exclude: string;
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
    cornerType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    vertexFormat: import("vue").PropType<Cesium.VertexFormat>;
    extrudedHeight: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    height: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    granularity: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    width: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    positions: {
        type: import("vue").PropType<VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3Array;
            exclude: string;
            deep: boolean;
        };
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
}, {
    cornerType: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
}>;
export default _default;
export declare type VcGeometryCorridorProps = {
    /**
     * An array of positions that define the center of the corridor.
     */
    positions: VcCartesian3Array;
    /**
     * The distance between the edges of the corridor in meters.
     */
    width: number;
    /**
     * The ellipsoid to be used as a reference.
     */
    ellipsoid?: Cesium.Ellipsoid;
    /**
     * The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer.
     */
    granularity?: number;
    /**
     * The distance in meters between the ellipsoid surface and the positions.
     */
    height?: number;
    /**
     * The distance in meters between the ellipsoid surface and the extruded face.
     */
    extrudedHeight?: number;
    /**
     * The vertex attributes to be computed.
     */
    vertexFormat?: Cesium.VertexFormat;
    /**
     * Determines the style of the corners.
     */
    cornerType?: Cesium.CornerType | number;
    /**
     * Triggers before the VcGeometryCorridor is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGeometryCorridor is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGeometryCorridor is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
};
export declare type VcGeometryCorridorRef = VcComponentPublicInstance<VcGeometryCorridorProps>;
