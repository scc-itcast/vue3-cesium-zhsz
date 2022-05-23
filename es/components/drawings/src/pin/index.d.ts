import type { PropType, Ref } from 'vue';
import type { VcBillboardProps, VcLabelProps, VcPointProps } from '../../../primitive-collections';
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
import { VcDrawingDrawEvt, VcDrawingEditorEvt, VcDrawingMouseEvt, VcDrawingPreRenderDatas, VcDrawTipOpts, VcEditorOpts, VcPointDrawing } from 'vue-cesium/es/utils/drawing-types';
declare const _default: import("vue").DefineComponent<{
    billboardOpts: PropType<VcBillboardProps>;
    labelOpts: PropType<VcLabelProps>;
    heightReference: NumberConstructor;
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
    billboardOpts: PropType<VcBillboardProps>;
    labelOpts: PropType<VcLabelProps>;
    heightReference: NumberConstructor;
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
}>;
export default _default;
export declare type VcDrawingPinProps = {
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
     * Specify parameters for drawing billbords.
     */
    billboardOpts?: VcBillboardProps;
    /**
     * Specify parameters for drawing labels.
     */
    labelOpts?: VcLabelProps;
    /**
     * Specify the heightReference.
     */
    heightReference?: number;
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
     * Triggers before the VcDrawingPin is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcDrawingPin is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcDrawingPin is destroyed.
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
export interface VcDrawingPinRef extends VcComponentPublicInstance<VcDrawingPinProps> {
    /**
     * Get or set the renderDatas.
     */
    renderDatas?: Ref<Array<VcPointDrawing>>;
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
