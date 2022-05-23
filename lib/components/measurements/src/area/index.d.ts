import type { ComputedRef, PropType, Ref } from 'vue';
import { MeasureUnits } from 'vue-cesium/es/shared';
import type { VcGeometryPolylineProps } from '../../../geometries';
import type { VcLabelProps, VcPointProps, VcPolygonProps } from '../../../primitive-collections';
import type { VcPrimitiveGroundPolylineProps, VcPrimitiveProps } from '../../../primitives';
import { MeasurementDecimals, VcDrawingDrawEvt, VcDrawingEditorEvt, VcDrawingMouseEvt, VcDrawingPreRenderDatas, VcDrawTipOpts, VcEditorOpts, VcPolylineDrawing } from 'vue-cesium/es/utils/drawing-types';
import { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
declare const _default: import("vue").DefineComponent<{
    measureUnits: PropType<MeasureUnits>;
    polylineOpts: PropType<VcGeometryPolylineProps>;
    primitiveOpts: PropType<VcPrimitiveProps & VcPrimitiveGroundPolylineProps>;
    polygonOpts: PropType<VcPolygonProps>;
    labelOpts: PropType<VcLabelProps>;
    labelsOpts: PropType<VcLabelProps>;
    locale: StringConstructor;
    decimals: PropType<MeasurementDecimals>;
    showDistanceLabel: BooleanConstructor;
    showAngleLabel: BooleanConstructor;
    loop: BooleanConstructor;
    clampToGround: BooleanConstructor;
    autoUpdateLabelPosition: BooleanConstructor;
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
    measureUnits: PropType<MeasureUnits>;
    polylineOpts: PropType<VcGeometryPolylineProps>;
    primitiveOpts: PropType<VcPrimitiveProps & VcPrimitiveGroundPolylineProps>;
    polygonOpts: PropType<VcPolygonProps>;
    labelOpts: PropType<VcLabelProps>;
    labelsOpts: PropType<VcLabelProps>;
    locale: StringConstructor;
    decimals: PropType<MeasurementDecimals>;
    showDistanceLabel: BooleanConstructor;
    showAngleLabel: BooleanConstructor;
    loop: BooleanConstructor;
    clampToGround: BooleanConstructor;
    autoUpdateLabelPosition: BooleanConstructor;
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
    loop: boolean;
    clampToGround: boolean;
    showDistanceLabel: boolean;
    showAngleLabel: boolean;
    autoUpdateLabelPosition: boolean;
}>;
export default _default;
export declare type VcMeasurementAreaProps = {
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
     * Specify the unit of measurement
     */
    measureUnits?: MeasureUnits;
    /**
     * Specify parameters for drawing polylines.
     */
    polylineOpts?: VcGeometryPolylineProps;
    /**
     * Specify parameters for drawing primitives.
     */
    primitiveOpts?: VcPrimitiveProps & VcPrimitiveGroundPolylineProps;
    /**
     * Specify parameters for drawing polygons.
     */
    polygonOpts?: VcPolygonProps;
    /**
     * Specify parameters for measurement labels.
     */
    labelOpts?: VcLabelProps;
    /**
     * Specify parameters for measurement labels.
     */
    labelsOpts?: VcLabelProps;
    /**
     * Specify parameters for measurement locale.
     */
    locale?: string;
    /**
     * Specify parameters for measurement decimals.
     */
    decimals?: MeasurementDecimals;
    /**
     * Specify whether to display distance labels.
     */
    showDistanceLabel?: boolean;
    /**
     * Specify whether to display angle labels.
     */
    showAngleLabel?: boolean;
    /**
     * Specify whether a line segment will be added between the last and first line positions to make this line a loop.
     */
    loop?: boolean;
    /**
     * Specify whether the drawing result object is attached to the ground or 3dtiles. Only polyline and polygon objects work.
     */
    clampToGround?: boolean;
    /**
     * Specify whether the depthTest is disabled.
     * Default value: false
     */
    disableDepthTest?: boolean;
    /**
     * Specify whether to update label position.
     * Default value: true
     */
    autoUpdateLabelPosition?: boolean;
    /**
     * Triggers before the VcMeasurementArea is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcMeasurementArea is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcMeasurementArea is destroyed.
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
export interface VcMeasurementAreaRef extends VcComponentPublicInstance<VcMeasurementAreaProps> {
    /**
     * Get the array of rendering models.
     */
    renderDatas?: Ref<VcPolylineDrawing[]>;
    /**
     * Get the computedRenderDatas.
     */
    computedRenderDatas?: ComputedRef<VcPolylineDrawing[]>;
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
