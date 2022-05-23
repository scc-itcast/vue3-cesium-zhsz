import type { VcPickEvent, VcAppearance, VcCartesian3Array, VcComponentInternalInstance, VcPolygonHierarchy, VcReadyObject, VcComponentPublicInstance } from 'vue-cesium/es/utils/types';
import { makeAppearance, makeCartesian3Array, makePolygonHierarchy } from 'vue-cesium/es/utils/cesium-helpers';
export declare const polygonProps: {
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    asynchronous: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowPicking: {
        type: BooleanConstructor;
        default: boolean;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    clampToGround: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    classificationType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<Cesium.ClassificationType>>;
    };
    id: import("vue").PropType<any>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    depthFailAppearance: {
        type: import("vue").PropType<VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeAppearance;
            deep: boolean;
        };
    };
    appearance: {
        type: import("vue").PropType<VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeAppearance;
            deep: boolean;
        };
    };
    polygonHierarchy: {
        type: import("vue").PropType<VcPolygonHierarchy>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makePolygonHierarchy;
            deep: boolean;
        };
    };
    positions: {
        type: import("vue").PropType<VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3Array;
            exclude: string;
            deep: boolean;
        };
    };
};
declare const _default: import("vue").DefineComponent<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    asynchronous: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowPicking: {
        type: BooleanConstructor;
        default: boolean;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    clampToGround: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    classificationType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<Cesium.ClassificationType>>;
    };
    id: import("vue").PropType<any>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    depthFailAppearance: {
        type: import("vue").PropType<VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeAppearance;
            deep: boolean;
        };
    };
    appearance: {
        type: import("vue").PropType<VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeAppearance;
            deep: boolean;
        };
    };
    polygonHierarchy: {
        type: import("vue").PropType<VcPolygonHierarchy>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makePolygonHierarchy;
            deep: boolean;
        };
    };
    positions: {
        type: import("vue").PropType<VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3Array;
            exclude: string;
            deep: boolean;
        };
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    asynchronous: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowPicking: {
        type: BooleanConstructor;
        default: boolean;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    clampToGround: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    classificationType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<Cesium.ClassificationType>>;
    };
    id: import("vue").PropType<any>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    depthFailAppearance: {
        type: import("vue").PropType<VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeAppearance;
            deep: boolean;
        };
    };
    appearance: {
        type: import("vue").PropType<VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeAppearance;
            deep: boolean;
        };
    };
    polygonHierarchy: {
        type: import("vue").PropType<VcPolygonHierarchy>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makePolygonHierarchy;
            deep: boolean;
        };
    };
    positions: {
        type: import("vue").PropType<VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3Array;
            exclude: string;
            deep: boolean;
        };
    };
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
    clampToGround: boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>;
    asynchronous: boolean;
    allowPicking: boolean;
}>;
export default _default;
export declare type VcPolygonProps = {
    /**
     * A user-defined object to return when the instance is picked with Scene#pick or get/set per-instance attributes with Primitive#getGeometryInstanceAttributes.
     */
    id?: any;
    /**
     * Determines if this primitive will be shown.
     * Default value: true
     */
    show?: boolean;
    positions?: VcCartesian3Array;
    classificationType?: number;
    /**
     * 	A polygon hierarchy that can include holes.
     */
    polygonHierarchy?: VcPolygonHierarchy;
    /**
     * Specify whether the drawing result object is attached to the ground or 3dtiles. Only polyline and polygon objects work.
     */
    clampToGround?: boolean;
    /**
     * The appearance used to render the primitive.
     */
    appearance?: VcAppearance;
    /***
     * The appearance used to shade this primitive when it fails the depth test.
     */
    depthFailAppearance?: VcAppearance;
    /**
     * The ellipsoid to be used as a reference.
     */
    ellipsoid?: Cesium.Ellipsoid;
    /**
     * When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved.
     */
    allowPicking?: boolean;
    /**
     * Determines if the primitive will be created asynchronously or block until ready.
     */
    asynchronous?: boolean;
    /**
     * Specifies whether to respond to mouse pick events.
     * Default Value: true
     */
    enableMouseEvent?: boolean;
    /**
     * Triggers before the VcPolygon is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcPolygon is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcPolygon is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the mouse is pressed on this polygon.
     */
    onMousedown?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse bounces up on this polygon.
     */
    onMouseup?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse clicks on this polygon.
     */
    onClick?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse clicks outside this polygon.
     */
    onClickout?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the left mouse button double-clicks this polygon.
     */
    onDblclick?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves on this polygon.
     */
    onMousemove?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves over to this polygon.
     */
    onMouseover?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves out of this polygon.
     */
    onMouseout?: (evt: VcPickEvent) => void;
};
export declare type VcPolygonRef = VcComponentPublicInstance<VcPolygonProps>;
