import { VNode } from 'vue';
import type { AnyFunction, VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcImageryProvider, VcReadyObject, VcRectangle } from 'vue-cesium/es/utils/types';
declare const emits: {
    'update:imageryProvider': (payload: VcImageryProvider) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
};
export declare const imageryLayerProps: {
    colorToAlphaThreshold: {
        type: NumberConstructor;
        default: number;
    };
    sortOrder: NumberConstructor;
    colorToAlpha: {
        type: import("vue").PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    cutoutRectangle: {
        type: import("vue").PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumAnisotropy: NumberConstructor;
    minimumTerrainLevel: NumberConstructor;
    maximumTerrainLevel: NumberConstructor;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    alpha: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    nightAlpha: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    dayAlpha: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    brightness: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    contrast: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    hue: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    saturation: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    gamma: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    splitDirection: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    minificationFilter: NumberConstructor;
    magnificationFilter: NumberConstructor;
    rectangle: {
        type: import("vue").PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    imageryProvider: import("vue").PropType<VcImageryProvider>;
};
declare const _default: import("vue").DefineComponent<{
    colorToAlphaThreshold: {
        type: NumberConstructor;
        default: number;
    };
    sortOrder: NumberConstructor;
    colorToAlpha: {
        type: import("vue").PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    cutoutRectangle: {
        type: import("vue").PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumAnisotropy: NumberConstructor;
    minimumTerrainLevel: NumberConstructor;
    maximumTerrainLevel: NumberConstructor;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    alpha: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    nightAlpha: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    dayAlpha: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    brightness: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    contrast: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    hue: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    saturation: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    gamma: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    splitDirection: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    minificationFilter: NumberConstructor;
    magnificationFilter: NumberConstructor;
    rectangle: {
        type: import("vue").PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    imageryProvider: import("vue").PropType<VcImageryProvider>;
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:imageryProvider': (payload: VcImageryProvider) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    colorToAlphaThreshold: {
        type: NumberConstructor;
        default: number;
    };
    sortOrder: NumberConstructor;
    colorToAlpha: {
        type: import("vue").PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    cutoutRectangle: {
        type: import("vue").PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumAnisotropy: NumberConstructor;
    minimumTerrainLevel: NumberConstructor;
    maximumTerrainLevel: NumberConstructor;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    alpha: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    nightAlpha: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    dayAlpha: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    brightness: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    contrast: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    hue: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    saturation: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    gamma: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    splitDirection: {
        type: import("vue").PropType<number | AnyFunction<any>>;
        default: number;
    };
    minificationFilter: NumberConstructor;
    magnificationFilter: NumberConstructor;
    rectangle: {
        type: import("vue").PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    imageryProvider: import("vue").PropType<VcImageryProvider>;
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    "onUpdate:imageryProvider"?: (payload: VcImageryProvider) => any;
}, {
    show: boolean;
    alpha: number | AnyFunction<any>;
    colorToAlphaThreshold: number;
    nightAlpha: number | AnyFunction<any>;
    dayAlpha: number | AnyFunction<any>;
    brightness: number | AnyFunction<any>;
    contrast: number | AnyFunction<any>;
    hue: number | AnyFunction<any>;
    saturation: number | AnyFunction<any>;
    gamma: number | AnyFunction<any>;
    splitDirection: number | AnyFunction<any>;
}>;
export default _default;
export declare type LayerPropCallback = (frameState: any, layer: Cesium.ImageryLayer, x: number, y: number, level: number) => number;
export declare type VcLayerImageryEmits = typeof emits;
export declare type VcLayerImageryProps = {
    /**
     * The imagery provider to use.
     */
    imageryProvider?: VcImageryProvider;
    /**
     * The rectangle of the layer. This rectangle can limit the visible portion of the imagery provider.
     */
    rectangle?: VcRectangle;
    /**
     * The alpha blending value of this layer, from 0.0 to 1.0. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the alpha is required, and it is expected to return the alpha value to use for the tile.
     * Default value: 1.0
     */
    alpha?: number | LayerPropCallback;
    /**
     * The alpha blending value of this layer on the night side of the globe, from 0.0 to 1.0. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the alpha is required, and it is expected to return the alpha value to use for the tile. This only takes effect when enableLighting is true.
     * Default value: 1.0
     */
    nightAlpha?: number | LayerPropCallback;
    /**
     * The alpha blending value of this layer on the day side of the globe, from 0.0 to 1.0. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the alpha is required, and it is expected to return the alpha value to use for the tile. This only takes effect when enableLighting is true.
     * Default value: 1.0
     */
    dayAlpha?: number | LayerPropCallback;
    /**
     * The brightness of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 makes the imagery darker while greater than 1.0 makes it brighter. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the brightness is required, and it is expected to return the brightness value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.
     * Default value: 1.0
     */
    brightness?: number | LayerPropCallback;
    /**
     * The contrast of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the contrast while greater than 1.0 increases it. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the contrast is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.
     * Default value: 1.0
     */
    contrast?: number | LayerPropCallback;
    /**
     * The hue of this layer. 0.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the hue is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.
     * Default value: 0.0
     */
    hue?: number | LayerPropCallback;
    /**
     * The saturation of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the saturation while greater than 1.0 increases it. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the saturation is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.
     * Default value: 1.0
     */
    saturation?: number | LayerPropCallback;
    /**
     * The gamma correction to apply to this layer. 1.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the gamma is required, and it is expected to return the gamma value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.
     * Default value: 1.0
     */
    gamma?: number | LayerPropCallback;
    /**
     * The ImagerySplitDirection split to apply to this layer.
     */
    splitDirection?: number | Cesium.ImagerySplitDirection | AnyFunction<number | Cesium.ImagerySplitDirection>;
    /**
     * The texture minification filter to apply to this layer. Possible values are TextureMinificationFilter.LINEAR and TextureMinificationFilter.NEAREST.
     */
    minificationFilter?: number | Cesium.TextureMinificationFilter;
    /**
     * The texture minification filter to apply to this layer. Possible values are TextureMagnificationFilter.LINEAR and TextureMagnificationFilter.NEAREST.
     */
    magnificationFilter?: number | Cesium.TextureMagnificationFilter;
    /**
     * True if the layer is shown; otherwise, false.
     * Default value: true
     */
    show?: boolean;
    /**
     * The maximum anisotropy level to use for texture filtering. If this parameter is not specified, the maximum anisotropy supported by the WebGL stack will be used. Larger values make the imagery look better in horizon views.
     */
    maximumAnisotropy?: number;
    /**
     * The minimum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.
     */
    minimumTerrainLevel?: number;
    /**
     * The maximum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.
     */
    maximumTerrainLevel?: number;
    /**
     * Cartographic rectangle for cutting out a portion of this ImageryLayer.
     */
    cutoutRectangle?: VcRectangle;
    /**
     * Color to be used as alpha.
     */
    colorToAlpha?: VcColor;
    /**
     * Threshold for color-to-alpha.
     * Default value: 0.004
     */
    colorToAlphaThreshold?: number;
    /**
     * Specify the relative order of the layer.
     */
    sortOrder?: number;
    /**
     * Triggers before the VcLayerImagery is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcLayerImagery is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcLayerImagery is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when imageryProvider is updated.
     */
    'onUpdate:imageryProvider'?: (payload: VcImageryProvider) => void;
};
export interface VcLayerImageryRef extends VcComponentPublicInstance<VcLayerImageryProps> {
    /**
     * private but needed by VcProviderXXX
     * @param provider
     */
    __updateProvider?(provider: VcImageryProvider | undefined): boolean;
}
export interface VcLayerImagerySlots {
    /**
     * Slot for vc-imagery-provider-xxx.
     */
    default: () => VNode[];
}
