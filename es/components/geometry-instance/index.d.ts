import { SFCWithInstall } from 'vue-cesium/es/utils/types';
declare const _GeometryInstance: SFCWithInstall<import("vue").DefineComponent<{
    attributes: ObjectConstructor;
    id: import("vue").PropType<any>;
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
    geometry: import("vue").PropType<Cesium.Geometry | Cesium.GeometryFactory>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:geometry': (payload: import("vue-cesium/es/utils/types").VcGeometry) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    attributes: ObjectConstructor;
    id: import("vue").PropType<any>;
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
    geometry: import("vue").PropType<Cesium.Geometry | Cesium.GeometryFactory>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    "onUpdate:geometry"?: (payload: import("vue-cesium/es/utils/types").VcGeometry) => any;
}, {}>>;
export default _GeometryInstance;
export declare const VcGeometryInstance: SFCWithInstall<import("vue").DefineComponent<{
    attributes: ObjectConstructor;
    id: import("vue").PropType<any>;
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
    geometry: import("vue").PropType<Cesium.Geometry | Cesium.GeometryFactory>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:geometry': (payload: import("vue-cesium/es/utils/types").VcGeometry) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    attributes: ObjectConstructor;
    id: import("vue").PropType<any>;
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
    geometry: import("vue").PropType<Cesium.Geometry | Cesium.GeometryFactory>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    "onUpdate:geometry"?: (payload: import("vue-cesium/es/utils/types").VcGeometry) => any;
}, {}>>;
export * from './src';
