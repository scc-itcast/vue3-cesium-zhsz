import type { PropType } from 'vue';
import type { VcFabProps } from '../../ui';
import type { VcActionTooltipProps, VcComponentInternalInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
import type { VcComponentDistanceMeasurementOpts, VcDrawingActiveEvt, VcDrawingDrawEvt, VcDrawingEditorEvt, VcDrawingMouseEvt, VcHorizontalMeasurementOpts, VcMeasurementOpts, VcPolylineMeasurementOpts, VcRegularMeasurementOpts } from 'vue-cesium/es/utils/drawing-types';
declare const distanceMeasurementActionDefault: VcActionTooltipProps;
declare const distanceMeasurementDefault: VcMeasurementOpts;
declare const componentDistanceMeasurementActionDefault: VcActionTooltipProps;
declare const componentDistanceMeasurementDefault: VcComponentDistanceMeasurementOpts;
declare const polylineMeasurementActionDefault: VcActionTooltipProps;
declare const polylineMeasurementDefault: VcPolylineMeasurementOpts;
declare const horizontalMeasurementActionDefault: VcActionTooltipProps;
declare const horizontalMeasurementDefault: VcHorizontalMeasurementOpts;
declare const verticalMeasurementActionDefault: VcActionTooltipProps;
declare const verticalMeasurementDefault: VcMeasurementOpts;
declare const heightMeasurementActionDefault: VcActionTooltipProps;
declare const heightMeasurementDefault: VcMeasurementOpts;
declare const areaMeasurementActionDefault: VcActionTooltipProps;
declare const areaMeasurementDefault: VcPolylineMeasurementOpts;
declare const pointMeasurementActionDefault: VcActionTooltipProps;
declare const pointMeasurementDefault: VcMeasurementOpts;
declare const rectangleMeasurementActionDefault: VcActionTooltipProps;
declare const rectangleMeasurementDefault: VcRegularMeasurementOpts;
declare const regularMeasurementDefault: VcRegularMeasurementOpts;
declare const circleMeasurementDefault: VcRegularMeasurementOpts;
declare const mainFabDefault: VcActionTooltipProps & VcFabProps;
export declare const measurementType: string[];
declare const measurementsProps: {
    measurements: {
        type: PropType<("distance" | "component-distance" | "polyline" | "horizontal" | "vertical" | "height" | "area" | "point" | "rectangle" | "regular" | "circle")[]>;
        default: () => string[];
        validator: (measurements: string[]) => boolean;
    };
    mainFabOpts: {
        type: PropType<VcActionTooltipProps & VcFabProps>;
        default: () => VcActionTooltipProps & VcFabProps;
    };
    distanceActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    distanceMeasurementOpts: {
        type: PropType<VcMeasurementOpts>;
        default: () => VcMeasurementOpts;
    };
    componentDistanceActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    componentDistanceMeasurementOpts: {
        type: PropType<VcComponentDistanceMeasurementOpts>;
        default: () => VcComponentDistanceMeasurementOpts;
    };
    polylineActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    polylineMeasurementOpts: {
        type: PropType<VcPolylineMeasurementOpts>;
        default: () => VcPolylineMeasurementOpts;
    };
    horizontalActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    horizontalMeasurementOpts: {
        type: PropType<VcHorizontalMeasurementOpts>;
        default: () => VcHorizontalMeasurementOpts;
    };
    verticalActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    verticalMeasurementOpts: {
        type: PropType<VcMeasurementOpts>;
        default: () => VcMeasurementOpts;
    };
    heightActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    heightMeasurementOpts: {
        type: PropType<VcMeasurementOpts>;
        default: () => VcMeasurementOpts;
    };
    areaActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    areaMeasurementOpts: {
        type: PropType<VcPolylineMeasurementOpts>;
        default: () => VcPolylineMeasurementOpts;
    };
    pointActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    pointMeasurementOpts: {
        type: PropType<VcMeasurementOpts>;
        default: () => VcMeasurementOpts;
    };
    rectangleActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    rectangleMeasurementOpts: {
        type: PropType<VcRegularMeasurementOpts>;
        default: () => VcRegularMeasurementOpts;
    };
    regularActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    regularMeasurementOpts: {
        type: PropType<VcRegularMeasurementOpts>;
        default: () => VcRegularMeasurementOpts;
    };
    circleActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    circleMeasurementOpts: {
        type: PropType<VcRegularMeasurementOpts>;
        default: () => VcRegularMeasurementOpts;
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
declare const defaultOptions: VcMeasurementsProps;
export { measurementsProps, defaultOptions, distanceMeasurementActionDefault, distanceMeasurementDefault, componentDistanceMeasurementActionDefault, componentDistanceMeasurementDefault, polylineMeasurementActionDefault, polylineMeasurementDefault, horizontalMeasurementActionDefault, horizontalMeasurementDefault, verticalMeasurementActionDefault, verticalMeasurementDefault, heightMeasurementActionDefault, heightMeasurementDefault, areaMeasurementActionDefault, areaMeasurementDefault, pointMeasurementActionDefault, pointMeasurementDefault, rectangleMeasurementActionDefault, rectangleMeasurementDefault, regularMeasurementDefault, circleMeasurementDefault, mainFabDefault };
export declare type VcMeasurementsProps = {
    /**
     * Specify the position of the VcMeasurements.
     * Default value: bottom-left
     */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left';
    /**
     * An array of two numbers to offset the VcMeasurements horizontally and vertically in pixels.
     * Default value: [0, 0]
     */
    offset?: [number, number];
    /**
     * Specify whether the measurement result is visible.
     * Default value: true
     */
    show?: boolean;
    /**
     * Specify the interactive drawing mode, 0 means continuous drawing, and 1 means drawing ends once.
     * Default value: 1
     */
    mode?: number;
    /**
     * Specify which measurement instances to load.
     * Default value: ['distance', 'component-distance', 'polyline', 'horizontal', 'vertical', 'height', 'area', 'point', 'rectangle', 'regular', 'circle']
     */
    measurements?: Array<'distance' | 'component-distance' | 'polyline' | 'horizontal' | 'vertical' | 'height' | 'area' | 'point' | 'rectangle' | 'regular' | 'circle'>;
    /**
     * Specify the color when the measurement instance is activated.
     * Default value: positive
     */
    activeColor?: string;
    /**
     * Specify whether the measurement result can be edited.
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
     * Specify the style options of the distance measurement action button.
     */
    distanceActionOpts?: VcActionTooltipProps;
    /**
     * Specify distance measurement options.
     */
    distanceMeasurementOpts?: VcMeasurementOpts;
    /**
     * Specify the style options of the component distance measurement action button.
     */
    componentDistanceActionOpts?: VcActionTooltipProps;
    /**
     * Specify the component distance measurement options.
     */
    componentDistanceMeasurementOpts?: VcMeasurementOpts;
    /**
     * Specify the style options of the polyline distance measurement action button.
     */
    polylineActionOpts?: VcActionTooltipProps;
    /**
     * Specify the polyline distance measurement options.
     */
    polylineMeasurementOpts?: VcMeasurementOpts;
    /**
     * Specify the style options of the horizontal distance measurement action button.
     */
    horizontalActionOpts?: VcActionTooltipProps;
    /**
     * Specify the horizontal distance measurement options.
     */
    horizontalMeasurementOpts?: VcMeasurementOpts;
    /**
     * Specify the style options of the vertical distance measurement action button.
     */
    verticalActionOpts?: VcActionTooltipProps;
    /**
     * Specify the vertical distance measurement options.
     */
    verticalMeasurementOpts?: VcMeasurementOpts;
    /**
     * Specify the style options of the height measurement action button.
     */
    heightActionOpts?: VcActionTooltipProps;
    /**
     * Specify the height measurement options.
     */
    heightMeasurementOpts?: VcMeasurementOpts;
    /**
     * Specify the style options of the area measurement action button.
     */
    areaActionOpts?: VcActionTooltipProps;
    /**
     * Specify the area measurement options.
     */
    areaMeasurementOpts?: VcMeasurementOpts;
    /**
     * Specify the style options of the point measurement action button.
     */
    pointActionOpts?: VcActionTooltipProps;
    /**
     * Specify the point measurement options.
     */
    pointMeasurementOpts?: VcMeasurementOpts;
    /**
     * Specify the style options of the rectangle measurement action button.
     */
    rectangleActionOpts?: VcActionTooltipProps;
    /**
     * Specify the rectangle measurement options.
     */
    rectangleMeasurementOpts?: VcMeasurementOpts;
    /**
     * Specify the style options of the circle measurement action button.
     */
    circleActionOpts?: VcActionTooltipProps;
    /**
     * Specify the circle measurement options.
     */
    circleMeasurementOpts?: VcMeasurementOpts;
    /**
     * Specify the style options of the regular measurement action button.
     */
    regularActionOpts?: VcActionTooltipProps;
    /**
     * Specify the regular measurement options.
     */
    regularMeasurementOpts?: VcMeasurementOpts;
    /**
     * Specify the style options of the clear action button.
     */
    clearActionOpts?: VcActionTooltipProps;
    /**
     * Triggers before the VcMeasurements is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcMeasurements is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcMeasurements is destroyed.
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
    onFabUpdated: (value: boolean) => void;
};
