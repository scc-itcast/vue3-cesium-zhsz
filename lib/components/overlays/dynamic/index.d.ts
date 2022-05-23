import { PropType, ComponentPublicInstance } from 'vue';
import { DynamicOverlayOpts, SampledPosition, TrackViewOpts, VcComponentInternalInstance, VcHeadingPitchRange, VcReadyObject } from 'vue-cesium/es/utils/types';
import DynamicOverlay from 'vue-cesium/es/shared/src/DynamicOverlay';
export declare const dynamicOverlayProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    startTime: {
        type: PropType<string | Cesium.JulianDate | Date>;
    };
    stopTime: {
        type: PropType<string | Cesium.JulianDate | Date>;
    };
    currentTime: {
        type: PropType<string | Cesium.JulianDate | Date>;
    };
    clockRange: {
        type: PropType<number>;
        default: number;
    };
    clockStep: {
        type: PropType<number>;
        default: number;
    };
    shouldAnimate: {
        type: BooleanConstructor;
        default: boolean;
    };
    canAnimate: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiplier: {
        type: NumberConstructor;
        default: number;
    };
    dynamicOverlays: {
        type: PropType<DynamicOverlayOpts[]>;
        default: () => any[];
    };
    defaultInterval: {
        type: NumberConstructor;
        default: number;
    };
    stopArrivedFlag: {
        type: PropType<"position" | "time" | "both" | "or">;
        default: string;
    };
    positionPrecision: {
        type: NumberConstructor;
        default: number;
    };
    timePrecision: {
        type: NumberConstructor;
        default: number;
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
};
declare const emits: {
    'update:currentTime': (currentTime: Cesium.JulianDate) => boolean;
    'update:shouldAnimate': (shouldAnimate: boolean) => boolean;
    'update:canAnimate': (canAnimate: boolean) => boolean;
    'update:clockRange': (clockRange: number | Cesium.ClockRange) => boolean;
    'update:clockStep': (clockStep: number | Cesium.ClockStep) => boolean;
    'update:multiplier': (multiplier: number) => boolean;
    'update:startTime': (startTime: Cesium.JulianDate) => boolean;
    'update:stopTime': (stopTime: Cesium.JulianDate) => boolean;
    onStop: (clock: Cesium.Clock) => boolean;
    stopArrived: (overlay: DynamicOverlay, position: SampledPosition) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
};
declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    startTime: {
        type: PropType<string | Cesium.JulianDate | Date>;
    };
    stopTime: {
        type: PropType<string | Cesium.JulianDate | Date>;
    };
    currentTime: {
        type: PropType<string | Cesium.JulianDate | Date>;
    };
    clockRange: {
        type: PropType<number>;
        default: number;
    };
    clockStep: {
        type: PropType<number>;
        default: number;
    };
    shouldAnimate: {
        type: BooleanConstructor;
        default: boolean;
    };
    canAnimate: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiplier: {
        type: NumberConstructor;
        default: number;
    };
    dynamicOverlays: {
        type: PropType<DynamicOverlayOpts[]>;
        default: () => any[];
    };
    defaultInterval: {
        type: NumberConstructor;
        default: number;
    };
    stopArrivedFlag: {
        type: PropType<"position" | "time" | "both" | "or">;
        default: string;
    };
    positionPrecision: {
        type: NumberConstructor;
        default: number;
    };
    timePrecision: {
        type: NumberConstructor;
        default: number;
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:currentTime': (currentTime: Cesium.JulianDate) => boolean;
    'update:shouldAnimate': (shouldAnimate: boolean) => boolean;
    'update:canAnimate': (canAnimate: boolean) => boolean;
    'update:clockRange': (clockRange: number) => boolean;
    'update:clockStep': (clockStep: number) => boolean;
    'update:multiplier': (multiplier: number) => boolean;
    'update:startTime': (startTime: Cesium.JulianDate) => boolean;
    'update:stopTime': (stopTime: Cesium.JulianDate) => boolean;
    onStop: (clock: Cesium.Clock) => boolean;
    stopArrived: (overlay: DynamicOverlay, position: SampledPosition) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    startTime: {
        type: PropType<string | Cesium.JulianDate | Date>;
    };
    stopTime: {
        type: PropType<string | Cesium.JulianDate | Date>;
    };
    currentTime: {
        type: PropType<string | Cesium.JulianDate | Date>;
    };
    clockRange: {
        type: PropType<number>;
        default: number;
    };
    clockStep: {
        type: PropType<number>;
        default: number;
    };
    shouldAnimate: {
        type: BooleanConstructor;
        default: boolean;
    };
    canAnimate: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiplier: {
        type: NumberConstructor;
        default: number;
    };
    dynamicOverlays: {
        type: PropType<DynamicOverlayOpts[]>;
        default: () => any[];
    };
    defaultInterval: {
        type: NumberConstructor;
        default: number;
    };
    stopArrivedFlag: {
        type: PropType<"position" | "time" | "both" | "or">;
        default: string;
    };
    positionPrecision: {
        type: NumberConstructor;
        default: number;
    };
    timePrecision: {
        type: NumberConstructor;
        default: number;
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onOnStop?: (clock: Cesium.Clock) => any;
    "onUpdate:currentTime"?: (currentTime: Cesium.JulianDate) => any;
    "onUpdate:shouldAnimate"?: (shouldAnimate: boolean) => any;
    "onUpdate:canAnimate"?: (canAnimate: boolean) => any;
    "onUpdate:clockRange"?: (clockRange: number) => any;
    "onUpdate:clockStep"?: (clockStep: number) => any;
    "onUpdate:multiplier"?: (multiplier: number) => any;
    "onUpdate:startTime"?: (startTime: Cesium.JulianDate) => any;
    "onUpdate:stopTime"?: (stopTime: Cesium.JulianDate) => any;
    onStopArrived?: (overlay: DynamicOverlay, position: SampledPosition) => any;
}, {
    show: boolean;
    name: string;
    clockRange: number;
    clockStep: number;
    shouldAnimate: boolean;
    canAnimate: boolean;
    multiplier: number;
    dynamicOverlays: DynamicOverlayOpts[];
    defaultInterval: number;
    stopArrivedFlag: "position" | "time" | "both" | "or";
    positionPrecision: number;
    timePrecision: number;
}>;
export default _default;
export interface VcOverlayDynamicProps {
    /**
     * Specify whether to display the CustomDataSource that hosts the dynamic overlays.
     * Default value: true
     */
    show?: boolean;
    /**
     * Specify the name of the CustomDataSource.
     * Default value: __vc__overlay__dynamic__
     */
    name?: string;
    /**
     * Specify the start time of the clock.
     */
    startTime?: Cesium.JulianDate | string | Date;
    /**
     * Specify the stop time of the clock.
     */
    stopTime?: Cesium.JulianDate | string | Date;
    /**
     * Specify the current time.
     */
    currentTime?: Cesium.JulianDate | string | Date;
    /**
     * Determines how the clock should behave when Clock#startTime or Clock#stopTime is reached.
     * Default value: 0
     */
    clockRange?: number | Cesium.ClockRange;
    /**
     * Determines if calls to Clock#tick are frame dependent or system clock dependent.
     * Default value: 1
     */
    clockStep?: number | Cesium.ClockStep;
    /**
     * Indicates whether Clock#tick should attempt to advance time. The clock will only tick when both Clock#canAnimate and Clock#shouldAnimate are true.
     * Default value: true
     */
    shouldAnimate?: boolean;
    /**
     * Indicates whether Clock#tick can advance time. This could be false if data is being buffered, for example. The clock will only tick when both Clock#canAnimate and Clock#shouldAnimate are true.
     * Default value: true
     */
    canAnimate?: boolean;
    /**
     * Determines how much time advances when Clock#tick is called, negative values allow for advancing backwards.
     * Default value: 1.0
     */
    multiplier?: number;
    /**
     * Specify the dynamicOverlays array.
     */
    dynamicOverlays?: Array<DynamicOverlayOpts>;
    /**
     * Specify the default refresh interval of the default position information, and it is available to change the position of the dynamic overlays in real time.
     * Default value: 3.0
     */
    defaultInterval?: number;
    /**
     * Specify the decision flag for the stopArrived event.
     * Default value: time
     */
    stopArrivedFlag?: 'time' | 'position' | 'both' | 'or';
    /**
     * Specify position accuracy.
     * Default value: 0.0000001
     */
    positionPrecision?: number;
    /**
     * Specify time accuracy.
     * 0.01
     */
    timePrecision?: number;
    /**
     * Triggers before the VcOverlayDynamic is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcOverlayDynamic is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcOverlayDynamic is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when Clock#stopTime is reached.
     */
    onOnStop: (clock: Cesium.Clock) => void;
    /**
     * Triggers when a stop is reached.
     */
    onStopArrived: (overlay: DynamicOverlay, position: SampledPosition) => void;
    /**
     * Triggers when currentTime changed.
     */
    'onUpdate:currentTime'?: (currentTime: Cesium.JulianDate) => void;
    /**
     * Triggers when shouldAnimate changed.
     */
    'onUpdate:shouldAnimate'?: (shouldAnimate: boolean) => void;
    /**
     * Triggers when canAnimate changed.
     */
    'onUpdate:canAnimate'?: (canAnimate: boolean) => void;
    /**
     * Triggers when clockRange changed.
     */
    'onUpdate:clockRange'?: (clockRange: number | Cesium.ClockRange) => void;
    /**
     * Triggers when clockStep changed.
     */
    'onUpdate:clockStep'?: (clockStep: number | Cesium.ClockStep) => void;
    /**
     * Triggers when multiplier changed.
     */
    'onUpdate:multiplier'?: (multiplier: number) => void;
    /**
     * Triggers when startTime changed.
     */
    'onUpdate:startTime'?: (startTime: Cesium.JulianDate) => void;
    /**
     * Triggers when stopTime changed.
     */
    'onUpdate:stopTime'?: (stopTime: Cesium.JulianDate) => void;
}
export declare type VcOverlayDynamicEmits = typeof emits;
export interface VcOverlayDynamicRef extends ComponentPublicInstance<VcOverlayDynamicProps> {
    /**
     * Get overlays.
     */
    getOverlays: () => Array<DynamicOverlay>;
    /**
     *
     * @param trackViewOpts
     * @param trackOverlay
     */
    trackOverlay: (trackViewOpts?: TrackViewOpts, trackOverlay?: DynamicOverlay | string | number) => void;
    /**
     *
     * @param offset
     * @param viewOverlays
     */
    zoomToOverlay: (offset?: VcHeadingPitchRange, viewOverlays?: Array<DynamicOverlay> | Array<number | string>) => Promise<boolean>;
}
