import { heightToLevel, flyToCamera } from '../../../utils/cesium-helpers.mjs';
import { $, getInstanceListener } from '../../../utils/private/vm.mjs';
import { ref } from 'vue';

function useZoomControl(props, { emit }, vcInstance, $services) {
  const zoomInTooltipRef = ref(null);
  const zoomOutTooltipRef = ref(null);
  const resetTooltipRef = ref(null);
  const zoomIn = (e) => {
    zoom(1 / props.zoomAmount, e);
  };
  const zoomOut = (e) => {
    zoom(props.zoomAmount, e);
  };
  const zoom = (relativeAmount, e) => {
    var _a, _b;
    (_a = $(zoomInTooltipRef)) == null ? void 0 : _a.hide();
    (_b = $(zoomOutTooltipRef)) == null ? void 0 : _b.hide();
    const { Cartesian3, defined, IntersectionTests, Ray, SceneMode } = Cesium;
    const { viewer } = $services;
    if (defined(viewer)) {
      const scene = viewer.scene;
      const sscc = scene.screenSpaceCameraController;
      if (!sscc.enableInputs || !sscc.enableZoom) {
        return;
      }
      if (scene.mode === SceneMode.COLUMBUS_VIEW && !sscc.enableTranslate) {
        return;
      }
      const camera = scene.camera;
      let orientation;
      switch (scene.mode) {
        case SceneMode.MORPHING: {
          break;
        }
        case SceneMode.SCENE2D: {
          camera.zoomIn(camera.positionCartographic.height * (1 - relativeAmount));
          break;
        }
        default: {
          let focus;
          if (defined(viewer.trackedEntity)) {
            focus = new Cesium.Cartesian3();
          } else {
            focus = getCameraFocus(viewer.scene);
          }
          if (!Cesium.defined(focus)) {
            const ray = new Ray(camera.worldToCameraCoordinatesPoint(scene.globe.ellipsoid.cartographicToCartesian(camera.positionCartographic)), camera.directionWC);
            focus = IntersectionTests.grazingAltitudeLocation(ray, scene.globe.ellipsoid);
            orientation = {
              heading: camera.heading,
              pitch: camera.pitch,
              roll: camera.roll
            };
          } else {
            orientation = {
              direction: camera.direction,
              up: camera.up
            };
          }
          const cartesian3Scratch = new Cartesian3();
          const direction = Cartesian3.subtract(camera.position, focus, cartesian3Scratch);
          const movementVector = Cartesian3.multiplyByScalar(direction, relativeAmount, direction);
          const endPosition = Cartesian3.add(focus, movementVector, focus);
          const type = relativeAmount < 1 ? "zoomIn" : "zoomOut";
          const target = e.currentTarget;
          const level = heightToLevel(camera.positionCartographic.height).toFixed(0);
          const listener = getInstanceListener(vcInstance, "zoomEvt");
          listener && emit("zoomEvt", {
            type,
            camera: viewer.camera,
            status: "start",
            target,
            level
          });
          if (Cesium.defined(viewer.trackedEntity) || scene.mode === SceneMode.COLUMBUS_VIEW) {
            camera.position = endPosition;
          } else {
            camera.flyTo({
              destination: endPosition,
              orientation,
              duration: props.duration,
              convert: false,
              complete: () => {
                listener && emit("zoomEvt", {
                  type,
                  camera: viewer.camera,
                  status: "end",
                  target,
                  level
                });
              },
              cancel: () => {
                listener && emit("zoomEvt", {
                  type,
                  camera: viewer.camera,
                  status: "cancel",
                  target,
                  level
                });
              }
            });
          }
        }
      }
    }
  };
  const zoomReset = (e) => {
    var _a;
    (_a = $(resetTooltipRef)) == null ? void 0 : _a.hide();
    const { viewer } = $services;
    const scene = viewer.scene;
    const sscc = scene.screenSpaceCameraController;
    if (!sscc.enableInputs) {
      return;
    }
    if (Cesium.defined(viewer.trackedEntity)) {
      const trackedEntity = viewer.trackedEntity;
      viewer.trackedEntity = void 0;
      viewer.trackedEntity = trackedEntity;
    } else {
      const listener = getInstanceListener(vcInstance, "zoomEvt");
      const target = e.currentTarget;
      const level = heightToLevel(viewer.camera.positionCartographic.height).toFixed(0);
      listener && emit("zoomEvt", {
        type: "zoomReset",
        camera: viewer.camera,
        status: "start",
        target,
        level
      });
      const complete = () => {
        listener && emit("zoomEvt", {
          type: "zoomReset",
          camera: viewer.camera,
          status: "end",
          target,
          level
        });
      };
      const cancel = () => {
        listener && emit("zoomEvt", {
          type: "zoomReset",
          camera: viewer.camera,
          status: "cancel",
          target,
          level
        });
      };
      const resetView = props.defaultResetView;
      const options = {
        duration: props.durationReset,
        complete,
        cancel
      };
      flyToCamera(viewer, resetView, options);
    }
  };
  const getCameraFocus = (scene) => {
    const { defined, IntersectionTests, Ray } = Cesium;
    const ray = new Ray(scene.camera.positionWC, scene.camera.directionWC);
    const intersections = IntersectionTests.rayEllipsoid(ray, scene.globe.ellipsoid);
    if (defined(intersections)) {
      return Ray.getPoint(ray, intersections.start);
    }
    return IntersectionTests.grazingAltitudeLocation(ray, scene.globe.ellipsoid);
  };
  return {
    zoomIn,
    zoomOut,
    zoomReset,
    zoomInTooltipRef,
    zoomOutTooltipRef,
    resetTooltipRef
  };
}

export { useZoomControl as default };
//# sourceMappingURL=use-zoom-control.mjs.map
