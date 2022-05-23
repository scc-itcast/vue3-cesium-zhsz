import type { ComputedRef, PropType, Ref } from 'vue';
import type { VcGeometryPolylineProps } from '../../../geometries';
import type { VcPrimitiveGroundPolylineProps, VcPrimitiveProps } from '../../../primitives';
import { VcDrawingPreRenderDatas, VcDrawTipOpts, VcEditorOpts, VcPolylineDrawing } from 'vue-cesium/es/utils/drawing-types';
import { VcPointProps, VcPolygonProps } from '../../../primitive-collections';
import { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
declare const _default: import("vue").DefineComponent<{
    polylineOpts: PropType<VcGeometryPolylineProps>;
    primitiveOpts: PropType<VcPrimitiveProps & VcPrimitiveGroundPolylineProps>;
    loop: BooleanConstructor;
    clampToGround: BooleanConstructor;
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
    drawEvt: (evt: import("vue-cesium/es/utils/drawing-types").VcDrawingDrawEvt, viewer: Cesium.Viewer) => boolean;
    editorEvt: (evt: import("vue-cesium/es/utils/drawing-types").VcDrawingEditorEvt, viewer: Cesium.Viewer) => boolean;
    mouseEvt: (evt: import("vue-cesium/es/utils/drawing-types").VcDrawingMouseEvt, viewer: Cesium.Viewer) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    polylineOpts: PropType<VcGeometryPolylineProps>;
    primitiveOpts: PropType<VcPrimitiveProps & VcPrimitiveGroundPolylineProps>;
    loop: BooleanConstructor;
    clampToGround: BooleanConstructor;
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
    onDrawEvt?: (evt: import("vue-cesium/es/utils/drawing-types").VcDrawingDrawEvt, viewer: Cesium.Viewer) => any;
    onEditorEvt?: (evt: import("vue-cesium/es/utils/drawing-types").VcDrawingEditorEvt, viewer: Cesium.Viewer) => any;
    onMouseEvt?: (evt: import("vue-cesium/es/utils/drawing-types").VcDrawingMouseEvt, viewer: Cesium.Viewer) => any;
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
}>;
export default _default;
export declare type VcDrawingPolylineProps = {
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
     * Triggers before the VcDrawingPolyline is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcDrawingPolyline is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcDrawingPolyline is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
};
export interface VcDrawingPolylineRef extends VcComponentPublicInstance<VcDrawingPolylineProps> {
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
