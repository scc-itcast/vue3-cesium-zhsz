import type { AnyFunction, VcImageryProvider } from 'vue-cesium/es/utils/types';
import type { PropType } from 'vue';
declare const _default: {
    colorToAlphaThreshold: {
        type: NumberConstructor;
        default: number;
    };
    sortOrder: NumberConstructor;
    colorToAlpha: {
        type: PropType<import("vue-cesium/es/utils/types").VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    cutoutRectangle: {
        type: PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    maximumAnisotropy: NumberConstructor;
    minimumTerrainLevel: NumberConstructor;
    maximumTerrainLevel: NumberConstructor;
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
    alpha: {
        type: PropType<number | AnyFunction<any>>;
        default: number;
    };
    nightAlpha: {
        type: PropType<number | AnyFunction<any>>;
        default: number;
    };
    dayAlpha: {
        type: PropType<number | AnyFunction<any>>;
        default: number;
    };
    brightness: {
        type: PropType<number | AnyFunction<any>>;
        default: number;
    };
    contrast: {
        type: PropType<number | AnyFunction<any>>;
        default: number;
    };
    hue: {
        type: PropType<number | AnyFunction<any>>;
        default: number;
    };
    saturation: {
        type: PropType<number | AnyFunction<any>>;
        default: number;
    };
    gamma: {
        type: PropType<number | AnyFunction<any>>;
        default: number;
    };
    splitDirection: {
        type: PropType<number | AnyFunction<any>>;
        default: number;
    };
    minificationFilter: NumberConstructor;
    magnificationFilter: NumberConstructor;
    rectangle: {
        type: PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeRectangle;
        };
    };
    imageryProvider: PropType<VcImageryProvider>;
};
export default _default;
