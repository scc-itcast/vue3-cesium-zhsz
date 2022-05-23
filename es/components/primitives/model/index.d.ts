import { PropType, VNode } from 'vue';
import type { VcCartesian2, VcCartesian3Array, VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcDistanceDisplayCondition, VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const modelPrimitiveProps: {
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
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    specularEnvironmentMaps: StringConstructor;
    sphericalHarmonicCoefficients: {
        type: PropType<VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3Array;
        };
    };
    luminanceAtZenith: {
        type: NumberConstructor;
        default: number;
    };
    lightColor: {
        type: PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    imageBasedLightingFactor: {
        type: PropType<VcCartesian2>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    dequantizeInShader: {
        type: BooleanConstructor;
        default: boolean;
    };
    clippingPlanes: PropType<Cesium.ClippingPlaneCollection | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<Cesium.ClippingPlaneCollection>>;
    silhouetteSize: {
        type: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    silhouetteColor: {
        type: PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    colorBlendAmount: {
        type: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    colorBlendMode: {
        type: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    color: {
        type: PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    distanceDisplayCondition: {
        type: PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    scene: PropType<Cesium.Scene>;
    heightReference: {
        type: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    };
    debugWireframe: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    shadows: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    clampAnimations: {
        type: PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    asynchronous: {
        type: BooleanConstructor;
        default: boolean;
    };
    incrementallyLoadTextures: {
        type: PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    allowPicking: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: PropType<any>;
    maximumScale: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
    minimumPixelSize: {
        type: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    scale: {
        type: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    modelMatrix: PropType<Cesium.Matrix4>;
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
    basePath: PropType<string | Cesium.Resource>;
    url: PropType<string | Cesium.Resource>;
};
declare const _default: import("vue").DefineComponent<{
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
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    specularEnvironmentMaps: StringConstructor;
    sphericalHarmonicCoefficients: {
        type: PropType<VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3Array;
        };
    };
    luminanceAtZenith: {
        type: NumberConstructor;
        default: number;
    };
    lightColor: {
        type: PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    imageBasedLightingFactor: {
        type: PropType<VcCartesian2>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    dequantizeInShader: {
        type: BooleanConstructor;
        default: boolean;
    };
    clippingPlanes: PropType<Cesium.ClippingPlaneCollection | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<Cesium.ClippingPlaneCollection>>;
    silhouetteSize: {
        type: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    silhouetteColor: {
        type: PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    colorBlendAmount: {
        type: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    colorBlendMode: {
        type: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    color: {
        type: PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    distanceDisplayCondition: {
        type: PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    scene: PropType<Cesium.Scene>;
    heightReference: {
        type: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    };
    debugWireframe: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    shadows: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    clampAnimations: {
        type: PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    asynchronous: {
        type: BooleanConstructor;
        default: boolean;
    };
    incrementallyLoadTextures: {
        type: PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    allowPicking: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: PropType<any>;
    maximumScale: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
    minimumPixelSize: {
        type: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    scale: {
        type: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    modelMatrix: PropType<Cesium.Matrix4>;
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
    basePath: PropType<string | Cesium.Resource>;
    url: PropType<string | Cesium.Resource>;
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
    showOutline: {
        type: BooleanConstructor;
        default: boolean;
    };
    backFaceCulling: {
        type: BooleanConstructor;
        default: boolean;
    };
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
    specularEnvironmentMaps: StringConstructor;
    sphericalHarmonicCoefficients: {
        type: PropType<VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3Array;
        };
    };
    luminanceAtZenith: {
        type: NumberConstructor;
        default: number;
    };
    lightColor: {
        type: PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    imageBasedLightingFactor: {
        type: PropType<VcCartesian2>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    dequantizeInShader: {
        type: BooleanConstructor;
        default: boolean;
    };
    clippingPlanes: PropType<Cesium.ClippingPlaneCollection | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<Cesium.ClippingPlaneCollection>>;
    silhouetteSize: {
        type: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    silhouetteColor: {
        type: PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    colorBlendAmount: {
        type: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    colorBlendMode: {
        type: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    color: {
        type: PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    distanceDisplayCondition: {
        type: PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    scene: PropType<Cesium.Scene>;
    heightReference: {
        type: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    };
    debugWireframe: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    shadows: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    clampAnimations: {
        type: PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    asynchronous: {
        type: BooleanConstructor;
        default: boolean;
    };
    incrementallyLoadTextures: {
        type: PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    allowPicking: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: PropType<any>;
    maximumScale: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
    minimumPixelSize: {
        type: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    scale: {
        type: PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    modelMatrix: PropType<Cesium.Matrix4>;
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
    basePath: PropType<string | Cesium.Resource>;
    url: PropType<string | Cesium.Resource>;
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
    credit: string | Cesium.Credit;
    show: boolean;
    color: VcColor;
    enableMouseEvent: boolean;
    debugShowBoundingVolume: boolean;
    asynchronous: boolean;
    allowPicking: boolean;
    scale: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    imageBasedLightingFactor: VcCartesian2;
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
}>;
export default _default;
export declare type VcPrimitiveModelProps = {
    /**
     * The url to the .gltf file.
     */
    url: string | Cesium.Resource;
    /**
     * The base path that paths in the glTF JSON are relative to.
     */
    basePath?: string | Cesium.Resource;
    /**
     * Determines if the model primitive will be shown.
     * Default value: true
     */
    show?: boolean;
    /**
     * The 4x4 transformation matrix that transforms the model from model to world coordinates.
     */
    modelMatrix: Cesium.Matrix4;
    /**
     * A uniform scale applied to this model.
     * Default value: 1.0
     */
    scale?: number;
    /**
     * The approximate minimum pixel size of the model regardless of zoom.
     * Default value: 0.0
     */
    minimumPixelSize?: number;
    /**
     * The maximum scale for the model.
     */
    maximumScale?: number;
    /**
     * A user-defined object to return when the model is picked with Scene#pick.
     */
    id?: any;
    /**
     * When true, each glTF mesh and primitive is pickable with Scene#pick.
     * Default value: true
     */
    allowPicking?: boolean;
    /**
     * Determine if textures may continue to stream in after the model is loaded.
     * Default value: true
     */
    incrementallyLoadTextures?: boolean;
    /**
     * Determines if model WebGL resource creation will be spread out over several frames or block until completion once all glTF files are loaded.
     * Default value: true
     */
    asynchronous?: boolean;
    /**
     * Determines if the model's animations should hold a pose over frames where no keyframes are specified.
     * Default value: true
     */
    clampAnimations?: boolean;
    /**
     * Determines whether the model casts or receives shadows from light sources.
     */
    shadows?: number | Cesium.ShadowMode;
    /**
     * For debugging only. Draws the bounding sphere for each draw command in the model.
     * Default value: false
     */
    debugShowBoundingVolume?: boolean;
    /**
     * For debugging only. Draws the model in wireframe.
     * Default value: false
     */
    debugWireframe?: boolean;
    /**
     * Determines how the model is drawn relative to terrain.
     */
    heightReference?: number | Cesium.HeightReference;
    /**
     * Must be passed in for models that use the height reference property.
     */
    scene?: Cesium.Scene;
    /**
     * The condition specifying at what distance from the camera that this model will be displayed.
     */
    distanceDisplayCondition?: VcDistanceDisplayCondition;
    /**
     * A color that blends with the model's rendered color.
     * Default value: white
     */
    color?: VcColor;
    /**
     * Defines how the color blends with the model.
     */
    colorBlendMode?: number | Cesium.ColorBlendMode;
    /**
     * Value used to determine the color strength when the colorBlendMode is MIX. A value of 0.0 results in the model's rendered color while a value of 1.0 results in a solid color, with any value in-between resulting in a mix of the two.
     * Default value: 0.5
     */
    colorBlendAmount?: number;
    /**
     * The silhouette color. If more than 256 models have silhouettes enabled, there is a small chance that overlapping models will have minor artifacts.
     */
    silhouetteColor?: VcColor;
    /**
     * The size of the silhouette in pixels.
     * Default value: 0.0
     */
    silhouetteSize?: number;
    /**
     * The ClippingPlaneCollection used to selectively disable rendering the model.
     */
    clippingPlanes?: Cesium.ClippingPlaneCollection;
    /**
     * Determines if a Draco encoded model is dequantized on the GPU. This decreases total memory usage for encoded models.
     * Default value: true
     */
    dequantizeInShader?: boolean;
    /**
     * Scales diffuse and specular image-based lighting from the earth, sky, atmosphere and star skybox.
     * Default value: { x: 1.0, y: 1.0 }
     */
    imageBasedLightingFactor?: VcCartesian2;
    /**
     * The light color when shading the model. When undefined the scene's light color is used instead.
     */
    lightColor?: VcColor;
    /**
     * The sun's luminance at the zenith in kilo candela per meter squared to use for this model's procedural environment map.
     * Default value: 0.2
     */
    luminanceAtZenith?: number;
    /**
     * The third order spherical harmonic coefficients used for the diffuse color of image-based lighting.
     */
    sphericalHarmonicCoefficients?: VcCartesian3Array;
    /**
     * A URL to a KTX2 file that contains a cube map of the specular lighting and the convoluted specular mipmaps.
     */
    specularEnvironmentMaps?: string;
    /**
     * A credit for the model, which is displayed on the canvas.
     */
    credit?: string | Cesium.Credit;
    /**
     * Whether to cull back-facing geometry. When true, back face culling is determined by the material's doubleSided property; when false, back face culling is disabled. Back faces are not culled if Model#color is translucent or Model#silhouetteSize is greater than 0.0.
     * Default value: true
     */
    backFaceCulling?: boolean;
    /**
     * Whether to display the outline for models using the CESIUM_primitive_outline extension. When true, outlines are displayed. When false, outlines are not displayed.
     * Default value: true
     */
    showOutline?: boolean;
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
    onReadyPromise?: (primitive: Cesium.ClassificationPrimitive, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => void;
};
export declare type VcPrimitiveModelRef = VcComponentPublicInstance<VcPrimitiveModelProps>;
export interface VcPrimitiveModelSlots {
    /**
     * Slot for vc-geometry-instance.
     */
    default: () => VNode[];
}
