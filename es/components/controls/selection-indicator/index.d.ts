import type { Ref } from 'vue';
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
import type Feature from './Feature';
import type PickedFeatures from './PickedFeatures';
export declare const selectionIndicatorProps: {
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    allowFeatureInfoRequests: {
        type: BooleanConstructor;
        default: boolean;
    };
    limit: {
        type: NumberConstructor;
        default: number;
    };
};
declare const emits: {
    pickEvt: (evt: Feature | Cesium.Entity) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
};
declare const _default: import("vue").DefineComponent<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    allowFeatureInfoRequests: {
        type: BooleanConstructor;
        default: boolean;
    };
    limit: {
        type: NumberConstructor;
        default: number;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    pickEvt: (evt: Cesium.Entity | Feature) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    allowFeatureInfoRequests: {
        type: BooleanConstructor;
        default: boolean;
    };
    limit: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onPickEvt?: (evt: Cesium.Entity | Feature) => any;
}, {
    height: number;
    show: boolean;
    width: number;
    allowFeatureInfoRequests: boolean;
    limit: number;
}>;
export default _default;
export declare type VcSelectionIndicatorEmits = typeof emits;
export interface VcSelectionIndicatorProps {
    /**
     * Specify whether the selection indicator is visible.
     * Default value: true
     */
    show?: boolean;
    /**
     * Specify the width of the selection indicator.
     * Default value: 50
     */
    width?: number;
    /**
     * Specify the height of the selection indicator.
     * Default value: 50
     */
    height?: number;
    /**
     * Asynchronously determines the imagery layer features that are intersected by a pick ray.
     * Default value: true
     */
    allowFeatureInfoRequests?: boolean;
    /**
     * Specify the maximum number of picked objects.
     * Default value: 25
     */
    limit?: number;
    /**
     * Triggers before the VcSelectionIndicator is loaded.
     * @param instance
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcSelectionIndicator is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcSelectionIndicator is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
}
export interface VcSelectionIndicatorRef extends VcComponentPublicInstance<VcSelectionIndicatorProps> {
    /**
     * A function that converts the world position of an object to a screen space position.
     */
    computeScreenSpacePosition: (position: Cesium.Cartesian3, result: Cesium.Cartesian2) => Cesium.Cartesian2;
    /**
     * Updates the view of the selection indicator to match the position and content properties of the view model. This function should be called as part of the render loop.
     */
    update: () => void;
    /**
     * Animate the indicator to draw attention to the selection.
     */
    animateAppear: () => void;
    /**
     * Animate the indicator to release the selection.
     */
    animateDepart: () => void;
    /**
     * Get the picked features.
     */
    getPickedFeatures: () => PickedFeatures;
    /**
     * Get or set the selected feature.
     */
    selectedFeature: Feature | Cesium.Entity;
    /**
     * Gets or sets the world position of the object for which to display the selection indicator.
     */
    position: Ref<Cesium.Cartesian3>;
}
