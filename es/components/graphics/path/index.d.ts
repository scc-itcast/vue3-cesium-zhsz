import type { ExtractPropTypes } from 'vue';
import type { VcCallbackPropertyFunction, VcComponentInternalInstance, VcComponentPublicInstance, VcDistanceDisplayCondition, VcMaterial, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const pathGraphicsProps: {
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    material: {
        type: import("vue").PropType<VcMaterial>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeMaterial;
        };
    };
    resolution: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
    width: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    leadTime: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
    trailTime: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
};
declare const _default: import("vue").DefineComponent<{
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    material: {
        type: import("vue").PropType<VcMaterial>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeMaterial;
        };
    };
    resolution: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
    width: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    leadTime: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
    trailTime: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
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
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    material: {
        type: import("vue").PropType<VcMaterial>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeMaterial;
        };
    };
    resolution: {
        type: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
        default: number;
    };
    width: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    leadTime: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
    trailTime: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
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
    material: VcMaterial;
    resolution: number | Function | Record<string, any>;
}>;
export default _default;
export declare type VcGraphicsPathProps = {
    /**
     * A boolean Property specifying the visibility of the path.
     * Default value: true
     */
    show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * A Property specifying the number of seconds in front the object to show.
     */
    leadTime?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying the number of seconds behind of the object to show.
     */
    trailTime?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A numeric Property specifying the width in pixels.
     * Default value: 1.0
     */
    width?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * Gets or sets the Property specifying whether the box is outlined.
     * Default value: 60
     */
    resolution?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying the material used to draw the path.
     * Default value: white
     */
    material?: VcMaterial;
    /**
     * A Property specifying at what distance from the camera that this path will be displayed.
     */
    distanceDisplayCondition?: VcDistanceDisplayCondition;
    /**
     * Triggers before the VcGraphicsPath is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGraphicsPath is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGraphicsPath is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when a property or sub-property is changed or modified.
     */
    onDefinitionChanged?: (property: Cesium.Property) => void;
};
export declare type VcGraphicsPathRef = VcComponentPublicInstance<VcGraphicsPathProps>;
