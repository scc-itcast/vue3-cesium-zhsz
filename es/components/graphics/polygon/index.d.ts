import type { VcCallbackPropertyFunction, VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcDistanceDisplayCondition, VcMaterial, VcPolygonHierarchy, VcReadyObject } from 'vue-cesium/es/utils/types';
export declare const polygonGraphicsProps: {
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
    arcType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    closeBottom: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    closeTop: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    perPositionHeight: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
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
    stRotation: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    extrudedHeightReference: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    extrudedHeight: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    heightReference: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    };
    height: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    hierarchy: {
        type: import("vue").PropType<VcPolygonHierarchy>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makePolygonHierarchy;
            deep: boolean;
            exclude: string;
        };
    };
    show: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
};
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
    arcType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    closeBottom: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    closeTop: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    perPositionHeight: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
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
    stRotation: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    extrudedHeightReference: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    extrudedHeight: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    heightReference: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    };
    height: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    hierarchy: {
        type: import("vue").PropType<VcPolygonHierarchy>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makePolygonHierarchy;
            deep: boolean;
            exclude: string;
        };
    };
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
    arcType: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    closeBottom: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    closeTop: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    perPositionHeight: {
        type: import("vue").PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
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
    stRotation: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
    extrudedHeightReference: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    extrudedHeight: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    heightReference: {
        type: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    };
    height: import("vue").PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    hierarchy: {
        type: import("vue").PropType<VcPolygonHierarchy>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makePolygonHierarchy;
            deep: boolean;
            exclude: string;
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
}, {
    fill: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    show: boolean;
    stRotation: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    material: VcMaterial;
    outline: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    outlineColor: VcColor;
    outlineWidth: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    arcType: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    closeBottom: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    closeTop: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    perPositionHeight: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
}>;
export default _default;
export declare type VcGraphicsPolygonProps = {
    /**
     * A boolean Property specifying the visibility of the polygon.
     * Default value: true
     */
    show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * A Property specifying the VcPolygonHierarchy.
     */
    hierarchy?: VcPolygonHierarchy;
    /**
     * A numeric Property specifying the altitude of the polygon relative to the ellipsoid surface.
     */
    height?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying what the height is relative to.
     */
    heightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A numeric Property specifying the altitude of the polygon's extruded face relative to the ellipsoid surface.
     */
    extrudedHeight?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying what the extrudedHeight is relative to.
     */
    extrudedHeightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A numeric property specifying the rotation of the polygon texture counter-clockwise from north.
     * Default value: 0.0
     */
    stRotation?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A numeric Property specifying the angular distance between each latitude and longitude point.
     */
    granularity?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A boolean Property specifying whether the polygon is filled with the provided material.
     */
    fill?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * A Property specifying the material used to fill the polygon.
     * Default value: white
     */
    material?: VcMaterial;
    /**
     * A boolean Property specifying whether the polygon is outlined.
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
     * A boolean specifying whether or not the height of each position is used.
     * Default value: false
     */
    perPositionHeight?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * When false, leaves off the top of an extruded polygon open.
     * Default value: true
     */
    closeTop?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * When false, leaves off the bottom of an extruded polygon open.
     * Default value: true
     */
    closeBottom?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>;
    /**
     * The type of line the polygon edges must follow.
     */
    arcType?: number | Cesium.ArcType | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * An enum Property specifying whether the polygon casts or receives shadows from light sources.
     * Default value: Cesium.ShadowMode.DISABLED
     */
    shadows?: number | Cesium.ShadowMode | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A Property specifying at what distance from the camera that this polygon will be displayed.
     */
    distanceDisplayCondition?: VcDistanceDisplayCondition;
    /**
     * An enum Property specifying whether this polygon will classify terrain, 3D Tiles, or both when on the ground.
     * Default value: Cesium.ClassificationType.BOTH
     */
    classificationType?: number | Cesium.ClassificationType | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * A property specifying the zIndex used for ordering ground geometry. Only has an effect if the polygon is constant and neither height or extrudedHeight are specified.
     */
    zIndex?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>;
    /**
     * Triggers before the VcGraphicsPolygon is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the VcGraphicsPolygon is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the VcGraphicsPolygon is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when a property or sub-property is changed or modified.
     */
    onDefinitionChanged?: (property: Cesium.Property) => void;
};
export declare type VcGraphicsPolygonRef = VcComponentPublicInstance<VcGraphicsPolygonProps>;
