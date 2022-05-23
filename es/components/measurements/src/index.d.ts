import { VNode } from 'vue';
import { measurementsProps, VcMeasurementsProps } from './defaultProps';
import { VcFabProps, VcFabRef } from 'vue-cesium/es/components/ui';
import VcMeasurementDistance from './distance';
import VcMeasurementPolyline from './polyline';
import VcMeasurementHorizontal from './horizontal';
import VcMeasurementVertical from './vertical';
import VcMeasurementHeight from './height';
import VcMeasurementPoint from './point';
import VcMeasurementArea from './area';
import VcMeasurementRectangle from './rectangle';
import VcMeasurementRegular from './regular';
import type { VcComponentDistanceMeasurementOpts, VcDrawingActionInstance, VcHorizontalMeasurementOpts, VcMeasurementOpts, VcPolylineMeasurementOpts, VcRegularMeasurementOpts } from 'vue-cesium/es/utils/drawing-types';
import type { VcActionTooltipProps, VcComponentInternalInstance, VcComponentPublicInstance } from 'vue-cesium/es/utils/types';
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
    measurements: {
        type: import("vue").PropType<("distance" | "component-distance" | "polyline" | "horizontal" | "vertical" | "height" | "area" | "point" | "rectangle" | "regular" | "circle")[]>; /**
         * Get or set the editingActionName.
         */
        default: () => string[];
        validator: (measurements: string[]) => boolean;
    }; /**
     * Get the drawing action instances.
     */
    mainFabOpts: {
        type: import("vue").PropType<VcActionTooltipProps & VcFabProps>;
        default: () => VcActionTooltipProps & VcFabProps;
    };
    distanceActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    distanceMeasurementOpts: {
        type: import("vue").PropType<VcMeasurementOpts>;
        default: () => VcMeasurementOpts;
    };
    /**
     * Start listening for ScreenSpaceEventHandler events.
     */
    componentDistanceActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    componentDistanceMeasurementOpts: {
        type: import("vue").PropType<VcComponentDistanceMeasurementOpts>;
        default: () => VcComponentDistanceMeasurementOpts;
    };
    polylineActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    polylineMeasurementOpts: {
        type: import("vue").PropType<VcPolylineMeasurementOpts>;
        default: () => VcPolylineMeasurementOpts;
    };
    horizontalActionOpts: {
        /**
         * Get the selected drawing action instance.
         */
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    horizontalMeasurementOpts: {
        type: import("vue").PropType<VcHorizontalMeasurementOpts>;
        default: () => VcHorizontalMeasurementOpts;
    };
    verticalActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    verticalMeasurementOpts: {
        type: import("vue").PropType<VcMeasurementOpts>;
        default: () => VcMeasurementOpts;
    };
    heightActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    heightMeasurementOpts: {
        type: import("vue").PropType<VcMeasurementOpts>;
        default: () => VcMeasurementOpts;
    };
    areaActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    areaMeasurementOpts: {
        type: import("vue").PropType<VcPolylineMeasurementOpts>;
        default: () => VcPolylineMeasurementOpts;
    };
    pointActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    pointMeasurementOpts: {
        type: import("vue").PropType<VcMeasurementOpts>;
        default: () => VcMeasurementOpts;
    };
    rectangleActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    rectangleMeasurementOpts: {
        type: import("vue").PropType<VcRegularMeasurementOpts>;
        default: () => VcRegularMeasurementOpts;
    };
    regularActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    regularMeasurementOpts: {
        type: import("vue").PropType<VcRegularMeasurementOpts>;
        default: () => VcRegularMeasurementOpts;
    };
    circleActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    circleMeasurementOpts: {
        type: import("vue").PropType<VcRegularMeasurementOpts>;
        default: () => VcRegularMeasurementOpts;
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
    measurements: {
        type: import("vue").PropType<("distance" | "component-distance" | "polyline" | "horizontal" | "vertical" | "height" | "area" | "point" | "rectangle" | "regular" | "circle")[]>; /**
         * Get or set the editingActionName.
         */
        default: () => string[];
        validator: (measurements: string[]) => boolean;
    }; /**
     * Get the drawing action instances.
     */
    mainFabOpts: {
        type: import("vue").PropType<VcActionTooltipProps & VcFabProps>;
        default: () => VcActionTooltipProps & VcFabProps;
    };
    distanceActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    distanceMeasurementOpts: {
        type: import("vue").PropType<VcMeasurementOpts>;
        default: () => VcMeasurementOpts;
    };
    /**
     * Start listening for ScreenSpaceEventHandler events.
     */
    componentDistanceActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    componentDistanceMeasurementOpts: {
        type: import("vue").PropType<VcComponentDistanceMeasurementOpts>;
        default: () => VcComponentDistanceMeasurementOpts;
    };
    polylineActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    polylineMeasurementOpts: {
        type: import("vue").PropType<VcPolylineMeasurementOpts>;
        default: () => VcPolylineMeasurementOpts;
    };
    horizontalActionOpts: {
        /**
         * Get the selected drawing action instance.
         */
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    horizontalMeasurementOpts: {
        type: import("vue").PropType<VcHorizontalMeasurementOpts>;
        default: () => VcHorizontalMeasurementOpts;
    };
    verticalActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    verticalMeasurementOpts: {
        type: import("vue").PropType<VcMeasurementOpts>;
        default: () => VcMeasurementOpts;
    };
    heightActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    heightMeasurementOpts: {
        type: import("vue").PropType<VcMeasurementOpts>;
        default: () => VcMeasurementOpts;
    };
    areaActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    areaMeasurementOpts: {
        type: import("vue").PropType<VcPolylineMeasurementOpts>;
        default: () => VcPolylineMeasurementOpts;
    };
    pointActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    pointMeasurementOpts: {
        type: import("vue").PropType<VcMeasurementOpts>;
        default: () => VcMeasurementOpts;
    };
    rectangleActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    rectangleMeasurementOpts: {
        type: import("vue").PropType<VcRegularMeasurementOpts>;
        default: () => VcRegularMeasurementOpts;
    };
    regularActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    regularMeasurementOpts: {
        type: import("vue").PropType<VcRegularMeasurementOpts>;
        default: () => VcRegularMeasurementOpts;
    };
    circleActionOpts: {
        type: import("vue").PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    circleMeasurementOpts: {
        type: import("vue").PropType<VcRegularMeasurementOpts>;
        default: () => VcRegularMeasurementOpts;
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
    pointActionOpts: VcActionTooltipProps;
    polylineActionOpts: VcActionTooltipProps;
    rectangleActionOpts: VcActionTooltipProps;
    circleActionOpts: VcActionTooltipProps;
    regularActionOpts: VcActionTooltipProps;
    measurements: ("distance" | "component-distance" | "polyline" | "horizontal" | "vertical" | "height" | "area" | "point" | "rectangle" | "regular" | "circle")[];
    distanceActionOpts: VcActionTooltipProps;
    distanceMeasurementOpts: VcMeasurementOpts;
    componentDistanceActionOpts: VcActionTooltipProps;
    componentDistanceMeasurementOpts: VcComponentDistanceMeasurementOpts;
    polylineMeasurementOpts: VcPolylineMeasurementOpts;
    horizontalActionOpts: VcActionTooltipProps;
    horizontalMeasurementOpts: VcHorizontalMeasurementOpts;
    verticalActionOpts: VcActionTooltipProps;
    verticalMeasurementOpts: VcMeasurementOpts;
    heightActionOpts: VcActionTooltipProps;
    heightMeasurementOpts: VcMeasurementOpts;
    areaActionOpts: VcActionTooltipProps;
    areaMeasurementOpts: VcPolylineMeasurementOpts;
    pointMeasurementOpts: VcMeasurementOpts;
    rectangleMeasurementOpts: VcRegularMeasurementOpts;
    regularMeasurementOpts: VcRegularMeasurementOpts;
    circleMeasurementOpts: VcRegularMeasurementOpts;
}>;
export default _default;
export { VcMeasurementDistance, VcMeasurementPolyline, VcMeasurementHorizontal, VcMeasurementVertical, VcMeasurementHeight, VcMeasurementPoint, VcMeasurementArea, VcMeasurementRectangle, VcMeasurementRegular, measurementsProps };
export type { VcMeasurementsProps } from './defaultProps';
export declare type VcMeasurementsEmits = typeof emits;
export declare type VcMeasurementsSlots = {
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
export interface VcMeasurementsRef extends VcComponentPublicInstance<VcMeasurementsProps> {
    /**
     * Get or set the editingActionName.
     */
    editingActionName?: string;
    /**
     * Get the drawing action instances.
     */
    drawingActionInstances: Array<VcDrawingActionInstance>;
    /**
     * Get the selected drawing action instance.
     */
    selectedDrawingActionInstance: VcDrawingActionInstance;
    /**
     * Clear all drawing results.
     */
    clearAll: () => void;
    /**
     * End listening for the ScreenSpaceEventHandler event.
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
     * Get the drawingActionInstance.
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
