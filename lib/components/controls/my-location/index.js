'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var AMapLoader = require('@amap/amap-jsapi-loader');
var vue = require('vue');
var index$2 = require('../../ui/index.js');
var vm = require('../../../utils/private/vm.js');
var usePosition = require('../../../composables/private/use-position.js');
var coordtransform = require('../../../utils/coordtransform.js');
var cesiumHelpers = require('../../../utils/cesium-helpers.js');
require('../../../utils/util.js');
require('../../../composables/index.js');
var defaultProps = require('./defaultProps.js');
var emits$1 = require('../../../utils/emits.js');
var index = require('../../../composables/use-common/index.js');
var index$1 = require('../../../composables/use-locale/index.js');
var shared = require('@vue/shared');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var AMapLoader__default = /*#__PURE__*/_interopDefaultLegacy(AMapLoader);

const emits = {
  ...emits$1.commonEmits,
  locationEvt: (evt) => true
};
const myLocationProps = defaultProps["default"];
var MyLocation = vue.defineComponent({
  name: "VcMyLocation",
  props: myLocationProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "VcMyLocation";
    instance.cesiumEvents = [];
    const commonState = index["default"](props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { $services } = commonState;
    const { t } = index$1.useLocale();
    const rootRef = vue.ref(null);
    const tooltipRef = vue.ref(null);
    const btnRef = vue.ref(null);
    const positioning = vue.ref(false);
    const positionState = usePosition["default"](props, $services);
    const parentInstance = vm.getVcParentInstance(instance);
    const hasVcNavigation = ((_a = parentInstance.proxy) == null ? void 0 : _a.$options.name) === "VcNavigation";
    const canRender = vue.ref(hasVcNavigation);
    const rootStyle = vue.reactive({});
    let datasource;
    let amapGeolocation = void 0;
    vue.watch(() => props, (val) => {
      vue.nextTick(() => {
        if (!instance.mounted) {
          return;
        }
        updateRootStyle();
      });
    }, {
      deep: true
    });
    const myLocationTip = vue.computed(() => {
      return positioning.value ? t("vc.navigation.myLocation.positioning") : shared.isPlainObject(props.tooltip) && props.tooltip.tip || t("vc.navigation.myLocation.myLocationTip");
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
          AMapLoader__default["default"].load({
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
        vue.nextTick(() => {
          if (!hasVcNavigation) {
            const viewerElement = $services.viewer._element;
            viewerElement.appendChild(vm.$(rootRef));
            resolve(vm.$(rootRef));
          } else {
            resolve(vm.$(rootRef));
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
        target: vm.$(rootRef)
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
        viewerElement.contains(vm.$(rootRef)) && viewerElement.removeChild(vm.$(rootRef));
      }
      (_a2 = viewer.viewerWidgetResized) == null ? void 0 : _a2.raiseEvent({
        type: instance.cesiumClass,
        status: "unmounted",
        target: vm.$(rootRef)
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
        const btnTarget = (_a2 = vm.$(btnRef)) == null ? void 0 : _a2.$el;
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
      (_a2 = vm.$(tooltipRef)) == null ? void 0 : _a2.hide();
      positioning.value = true;
      if (shared.isFunction(props.customAPI)) {
        const position = props.customAPI(handleLocationError);
        zoomToMyLocation(position);
      } else if (amapGeolocation && props.amap && props.amap.key) {
        amapGeolocation.getCurrentPosition((status, result) => {
          var _a3;
          if (status === "complete") {
            let position = [result.position.lng, result.position.lat];
            if ((_a3 = props.amap) == null ? void 0 : _a3.transformToWGS84) {
              position = coordtransform.gcj02towgs84(position[0], position[1]);
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
        position: cesiumHelpers.makeCartesian3([longitude, latitude], viewer.scene.globe.ellipsoid),
        point: {
          color: cesiumHelpers.makeColor(props.pointColor),
          pixelSize: props.pixelSize,
          outlineWidth: props.outlineWidth,
          outlineColor: cesiumHelpers.makeColor(props.outlineColor)
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
      const listener = vm.getInstanceListener(instance, "locationEvt");
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
      defined(props.hpr) && shared.isArray(props.hpr) && (options.offset = new Cesium.HeadingPitchRange(props.hpr[0], props.hpr[1], props.hpr[2]));
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
          return index$2.VcSpinnerBars;
        case "ios":
          return index$2.VcSpinnerIos;
        case "orbit":
          return index$2.VcSpinnerOrbit;
        case "oval":
          return index$2.VcSpinnerOval;
        case "puff":
          return index$2.VcSpinnerPuff;
        case "tail":
          return index$2.VcSpinnerTail;
        default:
          return index$2.VcSpinnerBars;
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
        inner.push(vue.h(index$2.VcIcon, {
          name: props.icon,
          size: props.size
        }));
        inner.push(vue.h("div", null, props.label));
        if (shared.isPlainObject(props.tooltip)) {
          inner.push(vue.h(index$2.VcTooltip, {
            ref: tooltipRef,
            onBeforeShow: onTooltipBeforeShow,
            ...props.tooltip
          }, () => vue.h("strong", null, myLocationTip.value)));
        } else {
          inner.push(vue.createCommentVNode("v-if"));
        }
        return vue.h("div", {
          ref: rootRef,
          class: "vc-my-location " + positionState.classes.value,
          style: rootStyle
        }, [
          vue.h(index$2.VcBtn, {
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
            loading: () => vue.h(getLoadingCmp())
          })
        ]);
      } else {
        return vue.createCommentVNode("v-if");
      }
    };
  }
});

exports["default"] = MyLocation;
exports.myLocationProps = myLocationProps;
//# sourceMappingURL=index.js.map
