import type { ExtractPropTypes, PropType, VNode } from 'vue';
import type { VcComponentInternalInstance, VcComponentPublicInstance } from 'vue-cesium/es/utils/types';
import { VcPolygonProps } from '../polygon';
export declare const primitiveCollectionProps: {
    polygons: {
        type: PropType<VcPolygonProps[]>;
        default: () => any[];
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    destroyPrimitives: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
};
declare const _default: import("vue").DefineComponent<{
    polygons: {
        type: PropType<VcPolygonProps[]>;
        default: () => any[];
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    destroyPrimitives: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    mousedown: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseup: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    click: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    clickout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    dblclick: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mousemove: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseover: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    polygons: {
        type: PropType<VcPolygonProps[]>;
        default: () => any[];
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    destroyPrimitives: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onMousedown?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseup?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClickout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onDblclick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMousemove?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseover?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
}, {
    show: boolean;
    enableMouseEvent: boolean;
    polygons: VcPolygonProps[];
    destroyPrimitives: boolean;
}>;
export default _default;
export declare type VcCollectionPrimitiveProps = {
    /**
     * Determines if the primitives in the collection will be shown.
     * Default value: true
     */
    show?: boolean;
    /**
     * Determines if primitives in the collection are destroyed when they are removed.
     * Default value: true
     */
    destroyPrimitives?: boolean;
    /**
     * Specifies whether to respond to mouse pick events.
     * Default Value: true
     */
    enableMouseEvent?: boolean;
    /**
     * Specify an array of polygons collections. The structure of the array object is the same as the attribute of the [`vc-polygon`](https://zouyaoji.top/vue-cesium/#/en-US/component/primitives/vc-collection-primitive#vcpolygon-props) component.
     */
    polygons?: Array<VcPolygonProps>;
};
export declare type VcCollectionPrimitiveRef = VcComponentPublicInstance<VcCollectionPrimitiveProps>;
export interface VcCollectionPrimitiveSlots {
    /**
     * This is where Primitive content goes.
     */
    default: () => VNode[];
}
