import { VcDrawingActiveEvt, VcDrawingDrawEvt, VcDrawingEditorEvt, VcDrawingMouseEvt, VcDrawingOpts, VcViewshedAnalysisOpts } from 'vue-cesium/es/utils/drawing-types';
import type { VcActionTooltipProps, VcComponentInternalInstance, VcReadyObject } from 'vue-cesium/es/utils/types';
import type { PropType } from 'vue';
import type { VcFabProps } from '../../ui';
declare const sightlineAnalysisActionDefault: VcActionTooltipProps;
declare const sightlineAnalysisDefault: VcDrawingOpts;
declare const viewshedAnalysisActionDefault: VcActionTooltipProps;
declare const viewshedAnalysisDefault: VcViewshedAnalysisOpts;
declare const mainFabDefault: VcActionTooltipProps & VcFabProps;
export declare const analysisType: string[];
declare const analysesProps: {
    analyses: {
        type: PropType<("sightline" | "viewshed")[]>;
        default: () => string[];
        validator: (drawings: string[]) => boolean;
    };
    mainFabOpts: {
        type: PropType<VcActionTooltipProps & VcFabProps>;
        default: () => VcActionTooltipProps & VcFabProps;
    };
    sightlineActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    sightlineAnalysisOpts: {
        type: PropType<VcDrawingOpts>;
        default: () => VcDrawingOpts;
    };
    viewshedActionOpts: {
        type: PropType<VcActionTooltipProps>;
        default: () => VcActionTooltipProps;
    };
    viewshedAnalysisOpts: {
        type: PropType<VcViewshedAnalysisOpts>;
        default: () => VcViewshedAnalysisOpts;
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
        default: boolean; /**
         * Triggers when the VcAnalyses is destroyed.
         */
    };
};
declare const defaultOptions: VcAnalysesProps;
export { analysesProps, defaultOptions, sightlineAnalysisActionDefault, sightlineAnalysisDefault, viewshedAnalysisActionDefault, viewshedAnalysisDefault, mainFabDefault };
export declare type VcAnalysesProps = {
    /**
     * Specify the position of the VcAnalyses.
     * Default value: bottom-left
     */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left';
    /**
     * An array of two numbers to offset the VcAnalyses horizontally and vertically in pixels.
     * Default value: [0, 0]
     */
    offset?: [number, number];
    /**
     * Specify whether the analysis result is visible.
     * Default value: true
     */
    show?: boolean;
    /**
     * Specify the interactive drawing mode, 0 means continuous drawing, and 1 means drawing ends once.
     * Default value: 1
     */
    mode?: number;
    /**
     * Specify which analysis instances to load.
     * Default value: ['sightline', 'viewshed']
     */
    analyses?: Array<'sightline' | 'viewshed'>;
    /**
     * Specify the color when the analysis instance is activated.
     * Default value: positive
     */
    activeColor?: string;
    /**
     * Specify whether the analysis result can be edited.
     * Default value: false
     */
    editable?: boolean;
    /**
     * Specify the style options of the floating action button of the VcAnalyses component.
     */
    mainFabOpts?: VcActionTooltipProps & VcFabProps;
    /**
     * Specify the style options of the sightline analysis action button.
     */
    sightlineActionOpts?: VcActionTooltipProps;
    /**
     * Specify sightline analysis options.
     */
    sightlineAnalysisOpts?: VcDrawingOpts;
    /**
     * Specify the style options of the viewshed analysis action button.
     */
    viewshedActionOpts?: VcActionTooltipProps;
    /**
     * Specify viewshed analysis options.
     */
    viewshedAnalysisOpts?: VcViewshedAnalysisOpts;
    /**
     * Specify the style options of the clear action button.
     */
    clearActionOpts?: VcActionTooltipProps;
    /**
     * Triggers before the VcAnalyses is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcAnalyses is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcAnalyses is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the analysis action is actived.
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
