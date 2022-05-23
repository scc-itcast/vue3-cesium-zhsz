import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { show, modelMatrix, shadows, maximumScreenSpaceError, clippingPlanes, classificationType, ellipsoid, imageBasedLightingFactor, lightColor2, luminanceAtZenith, sphericalHarmonicCoefficients, specularEnvironmentMaps, backFaceCulling, debugWireframe, debugShowBoundingVolume, enableMouseEvent } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { primitiveEmits } from '../../../utils/emits.mjs';
import usePrimitives from '../../../composables/use-primitives/index.mjs';

const emits = {
  ...primitiveEmits,
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
  ...show,
  ...modelMatrix,
  ...shadows,
  ...maximumScreenSpaceError,
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
  ...clippingPlanes,
  ...classificationType,
  ...ellipsoid,
  pointCloudShading: Object,
  ...imageBasedLightingFactor,
  ...lightColor2,
  ...luminanceAtZenith,
  ...sphericalHarmonicCoefficients,
  ...specularEnvironmentMaps,
  ...backFaceCulling,
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
  ...debugWireframe,
  ...debugShowBoundingVolume,
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
  ...enableMouseEvent,
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
var PrimitiveTileset = defineComponent({
  name: "VcPrimitiveTileset",
  props: tilesetPrimitiveProps,
  emits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "Cesium3DTileset";
    instance.cesiumEvents = ["allTilesLoaded", "initialTilesLoaded", "loadProgress", "tileFailed", "tileLoad", "tileUnload", "tileVisible"];
    usePrimitives(props, ctx, instance);
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
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { PrimitiveTileset as default, tilesetPrimitiveProps };
//# sourceMappingURL=index.mjs.map
