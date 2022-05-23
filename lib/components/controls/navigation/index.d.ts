import type { VNode } from 'vue';
import type { VcCompassEvt, VcDistanceLegendEvt, VcLocationEvt, VcPrintEvt, VcStatusBarEvt, VcComponentInternalInstance, VcZoomEvt, VcReadyObject, VcComponentPublicInstance } from 'vue-cesium/es/utils/types';
import { VcNavigationOtherOpts } from './defaultProps';
import type { VcPrintProps } from '../print';
import type { VcCompassProps } from '../compass';
import type { VcMyLocationProps } from '../my-location';
import type { VcZoomControlProps } from '../zoom-control';
declare const emits: {
    zoomEvt: (evt: VcZoomEvt) => boolean;
    compassEvt: (evt: VcCompassEvt) => boolean;
    locationEvt: (evt: VcLocationEvt) => boolean;
    printEvt: (evt: VcPrintEvt) => boolean;
    statusBarEvt: (evt: VcStatusBarEvt) => boolean;
    distanceLegendEvt: (evt: VcDistanceLegendEvt) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
};
export declare const navigationProps: {
    compassOpts: {
        type: import("vue").PropType<false | VcCompassProps>;
        default: () => VcCompassProps;
    };
    zoomOpts: {
        type: import("vue").PropType<false | VcZoomControlProps>;
        default: () => VcZoomControlProps;
    };
    printOpts: {
        type: import("vue").PropType<false | VcPrintProps>;
        default: () => VcPrintProps;
    };
    locationOpts: {
        type: import("vue").PropType<false | VcMyLocationProps>;
        default: () => VcMyLocationProps;
    };
    otherOpts: {
        type: import("vue").PropType<false | VcNavigationOtherOpts>;
        default: () => VcNavigationOtherOpts;
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
};
declare const _default: import("vue").DefineComponent<{
    compassOpts: {
        type: import("vue").PropType<false | VcCompassProps>;
        default: () => VcCompassProps;
    };
    zoomOpts: {
        type: import("vue").PropType<false | VcZoomControlProps>;
        default: () => VcZoomControlProps;
    };
    printOpts: {
        type: import("vue").PropType<false | VcPrintProps>;
        default: () => VcPrintProps;
    };
    locationOpts: {
        type: import("vue").PropType<false | VcMyLocationProps>;
        default: () => VcMyLocationProps;
    };
    otherOpts: {
        type: import("vue").PropType<false | VcNavigationOtherOpts>;
        default: () => VcNavigationOtherOpts;
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
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    zoomEvt: (evt: VcZoomEvt) => boolean;
    compassEvt: (evt: VcCompassEvt) => boolean;
    locationEvt: (evt: VcLocationEvt) => boolean;
    printEvt: (evt: VcPrintEvt) => boolean;
    statusBarEvt: (evt: VcStatusBarEvt) => boolean;
    distanceLegendEvt: (evt: VcDistanceLegendEvt) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    compassOpts: {
        type: import("vue").PropType<false | VcCompassProps>;
        default: () => VcCompassProps;
    };
    zoomOpts: {
        type: import("vue").PropType<false | VcZoomControlProps>;
        default: () => VcZoomControlProps;
    };
    printOpts: {
        type: import("vue").PropType<false | VcPrintProps>;
        default: () => VcPrintProps;
    };
    locationOpts: {
        type: import("vue").PropType<false | VcMyLocationProps>;
        default: () => VcMyLocationProps;
    };
    otherOpts: {
        type: import("vue").PropType<false | VcNavigationOtherOpts>;
        default: () => VcNavigationOtherOpts;
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
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onCompassEvt?: (evt: VcCompassEvt) => any;
    onZoomEvt?: (evt: VcZoomEvt) => any;
    onPrintEvt?: (evt: VcPrintEvt) => any;
    onLocationEvt?: (evt: VcLocationEvt) => any;
    onStatusBarEvt?: (evt: VcStatusBarEvt) => any;
    onDistanceLegendEvt?: (evt: VcDistanceLegendEvt) => any;
}, {
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    compassOpts: VcCompassProps;
    zoomOpts: VcZoomControlProps;
    printOpts: VcPrintProps;
    locationOpts: VcMyLocationProps;
    otherOpts: VcNavigationOtherOpts;
}>;
export default _default;
export declare type VcNavigationEmits = typeof emits;
export interface VcNavigationProps {
    /**
     * Specify the position of the VcNavigation.
     * Default value: top-right
     */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left';
    /**
     * An array of two numbers to offset the VcNavigation horizontally and vertically in pixels.
     * Default value: [0, 0]
     */
    offset?: [number, number];
    /**
     * Specify the compass options of the component. false means no display.
     */
    compassOpts?: false | VcCompassProps;
    /**
     * Specify the zoom control options of the component. false means no display.
     */
    zoomOpts?: false | VcZoomControlProps;
    /**
     * Specify the print button options of the component. false means no display.
     */
    printOpts?: false | VcPrintProps;
    /**
     * Specify the location button options of the component. false means no display.
     */
    locationOpts?: false | VcMyLocationProps;
    /**
     * Specify the other controls(status bar & distance legend) options of the component. false means no display.
     */
    otherOpts?: false | VcNavigationOtherOpts;
    /**
     * Triggers before the VcNavigation is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcNavigation is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcNavigation is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the zoom control is operated.
     */
    onZoomEvt?: (evt: VcZoomEvt) => void;
    /**
     * Triggers when the compass control is operated.
     */
    onCompassEvt?: (evt: VcCompassEvt) => void;
    /**
     * Triggers when the positioning button is clicked.
     */
    onLocationEvt?: (evt: VcLocationEvt) => void;
    /**
     * Triggers when the print button is clicked.
     */
    onPrintEvt?: (evt: VcPrintEvt) => void;
    /**
     * Triggers when the information changed.
     */
    onStatusBarEvt?: (evt: VcStatusBarEvt) => void;
    /**
     * Triggers when the distance scale changed.
     */
    onDistanceLegendEvt?: (evt: VcDistanceLegendEvt) => void;
}
export interface VcNavigationSlots {
    /**
     * Suggestion: VcCompass, VcZoomControl, VcPrint, VcMyLocation, VcStatusBar, VcDistanceLegend
     */
    default: () => VNode[];
}
export declare type VcNavigationRef = VcComponentPublicInstance<VcNavigationProps>;
