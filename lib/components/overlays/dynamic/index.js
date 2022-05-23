'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var DynamicOverlay = require('../../../shared/src/DynamicOverlay.js');
var cesiumHelpers = require('../../../utils/cesium-helpers.js');
var lodashUnified = require('lodash-unified');
var vm = require('../../../utils/private/vm.js');
var emits$1 = require('../../../utils/emits.js');
var index = require('../../../composables/use-common/index.js');

const dynamicOverlayProps = {
  ...cesiumProps.show,
  name: {
    type: String,
    default: "__vc__overlay__dynamic__"
  },
  startTime: {
    type: [Object, String, Date]
  },
  stopTime: {
    type: [Object, String, Date]
  },
  currentTime: {
    type: [Object, String, Date]
  },
  clockRange: {
    type: Number,
    default: 0
  },
  clockStep: {
    type: Number,
    default: 1
  },
  shouldAnimate: {
    type: Boolean,
    default: true
  },
  canAnimate: {
    type: Boolean,
    default: true
  },
  multiplier: {
    type: Number,
    default: 1
  },
  dynamicOverlays: {
    type: Array,
    default: () => []
  },
  defaultInterval: {
    type: Number,
    default: 3
  },
  stopArrivedFlag: {
    type: String,
    default: "time"
  },
  positionPrecision: {
    type: Number,
    default: 1e-7
  },
  timePrecision: {
    type: Number,
    default: 0.01
  }
};
const emits = {
  ...emits$1.commonEmits,
  "update:currentTime": (currentTime) => true,
  "update:shouldAnimate": (shouldAnimate) => true,
  "update:canAnimate": (canAnimate) => true,
  "update:clockRange": (clockRange) => true,
  "update:clockStep": (clockStep) => true,
  "update:multiplier": (multiplier) => true,
  "update:startTime": (startTime) => true,
  "update:stopTime": (stopTime) => true,
  onStop: (clock) => true,
  stopArrived: (overlay, position) => true
};
var OverlayDynamic = vue.defineComponent({
  name: "VcOverlayDynamic",
  props: dynamicOverlayProps,
  emits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "VcOverlayDynamic";
    instance.cesiumEvents = [];
    const commonState = index["default"](props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { $services } = commonState;
    const overlays = vue.ref([]);
    const restoreClockOpts = vue.ref({});
    const { emit } = ctx;
    const trackingOverlay = vue.ref(null);
    const trackView = vue.ref(null);
    let unwatchFns = [];
    unwatchFns.push(vue.watch(() => props.show, (val) => {
      const datasource = instance.cesiumObject;
      datasource && (datasource.show = val);
    }));
    unwatchFns.push(vue.watch(() => props.name, (val) => {
      const datasource = instance.cesiumObject;
      datasource && (datasource.name = val);
    }));
    unwatchFns.push(vue.watch(() => props.startTime, (val) => {
      const { viewer } = $services;
      if (Cesium.defined(viewer) && val) {
        viewer.clock.startTime = cesiumHelpers.makeJulianDate(val);
      }
    }));
    unwatchFns.push(vue.watch(() => props.stopTime, (val) => {
      const { viewer } = $services;
      if (Cesium.defined(viewer) && val) {
        viewer.clock.stopTime = cesiumHelpers.makeJulianDate(val);
      }
    }));
    unwatchFns.push(vue.watch(() => props.currentTime, (val) => {
      const { viewer } = $services;
      if (Cesium.defined(viewer) && val) {
        viewer.clock.currentTime = cesiumHelpers.makeJulianDate(val);
      }
    }));
    unwatchFns.push(vue.watch(() => props.multiplier, (val) => {
      const { viewer } = $services;
      if (Cesium.defined(viewer)) {
        viewer.clock.multiplier = val;
      }
    }));
    unwatchFns.push(vue.watch(() => props.clockStep, (val) => {
      const { viewer } = $services;
      if (Cesium.defined(viewer)) {
        viewer.clock.clockStep = val;
      }
    }));
    unwatchFns.push(vue.watch(() => props.clockRange, (val) => {
      const { viewer } = $services;
      if (Cesium.defined(viewer)) {
        viewer.clock.clockRange = val;
      }
    }));
    unwatchFns.push(vue.watch(() => props.canAnimate, (val) => {
      const { viewer } = $services;
      if (Cesium.defined(viewer)) {
        viewer.clock.canAnimate = val;
      }
    }));
    unwatchFns.push(vue.watch(() => props.shouldAnimate, (val) => {
      const { viewer } = $services;
      if (Cesium.defined(viewer)) {
        viewer.clock.shouldAnimate = val;
      }
    }));
    unwatchFns.push(vue.watch(() => lodashUnified.cloneDeep(props.dynamicOverlays), (newVal, oldVal) => {
      if (!instance.mounted) {
        return;
      }
      const datasource = instance.cesiumObject;
      if (newVal.length === oldVal.length) {
        const modifies = [];
        for (let i = 0; i < newVal.length; i++) {
          const options = newVal[i];
          const oldOptions = oldVal[i];
          const testReplace = (key, value) => {
            if (key !== "nodeTransformations" && key !== "_definitionChanged") {
              return value;
            }
          };
          if (JSON.stringify(options, testReplace) !== JSON.stringify(oldOptions, testReplace)) {
            modifies.push({
              newOptions: options,
              oldOptions
            });
          }
        }
        modifies.forEach((v) => {
          const modifyEntity = datasource.entities.getById(v.oldOptions.id);
          if (Cesium.defined(modifyEntity)) {
            if (v.oldOptions.id === v.newOptions.id) {
              modifyEntity && Object.keys(v.newOptions).forEach((prop) => {
                if (v.oldOptions[prop] !== v.newOptions[prop]) {
                  modifyEntity[prop] = commonState.transformProp(prop, v.newOptions[prop]);
                }
              });
            } else {
              if (modifyEntity) {
                datasource.entities.remove(modifyEntity);
                lodashUnified.remove(overlays.value, (overlay) => overlay.id === modifyEntity.id);
                const entityOptions = v.newOptions;
                addDynamicOverlays(datasource, [entityOptions]);
              }
            }
            const dynamicOverlay = lodashUnified.find(overlays.value, (v2) => v2.id === modifyEntity.id);
            if (Cesium.defined(dynamicOverlay)) {
              const oldSampledPositions = v.oldOptions.sampledPositions;
              const newSampledPositions = v.newOptions.sampledPositions;
              const sampledPositionAdds = lodashUnified.differenceBy(newSampledPositions, oldSampledPositions, "id");
              const sampledPositionDeletes = lodashUnified.differenceBy(oldSampledPositions, newSampledPositions, "id");
              sampledPositionDeletes.forEach((sampledPosition) => {
                sampledPosition.time && dynamicOverlay._sampledPosition.removeSample(sampledPosition.time);
              });
              sampledPositionAdds.forEach((sampledPosition) => {
                if (sampledPosition.time) {
                  dynamicOverlay.addPosition(sampledPosition.position, sampledPosition.time);
                } else if (sampledPosition.interval) {
                  dynamicOverlay.addPosition(sampledPosition.position, sampledPosition.interval || props.defaultInterval);
                }
              });
            }
          }
        });
      } else {
        const adds = lodashUnified.differenceBy(newVal, oldVal, "id");
        const deletes = lodashUnified.differenceBy(oldVal, newVal, "id");
        const deletedEntities = [];
        for (let i = 0; i < deletes.length; i++) {
          const deleteEntity = datasource.entities.getById(deletes[i].id);
          deletedEntities.push(deleteEntity);
        }
        deletedEntities.forEach((v) => {
          datasource.entities.remove(v);
          lodashUnified.remove(overlays.value, (overlay) => overlay.id === v.id);
        });
        addDynamicOverlays(datasource, adds);
      }
    }, {
      deep: true
    }));
    instance.createCesiumObject = async () => {
      return new Cesium.CustomDataSource(props.name);
    };
    const onClockTick = (clock) => {
      let listener = vm.getInstanceListener(instance, "update:currentTime");
      listener && emit("update:currentTime", clock.currentTime);
      listener = vm.getInstanceListener(instance, "update:shouldAnimate");
      listener && emit("update:shouldAnimate", clock.shouldAnimate);
      listener = vm.getInstanceListener(instance, "update:canAnimate");
      listener && emit("update:canAnimate", clock.canAnimate);
      listener = vm.getInstanceListener(instance, "update:clockRange");
      listener && emit("update:clockRange", clock.clockRange);
      listener = vm.getInstanceListener(instance, "update:clockStep");
      listener && emit("update:clockStep", clock.clockStep);
      listener = vm.getInstanceListener(instance, "update:multiplier");
      listener && emit("update:multiplier", clock.multiplier);
      listener = vm.getInstanceListener(instance, "update:startTime");
      listener && emit("update:startTime", clock.startTime);
      listener = vm.getInstanceListener(instance, "update:stopTime");
      listener && emit("update:stopTime", clock.stopTime);
      setTrackView(clock);
      const { JulianDate, Cartesian3 } = Cesium;
      listener = vm.getInstanceListener(instance, "stopArrived");
      if (listener && props.shouldAnimate) {
        for (let i = 0; i < overlays.value.length; i++) {
          const overlay = overlays.value[i];
          const currentPosition = overlay._sampledPosition.getValue(clock.currentTime);
          const dynamicOverlayOpts = props.dynamicOverlays[i];
          for (let j = 0; j < dynamicOverlayOpts.sampledPositions.length; j++) {
            const sampledPosition = dynamicOverlayOpts.sampledPositions[j];
            const stopPostion = cesiumHelpers.makeCartesian3(sampledPosition.position);
            const stopTime = cesiumHelpers.makeJulianDate(sampledPosition.time);
            const positionFlag = Cartesian3.equalsEpsilon(currentPosition, stopPostion, props.positionPrecision);
            const timeFlag = JulianDate.equalsEpsilon(clock.currentTime, stopTime, props.timePrecision);
            let arrivedFlag = false;
            switch (props.stopArrivedFlag) {
              case "time":
                arrivedFlag = timeFlag;
                break;
              case "position":
                arrivedFlag = positionFlag;
                break;
              case "both":
                arrivedFlag = timeFlag && positionFlag;
                break;
              case "or":
                arrivedFlag = timeFlag || positionFlag;
                break;
            }
            if (arrivedFlag) {
              emit("stopArrived", overlay, sampledPosition);
              break;
            }
          }
        }
      }
    };
    const addDynamicOverlays = (datasource, dynamicOverlays) => {
      for (let i = 0; i < dynamicOverlays.length; i++) {
        const entityOptions = dynamicOverlays[i];
        const entityOptionsTransform = commonState.transformProps(entityOptions);
        const dynamicOverlay = new DynamicOverlay["default"](entityOptionsTransform);
        overlays.value.push(dynamicOverlay);
        const entity = datasource.entities.add(dynamicOverlay._entity);
        entityOptionsTransform.sampledPositions.forEach((sampledPosition) => {
          if (sampledPosition.time) {
            dynamicOverlay.addPosition(sampledPosition.position, sampledPosition.time);
          } else if (sampledPosition.interval) {
            sampledPosition.time = dynamicOverlay.addPosition(sampledPosition.position, sampledPosition.interval || props.defaultInterval);
          }
        });
        entityOptions.id !== entity.id && (entityOptions.id = entity.id);
        util.addCustomProperty(entity, entityOptionsTransform, ["id"]);
      }
    };
    instance.mount = async () => {
      const { viewer } = $services;
      const datasource = instance.cesiumObject;
      datasource.show = props.show;
      addDynamicOverlays(datasource, props.dynamicOverlays);
      return viewer.dataSources.add(datasource).then(() => {
        restoreClockOpts.value.startTime = viewer.clock.startTime;
        restoreClockOpts.value.stopTime = viewer.clock.stopTime;
        restoreClockOpts.value.currentTime = viewer.clock.currentTime;
        restoreClockOpts.value.multiplier = viewer.clock.multiplier;
        restoreClockOpts.value.clockStep = viewer.clock.clockStep;
        restoreClockOpts.value.clockRange = viewer.clock.clockRange;
        restoreClockOpts.value.canAnimate = viewer.clock.canAnimate;
        restoreClockOpts.value.shouldAnimate = viewer.clock.shouldAnimate;
        if (props.startTime) {
          viewer.clock.startTime = cesiumHelpers.makeJulianDate(props.startTime);
        }
        if (props.stopTime) {
          viewer.clock.stopTime = cesiumHelpers.makeJulianDate(props.stopTime);
        }
        if (props.currentTime) {
          viewer.clock.currentTime = cesiumHelpers.makeJulianDate(props.currentTime);
        }
        viewer.clock.multiplier = props.multiplier;
        viewer.clock.clockStep = props.clockStep;
        viewer.clock.clockRange = props.clockRange;
        viewer.clock.canAnimate = false;
        viewer.clock.shouldAnimate = props.shouldAnimate;
        viewer.clock.onTick.addEventListener(onClockTick);
        const listener = vm.getInstanceListener(instance, "onStop");
        listener && viewer.clock.onStop.addEventListener(listener);
        return true;
      });
    };
    instance.unmount = async () => {
      const { viewer } = $services;
      const datasource = instance.cesiumObject;
      viewer.dataSources.remove(datasource, true);
      viewer.clock.startTime = restoreClockOpts.value.startTime;
      viewer.clock.stopTime = restoreClockOpts.value.stopTime;
      viewer.clock.multiplier = restoreClockOpts.value.multiplier;
      viewer.clock.clockStep = restoreClockOpts.value.clockStep;
      viewer.clock.clockRange = restoreClockOpts.value.clockRange;
      viewer.clock.canAnimate = restoreClockOpts.value.canAnimate;
      viewer.clock.shouldAnimate = restoreClockOpts.value.shouldAnimate;
      overlays.value.length = 0;
      viewer.clock.onTick.removeEventListener(onClockTick);
      const listener = vm.getInstanceListener(instance, "onStop");
      listener && viewer.clock.onStop.removeEventListener(listener);
      trackingOverlay.value && (viewer.trackedEntity = void 0);
      return true;
    };
    const setTrackView = (clock) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if (trackView.value && trackingOverlay.value) {
        const { viewer } = $services;
        if (Cesium.JulianDate.greaterThan(clock.currentTime, clock.stopTime)) {
          viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
          trackingOverlay.value = null;
          return;
        }
        const position = trackingOverlay.value._sampledPosition.getValue(clock.currentTime);
        let offset = new Cesium.HeadingPitchRange();
        switch (trackView.value.mode) {
          case "TP":
            offset.heading = 0;
            offset.pitch = ((_b = (_a = trackView.value) == null ? void 0 : _a.offset) == null ? void 0 : _b.pitch) || Cesium.Math.toRadians(-90);
            offset.range = ((_d = (_c = trackView.value) == null ? void 0 : _c.offset) == null ? void 0 : _d.range) || 1e3;
            break;
          case "FP": {
            const nextTickTime = Cesium.JulianDate.addSeconds(clock.currentTime, 1 / 60, new Cesium.JulianDate());
            const nextTickPosition = trackingOverlay.value._sampledPosition.getValue(nextTickTime) || position;
            offset.heading = Cesium.Math.toRadians(cesiumHelpers.getPolylineSegmentHeading(position, nextTickPosition));
            offset.pitch = (((_f = (_e = trackView.value) == null ? void 0 : _e.offset) == null ? void 0 : _f.pitch) || Cesium.Math.toRadians(-45)) + cesiumHelpers.getPolylineSegmentPitch(position, nextTickPosition);
            offset.range = ((_h = (_g = trackView.value) == null ? void 0 : _g.offset) == null ? void 0 : _h.range) || 500;
            break;
          }
          case "CUSTOM":
            offset = cesiumHelpers.makeHeadingPitchRang(trackView.value.offset);
        }
        viewer.camera.lookAt(position, offset);
      }
    };
    const trackOverlay = (trackViewOpts, trackOverlay2) => {
      var _a;
      const { viewer } = $services;
      trackViewOpts = trackViewOpts || {
        mode: "FREE"
      };
      if (trackViewOpts.mode === "FREE") {
        viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
        if (trackingOverlay.value) {
          viewer.trackedEntity = void 0;
          trackingOverlay.value = null;
          trackView.value = null;
        }
        return;
      }
      if (trackOverlay2 instanceof DynamicOverlay["default"]) {
        trackingOverlay.value = trackOverlay2;
      } else if (typeof trackOverlay2 === "string" || typeof trackOverlay2 === "number") {
        trackingOverlay.value = lodashUnified.find(overlays.value, (v) => v.id === trackOverlay2);
      } else if (overlays.value.length) {
        trackingOverlay.value = overlays.value[0];
      }
      viewer.trackedEntity = vue.toRaw(trackingOverlay.value._entity);
      if (trackViewOpts.mode === "TRACKED") {
        if ((_a = trackViewOpts == null ? void 0 : trackViewOpts.viewFrom) == null ? void 0 : _a.length) {
          viewer.trackedEntity.viewFrom = new Cesium.Cartesian3(trackViewOpts.viewFrom[0], trackViewOpts.viewFrom[1], trackViewOpts.viewFrom[2]);
        }
        trackView.value = null;
      } else {
        trackView.value = trackViewOpts;
      }
    };
    const zoomToOverlay = (offset, viewOverlays) => {
      const { viewer } = $services;
      if (trackingOverlay.value) {
        viewer.trackedEntity = void 0;
        trackingOverlay.value = null;
      }
      let target;
      if (Array.isArray(viewOverlays) && viewOverlays.length) {
        if (viewOverlays[0] instanceof DynamicOverlay["default"]) {
          target = viewOverlays.map((v) => vue.toRaw(v._entity));
        } else {
          target = viewOverlays.map((id) => vue.toRaw(lodashUnified.find(overlays.value, (v) => v.id === id)._entity));
        }
      } else {
        target = instance.cesiumObject;
      }
      return viewer.zoomTo(target, Cesium.defined(offset) ? cesiumHelpers.makeHeadingPitchRang(offset) : void 0);
    };
    vue.onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    Object.assign(instance.proxy, { getOverlays: () => overlays.value, trackOverlay, zoomToOverlay });
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = OverlayDynamic;
exports.dynamicOverlayProps = dynamicOverlayProps;
//# sourceMappingURL=index.js.map
