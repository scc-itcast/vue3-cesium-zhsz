import { VcCartesian3Array, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const wallOutlineProps: {
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    minimumHeights: import("vue").PropType<number[] | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number[]>>;
    maximumHeights: import("vue").PropType<number[] | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number[]>>;
    granularity: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
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
    minimumHeights: import("vue").PropType<number[] | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number[]>>;
    maximumHeights: import("vue").PropType<number[] | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number[]>>;
    granularity: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
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
    minimumHeights: import("vue").PropType<number[] | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number[]>>;
    maximumHeights: import("vue").PropType<number[] | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number[]>>;
    granularity: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
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
}, {}>;
export default _default;
export declare type VcGeometryWallOutlineProps = {
    /**
     * An array of Cartesian objects, which are the points of the wall.
     */
    positions: VcCartesian3Array;
    /**
     * The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer.
     */
    granularity?: number;
    /**
     * An array parallel to positions that give the maximum height of the wall at positions. If undefined, the height of each position in used.
     */
    maximumHeights?: number[];
    /**
     * An array parallel to positions that give the minimum height of the wall at positions. If undefined, the height at each position is 0.0.
     */
    minimumHeights?: number[];
    /**
     * The ellipsoid for coordinate manipulation.
     */
    ellipsoid?: Cesium.Ellipsoid;
    /**
     * Triggers before the VcGeometryWallOutline is loaded
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGeometryWallOutline is successfully loaded
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGeometryWallOutline is destroyed
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
};
export declare type VcGeometryWallOutlineRef = VcComponentPublicInstance<VcGeometryWallOutlineProps>;
