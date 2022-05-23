import { inject, onUnmounted } from 'vue';
import mitt from 'mitt';
import { getObjClassName, removeEmpty, isEmptyObj } from '../../utils/util.mjs';
import { mergeDescriptors } from '../../utils/merge-descriptors.mjs';
import { getVcParentInstance } from '../../utils/private/vm.mjs';
import * as cesiumProps from '../../utils/cesium-props.mjs';
import { vcKey } from '../../utils/config.mjs';
import useLog from '../private/use-log.mjs';
import { useLocale } from '../use-locale/index.mjs';
import useEvents from '../use-events/index.mjs';
import { isEqual } from 'lodash-unified';
import { isFunction } from '@vue/shared';

function useCommon(props, { emit }, vcInstance) {
  const logger = useLog(vcInstance);
  vcInstance.alreadyListening = [];
  vcInstance.removeCallbacks = [];
  let unwatchFns = [];
  vcInstance.mounted = false;
  const vcMitt = mitt();
  vcInstance.vcMitt = vcMitt;
  const $services = inject(vcKey);
  const { t } = useLocale();
  if ($services === void 0) {
    console.error(`${vcInstance.cesiumClass} ${t("vc.loadError")}`);
    return;
  }
  const parentVcInstance = getVcParentInstance(vcInstance);
  const eventsState = useEvents(props, vcInstance, logger);
  vcInstance.children = [];
  const entityGraphics = [
    "billboard",
    "box",
    "corridor",
    "cylinder",
    "ellipse",
    "ellipsoid",
    "label",
    "model",
    "tileset",
    "path",
    "plane",
    "point",
    "polygon",
    "polyline",
    "polylineVolume",
    "rectangle",
    "wall"
  ];
  const beforeLoad = async () => {
    emit("beforeLoad", vcInstance);
    if (parentVcInstance.nowaiting) {
      return true;
    } else {
      await parentVcInstance.proxy.creatingPromise;
    }
  };
  const load = async () => {
    var _a;
    if (vcInstance.mounted) {
      return false;
    }
    logger.debug(`${vcInstance.cesiumClass}---loading`);
    await beforeLoad();
    const { Cesium: Cesium2, viewer } = $services;
    vcInstance.viewer = viewer;
    vcInstance.Cesium = Cesium2;
    if (!parentVcInstance.cesiumObject && !parentVcInstance.nowaiting) {
      return await ((_a = parentVcInstance.proxy) == null ? void 0 : _a.load());
    }
    setPropsWatcher(true);
    return createCesiumObject().then(async (cesiumObject) => {
      vcInstance.cesiumObject = cesiumObject;
      return mount().then(() => {
        vcInstance.mounted = true;
        parentVcInstance.children.push(vcInstance);
        Object.assign(vcInstance.proxy, {
          cesiumObject: vcInstance.cesiumObject
        });
        const readyObj = { Cesium: Cesium2, viewer, cesiumObject, vm: vcInstance.proxy };
        emit("ready", readyObj);
        vcMitt.emit("ready", readyObj);
        logger.debug(`${vcInstance.cesiumClass}---loaded`);
        return readyObj;
      });
    });
  };
  const beforeUnload = async () => {
    await vcInstance.unloadingPromise;
  };
  const unload = async () => {
    await beforeUnload();
    for (let i = 0; i < vcInstance.children.length; i++) {
      const vcChildCmp = vcInstance.children[i].proxy;
      await vcChildCmp.unload();
    }
    vcInstance.children.length = 0;
    return vcInstance.mounted ? unmount().then(async () => {
      setPropsWatcher(false);
      vcInstance.cesiumObject = void 0;
      vcInstance.mounted = false;
      vcInstance.removeCallbacks.forEach((removeCallback) => {
        removeCallback();
      });
      emit("destroyed", vcInstance);
      logger.debug(`${vcInstance.cesiumClass}---unmounted`);
      return vcInstance.renderByParent && !vcInstance.unloadingPromise ? parentVcInstance.proxy.unload() : true;
    }) : false;
  };
  const reload = async () => {
    return unload().then(() => {
      return load();
    });
  };
  const mount = async () => {
    var _a;
    eventsState.registerEvents(true);
    return ((_a = vcInstance.mount) == null ? void 0 : _a.call(vcInstance)) || true;
  };
  const unmount = async () => {
    var _a;
    eventsState.registerEvents(false);
    return ((_a = vcInstance.unmount) == null ? void 0 : _a.call(vcInstance)) || true;
  };
  const createCesiumObject = async () => {
    logger.debug("do createCesiumObject");
    if (isFunction(vcInstance.createCesiumObject)) {
      return vcInstance.createCesiumObject();
    } else {
      const options = transformProps(props);
      return new Cesium[vcInstance.cesiumClass](options);
    }
  };
  const deepWatchHandler = (vueProp, watcherOptions) => {
    let deep = watcherOptions == null ? void 0 : watcherOptions.deep;
    const {
      SampledPositionProperty,
      Appearance,
      DebugAppearance,
      MaterialAppearance,
      PolylineColorAppearance,
      EllipsoidSurfaceAppearance,
      PerInstanceColorAppearance,
      PolylineMaterialAppearance
    } = Cesium;
    if (vueProp === "position") {
      deep = !(vcInstance.proxy[vueProp] instanceof SampledPositionProperty);
    } else if (vueProp === "appearance" || vueProp === "depthFailAppearance") {
      const value = vcInstance.proxy[vueProp];
      deep = !(value instanceof Appearance || value instanceof DebugAppearance || value instanceof MaterialAppearance || value instanceof PolylineColorAppearance || value instanceof EllipsoidSurfaceAppearance || value instanceof PerInstanceColorAppearance || value instanceof PolylineMaterialAppearance || getObjClassName(value).indexOf("Appearance") !== -1);
    }
    return deep;
  };
  const setPropsWatcher = (register) => {
    if (register) {
      if (!vcInstance.cesiumClass || !Cesium[vcInstance.cesiumClass]) {
        return;
      }
      props && Object.keys(props).forEach((vueProp) => {
        var _a, _b, _c, _d, _e;
        let cesiumProp = vueProp;
        if (vueProp === "labelStyle" || vueProp === "wmtsStyle") {
          cesiumProp = "style";
        } else if (vueProp === "bmKey") {
          cesiumProp = "key";
        }
        if (((_b = (_a = vcInstance.proxy) == null ? void 0 : _a.$options.watch) == null ? void 0 : _b[vueProp]) || vcInstance.alreadyListening.indexOf(vueProp) !== -1) {
          return;
        }
        const watcherOptions = (_d = (_c = vcInstance.proxy) == null ? void 0 : _c.$options.props[vueProp]) == null ? void 0 : _d.watcherOptions;
        const unwatch = (_e = vcInstance.proxy) == null ? void 0 : _e.$watch(vueProp, async (val, oldVal) => {
          await vcInstance.proxy.creatingPromise;
          const { cesiumObject } = vcInstance;
          const pd = cesiumObject && Object.getOwnPropertyDescriptor(cesiumObject, cesiumProp);
          const pdProto = cesiumObject && Object.getOwnPropertyDescriptor(Object.getPrototypeOf(cesiumObject), cesiumProp);
          const hasSetter = pd && (pd.writable || pd.set) || pdProto && (pdProto.writable || pdProto.set);
          if (hasSetter) {
            if (watcherOptions && watcherOptions.cesiumObjectBuilder) {
              const newVal = watcherOptions.cesiumObjectBuilder.call(vcInstance, val, vcInstance.viewer.scene.globe.ellipsoid);
              if (!(Cesium.defined(cesiumObject[cesiumProp]) && Cesium.defined(cesiumObject[cesiumProp]._callback))) {
                cesiumObject[cesiumProp] = newVal;
              }
            } else {
              cesiumObject[cesiumProp] = transformProp(cesiumProp, val);
            }
            return true;
          } else {
            if (!isEqual(val, oldVal)) {
              ;
              vcInstance.proxy.reload();
            }
          }
        }, {
          deep: deepWatchHandler(vueProp, watcherOptions)
        });
        unwatchFns.push(unwatch);
      });
    } else {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    }
  };
  const transformProps = (props2, childProps) => {
    let options = {};
    props2 && Object.keys(props2).forEach((vueProp) => {
      let cesiumProp = vueProp;
      if (vueProp === "labelStyle" || vueProp === "wmtsStyle") {
        cesiumProp = "style";
      } else if (vueProp === "bmKey") {
        cesiumProp = "key";
      }
      const className = getObjClassName(props2[vueProp]);
      if (className && className.indexOf("Graphics") === -1 && entityGraphics.indexOf(cesiumProp) !== -1 && (vcInstance.cesiumClass === "Entity" || vcInstance.cesiumClass.indexOf("DataSource") > 0)) {
        options[cesiumProp] = transformProps(props2[vueProp], childProps);
      } else {
        options[cesiumProp] = transformProp(vueProp, props2[vueProp], childProps);
      }
    });
    options = removeEmpty(options);
    return options;
  };
  const transformProp = (prop, value, childProps) => {
    var _a, _b;
    const className = getObjClassName(value);
    if (className && className.indexOf("Graphics") === -1 && entityGraphics.indexOf(prop) !== -1 && (vcInstance.cesiumClass === "Entity" || vcInstance.cesiumClass.indexOf("DataSource") > 0 || vcInstance.cesiumClass === "VcOverlayDynamic")) {
      return transformProps(value, childProps);
    } else {
      const cmpName = (_a = vcInstance.proxy) == null ? void 0 : _a.$options.name;
      const propOption = ((_b = vcInstance.proxy) == null ? void 0 : _b.$options.props[prop]) || (childProps == null ? void 0 : childProps[prop]) || cesiumProps[prop] && cesiumProps[prop][prop];
      return (propOption == null ? void 0 : propOption.watcherOptions) && !isEmptyObj(value) ? propOption.watcherOptions.cesiumObjectBuilder.call(vcInstance, value, vcInstance.viewer.scene.globe.ellipsoid) : isFunction(value) && cmpName && (cmpName.indexOf("Graphics") !== -1 || cmpName === "VcEntity" || cmpName.indexOf("Datasource") !== -1) ? new Cesium.CallbackProperty(value, false) : value;
    }
  };
  const getServices = () => {
    return mergeDescriptors({}, $services || {});
  };
  const creatingPromise = new Promise((resolve, reject) => {
    try {
      let isLoading = false;
      if ($services.viewer) {
        isLoading = true;
        load().then((e) => {
          resolve(e);
          isLoading = false;
        });
      }
      parentVcInstance.vcMitt.on("ready", () => {
        if (!isLoading && !vcInstance.isUnmounted) {
          resolve(load());
        }
      });
    } catch (e) {
      reject(e);
    }
  });
  logger.debug(`${vcInstance.cesiumClass}---onCreated`);
  onUnmounted(() => {
    logger.debug(`${vcInstance.cesiumClass}---onUnmounted`);
    vcInstance.unloadingPromise = new Promise((resolve, reject) => {
      unload().then(() => {
        logger.debug(`${vcInstance.cesiumClass}---unloaded`);
        resolve(true);
        vcInstance.unloadingPromise = void 0;
        vcMitt.all.clear();
      });
    });
    vcInstance.alreadyListening = [];
  });
  Object.assign(vcInstance.proxy, {
    creatingPromise,
    load,
    unload,
    reload,
    getCreatingPromise: () => creatingPromise,
    getCesiumObject: () => vcInstance.cesiumObject
  });
  return {
    $services,
    load,
    unload,
    reload,
    creatingPromise,
    transformProp,
    transformProps,
    unwatchFns,
    setPropsWatcher,
    logger,
    getServices
  };
}

export { useCommon as default };
//# sourceMappingURL=index.mjs.map
