import { VcComponentInternalInstance, VcComponentPublicInstance, VcPosition, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const frustumOutlineGeometryProps: {
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
export declare type VcGeometryFrustumOutlineProps = {
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
     * Triggers before the VcGeometryFrustumOutline is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGeometryFrustumOutline is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGeometryFrustumOutline is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
};
export declare type VcGeometryFrustumOutlineRef = VcComponentPublicInstance<VcGeometryFrustumOutlineProps>;
