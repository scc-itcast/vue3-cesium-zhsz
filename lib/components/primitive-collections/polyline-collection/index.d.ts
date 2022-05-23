import type { ExtractPropTypes, PropType, VNode } from 'vue';
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types';
import { VcPolylineProps } from '../polyline';
declare const _default: import("vue").DefineComponent<{
    polylines: {
        type: PropType<VcPolylineProps[]>;
        default: () => any[];
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    modelMatrix: PropType<Cesium.Matrix4>;
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    mousedown: (evt: VcPickEvent) => boolean;
    mouseup: (evt: VcPickEvent) => boolean;
    click: (evt: VcPickEvent) => boolean;
    clickout: (evt: VcPickEvent) => boolean;
    dblclick: (evt: VcPickEvent) => boolean;
    mousemove: (evt: VcPickEvent) => boolean;
    mouseover: (evt: VcPickEvent) => boolean;
    mouseout: (evt: VcPickEvent) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    polylines: {
        type: PropType<VcPolylineProps[]>;
        default: () => any[];
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    modelMatrix: PropType<Cesium.Matrix4>;
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onMousedown?: (evt: VcPickEvent) => any;
    onMouseup?: (evt: VcPickEvent) => any;
    onClick?: (evt: VcPickEvent) => any;
    onClickout?: (evt: VcPickEvent) => any;
    onDblclick?: (evt: VcPickEvent) => any;
    onMousemove?: (evt: VcPickEvent) => any;
    onMouseover?: (evt: VcPickEvent) => any;
    onMouseout?: (evt: VcPickEvent) => any;
}, {
    show: boolean;
    enableMouseEvent: boolean;
    debugShowBoundingVolume: boolean;
    polylines: VcPolylineProps[];
}>;
export default _default;
export declare type VcCollectionPolylineProps = {
    /**
     * Determines if the polylines in the collection will be shown.
     * Default Value: true
     */
    show?: boolean;
    /**
     * The 4x4 transformation matrix that transforms each polyline from model to world coordinates.
     */
    modelMatrix?: Cesium.Matrix4;
    /**
     * For debugging only. Determines if this primitive's commands' bounding spheres are shown.
     * Default Value: false
     */
    debugShowBoundingVolume?: boolean;
    /**
     * Specifies whether to respond to mouse pick events.
     * Default Value: true
     */
    enableMouseEvent?: boolean;
    /**
     * Specify an array of polylines collections. The structure of the array object is the same as the attribute of the [`vc-polyline`](https://zouyaoji.top/vue-cesium/#/en-US/component/primitives/vc-collection-polyline#vcpolyline-props) component.
     */
    polylines?: Array<VcPolylineProps>;
    /**
     * Triggers before the VcCollectionPolyline is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcCollectionPolyline is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcCollectionPolyline is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the mouse is pressed on this collection.
     */
    onMousedown?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse bounces up on this collection.
     */
    onMouseup?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse clicks on this collection.
     */
    onClick?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse clicks outside this collection.
     */
    onClickout?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the left mouse button double-clicks this collection.
     */
    onDblclick?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves on this collection.
     */
    onMousemove?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves over to this collection.
     */
    onMouseover?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves out of this collection.
     */
    onMouseout?: (evt: VcPickEvent) => void;
};
export declare type VcCollectionPolylineRef = VcComponentPublicInstance<VcCollectionPolylineProps>;
export interface VcCollectionPolylineSlots {
    /**
     * Slot for vc-polyline.
     */
    default: () => VNode[];
}
