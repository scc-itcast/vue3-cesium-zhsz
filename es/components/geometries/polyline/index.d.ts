import { VcCartesian3Array, VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const polylineGeometryProps: {
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    vertexFormat: import("vue").PropType<Cesium.VertexFormat>;
    granularity: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    arcType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    colorsPerVertex: {
        type: BooleanConstructor;
        default: boolean;
    };
    colors: {
        type: import("vue").PropType<VcColor[]>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColors;
        };
    };
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
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    vertexFormat: import("vue").PropType<Cesium.VertexFormat>;
    granularity: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    arcType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    colorsPerVertex: {
        type: BooleanConstructor;
        default: boolean;
    };
    colors: {
        type: import("vue").PropType<VcColor[]>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColors;
        };
    };
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
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    vertexFormat: import("vue").PropType<Cesium.VertexFormat>;
    granularity: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    arcType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    colorsPerVertex: {
        type: BooleanConstructor;
        default: boolean;
    };
    colors: {
        type: import("vue").PropType<VcColor[]>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColors;
        };
    };
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
    arcType: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    colorsPerVertex: boolean;
}>;
export default _default;
export declare type VcGeometryPolylineProps = {
    /**
     * An array of VcCartesian3Array defining the positions in the polyline as a line strip
     */
    positions?: VcCartesian3Array;
    /**
     * The width in pixels
     * Default value: 1.0
     */
    width?: number;
    /**
     * An Array of VcColor defining the per vertex or per segment colors
     */
    colors?: Array<VcColor>;
    /**
     * A boolean that determines whether the colors will be flat across each segment of the line or interpolated across the vertices
     * Default value: false
     */
    colorsPerVertex?: boolean;
    /**
     * The type of line the polyline segments must follow
     * Default value: 1 - Cesium.ArcType.GEODESIC
     */
    arcType?: Cesium.ArcType | number;
    /**
     * The distance, in radians, between each latitude and longitude if options.arcType is not ArcType.NONE. Determines the number of positions in the buffer
     */
    granularity?: number;
    /**
     * The vertex attributes to be computed.
     */
    vertexFormat?: Cesium.VertexFormat;
    /**
     * The ellipsoid to be used as a reference.
     */
    ellipsoid?: Cesium.Ellipsoid;
    /**
     * Triggers before the VcGeometryPolyline is loaded
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGeometryPolyline is successfully loaded
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGeometryPolyline is destroyed
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
};
export declare type VcGeometryPolylineRef = VcComponentPublicInstance<VcGeometryPolylineProps>;
