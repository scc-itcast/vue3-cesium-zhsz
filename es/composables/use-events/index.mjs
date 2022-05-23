import { kebabCase } from '../../utils/util.mjs';
import { getInstanceListener } from '../../utils/private/vm.mjs';
import { isArray, capitalize } from '@vue/shared';

function useEvents(props, vcInstance, logger) {
  const bindEvents = (cesiumObject, cesiumEvents, register = true) => {
    const ev = cesiumEvents || vcInstance.cesiumEvents || [];
    ev && ev.forEach((eventName) => {
      if (cesiumObject[eventName]) {
        const listener = getInstanceListener(vcInstance, eventName);
        const methodName = register ? "addEventListener" : "removeEventListener";
        listener && cesiumObject[eventName][methodName](listener);
      } else if (process.env.VUECESIUM_DEBUG) {
        logger.warn("Add event linstener of " + eventName + " failed, try to upgrade Cesium to latest version.");
      }
    });
  };
  const registerEvents = (register) => {
    var _a;
    const { viewer, cesiumObject } = vcInstance;
    if (cesiumObject === void 0) {
      return;
    }
    const { ScreenSpaceEventHandler, ScreenSpaceEventType } = Cesium;
    if (!viewer._vcPickScreenSpaceEventHandler || !viewer._vcViewerScreenSpaceEventHandler) {
      viewer._vcPickScreenSpaceEventHandler = new ScreenSpaceEventHandler(viewer.canvas);
      viewer._vcViewerScreenSpaceEventHandler = new ScreenSpaceEventHandler(viewer.canvas);
      viewerScreenSpaceEvents.forEach((type) => {
        const listener = getInstanceListener(vcInstance, type);
        listener && viewer._vcViewerScreenSpaceEventHandler.setInputAction(listener, ScreenSpaceEventType[type]);
        viewer._vcPickScreenSpaceEventHandler.setInputAction(pickedAction.bind({ eventName: type, viewer }), ScreenSpaceEventType[type]);
      });
    }
    bindEvents(cesiumObject, vcInstance.cesiumEvents || [], register);
    (_a = vcInstance.cesiumMembersEvents) == null ? void 0 : _a.forEach((eventName) => {
      const cesiumIntanceMember = isArray(eventName.name) && eventName.name.length > 0 && cesiumObject[eventName.name[0]] ? cesiumObject[eventName.name[0]][eventName.name[1]] : cesiumObject[eventName.name];
      cesiumIntanceMember && bindEvents(cesiumIntanceMember, eventName.events, register);
    });
    if (props.enableMouseEvent) {
      pickEvents.forEach((eventName) => {
        const listener = getInstanceListener(vcInstance, eventName);
        if (register) {
          listener && (cesiumObject[eventName] = listener);
        } else {
          listener && delete cesiumObject[eventName];
        }
      });
    }
  };
  function pickedAction(movement) {
    if (!props.enableMouseEvent || !movement) {
      return;
    }
    const viewer = this.viewer;
    const { eventName } = this;
    const position = movement.position || movement.endPosition;
    if (!position) {
      return;
    }
    const pickedFeatureAndCallbackNames = [];
    let callbackName;
    if (eventName.indexOf("LEFT_DOUBLE_CLICK") !== -1) {
      callbackName = "dblclick";
    } else if (eventName.indexOf("CLICK") !== -1) {
      callbackName = "click";
    } else if (eventName.indexOf("DOWN") !== -1) {
      callbackName = "mousedown";
    } else if (eventName.indexOf("UP") !== -1) {
      callbackName = "mouseup";
    } else if (eventName.indexOf("MOUSE_MOVE") !== -1) {
      callbackName = "mousemove";
    }
    let callbackNameOut;
    if (callbackName === "mousemove") {
      callbackNameOut = "mouseout";
    } else if (callbackName === "click") {
      callbackNameOut = "clickout";
    }
    const pickedFeature = viewer.scene.pick(position);
    if (!Cesium.defined(pickedFeature)) {
      if (this.pickedFeature) {
        pickedFeatureAndCallbackNames.push({
          callbackName: callbackNameOut,
          pickedFeature: this.pickedFeature
        });
      }
      this.pickedFeature = void 0;
    } else {
      if (this.pickedFeature && this.pickedFeature.id !== pickedFeature.id) {
        pickedFeatureAndCallbackNames.push({
          callbackName: callbackNameOut,
          pickedFeature: this.pickedFeature
        });
      }
      if (callbackName === "mousemove" && (!this.pickedFeature || this.pickedFeature.id !== pickedFeature.id)) {
        pickedFeatureAndCallbackNames.push({
          callbackName: "mouseover",
          pickedFeature
        });
      }
      pickedFeatureAndCallbackNames.push({
        callbackName,
        pickedFeature
      });
    }
    if (pickedFeatureAndCallbackNames.length === 0) {
      return;
    }
    let intersection;
    const scene = viewer.scene;
    if (scene.mode === Cesium.SceneMode.SCENE3D) {
      const ray = scene.camera.getPickRay(position);
      intersection = scene.globe.pick(ray, scene);
    } else {
      intersection = scene.camera.pickEllipsoid(position, scene.globe.ellipsoid);
    }
    let button = -1;
    if (eventName.indexOf("LEFT") !== -1) {
      button = 0;
    } else if (eventName.indexOf("MIDDLE") !== -1) {
      button = 1;
    } else if (eventName.indexOf("RIGHT") !== -1) {
      button = 2;
    }
    const eventSourceList = [];
    pickedFeatureAndCallbackNames.forEach((item) => {
      const callbackName2 = item.callbackName;
      const pickedFeature2 = item.pickedFeature;
      if (pickedFeature2.id) {
        if (isArray(pickedFeature2.id) && pickedFeature2.id[0] instanceof Cesium.Entity) {
          eventSourceList.push({
            callbackName: callbackName2,
            cesiumObject: pickedFeature2.id[0].entityCollection.owner,
            pickedFeature: pickedFeature2
          });
        } else if (pickedFeature2.id instanceof Cesium.Entity) {
          eventSourceList.push({
            callbackName: callbackName2,
            cesiumObject: pickedFeature2.id,
            pickedFeature: pickedFeature2
          });
          eventSourceList.push({
            callbackName: callbackName2,
            cesiumObject: pickedFeature2.id.entityCollection.owner,
            pickedFeature: pickedFeature2
          });
        }
      }
      const getParentCollection = (e) => {
        eventSourceList.push({
          callbackName: callbackName2,
          cesiumObject: e,
          pickedFeature: pickedFeature2
        });
        if (e._vcParent) {
          getParentCollection(e._vcParent);
        }
      };
      if (pickedFeature2.primitive) {
        if (pickedFeature2.primitive._vcParent) {
          getParentCollection(pickedFeature2.primitive._vcParent);
        }
        eventSourceList.push({
          callbackName: callbackName2,
          cesiumObject: pickedFeature2.primitive,
          pickedFeature: pickedFeature2
        });
      }
      if (pickedFeature2.collection) {
        if (pickedFeature2.collection._vcParent) {
          getParentCollection(pickedFeature2.collection._vcParent);
        }
        eventSourceList.push({
          callbackName: callbackName2,
          cesiumObject: pickedFeature2.collection,
          pickedFeature: pickedFeature2
        });
      }
    });
    eventSourceList.forEach((event) => {
      if (event.callbackName) {
        const fn = event.cesiumObject[event.callbackName] || event.cesiumObject[`on${capitalize(event.callbackName)}`] || event.cesiumObject[kebabCase(`on${capitalize(event.callbackName)}`)];
        fn && fn({
          type: `on${event.callbackName}`,
          windowPosition: position,
          surfacePosition: intersection,
          pickedFeature: event.pickedFeature,
          button,
          cesiumObject: event.cesiumObject
        });
      }
    });
    this.pickedFeature = pickedFeature;
  }
  return {
    bindEvents,
    registerEvents
  };
}
const viewerScreenSpaceEvents = [
  "LEFT_CLICK",
  "LEFT_DOUBLE_CLICK",
  "LEFT_DOWN",
  "LEFT_UP",
  "MIDDLE_CLICK",
  "MIDDLE_DOWN",
  "MIDDLE_UP",
  "MOUSE_MOVE",
  "PINCH_END",
  "PINCH_MOVE",
  "PINCH_START",
  "RIGHT_CLICK",
  "RIGHT_DOWN",
  "RIGHT_UP",
  "WHEEL"
];
const pickEvents = ["mousedown", "mouseup", "click", "clickout", "dblclick", "mousemove", "mouseover", "mouseout"];

export { useEvents as default, pickEvents, viewerScreenSpaceEvents };
//# sourceMappingURL=index.mjs.map
