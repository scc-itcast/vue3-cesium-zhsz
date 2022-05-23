import { makeDistanceDisplayCondition, makeCartesian2, makeCartesian2Array, makeCartesian3, makeColor, makeColors, makeNearFarScalar, makeMaterial, makeCartesian3Array, makeRectangle, makeBoundingRectangle, makePlane, makePolygonHierarchy, makeTranslationRotationScale, makeQuaternion, makeOptions, makeAppearance } from './cesium-helpers';
import type { PropType } from 'vue';
import type { VcPosition, VcRectangle, VcAppearance, VcColor, ProjectionTransforms, VcCallbackPropertyFunction, VcDistanceDisplayCondition, VcCartesian2, VcCartesian3Array, VcCartesian2Array, VcNearFarScalar, VcPolygonHierarchy, VcMaterial, VcBoundingRectangle, VcPlane } from './types';
/**
 * @const {Object, Array, Function}  position mixin
 * 坐标位置属性。
 * @example
 * :position = { lng: number, lat: number, height: number }
 * :position = { x: number, y: number, z: number }
 * :position = [number, number, number]
 */
declare const position: {
    /**
     * A Property specifying the entity position.
     */
    position: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
            deep: boolean;
        };
    };
};
declare const viewFrom: {
    /**
     * A suggested initial offset for viewing this object.
     */
    viewFrom: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
            deep: boolean;
        };
    };
};
/**
 * @const {Object, Array, Function} orientation mixin
 */
declare const orientation: {
    orientation: {
        type: PropType<Cesium.Quaternion>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeQuaternion;
        };
    };
};
/**
 * @const {Object, Array, Function} alignedAxis mixin
 */
declare const alignedAxis: {
    alignedAxis: {
        type: PropType<VcPosition>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
        };
    };
};
/**
 * @const {Object, String, Array, Function} color mixin
 */
declare const color: {
    color: {
        type: PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
declare const depthFailColor: {
    depthFailColor: {
        type: PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
/**
 * @const {Number, Object, Function} disableDepthTestDistance mixin
 */
declare const disableDepthTestDistance: {
    disableDepthTestDistance: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
};
/**
 * @const {Object, Array, Function}  distanceDisplayCondition mixin
 */
declare const distanceDisplayCondition: {
    distanceDisplayCondition: {
        type: PropType<VcDistanceDisplayCondition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeDistanceDisplayCondition;
        };
    };
};
/**
 * @const {Object, Array, Function}  eyeOffset mixin
 */
declare const eyeOffset: {
    eyeOffset: {
        type: PropType<VcPosition>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
        };
    };
};
/**
 * @const {Number, Object, Function} height mixin
 */
declare const height: {
    height: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
};
/**
 * @const {Number, Object, Function} heightReference mixin
 */
declare const heightReference: {
    heightReference: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
    };
};
/**
 * @const {Number, Object, Function} horizontalOrigin mixin
 */
declare const horizontalOrigin: {
    horizontalOrigin: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {String, Object, HTMLCanvasElement, Function} image mixin
 */
declare const image: {
    image: PropType<string | Cesium.CallbackProperty | HTMLImageElement | HTMLCanvasElement | VcCallbackPropertyFunction<string>>;
};
/**
 * @const {Object, Array, Function} imageSubRegion mixin
 */
declare const imageSubRegion: {
    imageSubRegion: {
        type: PropType<VcBoundingRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeBoundingRectangle;
        };
    };
};
/**
 * @const {Object, Array, Function}  pixelOffset mixin
 */
declare const pixelOffset: {
    pixelOffset: {
        type: PropType<VcCartesian2>;
        default: () => {
            x: number;
            y: number;
        };
        validator: (v: any) => boolean;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
};
/**
 * @const {Object, Array, Function} pixelOffsetScaleByDistance mixin
 */
declare const pixelOffsetScaleByDistance: {
    pixelOffsetScaleByDistance: {
        type: PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeNearFarScalar;
        };
    };
};
/**
 * @const {Number, Object, Function} rotation mixin
 */
declare const rotation: {
    rotation: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Number, Object, Function} scale mixin
 */
declare const scale: {
    scale: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Object, Array, Function} scaleByDistance mixin
 */
declare const scaleByDistance: {
    scaleByDistance: {
        type: PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeNearFarScalar;
        };
    };
};
/**
 * @const {Boolean, Object, Function}  show mixin
 */
