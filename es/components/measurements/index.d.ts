import { SFCWithInstall } from 'vue-cesium/es/utils/types';
declare const _Measurements: SFCWithInstall<import("vue").DefineComponent<{
    measurements: {
        type: import("vue").PropType<("distance" | "component-distance" | "polyline" | "horizontal" | "vertical" | "height" | "area" | "point" | "rectangle" | "regular" | "circle")[]>;
        default: () => string[];
        validator: (measurements: string[]) => boolean;
    };
    mainFabOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps;
    };
    distanceActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    distanceMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcMeasurementOpts;
    };
    componentDistanceActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    componentDistanceMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcComponentDistanceMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcComponentDistanceMeasurementOpts;
    };
    polylineActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    polylineMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcPolylineMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcPolylineMeasurementOpts;
    };
    horizontalActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    horizontalMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcHorizontalMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcHorizontalMeasurementOpts;
    };
    verticalActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    verticalMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcMeasurementOpts;
    };
    heightActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    heightMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcMeasurementOpts;
    };
    areaActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    areaMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcPolylineMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcPolylineMeasurementOpts;
    };
    pointActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    pointMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcMeasurementOpts;
    };
    rectangleActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    rectangleMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcRegularMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcRegularMeasurementOpts;
    };
    regularActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    regularMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcRegularMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcRegularMeasurementOpts;
    };
    circleActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    circleMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcRegularMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcRegularMeasurementOpts;
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
    mode: {
        type: import("vue").PropType<0 | 1>;
        default: number;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    editable: {
        type: BooleanConstructor;
    };
    clampToGround: {
        type: BooleanConstructor;
    };
    clearActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    fabUpdated: (value: boolean) => boolean;
    activeEvt: (evt: import("../../utils/drawing-types").VcDrawingActiveEvt, viewer: Cesium.Viewer) => boolean;
    drawEvt: (evt: import("../../utils/drawing-types").VcDrawingDrawEvt, viewer: Cesium.Viewer) => boolean;
    editorEvt: (evt: import("../../utils/drawing-types").VcDrawingEditorEvt, viewer: Cesium.Viewer) => boolean;
    mouseEvt: (evt: import("../../utils/drawing-types").VcDrawingMouseEvt, viewer: Cesium.Viewer) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    measurements: {
        type: import("vue").PropType<("distance" | "component-distance" | "polyline" | "horizontal" | "vertical" | "height" | "area" | "point" | "rectangle" | "regular" | "circle")[]>;
        default: () => string[];
        validator: (measurements: string[]) => boolean;
    };
    mainFabOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps;
    };
    distanceActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    distanceMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcMeasurementOpts;
    };
    componentDistanceActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    componentDistanceMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcComponentDistanceMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcComponentDistanceMeasurementOpts;
    };
    polylineActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    polylineMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcPolylineMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcPolylineMeasurementOpts;
    };
    horizontalActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    horizontalMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcHorizontalMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcHorizontalMeasurementOpts;
    };
    verticalActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    verticalMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcMeasurementOpts;
    };
    heightActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    heightMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcMeasurementOpts;
    };
    areaActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    areaMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcPolylineMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcPolylineMeasurementOpts;
    };
    pointActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    pointMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcMeasurementOpts;
    };
    rectangleActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    rectangleMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcRegularMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcRegularMeasurementOpts;
    };
    regularActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    regularMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcRegularMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcRegularMeasurementOpts;
    };
    circleActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    circleMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcRegularMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcRegularMeasurementOpts;
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
    mode: {
        type: import("vue").PropType<0 | 1>;
        default: number;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    editable: {
        type: BooleanConstructor;
    };
    clampToGround: {
        type: BooleanConstructor;
    };
    clearActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onActiveEvt?: (evt: import("../../utils/drawing-types").VcDrawingActiveEvt, viewer: Cesium.Viewer) => any;
    onDrawEvt?: (evt: import("../../utils/drawing-types").VcDrawingDrawEvt, viewer: Cesium.Viewer) => any;
    onEditorEvt?: (evt: import("../../utils/drawing-types").VcDrawingEditorEvt, viewer: Cesium.Viewer) => any;
    onMouseEvt?: (evt: import("../../utils/drawing-types").VcDrawingMouseEvt, viewer: Cesium.Viewer) => any;
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onFabUpdated?: (value: boolean) => any;
}, {
    show: boolean;
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    editable: boolean;
    mode: 0 | 1;
    clampToGround: boolean;
    mainFabOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps;
    activeColor: string;
    clearActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    pointActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    polylineActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    rectangleActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    circleActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    regularActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    measurements: ("distance" | "component-distance" | "polyline" | "horizontal" | "vertical" | "height" | "area" | "point" | "rectangle" | "regular" | "circle")[];
    distanceActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    distanceMeasurementOpts: import("../../utils/drawing-types").VcMeasurementOpts;
    componentDistanceActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    componentDistanceMeasurementOpts: import("../../utils/drawing-types").VcComponentDistanceMeasurementOpts;
    polylineMeasurementOpts: import("../../utils/drawing-types").VcPolylineMeasurementOpts;
    horizontalActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    horizontalMeasurementOpts: import("../../utils/drawing-types").VcHorizontalMeasurementOpts;
    verticalActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    verticalMeasurementOpts: import("../../utils/drawing-types").VcMeasurementOpts;
    heightActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    heightMeasurementOpts: import("../../utils/drawing-types").VcMeasurementOpts;
    areaActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    areaMeasurementOpts: import("../../utils/drawing-types").VcPolylineMeasurementOpts;
    pointMeasurementOpts: import("../../utils/drawing-types").VcMeasurementOpts;
    rectangleMeasurementOpts: import("../../utils/drawing-types").VcRegularMeasurementOpts;
    regularMeasurementOpts: import("../../utils/drawing-types").VcRegularMeasurementOpts;
    circleMeasurementOpts: import("../../utils/drawing-types").VcRegularMeasurementOpts;
}>>;
export default _Measurements;
export declare const VcMeasurements: SFCWithInstall<import("vue").DefineComponent<{
    measurements: {
        type: import("vue").PropType<("distance" | "component-distance" | "polyline" | "horizontal" | "vertical" | "height" | "area" | "point" | "rectangle" | "regular" | "circle")[]>;
        default: () => string[];
        validator: (measurements: string[]) => boolean;
    };
    mainFabOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps;
    };
    distanceActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    distanceMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcMeasurementOpts;
    };
    componentDistanceActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    componentDistanceMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcComponentDistanceMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcComponentDistanceMeasurementOpts;
    };
    polylineActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    polylineMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcPolylineMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcPolylineMeasurementOpts;
    };
    horizontalActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    horizontalMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcHorizontalMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcHorizontalMeasurementOpts;
    };
    verticalActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    verticalMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcMeasurementOpts;
    };
    heightActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    heightMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcMeasurementOpts;
    };
    areaActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    areaMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcPolylineMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcPolylineMeasurementOpts;
    };
    pointActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    pointMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcMeasurementOpts;
    };
    rectangleActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    rectangleMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcRegularMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcRegularMeasurementOpts;
    };
    regularActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    regularMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcRegularMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcRegularMeasurementOpts;
    };
    circleActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    circleMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcRegularMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcRegularMeasurementOpts;
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
    mode: {
        type: import("vue").PropType<0 | 1>;
        default: number;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    editable: {
        type: BooleanConstructor;
    };
    clampToGround: {
        type: BooleanConstructor;
    };
    clearActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    fabUpdated: (value: boolean) => boolean;
    activeEvt: (evt: import("../../utils/drawing-types").VcDrawingActiveEvt, viewer: Cesium.Viewer) => boolean;
    drawEvt: (evt: import("../../utils/drawing-types").VcDrawingDrawEvt, viewer: Cesium.Viewer) => boolean;
    editorEvt: (evt: import("../../utils/drawing-types").VcDrawingEditorEvt, viewer: Cesium.Viewer) => boolean;
    mouseEvt: (evt: import("../../utils/drawing-types").VcDrawingMouseEvt, viewer: Cesium.Viewer) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    measurements: {
        type: import("vue").PropType<("distance" | "component-distance" | "polyline" | "horizontal" | "vertical" | "height" | "area" | "point" | "rectangle" | "regular" | "circle")[]>;
        default: () => string[];
        validator: (measurements: string[]) => boolean;
    };
    mainFabOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps;
    };
    distanceActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    distanceMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcMeasurementOpts;
    };
    componentDistanceActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    componentDistanceMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcComponentDistanceMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcComponentDistanceMeasurementOpts;
    };
    polylineActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    polylineMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcPolylineMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcPolylineMeasurementOpts;
    };
    horizontalActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    horizontalMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcHorizontalMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcHorizontalMeasurementOpts;
    };
    verticalActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    verticalMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcMeasurementOpts;
    };
    heightActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    heightMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcMeasurementOpts;
    };
    areaActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    areaMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcPolylineMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcPolylineMeasurementOpts;
    };
    pointActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    pointMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcMeasurementOpts;
    };
    rectangleActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    rectangleMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcRegularMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcRegularMeasurementOpts;
    };
    regularActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    regularMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcRegularMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcRegularMeasurementOpts;
    };
    circleActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    circleMeasurementOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcRegularMeasurementOpts>;
        default: () => import("../../utils/drawing-types").VcRegularMeasurementOpts;
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
    mode: {
        type: import("vue").PropType<0 | 1>;
        default: number;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    editable: {
        type: BooleanConstructor;
    };
    clampToGround: {
        type: BooleanConstructor;
    };
    clearActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onActiveEvt?: (evt: import("../../utils/drawing-types").VcDrawingActiveEvt, viewer: Cesium.Viewer) => any;
    onDrawEvt?: (evt: import("../../utils/drawing-types").VcDrawingDrawEvt, viewer: Cesium.Viewer) => any;
    onEditorEvt?: (evt: import("../../utils/drawing-types").VcDrawingEditorEvt, viewer: Cesium.Viewer) => any;
    onMouseEvt?: (evt: import("../../utils/drawing-types").VcDrawingMouseEvt, viewer: Cesium.Viewer) => any;
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onFabUpdated?: (value: boolean) => any;
}, {
    show: boolean;
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    editable: boolean;
    mode: 0 | 1;
    clampToGround: boolean;
    mainFabOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps;
    activeColor: string;
    clearActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    pointActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    polylineActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    rectangleActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    circleActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    regularActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    measurements: ("distance" | "component-distance" | "polyline" | "horizontal" | "vertical" | "height" | "area" | "point" | "rectangle" | "regular" | "circle")[];
    distanceActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    distanceMeasurementOpts: import("../../utils/drawing-types").VcMeasurementOpts;
    componentDistanceActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    componentDistanceMeasurementOpts: import("../../utils/drawing-types").VcComponentDistanceMeasurementOpts;
    polylineMeasurementOpts: import("../../utils/drawing-types").VcPolylineMeasurementOpts;
    horizontalActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    horizontalMeasurementOpts: import("../../utils/drawing-types").VcHorizontalMeasurementOpts;
    verticalActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    verticalMeasurementOpts: import("../../utils/drawing-types").VcMeasurementOpts;
    heightActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    heightMeasurementOpts: import("../../utils/drawing-types").VcMeasurementOpts;
    areaActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    areaMeasurementOpts: import("../../utils/drawing-types").VcPolylineMeasurementOpts;
    pointMeasurementOpts: import("../../utils/drawing-types").VcMeasurementOpts;
    rectangleMeasurementOpts: import("../../utils/drawing-types").VcRegularMeasurementOpts;
    regularMeasurementOpts: import("../../utils/drawing-types").VcRegularMeasurementOpts;
    circleMeasurementOpts: import("../../utils/drawing-types").VcRegularMeasurementOpts;
}>>;
export * from './src';
