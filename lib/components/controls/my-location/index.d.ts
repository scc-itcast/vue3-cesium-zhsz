import type { VNode } from 'vue';
import { VcTooltipProps } from 'vue-cesium/es/components/ui';
import type { VcLocationEvt, VcColor, VcComponentInternalInstance, VcReadyObject, VcComponentPublicInstance } from 'vue-cesium/es/utils/types';
declare const emits: {
    locationEvt: (evt: VcLocationEvt) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
};
export declare const myLocationProps: {
    icon: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: StringConstructor;
    stack: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: import("vue").PropType<false | VcTooltipProps>;
        default: () => false | VcTooltipProps;
    };
    loadingType: {
        type: StringConstructor;
        default: string;
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
    geolocation: {
        type: import("vue").PropType<PositionOptions>;
        default: () => PositionOptions;
    };
    amap: import("vue").PropType<{
        key: string;
        version: string;
        options: {
            timeout?: number;
            convert?: false;
            noGeoLocation?: 0 | 1 | 2 | 3;
            needAddress?: boolean;
            extensions?: "all" | "base";
        };
        transformToWGS84?: boolean;
    }>;
    id: {
        type: StringConstructor;
        default: string;
    };
    pointColor: {
        type: import("vue").PropType<VcColor>;
        default: string;
    };
    pixelSize: {
        type: NumberConstructor;
        default: number;
    };
    outlineWidth: {
        type: NumberConstructor;
        default: number;
    };
    outlineColor: {
        type: import("vue").PropType<VcColor>;
        default: string;
    };
    level: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    factor: {
        type: NumberConstructor;
        default: number;
    };
    maximumHeight: NumberConstructor;
    hpr: {
        type: import("vue").PropType<[number, number, number]>;
        default: () => number[];
    };
    customAPI: import("vue").PropType<(errorCallback: any) => {
        lng: number;
        lat: number;
    }>;
    description: import("vue").PropType<(position: any, detail: any) => string>;
};
declare const _default: import("vue").DefineComponent<{
    icon: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: StringConstructor;
    stack: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: import("vue").PropType<false | VcTooltipProps>;
        default: () => false | VcTooltipProps;
    };
    loadingType: {
        type: StringConstructor;
        default: string;
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
    geolocation: {
        type: import("vue").PropType<PositionOptions>;
        default: () => PositionOptions;
    };
    amap: import("vue").PropType<{
        key: string;
        version: string;
        options: {
            timeout?: number;
            convert?: false;
            noGeoLocation?: 0 | 1 | 2 | 3;
            needAddress?: boolean;
            extensions?: "all" | "base";
        };
        transformToWGS84?: boolean;
    }>;
    id: {
        type: StringConstructor;
        default: string;
    };
    pointColor: {
        type: import("vue").PropType<VcColor>;
        default: string;
    };
    pixelSize: {
        type: NumberConstructor;
        default: number;
    };
    outlineWidth: {
        type: NumberConstructor;
        default: number;
    };
    outlineColor: {
        type: import("vue").PropType<VcColor>;
        default: string;
    };
    level: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    factor: {
        type: NumberConstructor;
        default: number;
    };
    maximumHeight: NumberConstructor;
    hpr: {
        type: import("vue").PropType<[number, number, number]>;
        default: () => number[];
    };
    customAPI: import("vue").PropType<(errorCallback: any) => {
        lng: number;
        lat: number;
    }>;
    description: import("vue").PropType<(position: any, detail: any) => string>;
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    locationEvt: (evt: VcLocationEvt) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: StringConstructor;
    stack: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: import("vue").PropType<false | VcTooltipProps>;
        default: () => false | VcTooltipProps;
    };
    loadingType: {
        type: StringConstructor;
        default: string;
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
    geolocation: {
        type: import("vue").PropType<PositionOptions>;
        default: () => PositionOptions;
    };
    amap: import("vue").PropType<{
        key: string;
        version: string;
        options: {
            timeout?: number;
            convert?: false;
            noGeoLocation?: 0 | 1 | 2 | 3;
            needAddress?: boolean;
            extensions?: "all" | "base";
        };
        transformToWGS84?: boolean;
    }>;
    id: {
        type: StringConstructor;
        default: string;
    };
    pointColor: {
        type: import("vue").PropType<VcColor>;
        default: string;
    };
    pixelSize: {
        type: NumberConstructor;
        default: number;
    };
    outlineWidth: {
        type: NumberConstructor;
        default: number;
    };
    outlineColor: {
        type: import("vue").PropType<VcColor>;
        default: string;
    };
    level: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    factor: {
        type: NumberConstructor;
        default: number;
    };
    maximumHeight: NumberConstructor;
    hpr: {
        type: import("vue").PropType<[number, number, number]>;
        default: () => number[];
    };
    customAPI: import("vue").PropType<(errorCallback: any) => {
        lng: number;
        lat: number;
    }>;
    description: import("vue").PropType<(position: any, detail: any) => string>;
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onLocationEvt?: (evt: VcLocationEvt) => any;
}, {
    level: number;
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top" | "right" | "bottom" | "left";
    outlineColor: VcColor;
    outlineWidth: number;
    color: string;
    tooltip: false | VcTooltipProps;
    id: string;
    round: boolean;
    flat: boolean;
    icon: string;
    duration: number;
    background: string;
    size: string;
    stack: boolean;
    loadingType: string;
    geolocation: PositionOptions;
    pointColor: VcColor;
    pixelSize: number;
    factor: number;
    hpr: [number, number, number];
}>;
export default _default;
export declare type VcMyLocationEmits = typeof emits;
export declare type VcMyLocationProps = {
    /**
     * Specify the position of the VcDistanceLegend.
     * Default value: top-right
     */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left';
    /**
     * An array of two numbers to offset the VcDistanceLegend horizontally and vertically in pixels.
     * Default value: [0, 0]
     */
    offset?: [number, number];
    /**
     * Specify the browser geolocation positioning parameters.
     * Default value:
     * {
     *    enableHighAccuracy: true,
     *    timeout: 5000,
     *    maximumAge: 0
     * }
     */
    geolocation?: PositionOptions;
    /**
     * Specify the AMap positioning parameters. If set, use AMap api positioning first.
     */
    amap?: {
        key: string;
        version: string;
        options: {
            timeout?: number;
            convert?: false;
            noGeoLocation?: 0 | 1 | 2 | 3;
            needAddress?: boolean;
            extensions?: 'all' | 'base';
        };
        transformToWGS84?: boolean;
    };
    /**
     * Specify the id of the location point after the positioning is successful.
     */
    id?: string;
    /**
     * Specify the color of the location point after the positioning is successful.
     * Default value: #08ABD5
     */
    pointColor?: VcColor;
    /**
     * Specify the pixel size of the location point after the positioning is successful.
     * Default value: 12
     */
    pixelSize?: number;
    /**
     * Specify the outline width of the location point after the positioning is successful.
     * Default value: 3
     */
    outlineWidth?: number;
    /**
     * Specify the outline color of the location point after the positioning is successful.
     * Default value: #fff
     */
    outlineColor?: VcColor;
    /**
     * Specify the sampling level when the altitude is automatically recognized based on the terrain after the positioning is successful.
     * Default value: 6
     */
    level?: number;
    /**
     * Specify the time to fly to the location point.
     * Default value: 3
     */
    duration?: number;
    /**
     * Specify the factor by which the anchor point is converted to a rectangle.
     * Default: 0.01
     */
    factor?: number;
    /**
     * The maximum height at the peak of the flight.
     */
    maximumHeight?: number;
    /**
     * The offset from the target in the local east-north-up reference frame centered at the target. 2D or Columbus view works.
     */
    hpr?: [number, number, number];
    /**
     * Specify a custom API for positioning.
     */
    customAPI?: (errorCallback: any) => {
        lng: number;
        lat: number;
    };
    /**
     * Specify the description of the location point
     */
    description?: (position: any, detail: any) => string;
    /**
     * Specify the icon of the VcMyLocation.
     * Default value: vc-icons-geolocation
     */
    icon?: string;
    /**
     * Specify the size of the VcMyLocation.
     * Default value: 24px
     */
    size?: string;
    /**
     * Specify the css color of the VcMyLocation.
     * Default value: #3f4854
     */
    color?: string;
    /**
     * Specify the css background of the VcMyLocation.
     * Default value: #fff
     */
    background?: string;
    /**
     * Makes a circle shaped VcMyLocation.
     */
    round?: boolean;
    /**
     * Use 'flat' design.
     */
    flat?: boolean;
    /**
     * The text that will be shown on the VcMyLocation.
     */
    label?: string;
    /**
     * Stack icon and label vertically instead of on same line.
     */
    stack?: boolean;
    /**
     * The tooltip parameter.
     */
    tooltip?: false | VcTooltipProps;
    loadingType?: string;
    /**
     * Triggers before the VcCompass is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcCompass is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcCompass is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the positioning button is clicked.
     */
    onLocationEvt?: (evt: VcLocationEvt) => void;
};
export declare type VcMyLocationRef = VcComponentPublicInstance<VcMyLocationProps>;