declare const show: {
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
};
/**
 * @const {Boolean, Object, Function} sizeInMeters mixin
 */
declare const sizeInMeters: {
    sizeInMeters: {
        type: PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
};
/**
 * @const {Object, Array, Function} translucencyByDistance mixin
 */
declare const translucencyByDistance: {
    translucencyByDistance: {
        type: PropType<VcNearFarScalar>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeNearFarScalar;
        };
    };
};
/**
 * @const {Number, Object, Function}  verticalOrigin mixin
 */
declare const verticalOrigin: {
    verticalOrigin: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Number, Object, Function} width mixin
 */
declare const width: {
    width: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
};
/**
 * @const {Object, Array, Function} dimensions mixin
 * // 和 PlaneGraphics.dimensions 区分
 */
declare const dimensions: {
    dimensions: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
        };
    };
};
/**
 * @const {Boolean, Object, Function} fill mixin
 */
declare const fill: {
    fill: {
        type: PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
};
/**
 * @const {Object, String, Array, Function} material mixin
 */
declare const material: {
    material: {
        type: PropType<VcMaterial>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeMaterial;
        };
    };
};
/**
 * @const {Boolean, Object, Function} outline mixin
 */
declare const outline: {
    outline: {
        type: PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
};
/**
 * @const {Object, String, Array, Function} outlineColor mixin
 */
declare const outlineColor: {
    outlineColor: {
        type: PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
/**
 * @const {Number, Object, Function} outlineWidth mixin
 */
declare const outlineWidth: {
    outlineWidth: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Number, Object, Function} shadows mixin
 */
declare const shadows: {
    shadows: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
};
/**
 * @const {Array, Object, Function} positions mixin
 */
declare const positions: {
    positions: {
        type: PropType<VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3Array;
            exclude: string;
            deep: boolean;
        };
    };
};
/**
 * @const {Number, Object, Function} extrudedHeight mixin
 */
declare const extrudedHeight: {
    extrudedHeight: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
};
/**
 * @const {Number, Object, Function} extrudedHeightReference mixin
 */
declare const extrudedHeightReference: {
    extrudedHeightReference: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
};
/**
 * @const {Number, Object, Function} cornerType mixin
 */
declare const cornerType: {
    cornerType: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Number, Object, Function} granularity mixin
 */
declare const granularity: {
    granularity: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
};
/**
 * @const {Number, Object, Function} classificationType mixin
 */
declare const classificationType: {
    classificationType: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<Cesium.ClassificationType>>;
    };
};
/**
 * @const {Number, Object, Function} zIndex mixin
 */
declare const zIndex: {
    zIndex: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
};
/**
 * @const {Number, Object, Function} length mixin
 */
declare const length: {
    length: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
};
/**
 * @const {Number, Object, Function} topRadius mixin
 */
declare const topRadius: {
    topRadius: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
};
/**
 * @const {Number, Object, Function} bottomRadius mixin
 */
declare const bottomRadius: {
    bottomRadius: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
};
/**
 * @const {Number, Object, Function} numberOfVerticalLines mixin
 */
declare const numberOfVerticalLines: {
    numberOfVerticalLines: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Number, Object, Function} slices mixin
 */
declare const slices: {
    slices: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Number, Object, Function} semiMajorAxis mixin
 */
declare const semiMajorAxis: {
    semiMajorAxis: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
};
/**
 * @const {Number, Object, Function} semiMinorAxis mixin
 */
declare const semiMinorAxis: {
    semiMinorAxis: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
};
/**
 * @const {Number, Object, Function} stRotation mixin
 */
declare const stRotation: {
    stRotation: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Number, Object, Function} radii mixin
 */
declare const radii: {
    radii: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
        };
    };
};
/**
 * @const {Object, Array, Function} innerRadii mixin
 */
