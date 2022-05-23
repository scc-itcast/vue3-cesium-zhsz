'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vm = require('../../../utils/private/vm.js');
require('../../../composables/index.js');
var render = require('../../../utils/private/render.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var cesiumHelpers = require('../../../utils/cesium-helpers.js');
var usePortal = require('../../../composables/private/use-portal.js');
var emits$1 = require('../../../utils/emits.js');
var index = require('../../../composables/use-common/index.js');

const htmlOverlayProps = {
  ...cesiumProps.position,
  ...cesiumProps.pixelOffset,
  ...cesiumProps.show,
  autoHidden: {
    type: Boolean,
    default: true
  },
  customClass: String,
  teleport: Object
};
const emits = {
  ...emits$1.commonEmits,
  mouseenter: (evt) => true,
  mouseleave: (evt) => true,
  click: (evt) => true
};
var OverlayHtml = vue.defineComponent({
  name: "VcOverlayHtml",
  props: htmlOverlayProps,
  emits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "VcOverlayHtml";
    instance.cesiumEvents = [];
    const commonState = index["default"](props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { $services } = commonState;
    const canRender = vue.ref(false);
    const rootRef = vue.ref(null);
    const rootStyle = vue.reactive({});
    const offset = vue.ref(null);
    const position2 = vue.ref(null);
    const lastCanvasPosition = vue.ref(null);
    let unwatchFns = [];
    unwatchFns.push(vue.watch(() => props.position, (val) => {
      position2.value = cesiumHelpers.makeCartesian3(val, $services.viewer.scene.globe.ellipsoid);
    }));
    unwatchFns.push(vue.watch(() => props.pixelOffset, (val) => {
      offset.value = cesiumHelpers.makeCartesian2(val);
    }));
    instance.createCesiumObject = async () => {
      return vm.$(rootRef);
    };
    instance.mount = async () => {
      const { viewer } = $services;
      canRender.value = true;
      showPortal();
      offset.value = cesiumHelpers.makeCartesian2(props.pixelOffset);
      position2.value = cesiumHelpers.makeCartesian3(props.position, viewer.scene.globe.ellipsoid);
      viewer.scene.preRender.addEventListener(onPreRender);
      return true;
    };
    instance.unmount = async () => {
      const { viewer } = $services;
      viewer.scene.preRender.removeEventListener(onPreRender);
      canRender.value = false;
      hidePortal();
      return true;
    };
    const onPreRender = () => {
      const { viewer } = $services;
      if (position2.value) {
        const canvasPosition = viewer.scene.cartesianToCanvasCoordinates(position2.value, {});
        if (Cesium.defined(canvasPosition) && !Cesium.Cartesian2.equals(lastCanvasPosition.value, canvasPosition)) {
          rootStyle.left = canvasPosition.x + offset.value.x + "px";
          rootStyle.top = canvasPosition.y + offset.value.y + "px";
          if (props.autoHidden) {
            const cameraPosition = viewer.camera.position;
            const cartographicPosition = viewer.scene.globe.ellipsoid.cartesianToCartographic(cameraPosition);
            if (Cesium.defined(cartographicPosition)) {
              let cameraHeight = cartographicPosition.height;
              cameraHeight += 1 * viewer.scene.globe.ellipsoid.maximumRadius;
              if (Cesium.Cartesian3.distance(cameraPosition, position2.value) > cameraHeight || !props.show) {
                rootStyle.display = "none";
              } else {
                rootStyle.display = "block";
              }
            }
          } else {
            rootStyle.display = "block";
          }
        }
        lastCanvasPosition.value = canvasPosition;
      }
    };
    vue.onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    const renderContent = () => {
      if (canRender.value) {
        return vue.h("div", {
          ref: rootRef,
          class: `vc-html-container${props.customClass ? " " + props.customClass : ""}`,
          style: rootStyle,
          onMouseenter,
          onMouseleave,
          onClick
        }, render.hSlot(ctx.slots.default));
      } else {
        return vue.createCommentVNode("v-if");
      }
    };
    const onClick = (evt) => {
      ctx.emit("click", evt);
    };
    const onMouseenter = (evt) => {
      ctx.emit("mouseenter", evt);
    };
    const onMouseleave = (evt) => {
      ctx.emit("mouseleave", evt);
    };
    const renderPortalContent = () => {
      return renderContent();
    };
    const { showPortal, hidePortal, renderPortal } = usePortal["default"](instance, rootRef, renderPortalContent);
    if (props.teleport && props.teleport.to && !props.teleport.disabled) {
      return renderPortal;
    } else {
      return () => renderContent();
    }
  }
});

exports["default"] = OverlayHtml;
exports.htmlOverlayProps = htmlOverlayProps;
//# sourceMappingURL=index.js.map
