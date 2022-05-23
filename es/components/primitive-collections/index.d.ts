import { App } from 'vue';
import { SFCWithInstall } from 'vue-cesium/es/utils/types';
declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;
export declare const VcCollectionBillboard: SFCWithInstall<import("vue").DefineComponent<{
    billboards: {
        type: import("vue").PropType<import("./billboard").VcBillboardProps[]>;
        default: () => any[];
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    blendOption: {
        type: import("vue").PropType<number>;
        default: number;
    };
    scene: import("vue").PropType<Cesium.Scene>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
    billboards: {
        type: import("vue").PropType<import("./billboard").VcBillboardProps[]>;
        default: () => any[];
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    blendOption: {
        type: import("vue").PropType<number>;
        default: number;
    };
    scene: import("vue").PropType<Cesium.Scene>;
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
}, {
    show: boolean;
    enableMouseEvent: boolean;
    debugShowBoundingVolume: boolean;
    billboards: import("./billboard").VcBillboardProps[];
    blendOption: number;
}>>;
export declare const VcCollectionCloud: SFCWithInstall<import("vue").DefineComponent<{
    noiseDetail: {
        type: NumberConstructor;
        default: number;
    };
    noiseOffset: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
    };
    debugBillboards: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugEllipsoids: {
        type: BooleanConstructor;
        default: boolean;
    };
    clouds: {
        type: import("vue").PropType<import("./cloud").VcCumulusCloudProps[]>;
        default: () => any[];
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
    noiseDetail: {
        type: NumberConstructor;
        default: number;
    };
    noiseOffset: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
    };
    debugBillboards: {
        type: BooleanConstructor;
        default: boolean;
    };
    debugEllipsoids: {
        type: BooleanConstructor;
        default: boolean;
    };
    clouds: {
        type: import("vue").PropType<import("./cloud").VcCumulusCloudProps[]>;
        default: () => any[];
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
    noiseDetail: number;
    debugBillboards: boolean;
    debugEllipsoids: boolean;
    clouds: import("./cloud").VcCumulusCloudProps[];
}>>;
export declare const VcCollectionLabel: SFCWithInstall<import("vue").DefineComponent<{
    labels: {
        type: import("vue").PropType<import("./label").VcLabelProps[]>;
        default: () => any[];
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    blendOption: {
        type: import("vue").PropType<number>;
        default: number;
    };
    scene: import("vue").PropType<Cesium.Scene>;
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
    labels: {
        type: import("vue").PropType<import("./label").VcLabelProps[]>;
        default: () => any[];
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    blendOption: {
        type: import("vue").PropType<number>;
        default: number;
    };
    scene: import("vue").PropType<Cesium.Scene>;
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
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
}, {
    show: boolean;
    enableMouseEvent: boolean;
    debugShowBoundingVolume: boolean;
    blendOption: number;
    labels: import("./label").VcLabelProps[];
}>>;
export declare const VcCollectionPoint: SFCWithInstall<import("vue").DefineComponent<{
    points: {
        type: import("vue").PropType<import("./point").VcPointProps[]>;
        default: () => any[];
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    blendOption: {
        type: import("vue").PropType<number>;
        default: number;
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
    points: {
        type: import("vue").PropType<import("./point").VcPointProps[]>;
        default: () => any[];
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    blendOption: {
        type: import("vue").PropType<number>;
        default: number;
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
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
}, {
    show: boolean;
    enableMouseEvent: boolean;
    debugShowBoundingVolume: boolean;
    blendOption: number;
    points: import("./point").VcPointProps[];
}>>;
export declare const VcCollectionPolyline: SFCWithInstall<import("vue").DefineComponent<{
    polylines: {
        type: import("vue").PropType<import("./polyline").VcPolylineProps[]>;
        default: () => any[];
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
    polylines: {
        type: import("vue").PropType<import("./polyline").VcPolylineProps[]>;
        default: () => any[];
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
    modelMatrix: import("vue").PropType<Cesium.Matrix4>;
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
}, {
    show: boolean;
    enableMouseEvent: boolean;
    debugShowBoundingVolume: boolean;
    polylines: import("./polyline").VcPolylineProps[];
}>>;
export declare const VcCollectionPrimitive: SFCWithInstall<import("vue").DefineComponent<{
    polygons: {
        type: import("vue").PropType<import("./polygon").VcPolygonProps[]>;
        default: () => any[];
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    destroyPrimitives: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
    polygons: {
        type: import("vue").PropType<import("./polygon").VcPolygonProps[]>;
        default: () => any[];
    };
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    destroyPrimitives: {
        type: BooleanConstructor;
        default: boolean;
    };
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
}, {
    show: boolean;
    enableMouseEvent: boolean;
    polygons: import("./polygon").VcPolygonProps[];
    destroyPrimitives: boolean;
}>>;
export declare const VcBillboard: SFCWithInstall<import("vue").DefineComponent<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    verticalOrigin: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    translucencyByDistance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    sizeInMeters: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    scaleByDistance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    scale: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    rotation: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    position: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    pixelOffsetScaleByDistance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeNearFarScalar;
        };
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
    image: import("vue").PropType<string | Cesium.CallbackProperty | HTMLImageElement | HTMLCanvasElement | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<string>>;
    id: import("vue").PropType<any>;
    horizontalOrigin: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    heightReference: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    };
    height: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    eyeOffset: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
        };
    };
    distanceDisplayCondition: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    disableDepthTestDistance: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    color: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    alignedAxis: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
        };
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
    width: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    verticalOrigin: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    translucencyByDistance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    sizeInMeters: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    scaleByDistance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    scale: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    rotation: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    position: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    pixelOffsetScaleByDistance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeNearFarScalar;
        };
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
    image: import("vue").PropType<string | Cesium.CallbackProperty | HTMLImageElement | HTMLCanvasElement | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<string>>;
    id: import("vue").PropType<any>;
    horizontalOrigin: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    heightReference: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    };
    height: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    eyeOffset: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
        };
    };
    distanceDisplayCondition: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    disableDepthTestDistance: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    color: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    alignedAxis: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
        };
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
}, {
    show: boolean;
    rotation: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    color: import("vue-cesium/es/utils/types").VcColor;
    enableMouseEvent: boolean;
    pixelOffset: import("vue-cesium/es/utils/types").VcCartesian2;
    scale: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    sizeInMeters: boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>;
    alignedAxis: import("vue-cesium/es/utils/types").VcPosition;
    verticalOrigin: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    horizontalOrigin: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    eyeOffset: import("vue-cesium/es/utils/types").VcPosition;
}>>;
export declare const VcCumulusCloud: SFCWithInstall<import("vue").DefineComponent<{
    slice: {
        type: NumberConstructor;
        default: number;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    scale: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian2>;
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
    maximumSize: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
        };
    };
    color: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    brightness: {
        type: NumberConstructor;
        default: number;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
    slice: {
        type: NumberConstructor;
        default: number;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    scale: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian2>;
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
    maximumSize: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
        };
    };
    color: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    brightness: {
        type: NumberConstructor;
        default: number;
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
}, {
    slice: number;
    show: boolean;
    color: import("vue-cesium/es/utils/types").VcColor;
    brightness: number;
}>>;
export declare const VcLabel: SFCWithInstall<import("vue").DefineComponent<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    verticalOrigin: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    translucencyByDistance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    totalScale: {
        type: NumberConstructor;
        default: number;
    };
    text: import("vue").PropType<string | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    labelStyle: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    showBackground: {
        type: (ObjectConstructor | FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    scaleByDistance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    scale: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    position: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    pixelOffsetScaleByDistance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeNearFarScalar;
        };
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
    outlineWidth: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    id: import("vue").PropType<any>;
    horizontalOrigin: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    heightReference: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    };
    font: {
        type: import("vue").PropType<string | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: string;
    };
    fillColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    eyeOffset: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
        };
    };
    distanceDisplayCondition: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    disableDepthTestDistance: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    backgroundPadding: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian2>;
        default: () => {
            x: number;
            y: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian2;
        };
    };
    backgroundColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: () => {
            x: number;
            y: number;
            z: number;
            w: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
    verticalOrigin: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    translucencyByDistance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    totalScale: {
        type: NumberConstructor;
        default: number;
    };
    text: import("vue").PropType<string | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    labelStyle: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    showBackground: {
        type: (ObjectConstructor | FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    scaleByDistance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    scale: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    position: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    pixelOffsetScaleByDistance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeNearFarScalar;
        };
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
    outlineWidth: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    id: import("vue").PropType<any>;
    horizontalOrigin: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    heightReference: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    };
    font: {
        type: import("vue").PropType<string | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: string;
    };
    fillColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    eyeOffset: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
        };
    };
    distanceDisplayCondition: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    disableDepthTestDistance: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    backgroundPadding: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian2>;
        default: () => {
            x: number;
            y: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian2;
        };
    };
    backgroundColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: () => {
            x: number;
            y: number;
            z: number;
            w: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
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
}, {
    show: boolean;
    outlineColor: import("vue-cesium/es/utils/types").VcColor;
    outlineWidth: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    enableMouseEvent: boolean;
    pixelOffset: import("vue-cesium/es/utils/types").VcCartesian2;
    labelStyle: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    backgroundColor: import("vue-cesium/es/utils/types").VcColor;
    scale: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    font: string | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    verticalOrigin: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    horizontalOrigin: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    eyeOffset: import("vue-cesium/es/utils/types").VcPosition;
    fillColor: import("vue-cesium/es/utils/types").VcColor;
    backgroundPadding: import("vue-cesium/es/utils/types").VcCartesian2;
    showBackground: boolean | Function | Record<string, any>;
    totalScale: number;
}>>;
export declare const VcPoint: SFCWithInstall<import("vue").DefineComponent<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    translucencyByDistance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    scaleByDistance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    position: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    pixelSize: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineWidth: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    id: import("vue").PropType<any>;
    distanceDisplayCondition: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    disableDepthTestDistance: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    color: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
    translucencyByDistance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    scaleByDistance: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    position: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    pixelSize: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineWidth: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineColor: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
    };
    id: import("vue").PropType<any>;
    distanceDisplayCondition: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    disableDepthTestDistance: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    color: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeColor;
        };
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
}, {
    show: boolean;
    outlineColor: import("vue-cesium/es/utils/types").VcColor;
    outlineWidth: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    color: import("vue-cesium/es/utils/types").VcColor;
    enableMouseEvent: boolean;
    pixelSize: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
}>>;
export declare const VcPolyline: SFCWithInstall<import("vue").DefineComponent<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    positions: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3Array;
            exclude: string;
            deep: boolean;
        };
    };
    material: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcMaterial>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeMaterial;
        };
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: import("vue").PropType<any>;
    distanceDisplayCondition: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
    width: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    positions: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3Array;
            exclude: string;
            deep: boolean;
        };
    };
    material: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcMaterial>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeMaterial;
        };
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: import("vue").PropType<any>;
    distanceDisplayCondition: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
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
}, {
    show: boolean;
    material: import("vue-cesium/es/utils/types").VcMaterial;
    enableMouseEvent: boolean;
    loop: boolean;
}>>;
export declare const VcPolygon: SFCWithInstall<import("vue").DefineComponent<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    asynchronous: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowPicking: {
        type: BooleanConstructor;
        default: boolean;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    clampToGround: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    classificationType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<Cesium.ClassificationType>>;
    };
    id: import("vue").PropType<any>;
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
    polygonHierarchy: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPolygonHierarchy>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makePolygonHierarchy;
            deep: boolean;
        };
    };
    positions: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3Array;
            exclude: string;
            deep: boolean;
        };
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
    asynchronous: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowPicking: {
        type: BooleanConstructor;
        default: boolean;
    };
    ellipsoid: import("vue").PropType<Cesium.Ellipsoid>;
    clampToGround: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    classificationType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<Cesium.ClassificationType>>;
    };
    id: import("vue").PropType<any>;
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
    polygonHierarchy: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPolygonHierarchy>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makePolygonHierarchy;
            deep: boolean;
        };
    };
    positions: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makeCartesian3Array;
            exclude: string;
            deep: boolean;
        };
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
}, {
    show: boolean;
    enableMouseEvent: boolean;
    clampToGround: boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>;
    asynchronous: boolean;
    allowPicking: boolean;
}>>;
export * from './billboard';
export * from './billboard-collection';
export * from './cloud';
export * from './cloud-collection';
export * from './label';
export * from './label-collection';
export * from './point';
export * from './point-collection';
export * from './polygon';
export * from './polyline';
export * from './polyline-collection';
export * from './primitive-collection';