declare const innerRadii: {
    innerRadii: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
        };
    };
};
/**
 * @const {Number, Object, Function} minimumClock mixin
 */
declare const minimumClock: {
    minimumClock: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Number, Object, Function} maximumClock mixin
 */
declare const maximumClock: {
    maximumClock: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Number, Object, Function} minimumCone mixin
 */
declare const minimumCone: {
    minimumCone: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Number, Object, Function} maximumCone mixin
 */
declare const maximumCone: {
    maximumCone: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Number, Object, Function} stackPartitions mixin
 */
declare const stackPartitions: {
    stackPartitions: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Number, Object, Function} slicePartitions mixin
 */
declare const slicePartitions: {
    slicePartitions: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Number, Object, Function} subdivisions mixin
 */
declare const subdivisions: {
    subdivisions: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {String, Object, Function} text mixin
 */
declare const text: {
    text: PropType<string | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
};
/**
 * @const {String, Object, Function} font mixin
 */
declare const font: {
    font: {
        type: PropType<string | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: string;
    };
};
/**
 * @const {Number, Object, Function} labelStyle mixin
 */
declare const labelStyle: {
    labelStyle: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Boolean, Object, Function} showBackground mixin
 */
declare const showBackground: {
    showBackground: {
        type: (ObjectConstructor | FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
};
/**
 * @const {Object, String, Array, Function} backgroundColor mixin
 */
declare const backgroundColor: {
    backgroundColor: {
        type: PropType<VcColor>;
        default: () => {
            x: number;
            y: number;
            z: number;
            w: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
/**
 * @const {Object, Array, Function} backgroundPadding mixin
 */
declare const backgroundPadding: {
    backgroundPadding: {
        type: PropType<VcCartesian2>;
        default: () => {
            x: number;
            y: number;
        };
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
};
/**
 * @const {Object, String, Array, Function} fillColor mixin
 */
declare const fillColor: {
    fillColor: {
        type: PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
/**
 * @const {String, Object, Function} uri mixin
 */
declare const uri: {
    uri: PropType<string | Cesium.CallbackProperty | VcCallbackPropertyFunction<string> | Cesium.Resource>;
};
/**
 * @const {Number, Object, Function} minimumPixelSize mixin
 */
declare const minimumPixelSize: {
    minimumPixelSize: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Number, Object, Function} maximumScale mixin
 */
declare const maximumScale: {
    maximumScale: (ObjectConstructor | FunctionConstructor | NumberConstructor)[];
};
/**
 * @const {Boolean, Object, Function} incrementallyLoadTextures mixin
 */
declare const incrementallyLoadTextures: {
    incrementallyLoadTextures: {
        type: PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
};
/**
 * @const {Boolean, Object, Function} clampAnimations mixin
 */
declare const runAnimations: {
    clampAnimations: {
        type: PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
};
/**
 * @const {Boolean, Object, Function} clampAnimations mixin
 */
declare const clampAnimations: {
    clampAnimations: {
        type: PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
};
/**
 * @const {Object, String, Array, Function} silhouetteColor mixin
 */
declare const silhouetteColor: {
    silhouetteColor: {
        type: PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
/**
 * @const {Number, Object, Function} silhouetteSize mixin
 */
declare const silhouetteSize: {
    silhouetteSize: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Number, Object, Function} colorBlendMode mixin
 */
declare const colorBlendMode: {
    colorBlendMode: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Number, Object, Function} colorBlendAmount mixin
 */
declare const colorBlendAmount: {
    colorBlendAmount: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Object, Array, Function} imageBasedLightingFactor mixin
 */
declare const imageBasedLightingFactor: {
    imageBasedLightingFactor: {
        type: PropType<VcCartesian2>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
};
/**
 * @const {Object, String, Array, Function} lightColor mixin
 * 注意区别 Cesium3DTileset 的 lightColor
 */
declare const lightColor: {
    lightColor: {
        type: PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
/**
 * @const {Object, Function} nodeTransformations mixin
 */
declare const nodeTransformations: {
    nodeTransformations: {
        type: PropType<Cesium.TranslationRotationScale>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeTranslationRotationScale;
        };
    };
};
/**
 * @const {Object, Function} articulations mixin
 */
declare const articulations: {
    articulations: (ObjectConstructor | FunctionConstructor)[];
};
/**
 * @const {Object} clippingPlanes mixin
 */
declare const clippingPlanes: {
    clippingPlanes: PropType<Cesium.ClippingPlaneCollection | VcCallbackPropertyFunction<Cesium.ClippingPlaneCollection>>;
};
/**
 * @const {Object, Array, Function} plane mixin
 */
declare const plane: {
    plane: {
        type: PropType<VcPlane>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makePlane;
        };
    };
};
/**
 * @const {Number, Object, Function} pixelSize mixin
 */
declare const pixelSize: {
    pixelSize: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Object, Array, Function} hierarchy mixin
 */
declare const hierarchy: {
    hierarchy: {
        type: PropType<VcPolygonHierarchy>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makePolygonHierarchy;
            deep: boolean;
            exclude: string;
        };
    };
};
/**
 * @const {Boolean, Object, Function} perPositionHeight mixin
 */
declare const perPositionHeight: {
    perPositionHeight: {
        type: PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
};
/**
 * @const {Boolean, Object, Function} closeTop mixin
 */
declare const closeTop: {
    closeTop: {
        type: PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
};
/**
 * @const {Boolean, Object, Function} closeBottom mixin
 */
declare const closeBottom: {
    closeBottom: {
        type: PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
};
/**
 * @const {Number, Object, Function} arcType mixin
 */
declare const arcType: {
    arcType: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Object, String, Array, Function} depthFailMaterial  mixin
 */
declare const depthFailMaterial: {
    depthFailMaterial: {
        type: PropType<VcMaterial>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeMaterial;
        };
    };
};
/**
 * @const {Boolean, Object, Function} clampToGround mixin
 */
declare const clampToGround: {
    clampToGround: {
        type: PropType<boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
};
/**
 * @const {Array, Object, Function} shape mixin
 */
declare const shape: {
    shape: {
        type: PropType<VcCartesian2Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2Array;
        };
    };
};
/**
 * @const {Object, Array, Function} coordinates mixin
 */
declare const coordinates: {
    coordinates: {
        type: PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeRectangle;
        };
    };
};
/**
 * @const {Number, Object, Function} maximumScreenSpaceError mixin
 */
declare const maximumScreenSpaceError: {
    maximumScreenSpaceError: {
        type: PropType<number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>>;
        default: number;
    };
};
/**
 * @const {Array, Object, Function} minimumHeights mixin
 */
declare const minimumHeights: {
    minimumHeights: PropType<number[] | Cesium.CallbackProperty | VcCallbackPropertyFunction<number[]>>;
};
/**
 * @const {Array, Object, Function} maximumHeights mixin
 */
declare const maximumHeights: {
    maximumHeights: PropType<number[] | Cesium.CallbackProperty | VcCallbackPropertyFunction<number[]>>;
};
/**
 * @const {Object, Array} cutoutRectangle mixin
 */
declare const cutoutRectangle: {
    cutoutRectangle: {
        type: PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeRectangle;
        };
    };
};
/**
 * @const {Object, String, Array} colorToAlpha mixin
 */
declare const colorToAlpha: {
    colorToAlpha: {
        type: PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
/**
 * @const {String, Object} url mixin
 */
declare const url: {
    url: PropType<string | Cesium.Resource>;
};
/**
 * @const {String} token mixin
 */
declare const token: {
    token: StringConstructor;
};
/**
 * @const {Object} tileDiscardPolicy mixin
 */
declare const tileDiscardPolicy: {
    tileDiscardPolicy: PropType<Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy>;
};
/**
 * @const {String} layers mixin
 */
declare const layers: {
    layers: StringConstructor;
};
/**
 * @const {Boolean} enablePickFeatures mixin
 */
declare const enablePickFeatures: {
    enablePickFeatures: {
        type: BooleanConstructor;
        default: boolean;
    };
};
/**
 * @const {Object, Array} rectangle mixin
 */
declare const rectangle: {
    rectangle: {
        type: PropType<VcRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeRectangle;
        };
    };
};
/**
 * @const {Object} tilingScheme mixin
 */
declare const tilingScheme: {
    tilingScheme: PropType<Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme>;
};
/**
 * @const {Object} ellipsoid mixin
 */
declare const ellipsoid: {
    ellipsoid: PropType<Cesium.Ellipsoid>;
};
/**
 * @const {String, Object} credit mixin
 */
declare const credit: {
    credit: {
        type: PropType<string | Cesium.Credit>;
        default: string;
    };
};
/**
 * @const {Number} tileWidth mixin
 */
declare const tileWidth: {
    tileWidth: {
        type: NumberConstructor;
        default: number;
    };
};
/**
 * @const {Number} tileHeight mixin
 */
declare const tileHeight: {
    tileHeight: {
        type: NumberConstructor;
        default: number;
    };
};
/**
 * @const {Number} maximumLevel mixin
 */
declare const maximumLevel: {
    maximumLevel: NumberConstructor;
};
/**
 * @const {Number} minimumLevel mixin
 */
declare const minimumLevel: {
    minimumLevel: {
        type: NumberConstructor;
        default: number;
    };
};
/**
 * @const {String} fileExtension mixin
 */
declare const fileExtension: {
    fileExtension: {
        type: StringConstructor;
        default: string;
    };
};
/**
 * @const {String} accessToken mixin
 */
declare const accessToken: {
    accessToken: StringConstructor;
};
/**
 * @const {String} format mixin
 */
declare const format: {
    format: {
        type: StringConstructor;
        default: string;
    };
};
/**
 * @const {String, Array} subdomains mixin
 */
declare const subdomains: {
    subdomains: PropType<string | string[]>;
};
/**
 * @const {Array} getFeatureInfoFormats mixin
 */
declare const getFeatureInfoFormats: {
    getFeatureInfoFormats: PropType<Cesium.GetFeatureInfoFormat[]>;
};
/**
 * @const {Object} clock mixin
 */
declare const clock: {
    clock: PropType<Cesium.Clock>;
};
/**
 * @const {Object} times mixin
 */
declare const times: {
    times: PropType<Cesium.TimeIntervalCollection>;
};
declare const projectionTransforms: {
    projectionTransforms: {
        type: PropType<ProjectionTransforms>;
        default: boolean;
    };
};
/**
 * @const {Boolean}
 * allowPicking
 */
declare const allowPicking: {
    allowPicking: {
        type: BooleanConstructor;
        default: boolean;
    };
};
/**
 * @const {Boolean}
 * asynchronous
 */
declare const asynchronous: {
    asynchronous: {
        type: BooleanConstructor;
        default: boolean;
    };
};
/**
 * @const {Boolean} debugShowShadowVolume mixin
 */
declare const debugShowShadowVolume: {
    debugShowShadowVolume: {
        type: BooleanConstructor;
        default: boolean;
    };
};
/**
 * @const {Boolean} releaseGeometryInstances mixin
 */
declare const releaseGeometryInstances: {
    releaseGeometryInstances: {
        type: BooleanConstructor;
        default: boolean;
    };
};
/**
 * @const {Boolean} interleave mixin
 */
declare const interleave: {
    interleave: {
        type: BooleanConstructor;
        default: boolean;
    };
};
/**
 * @const {Object} appearance mixin
 */
declare const appearance: {
    appearance: {
        type: PropType<VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeAppearance;
            deep: boolean;
        };
    };
};
declare const depthFailAppearance: {
    depthFailAppearance: {
        type: PropType<VcAppearance>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeAppearance;
            deep: boolean;
        };
    };
};
/**
 * @const {Array, Object} geometryInstances mixin
 */
declare const geometryInstances: {
    geometryInstances: PropType<Cesium.GeometryInstance | Cesium.GeometryInstance[]>;
};
/**
 * @const {Boolean}
 * vertexCacheOptimize
 */
declare const vertexCacheOptimize: {
    vertexCacheOptimize: {
        type: BooleanConstructor;
        default: boolean;
    };
};
/**
 * @const {Boolean}
 * compressVertices
 */
declare const compressVertices: {
    compressVertices: {
        type: BooleanConstructor;
        default: boolean;
    };
};
/**
 * @const {Object} modelMatrix mixin
 */
declare const modelMatrix: {
    modelMatrix: PropType<Cesium.Matrix4>;
};
/**
 * @const {Boolean} debugShowBoundingVolume mixin
 */
declare const debugShowBoundingVolume: {
    debugShowBoundingVolume: {
        tyep: BooleanConstructor;
        default: boolean;
    };
};
/**
 * @const {Object} scene mixin
 */
declare const scene: {
    scene: PropType<Cesium.Scene>;
};
/**
 * @const {Number} blendOption mixin
 */
declare const blendOption: {
    blendOption: {
        type: PropType<number>;
        default: number;
    };
};
/**
 * @const {*} id mixin
 */
declare const id: {
    id: PropType<any>;
};
/**
 * @const {Boolean} loop mixin
 */
declare const loop: {
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
};
/**
 * @const {Boolean} debugWireframe mixin
 */
declare const debugWireframe: {
    debugWireframe: {
        type: BooleanConstructor;
        default: boolean;
    };
};
/**
 * @const {Object} vertexFormat mixin
 */
declare const vertexFormat: {
    vertexFormat: PropType<Cesium.VertexFormat>;
};
/**
 * @const {Object, Array} center mixin
 */
declare const center: {
    /**
     * center
     */
    center: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
        };
    };
};
/**
 * @const {Object} radius mixin
 */
declare const radius: {
    radius: NumberConstructor;
};
/**
 * @const {Object} frustum mixin
 */
declare const frustum: {
    frustum: PropType<Cesium.PerspectiveFrustum | Cesium.OrthographicFrustum>;
};
/**
 * @const {Object, Array} origin mixin
 */
declare const origin: {
    origin: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
        };
    };
};
/**
 * @const {Object} polygonHierarchy mixin
 */
declare const polygonHierarchy: {
    polygonHierarchy: {
        type: PropType<VcPolygonHierarchy>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makePolygonHierarchy;
            deep: boolean;
        };
    };
};
/**
 * @const {Object, String, Array} startColor mixin
 */
declare const startColor: {
    startColor: {
        type: PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
/**
 * @const {Object, String, Array} endColor mixin
 */
declare const endColor: {
    endColor: {
        type: PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
/**
 * @const {Object, Array} minimumImageSize mixin
 */
declare const minimumImageSize: {
    minimumImageSize: {
        type: PropType<VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
};
/**
 * @const {Object, Array} maximumImageSize mixin
 */
declare const maximumImageSize: {
    maximumImageSize: {
        type: PropType<VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
};
/**
 * @const {Object, Array} imageSize mixin
 */
declare const imageSize: {
    imageSize: {
        type: PropType<VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2;
        };
    };
};
/**
 * @const {Array} shapePositions mixin
 */
declare const shapePositions: {
    shapePositions: {
        type: PropType<VcCartesian2Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian2Array;
        };
    };
};
/**
 * @const {Array} polylinePositions mixin
 */
declare const polylinePositions: {
    polylinePositions: {
        type: PropType<VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3Array;
        };
    };
};
/**
 * @const {Object, String, Array} lightColor2 mixin
 * 用于 Cesium3DTileset 和 Model
 */
declare const lightColor2: {
    lightColor: {
        type: PropType<VcPosition>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3;
        };
    };
};
/**
 * @const {Number} luminanceAtZenith mixin
 */
declare const luminanceAtZenith: {
    luminanceAtZenith: {
        type: NumberConstructor;
        default: number;
    };
};
/**
 * @const {Array, Object} sphericalHarmonicCoefficients mixin
 */
declare const sphericalHarmonicCoefficients: {
    sphericalHarmonicCoefficients: {
        type: PropType<VcCartesian3Array>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeCartesian3Array;
        };
    };
};
/**
 * @const {String} specularEnvironmentMaps mixin
 */
declare const specularEnvironmentMaps: {
    specularEnvironmentMaps: StringConstructor;
};
/**
 * @const {Boolean} backFaceCulling mixin
 */
declare const backFaceCulling: {
    backFaceCulling: {
        type: BooleanConstructor;
        default: boolean;
    };
};
declare const colors: {
    colors: {
        type: PropType<VcColor[]>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColors;
        };
    };
};
/**
 * @const {String, Object} data mixin
 */
declare const data: {
    data: {
        type: PropType<string | Cesium.Resource>;
        required: boolean;
    };
};
declare const sourceUri: {
    sourceUri: {
        type: PropType<string | Cesium.Resource>;
    };
};
/**
 * @const {Object} options mixin
 */
declare const options: {
    options: {
        type: ObjectConstructor;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeOptions;
            deep: boolean;
        };
    };
};
/**
 * @const {String, Array, Object} glowColor mixin
 */
declare const glowColor: {
    glowColor: {
        type: PropType<VcColor>;
        default: () => number[];
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
/**
 * @const {String, Array, Object} clearColor mixin
 */
declare const clearColor: {
    clearColor: {
        type: PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeColor;
        };
    };
};
/**
 * @const {Object, Array} scissorRectangle mixin
 */
declare const scissorRectangle: {
    scissorRectangle: {
        type: PropType<VcBoundingRectangle>;
        watcherOptions: {
            cesiumObjectBuilder: typeof makeBoundingRectangle;
        };
    };
};
declare const enableMouseEvent: {
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export { viewFrom, projectionTransforms, sourceUri, colors, enableMouseEvent, backFaceCulling, specularEnvironmentMaps, sphericalHarmonicCoefficients, luminanceAtZenith, maximumScreenSpaceError, runAnimations, articulations, scissorRectangle, clearColor, glowColor, options, data, imageSubRegion, coordinates, nodeTransformations, hierarchy, plane, colorToAlpha, cutoutRectangle, polylinePositions, shapePositions, imageSize, maximumImageSize, minimumImageSize, endColor, startColor, shape, lightColor, lightColor2, imageBasedLightingFactor, polygonHierarchy, orientation, origin, frustum, maximumCone, minimumCone, maximumClock, minimumClock, innerRadii, radius, center, debugWireframe, vertexFormat, position, loop, geometryInstances, depthFailAppearance, appearance, interleave, releaseGeometryInstances, debugShowShadowVolume, id, allowPicking, asynchronous, vertexCacheOptimize, compressVertices, modelMatrix, debugShowBoundingVolume, scene, blendOption, maximumHeights, minimumHeights, arcType, clampToGround, closeBottom, closeTop, perPositionHeight, pixelSize, clippingPlanes, colorBlendAmount, colorBlendMode, silhouetteSize, silhouetteColor, clampAnimations, incrementallyLoadTextures, maximumScale, minimumPixelSize, uri, fillColor, backgroundPadding, backgroundColor, showBackground, labelStyle, font, text, subdivisions, slicePartitions, stackPartitions, radii, stRotation, semiMinorAxis, semiMajorAxis, slices, numberOfVerticalLines, bottomRadius, topRadius, length, zIndex, classificationType, granularity, cornerType, extrudedHeightReference, extrudedHeight, positions, image, scale, pixelOffset, eyeOffset, horizontalOrigin, verticalOrigin, heightReference, depthFailColor, color, rotation, alignedAxis, sizeInMeters, width, height, scaleByDistance, translucencyByDistance, pixelOffsetScaleByDistance, disableDepthTestDistance, dimensions, fill, depthFailMaterial, material, outline, outlineColor, outlineWidth, shadows, distanceDisplayCondition, show, times, clock, getFeatureInfoFormats, subdomains, format, accessToken, fileExtension, minimumLevel, maximumLevel, tileHeight, url, token, tileDiscardPolicy, layers, enablePickFeatures, rectangle, tilingScheme, ellipsoid, credit, tileWidth };
