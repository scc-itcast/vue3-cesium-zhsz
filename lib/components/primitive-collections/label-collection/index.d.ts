import type { ExtractPropTypes, PropType, VNode } from 'vue';
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types';
import { VcLabelProps } from '../label';
export declare const labelCollectionProps: {
    labels: {
        type: PropType<VcLabelProps[]>;
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
    blendOption: {
        type: PropType<number>;
        default: number;
    };
    scene: PropType<Cesium.Scene>;
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    modelMatrix: PropType<Cesium.Matrix4>;
};
declare const _default: import("vue").DefineComponent<{
    labels: {
        type: PropType<VcLabelProps[]>;
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
    blendOption: {
        type: PropType<number>;
        default: number;
    };
    scene: PropType<Cesium.Scene>;
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
    labels: {
        type: PropType<VcLabelProps[]>;
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
    blendOption: {
        type: PropType<number>;
        default: number;
    };
    scene: PropType<Cesium.Scene>;
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
    blendOption: number;
    labels: VcLabelProps[];
}>;
export default _default;
export declare type VcCollectionLabelProps = {
    /**
     * Must be passed in for labels that use the height reference property or will be depth tested against the globe.
     */
    scene?: Cesium.Scene;
    /**
     * The label blending option. The default is used for rendering both opaque and translucent labels. However, if either all of the labels are completely opaque or all are completely translucent, setting the technique to BlendOption.OPAQUE or BlendOption.TRANSLUCENT can improve performance by up to 2x.
     */
    blendOption?: number | Cesium.BlendOption;
    /**
     * Determines if the labels in the collection will be shown.
     * Default Value: true
     */
    show?: boolean;
    /**
     * The 4x4 transformation matrix that transforms each label from model to world coordinates.
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
     * Specify an array of label collections. The structure of the array object is the same as the attribute of the [vc-label](https://zouyaoji.top/vue-cesium/#/en-US/component/primitives/vc-collection-label#vclabel-props) component.
     */
    labels?: Array<VcLabelProps>;
    /**
     * Triggers before the VcCollectionLabel is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcCollectionLabel is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcCollectionLabel is destroyed.
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
     *  Triggers when the mouse moves out of this collection.
     */
    onMouseout?: (evt: VcPickEvent) => void;
};
export declare type VcCollectionLabelRef = VcComponentPublicInstance<VcCollectionLabelProps>;
export interface VcCollectionLabelSlots {
    /**
     * Slot for vc-label.
     */
    default: () => VNode[];
}
