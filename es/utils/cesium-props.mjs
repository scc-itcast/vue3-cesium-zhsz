import './util.mjs';
import { makeCartesian3, makeQuaternion, makeColor, makeDistanceDisplayCondition, makeBoundingRectangle, makeCartesian2, makeNearFarScalar, makeMaterial, makeCartesian3Array, makeTranslationRotationScale, makePlane, makePolygonHierarchy, makeCartesian2Array, makeRectangle, makeAppearance, makeColors, makeOptions } from './cesium-helpers.mjs';
import { isArray, isObject, hasOwn, isFunction } from '@vue/shared';

const position = {
  position: {
    type: [Object, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3,
      deep: true
    }
  }
};
const viewFrom = {
  viewFrom: {
    type: [Object, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3,
      deep: true
    }
  }
};
const orientation = {
  orientation: {
    type: [Object, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeQuaternion
    }
  }
};
const alignedAxis = {
  alignedAxis: {
    type: [Object, Array, Function],
    default: () => {
      return {
        x: 0,
        y: 0,
        z: 0
      };
    },
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3
    }
  }
};
const color = {
  color: {
    type: [Object, String, Array, Function],
    default: "white",
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
};
const depthFailColor = {
  depthFailColor: {
    type: [Object, String, Array, Function],
    default: "white",
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
};
const disableDepthTestDistance = {
  disableDepthTestDistance: [Number, Object, Function]
};
const distanceDisplayCondition = {
  distanceDisplayCondition: {
    type: [Object, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeDistanceDisplayCondition
    }
  }
};
const eyeOffset = {
  eyeOffset: {
    type: [Object, Array, Function],
    default: () => {
      return {
        x: 0,
        y: 0,
        z: 0
      };
    },
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3
    }
  }
};
const height = {
  height: [Number, Object, Function]
};
const heightReference = {
  heightReference: {
    type: [Number, Object, Function]
  }
};
const horizontalOrigin = {
  horizontalOrigin: {
    type: [Number, Object, Function],
    default: 0
  }
};
const image = {
  image: [String, Object, HTMLCanvasElement, Function]
};
const imageSubRegion = {
  imageSubRegion: {
    type: [Object, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeBoundingRectangle
    }
  }
};
const pixelOffset = {
  pixelOffset: {
    type: [Object, Array, Function],
    default: () => {
      return {
        x: 0,
        y: 0
      };
    },
    validator: (v) => {
      if (isArray(v)) {
        return v.length === 2;
      }
      if (isObject(v)) {
        return hasOwn(v, "x") && hasOwn(v, "y");
      }
      if (isFunction(v)) {
        return true;
      }
      return false;
    },
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2
    }
  }
};
const pixelOffsetScaleByDistance = {
  pixelOffsetScaleByDistance: {
    type: [Object, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeNearFarScalar
    }
  }
};
const rotation = {
  rotation: {
    type: [Number, Object, Function],
    default: 0
  }
};
const scale = {
  scale: {
    type: [Number, Object, Function],
    default: 1
  }
};
const scaleByDistance = {
  scaleByDistance: {
    type: [Object, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeNearFarScalar
    }
  }
};
const show = {
  show: {
    type: [Boolean, Object, Function],
    default: true
  }
};
const sizeInMeters = {
  sizeInMeters: {
    type: [Boolean, Object, Function],
    default: false
  }
};
const translucencyByDistance = {
  translucencyByDistance: {
    type: [Object, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeNearFarScalar
    }
  }
};
const verticalOrigin = {
  verticalOrigin: {
    type: [Number, Object, Function],
    default: 0
  }
};
const width = {
  width: [Number, Object, Function]
};
const dimensions = {
  dimensions: {
    type: [Object, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3
    }
  }
};
const fill = {
  fill: {
    type: [Boolean, Object, Function],
    default: true
  }
};
const material = {
  material: {
    type: [Object, String, Array, Function],
    default: "white",
    watcherOptions: {
      cesiumObjectBuilder: makeMaterial
    }
  }
};
const outline = {
  outline: {
    type: [Boolean, Object, Function],
    default: false
  }
};
const outlineColor = {
  outlineColor: {
    type: [Object, String, Array, Function],
    default: "black",
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
};
const outlineWidth = {
  outlineWidth: {
    type: [Number, Object, Function],
    default: 1
  }
};
const shadows = {
  shadows: [Number, Object, Function]
};
const positions = {
  positions: {
    type: [Array, Object, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3Array,
      exclude: "_callback",
      deep: true
    }
  }
};
const extrudedHeight = {
  extrudedHeight: [Number, Object, Function]
};
const extrudedHeightReference = {
  extrudedHeightReference: [Number, Object, Function]
};
const cornerType = {
  cornerType: {
    type: [Number, Object, Function],
    default: 0
  }
};
const granularity = {
  granularity: [Number, Object, Function]
};
const classificationType = {
  classificationType: {
    type: [Number, Object, Function]
  }
};
const zIndex = {
  zIndex: [Number, Object, Function]
};
const length = {
  length: [Number, Object, Function]
};
const topRadius = {
  topRadius: [Number, Object, Function]
};
const bottomRadius = {
  bottomRadius: [Number, Object, Function]
};
const numberOfVerticalLines = {
  numberOfVerticalLines: {
    type: [Number, Object, Function],
    default: 16
  }
};
const slices = {
  slices: {
    type: [Number, Object, Function],
    default: 128
  }
};
const semiMajorAxis = {
  semiMajorAxis: [Number, Object, Function]
};
const semiMinorAxis = {
  semiMinorAxis: [Number, Object, Function]
};
const stRotation = {
  stRotation: {
    type: [Number, Object, Function],
    default: 0
  }
};
const radii = {
  radii: {
    type: [Object, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3
    }
  }
};
const innerRadii = {
  innerRadii: {
    type: [Object, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3
    }
  }
};
const minimumClock = {
  minimumClock: {
    type: [Number, Object, Function],
    default: 0
  }
};
const maximumClock = {
  maximumClock: {
    type: [Number, Object, Function],
    default: 2 * Math.PI
  }
};
const minimumCone = {
  minimumCone: {
    type: [Number, Object, Function],
    default: 0
  }
};
const maximumCone = {
  maximumCone: {
    type: [Number, Object, Function],
    default: Math.PI
  }
};
const stackPartitions = {
  stackPartitions: {
    type: [Number, Object, Function],
    default: 64
  }
};
const slicePartitions = {
  slicePartitions: {
    type: [Number, Object, Function],
    default: 64
  }
};
const subdivisions = {
  subdivisions: {
    type: [Number, Object, Function],
    default: 128
  }
};
const text = {
  text: [String, Object, Function]
};
const font = {
  font: {
    type: [String, Object, Function],
    default: "30px sans-serif"
  }
};
const labelStyle = {
  labelStyle: {
    type: [Number, Object, Function],
    default: 0
  }
};
const showBackground = {
  showBackground: {
    type: [Boolean, Object, Function],
    default: false
  }
};
const backgroundColor = {
  backgroundColor: {
    type: [Object, String, Array, Function],
    default: () => {
      return { x: 0.165, y: 0.165, z: 0.165, w: 0.8 };
    },
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
};
const backgroundPadding = {
  backgroundPadding: {
    type: [Object, Array, Function],
    default: () => {
      return { x: 7, y: 5 };
    },
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2
    }
  }
};
const fillColor = {
  fillColor: {
    type: [Object, String, Array, Function],
    default: "white",
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
};
const uri = {
  uri: [String, Object, Function]
};
const minimumPixelSize = {
  minimumPixelSize: {
    type: [Number, Object, Function],
    default: 0
  }
};
const maximumScale = {
  maximumScale: [Number, Object, Function]
};
const incrementallyLoadTextures = {
  incrementallyLoadTextures: {
    type: [Boolean, Object, Function],
    default: true
  }
};
const runAnimations = {
  clampAnimations: {
    type: [Boolean, Object, Function],
    default: true
  }
};
const clampAnimations = {
  clampAnimations: {
    type: [Boolean, Object, Function],
    default: true
  }
};
const silhouetteColor = {
  silhouetteColor: {
    type: [Object, String, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
};
const silhouetteSize = {
  silhouetteSize: {
    type: [Number, Object, Function],
    default: 0
  }
};
const colorBlendMode = {
  colorBlendMode: {
    type: [Number, Object, Function],
    default: 0
  }
};
const colorBlendAmount = {
  colorBlendAmount: {
    type: [Number, Object, Function],
    default: 0.5
  }
};
const imageBasedLightingFactor = {
  imageBasedLightingFactor: {
    type: [Object, Array, Function],
    default: () => [1, 1],
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2
    }
  }
};
const lightColor = {
  lightColor: {
    type: [Object, String, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
};
const nodeTransformations = {
  nodeTransformations: {
    type: [Object, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeTranslationRotationScale
    }
  }
};
const articulations = {
  articulations: [Object, Function]
};
const clippingPlanes = {
  clippingPlanes: [Object, Function]
};
const plane = {
  plane: {
    type: [Object, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: makePlane
    }
  }
};
const pixelSize = {
  pixelSize: {
    type: [Number, Object, Function],
    default: 1
  }
};
const hierarchy = {
  hierarchy: {
    type: [Object, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: makePolygonHierarchy,
      deep: true,
      exclude: "_callback"
    }
  }
};
const perPositionHeight = {
  perPositionHeight: {
    type: [Boolean, Object, Function],
    default: false
  }
};
const closeTop = {
  closeTop: {
    type: [Boolean, Object, Function],
    default: true
  }
};
const closeBottom = {
  closeBottom: {
    type: [Boolean, Object, Function],
    default: true
  }
};
const arcType = {
  arcType: {
    type: [Number, Object, Function],
    default: 1
  }
};
const depthFailMaterial = {
  depthFailMaterial: {
    type: [Object, String, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeMaterial
    }
  }
};
const clampToGround = {
  clampToGround: {
    type: [Boolean, Object, Function],
    default: false
  }
};
const shape = {
  shape: {
    type: [Array, Object, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2Array
    }
  }
};
const coordinates = {
  coordinates: {
    type: [Object, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeRectangle
    }
  }
};
const maximumScreenSpaceError = {
  maximumScreenSpaceError: {
    type: [Number, Object, Function],
    default: 16
  }
};
const minimumHeights = {
  minimumHeights: [Array, Object, Function]
};
const maximumHeights = {
  maximumHeights: [Array, Object, Function]
};
const cutoutRectangle = {
  cutoutRectangle: {
    type: [Object, Array],
    watcherOptions: {
      cesiumObjectBuilder: makeRectangle
    }
  }
};
const colorToAlpha = {
  colorToAlpha: {
    type: [Object, String, Array],
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
};
const url = {
  url: [String, Object]
};
const token = {
  token: String
};
const tileDiscardPolicy = {
  tileDiscardPolicy: Object
};
const layers = {
  layers: String
};
const enablePickFeatures = {
  enablePickFeatures: {
    type: Boolean,
    default: true
  }
};
const rectangle = {
  rectangle: {
    type: [Object, Array],
    watcherOptions: {
      cesiumObjectBuilder: makeRectangle
    }
  }
};
const tilingScheme = {
  tilingScheme: Object
};
const ellipsoid = {
  ellipsoid: Object
};
const credit = {
  credit: {
    type: [String, Object],
    default: ""
  }
};
const tileWidth = {
  tileWidth: {
    type: Number,
    default: 256
  }
};
const tileHeight = {
  tileHeight: {
    type: Number,
    default: 256
  }
};
const maximumLevel = {
  maximumLevel: Number
};
const minimumLevel = {
  minimumLevel: {
    type: Number,
    default: 0
  }
};
const fileExtension = {
  fileExtension: {
    type: String,
    default: "png"
  }
};
const accessToken = {
  accessToken: String
};
const format = {
  format: {
    type: String,
    default: "png"
  }
};
const subdomains = {
  subdomains: [String, Array]
};
const getFeatureInfoFormats = {
  getFeatureInfoFormats: Array
};
const clock = {
  clock: Object
};
const times = {
  times: Object
};
const projectionTransforms = {
  projectionTransforms: {
    type: [Boolean, Object],
    default: false
  }
};
const allowPicking = {
  allowPicking: {
    type: Boolean,
    default: true
  }
};
const asynchronous = {
  asynchronous: {
    type: Boolean,
    default: true
  }
};
const debugShowShadowVolume = {
  debugShowShadowVolume: {
    type: Boolean,
    default: false
  }
};
const releaseGeometryInstances = {
  releaseGeometryInstances: {
    type: Boolean,
    default: true
  }
};
const interleave = {
  interleave: {
    type: Boolean,
    default: false
  }
};
const appearance = {
  appearance: {
    type: Object,
    watcherOptions: {
      cesiumObjectBuilder: makeAppearance,
      deep: true
    }
  }
};
const depthFailAppearance = {
  depthFailAppearance: {
    type: Object,
    watcherOptions: {
      cesiumObjectBuilder: makeAppearance,
      deep: true
    }
  }
};
const geometryInstances = {
  geometryInstances: [Array, Object]
};
const vertexCacheOptimize = {
  vertexCacheOptimize: {
    type: Boolean,
    default: false
  }
};
const compressVertices = {
  compressVertices: {
    type: Boolean,
    default: true
  }
};
const modelMatrix = {
  modelMatrix: Object
};
const debugShowBoundingVolume = {
  debugShowBoundingVolume: {
    tyep: Boolean,
    default: false
  }
};
const scene = {
  scene: Object
};
const blendOption = {
  blendOption: {
    type: Number,
    default: 2
  }
};
const id = {
  id: null
};
const loop = {
  loop: {
    type: Boolean,
    default: false
  }
};
const debugWireframe = {
  debugWireframe: {
    type: Boolean,
    default: false
  }
};
const vertexFormat = {
  vertexFormat: Object
};
const center = {
  center: {
    type: [Object, Array],
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3
    }
  }
};
const radius = {
  radius: Number
};
const frustum = {
  frustum: Object
};
const origin = {
  origin: {
    type: [Object, Array],
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3
    }
  }
};
const polygonHierarchy = {
  polygonHierarchy: {
    type: [Object, Array],
    watcherOptions: {
      cesiumObjectBuilder: makePolygonHierarchy,
      deep: true
    }
  }
};
const startColor = {
  startColor: {
    type: [Object, String, Array],
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
};
const endColor = {
  endColor: {
    type: [Object, String, Array],
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
};
const minimumImageSize = {
  minimumImageSize: {
    type: [Object, Array],
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2
    }
  }
};
const maximumImageSize = {
  maximumImageSize: {
    type: [Object, Array],
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2
    }
  }
};
const imageSize = {
  imageSize: {
    type: [Object, Array],
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2
    }
  }
};
const shapePositions = {
  shapePositions: {
    type: Array,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2Array
    }
  }
};
const polylinePositions = {
  polylinePositions: {
    type: Array,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3Array
    }
  }
};
const lightColor2 = {
  lightColor: {
    type: [Object, Array],
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3
    }
  }
};
const luminanceAtZenith = {
  luminanceAtZenith: {
    type: Number,
    default: 0.2
  }
};
const sphericalHarmonicCoefficients = {
  sphericalHarmonicCoefficients: {
    type: [Array, Object],
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3Array
    }
  }
};
const specularEnvironmentMaps = {
  specularEnvironmentMaps: String
};
const backFaceCulling = {
  backFaceCulling: {
    type: Boolean,
    default: true
  }
};
const colors = {
  colors: {
    type: Array,
    watcherOptions: {
      cesiumObjectBuilder: makeColors
    }
  }
};
const data = {
  data: {
    type: [String, Object],
    required: true
  }
};
const sourceUri = {
  sourceUri: {
    type: [String, Object]
  }
};
const options = {
  options: {
    type: Object,
    watcherOptions: {
      cesiumObjectBuilder: makeOptions,
      deep: true
    }
  }
};
const glowColor = {
  glowColor: {
    type: [String, Array, Object],
    default: () => [0, 1, 0, 0.05],
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
};
const clearColor = {
  clearColor: {
    type: [String, Array, Object],
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
};
const scissorRectangle = {
  scissorRectangle: {
    type: [Object, Array],
    watcherOptions: {
      cesiumObjectBuilder: makeBoundingRectangle
    }
  }
};
const enableMouseEvent = {
  enableMouseEvent: {
    type: Boolean,
    default: true
  }
};

export { accessToken, alignedAxis, allowPicking, appearance, arcType, articulations, asynchronous, backFaceCulling, backgroundColor, backgroundPadding, blendOption, bottomRadius, center, clampAnimations, clampToGround, classificationType, clearColor, clippingPlanes, clock, closeBottom, closeTop, color, colorBlendAmount, colorBlendMode, colorToAlpha, colors, compressVertices, coordinates, cornerType, credit, cutoutRectangle, data, debugShowBoundingVolume, debugShowShadowVolume, debugWireframe, depthFailAppearance, depthFailColor, depthFailMaterial, dimensions, disableDepthTestDistance, distanceDisplayCondition, ellipsoid, enableMouseEvent, enablePickFeatures, endColor, extrudedHeight, extrudedHeightReference, eyeOffset, fileExtension, fill, fillColor, font, format, frustum, geometryInstances, getFeatureInfoFormats, glowColor, granularity, height, heightReference, hierarchy, horizontalOrigin, id, image, imageBasedLightingFactor, imageSize, imageSubRegion, incrementallyLoadTextures, innerRadii, interleave, labelStyle, layers, length, lightColor, lightColor2, loop, luminanceAtZenith, material, maximumClock, maximumCone, maximumHeights, maximumImageSize, maximumLevel, maximumScale, maximumScreenSpaceError, minimumClock, minimumCone, minimumHeights, minimumImageSize, minimumLevel, minimumPixelSize, modelMatrix, nodeTransformations, numberOfVerticalLines, options, orientation, origin, outline, outlineColor, outlineWidth, perPositionHeight, pixelOffset, pixelOffsetScaleByDistance, pixelSize, plane, polygonHierarchy, polylinePositions, position, positions, projectionTransforms, radii, radius, rectangle, releaseGeometryInstances, rotation, runAnimations, scale, scaleByDistance, scene, scissorRectangle, semiMajorAxis, semiMinorAxis, shadows, shape, shapePositions, show, showBackground, silhouetteColor, silhouetteSize, sizeInMeters, slicePartitions, slices, sourceUri, specularEnvironmentMaps, sphericalHarmonicCoefficients, stRotation, stackPartitions, startColor, subdivisions, subdomains, text, tileDiscardPolicy, tileHeight, tileWidth, tilingScheme, times, token, topRadius, translucencyByDistance, uri, url, vertexCacheOptimize, vertexFormat, verticalOrigin, viewFrom, width, zIndex };
//# sourceMappingURL=cesium-props.mjs.map
