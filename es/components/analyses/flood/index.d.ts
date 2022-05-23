import { PropType } from 'vue';
import { VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcPolygonHierarchy, VcReadyObject } from 'vue-cesium/es/utils/types';
declare const _default: import("vue").DefineComponent<{
    polygonHierarchy: {
        type: PropType<VcPolygonHierarchy>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("vue-cesium/es/utils/cesium-helpers").makePolygonHierarchy;
            deep: boolean;
        };
    };
    minHeight: {
        type: NumberConstructor;
        default: number;
    };
    maxHeight: {
        type: NumberConstructor;
        default: number;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: PropType<VcColor>;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    stop: (evt: Cesium.ClassificationPrimitive) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    polygonHierarchy: {
        type: PropType<VcPolygonHierarchy>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("vue-cesium/es/utils/cesium-helpers").makePolygonHierarchy;
            deep: boolean;
        };
    };
    minHeight: {
        type: NumberConstructor;
        default: number;
    };
    maxHeight: {
        type: NumberConstructor;
        default: number;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: PropType<VcColor>;
        default: string;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onStop?: (evt: Cesium.ClassificationPrimitive) => any;
}, {
    color: VcColor;
    loop: boolean;
    minHeight: number;
    maxHeight: number;
    speed: number;
}>;
export default _default;
export interface VcAnalysisFloodProps {
    /**
     * Specify the minimum elevation.
     * Default value: -1
     */
    minHeight?: number;
    /**
     * Specify the maximum elevation.
     * Default value: 8888
     */
    maxHeight?: number;
    /**
     * Specify the height to increase each frame.
     * Default value: 10
     */
    speed?: number;
    /**
     * Specify whether to restart after reaching the maximum height.
     * Default value: false
     */
    loop?: boolean;
    /**
     * Specify the VcColor of water.
     * Default value: rgba(40,150,200,0.6)
     */
    color?: VcColor;
    /**
     * Specify ths VcPolygonHierarchy of polygon.
     */
    polygonHierarchy: VcPolygonHierarchy;
    /**
     * Triggers before the VcAnalysisFlood is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcAnalysisFlood is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcAnalysisFlood is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the maxHeight is reached.
     */
    onStop?: (evt: Cesium.ClassificationPrimitive) => void;
}
export interface VcAnalysisFloodRef extends VcComponentPublicInstance<VcAnalysisFloodProps> {
    /**
     * Start flood analysis
     */
    start: () => void;
    /**
     * Pause flood analysis
     */
    pause: () => void;
    /**
     * Stop flood analysis
     */
    stop: (removeLatest?: boolean) => void;
}
