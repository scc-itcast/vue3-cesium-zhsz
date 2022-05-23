import { VcComponentInternalInstance, VcComponentPublicInstance, VcPosition, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const frustumGeometryProps: {
    vertexFormat: import("vue").PropType<Cesium.VertexFormat>;
    orientation: {
        type: import("vue").PropType<Cesium.Quaternion>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeQuaternion;
        };
    };
    origin: {
        type: import("vue").PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
        };
    };
    frustum: import("vue").PropType<Cesium.PerspectiveFrustum | Cesium.OrthographicFrustum>;
};
declare const _default: import("vue").DefineComponent<{
    vertexFormat: import("vue").PropType<Cesium.VertexFormat>;
    orientation: {
        type: import("vue").PropType<Cesium.Quaternion>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeQuaternion;
        };
    };
    origin: {
        type: import("vue").PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
        };
    };
    frustum: import("vue").PropType<Cesium.PerspectiveFrustum | Cesium.OrthographicFrustum>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    vertexFormat: import("vue").PropType<Cesium.VertexFormat>;
    orientation: {
        type: import("vue").PropType<Cesium.Quaternion>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeQuaternion;
        };
    };
    origin: {
        type: import("vue").PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
        };
    };
    frustum: import("vue").PropType<Cesium.PerspectiveFrustum | Cesium.OrthographicFrustum>;
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
}, {}>;
export default _default;
export declare type VcGeometryFrustumProps = {
    /**
     * The frustum.
     */
    frustum: Cesium.PerspectiveFrustum | Cesium.OrthographicFrustum;
    /**
     * The origin of the frustum.
     */
    origin: VcPosition;
    /**
     * The orientation of the frustum.
     */
    orientation: Cesium.Quaternion;
    /**
     * The vertex attributes to be computed.
     */
    vertexFormat?: Cesium.VertexFormat;
    /**
     * Triggers before the VcGeometryFrustum is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGeometryFrustum is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGeometryFrustum is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
};
export declare type VcGeometryFrustumRef = VcComponentPublicInstance<VcGeometryFrustumProps>;
