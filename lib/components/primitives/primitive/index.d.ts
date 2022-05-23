import { Ref, VNode } from 'vue';
import type { VcAppearance, VcComponentInternalInstance, VcComponentPublicInstance, VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const primitiveProps: {
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    shadows: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    asynchronous: {
        type: BooleanConstructor;
        default: boolean;
    };
    cull: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowPicking: {
        type: BooleanConstructor;
        default: boolean;
    };
    releaseGeometryInstances: {
        type: BooleanConstructor;
        default: boolean;
    };
    compressVertices: {
        type: BooleanConstructor;
        default: boolean;
    };
    interleave: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertexCacheOptimize: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    depthFailAppearance: {
        type: import("vue").PropType<VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeAppearance;
            deep: boolean;
        };
    };
    appearance: {
        type: import("vue").PropType<VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeAppearance;
            deep: boolean;
        };
    };
    geometryInstances: import("vue").PropType<Cesium.GeometryInstance | Cesium.GeometryInstance[]>;
};
declare const _default: import("vue").DefineComponent<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    shadows: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    asynchronous: {
        type: BooleanConstructor;
        default: boolean;
    };
    cull: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowPicking: {
        type: BooleanConstructor;
        default: boolean;
    };
    releaseGeometryInstances: {
        type: BooleanConstructor;
        default: boolean;
    };
    compressVertices: {
        type: BooleanConstructor;
        default: boolean;
    };
    interleave: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertexCacheOptimize: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    depthFailAppearance: {
        type: import("vue").PropType<VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeAppearance;
            deep: boolean;
        };
    };
    appearance: {
        type: import("vue").PropType<VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeAppearance;
            deep: boolean;
        };
    };
    geometryInstances: import("vue").PropType<Cesium.GeometryInstance | Cesium.GeometryInstance[]>;
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    readyPromise: (primitive: import("vue-cesium/es/utils/types").VcPrimitive, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => boolean;
    'update:geometryInstances': (instances: Cesium.GeometryInstance[]) => boolean;
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
    shadows: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    asynchronous: {
        type: BooleanConstructor;
        default: boolean;
    };
    cull: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowPicking: {
        type: BooleanConstructor;
        default: boolean;
    };
    releaseGeometryInstances: {
        type: BooleanConstructor;
        default: boolean;
    };
    compressVertices: {
        type: BooleanConstructor;
        default: boolean;
    };
    interleave: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertexCacheOptimize: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    depthFailAppearance: {
        type: import("vue").PropType<VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeAppearance;
            deep: boolean;
        };
    };
    appearance: {
        type: import("vue").PropType<VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeAppearance;
            deep: boolean;
        };
    };
    geometryInstances: import("vue").PropType<Cesium.GeometryInstance | Cesium.GeometryInstance[]>;
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
    onReadyPromise?: (primitive: import("vue-cesium/es/utils/types").VcPrimitive, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => any;
    "onUpdate:geometryInstances"?: (instances: Cesium.GeometryInstance[]) => any;
}, {
    show: boolean;
    enableMouseEvent: boolean;
    debugShowBoundingVolume: boolean;
    asynchronous: boolean;
    allowPicking: boolean;
    releaseGeometryInstances: boolean;
    compressVertices: boolean;
    interleave: boolean;
    vertexCacheOptimize: boolean;
    cull: boolean;
}>;
export default _default;
export declare type VcPrimitiveProps = {
    /**
     * The geometry instances - or a single geometry instance - to render.
     */
    geometryInstances?: Cesium.GeometryInstance | Array<Cesium.GeometryInstance>;
    /**
     * The appearance used to render the primitive.
     */
    appearance?: VcAppearance;
    /**
     * The appearance used to shade this primitive when it fails the depth test.
     */
    depthFailAppearance?: VcAppearance;
    /**
     * Determines if this primitive will be shown.
     * Default value: true
     */
    show?: boolean;
    /**
     * The 4x4 transformation matrix that transforms the primitive (all geometry instances) from model to world coordinates.
     */
    modelMatrix?: Cesium.Matrix4;
    /**
     * When true, geometry vertices are optimized for the pre and post-vertex-shader caches.
     * Default value: false
     */
    vertexCacheOptimize?: boolean;
    /**
     * When true, geometry vertex attributes are interleaved, which can slightly improve rendering performance but increases load time.
     * Default value: false
     */
    interleave?: boolean;
    /**
     * When true, the geometry vertices are compressed, which will save memory.
     * Default value: true
     */
    compressVertices?: boolean;
    /**
     * When true, the primitive does not keep a reference to the input geometryInstances to save memory.
     * Default value: true
     */
    releaseGeometryInstances?: boolean;
    /**
     * When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved.
     * Default value: true
     */
    allowPicking?: boolean;
    /**
     * When true, the renderer frustum culls and horizon culls the primitive's commands based on their bounding volume. Set this to false for a small performance gain if you are manually culling the primitive.
     * Default value: true
     */
    cull?: boolean;
    /**
     * Determines if the primitive will be created asynchronously or block until ready.
     * Default value: true
     */
    asynchronous?: boolean;
    /**
     * For debugging only. Determines if this primitive's commands' bounding spheres are shown.
     */
    debugShowBoundingVolume?: boolean;
    /**
     * Determines whether this primitive casts or receives shadows from light sources.
     */
    shadows?: number;
    /**
     * Specifies whether to respond to mouse pick events.
     * Default Value: true
     */
    enableMouseEvent?: boolean;
    /**
     * Triggers before the component is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the component is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the component is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the mouse is pressed on this primitive.
     */
    onMousedown?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse bounces up on this primitive.
     */
    onMouseup?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse clicks on this primitive.
     */
    onClick?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse clicks outside this primitive.
     */
    onClickout?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the left mouse button double-clicks this primitive.
     */
    onDblclick?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves on this primitive.
     */
    onMousemove?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves over to this primitive.
     */
    onMouseover?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves out of this primitive.
     */
    onMouseout?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the primitive is ready to render.
     */
    onReadyPromise?: (primitive: Cesium.Primitive, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => void;
    'onUpdate:geometryInstances'?: (instances: Array<Cesium.GeometryInstance>) => void;
};
export interface VcPrimitiveRef extends VcComponentPublicInstance<VcPrimitiveProps> {
    /**
     * private but needed by VcGeometryInstance
     * @param geometryInstance
     * @param index
     */
    __updateGeometryInstances?(geometryInstance: Cesium.GeometryInstance, index: number): boolean;
    /**
     * private but needed by VcGeometryInstance
     * @param geometryInstance
     */
    __removeGeometryInstances?(geometryInstance: Cesium.GeometryInstance): boolean;
    /**
     * private but needed by VcGeometryInstance
     */
    __childCount?: Ref<number>;
}
export interface VcPrimitiveSlots {
    /**
     * Slot for vc-geometry-instance.
     */
    default: () => VNode[];
}
