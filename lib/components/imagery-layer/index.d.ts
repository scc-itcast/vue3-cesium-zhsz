import { SFCWithInstall } from 'vue-cesium/es/utils/types';
declare const _ImageryLayer: SFCWithInstall<import("vue").DefineComponent<{
    colorToAlphaThreshold: {
        type: NumberConstructor;
        default: number;
    };
    sortOrder: NumberConstructor;
    colorToAlpha: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    cutoutRectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
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
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    nightAlpha: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    dayAlpha: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    brightness: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    contrast: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    hue: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    saturation: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    gamma: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    splitDirection: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    minificationFilter: NumberConstructor;
    magnificationFilter: NumberConstructor;
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    imageryProvider: import("vue").PropType<import("vue-cesium/es/utils/types").VcImageryProvider>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:imageryProvider': (payload: import("vue-cesium/es/utils/types").VcImageryProvider) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    colorToAlphaThreshold: {
        type: NumberConstructor;
        default: number;
    };
    sortOrder: NumberConstructor;
    colorToAlpha: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    cutoutRectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
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
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    nightAlpha: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    dayAlpha: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    brightness: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    contrast: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    hue: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    saturation: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    gamma: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    splitDirection: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    minificationFilter: NumberConstructor;
    magnificationFilter: NumberConstructor;
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    imageryProvider: import("vue").PropType<import("vue-cesium/es/utils/types").VcImageryProvider>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    "onUpdate:imageryProvider"?: (payload: import("vue-cesium/es/utils/types").VcImageryProvider) => any;
}, {
    show: boolean;
    alpha: number | import("vue-cesium/es/utils/types").AnyFunction<any>;
    colorToAlphaThreshold: number;
    nightAlpha: number | import("vue-cesium/es/utils/types").AnyFunction<any>;
    dayAlpha: number | import("vue-cesium/es/utils/types").AnyFunction<any>;
    brightness: number | import("vue-cesium/es/utils/types").AnyFunction<any>;
    contrast: number | import("vue-cesium/es/utils/types").AnyFunction<any>;
    hue: number | import("vue-cesium/es/utils/types").AnyFunction<any>;
    saturation: number | import("vue-cesium/es/utils/types").AnyFunction<any>;
    gamma: number | import("vue-cesium/es/utils/types").AnyFunction<any>;
    splitDirection: number | import("vue-cesium/es/utils/types").AnyFunction<any>;
}>>;
export default _ImageryLayer;
export declare const VcLayerImagery: SFCWithInstall<import("vue").DefineComponent<{
    colorToAlphaThreshold: {
        type: NumberConstructor;
        default: number;
    };
    sortOrder: NumberConstructor;
    colorToAlpha: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    cutoutRectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
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
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    nightAlpha: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    dayAlpha: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    brightness: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    contrast: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    hue: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    saturation: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    gamma: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    splitDirection: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    minificationFilter: NumberConstructor;
    magnificationFilter: NumberConstructor;
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    imageryProvider: import("vue").PropType<import("vue-cesium/es/utils/types").VcImageryProvider>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:imageryProvider': (payload: import("vue-cesium/es/utils/types").VcImageryProvider) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    colorToAlphaThreshold: {
        type: NumberConstructor;
        default: number;
    };
    sortOrder: NumberConstructor;
    colorToAlpha: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    cutoutRectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
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
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    nightAlpha: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    dayAlpha: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    brightness: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    contrast: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    hue: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    saturation: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    gamma: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    splitDirection: {
        type: import("vue").PropType<number | import("vue-cesium/es/utils/types").AnyFunction<any>>;
        default: number;
    };
    minificationFilter: NumberConstructor;
    magnificationFilter: NumberConstructor;
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    imageryProvider: import("vue").PropType<import("vue-cesium/es/utils/types").VcImageryProvider>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    "onUpdate:imageryProvider"?: (payload: import("vue-cesium/es/utils/types").VcImageryProvider) => any;
}, {
    show: boolean;
    alpha: number | import("vue-cesium/es/utils/types").AnyFunction<any>;
    colorToAlphaThreshold: number;
    nightAlpha: number | import("vue-cesium/es/utils/types").AnyFunction<any>;
    dayAlpha: number | import("vue-cesium/es/utils/types").AnyFunction<any>;
    brightness: number | import("vue-cesium/es/utils/types").AnyFunction<any>;
    contrast: number | import("vue-cesium/es/utils/types").AnyFunction<any>;
    hue: number | import("vue-cesium/es/utils/types").AnyFunction<any>;
    saturation: number | import("vue-cesium/es/utils/types").AnyFunction<any>;
    gamma: number | import("vue-cesium/es/utils/types").AnyFunction<any>;
    splitDirection: number | import("vue-cesium/es/utils/types").AnyFunction<any>;
}>>;
export * from './src';
