import { ref, reactive, watch, nextTick, onUnmounted } from 'vue';
import Feature from './Feature.mjs';
import PickedFeatures from './PickedFeatures.mjs';
import '../../../utils/util.mjs';
import { isArray } from '@vue/shared';

function useSelectionIndicatior(instance, props, $services) {
  const offScreen = "-1000px";
  const screenPositionX = ref(offScreen);
  const screenPositionY = ref(offScreen);
  const transform = "";
  const opacity = 1;
  const position = ref();
  const rootRef = ref();
  let selectionIndicatorTween;
  let selectionIndicatorIsAppearing;
  const pickedFeatures = ref(null);
  const selectedFeature = ref(null);
  let unwatchFns = [];
  let isCluster = false;
  const rootStyle = reactive({
    top: screenPositionY.value,
    left: screenPositionX.value,
    transform,
    opacity
  });
  unwatchFns.push(watch(selectedFeature, (val) => {
    var _a, _b, _c;
    const selectedFeature2 = val;
    const { defined } = Cesium;
    if (defined(selectedFeature2) && defined(selectedFeature2 == null ? void 0 : selectedFeature2.position)) {
      const { viewer } = $services;
      position.value = (selectedFeature2 == null ? void 0 : selectedFeature2.position) instanceof Cesium.Cartesian3 ? selectedFeature2 == null ? void 0 : selectedFeature2.position : (_a = selectedFeature2 == null ? void 0 : selectedFeature2.position) == null ? void 0 : _a.getValue(viewer.clock.currentTime);
      animateAppear();
      (_b = instance.proxy) == null ? void 0 : _b.$emit("pickEvt", selectedFeature2);
    } else {
      animateDepart();
      (_c = instance.proxy) == null ? void 0 : _c.$emit("pickEvt", selectedFeature2);
    }
    update();
  }));
  unwatchFns.push(watch(pickedFeatures, (val) => {
    const { defined, Entity } = Cesium;
    const pickedFeatures2 = val;
    if (!defined(pickedFeatures2)) {
      selectedFeature.value = void 0;
    } else {
      const fakeFeature = new Entity({
        id: "__Vc__Pick__Location__"
      });
      fakeFeature.position = pickedFeatures2.pickPosition;
      selectedFeature.value = fakeFeature;
    }
    nextTick(() => {
      if (defined(pickedFeatures2.allFeaturesAvailablePromise)) {
        pickedFeatures2.allFeaturesAvailablePromise.then(() => {
          var _a, _b, _c;
          const featuresShownAtAll = pickedFeatures2.features.filter((x) => defined(x));
          selectedFeature.value = featuresShownAtAll.filter(featureHasInfo)[0];
          if (!defined(selectedFeature.value) && featuresShownAtAll.length > 0) {
            selectedFeature.value = featuresShownAtAll[0];
            if (isCluster) {
              if (selectedFeature.value instanceof Feature && ((_c = (_b = (_a = selectedFeature.value) == null ? void 0 : _a.pickedFeature) == null ? void 0 : _b.primitive) == null ? void 0 : _c.position)) {
                selectedFeature.value.position = selectedFeature.value.pickedFeature.primitive.position;
              }
            }
          }
        });
      }
    });
  }));
  const featureHasInfo = (feature) => {
    const { defined } = Cesium;
    return defined(feature.properties) || defined(feature.description);
  };
  const pickFromScreenPosition = (screenPosition) => {
    const { defined } = Cesium;
    const { viewer } = $services;
    const scene = viewer.scene;
    const pickRay = scene.camera.getPickRay(screenPosition);
    let pickPosition = scene.globe.pick(pickRay, scene);
    if (!defined(pickPosition)) {
      pickPosition = scene.pickPosition(screenPosition);
      if (!defined(pickPosition)) {
        return;
      }
    }
    const pickPositionCartographic = scene.globe.ellipsoid.cartesianToCartographic(pickPosition || new Cesium.Cartesian3());
    const vectorFeatures = pickVectorFeatures(screenPosition);
    const providerCoords = attachProviderCoordHooks();
    const pickRasterPromise = props.allowFeatureInfoRequests ? scene.imageryLayers.pickImageryLayerFeatures(pickRay, scene) : Promise.resolve();
    const result = buildPickedFeatures(providerCoords, pickPosition, vectorFeatures, [pickRasterPromise], void 0, pickPositionCartographic.height, false, viewer);
    pickedFeatures.value = result;
  };
  const buildPickedFeatures = (providerCoords, pickPosition, existingFeatures, featurePromises, imageryLayers, defaultHeight, ignoreSplitter, viewer) => {
    const { defined, defaultValue, when } = Cesium;
    ignoreSplitter = defaultValue(ignoreSplitter, false);
    const result = new PickedFeatures();
    result.providerCoords = providerCoords;
    result.pickPosition = pickPosition;
    result.allFeaturesAvailablePromise = when.all(featurePromises).then(function(allFeatures) {
      result.isLoading = false;
      result.features = allFeatures.reduce(function(resultFeaturesSoFar, imageryLayerFeatures, i) {
        if (!defined(imageryLayerFeatures)) {
          return resultFeaturesSoFar;
        }
        const features = imageryLayerFeatures.map(function(feature) {
          if (defined(imageryLayers)) {
            feature.imageryLayer = imageryLayers[i];
          }
          if (!defined(feature.position)) {
            feature.position = viewer.scene.globe.ellipsoid.cartesianToCartographic(pickPosition);
          }
          if (!defined(feature.position.height) || feature.position.height === 0) {
            feature.position.height = defaultHeight;
          }
          return Feature.fromImageryLayerFeature(feature, viewer);
        }.bind(this));
        return resultFeaturesSoFar.concat(features);
      }.bind(this), defaultValue(existingFeatures, []));
    }).otherwise(function() {
      result.isLoading = false;
      result.error = "An unknown error occurred while picking features.";
    });
    return result;
  };
  const pickVectorFeatures = (screenPosition) => {
    var _a, _b;
    const vectorFeatures = [];
    const { defined } = Cesium;
    const { viewer } = $services;
    const scene = viewer.scene;
    const pickedList = scene.drillPick(screenPosition, props.limit);
    for (let i = 0; i < pickedList.length; ++i) {
      const picked = pickedList[i];
      let id = picked.id;
      if (!defined(id) && defined(picked.primitive)) {
        id = picked.primitive;
      }
      const catalogItem = (_b = (_a = picked == null ? void 0 : picked.primitive) == null ? void 0 : _a._catalogItem) != null ? _b : id == null ? void 0 : id._catalogItem;
      if (typeof (catalogItem == null ? void 0 : catalogItem.getFeaturesFromPickResult) === "function") {
        const result = catalogItem.getFeaturesFromPickResult.bind(catalogItem)(screenPosition, picked);
        if (result) {
          if (Array.isArray(result)) {
            vectorFeatures.push(...result);
          } else {
            vectorFeatures.push(result);
          }
        }
      } else {
        const pickedFeature = picked;
        if (pickedFeature.id) {
          if (isArray(pickedFeature.id) && pickedFeature.id[0] instanceof Cesium.Entity) {
            isCluster = true;
            pickedFeature.id.forEach((entity) => {
              const feature = Feature.fromPickedFeature(entity, pickedFeature, viewer, screenPosition);
              vectorFeatures.push(feature);
            });
            continue;
          } else if (pickedFeature.id instanceof Cesium.Entity) {
            const feature = Feature.fromPickedFeature(pickedFeature.id, pickedFeature, viewer, screenPosition);
            vectorFeatures.push(feature);
            isCluster = false;
            continue;
          } else {
            isCluster = false;
          }
        }
        if (pickedFeature.primitive) {
          const feature = Feature.fromPickedFeature(pickedFeature.primitive, pickedFeature, viewer, screenPosition);
          vectorFeatures.push(feature);
        } else if (pickedFeature.collection) {
          const feature = Feature.fromPickedFeature(pickedFeature.collection, pickedFeature, viewer, screenPosition);
          vectorFeatures.push(feature);
        }
      }
    }
    return vectorFeatures;
  };
  const attachProviderCoordHooks = () => {
    const providerCoords = {};
    const { viewer } = $services;
    const scene = viewer.scene;
    const pickFeaturesHook = function(imageryProvider, oldPick, x, y, level, longitude, latitude) {
      if (oldPick) {
        const featuresPromise = oldPick.call(imageryProvider, x, y, level, longitude, latitude);
        if (imageryProvider.url) {
          providerCoords[imageryProvider.url] = {
            x,
            y,
            level
          };
        }
        imageryProvider.pickFeatures = oldPick;
        return featuresPromise;
      }
      return Promise.reject(false);
    };
    for (let j = 0; j < scene.imageryLayers.length; j++) {
      const imageryProvider = scene.imageryLayers.get(j).imageryProvider;
      imageryProvider.pickFeatures = pickFeaturesHook.bind(void 0, imageryProvider, imageryProvider.pickFeatures);
    }
    return providerCoords;
  };
  const computeScreenSpacePosition = (position2, result) => {
    const { viewer } = $services;
    return Cesium.SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, position2, result);
  };
  const update = () => {
    const { defined, Cartesian2 } = Cesium;
    if (props.show && defined(position.value)) {
      const screenPosition = computeScreenSpacePosition(position.value, new Cartesian2());
      if (!defined(screenPosition)) {
      } else {
        const { viewer } = $services;
        const container = viewer.container;
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const indicatorSize = props.width;
        const halfSize = indicatorSize * 0.5;
        screenPosition.x = Math.min(Math.max(screenPosition.x, -indicatorSize), containerWidth + indicatorSize) - halfSize;
        screenPosition.y = Math.min(Math.max(screenPosition.y, -indicatorSize), containerHeight + indicatorSize) - halfSize;
        rootStyle.left = Math.floor(screenPosition.x + 0.25) + "px";
        rootStyle.top = Math.floor(screenPosition.y + 0.25) + "px";
      }
    }
  };
  const animateAppear = () => {
    const { viewer } = $services;
    const { defined, EasingFunction } = Cesium;
    if (defined(selectionIndicatorTween)) {
      if (selectionIndicatorIsAppearing) {
        return;
      }
      selectionIndicatorTween.cancelTween();
      selectionIndicatorTween = void 0;
    }
    selectionIndicatorIsAppearing = true;
    selectionIndicatorTween = viewer.scene.tweens.add({
      startObject: {
        scale: 2,
        opacity: 0,
        rotate: -180
      },
      stopObject: {
        scale: 1,
        opacity: 1,
        rotate: 0
      },
      duration: 0.8,
      easingFunction: EasingFunction.EXPONENTIAL_OUT,
      update: function(value) {
        rootStyle.opacity = value.opacity;
        rootStyle.transform = "scale(" + value.scale + ") rotate(" + value.rotate + "deg)";
      },
      complete: function() {
        selectionIndicatorTween = void 0;
      },
      cancel: function() {
        selectionIndicatorTween = void 0;
      }
    });
  };
  const animateDepart = () => {
    const { viewer } = $services;
    const { defined, EasingFunction } = Cesium;
    if (defined(selectionIndicatorTween)) {
      if (!selectionIndicatorIsAppearing) {
        return;
      }
      selectionIndicatorTween.cancelTween();
      selectionIndicatorTween = void 0;
    }
    selectionIndicatorIsAppearing = false;
    selectionIndicatorTween = viewer.scene.tweens.add({
      startObject: {
        scale: 1,
        opacity: 1
      },
      stopObject: {
        scale: 1.5,
        opacity: 0
      },
      duration: 0.8,
      easingFunction: EasingFunction.EXPONENTIAL_OUT,
      update: function(value) {
        rootStyle.opacity = value.opacity;
        rootStyle.transform = "scale(" + value.scale + ") rotate(0deg)";
      },
      complete: function() {
        selectionIndicatorTween = void 0;
      },
      cancel: function() {
        selectionIndicatorTween = void 0;
      }
    });
  };
  const onPostRender = () => {
    update();
  };
  onUnmounted(() => {
    unwatchFns.forEach((item) => item());
    unwatchFns = [];
  });
  Object.assign(instance.proxy, {
    selectedFeature,
    position,
    computeScreenSpacePosition,
    update,
    animateAppear,
    animateDepart,
    getPickedFeatures: () => pickedFeatures
  });
  return {
    pickFromScreenPosition,
    rootRef,
    rootStyle,
    onPostRender
  };
}

export { useSelectionIndicatior as default };
//# sourceMappingURL=use-selection-indicatior.mjs.map
