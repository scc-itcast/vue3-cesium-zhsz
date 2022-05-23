import type { VcBoundingRectangle, VcCallbackPropertyFunction, VcCartesian2, VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcDistanceDisplayCondition, VcNearFarScalar, VcPosition, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const billboarGraphicsProps: {
    imageSubRegion: {
        type: import("vue").PropType<VcBoundingRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeBoundingRectangle;
        };
    };
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    disableDepthTestDistance: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
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
    scaleByDistance: {
        type: import("vue").PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    height: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    width: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    sizeInMeters: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    alignedAxis: {
        type: import("vue").PropType<VcPosition>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
        };
    };
    rotation: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    color: {
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
        };
    };
    pixelOffset: {
        type: import("vue").PropType<VcCartesian2>;
        default: () => {
            x: number;
            y: number;
        };
        validator: (v: any) => boolean;
        watcherOptions: {
            /**
             * Triggers before the VcGraphicsBillboard is loaded.
             */
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    scale: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    image: import("vue").PropType<string | Cesium.CallbackProperty | HTMLImageElement | HTMLCanvasElement | VcCallbackPropertyFunction<string>>;
};
declare const _default: import("vue").DefineComponent<{
    imageSubRegion: {
        type: import("vue").PropType<VcBoundingRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeBoundingRectangle;
        };
    };
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    disableDepthTestDistance: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
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
    scaleByDistance: {
        type: import("vue").PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    height: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    width: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    sizeInMeters: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    alignedAxis: {
        type: import("vue").PropType<VcPosition>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
        };
    };
    rotation: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    color: {
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
        };
    };
    pixelOffset: {
        type: import("vue").PropType<VcCartesian2>;
        default: () => {
            x: number;
            y: number;
        };
        validator: (v: any) => boolean;
        watcherOptions: {
            /**
             * Triggers before the VcGraphicsBillboard is loaded.
             */
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    scale: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    image: import("vue").PropType<string | Cesium.CallbackProperty | HTMLImageElement | HTMLCanvasElement | VcCallbackPropertyFunction<string>>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    definitionChanged: (property: Cesium.Property) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    imageSubRegion: {
        type: import("vue").PropType<VcBoundingRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeBoundingRectangle;
        };
    };
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    disableDepthTestDistance: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
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
    scaleByDistance: {
        type: import("vue").PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    height: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    width: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    sizeInMeters: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    alignedAxis: {
        type: import("vue").PropType<VcPosition>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
        };
    };
    rotation: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    color: {
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
        };
    };
    pixelOffset: {
        type: import("vue").PropType<VcCartesian2>;
        default: () => {
            x: number;
            y: number;
        };
        validator: (v: any) => boolean;
        watcherOptions: {
            /**
             * Triggers before the VcGraphicsBillboard is loaded.
             */
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    scale: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    image: import("vue").PropType<string | Cesium.CallbackProperty | HTMLImageElement | HTMLCanvasElement | VcCallbackPropertyFunction<string>>;
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onDefinitionChanged?: (property: Cesium.Property) => any;
}, {
    show: boolean;
    rotation: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    color: VcColor;
    pixelOffset: VcCartesian2;
    scale: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    sizeInMeters: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    alignedAxis: VcPosition;
    verticalOrigin: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    horizontalOrigin: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    eyeOffset: VcPosition;
}>;
export default _default;
export declare type VcGraphicsBillboardProps = {
    /**
     * A boolean Property specifying the visibility of the billboard.
     * Default value: true
     */
    show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * A Property specifying the Image, URI, or Canvas to use for the billboard.
     */
    image?: string | HTMLCanvasElement | Cesium.CallbackProperty | VcCallbackPropertyFunction<string>;
    /**
     * A numeric Property specifying the scale to apply to the image size.
     * Default value: 1.0
     */
    scale?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
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
     * Default value: 0
     */
    horizontalOrigin?: number | Cesium.HorizontalOrigin | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying the VerticalOrigin.
     * Default value: 0
     */
    verticalOrigin?: number | Cesium.VerticalOrigin | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying what the height is relative to.
     */
    heightReference?: number | Cesium.HeightReference | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying the tint Color of the image.
     * Default value: white
     */
    color?: VcColor;
    /**
     * A numeric Property specifying the rotation about the alignedAxis.
     * Default value: 0
     */
    rotation?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A VcPosition Property specifying the unit vector axis of rotation.
     * Default value: { x: 0, y: 0, z: 0 }
     */
    alignedAxis?: VcPosition;
    /**
     * A boolean Property specifying whether this billboard's size should be measured in meters.
     * Default value: false
     */
    sizeInMeters?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * A numeric Property specifying the width of the billboard in pixels, overriding the native size.
     */
    width?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A numeric Property specifying the height of the billboard in pixels, overriding the native size.
     */
    height?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A VcNearFarScalar Property used to scale the point based on distance from the camera.
     */
    scaleByDistance?: VcNearFarScalar;
    /**
     * A VcNearFarScalar Property used to set translucency based on distance from the camera.
     */
    translucencyByDistance?: VcNearFarScalar;
    /**
     * A VcNearFarScalar Property used to set pixelOffset based on distance from the camera.
     */
    pixelOffsetScaleByDistance?: VcNearFarScalar;
    /**
     * A Property specifying a BoundingRectangle that defines a sub-region of the image to use for the billboard, rather than the entire image, measured in pixels from the bottom-left.
     */
    imageSubRegion?: VcBoundingRectangle;
    /**
     * A Property specifying at what distance from the camera that this billboard will be displayed.
     */
    distanceDisplayCondition?: VcDistanceDisplayCondition;
    /**
     * A Property specifying the distance from the camera at which to disable the depth test to.
     */
    disableDepthTestDistance?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * Triggers before the VcGraphicsBillboard is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGraphicsBillboard is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGraphicsBillboard is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when a property or sub-property is changed or modified.
     */
    onDefinitionChanged?: (property: Cesium.Property) => void;
};
export declare type VcGraphicsBillboardRef = VcComponentPublicInstance<VcGraphicsBillboardProps>;
