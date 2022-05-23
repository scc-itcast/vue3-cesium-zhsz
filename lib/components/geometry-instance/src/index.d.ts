import type { VcComponentInternalInstance, VcComponentPublicInstance, VcGeometry, VcReadyObject } from 'vue-cesium/es/utils/types';
import { PropType, VNode } from 'vue';
export declare const geometryInstanceProps: {
    attributes: ObjectConstructor;
    id: PropType<any>;
    modelMatrix: PropType<Cesium.Matrix4>;
    geometry: PropType<Cesium.Geometry | Cesium.GeometryFactory>;
};
declare const emits: {
    'update:geometry': (payload: VcGeometry) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
};
declare const _default: import("vue").DefineComponent<{
    attributes: ObjectConstructor;
    id: PropType<any>;
    modelMatrix: PropType<Cesium.Matrix4>;
    geometry: PropType<Cesium.Geometry | Cesium.GeometryFactory>;
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:geometry': (payload: VcGeometry) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    attributes: ObjectConstructor;
    id: PropType<any>;
    modelMatrix: PropType<Cesium.Matrix4>;
    geometry: PropType<Cesium.Geometry | Cesium.GeometryFactory>;
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    "onUpdate:geometry"?: (payload: VcGeometry) => any;
}, {}>;
export default _default;
export declare type VcGeometryInstanceEmits = typeof emits;
export declare type VcGeometryInstanceProps = {
    /**
     * The geometry to instance.
     */
    geometry?: Cesium.Geometry | Cesium.GeometryFactory;
    /**
     * The model matrix that transforms to transform the geometry from model to world coordinates.
     */
    modelMatrix?: Cesium.Matrix4;
    /**
     * A user-defined object to return when the instance is picked with Scene#pick or get/set per-instance attributes with Primitive#getGeometryInstanceAttributes.
     */
    id?: any;
    /**
     * Per-instance attributes like a show or color attribute shown in the example below.
     */
    attributes: any;
    /**
     * Triggers before the VcGeometryInstance is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGeometryInstance is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGeometryInstance is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the geometry mounted.
     */
    'onUpdate:geometry': (payload: VcGeometry) => void;
};
export interface VcGeometryInstanceRef extends VcComponentPublicInstance<VcGeometryInstanceProps> {
    /**
     * private but needed by VcGeometryXXX.
     * @param geometry
     */
    __updateGeometry?(geometry: Cesium.Geometry): boolean;
}
export interface VcGeometryInstanceSlots {
    /**
     * Slot for vc-geometry-xxx.
     */
    default: () => VNode[];
}
