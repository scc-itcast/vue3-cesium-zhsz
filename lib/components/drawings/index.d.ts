import { SFCWithInstall } from 'vue-cesium/es/utils/types';
declare const _Drawings: SFCWithInstall<import("vue").DefineComponent<{
    drawings: {
        type: import("vue").PropType<("polyline" | "point" | "rectangle" | "regular" | "circle" | "pin" | "polygon")[]>;
        default: () => string[];
        validator: (drawings: string[]) => boolean;
    };
    mainFabOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps;
    };
    pinActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    pinDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    pointActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    pointDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    polylineActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    polylineDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    polygonActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    polygonDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    rectangleActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    rectangleDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    circleActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    circleDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    regularActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    regularDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
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
    drawings: {
        type: import("vue").PropType<("polyline" | "point" | "rectangle" | "regular" | "circle" | "pin" | "polygon")[]>;
        default: () => string[];
        validator: (drawings: string[]) => boolean;
    };
    mainFabOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps;
    };
    pinActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    pinDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    pointActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    pointDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    polylineActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    polylineDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    polygonActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    polygonDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    rectangleActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    rectangleDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    circleActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    circleDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    regularActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    regularDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
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
    drawings: ("polyline" | "point" | "rectangle" | "regular" | "circle" | "pin" | "polygon")[];
    pinActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    pinDrawingOpts: import("../../utils/drawing-types").VcDrawingOpts;
    pointActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    pointDrawingOpts: import("../../utils/drawing-types").VcDrawingOpts;
    polylineActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    polylineDrawingOpts: import("../../utils/drawing-types").VcDrawingOpts;
    polygonActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    polygonDrawingOpts: import("../../utils/drawing-types").VcDrawingOpts;
    rectangleActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    rectangleDrawingOpts: import("../../utils/drawing-types").VcDrawingOpts;
    circleActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    circleDrawingOpts: import("../../utils/drawing-types").VcDrawingOpts;
    regularActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    regularDrawingOpts: import("../../utils/drawing-types").VcDrawingOpts;
}>>;
export default _Drawings;
export declare const VcDrawings: SFCWithInstall<import("vue").DefineComponent<{
    drawings: {
        type: import("vue").PropType<("polyline" | "point" | "rectangle" | "regular" | "circle" | "pin" | "polygon")[]>;
        default: () => string[];
        validator: (drawings: string[]) => boolean;
    };
    mainFabOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps;
    };
    pinActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    pinDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    pointActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    pointDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    polylineActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    polylineDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    polygonActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    polygonDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    rectangleActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    rectangleDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    circleActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    circleDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    regularActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    regularDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
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
    drawings: {
        type: import("vue").PropType<("polyline" | "point" | "rectangle" | "regular" | "circle" | "pin" | "polygon")[]>;
        default: () => string[];
        validator: (drawings: string[]) => boolean;
    };
    mainFabOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps;
    };
    pinActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    pinDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    pointActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    pointDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    polylineActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    polylineDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    polygonActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    polygonDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    rectangleActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    rectangleDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    circleActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    circleDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    regularActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    regularDrawingOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
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
    drawings: ("polyline" | "point" | "rectangle" | "regular" | "circle" | "pin" | "polygon")[];
    pinActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    pinDrawingOpts: import("../../utils/drawing-types").VcDrawingOpts;
    pointActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    pointDrawingOpts: import("../../utils/drawing-types").VcDrawingOpts;
    polylineActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    polylineDrawingOpts: import("../../utils/drawing-types").VcDrawingOpts;
    polygonActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    polygonDrawingOpts: import("../../utils/drawing-types").VcDrawingOpts;
    rectangleActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    rectangleDrawingOpts: import("../../utils/drawing-types").VcDrawingOpts;
    circleActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    circleDrawingOpts: import("../../utils/drawing-types").VcDrawingOpts;
    regularActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    regularDrawingOpts: import("../../utils/drawing-types").VcDrawingOpts;
}>>;
export * from './src';
export * from './src/pin';
export * from './src/point';
export * from './src/polygon';
export * from './src/polyline';
export * from './src/rectangle';
export * from './src/regular';
