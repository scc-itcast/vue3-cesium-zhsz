import { App } from 'vue';
import { SFCWithInstall } from 'vue-cesium/es/utils/types';
declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;
export declare const VcAnalysisFlood: SFCWithInstall<import("vue").DefineComponent<{
    polygonHierarchy: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPolygonHierarchy>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makePolygonHierarchy;
            deep: boolean;
        };
    };
    minHeight: {
        type: NumberConstructor;
        default: number;
    };
    maxHeight: {
        type: NumberConstructor;
        default: number;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    stop: (evt: Cesium.ClassificationPrimitive) => boolean;
    beforeLoad: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    polygonHierarchy: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcPolygonHierarchy>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../utils/cesium-helpers").makePolygonHierarchy;
            deep: boolean;
        };
    };
    minHeight: {
        type: NumberConstructor;
        default: number;
    };
    maxHeight: {
        type: NumberConstructor;
        default: number;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcColor>;
        default: string;
    };
}>> & {
    onBeforeLoad?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: import("vue-cesium/es/utils/types").VcComponentInternalInstance) => any;
    onStop?: (evt: Cesium.ClassificationPrimitive) => any;
}, {
    color: import("vue-cesium/es/utils/types").VcColor;
    loop: boolean;
    minHeight: number;
    maxHeight: number;
    speed: number;
}>>;
export declare const VcAnalyses: SFCWithInstall<import("vue").DefineComponent<{
    analyses: {
        type: import("vue").PropType<("sightline" | "viewshed")[]>;
        default: () => string[];
        validator: (drawings: string[]) => boolean;
    };
    mainFabOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps;
    };
    sightlineActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    sightlineAnalysisOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    viewshedActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    viewshedAnalysisOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcViewshedAnalysisOpts>;
        default: () => import("../../utils/drawing-types").VcViewshedAnalysisOpts;
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
    analyses: {
        type: import("vue").PropType<("sightline" | "viewshed")[]>;
        default: () => string[];
        validator: (drawings: string[]) => boolean;
    };
    mainFabOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps;
    };
    sightlineActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    sightlineAnalysisOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcDrawingOpts>;
        default: () => import("../../utils/drawing-types").VcDrawingOpts;
    };
    viewshedActionOpts: {
        type: import("vue").PropType<import("vue-cesium/es/utils/types").VcActionTooltipProps>;
        default: () => import("vue-cesium/es/utils/types").VcActionTooltipProps;
    };
    viewshedAnalysisOpts: {
        type: import("vue").PropType<import("../../utils/drawing-types").VcViewshedAnalysisOpts>;
        default: () => import("../../utils/drawing-types").VcViewshedAnalysisOpts;
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
    analyses: ("sightline" | "viewshed")[];
    mainFabOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps & import("..").VcFabProps;
    sightlineActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    sightlineAnalysisOpts: import("../../utils/drawing-types").VcDrawingOpts;
    viewshedActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
    viewshedAnalysisOpts: import("../../utils/drawing-types").VcViewshedAnalysisOpts;
    activeColor: string;
    clearActionOpts: import("vue-cesium/es/utils/types").VcActionTooltipProps;
}>>;
export * from './src';
export * from './flood';
