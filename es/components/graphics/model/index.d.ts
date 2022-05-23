import type { VcCallbackPropertyFunction, VcCartesian2, VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcDistanceDisplayCondition, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const modelGraphicsProps: {
    clippingPlanes: import("vue").PropType<Cesium.ClippingPlaneCollection | VcCallbackPropertyFunction<Cesium.ClippingPlaneCollection>>;
    articulations: (ObjectConstructor | FunctionConstructor)[];
    nodeTransformations: {
        type: import("vue").PropType<Cesium.TranslationRotationScale>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeTranslationRotationScale;
        };
    };
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    lightColor: {
        type: import("vue").PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    imageBasedLightingFactor: {
        type: import("vue").PropType<VcCartesian2>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    colorBlendAmount: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    colorBlendMode: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    color: {
        type: import("vue").PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    silhouetteSize: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    silhouetteColor: {
        type: import("vue").PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    heightReference: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    };
    shadows: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    clampAnimations: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    incrementallyLoadTextures: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    maximumScale: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
    minimumPixelSize: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    scale: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    uri: import("vue").PropType<string | Cesium.CallbackProperty | VcCallbackPropertyFunction<string> | Cesium.Resource>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
};
declare const _default: import("vue").DefineComponent<{
    clippingPlanes: import("vue").PropType<Cesium.ClippingPlaneCollection | VcCallbackPropertyFunction<Cesium.ClippingPlaneCollection>>;
    articulations: (ObjectConstructor | FunctionConstructor)[];
    nodeTransformations: {
        type: import("vue").PropType<Cesium.TranslationRotationScale>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeTranslationRotationScale;
        };
    };
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    lightColor: {
        type: import("vue").PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    imageBasedLightingFactor: {
        type: import("vue").PropType<VcCartesian2>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    colorBlendAmount: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    colorBlendMode: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    color: {
        type: import("vue").PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    silhouetteSize: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    silhouetteColor: {
        type: import("vue").PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    heightReference: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    };
    shadows: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    clampAnimations: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    incrementallyLoadTextures: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    maximumScale: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
    minimumPixelSize: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    scale: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    uri: import("vue").PropType<string | Cesium.CallbackProperty | VcCallbackPropertyFunction<string> | Cesium.Resource>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    clippingPlanes: import("vue").PropType<Cesium.ClippingPlaneCollection | VcCallbackPropertyFunction<Cesium.ClippingPlaneCollection>>;
    articulations: (ObjectConstructor | FunctionConstructor)[];
    nodeTransformations: {
        type: import("vue").PropType<Cesium.TranslationRotationScale>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeTranslationRotationScale;
        };
    };
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    lightColor: {
        type: import("vue").PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    imageBasedLightingFactor: {
        type: import("vue").PropType<VcCartesian2>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    colorBlendAmount: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    colorBlendMode: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    color: {
        type: import("vue").PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    silhouetteSize: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    silhouetteColor: {
        type: import("vue").PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    heightReference: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    };
    shadows: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    clampAnimations: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    incrementallyLoadTextures: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    maximumScale: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
    minimumPixelSize: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    scale: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    uri: import("vue").PropType<string | Cesium.CallbackProperty | VcCallbackPropertyFunction<string> | Cesium.Resource>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
}, {
    show: boolean;
    color: VcColor;
    scale: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    imageBasedLightingFactor: VcCartesian2;
    colorBlendAmount: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    colorBlendMode: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    silhouetteSize: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    clampAnimations: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    incrementallyLoadTextures: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    minimumPixelSize: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
}>;
export default _default;
export declare type VcGraphicsModelProps = {
    /**
     * A boolean Property specifying the visibility of the model.
     * Default value: true
     */
    show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * A string or Resource Property specifying the URI of the glTF asset.
     */
    uri?: string | Cesium.Resource | Cesium.CallbackProperty | VcCallbackPropertyFunction<string>;
    /**
     * A numeric Property specifying a uniform linear scale.
     * Default value: 1.0
     */
    scale?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A numeric Property specifying the approximate minimum pixel size of the model regardless of zoom.
     * Default value: 0.0
     */
    minimumPixelSize?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * The maximum scale size of a model. An upper limit for minimumPixelSize.
     */
    maximumScale?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * Determine if textures may continue to stream in after the model is loaded.
     * Default value: true
     */
    incrementallyLoadTextures?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * A boolean Property specifying if glTF animations specified in the model should be started.
     * Default value: true
     */
    runAnimations?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * A boolean Property specifying if glTF animations should hold the last pose for time durations with no keyframes.
     * Default value: true
     */
    clampAnimations?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * An enum Property specifying whether the model casts or receives shadows from light sources.
     */
    shadows?: number | Cesium.ShadowMode | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying what the height is relative to.
     * Default value: HeightReference.NONE
     */
    heightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying the VcColor of the silhouette.
     */
    silhouetteColor?: VcColor;
    /**
     * A numeric Property specifying the size of the silhouette in pixels.
     * Default value: 0.0
     */
    silhouetteSize?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying the Color that blends with the model's rendered color.
     * Default value: white
     */
    color?: VcColor;
    /**
     * An enum Property specifying how the color blends with the model.
     * Default value: Cesium.ColorBlendMode.HIGHLIGHT
     */
    colorBlendMode?: number | Cesium.ColorBlendMode | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A numeric Property specifying the color strength when the colorBlendMode is MIX. A value of 0.0 results in the model's rendered color while a value of 1.0 results in a solid color, with any value in-between resulting in a mix of the two.
     * Default value: 0.5
     */
    colorBlendAmount?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A property specifying the contribution from diffuse and specular image-based lighting.
     * Default value: [1.0, 1.0]
     */
    imageBasedLightingFactor?: VcCartesian2;
    /**
     * A property specifying the light color when shading the model. When undefined the scene's light color is used instead.
     */
    lightColor?: VcColor;
    /**
     * A Property specifying at what distance from the camera that this model will be displayed.
     */
    distanceDisplayCondition?: VcDistanceDisplayCondition;
    /**
     * An object, where keys are names of nodes, and values are TranslationRotationScale Properties describing the transformation to apply to that node. The transformation is applied after the node's existing transformation as specified in the glTF, and does not replace the node's existing transformation.
     */
    nodeTransformations?: Cesium.TranslationRotationScale;
    /**
     * An object, where keys are composed of an articulation name, a single space, and a stage name, and the values are numeric properties.
     */
    articulations?: any;
    /**
     * A property specifying the ClippingPlaneCollection used to selectively disable rendering the model.
     */
    clippingPlanes?: Cesium.ClippingPlaneCollection | VcCallbackPropertyFunction<Cesium.ClippingPlaneCollection>;
    /**
     * Triggers before the VcGraphicsModel is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGraphicsModel is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGraphicsModel is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when a property or sub-property is changed or modified.
     */
    onDefinitionChanged?: (property: Cesium.Property) => void;
};
export declare type VcGraphicsModelRef = VcComponentPublicInstance<VcGraphicsModelProps>;
