import { VcComponentInternalInstance, VcComponentPublicInstance, VcPolygonHierarchy, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const polygonCoplanarOutlineProps: {
    polygonHierarchy: {
        type: import("vue").PropType<VcPolygonHierarchy>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makePolygonHierarchy;
            deep: boolean;
        };
    };
};
declare const _default: import("vue").DefineComponent<{
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
}, {}>;
export default _default;
export declare type VcGeometryPolygonCoplanarOutlineProps = {
    /**
     * A polygon hierarchy that can include holes.
     */
    polygonHierarchy: VcPolygonHierarchy;
    /**
     * Triggers before the VcGeometryPolygonCoplanarOutline is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGeometryPolygonCoplanarOutline is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGeometryPolygonCoplanarOutline is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
};
export declare type VcGeometryPolygonCoplanarOutlineRef = VcComponentPublicInstance<VcGeometryPolygonCoplanarOutlineProps>;
