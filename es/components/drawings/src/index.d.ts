import { VNode } from 'vue';
import { drawingsProps } from './defaultProps';
import type { VcFabProps, VcFabRef } from 'vue-cesium/es/components/ui';
import type { VcActionTooltipProps, VcComponentInternalInstance, VcComponentPublicInstance } from 'vue-cesium/es/utils/types';
import VcDrawingPin from './pin';
import VcDrawingPoint from './point';
import VcDrawingPolyline from './polyline';
import VcDrawingPolygon from './polygon';
import VcDrawingRegular from './regular';
import VcDrawingRectangle from './rectangle';
import type { VcDrawingActionInstance, VcDrawingOpts } from 'vue-cesium/es/utils/drawing-types';
import { VcDrawingsProps } from '..';
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
    drawings: {
        type: import("vue").PropType<("polyline" | "point" | "rectangle" | "regular" | "circle" | "pin" | "polygon")[]>;
        default: () => string[];
        validator: (drawings: string[]) => boolean;
    };
    mainFabOpts: {
        type: import("vue").PropType<VcActionTooltipProps & VcFabProps>;
        default: () => VcActionTooltipProps & VcFabProps;
    };
    pinActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    pinDrawingOpts: {
        type: import("vue").PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    pointActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    pointDrawingOpts: {
        type: import("vue").PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    polylineActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    polylineDrawingOpts: {
        type: import("vue").PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    polygonActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    polygonDrawingOpts: {
        type: import("vue").PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    rectangleActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    rectangleDrawingOpts: {
        type: import("vue").PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    circleActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    circleDrawingOpts: {
        type: import("vue").PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    regularActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    regularDrawingOpts: {
        type: import("vue").PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
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
    drawings: {
        type: import("vue").PropType<("polyline" | "point" | "rectangle" | "regular" | "circle" | "pin" | "polygon")[]>;
        default: () => string[];
        validator: (drawings: string[]) => boolean;
    };
    mainFabOpts: {
        type: import("vue").PropType<VcActionTooltipProps & VcFabProps>;
        default: () => VcActionTooltipProps & VcFabProps;
    };
    pinActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    pinDrawingOpts: {
        type: import("vue").PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    pointActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    pointDrawingOpts: {
        type: import("vue").PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    polylineActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    polylineDrawingOpts: {
        type: import("vue").PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    polygonActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    polygonDrawingOpts: {
        type: import("vue").PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    rectangleActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    rectangleDrawingOpts: {
        type: import("vue").PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    circleActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    circleDrawingOpts: {
        type: import("vue").PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    regularActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    regularDrawingOpts: {
        type: import("vue").PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
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
    mainFabOpts: VcActionTooltipProps & VcFabProps;
    activeColor: string;
    clearActionOpts: VcActionTooltipProps;
    drawings: ("polyline" | "point" | "rectangle" | "regular" | "circle" | "pin" | "polygon")[];
    pinActionOpts: VcActionTooltipProps;
    pinDrawingOpts: VcDrawingOpts;
    pointActionOpts: VcActionTooltipProps;
    pointDrawingOpts: VcDrawingOpts;
    polylineActionOpts: VcActionTooltipProps;
    polylineDrawingOpts: VcDrawingOpts;
    polygonActionOpts: VcActionTooltipProps;
    polygonDrawingOpts: VcDrawingOpts;
    rectangleActionOpts: VcActionTooltipProps;
    rectangleDrawingOpts: VcDrawingOpts;
    circleActionOpts: VcActionTooltipProps;
    circleDrawingOpts: VcDrawingOpts;
    regularActionOpts: VcActionTooltipProps;
    regularDrawingOpts: VcDrawingOpts;
}>;
export default _default;
export { VcDrawingPin, VcDrawingPoint, VcDrawingPolygon, VcDrawingPolyline, VcDrawingRectangle, VcDrawingRegular, drawingsProps };
export type { VcDrawingsProps } from './defaultProps';
export declare type VcDrawingsEmits = typeof emits;
export declare type VcDrawingsSlots = {
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
export interface VcDrawingsRef extends VcComponentPublicInstance<VcDrawingsProps> {
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
