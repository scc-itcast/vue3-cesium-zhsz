import type { VcPickEvent, VcColor, VcComponentInternalInstance, VcDistanceDisplayCondition, VcNearFarScalar, VcPosition, VcReadyObject, VcComponentPublicInstance } from 'vue-cesium/es/utils/types';
export declare const pointProps: {
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    translucencyByDistance: {
        type: import("vue").PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    scaleByDistance: {
        type: import("vue").PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    position: {
        type: import("vue").PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    pixelSize: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineWidth: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineColor: {
        type: import("vue").PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    id: import("vue").PropType<any>;
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    disableDepthTestDistance: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    color: {
        type: import("vue").PropType<VcColor>;
        default: string; /**
         * Specify the outline width in pixels. This width adds to pixelSize, increasing the total size of the point.
         * Default value: 1.0
         */
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
};
declare const _default: import("vue").DefineComponent<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    translucencyByDistance: {
        type: import("vue").PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    scaleByDistance: {
        type: import("vue").PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    position: {
        type: import("vue").PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    pixelSize: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineWidth: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineColor: {
        type: import("vue").PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    id: import("vue").PropType<any>;
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    disableDepthTestDistance: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    color: {
        type: import("vue").PropType<VcColor>;
        default: string; /**
         * Specify the outline width in pixels. This width adds to pixelSize, increasing the total size of the point.
         * Default value: 1.0
         */
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    mousedown: (evt: VcPickEvent) => boolean;
    mouseup: (evt: VcPickEvent) => boolean;
    click: (evt: VcPickEvent) => boolean;
    clickout: (evt: VcPickEvent) => boolean;
    dblclick: (evt: VcPickEvent) => boolean;
    mousemove: (evt: VcPickEvent) => boolean;
    mouseover: (evt: VcPickEvent) => boolean;
    mouseout: (evt: VcPickEvent) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    translucencyByDistance: {
        type: import("vue").PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    scaleByDistance: {
        type: import("vue").PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeNearFarScalar;
        };
    };
    position: {
        type: import("vue").PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3;
            deep: boolean;
        };
    };
    pixelSize: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineWidth: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineColor: {
        type: import("vue").PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    id: import("vue").PropType<any>;
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    disableDepthTestDistance: import("vue").PropType<number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>>;
    color: {
        type: import("vue").PropType<VcColor>;
        default: string; /**
         * Specify the outline width in pixels. This width adds to pixelSize, increasing the total size of the point.
         * Default value: 1.0
         */
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onMousedown?: (evt: VcPickEvent) => any;
    onMouseup?: (evt: VcPickEvent) => any;
    onClick?: (evt: VcPickEvent) => any;
    onClickout?: (evt: VcPickEvent) => any;
    onDblclick?: (evt: VcPickEvent) => any;
    onMousemove?: (evt: VcPickEvent) => any;
    onMouseover?: (evt: VcPickEvent) => any;
    onMouseout?: (evt: VcPickEvent) => any;
}, {
    show: boolean;
    outlineColor: VcColor;
    outlineWidth: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
    color: VcColor;
    enableMouseEvent: boolean;
    pixelSize: number | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<number>;
}>;
export default _default;
export declare type VcPointProps = {
    /**
     * Specify the inner color of the point.
     * Default value: white
     */
    color?: VcColor;
    /**
     * Specify the distance from the camera at which to disable the depth test to, for example, prevent clipping against terrain. When set to zero, the depth test is always applied. When set to Number.POSITIVE_INFINITY, the depth test is never applied.
     */
    disableDepthTestDistance?: number;
    /**
     * Specify the condition specifying at what distance from the camera that this point will be displayed.
     */
    distanceDisplayCondition?: VcDistanceDisplayCondition;
    /**
     * Specify the user-defined value returned when the point is picked.
     */
    id?: any;
    /**
     * Specify the outline color of the point.
     * Default value: black
     */
    outlineColor?: VcColor;
    /**
     * Specify the outline width in pixels. This width adds to pixelSize, increasing the total size of the point.
     * Default value: 1.0
     */
    outlineWidth?: number;
    /**
     * Specify the inner size of the point in pixels.
     * Default value: 0.0
     */
    pixelSize?: number;
    /**
     * Specify the position of this point.
     */
    position?: VcPosition;
    /**
     * Specify the near and far scaling properties of a point based on the point's distance from the camera. A point's scale will interpolate between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the lower and upper bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the point's scale remains clamped to the nearest bound. This scale multiplies the pixelSize and outlineWidth to affect the total size of the point. If undefined, scaleByDistance will be disabled.
     */
    scaleByDistance?: VcNearFarScalar;
    /**
     * Determines if this point will be shown. Use this to hide or show a point, instead of removing it and re-adding it to the collection.
     */
    show?: boolean;
    /**
     * Specify the near and far translucency properties of a point based on the point's distance from the camera. A point's translucency will interpolate between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the lower and upper bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the point's translucency remains clamped to the nearest bound. If undefined, translucencyByDistance will be disabled.
     */
    translucencyByDistance?: VcNearFarScalar;
    /**
     * Specifies whether to respond to mouse pick events.
     * Default Value: true
     */
    enableMouseEvent?: boolean;
    /**
     * Triggers before the VcPoint is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcPoint is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcPoint is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the mouse is pressed on this point.
     */
    onMousedown?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse bounces up on this point.
     */
    onMouseup?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse clicks on this point.
     */
    onClick?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse clicks outside this point.
     */
    onClickout?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the left mouse button double-clicks this point.
     */
    onDblclick?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves on this point.
     */
    onMousemove?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves over to this point.
     */
    onMouseover?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves out of this point.
     */
    onMouseout?: (evt: VcPickEvent) => void;
};
export declare type VcPointRef = VcComponentPublicInstance<VcPointProps>;
