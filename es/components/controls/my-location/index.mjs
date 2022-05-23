import AMapLoader from '@amap/amap-jsapi-loader';
import { defineComponent, getCurrentInstance, ref, reactive, watch, nextTick, computed, h, createCommentVNode } from 'vue';
import { VcSpinnerBars, VcSpinnerTail, VcSpinnerPuff, VcSpinnerOval, VcSpinnerOrbit, VcSpinnerIos, VcIcon, VcTooltip, VcBtn } from '../../ui/index.mjs';
import { getVcParentInstance, $, getInstanceListener } from '../../../utils/private/vm.mjs';
import usePosition from '../../../composables/private/use-position.mjs';
import { gcj02towgs84 } from '../../../utils/coordtransform.mjs';
import { makeCartesian3, makeColor } from '../../../utils/cesium-helpers.mjs';
import '../../../utils/util.mjs';
import '../../../composables/index.mjs';
import locationDefaultProps from './defaultProps.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useCommon from '../../../composables/use-common/index.mjs';
import { useLocale } from '../../../composables/use-locale/index.mjs';
import { isPlainObject, isFunction, isArray } from '@vue/shared';

const emits = {
  ...commonEmits,
  locationEvt: (evt) => true
};
const myLocationProps = locationDefaultProps;
var MyLocation = defineComponent({
  name: "VcMyLocation",
  props: myLocationProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcMyLocation";
    instance.cesiumEvents = [];
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { $services } = commonState;
    const { t } = useLocale();
    const rootRef = ref(null);
    const tooltipRef = ref(null);
    const btnRef = ref(null);
    const positioning = ref(false);
    const positionState = usePosition(props, $services);
    const parentInstance = getVcParentInstance(instance);
    const hasVcNavigation = ((_a = parentInstance.proxy) == null ? void 0 : _a.$options.name) === "VcNavigation";
    const canRender = ref(hasVcNavigation);
    const rootStyle = reactive({});
    let datasource;
    let amapGeolocation = void 0;
    watch(() => props, (val) => {
      nextTick(() => {
        if (!instance.mounted) {
          return;
        }
        updateRootStyle();
      });
    }, {
      deep: true
    });
    const myLocationTip = computed(() => {
      return positioning.value ? t("vc.navigation.myLocation.positioning") : isPlainObject(props.tooltip) && props.tooltip.tip || t("vc.navigation.myLocation.myLocationTip");
    });
    instance.createCesiumObject = async () => {
      canRender.value = true;
      const { viewer } = $services;
      const { CustomDataSource } = Cesium;
      const locationDsArray = viewer.dataSources.getByName("__vc-myLocation__");
      if (locationDsArray.length) {
        datasource = locationDsArray[0];
      } else {
        viewer.dataSources.add(new CustomDataSource("__vc-myLocation__")).then((ds) => {
          datasource = ds;
        });
      }
      let promiseLoadAmap = void 0;
      if (props.amap && props.amap.key) {
        const options = props.amap.options;
        promiseLoadAmap = new Promise((resolve, reject) => {
          var _a2, _b;
          AMapLoader.load({
            key: (_a2 = props.amap) == null ? void 0 : _a2.key,
            version: (_b = props.amap) == null ? void 0 : _b.version,
            plugins: ["AMap.Geolocation"]
          }).then((Amap) => {
            amapGeolocation = new Amap.Geolocation(options);
            resolve(amapGeolocation);
          }).catch((e) => {
            commonState.logger.error(e);
            reject(e);
          });
        });
      }
      const promiseAppend = new Promise((resolve, reject) => {
        nextTick(() => {
          if (!hasVcNavigation) {
            const viewerElement = $services.viewer._element;
            viewerElement.appendChild($(rootRef));
            resolve($(rootRef));
          } else {
            resolve($(rootRef));
          }
        });
      });
      return Promise.all([promiseAppend, promiseLoadAmap]).then((e) => {
        return e[0];
      });
    };
    instance.mount = async () => {
      var _a2;
      updateRootStyle();
      const { viewer } = $services;
      (_a2 = viewer.viewerWidgetResized) == null ? void 0 : _a2.raiseEvent({
        type: instance.cesiumClass,
        status: "mounted",
        target: $(rootRef)
      });
      return true;
    };
    instance.unmount = async () => {
      var _a2;
      const { viewer } = $services;
      if (amapGeolocation) {
        const scripts = document.getElementsByTagName("script");
        const removeScripts = [];
        for (const script of scripts) {
          if (script.src.indexOf("/webapi.amap.com/maps") > -1) {
            removeScripts.push(script);
          }
        }
        removeScripts.forEach((script) => {
          document.getElementsByTagName("body")[0].removeChild(script);
        });
      }
      const viewerElement = $services.viewer._element;
      if (!hasVcNavigation) {
        viewerElement.contains($(rootRef)) && viewerElement.removeChild($(rootRef));
      }
      (_a2 = viewer.viewerWidgetResized) == null ? void 0 : _a2.raiseEvent({
        type: instance.cesiumClass,
        status: "unmounted",
        target: $(rootRef)
      });
      return viewer.dataSources.remove(datasource, true);
    };
    const updateRootStyle = () => {
      var _a2;
      const css = positionState.style.value;
      rootStyle.left = css.left;
      rootStyle.top = css.top;
      rootStyle.transform = css.transform;
      if (!hasVcNavigation) {
        const side = positionState.attach.value;
        const btnTarget = (_a2 = $(btnRef)) == null ? void 0 : _a2.$el;
        if (btnTarget !== void 0) {
          const clientRect = btnTarget.getBoundingClientRect();
          if ((side.bottom || side.top) && !side.left && !side.right) {
            css.left = "50%";
            css.transform = "translate(-50%, 0)";
          }
          if ((side.left || side.right) && !side.top && !side.bottom) {
            css.top = "50%";
            css.transform = "translate(0, -50%)";
          }
        }
      }
      Object.assign(rootStyle, css);
    };
    const onHandleClick = () => {
      var _a2;
      (_a2 = $(tooltipRef)) == null ? void 0 : _a2.hide();
      positioning.value = true;
      if (isFunction(props.customAPI)) {
        const position = props.customAPI(handleLocationError);
        zoomToMyLocation(position);
      } else if (amapGeolocation && props.amap && props.amap.key) {
        amapGeolocation.getCurrentPosition((status, result) => {
          var _a3;
          if (status === "complete") {
            let position = [result.position.lng, result.position.lat];
            if ((_a3 = props.amap) == null ? void 0 : _a3.transformToWGS84) {
              position = gcj02towgs84(position[0], position[1]);
            }
            zoomToMyLocation({
              lng: position[0],
              lat: position[1],
              address: result.formattedAddress
            }, result);
          } else {
            handleLocationError(t("vc.navigation.myLocation.fail"), result.message);
          }
        });
      } else if (props.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          zoomToMyLocation({
            lng: position.coords.longitude,
            lat: position.coords.latitude
          }, position);
        }, handleLocationError, {
          enableHighAccuracy: props.geolocation.enableHighAccuracy,
          timeout: props.geolocation.timeout,
          maximumAge: props.geolocation.maximumAge
        });
      } else {
        handleLocationError(t("vc.navigation.myLocation.fail"));
      }
    };
    const zoomToMyLocation = (position, detail) => {
      var _a2;
      const longitude = position.lng;
      const latitude = position.lat;
      const address = position.address;
      const { Rectangle, sampleTerrain, defined, SceneMode } = Cesium;
      const { viewer } = $services;
      datasource.entities.removeAll();
      const myPositionEntity = datasource.entities.add({
        id: props.id,
        position: makeCartesian3([longitude, latitude], viewer.scene.globe.ellipsoid),
        point: {
          color: makeColor(props.pointColor),
          pixelSize: props.pixelSize,
          outlineWidth: props.outlineWidth,
          outlineColor: makeColor(props.outlineColor)
        },
        properties: {
          ...detail
        },
        description: ((_a2 = props.description) == null ? void 0 : _a2.call(this, position, detail)) || describeWithoutUnderscores({
          [t("vc.navigation.myLocation.lng")]: longitude,
          [t("vc.navigation.myLocation.lat")]: latitude,
          [t("vc.navigation.myLocation.address")]: address
        })
      });
      const listener = getInstanceListener(instance, "locationEvt");
      listener && ctx.emit("locationEvt", {
        type: "location",
        position,
        detail,
        entity: myPositionEntity
      });
      const options = {
        duration: props.duration
      };
      defined(props.maximumHeight) && (options.maximumHeight = props.maximumHeight);
      defined(props.hpr) && isArray(props.hpr) && (options.offset = new Cesium.HeadingPitchRange(props.hpr[0], props.hpr[1], props.hpr[2]));
      if (viewer.scene.mode === SceneMode.SCENE2D || viewer.scene.mode === SceneMode.COLUMBUS_VIEW) {
        return viewer.flyTo(myPositionEntity, options).then(() => {
          positioning.value = false;
          listener && ctx.emit("locationEvt", {
            type: "zoomIn",
            camera: viewer.camera,
            status: "end"
          });
        });
      }
      const factor = props.factor;
      const rectangle = Rectangle.fromDegrees(longitude - factor, latitude - factor, longitude + factor, latitude + factor);
      const camera = viewer.scene.camera;
      const destinationCartesian = camera.getRectangleCameraCoordinates(rectangle);
      const destination = viewer.scene.globe.ellipsoid.cartesianToCartographic(destinationCartesian);
      const terrainProvider = viewer.scene.globe.terrainProvider;
      const level = props.level;
      const positions = [Rectangle.center(rectangle)];
      return sampleTerrain(terrainProvider, level, positions).then(function(results) {
        const finalDestinationCartographic = {
          longitude: destination.longitude,
          latitude: destination.latitude,
          height: destination.height + results[0].height
        };
        const finalDestination = viewer.scene.globe.ellipsoid.cartographicToCartesian(finalDestinationCartographic);
        listener && ctx.emit("locationEvt", {
          type: "zoomIn",
          camera: viewer.camera,
          status: "start"
        });
        camera.flyTo({
          duration: props.duration,
          destination: finalDestination,
          complete: () => {
            positioning.value = false;
            listener && ctx.emit("locationEvt", {
              type: "zoomIn",
              camera: viewer.camera,
              status: "end"
            });
          },
          cancel: () => {
            positioning.value = false;
            listener && ctx.emit("locationEvt", {
              type: "zoomIn",
              camera: viewer.camera,
              status: "cancel"
            });
          }
        });
      });
    };
    const describeWithoutUnderscores = (properties, nameProperty) => {
      let html = "";
      if (properties instanceof Cesium.PropertyBag) {
        properties = properties.getValue(Cesium.JulianDate.now());
      }
      for (let key in properties) {
        if (Object.prototype.hasOwnProperty.call(properties, key)) {
          if (key === nameProperty) {
            continue;
          }
          let value = properties[key];
          if (typeof value === "object") {
            value = describeWithoutUnderscores(value);
          } else {
          }
          key = key.replace(/_/g, " ");
          if (Cesium.defined(value)) {
            html += "<tr><th>" + key + "</th><td>" + value + "</td></tr>";
          }
        }
      }
      if (html.length > 0) {
        html = '<table class="cesium-infoBox-defaultTable"><tbody>' + html + "</tbody></table>";
      }
      return html;
    };
    const handleLocationError = (...args) => {
      positioning.value = false;
      commonState.logger.error(...args);
    };
    const getLoadingCmp = () => {
      switch (props.loadingType) {
        case "bars":
          return VcSpinnerBars;
        case "ios":
          return VcSpinnerIos;
        case "orbit":
          return VcSpinnerOrbit;
        case "oval":
          return VcSpinnerOval;
        case "puff":
          return VcSpinnerPuff;
        case "tail":
          return VcSpinnerTail;
        default:
          return VcSpinnerBars;
      }
    };
    const onTooltipBeforeShow = (e) => {
      if (positioning.value) {
        e.cancel = true;
      }
    };
    return () => {
      if (canRender.value) {
        const inner = [];
        inner.push(h(VcIcon, {
          name: props.icon,
          size: props.size
        }));
        inner.push(h("div", null, props.label));
        if (isPlainObject(props.tooltip)) {
          inner.push(h(VcTooltip, {
            ref: tooltipRef,
            onBeforeShow: onTooltipBeforeShow,
            ...props.tooltip
          }, () => h("strong", null, myLocationTip.value)));
        } else {
          inner.push(createCommentVNode("v-if"));
        }
        return h("div", {
          ref: rootRef,
          class: "vc-my-location " + positionState.classes.value,
          style: rootStyle
        }, [
          h(VcBtn, {
            ref: btnRef,
            size: props.size,
            flat: props.flat,
            stack: props.stack,
            round: props.round,
            loading: positioning.value,
            dense: true,
            style: { color: props.color, background: props.background },
            onClick: onHandleClick
          }, {
            default: () => inner,
            loading: () => h(getLoadingCmp())
          })
        ]);
      } else {
        return createCommentVNode("v-if");
      }
    };
  }
});

export { MyLocation as default, myLocationProps };
//# sourceMappingURL=index.mjs.map
