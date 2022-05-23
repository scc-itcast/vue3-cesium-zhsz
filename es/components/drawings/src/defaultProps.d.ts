import { VcDrawingActiveEvt, VcDrawingDrawEvt, VcDrawingEditorEvt, VcDrawingMouseEvt, VcDrawingOpts } from 'vue-cesium/es/utils/drawing-types';
import type { VcActionTooltipProps, VcComponentInternalInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
import type { PropType } from 'vue';
import { VcFabProps } from '../../ui';
declare const pointDrawingActionDefault: VcActionTooltipProps;
declare const polylineDrawingActionDefault: VcActionTooltipProps;
declare const polygonDrawingActionDefault: VcActionTooltipProps;
declare const rectangleDrawingActionDefault: VcActionTooltipProps;
declare const pinDrawingActionDefault: VcActionTooltipProps;
declare const pinDrawingDefault: VcDrawingOpts;
declare const mainFabDefault: VcActionTooltipProps & VcFabProps;
export declare const drawingType: string[];
declare const drawingsProps: {
    drawings: {
        type: PropType<("polyline" | "point" | "rectangle" | "regular" | "circle" | "pin" | "polygon")[]>;
        default: () => string[];
        validator: (drawings: string[]) => boolean;
    };
    mainFabOpts: {
        type: PropType<VcActionTooltipProps & VcFabProps>;
        default: () => VcActionTooltipProps & VcFabProps;
    };
    pinActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    pinDrawingOpts: {
        type: PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    pointActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    pointDrawingOpts: {
        type: PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    polylineActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    polylineDrawingOpts: {
        type: PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    polygonActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    polygonDrawingOpts: {
        type: PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    rectangleActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    rectangleDrawingOpts: {
        type: PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    circleActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    circleDrawingOpts: {
        type: PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    regularActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    regularDrawingOpts: {
        type: PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    position: {
        type: PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left">;
        default: string;
        validator: (v: string) => boolean;
    };
    offset: {
        type: PropType<[number, number]>;
        validator: (v: any) => boolean;
    };
    mode: {
        type: PropType<0 | 1>;
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
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
};
declare const defaultOptions: VcDrawingsProps;
export { drawingsProps, defaultOptions, pointDrawingActionDefault, polylineDrawingActionDefault, polygonDrawingActionDefault, rectangleDrawingActionDefault, pinDrawingActionDefault, pinDrawingDefault, mainFabDefault };
export declare type VcDrawingsProps = {
    /**
     * Specify the position of the VcDrawings.
     * Default value: bottom-left
     */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left';
    /**
     * An array of two numbers to offset the VcDrawings horizontally and vertically in pixels.
     * Default value: [0, 0]
     */
    offset?: [number, number];
    /**
     * Specify whether the drawing result is visible.
     * Default value: true
     */
    show?: boolean;
    /**
     * Specify the interactive drawing mode, 0 means continuous drawing, and 1 means drawing ends once.
     * Default value: 1
     */
    mode?: number;
    /**
     * Specify which drawing instances to load.
     * Default value: ['pin', 'point', 'polyline', 'polygon', 'rectangle', 'regular', 'circle']
     */
    drawings?: Array<'pin' | 'point' | 'polyline' | 'polygon' | 'rectangle' | 'regular' | 'circle'>;
    /**
     * Specify the color when the drawing instance is activated.
     * Default value: positive
     */
    activeColor?: string;
    /**
     * Specify whether the drawing result can be edited.
     * Default value: false
     */
    editable?: boolean;
    /**
     * Specify whether the drawing result object is attached to the ground or 3dtiles. Only polyline and polygon objects work.
     * Default value: false
     */
    clampToGround?: boolean;
    /**
     * Specify the style options of the floating action button of the VcMeasurements component.
     */
    mainFabOpts?: VcActionTooltipProps & VcFabProps;
    /**
     * Specify the style options of the pin drawing action button.
     */
    pinActionOpts?: VcActionTooltipProps;
    /**
     * Specify pin drawing options.
     */
    pinDrawingOpts?: VcDrawingOpts;
    /**
     * Specify the style options of the point drawing action button.
     */
    pointActionOpts?: VcActionTooltipProps;
    /**
     * Specify point drawing options.
     */
    pointDrawingOpts?: VcDrawingOpts;
    /**
     * Specify the style options of the polyline drawing action button.
     */
    polylineActionOpts?: VcActionTooltipProps;
    /**
     * Specify polyline drawing options.
     */
    polylineDrawingOpts?: VcDrawingOpts;
    /**
     * Specify the style options of the polygon drawing action button.
     */
    polygonActionOpts?: VcActionTooltipProps;
    /**
     * Specify polygon drawing options.
     */
    polygonDrawingOpts?: VcDrawingOpts;
    /**
     * Specify the style options of the rectangle drawing action button.
     */
    rectangleActionOpts?: VcActionTooltipProps;
    /**
     * Specify rectangle drawing options.
     */
    rectangleDrawingOpts?: VcDrawingOpts;
    /**
     * Specify the style options of the circle drawing action button.
     */
    circleActionOpts?: VcActionTooltipProps;
    /**
     * Specify circle drawing options.
     */
    circleDrawingOpts?: VcDrawingOpts;
    /**
     * Specify the style options of the regular drawing action button.
     */
    regularActionOpts?: VcActionTooltipProps;
    /**
     * Specify regular drawing options.
     */
    regularDrawingOpts?: VcDrawingOpts;
    /**
     * Specify the style options of the clear action button.
     */
    clearActionOpts?: VcActionTooltipProps;
    /**
     * Triggers before the VcDrawings is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcDrawings is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcDrawings is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the measurement action is actived.
     */
    onActiveEvt?: (evt: VcDrawingActiveEvt, viewer: Cesium.Viewer) => void;
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
    /**
     * Triggers when the floating button is expanded or collapsed.
     */
    onFabUpdated?: (value: boolean) => void;
};
