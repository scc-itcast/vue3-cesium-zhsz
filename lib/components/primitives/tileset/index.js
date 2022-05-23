'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits$1 = require('../../../utils/emits.js');
var index = require('../../../composables/use-primitives/index.js');

const emits = {
  ...emits$1.primitiveEmits,
  allTilesLoaded: () => true,
  initialTilesLoaded: () => true,
  loadProgress: (numberOfPendingRequests, numberOfTilesProcessing) => true,
  tileFailed: (url, errorMsg) => true,
  tileLoad: (tile) => true,
  tileUnload: (tile) => true,
  tileVisible: (tile) => true
};
const tilesetPrimitiveProps = {
  url: [String, Object],
  ...cesiumProps.show,
  ...cesiumProps.modelMatrix,
  ...cesiumProps.shadows,
  ...cesiumProps.maximumScreenSpaceError,
  maximumMemoryUsage: {
    type: Number,
    default: 512
  },
  cullWithChildrenBounds: {
    type: Boolean,
    default: true
  },
  cullRequestsWhileMoving: {
    type: Boolean,
    default: true
  },
  cullRequestsWhileMovingMultiplier: {
    type: Number,
    default: 60
  },
  preloadWhenHidden: {
    type: Boolean,
    default: false
  },
  preloadFlightDestinations: {
    type: Boolean,
    default: true
  },
  preferLeaves: {
    type: Boolean,
    default: false
  },
  dynamicScreenSpaceError: {
    type: Boolean,
    default: false
  },
  dynamicScreenSpaceErrorDensity: {
    type: Number,
    default: 278e-5
  },
  dynamicScreenSpaceErrorFactor: {
    type: Number,
    default: 4
  },
  dynamicScreenSpaceErrorHeightFalloff: {
    type: Number,
    default: 0.25
  },
  progressiveResolutionHeightFraction: {
    type: Number,
    default: 0.3
  },
  foveatedScreenSpaceError: {
    type: Boolean,
    default: true
  },
  foveatedConeSize: {
    type: Number,
    default: 0.1
  },
  foveatedMinimumScreenSpaceErrorRelaxation: {
    type: Number,
    default: 0
  },
  foveatedInterpolationCallback: Function,
  foveatedTimeDelay: {
    type: Number,
    default: 0.2
  },
  skipLevelOfDetail: {
    type: Boolean,
    default: false
  },
  baseScreenSpaceError: {
    type: Number,
    default: 1024
  },
  skipScreenSpaceErrorFactor: {
    type: Number,
    default: 16
  },
  skipLevels: {
    type: Number,
    default: 1
  },
  immediatelyLoadDesiredLevelOfDetail: {
    type: Boolean,
    default: false
  },
  loadSiblings: {
    type: Boolean,
    default: false
  },
  ...cesiumProps.clippingPlanes,
  ...cesiumProps.classificationType,
  ...cesiumProps.ellipsoid,
  pointCloudShading: Object,
  ...cesiumProps.imageBasedLightingFactor,
  ...cesiumProps.lightColor2,
  ...cesiumProps.luminanceAtZenith,
  ...cesiumProps.sphericalHarmonicCoefficients,
  ...cesiumProps.specularEnvironmentMaps,
  ...cesiumProps.backFaceCulling,
  showOutline: {
    type: Boolean,
    default: true
  },
  vectorClassificationOnly: {
    type: Boolean,
    default: false
  },
  vectorKeepDecodedPositions: {
    type: Boolean,
    default: false
  },
  featureIdIndex: {
    type: Number,
    default: 0
  },
  instanceFeatureIdIndex: {
    type: Number,
    default: 0
  },
  showCreditsOnScreen: {
    type: Boolean,
    default: false
  },
  debugHeatmapTilePropertyName: String,
  debugFreezeFrame: {
    type: Boolean,
    default: false
  },
  debugColorizeTiles: {
    type: Boolean,
    default: false
  },
  ...cesiumProps.debugWireframe,
  ...cesiumProps.debugShowBoundingVolume,
  debugShowContentBoundingVolume: {
    type: Boolean,
    default: false
  },
  debugShowViewerRequestVolume: {
    type: Boolean,
    default: false
  },
  debugShowGeometricError: {
    type: Boolean,
    default: false
  },
  debugShowRenderingStatistics: {
    type: Boolean,
    default: false
  },
  debugShowMemoryUsage: {
    type: Boolean,
    default: false
  },
  debugShowUrl: {
    type: Boolean,
    default: false
  },
  ...cesiumProps.enableMouseEvent,
  enableModelExperimental: {
    type: Boolean,
    default: false
  },
  customShader: {
    type: Object
  },
  properties: {
    type: Array
  },
  fragmentShader: String,
  replaceFS: Boolean
};
var PrimitiveTileset = vue.defineComponent({
  name: "VcPrimitiveTileset",
  props: tilesetPrimitiveProps,
  emits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "Cesium3DTileset";
    instance.cesiumEvents = ["allTilesLoaded", "initialTilesLoaded", "loadProgress", "tileFailed", "tileLoad", "tileUnload", "tileVisible"];
    index["default"](props, ctx, instance);
    instance.proxy.creatingPromise.then((obj) => {
      const tileset = obj.cesiumObject;
      instance.removeCallbacks.push(tileset.tileVisible.addEventListener(updateTile));
    });
    const updateTile = (tile) => {
      const content = tile.content;
      const model = content._model;
      for (let i = 0; i < content.featuresLength; i++) {
        const feature = content.getFeature(i);
        if (props.properties && props.properties.length) {
          props.properties.forEach((property) => {
            if (feature.hasProperty(property["key"]) && feature.getProperty(property["key"]) === property["keyValue"]) {
              feature.setProperty(property["propertyName"], property["propertyValue"]);
            }
          });
        }
      }
      if (props.fragmentShader && model && model._sourcePrograms && model._rendererResources) {
        Object.keys(model._sourcePrograms).forEach((key) => {
          const program = model._sourcePrograms[key];
          const sourceShaders = model._rendererResources.sourceShaders;
          if (props.replaceFS) {
            sourceShaders[program.fragmentShader] = props.fragmentShader;
          } else {
            const oldFS = sourceShaders[program.fragmentShader];
            sourceShaders[program.fragmentShader] = oldFS.replace("gl_FragColor = vec4(color, 1.0);\n}", `gl_FragColor = vec4(color, 1.0);
             ${props.fragmentShader}
}
            `);
          }
        });
        model._shouldRegenerateShaders = true;
      }
    };
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = PrimitiveTileset;
exports.tilesetPrimitiveProps = tilesetPrimitiveProps;
//# sourceMappingURL=index.js.map
