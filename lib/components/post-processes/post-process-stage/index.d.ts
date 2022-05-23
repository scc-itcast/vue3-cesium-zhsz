import type { VcBoundingRectangle, VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const postProcessStageProps: {
    name: StringConstructor;
    scissorRectangle: {
        type: import("vue").PropType<VcBoundingRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeBoundingRectangle;
        };
    };
    clearColor: {
        type: import("vue").PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    fragmentShader: StringConstructor;
    uniforms: ObjectConstructor;
    textureScale: {
        type: NumberConstructor;
        default: number;
    };
    forcePowerOfTwo: {
        type: BooleanConstructor;
        default: boolean;
    };
    sampleMode: import("vue").PropType<number>;
    pixelFormat: import("vue").PropType<Cesium.PixelFormat>;
    pixelDatatype: import("vue").PropType<Cesium.PixelDatatype>;
};
declare const _default: import("vue").DefineComponent<{
    name: StringConstructor;
    scissorRectangle: {
        type: import("vue").PropType<VcBoundingRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeBoundingRectangle;
        };
    };
    clearColor: {
        type: import("vue").PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    fragmentShader: StringConstructor;
    uniforms: ObjectConstructor;
    textureScale: {
        type: NumberConstructor;
        default: number;
    };
    forcePowerOfTwo: {
        type: BooleanConstructor;
        default: boolean;
    };
    sampleMode: import("vue").PropType<number>;
    pixelFormat: import("vue").PropType<Cesium.PixelFormat>;
    pixelDatatype: import("vue").PropType<Cesium.PixelDatatype>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: StringConstructor;
    scissorRectangle: {
        type: import("vue").PropType<VcBoundingRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeBoundingRectangle;
        };
    };
    clearColor: {
        type: import("vue").PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    fragmentShader: StringConstructor;
    uniforms: ObjectConstructor;
    textureScale: {
        type: NumberConstructor;
        default: number;
    };
    forcePowerOfTwo: {
        type: BooleanConstructor;
        default: boolean;
    };
    sampleMode: import("vue").PropType<number>;
    pixelFormat: import("vue").PropType<Cesium.PixelFormat>;
    pixelDatatype: import("vue").PropType<Cesium.PixelDatatype>;
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
}, {
    textureScale: number;
    forcePowerOfTwo: boolean;
}>;
export default _default;
export declare type VcPostProcessStageProps = {
    /**
     * The fragment shader to use. The default sampler2D uniforms are colorTexture and depthTexture. The color texture is the output of rendering the scene or the previous stage. The depth texture is the output from rendering the scene. The shader should contain one or both uniforms. There is also a vec2 varying named v_textureCoordinates that can be used to sample the textures.
     */
    fragmentShader: string;
    /**
     * An object whose properties will be used to set the shaders uniforms. The properties can be constant values or a function. A constant value can also be a URI, data URI, or HTML element to use as a texture.
     */
    uniforms?: any;
    /**
     * A number in the range (0.0, 1.0] used to scale the texture dimensions. A scale of 1.0 will render this post-process stage to a texture the size of the viewport.
     * Default value: 1.0
     */
    textureScale?: number;
    /**
     * Whether or not to force the texture dimensions to be both equal powers of two. The power of two will be the next power of two of the minimum of the dimensions.
     * Default value: false
     */
    forcePowerOfTwo?: boolean;
    /**
     * How to sample the input color texture.
     */
    sampleMode?: number | Cesium.PostProcessStageSampleMode;
    /**
     * The color pixel format of the output texture.
     */
    pixelFormat?: number | Cesium.PixelFormat;
    /**
     * The pixel data type of the output texture.
     */
    pixelDatatype?: number | Cesium.PixelDatatype;
    /**
     * The color to clear the output texture to.
     */
    clearColor?: VcColor;
    /**
     * The rectangle to use for the scissor test.
     */
    scissorRectangle?: VcBoundingRectangle;
    /**
     * The unique name of this post-process stage for reference by other stages in a composite. If a name is not supplied, a GUID will be generated.
     */
    name?: string;
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
};
export declare type VcPostProcessStageRef = VcComponentPublicInstance<VcPostProcessStageProps>;
