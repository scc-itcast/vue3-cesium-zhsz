import { defineComponent, getCurrentInstance, ref, watch, toRaw, onUnmounted, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { show } from '../../../utils/cesium-props.mjs';
import { addCustomProperty, kebabCase } from '../../../utils/util.mjs';
import DynamicOverlay from '../../../shared/src/DynamicOverlay.mjs';
import { makeJulianDate, makeCartesian3, makeHeadingPitchRang, getPolylineSegmentHeading, getPolylineSegmentPitch } from '../../../utils/cesium-helpers.mjs';
import { cloneDeep, remove, find, differenceBy } from 'lodash-unified';
import { getInstanceListener } from '../../../utils/private/vm.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useCommon from '../../../composables/use-common/index.mjs';

const dynamicOverlayProps = {
  ...show,
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
  ...commonEmits,
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
var OverlayDynamic = defineComponent({
  name: "VcOverlayDynamic",
  props: dynamicOverlayProps,
  emits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcOverlayDynamic";
    instance.cesiumEvents = [];
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { $services } = commonState;
    const overlays = ref([]);
    const restoreClockOpts = ref({});
    const { emit } = ctx;
    const trackingOverlay = ref(null);
    const trackView = ref(null);
    let unwatchFns = [];
    unwatchFns.push(watch(() => props.show, (val) => {
      const datasource = instance.cesiumObject;
      datasource && (datasource.show = val);
    }));
    unwatchFns.push(watch(() => props.name, (val) => {
      const datasource = instance.cesiumObject;
      datasource && (datasource.name = val);
    }));
    unwatchFns.push(watch(() => props.startTime, (val) => {
      const { viewer } = $services;
      if (Cesium.defined(viewer) && val) {
        viewer.clock.startTime = makeJulianDate(val);
      }
    }));
    unwatchFns.push(watch(() => props.stopTime, (val) => {
      const { viewer } = $services;
      if (Cesium.defined(viewer) && val) {
        viewer.clock.stopTime = makeJulianDate(val);
      }
    }));
    unwatchFns.push(watch(() => props.currentTime, (val) => {
      const { viewer } = $services;
      if (Cesium.defined(viewer) && val) {
        viewer.clock.currentTime = makeJulianDate(val);
      }
    }));
    unwatchFns.push(watch(() => props.multiplier, (val) => {
      const { viewer } = $services;
      if (Cesium.defined(viewer)) {
        viewer.clock.multiplier = val;
      }
    }));
    unwatchFns.push(watch(() => props.clockStep, (val) => {
      const { viewer } = $services;
      if (Cesium.defined(viewer)) {
        viewer.clock.clockStep = val;
      }
    }));
    unwatchFns.push(watch(() => props.clockRange, (val) => {
      const { viewer } = $services;
      if (Cesium.defined(viewer)) {
        viewer.clock.clockRange = val;
      }
    }));
    unwatchFns.push(watch(() => props.canAnimate, (val) => {
      const { viewer } = $services;
      if (Cesium.defined(viewer)) {
        viewer.clock.canAnimate = val;
      }
    }));
    unwatchFns.push(watch(() => props.shouldAnimate, (val) => {
      const { viewer } = $services;
      if (Cesium.defined(viewer)) {
        viewer.clock.shouldAnimate = val;
      }
    }));
    unwatchFns.push(watch(() => cloneDeep(props.dynamicOverlays), (newVal, oldVal) => {
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
                remove(overlays.value, (overlay) => overlay.id === modifyEntity.id);
                const entityOptions = v.newOptions;
                addDynamicOverlays(datasource, [entityOptions]);
              }
            }
            const dynamicOverlay = find(overlays.value, (v2) => v2.id === modifyEntity.id);
            if (Cesium.defined(dynamicOverlay)) {
              const oldSampledPositions = v.oldOptions.sampledPositions;
              const newSampledPositions = v.newOptions.sampledPositions;
              const sampledPositionAdds = differenceBy(newSampledPositions, oldSampledPositions, "id");
              const sampledPositionDeletes = differenceBy(oldSampledPositions, newSampledPositions, "id");
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
        const adds = differenceBy(newVal, oldVal, "id");
        const deletes = differenceBy(oldVal, newVal, "id");
        const deletedEntities = [];
        for (let i = 0; i < deletes.length; i++) {
          const deleteEntity = datasource.entities.getById(deletes[i].id);
          deletedEntities.push(deleteEntity);
        }
        deletedEntities.forEach((v) => {
          datasource.entities.remove(v);
          remove(overlays.value, (overlay) => overlay.id === v.id);
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
      let listener = getInstanceListener(instance, "update:currentTime");
      listener && emit("update:currentTime", clock.currentTime);
      listener = getInstanceListener(instance, "update:shouldAnimate");
      listener && emit("update:shouldAnimate", clock.shouldAnimate);
      listener = getInstanceListener(instance, "update:canAnimate");
      listener && emit("update:canAnimate", clock.canAnimate);
      listener = getInstanceListener(instance, "update:clockRange");
      listener && emit("update:clockRange", clock.clockRange);
      listener = getInstanceListener(instance, "update:clockStep");
      listener && emit("update:clockStep", clock.clockStep);
      listener = getInstanceListener(instance, "update:multiplier");
      listener && emit("update:multiplier", clock.multiplier);
      listener = getInstanceListener(instance, "update:startTime");
      listener && emit("update:startTime", clock.startTime);
      listener = getInstanceListener(instance, "update:stopTime");
      listener && emit("update:stopTime", clock.stopTime);
      setTrackView(clock);
      const { JulianDate, Cartesian3 } = Cesium;
      listener = getInstanceListener(instance, "stopArrived");
      if (listener && props.shouldAnimate) {
        for (let i = 0; i < overlays.value.length; i++) {
          const overlay = overlays.value[i];
          const currentPosition = overlay._sampledPosition.getValue(clock.currentTime);
          const dynamicOverlayOpts = props.dynamicOverlays[i];
          for (let j = 0; j < dynamicOverlayOpts.sampledPositions.length; j++) {
            const sampledPosition = dynamicOverlayOpts.sampledPositions[j];
            const stopPostion = makeCartesian3(sampledPosition.position);
            const stopTime = makeJulianDate(sampledPosition.time);
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
        const dynamicOverlay = new DynamicOverlay(entityOptionsTransform);
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
        addCustomProperty(entity, entityOptionsTransform, ["id"]);
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
          viewer.clock.startTime = makeJulianDate(props.startTime);
        }
        if (props.stopTime) {
          viewer.clock.stopTime = makeJulianDate(props.stopTime);
        }
        if (props.currentTime) {
          viewer.clock.currentTime = makeJulianDate(props.currentTime);
        }
        viewer.clock.multiplier = props.multiplier;
        viewer.clock.clockStep = props.clockStep;
        viewer.clock.clockRange = props.clockRange;
        viewer.clock.canAnimate = false;
        viewer.clock.shouldAnimate = props.shouldAnimate;
        viewer.clock.onTick.addEventListener(onClockTick);
        const listener = getInstanceListener(instance, "onStop");
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
      const listener = getInstanceListener(instance, "onStop");
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
            offset.heading = Cesium.Math.toRadians(getPolylineSegmentHeading(position, nextTickPosition));
            offset.pitch = (((_f = (_e = trackView.value) == null ? void 0 : _e.offset) == null ? void 0 : _f.pitch) || Cesium.Math.toRadians(-45)) + getPolylineSegmentPitch(position, nextTickPosition);
            offset.range = ((_h = (_g = trackView.value) == null ? void 0 : _g.offset) == null ? void 0 : _h.range) || 500;
            break;
          }
          case "CUSTOM":
            offset = makeHeadingPitchRang(trackView.value.offset);
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
      if (trackOverlay2 instanceof DynamicOverlay) {
        trackingOverlay.value = trackOverlay2;
      } else if (typeof trackOverlay2 === "string" || typeof trackOverlay2 === "number") {
        trackingOverlay.value = find(overlays.value, (v) => v.id === trackOverlay2);
      } else if (overlays.value.length) {
        trackingOverlay.value = overlays.value[0];
      }
      viewer.trackedEntity = toRaw(trackingOverlay.value._entity);
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
        if (viewOverlays[0] instanceof DynamicOverlay) {
          target = viewOverlays.map((v) => toRaw(v._entity));
        } else {
          target = viewOverlays.map((id) => toRaw(find(overlays.value, (v) => v.id === id)._entity));
        }
      } else {
        target = instance.cesiumObject;
      }
      return viewer.zoomTo(target, Cesium.defined(offset) ? makeHeadingPitchRang(offset) : void 0);
    };
    onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    Object.assign(instance.proxy, { getOverlays: () => overlays.value, trackOverlay, zoomToOverlay });
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { OverlayDynamic as default, dynamicOverlayProps };
//# sourceMappingURL=index.mjs.map
