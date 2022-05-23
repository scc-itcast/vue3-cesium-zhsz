import { App } from 'vue';
import { SFCWithInstall } from 'vue-cesium/es/utils/types';
declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;
export declare const VcCompass: SFCWithInstall<import("vue").DefineComponent<{
    outerOptions: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcBtnTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcBtnTooltipProps;
    };
    innerOptions: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcBtnTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcBtnTooltipProps;
    };
    markerOptions: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcBtnTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcBtnTooltipProps;
    };
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    enableCompassOuterRing: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    compassEvt: (evt: import("vue-cesium/es/utils/types").VcCompassEvt) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    outerOptions: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcBtnTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcBtnTooltipProps;
    };
    innerOptions: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcBtnTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcBtnTooltipProps;
    };
    markerOptions: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcBtnTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcBtnTooltipProps;
    };
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    enableCompassOuterRing: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onCompassEvt?: (evt: import("vue-cesium/es/utils/types").VcCompassEvt) => any;
}, {
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    outerOptions: import("vue-cesium/es/utils/types").VcBtnTooltipProps;
    innerOptions: import("vue-cesium/es/utils/types").VcBtnTooltipProps;
    markerOptions: import("vue-cesium/es/utils/types").VcBtnTooltipProps;
    enableCompassOuterRing: boolean;
    duration: number;
}>>;
export declare const VcZoomControl: SFCWithInstall<import("vue").DefineComponent<{
    background: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: StringConstructor;
        default: string;
    };
    borderRadius: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: string) => boolean;
    };
    zoomInOptions: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcBtnTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcBtnTooltipProps;
    };
    zoomOutOptions: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcBtnTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcBtnTooltipProps;
    };
    zoomResetOptions: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcBtnTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcBtnTooltipProps;
    };
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    enableResetButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomAmount: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    durationReset: {
        type: NumberConstructor;
    };
    defaultResetView: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCamera>;
        default: () => import("vue-cesium/es/utils/types").VcCamera;
    };
    overrideViewerCamera: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    zoomEvt: (evt: import("vue-cesium/es/utils/types").VcZoomEvt) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    background: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: StringConstructor;
        default: string;
    };
    borderRadius: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: string) => boolean;
    };
    zoomInOptions: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcBtnTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcBtnTooltipProps;
    };
    zoomOutOptions: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcBtnTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcBtnTooltipProps;
    };
    zoomResetOptions: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcBtnTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcBtnTooltipProps;
    };
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    enableResetButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomAmount: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    durationReset: {
        type: NumberConstructor;
    };
    defaultResetView: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCamera>;
        default: () => import("vue-cesium/es/utils/types").VcCamera;
    };
    overrideViewerCamera: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onZoomEvt?: (evt: import("vue-cesium/es/utils/types").VcZoomEvt) => any;
}, {
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    direction: "horizontal" | "vertical";
    duration: number;
    background: string;
    border: string;
    borderRadius: string;
    zoomInOptions: import("vue-cesium/es/utils/types").VcBtnTooltipProps;
    zoomOutOptions: import("vue-cesium/es/utils/types").VcBtnTooltipProps;
    zoomResetOptions: import("vue-cesium/es/utils/types").VcBtnTooltipProps;
    enableResetButton: boolean;
    zoomAmount: number;
    defaultResetView: import("vue-cesium/es/utils/types").VcCamera;
    overrideViewerCamera: boolean;
}>>;
export declare const VcPrint: SFCWithInstall<import("vue").DefineComponent<{
    icon: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: StringConstructor;
    stack: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: import("vue").PropType<false | import("..").VcTooltipProps>;
        default: () => false | import("..").VcTooltipProps;
    };
    screenshotName: StringConstructor;
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    showCredit: {
        type: BooleanConstructor;
        default: boolean;
    };
    printAutomatically: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPrintView: {
        type: BooleanConstructor;
        default: boolean;
    };
    downloadAutomatically: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    printEvt: (evt: import("vue-cesium/es/utils/types").VcPrintEvt) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: StringConstructor;
    stack: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: import("vue").PropType<false | import("..").VcTooltipProps>;
        default: () => false | import("..").VcTooltipProps;
    };
    screenshotName: StringConstructor;
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    showCredit: {
        type: BooleanConstructor;
        default: boolean;
    };
    printAutomatically: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPrintView: {
        type: BooleanConstructor;
        default: boolean;
    };
    downloadAutomatically: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onPrintEvt?: (evt: import("vue-cesium/es/utils/types").VcPrintEvt) => any;
}, {
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    color: string;
    tooltip: false | import("..").VcTooltipProps;
    round: boolean;
    flat: boolean;
    icon: string;
    background: string;
    size: string;
    stack: boolean;
    showCredit: boolean;
    printAutomatically: boolean;
    showPrintView: boolean;
    downloadAutomatically: boolean;
}>>;
export declare const VcMyLocation: SFCWithInstall<import("vue").DefineComponent<{
    icon: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: StringConstructor;
    stack: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: import("vue").PropType<false | import("..").VcTooltipProps>;
        default: () => false | import("..").VcTooltipProps;
    };
    loadingType: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    geolocation: {
        type: import("vue").PropType<PositionOptions>;
        default: () => PositionOptions;
    };
    amap: import("vue").PropType<{
        key: string;
        version: string;
        options: {
            timeout?: number;
            convert?: false;
            noGeoLocation?: 0 | 1 | 2 | 3;
            needAddress?: boolean;
            extensions?: "all" | "base";
        };
        transformToWGS84?: boolean;
    }>;
    id: {
        type: StringConstructor;
        default: string;
    };
    pointColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
    };
    pixelSize: {
        type: NumberConstructor;
        default: number;
    };
    outlineWidth: {
        type: NumberConstructor;
        default: number;
    };
    outlineColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
    };
    level: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    factor: {
        type: NumberConstructor;
        default: number;
    };
    maximumHeight: NumberConstructor;
    hpr: {
        type: import("vue").PropType<[number, number, number]>;
        default: () => number[];
    };
    customAPI: import("vue").PropType<(errorCallback: any) => {
        lng: number;
        lat: number;
    }>;
    description: import("vue").PropType<(position: any, detail: any) => string>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    locationEvt: (evt: import("vue-cesium/es/utils/types").VcLocationEvt) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: StringConstructor;
    stack: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: import("vue").PropType<false | import("..").VcTooltipProps>;
        default: () => false | import("..").VcTooltipProps;
    };
    loadingType: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    geolocation: {
        type: import("vue").PropType<PositionOptions>;
        default: () => PositionOptions;
    };
    amap: import("vue").PropType<{
        key: string;
        version: string;
        options: {
            timeout?: number;
            convert?: false;
            noGeoLocation?: 0 | 1 | 2 | 3;
            needAddress?: boolean;
            extensions?: "all" | "base";
        };
        transformToWGS84?: boolean;
    }>;
    id: {
        type: StringConstructor;
        default: string;
    };
    pointColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
    };
    pixelSize: {
        type: NumberConstructor;
        default: number;
    };
    outlineWidth: {
        type: NumberConstructor;
        default: number;
    };
    outlineColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
    };
    level: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    factor: {
        type: NumberConstructor;
        default: number;
    };
    maximumHeight: NumberConstructor;
    hpr: {
        type: import("vue").PropType<[number, number, number]>;
        default: () => number[];
    };
    customAPI: import("vue").PropType<(errorCallback: any) => {
        lng: number;
        lat: number;
    }>;
    description: import("vue").PropType<(position: any, detail: any) => string>;
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onLocationEvt?: (evt: import("vue-cesium/es/utils/types").VcLocationEvt) => any;
}, {
    level: number;
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    outlineColor: import("vue-cesium/es/utils/types").VcColor;
    outlineWidth: number;
    color: string;
    tooltip: false | import("..").VcTooltipProps;
    id: string;
    round: boolean;
    flat: boolean;
    icon: string;
    duration: number;
    background: string;
    size: string;
    stack: boolean;
    loadingType: string;
    geolocation: PositionOptions;
    pointColor: import("vue-cesium/es/utils/types").VcColor;
    pixelSize: number;
    factor: number;
    hpr: [number, number, number];
}>>;
export declare const VcStatusBar: SFCWithInstall<import("vue").DefineComponent<{
    gridFileUrl: {
        type: StringConstructor;
        default: string;
    };
    proj4Projection: {
        type: StringConstructor;
        default: string;
    };
    projectionUnits: {
        type: StringConstructor;
        default: string;
    };
    proj4longlat: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    showCameraInfo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showMouseInfo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showPerformanceInfo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    useProjection: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    tooltip: {
        type: import("vue").PropType<false | import("..").VcTooltipProps>;
        default: () => false | import("..").VcTooltipProps;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    statusBarEvt: (evt: import("vue-cesium/es/utils/types").VcStatusBarEvt) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    gridFileUrl: {
        type: StringConstructor;
        default: string;
    };
    proj4Projection: {
        type: StringConstructor;
        default: string;
    };
    projectionUnits: {
        type: StringConstructor;
        default: string;
    };
    proj4longlat: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    showCameraInfo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showMouseInfo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showPerformanceInfo: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    useProjection: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    tooltip: {
        type: import("vue").PropType<false | import("..").VcTooltipProps>;
        default: () => false | import("..").VcTooltipProps;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onStatusBarEvt?: (evt: import("vue-cesium/es/utils/types").VcStatusBarEvt) => any;
}, {
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    color: string;
    tooltip: false | import("..").VcTooltipProps;
    background: string;
    gridFileUrl: string;
    proj4Projection: string;
    projectionUnits: string;
    proj4longlat: string;
    showCameraInfo: boolean;
    showMouseInfo: boolean;
    showPerformanceInfo: boolean;
    useProjection: boolean;
}>>;
export declare const VcDistanceLegend: SFCWithInstall<import("vue").DefineComponent<{
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    barBackground: {
        type: StringConstructor;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    distanceLegendEvt: (evt: import("vue-cesium/es/utils/types").VcDistanceLegendEvt) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    barBackground: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onDistanceLegendEvt?: (evt: import("vue-cesium/es/utils/types").VcDistanceLegendEvt) => any;
}, {
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    color: string;
    width: number;
    background: string;
    barBackground: string;
}>>;
export declare const VcNavigation: SFCWithInstall<import("vue").DefineComponent<{
    compassOpts: {
        type: import("vue").PropType<false | import("./compass").VcCompassProps>;
        default: () => import("./compass").VcCompassProps;
    };
    zoomOpts: {
        type: import("vue").PropType<false | import("./zoom-control").VcZoomControlProps>;
        default: () => import("./zoom-control").VcZoomControlProps;
    };
    printOpts: {
        type: import("vue").PropType<false | import("./print").VcPrintProps>;
        default: () => import("./print").VcPrintProps;
    };
    locationOpts: {
        type: import("vue").PropType<false | import("./my-location").VcMyLocationProps>;
        default: () => import("./my-location").VcMyLocationProps;
    };
    otherOpts: {
        type: import("vue").PropType<false | import("./navigation/defaultProps").VcNavigationOtherOpts>;
        default: () => import("./navigation/defaultProps").VcNavigationOtherOpts;
    };
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    zoomEvt: (evt: import("vue-cesium/es/utils/types").VcZoomEvt) => boolean;
    compassEvt: (evt: import("vue-cesium/es/utils/types").VcCompassEvt) => boolean;
    locationEvt: (evt: import("vue-cesium/es/utils/types").VcLocationEvt) => boolean;
    printEvt: (evt: import("vue-cesium/es/utils/types").VcPrintEvt) => boolean;
    statusBarEvt: (evt: import("vue-cesium/es/utils/types").VcStatusBarEvt) => boolean;
    distanceLegendEvt: (evt: import("vue-cesium/es/utils/types").VcDistanceLegendEvt) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    compassOpts: {
        type: import("vue").PropType<false | import("./compass").VcCompassProps>;
        default: () => import("./compass").VcCompassProps;
    };
    zoomOpts: {
        type: import("vue").PropType<false | import("./zoom-control").VcZoomControlProps>;
        default: () => import("./zoom-control").VcZoomControlProps;
    };
    printOpts: {
        type: import("vue").PropType<false | import("./print").VcPrintProps>;
        default: () => import("./print").VcPrintProps;
    };
    locationOpts: {
        type: import("vue").PropType<false | import("./my-location").VcMyLocationProps>;
        default: () => import("./my-location").VcMyLocationProps;
    };
    otherOpts: {
        type: import("vue").PropType<false | import("./navigation/defaultProps").VcNavigationOtherOpts>;
        default: () => import("./navigation/defaultProps").VcNavigationOtherOpts;
    };
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onCompassEvt?: (evt: import("vue-cesium/es/utils/types").VcCompassEvt) => any;
    onZoomEvt?: (evt: import("vue-cesium/es/utils/types").VcZoomEvt) => any;
    onPrintEvt?: (evt: import("vue-cesium/es/utils/types").VcPrintEvt) => any;
    onLocationEvt?: (evt: import("vue-cesium/es/utils/types").VcLocationEvt) => any;
    onStatusBarEvt?: (evt: import("vue-cesium/es/utils/types").VcStatusBarEvt) => any;
    onDistanceLegendEvt?: (evt: import("vue-cesium/es/utils/types").VcDistanceLegendEvt) => any;
}, {
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    compassOpts: import("./compass").VcCompassProps;
    zoomOpts: import("./zoom-control").VcZoomControlProps;
    printOpts: import("./print").VcPrintProps;
    locationOpts: import("./my-location").VcMyLocationProps;
    otherOpts: import("./navigation/defaultProps").VcNavigationOtherOpts;
}>>;
export declare const VcCompassSm: SFCWithInstall<import("vue").DefineComponent<{
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    enableCompassOuterRing: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    tooltip: {
        type: import("vue").PropType<false | import("..").VcTooltipProps>;
        default: () => false | import("..").VcTooltipProps;
    };
    autoHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    compassEvt: (evt: import("vue-cesium/es/utils/types").VcCompassEvt) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    enableCompassOuterRing: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    tooltip: {
        type: import("vue").PropType<false | import("..").VcTooltipProps>;
        default: () => false | import("..").VcTooltipProps;
    };
    autoHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onCompassEvt?: (evt: import("vue-cesium/es/utils/types").VcCompassEvt) => any;
}, {
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    tooltip: false | import("..").VcTooltipProps;
    enableCompassOuterRing: boolean;
    duration: number;
    autoHidden: boolean;
}>>;
export declare const VcZoomControlSm: SFCWithInstall<import("vue").DefineComponent<{
    autoHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: ObjectConstructor;
        default: () => {
            delay: number;
            anchor: string;
            offset: number[];
            zoomInTip: any;
            zoomOutTip: any;
            zoomBarTip: any;
        };
    };
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    zoomEvt: (evt: import("vue-cesium/es/utils/types").VcZoomEvt) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    autoHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: ObjectConstructor;
        default: () => {
            delay: number;
            anchor: string;
            offset: number[];
            zoomInTip: any;
            zoomOutTip: any;
            zoomBarTip: any;
        };
    };
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onZoomEvt?: (evt: import("vue-cesium/es/utils/types").VcZoomEvt) => any;
}, {
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    tooltip: Record<string, any>;
    autoHidden: boolean;
}>>;
export declare const VcNavigationSm: SFCWithInstall<import("vue").DefineComponent<{
    compassOpts: {
        type: import("vue").PropType<false | import("./navigation-sm/compass-sm").VcCompassSmProps>;
        default: () => import("./navigation-sm/compass-sm").VcCompassSmProps;
    };
    zoomOpts: {
        type: import("vue").PropType<false | import("./navigation-sm/zoom-control-sm").VcZoomControlSmProps>;
        default: () => import("./navigation-sm/zoom-control-sm").VcZoomControlSmProps;
    };
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    zoomEvt: (evt: import("vue-cesium/es/utils/types").VcZoomEvt) => boolean;
    compassEvt: (evt: import("vue-cesium/es/utils/types").VcCompassEvt) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    compassOpts: {
        type: import("vue").PropType<false | import("./navigation-sm/compass-sm").VcCompassSmProps>;
        default: () => import("./navigation-sm/compass-sm").VcCompassSmProps;
    };
    zoomOpts: {
        type: import("vue").PropType<false | import("./navigation-sm/zoom-control-sm").VcZoomControlSmProps>;
        default: () => import("./navigation-sm/zoom-control-sm").VcZoomControlSmProps;
    };
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onCompassEvt?: (evt: import("vue-cesium/es/utils/types").VcCompassEvt) => any;
    onZoomEvt?: (evt: import("vue-cesium/es/utils/types").VcZoomEvt) => any;
}, {
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    compassOpts: import("./navigation-sm/compass-sm").VcCompassSmProps;
    zoomOpts: import("./navigation-sm/zoom-control-sm").VcZoomControlSmProps;
}>>;
export declare const VcOverviewMap: SFCWithInstall<import("vue").DefineComponent<{
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: ArrayConstructor;
        validator: (v: string[]) => boolean;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: StringConstructor;
        default: string;
    };
    borderRadius: {
        type: StringConstructor;
    };
    toggleOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcBtnTooltipProps & {
            show: boolean;
        }>;
    };
    viewerOpts: {
        type: import("vue").PropType<import("..").VcViewerProps>;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: import("vue").PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: ArrayConstructor;
        validator: (v: string[]) => boolean;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: StringConstructor;
        default: string;
    };
    borderRadius: {
        type: StringConstructor;
    };
    toggleOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcBtnTooltipProps & {
            show: boolean;
        }>;
    };
    viewerOpts: {
        type: import("vue").PropType<import("..").VcViewerProps>;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
}, {
    height: string;
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    width: string;
    border: string;
}>>;
export declare const VcSelectionIndicator: SFCWithInstall<import("vue").DefineComponent<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    allowFeatureInfoRequests: {
        type: BooleanConstructor;
        default: boolean;
    };
    limit: {
        type: NumberConstructor;
        default: number;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    pickEvt: (evt: Cesium.Entity | import("./selection-indicator/Feature").default) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    allowFeatureInfoRequests: {
        type: BooleanConstructor;
        default: boolean;
    };
    limit: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onPickEvt?: (evt: Cesium.Entity | import("./selection-indicator/Feature").default) => any;
}, {
    height: number;
    show: boolean;
    width: number;
    allowFeatureInfoRequests: boolean;
    limit: number;
}>>;
export * from './compass';
export * from './distance-legend';
export * from './my-location';
export * from './navigation';
export * from './navigation-sm';
export * from './navigation-sm/zoom-control-sm';
export * from './navigation-sm/compass-sm';
export * from './print';
export * from './selection-indicator';
export * from './status-bar';
export * from './vc-overview-map';
export * from './zoom-control';
