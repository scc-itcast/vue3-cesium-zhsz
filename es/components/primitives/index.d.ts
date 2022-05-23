import { App } from 'vue';
import { SFCWithInstall } from 'vue-cesium/es/utils/types';
declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;
export declare const VcPrimitiveClassification: SFCWithInstall<import("vue").DefineComponent<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowShadowVolume: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    classificationType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<Cesium.ClassificationType>>;
    };
    asynchronous: {
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
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    appearance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeAppearance;
            deep: boolean;
        };
    };
    geometryInstances: import("vue").PropType<Cesium.GeometryInstance | Cesium.GeometryInstance[]>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    readyPromise: (primitive: import("vue-cesium/es/utils/types").VcPrimitive, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    'update:geometryInstances': (instances: Cesium.GeometryInstance[]) => boolean;
    mousedown: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseup: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    click: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    clickout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    dblclick: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mousemove: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseover: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowShadowVolume: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    classificationType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<Cesium.ClassificationType>>;
    };
    asynchronous: {
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
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    appearance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeAppearance;
            deep: boolean;
        };
    };
    geometryInstances: import("vue").PropType<Cesium.GeometryInstance | Cesium.GeometryInstance[]>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onMousedown?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseup?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClickout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onDblclick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMousemove?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseover?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onReadyPromise?: (primitive: import("vue-cesium/es/utils/types").VcPrimitive, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    "onUpdate:geometryInstances"?: (instances: Cesium.GeometryInstance[]) => any;
}, {
    show: boolean;
    enableMouseEvent: boolean;
    debugShowShadowVolume: boolean;
    debugShowBoundingVolume: boolean;
    asynchronous: boolean;
    allowPicking: boolean;
    releaseGeometryInstances: boolean;
    compressVertices: boolean;
    interleave: boolean;
    vertexCacheOptimize: boolean;
}>>;
export declare const VcPrimitiveGround: SFCWithInstall<import("vue").DefineComponent<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowShadowVolume: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    classificationType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<Cesium.ClassificationType>>;
    };
    asynchronous: {
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
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    appearance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeAppearance;
            deep: boolean;
        };
    };
    geometryInstances: import("vue").PropType<Cesium.GeometryInstance | Cesium.GeometryInstance[]>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    readyPromise: (primitive: import("vue-cesium/es/utils/types").VcPrimitive, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    'update:geometryInstances': (instances: Cesium.GeometryInstance[]) => boolean;
    mousedown: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseup: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    click: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    clickout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    dblclick: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mousemove: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseover: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowShadowVolume: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    classificationType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<Cesium.ClassificationType>>;
    };
    asynchronous: {
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
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    appearance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeAppearance;
            deep: boolean;
        };
    };
    geometryInstances: import("vue").PropType<Cesium.GeometryInstance | Cesium.GeometryInstance[]>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onMousedown?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseup?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClickout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onDblclick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMousemove?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseover?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onReadyPromise?: (primitive: import("vue-cesium/es/utils/types").VcPrimitive, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    "onUpdate:geometryInstances"?: (instances: Cesium.GeometryInstance[]) => any;
}, {
    show: boolean;
    enableMouseEvent: boolean;
    debugShowShadowVolume: boolean;
    debugShowBoundingVolume: boolean;
    asynchronous: boolean;
    allowPicking: boolean;
    releaseGeometryInstances: boolean;
    compressVertices: boolean;
    interleave: boolean;
    vertexCacheOptimize: boolean;
}>>;
export declare const VcPrimitiveGroundPolyline: SFCWithInstall<import("vue").DefineComponent<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowShadowVolume: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    classificationType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<Cesium.ClassificationType>>;
    };
    asynchronous: {
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
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    appearance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeAppearance;
            deep: boolean;
        };
    };
    geometryInstances: import("vue").PropType<Cesium.GeometryInstance | Cesium.GeometryInstance[]>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    readyPromise: (primitive: import("vue-cesium/es/utils/types").VcPrimitive, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    'update:geometryInstances': (instances: Cesium.GeometryInstance[]) => boolean;
    mousedown: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseup: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    click: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    clickout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    dblclick: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mousemove: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseover: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowShadowVolume: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    classificationType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<Cesium.ClassificationType>>;
    };
    asynchronous: {
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
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    appearance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeAppearance;
            deep: boolean;
        };
    };
    geometryInstances: import("vue").PropType<Cesium.GeometryInstance | Cesium.GeometryInstance[]>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onMousedown?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseup?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClickout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onDblclick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMousemove?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseover?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onReadyPromise?: (primitive: import("vue-cesium/es/utils/types").VcPrimitive, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    "onUpdate:geometryInstances"?: (instances: Cesium.GeometryInstance[]) => any;
}, {
    show: boolean;
    enableMouseEvent: boolean;
    debugShowShadowVolume: boolean;
    debugShowBoundingVolume: boolean;
    asynchronous: boolean;
    allowPicking: boolean;
    releaseGeometryInstances: boolean;
    compressVertices: boolean;
    interleave: boolean;
}>>;
export declare const VcPrimitiveModel: SFCWithInstall<import("vue").DefineComponent<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    showOutline: {
        type: BooleanConstructor;
        default: boolean;
    };
    backFaceCulling: {
        type: BooleanConstructor;
        default: boolean;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    specularEnvironmentMaps: StringConstructor;
    sphericalHarmonicCoefficients: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3Array;
        };
    };
    luminanceAtZenith: {
        type: NumberConstructor;
        default: number;
    };
    lightColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    imageBasedLightingFactor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian2>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian2;
        };
    };
    dequantizeInShader: {
        type: BooleanConstructor;
        default: boolean;
    };
    clippingPlanes: import("vue").PropType<Cesium.ClippingPlaneCollection | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<Cesium.ClippingPlaneCollection>>;
    silhouetteSize: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    silhouetteColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    colorBlendAmount: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    colorBlendMode: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    color: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    distanceDisplayCondition: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    scene: import("vue").PropType<Cesium.Scene>;
    heightReference: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    };
    debugWireframe: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    shadows: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    clampAnimations: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    asynchronous: {
        type: BooleanConstructor;
        default: boolean;
    };
    incrementallyLoadTextures: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    allowPicking: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: import("vue").PropType<any>;
    maximumScale: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
    minimumPixelSize: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    scale: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    basePath: import("vue").PropType<string | Cesium.Resource>;
    url: import("vue").PropType<string | Cesium.Resource>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    readyPromise: (primitive: import("vue-cesium/es/utils/types").VcPrimitive, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    'update:geometryInstances': (instances: Cesium.GeometryInstance[]) => boolean;
    mousedown: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseup: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    click: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    clickout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    dblclick: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mousemove: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseover: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    showOutline: {
        type: BooleanConstructor;
        default: boolean;
    };
    backFaceCulling: {
        type: BooleanConstructor;
        default: boolean;
    };
    credit: {
        type: import("vue").PropType<string | Cesium.Credit>;
        default: string;
    };
    specularEnvironmentMaps: StringConstructor;
    sphericalHarmonicCoefficients: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3Array;
        };
    };
    luminanceAtZenith: {
        type: NumberConstructor;
        default: number;
    };
    lightColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    imageBasedLightingFactor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian2>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian2;
        };
    };
    dequantizeInShader: {
        type: BooleanConstructor;
        default: boolean;
    };
    clippingPlanes: import("vue").PropType<Cesium.ClippingPlaneCollection | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<Cesium.ClippingPlaneCollection>>;
    silhouetteSize: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    silhouetteColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    colorBlendAmount: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    colorBlendMode: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    color: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    distanceDisplayCondition: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    scene: import("vue").PropType<Cesium.Scene>;
    heightReference: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    };
    debugWireframe: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    shadows: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    clampAnimations: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    asynchronous: {
        type: BooleanConstructor;
        default: boolean;
    };
    incrementallyLoadTextures: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    allowPicking: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: import("vue").PropType<any>;
    maximumScale: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
    minimumPixelSize: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    scale: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    basePath: import("vue").PropType<string | Cesium.Resource>;
    url: import("vue").PropType<string | Cesium.Resource>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onMousedown?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseup?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClickout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onDblclick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMousemove?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseover?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onReadyPromise?: (primitive: import("vue-cesium/es/utils/types").VcPrimitive, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    "onUpdate:geometryInstances"?: (instances: Cesium.GeometryInstance[]) => any;
}, {
    credit: string | Cesium.Credit;
    show: boolean;
    color: import("vue-cesium/es/utils/types").VcColor;
    enableMouseEvent: boolean;
    debugShowBoundingVolume: boolean;
    asynchronous: boolean;
    allowPicking: boolean;
    scale: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    imageBasedLightingFactor: import("vue-cesium/es/utils/types").VcCartesian2;
    colorBlendAmount: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    colorBlendMode: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    silhouetteSize: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    clampAnimations: boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>;
    incrementallyLoadTextures: boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>;
    minimumPixelSize: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    showOutline: boolean;
    backFaceCulling: boolean;
    luminanceAtZenith: number;
    dequantizeInShader: boolean;
    debugWireframe: boolean;
}>>;
export declare const VcPrimitive: SFCWithInstall<import("vue").DefineComponent<{
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
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeAppearance;
            deep: boolean;
        };
    };
    appearance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeAppearance;
            deep: boolean;
        };
    };
    geometryInstances: import("vue").PropType<Cesium.GeometryInstance | Cesium.GeometryInstance[]>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    readyPromise: (primitive: import("vue-cesium/es/utils/types").VcPrimitive, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    'update:geometryInstances': (instances: Cesium.GeometryInstance[]) => boolean;
    mousedown: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseup: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    click: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    clickout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    dblclick: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mousemove: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseover: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
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
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeAppearance;
            deep: boolean;
        };
    };
    appearance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeAppearance;
            deep: boolean;
        };
    };
    geometryInstances: import("vue").PropType<Cesium.GeometryInstance | Cesium.GeometryInstance[]>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onMousedown?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseup?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClickout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onDblclick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMousemove?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseover?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onReadyPromise?: (primitive: import("vue-cesium/es/utils/types").VcPrimitive, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
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
}>>;
export declare const VcPrimitiveTileset: SFCWithInstall<import("vue").DefineComponent<{
    enableModelExperimental: {
        type: BooleanConstructor;
        default: boolean;
    };
    customShader: {
        type: import("vue").PropType<Cesium.CustomShader>;
    };
    properties: {
        type: import("vue").PropType<{
            key: string;
            keyValue: any;
            propertyName: string;
            propertyValue: any;
        }[]>;
    };
    fragmentShader: StringConstructor;
    replaceFS: BooleanConstructor;
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowContentBoundingVolume: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowViewerRequestVolume: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowGeometricError: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowRenderingStatistics: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowMemoryUsage: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowUrl: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    debugWireframe: {
        type: BooleanConstructor;
        default: boolean;
    };
    showOutline: {
        type: BooleanConstructor;
        default: boolean;
    };
    vectorClassificationOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    vectorKeepDecodedPositions: {
        type: BooleanConstructor;
        default: boolean;
    };
    featureIdIndex: {
        type: NumberConstructor;
        default: number;
    };
    instanceFeatureIdIndex: {
        type: NumberConstructor;
        default: number;
    };
    showCreditsOnScreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugHeatmapTilePropertyName: StringConstructor;
    debugFreezeFrame: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugColorizeTiles: {
        type: BooleanConstructor;
        default: boolean;
    };
    backFaceCulling: {
        type: BooleanConstructor;
        default: boolean;
    };
    specularEnvironmentMaps: StringConstructor;
    sphericalHarmonicCoefficients: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3Array;
        };
    };
    luminanceAtZenith: {
        type: NumberConstructor;
        default: number;
    };
    lightColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
        };
    };
    imageBasedLightingFactor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian2>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian2;
        };
    };
    pointCloudShading: ObjectConstructor;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    classificationType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<Cesium.ClassificationType>>;
    };
    clippingPlanes: import("vue").PropType<Cesium.ClippingPlaneCollection | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<Cesium.ClippingPlaneCollection>>;
    maximumMemoryUsage: {
        type: NumberConstructor;
        default: number;
    };
    cullWithChildrenBounds: {
        type: BooleanConstructor;
        default: boolean;
    };
    cullRequestsWhileMoving: {
        type: BooleanConstructor;
        default: boolean;
    };
    cullRequestsWhileMovingMultiplier: {
        type: NumberConstructor;
        default: number;
    };
    preloadWhenHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    preloadFlightDestinations: {
        type: BooleanConstructor;
        default: boolean;
    };
    preferLeaves: {
        type: BooleanConstructor;
        default: boolean;
    };
    dynamicScreenSpaceError: {
        type: BooleanConstructor;
        default: boolean;
    };
    dynamicScreenSpaceErrorDensity: {
        type: NumberConstructor;
        default: number;
    };
    dynamicScreenSpaceErrorFactor: {
        type: NumberConstructor;
        default: number;
    };
    dynamicScreenSpaceErrorHeightFalloff: {
        type: NumberConstructor;
        default: number;
    };
    progressiveResolutionHeightFraction: {
        type: NumberConstructor;
        default: number;
    };
    foveatedScreenSpaceError: {
        type: BooleanConstructor;
        default: boolean;
    };
    foveatedConeSize: {
        type: NumberConstructor;
        default: number;
    };
    foveatedMinimumScreenSpaceErrorRelaxation: {
        type: NumberConstructor;
        default: number;
    };
    foveatedInterpolationCallback: FunctionConstructor;
    foveatedTimeDelay: {
        type: NumberConstructor;
        default: number;
    };
    skipLevelOfDetail: {
        type: BooleanConstructor;
        default: boolean;
    };
    baseScreenSpaceError: {
        type: NumberConstructor;
        default: number;
    };
    skipScreenSpaceErrorFactor: {
        type: NumberConstructor;
        default: number;
    };
    skipLevels: {
        type: NumberConstructor;
        default: number;
    };
    immediatelyLoadDesiredLevelOfDetail: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadSiblings: {
        type: BooleanConstructor;
        default: boolean;
    };
    maximumScreenSpaceError: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    shadows: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    url: import("vue").PropType<string | Promise<string> | Cesium.Resource | Promise<Cesium.Resource>>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    allTilesLoaded: () => boolean;
    initialTilesLoaded: () => boolean;
    loadProgress: (numberOfPendingRequests: number, numberOfTilesProcessing: number) => boolean;
    tileFailed: (url: string, errorMsg: string) => boolean;
    tileLoad: (tile: Cesium.Cesium3DTile) => boolean;
    tileUnload: (tile: Cesium.Cesium3DTile) => boolean;
    tileVisible: (tile: Cesium.Cesium3DTile) => boolean;
    readyPromise: (primitive: import("vue-cesium/es/utils/types").VcPrimitive, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    'update:geometryInstances': (instances: Cesium.GeometryInstance[]) => boolean;
    mousedown: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseup: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    click: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    clickout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    dblclick: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mousemove: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseover: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    enableModelExperimental: {
        type: BooleanConstructor;
        default: boolean;
    };
    customShader: {
        type: import("vue").PropType<Cesium.CustomShader>;
    };
    properties: {
        type: import("vue").PropType<{
            key: string;
            keyValue: any;
            propertyName: string;
            propertyValue: any;
        }[]>;
    };
    fragmentShader: StringConstructor;
    replaceFS: BooleanConstructor;
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowContentBoundingVolume: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowViewerRequestVolume: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowGeometricError: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowRenderingStatistics: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowMemoryUsage: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowUrl: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    debugWireframe: {
        type: BooleanConstructor;
        default: boolean;
    };
    showOutline: {
        type: BooleanConstructor;
        default: boolean;
    };
    vectorClassificationOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    vectorKeepDecodedPositions: {
        type: BooleanConstructor;
        default: boolean;
    };
    featureIdIndex: {
        type: NumberConstructor;
        default: number;
    };
    instanceFeatureIdIndex: {
        type: NumberConstructor;
        default: number;
    };
    showCreditsOnScreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugHeatmapTilePropertyName: StringConstructor;
    debugFreezeFrame: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugColorizeTiles: {
        type: BooleanConstructor;
        default: boolean;
    };
    backFaceCulling: {
        type: BooleanConstructor;
        default: boolean;
    };
    specularEnvironmentMaps: StringConstructor;
    sphericalHarmonicCoefficients: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3Array;
        };
    };
    luminanceAtZenith: {
        type: NumberConstructor;
        default: number;
    };
    lightColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
        };
    };
    imageBasedLightingFactor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian2>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian2;
        };
    };
    pointCloudShading: ObjectConstructor;
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    classificationType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<Cesium.ClassificationType>>;
    };
    clippingPlanes: import("vue").PropType<Cesium.ClippingPlaneCollection | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<Cesium.ClippingPlaneCollection>>;
    maximumMemoryUsage: {
        type: NumberConstructor;
        default: number;
    };
    cullWithChildrenBounds: {
        type: BooleanConstructor;
        default: boolean;
    };
    cullRequestsWhileMoving: {
        type: BooleanConstructor;
        default: boolean;
    };
    cullRequestsWhileMovingMultiplier: {
        type: NumberConstructor;
        default: number;
    };
    preloadWhenHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    preloadFlightDestinations: {
        type: BooleanConstructor;
        default: boolean;
    };
    preferLeaves: {
        type: BooleanConstructor;
        default: boolean;
    };
    dynamicScreenSpaceError: {
        type: BooleanConstructor;
        default: boolean;
    };
    dynamicScreenSpaceErrorDensity: {
        type: NumberConstructor;
        default: number;
    };
    dynamicScreenSpaceErrorFactor: {
        type: NumberConstructor;
        default: number;
    };
    dynamicScreenSpaceErrorHeightFalloff: {
        type: NumberConstructor;
        default: number;
    };
    progressiveResolutionHeightFraction: {
        type: NumberConstructor;
        default: number;
    };
    foveatedScreenSpaceError: {
        type: BooleanConstructor;
        default: boolean;
    };
    foveatedConeSize: {
        type: NumberConstructor;
        default: number;
    };
    foveatedMinimumScreenSpaceErrorRelaxation: {
        type: NumberConstructor;
        default: number;
    };
    foveatedInterpolationCallback: FunctionConstructor;
    foveatedTimeDelay: {
        type: NumberConstructor;
        default: number;
    };
    skipLevelOfDetail: {
        type: BooleanConstructor;
        default: boolean;
    };
    baseScreenSpaceError: {
        type: NumberConstructor;
        default: number;
    };
    skipScreenSpaceErrorFactor: {
        type: NumberConstructor;
        default: number;
    };
    skipLevels: {
        type: NumberConstructor;
        default: number;
    };
    immediatelyLoadDesiredLevelOfDetail: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadSiblings: {
        type: BooleanConstructor;
        default: boolean;
    };
    maximumScreenSpaceError: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    shadows: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    url: import("vue").PropType<string | Promise<string> | Cesium.Resource | Promise<Cesium.Resource>>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onMousedown?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseup?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClickout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onDblclick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMousemove?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseover?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onReadyPromise?: (primitive: import("vue-cesium/es/utils/types").VcPrimitive, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    "onUpdate:geometryInstances"?: (instances: Cesium.GeometryInstance[]) => any;
    onAllTilesLoaded?: () => any;
    onInitialTilesLoaded?: () => any;
    onLoadProgress?: (numberOfPendingRequests: number, numberOfTilesProcessing: number) => any;
    onTileFailed?: (url: string, errorMsg: string) => any;
    onTileLoad?: (tile: Cesium.Cesium3DTile) => any;
    onTileUnload?: (tile: Cesium.Cesium3DTile) => any;
    onTileVisible?: (tile: Cesium.Cesium3DTile) => any;
}, {
    show: boolean;
    enableMouseEvent: boolean;
    debugShowBoundingVolume: boolean;
    imageBasedLightingFactor: import("vue-cesium/es/utils/types").VcCartesian2;
    maximumScreenSpaceError: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    showOutline: boolean;
    backFaceCulling: boolean;
    luminanceAtZenith: number;
    debugWireframe: boolean;
    enableModelExperimental: boolean;
    replaceFS: boolean;
    debugShowContentBoundingVolume: boolean;
    debugShowViewerRequestVolume: boolean;
    debugShowGeometricError: boolean;
    debugShowRenderingStatistics: boolean;
    debugShowMemoryUsage: boolean;
    debugShowUrl: boolean;
    vectorClassificationOnly: boolean;
    vectorKeepDecodedPositions: boolean;
    featureIdIndex: number;
    instanceFeatureIdIndex: number;
    showCreditsOnScreen: boolean;
    debugFreezeFrame: boolean;
    debugColorizeTiles: boolean;
    maximumMemoryUsage: number;
    cullWithChildrenBounds: boolean;
    cullRequestsWhileMoving: boolean;
    cullRequestsWhileMovingMultiplier: number;
    preloadWhenHidden: boolean;
    preloadFlightDestinations: boolean;
    preferLeaves: boolean;
    dynamicScreenSpaceError: boolean;
    dynamicScreenSpaceErrorDensity: number;
    dynamicScreenSpaceErrorFactor: number;
    dynamicScreenSpaceErrorHeightFalloff: number;
    progressiveResolutionHeightFraction: number;
    foveatedScreenSpaceError: boolean;
    foveatedConeSize: number;
    foveatedMinimumScreenSpaceErrorRelaxation: number;
    foveatedTimeDelay: number;
    skipLevelOfDetail: boolean;
    baseScreenSpaceError: number;
    skipScreenSpaceErrorFactor: number;
    skipLevels: number;
    immediatelyLoadDesiredLevelOfDetail: boolean;
    loadSiblings: boolean;
}>>;
export declare const VcPrimitiveParticle: SFCWithInstall<import("vue").DefineComponent<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    minimumSpeed: NumberConstructor;
    maximumSpeed: NumberConstructor;
    lifetime: {
        type: NumberConstructor;
        default: number;
    };
    particleLife: {
        type: NumberConstructor;
        default: number;
    };
    minimumParticleLife: NumberConstructor;
    maximumParticleLife: NumberConstructor;
    mass: {
        type: NumberConstructor;
        default: number;
    };
    minimumMass: NumberConstructor;
    maximumMass: NumberConstructor;
    sizeInMeters: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    maximumImageSize: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian2;
        };
    };
    minimumImageSize: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian2;
        };
    };
    imageSize: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian2;
        };
    };
    image: import("vue").PropType<string | Cesium.CallbackProperty | HTMLImageElement | HTMLCanvasElement | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<string>>;
    endColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    startColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    color: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    emitterModelMatrix: import("vue").PropType<Cesium.Matrix4>;
    emissionRate: {
        type: NumberConstructor;
        default: number;
    };
    bursts: import("vue").PropType<Cesium.ParticleBurst[]>;
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    scale: {
        type: NumberConstructor;
        default: number;
    };
    startScale: NumberConstructor;
    endScale: NumberConstructor;
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
    updateCallback: FunctionConstructor;
    emitter: import("vue").PropType<Cesium.ParticleEmitter>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    complete: (evt: Cesium.ParticleSystem) => boolean;
    readyPromise: (primitive: import("vue-cesium/es/utils/types").VcPrimitive, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => boolean;
    'update:geometryInstances': (instances: Cesium.GeometryInstance[]) => boolean;
    mousedown: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseup: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    click: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    clickout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    dblclick: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mousemove: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseover: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    mouseout: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    minimumSpeed: NumberConstructor;
    maximumSpeed: NumberConstructor;
    lifetime: {
        type: NumberConstructor;
        default: number;
    };
    particleLife: {
        type: NumberConstructor;
        default: number;
    };
    minimumParticleLife: NumberConstructor;
    maximumParticleLife: NumberConstructor;
    mass: {
        type: NumberConstructor;
        default: number;
    };
    minimumMass: NumberConstructor;
    maximumMass: NumberConstructor;
    sizeInMeters: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    maximumImageSize: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian2;
        };
    };
    minimumImageSize: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian2;
        };
    };
    imageSize: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian2;
        };
    };
    image: import("vue").PropType<string | Cesium.CallbackProperty | HTMLImageElement | HTMLCanvasElement | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<string>>;
    endColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    startColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    color: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    emitterModelMatrix: import("vue").PropType<Cesium.Matrix4>;
    emissionRate: {
        type: NumberConstructor;
        default: number;
    };
    bursts: import("vue").PropType<Cesium.ParticleBurst[]>;
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    scale: {
        type: NumberConstructor;
        default: number;
    };
    startScale: NumberConstructor;
    endScale: NumberConstructor;
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
    updateCallback: FunctionConstructor;
    emitter: import("vue").PropType<Cesium.ParticleEmitter>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onMousedown?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseup?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onClickout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onDblclick?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMousemove?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseover?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onMouseout?: (evt: import("vue-cesium/es/utils/types").VcPickEvent) => any;
    onReadyPromise?: (primitive: import("vue-cesium/es/utils/types").VcPrimitive, viewer: Cesium.Viewer, instance: import("vue-cesium/es/utils/types").VcComponentPublicInstance<{}>) => any;
    "onUpdate:geometryInstances"?: (instances: Cesium.GeometryInstance[]) => any;
    onComplete?: (evt: Cesium.ParticleSystem) => any;
}, {
    show: boolean;
    color: import("vue-cesium/es/utils/types").VcColor;
    enableMouseEvent: boolean;
    loop: boolean;
    speed: number;
    scale: number;
    sizeInMeters: boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>;
    lifetime: number;
    particleLife: number;
    mass: number;
    emissionRate: number;
}>>;
export * from './classification';
export * from './ground';
export * from './ground-polyline';
export * from './model';
export * from './particle';
export * from './primitive';
export * from './tileset';
