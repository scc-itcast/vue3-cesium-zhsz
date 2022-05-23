import { PropType } from 'vue';
import type { VcCallbackPropertyFunction, VcCartesian2, VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcDistanceDisplayCondition, VcMaterial, VcPlane, VcReadyObject } from 'vue-cesium/es/utils/types';
import { makeCartesian2 } from 'vue-cesium/es/utils/cesium-helpers';
export declare const planeGraphicsProps: {
    distanceDisplayCondition: {
        type: PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("vue-cesium/es/utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    shadows: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    outlineWidth: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineColor: {
        type: PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("vue-cesium/es/utils/cesium-helpers").makeColor;
        };
    };
    outline: {
        type: PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    material: {
        type: PropType<VcMaterial>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("vue-cesium/es/utils/cesium-helpers").makeMaterial;
        };
    };
    fill: {
        type: PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    dimensions: {
        type: PropType<VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
    plane: {
        type: PropType<VcPlane>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("vue-cesium/es/utils/cesium-helpers").makePlane;
        };
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
};
declare const _default: import("vue").DefineComponent<{
    distanceDisplayCondition: {
        type: PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("vue-cesium/es/utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    shadows: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    outlineWidth: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineColor: {
        type: PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("vue-cesium/es/utils/cesium-helpers").makeColor;
        };
    };
    outline: {
        type: PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    material: {
        type: PropType<VcMaterial>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("vue-cesium/es/utils/cesium-helpers").makeMaterial;
        };
    };
    fill: {
        type: PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    dimensions: {
        type: PropType<VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
    plane: {
        type: PropType<VcPlane>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("vue-cesium/es/utils/cesium-helpers").makePlane;
        };
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    distanceDisplayCondition: {
        type: PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("vue-cesium/es/utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    shadows: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    outlineWidth: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    outlineColor: {
        type: PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("vue-cesium/es/utils/cesium-helpers").makeColor;
        };
    };
    outline: {
        type: PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    material: {
        type: PropType<VcMaterial>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("vue-cesium/es/utils/cesium-helpers").makeMaterial;
        };
    };
    fill: {
        type: PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    dimensions: {
        type: PropType<VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
    plane: {
        type: PropType<VcPlane>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("vue-cesium/es/utils/cesium-helpers").makePlane;
        };
    };
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
}, {
    fill: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    show: boolean;
    material: VcMaterial;
    outline: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    outlineColor: VcColor;
    outlineWidth: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
}>;
export default _default;
export declare type VcGraphicsPlaneProps = {
    /**
     * A boolean Property specifying the visibility of the plane.
     * Default value: true
     */
    show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * A VcPlane Property specifying the normal and distance for the plane.
     */
    plane?: VcPlane;
    /**
     * A VcCartesian2 Property specifying the width and height of the plane.
     */
    dimensions?: VcCartesian2;
    /**
     * A boolean Property specifying whether the plane is filled with the provided material.
     * Default Value: true
     */
    fill?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * A Property specifying the material used to fill the plane.
     * Default value: white
     */
    material?: VcMaterial;
    /**
     * A boolean Property specifying whether the plane is outlined.
     * Default value: false
     */
    outline?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * A Property specifying the Color of the outline.
     * Default value: black
     */
    outlineColor?: VcColor;
    /**
     * A numeric Property specifying the width of the outline.
     * Note: This property will be ignored on all major browsers on Windows platforms. For details, see (@link https://github.com/CesiumGS/cesium/issues/40}.
     * Default value: 1.0
     */
    outlineWidth?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * An enum Property specifying whether the plane casts or receives shadows from light sources.
     * Default value: ShadowMode.DISABLED
     */
    shadows?: number | Cesium.ShadowMode | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying at what distance from the camera that this plane will be displayed.
     */
    distanceDisplayCondition?: VcDistanceDisplayCondition;
    /**
     * Triggers before the VcGraphicsPlane is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGraphicsPlane is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGraphicsPlane is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when a property or sub-property is changed or modified.
     */
    onDefinitionChanged?: (property: Cesium.Property) => void;
};
export declare type VcGraphicsPlaneRef = VcComponentPublicInstance<VcGraphicsPlaneProps>;
