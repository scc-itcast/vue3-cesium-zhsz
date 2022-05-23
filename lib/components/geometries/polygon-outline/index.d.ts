import { VcComponentInternalInstance, VcComponentPublicInstance, VcPolygonHierarchy, VcReadyObject } from 'vue-cesium/es/utils/types';
import type { ExtractPropTypes } from 'vue';
export declare const polygonOutlineGeometryProps: {
    arcType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    perPositionHeight: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    granularity: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    vertexFormat: import("vue").PropType<Cesium.VertexFormat>;
    extrudedHeight: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    height: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    polygonHierarchy: {
        type: import("vue").PropType<VcPolygonHierarchy>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makePolygonHierarchy;
            deep: boolean;
        };
    };
};
declare const _default: import("vue").DefineComponent<{
    arcType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    perPositionHeight: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    granularity: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    vertexFormat: import("vue").PropType<Cesium.VertexFormat>;
    extrudedHeight: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    height: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
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
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    arcType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    perPositionHeight: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    granularity: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    vertexFormat: import("vue").PropType<Cesium.VertexFormat>;
    extrudedHeight: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    height: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
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
    arcType: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    perPositionHeight: boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>;
}>;
export default _default;
export declare type VcGeometryPolygonOutlineProps = {
    /**
     * A polygon hierarchy that can include holes.
     */
    polygonHierarchy: VcPolygonHierarchy;
    /**
     * The distance in meters between the polygon and the ellipsoid surface.
     */
    height?: number;
    /**
     * The distance in meters between the polygon's extruded face and the ellipsoid surface.
     */
    extrudedHeight?: number;
    /**
     * The vertex attributes to be computed.
     */
    vertexFormat?: Cesium.VertexFormat;
    /**
     * The ellipsoid to be used as a reference.
     */
    ellipsoid?: Cesium.Ellipsoid;
    /**
     * The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer.
     */
    granularity?: number;
    /**
     * Use the height of options.positions for each position instead of using options.height to determine the height.
     * Default value: false
     */
    perPositionHeight?: boolean;
    /**
     * The type of line the polygon edges must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB.
     */
    arcType?: number | Cesium.ArcType;
    /**
     * Triggers before the VcGeometryPolygonOutline is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGeometryPolygonOutline is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGeometryPolygonOutline is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
};
export declare type VcGeometryPolygonOutlineRef = VcComponentPublicInstance<VcGeometryPolygonOutlineProps>;
