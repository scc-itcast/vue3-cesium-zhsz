import type { ComputedRef, PropType, Ref } from 'vue';
import type { VcPrimitiveGroundPolylineProps, VcPrimitiveProps } from '../../../primitives';
import type { VcGeometryPolylineProps } from '../../../geometries';
import { VcPointProps, VcPolygonProps } from '../../../primitive-collections';
import { VcDrawingDrawEvt, VcDrawingEditorEvt, VcDrawingMouseEvt, VcDrawingPreRenderDatas, VcDrawTipOpts, VcEditorOpts, VcPolylineDrawing, VcSegmentDrawing } from 'vue-cesium/es/utils/drawing-types';
import { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
declare const _default: import("vue").DefineComponent<{
    polylineOpts: PropType<VcGeometryPolylineProps>;
    polygonOpts: PropType<VcPolygonProps>;
    primitiveOpts: PropType<VcPrimitiveProps & VcPrimitiveGroundPolylineProps>;
    sightlineType: {
        type: PropType<"polyline" | "circle" | "segment">;
        default: string;
    };
    show: BooleanConstructor;
    editable: BooleanConstructor;
    drawtip: PropType<VcDrawTipOpts>;
    pointOpts: PropType<VcPointProps>;
    editorOpts: PropType<VcEditorOpts>;
    mode: NumberConstructor;
    preRenderDatas: PropType<VcDrawingPreRenderDatas>;
    disableDepthTest: BooleanConstructor;
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    activeEvt: (evt: import("vue-cesium/es/utils/drawing-types").VcDrawingActiveEvt, viewer: Cesium.Viewer) => boolean;
    drawEvt: (evt: VcDrawingDrawEvt, viewer: Cesium.Viewer) => boolean;
    editorEvt: (evt: VcDrawingEditorEvt, viewer: Cesium.Viewer) => boolean;
    mouseEvt: (evt: VcDrawingMouseEvt, viewer: Cesium.Viewer) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    polylineOpts: PropType<VcGeometryPolylineProps>;
    polygonOpts: PropType<VcPolygonProps>;
    primitiveOpts: PropType<VcPrimitiveProps & VcPrimitiveGroundPolylineProps>;
    sightlineType: {
        type: PropType<"polyline" | "circle" | "segment">;
        default: string;
    };
    show: BooleanConstructor;
    editable: BooleanConstructor;
    drawtip: PropType<VcDrawTipOpts>;
    pointOpts: PropType<VcPointProps>;
    editorOpts: PropType<VcEditorOpts>;
    mode: NumberConstructor;
    preRenderDatas: PropType<VcDrawingPreRenderDatas>;
    disableDepthTest: BooleanConstructor;
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onActiveEvt?: (evt: import("vue-cesium/es/utils/drawing-types").VcDrawingActiveEvt, viewer: Cesium.Viewer) => any;
    onDrawEvt?: (evt: VcDrawingDrawEvt, viewer: Cesium.Viewer) => any;
    onEditorEvt?: (evt: VcDrawingEditorEvt, viewer: Cesium.Viewer) => any;
    onMouseEvt?: (evt: VcDrawingMouseEvt, viewer: Cesium.Viewer) => any;
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
}, {
    show: boolean;
    editable: boolean;
    disableDepthTest: boolean;
    enableMouseEvent: boolean;
    sightlineType: "polyline" | "circle" | "segment";
}>;
export default _default;
export declare type VcAnalysisSightlineProps = {
    /**
     * Specify whether to respond to mouse pick events.
     */
    enableMouseEvent?: boolean;
    /**
     * Specify Whether the drawing object is visible.
     */
    show?: boolean;
    /**
     * Specify whether the drawing result can be edited.
     */
    editable?: boolean;
    /**
     * Specify drawing hints.
     */
    drawtip?: VcDrawTipOpts;
    /**
     * Specify parameters for drawing points.
     */
    pointOpts?: VcPointProps;
    /**
     * Specify editor options.
     */
    editorOpts?: VcEditorOpts;
    /**
     * Specify editor mode.
     */
    mode?: number;
    /**
     * Specify prerender datas.
     */
    preRenderDatas?: VcDrawingPreRenderDatas;
    /**
     * Specify parameters for drawing polylines.
     */
    polylineOpts?: VcGeometryPolylineProps;
    /**
     * Specify parameters for drawing polygons.
     */
    polygonOpts?: VcPolygonProps;
    /**
     * Specify parameters for drawing primitives.
     */
    primitiveOpts?: VcPrimitiveProps & VcPrimitiveGroundPolylineProps;
    /**
     * Specify the type of sightline.
     */
    sightlineType?: 'segment' | 'polyline';
    /**
     * Triggers before the VcAnalysisSightline is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcAnalysisSightline is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcAnalysisSightline is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * 	Triggers when drawing.
     */
    onDrawEvt?: (evt: VcDrawingDrawEvt, viewer: Cesium.Viewer) => void;
    /**
     * Triggers when the editor button is clicked.
     */
    onEditorEvt?: (evt: VcDrawingEditorEvt, viewer: Cesium.Viewer) => void;
    /**
     * Triggers when the mouse is over or out on the drawing point.
     */
    onMouseEvt?: (evt: VcDrawingMouseEvt, viewer: Cesium.Viewer) => void;
};
export interface VcAnalysisSightlineRef extends VcComponentPublicInstance<VcAnalysisSightlineProps> {
    /**
     * Get the array of rendering models.
     */
    renderDatas?: Ref<Array<VcSegmentDrawing | VcPolylineDrawing>>;
    /**
     * Get the computedRenderDatas.
     */
    computedRenderDatas?: ComputedRef<Array<VcSegmentDrawing | VcPolylineDrawing>>;
    /**
     * start a new draw.
     */
    startNew: () => void;
    /**
     * stop drawing.
     */
    stop: (removeLatest?: boolean) => void;
    /**
     * clear and stop drawing.
     */
    clear: () => void;
}
