import type { VcCallbackPropertyFunction, VcCartesian3Array, VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcDistanceDisplayCondition, VcMaterial, VcReadyObject } from 'vue-cesium/es/utils/types';
declare const _default: import("vue").DefineComponent<{
    zIndex: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    classificationType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<Cesium.ClassificationType>>;
    };
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    shadows: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
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
    outline: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    material: {
        type: import("vue").PropType<VcMaterial>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeMaterial;
        };
    };
    fill: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    granularity: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    cornerType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    extrudedHeightReference: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    extrudedHeight: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    heightReference: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    };
    height: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    width: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    positions: {
        type: import("vue").PropType<VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3Array;
            exclude: string;
            deep: boolean;
        };
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    definitionChanged: (property: Cesium.Property) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    zIndex: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    classificationType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<Cesium.ClassificationType>>;
    };
    distanceDisplayCondition: {
        type: import("vue").PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeDistanceDisplayCondition;
        };
    };
    shadows: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
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
    outline: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    material: {
        type: import("vue").PropType<VcMaterial>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeMaterial;
        };
    };
    fill: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    granularity: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    cornerType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    extrudedHeightReference: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    extrudedHeight: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    heightReference: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    };
    height: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    width: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    positions: {
        type: import("vue").PropType<VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian3Array;
            exclude: string;
            deep: boolean;
        };
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onDefinitionChanged?: (property: Cesium.Property) => any;
}, {
    fill: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    show: boolean;
    material: VcMaterial;
    outline: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    outlineColor: VcColor;
    outlineWidth: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    cornerType: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
}>;
export default _default;
export declare type VcGraphicsCorridorProps = {
    /**
     * A boolean Property specifying the visibility of the corridor.
     */
    show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * A Property specifying the array of VcCartesian3Array positions that define the centerline of the corridor.
     */
    positions?: VcCartesian3Array;
    /**
     * A numeric Property specifying the distance between the edges of the corridor.
     */
    width?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A numeric Property specifying the altitude of the corridor relative to the ellipsoid surface.
     */
    height?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying what the height is relative to.
     */
    heightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A numeric Property specifying the altitude of the corridor's extruded face relative to the ellipsoid surface.
     */
    extrudedHeight?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying what the extrudedHeight is relative to.
     */
    extrudedHeightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A CornerType Property specifying the style of the corners.
     */
    cornerType?: number | Cesium.CornerType | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A numeric Property specifying the distance between each latitude and longitude.
     */
    granularity?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A boolean Property specifying whether the corridor is filled with the provided material.
     * Default value: true
     */
    fill?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * A Property specifying the material used to fill the corridor.
     * Default value: white
     */
    material?: VcMaterial;
    /**
     * A boolean Property specifying whether the corridor is outlined.
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
     * Default value: 1.0
     */
    outlineWidth?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * An enum Property specifying whether the corridor casts or receives shadows from light sources.
     * Default value: Cesium.ShadowMode.DISABLED
     */
    shadows?: number | Cesium.ShadowMode | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying at what distance from the camera that this corridor will be displayed.
     */
    distanceDisplayCondition?: VcDistanceDisplayCondition;
    /**
     * An enum Property specifying whether this corridor will classify terrain, 3D Tiles, or both when on the ground.
     * Deault value: Cesium.ClassificationType.BOTH
     */
    classificationType?: number | Cesium.ShadowMode | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying the zIndex of the corridor, used for ordering. Only has an effect if height and extrudedHeight are undefined, and if the corridor is static.
     */
    zIndex?: number;
    /**
     * Triggers before the VcGraphicsCorridor is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGraphicsCorridor is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGraphicsCorridor is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when a property or sub-property is changed or modified.
     */
    onDefinitionChanged?: (property: Cesium.Property) => void;
};
export declare type VcGraphicsCorridorRef = VcComponentPublicInstance<VcGraphicsCorridorProps>;
