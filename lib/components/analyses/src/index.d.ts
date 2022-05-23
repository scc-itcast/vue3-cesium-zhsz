import type { VcActionTooltipProps, VcComponentInternalInstance, VcComponentPublicInstance } from 'vue-cesium/es/utils/types';
import { VNode } from 'vue';
import { analysesProps, VcAnalysesProps } from './defaultProps';
import type { VcDrawingActionInstance, VcDrawingOpts, VcViewshedAnalysisOpts } from 'vue-cesium/es/utils/drawing-types';
import type { VcFabProps, VcFabRef } from 'vue-cesium/es/components/ui';
import VcAnalysisSightline from './sightline';
import VcAnalysisViewshed from './viewshed';
declare const emits: {
    fabUpdated: (value: boolean) => boolean;
    activeEvt: (evt: import("vue-cesium/es/utils/drawing-types").VcDrawingActiveEvt, viewer: Cesium.Viewer) => boolean;
    drawEvt: (evt: import("vue-cesium/es/utils/drawing-types").VcDrawingDrawEvt, viewer: Cesium.Viewer) => boolean;
    editorEvt: (evt: import("vue-cesium/es/utils/drawing-types").VcDrawingEditorEvt, viewer: Cesium.Viewer) => boolean;
    mouseEvt: (evt: import("vue-cesium/es/utils/drawing-types").VcDrawingMouseEvt, viewer: Cesium.Viewer) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
};
declare const _default: import("vue").DefineComponent<{
    analyses: {
        type: import("vue").PropType<("sightline" | "viewshed")[]>;
        default: () => string[];
        validator: (drawings: string[]) => boolean;
    };
    mainFabOpts: {
        type: import("vue").PropType<VcActionTooltipProps & VcFabProps>;
        default: () => VcActionTooltipProps & VcFabProps;
    };
    sightlineActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    sightlineAnalysisOpts: {
        type: import("vue").PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    viewshedActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    viewshedAnalysisOpts: {
        type: import("vue").PropType<VcViewshedAnalysisOpts>;
        default: () => VcViewshedAnalysisOpts;
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
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    fabUpdated: (value: boolean) => boolean;
    activeEvt: (evt: import("vue-cesium/es/utils/drawing-types").VcDrawingActiveEvt, viewer: Cesium.Viewer) => boolean;
    drawEvt: (evt: import("vue-cesium/es/utils/drawing-types").VcDrawingDrawEvt, viewer: Cesium.Viewer) => boolean;
    editorEvt: (evt: import("vue-cesium/es/utils/drawing-types").VcDrawingEditorEvt, viewer: Cesium.Viewer) => boolean;
    mouseEvt: (evt: import("vue-cesium/es/utils/drawing-types").VcDrawingMouseEvt, viewer: Cesium.Viewer) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    analyses: {
        type: import("vue").PropType<("sightline" | "viewshed")[]>;
        default: () => string[];
        validator: (drawings: string[]) => boolean;
    };
    mainFabOpts: {
        type: import("vue").PropType<VcActionTooltipProps & VcFabProps>;
        default: () => VcActionTooltipProps & VcFabProps;
    };
    sightlineActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    sightlineAnalysisOpts: {
        type: import("vue").PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    viewshedActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    viewshedAnalysisOpts: {
        type: import("vue").PropType<VcViewshedAnalysisOpts>;
        default: () => VcViewshedAnalysisOpts;
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
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onActiveEvt?: (evt: import("vue-cesium/es/utils/drawing-types").VcDrawingActiveEvt, viewer: Cesium.Viewer) => any;
    onDrawEvt?: (evt: import("vue-cesium/es/utils/drawing-types").VcDrawingDrawEvt, viewer: Cesium.Viewer) => any;
    onEditorEvt?: (evt: import("vue-cesium/es/utils/drawing-types").VcDrawingEditorEvt, viewer: Cesium.Viewer) => any;
    onMouseEvt?: (evt: import("vue-cesium/es/utils/drawing-types").VcDrawingMouseEvt, viewer: Cesium.Viewer) => any;
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: import("vue-cesium/es/utils/types").VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onFabUpdated?: (value: boolean) => any;
}, {
    show: boolean;
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    editable: boolean;
    mode: 0 | 1;
    clampToGround: boolean;
    analyses: ("sightline" | "viewshed")[];
    mainFabOpts: VcActionTooltipProps & VcFabProps;
    sightlineActionOpts: VcActionTooltipProps;
    sightlineAnalysisOpts: VcDrawingOpts;
    viewshedActionOpts: VcActionTooltipProps;
    viewshedAnalysisOpts: VcViewshedAnalysisOpts;
    activeColor: string;
    clearActionOpts: VcActionTooltipProps;
}>;
export default _default;
export { VcAnalysisSightline, VcAnalysisViewshed, analysesProps };
export type { VcAnalysesProps } from './defaultProps';
export declare type VcAnalysesEmits = typeof emits;
export interface VcAnalysesRef extends VcComponentPublicInstance<VcAnalysesProps> {
    /**
     * Get or set the editingActionName.
     */
    editingActionName?: string;
    /**
     * Clear all drawing results.
     */
    clearAll: () => void;
    /**
     * End listening for the ScreenSpaceEventHandler events.
     */
    deactivate: () => void;
    /**
     * Start listening for ScreenSpaceEventHandler events.
     */
    activate: () => void;
    /**
     * Toggle drawing instance.
     * @param drawingOption drawing instance or drawing instance name.
     */
    toggleAction: (drawingOption: VcDrawingActionInstance | string) => void;
    /**
     * Get the float action button template reference.
     */
    getFabRef: () => VcFabRef;
    /**
     * Get the drawingActionInstance by action name.
     */
    getDrawingActionInstance: (actionName: string) => VcDrawingActionInstance;
    /**
     * Get the drawing action instances.
     */
    getDrawingActionInstances: () => Array<VcDrawingActionInstance>;
    /**
     * Get the selected drawing action instance.
     */
    getSelectedDrawingActionInstance: () => VcDrawingActionInstance;
}
export declare type VcAnalysesSlots = {
    /**
     * body slot content of the component
     */
    body: (scope: {
        /**
         * Action instances.
         */
        drawingActionInstances: Array<VcDrawingActionInstance>;
    }) => VNode[];
};
