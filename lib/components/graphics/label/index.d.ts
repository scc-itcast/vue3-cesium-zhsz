import type { VcCallbackPropertyFunction, VcCartesian2, VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcDistanceDisplayCondition, VcNearFarScalar, VcPosition, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const labelGraphicsProps: {
    disableDepthTestDistance: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    scaleByDistance: {
        type: import("vue").PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    pixelOffsetScaleByDistance: {
        type: import("vue").PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    translucencyByDistance: {
        type: import("vue").PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    outlineWidth: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineColor: {
        type: import("vue").PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    fillColor: {
        type: import("vue").PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    heightReference: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    };
    verticalOrigin: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    horizontalOrigin: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    eyeOffset: {
        type: import("vue").PropType<VcPosition>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
        }; /**
         * A VcPosition Property specifying the eye offset.
         * Default value: { x: 0, y: 0, z: 0 }
         */
    };
    pixelOffset: {
        type: import("vue").PropType<VcCartesian2>;
        default: () => {
            x: number;
            y: number;
        };
        validator: (v: any) => boolean;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    backgroundPadding: {
        type: import("vue").PropType<VcCartesian2>;
        default: () => {
            x: number;
            y: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    backgroundColor: {
        type: import("vue").PropType<VcColor>;
        default: () => {
            x: number;
            y: number;
            z: number;
            w: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    showBackground: {
        type: (ObjectConstructor | FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
    scale: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    labelStyle: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    font: {
        type: import("vue").PropType<string | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: string;
    };
    text: import("vue").PropType<string | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
};
declare const _default: import("vue").DefineComponent<{
    disableDepthTestDistance: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    scaleByDistance: {
        type: import("vue").PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    pixelOffsetScaleByDistance: {
        type: import("vue").PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    translucencyByDistance: {
        type: import("vue").PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    outlineWidth: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineColor: {
        type: import("vue").PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    fillColor: {
        type: import("vue").PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    heightReference: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    };
    verticalOrigin: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    horizontalOrigin: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    eyeOffset: {
        type: import("vue").PropType<VcPosition>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
        }; /**
         * A VcPosition Property specifying the eye offset.
         * Default value: { x: 0, y: 0, z: 0 }
         */
    };
    pixelOffset: {
        type: import("vue").PropType<VcCartesian2>;
        default: () => {
            x: number;
            y: number;
        };
        validator: (v: any) => boolean;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    backgroundPadding: {
        type: import("vue").PropType<VcCartesian2>;
        default: () => {
            x: number;
            y: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    backgroundColor: {
        type: import("vue").PropType<VcColor>;
        default: () => {
            x: number;
            y: number;
            z: number;
            w: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    showBackground: {
        type: (ObjectConstructor | FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
    scale: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    labelStyle: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    font: {
        type: import("vue").PropType<string | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: string;
    };
    text: import("vue").PropType<string | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disableDepthTestDistance: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    scaleByDistance: {
        type: import("vue").PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    pixelOffsetScaleByDistance: {
        type: import("vue").PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    translucencyByDistance: {
        type: import("vue").PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    outlineWidth: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineColor: {
        type: import("vue").PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    fillColor: {
        type: import("vue").PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    heightReference: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    };
    verticalOrigin: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    horizontalOrigin: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    eyeOffset: {
        type: import("vue").PropType<VcPosition>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
        }; /**
         * A VcPosition Property specifying the eye offset.
         * Default value: { x: 0, y: 0, z: 0 }
         */
    };
    pixelOffset: {
        type: import("vue").PropType<VcCartesian2>;
        default: () => {
            x: number;
            y: number;
        };
        validator: (v: any) => boolean;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    backgroundPadding: {
        type: import("vue").PropType<VcCartesian2>;
        default: () => {
            x: number;
            y: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    backgroundColor: {
        type: import("vue").PropType<VcColor>;
        default: () => {
            x: number;
            y: number;
            z: number;
            w: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    showBackground: {
        type: (ObjectConstructor | FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
    scale: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    labelStyle: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    font: {
        type: import("vue").PropType<string | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: string;
    };
    text: import("vue").PropType<string | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
}, {
    show: boolean;
    outlineColor: VcColor;
    outlineWidth: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    pixelOffset: VcCartesian2;
    labelStyle: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    backgroundColor: VcColor;
    scale: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    font: string | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    verticalOrigin: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    horizontalOrigin: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    eyeOffset: VcPosition;
    fillColor: VcColor;
    backgroundPadding: VcCartesian2;
    showBackground: boolean | Function | Record<string, any>;
}>;
export default _default;
export declare type VcGraphicsLabelProps = {
    /**
     * A boolean Property specifying the visibility of the label.
     * Default value: true
     */
    show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * A Property specifying the text. Explicit newlines '\n' are supported.
     */
    text?: string | Cesium.CallbackProperty | VcCallbackPropertyFunction<string>;
    /**
     * A Property specifying the CSS font.
     * Default value: 30px sans-serif
     */
    font?: string | Cesium.CallbackProperty | VcCallbackPropertyFunction<string>;
    /**
     * A Property specifying the LabelStyle.
     * Default value: Cesium.LabelStyle.FILL
     */
    labelStyle?: number | Cesium.LabelStyle | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A numeric Property specifying the scale to apply to the text.
     * Default value: 1.0
     */
    scale?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A boolean Property specifying the visibility of the background behind the label.
     * Default value: false
     */
    showBackground?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * A Property specifying the background Color.
     * Default value: { x: 0.165, y: 0.165, z: 0.165, w: 0.8 }
     */
    backgroundColor?: VcColor;
    /**
     * A VcCartesian2 Property specifying the horizontal and vertical background padding in pixels.
     * Default value: { x: 7, y: 5 }
     */
    backgroundPadding?: VcCartesian2;
    /**
     * A VcCartesian2 Property specifying the pixel offset.
     * Default value: { x: 0, y: 0 }
     */
    pixelOffset?: VcCartesian2;
    /**
     * A VcPosition Property specifying the eye offset.
     * Default value: { x: 0, y: 0, z: 0 }
     */
    eyeOffset?: VcPosition;
    /**
     * A Property specifying the HorizontalOrigin.
     * Default value: HorizontalOrigin.CENTER
     */
    horizontalOrigin?: number | Cesium.HorizontalOrigin | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying the VerticalOrigin.
     * Default value: VerticalOrigin.CENTER
     */
    verticalOrigin?: number | Cesium.VerticalOrigin | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying what the height is relative to.
     * Default value: HeightReference.NONE
     */
    heightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying the fill Color.
     * Default value: white
     */
    fillColor?: VcColor;
    /**
     * A Property specifying the Color of the outline.
     * Default value: black
     */
    outlineColor?: VcColor;
    /**
     * A numeric Property specifying the width of the outline.
     * Default value: 1.0
     */
    outlineWidth?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A VcNearFarScalar Property used to set translucency based on distance from the camera.
     */
    translucencyByDistance?: VcNearFarScalar;
    /**
     * A VcNearFarScalar Property used to set pixelOffset based on distance from the camera.
     */
    pixelOffsetScaleByDistance?: VcNearFarScalar;
    /**
     * A VcNearFarScalar Property used to set scale based on distance from the camera.
     */
    scaleByDistance?: VcNearFarScalar;
    /**
     * A Property specifying at what distance from the camera that this label will be displayed.
     */
    distanceDisplayCondition?: VcDistanceDisplayCondition;
    /**
     * A Property specifying the distance from the camera at which to disable the depth test to.
     */
    disableDepthTestDistance?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * Triggers before the VcGraphicsLabel is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGraphicsLabel is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGraphicsLabel is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when a property or sub-property is changed or modified.
     */
    onDefinitionChanged?: (property: Cesium.Property) => void;
};
export declare type VcGraphicsLabelRef = VcComponentPublicInstance<VcGraphicsLabelProps>;
