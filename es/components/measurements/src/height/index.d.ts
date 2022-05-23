import { ComputedRef, Ref } from 'vue';
import type { PropType } from 'vue';
import { MeasureUnits } from 'vue-cesium/es/shared';
import type { VcLabelProps, VcPointProps } from '../../../primitive-collections';
import type { VcGeometryPolylineProps } from '../../../geometries';
import type { VcPrimitiveGroundPolylineProps, VcPrimitiveProps } from '../../../primitives';
import { MeasurementDecimals, VcDrawingDrawEvt, VcDrawingEditorEvt, VcDrawingMouseEvt, VcDrawingPreRenderDatas, VcDrawTipOpts, VcEditorOpts, VcSegmentDrawing } from 'vue-cesium/es/utils/drawing-types';
import { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
declare const _default: import("vue").DefineComponent<{
    measureUnits: PropType<MeasureUnits>;
    polylineOpts: PropType<VcGeometryPolylineProps>;
    primitiveOpts: PropType<VcPrimitiveProps & VcPrimitiveGroundPolylineProps>;
    labelOpts: PropType<VcLabelProps>;
    locale: StringConstructor;
    decimals: PropType<MeasurementDecimals>;
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
    labelOpts: PropType<VcLabelProps>;
    locale: StringConstructor;
    decimals: PropType<MeasurementDecimals>;
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
    autoUpdateLabelPosition: boolean;
}>;
export default _default;
export declare type VcMeasurementHeightProps = {
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
     * Specify parameters for measurement labels.
     */
    labelOpts?: VcLabelProps;
    /**
     * Specify parameters for measurement locale.
     */
    locale?: string;
    /**
     * Specify parameters for measurement decimals.
     */
    decimals?: MeasurementDecimals;
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
     * Triggers before the VcMeasurementHeight is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcMeasurementHeight is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcMeasurementHeight is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when drawing.
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
export interface VcMeasurementHeightRef extends VcComponentPublicInstance<VcMeasurementHeightProps> {
    /**
     * Get the array of rendering models.
     */
    renderDatas?: Ref<VcSegmentDrawing[]>;
    /**
     * Get the computedRenderDatas.
     */
    computedRenderDatas?: ComputedRef<VcSegmentDrawing[]>;
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
