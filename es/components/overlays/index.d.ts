import { App } from 'vue';
import { SFCWithInstall } from 'vue-cesium/es/utils/types';
declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;
export declare const VcOverlayHtml: SFCWithInstall<import("vue").DefineComponent<{
    autoHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: StringConstructor;
    teleport: import("vue").PropType<import("vue").TeleportProps>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    pixelOffset: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian2>;
        default: () => {
            x: number;
            y: number;
        };
        validator: (v: any) => boolean;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian2;
        };
    };
    position: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    mouseenter: (evt: MouseEvent) => boolean;
    mouseleave: (evt: MouseEvent) => boolean;
    click: (evt: MouseEvent) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    autoHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: StringConstructor;
    teleport: import("vue").PropType<import("vue").TeleportProps>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    pixelOffset: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian2>;
        default: () => {
            x: number;
            y: number;
        };
        validator: (v: any) => boolean;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian2;
        };
    };
    position: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onClick?: (evt: MouseEvent) => any;
    onMouseenter?: (evt: MouseEvent) => any;
    onMouseleave?: (evt: MouseEvent) => any;
}, {
    show: boolean;
    pixelOffset: import("vue-cesium/es/utils/types").VcCartesian2;
    autoHidden: boolean;
}>>;
export declare const VcOverlayHeatmap: SFCWithInstall<import("vue").DefineComponent<{
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    data: import("vue").PropType<import("vue-cesium/es/utils/types").VcHeatMapData[]>;
    options: import("vue").PropType<import("vue-cesium/es/utils/types").HeatmapConfiguration>;
    type: {
        type: import("vue").PropType<"primitive" | "entity" | "imagery-layer">;
        default: string;
    };
    segments: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColorSegments[]>;
        default: () => any[];
    };
    projection: {
        type: import("vue").PropType<"3857" | "4326">;
        default: string;
    };
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    data: import("vue").PropType<import("vue-cesium/es/utils/types").VcHeatMapData[]>;
    options: import("vue").PropType<import("vue-cesium/es/utils/types").HeatmapConfiguration>;
    type: {
        type: import("vue").PropType<"primitive" | "entity" | "imagery-layer">;
        default: string;
    };
    segments: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColorSegments[]>;
        default: () => any[];
    };
    projection: {
        type: import("vue").PropType<"3857" | "4326">;
        default: string;
    };
    rectangle: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeRectangle;
        };
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
}, {
    show: boolean;
    type: "primitive" | "entity" | "imagery-layer";
    min: number;
    max: number;
    segments: import("vue-cesium/es/utils/types").VcColorSegments[];
    projection: "3857" | "4326";
}>>;
export declare const VcOverlayEcharts: SFCWithInstall<import("vue").DefineComponent<{
    options: {
        type: import("vue").PropType<import("echarts/types/dist/echarts").EChartsOption>;
        required: boolean;
    };
    autoHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: StringConstructor;
    coordinateSystem: {
        type: StringConstructor;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("beforeLoad" | "ready" | "destroyed" | "click" | "mouseenter" | "mouseleave")[], "beforeLoad" | "ready" | "destroyed" | "click" | "mouseenter" | "mouseleave", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: import("vue").PropType<import("echarts/types/dist/echarts").EChartsOption>;
        required: boolean;
    };
    autoHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: StringConstructor;
    coordinateSystem: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onBeforeLoad?: (...args: any[]) => any;
    onReady?: (...args: any[]) => any;
    onDestroyed?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
    onMouseenter?: (...args: any[]) => any;
    onMouseleave?: (...args: any[]) => any;
}, {
    autoHidden: boolean;
    coordinateSystem: string;
}>>;
export declare const VcOverlayWind: SFCWithInstall<import("vue").DefineComponent<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: import("vue").PropType<import("./wind/types").VcWindData>;
        required: boolean;
    };
    options: {
        type: import("vue").PropType<import("./wind/types").ParticleSystemOptions>;
        default: () => import("./wind/types").ParticleSystemOptions;
    };
    viewerParameters: import("vue").PropType<import("./wind/types").ViewerParameters>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: import("vue").PropType<import("./wind/types").VcWindData>;
        required: boolean;
    };
    options: {
        type: import("vue").PropType<import("./wind/types").ParticleSystemOptions>;
        default: () => import("./wind/types").ParticleSystemOptions;
    };
    viewerParameters: import("vue").PropType<import("./wind/types").ViewerParameters>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
}, {
    show: boolean;
    options: import("./wind/types").ParticleSystemOptions;
}>>;
export declare const VcOverlayDynamic: SFCWithInstall<import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    startTime: {
        type: import("vue").PropType<string | Cesium.JulianDate | Date>;
    };
    stopTime: {
        type: import("vue").PropType<string | Cesium.JulianDate | Date>;
    };
    currentTime: {
        type: import("vue").PropType<string | Cesium.JulianDate | Date>;
    };
    clockRange: {
        type: import("vue").PropType<number>;
        default: number;
    };
    clockStep: {
        type: import("vue").PropType<number>;
        default: number;
    };
    shouldAnimate: {
        type: BooleanConstructor;
        default: boolean;
    };
    canAnimate: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiplier: {
        type: NumberConstructor;
        default: number;
    };
    dynamicOverlays: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").DynamicOverlayOpts[]>;
        default: () => any[];
    };
    defaultInterval: {
        type: NumberConstructor;
        default: number;
    };
    stopArrivedFlag: {
        type: import("vue").PropType<"position" | "time" | "both" | "or">;
        default: string;
    };
    positionPrecision: {
        type: NumberConstructor;
        default: number;
    };
    timePrecision: {
        type: NumberConstructor;
        default: number;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:currentTime': (currentTime: Cesium.JulianDate) => boolean;
    'update:shouldAnimate': (shouldAnimate: boolean) => boolean;
    'update:canAnimate': (canAnimate: boolean) => boolean;
    'update:clockRange': (clockRange: number) => boolean;
    'update:clockStep': (clockStep: number) => boolean;
    'update:multiplier': (multiplier: number) => boolean;
    'update:startTime': (startTime: Cesium.JulianDate) => boolean;
    'update:stopTime': (stopTime: Cesium.JulianDate) => boolean;
    onStop: (clock: Cesium.Clock) => boolean;
    stopArrived: (overlay: import("../../shared/src/DynamicOverlay").default, position: import("vue-cesium/es/utils/types").SampledPosition) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    startTime: {
        type: import("vue").PropType<string | Cesium.JulianDate | Date>;
    };
    stopTime: {
        type: import("vue").PropType<string | Cesium.JulianDate | Date>;
    };
    currentTime: {
        type: import("vue").PropType<string | Cesium.JulianDate | Date>;
    };
    clockRange: {
        type: import("vue").PropType<number>;
        default: number;
    };
    clockStep: {
        type: import("vue").PropType<number>;
        default: number;
    };
    shouldAnimate: {
        type: BooleanConstructor;
        default: boolean;
    };
    canAnimate: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiplier: {
        type: NumberConstructor;
        default: number;
    };
    dynamicOverlays: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").DynamicOverlayOpts[]>;
        default: () => any[];
    };
    defaultInterval: {
        type: NumberConstructor;
        default: number;
    };
    stopArrivedFlag: {
        type: import("vue").PropType<"position" | "time" | "both" | "or">;
        default: string;
    };
    positionPrecision: {
        type: NumberConstructor;
        default: number;
    };
    timePrecision: {
        type: NumberConstructor;
        default: number;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onOnStop?: (clock: Cesium.Clock) => any;
    "onUpdate:currentTime"?: (currentTime: Cesium.JulianDate) => any;
    "onUpdate:shouldAnimate"?: (shouldAnimate: boolean) => any;
    "onUpdate:canAnimate"?: (canAnimate: boolean) => any;
    "onUpdate:clockRange"?: (clockRange: number) => any;
    "onUpdate:clockStep"?: (clockStep: number) => any;
    "onUpdate:multiplier"?: (multiplier: number) => any;
    "onUpdate:startTime"?: (startTime: Cesium.JulianDate) => any;
    "onUpdate:stopTime"?: (stopTime: Cesium.JulianDate) => any;
    onStopArrived?: (overlay: import("../../shared/src/DynamicOverlay").default, position: import("vue-cesium/es/utils/types").SampledPosition) => any;
}, {
    show: boolean;
    name: string;
    clockRange: number;
    clockStep: number;
    shouldAnimate: boolean;
    canAnimate: boolean;
    multiplier: number;
    dynamicOverlays: import("vue-cesium/es/utils/types").DynamicOverlayOpts[];
    defaultInterval: number;
    stopArrivedFlag: "position" | "time" | "both" | "or";
    positionPrecision: number;
    timePrecision: number;
}>>;
export * from './dynamic';
export * from './echarts';
export * from './heatmap';
export * from './html';
export * from './wind';
