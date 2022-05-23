import { defineComponent, getCurrentInstance, ref, reactive, watch, onUnmounted, h, createCommentVNode } from 'vue';
import { $ } from '../../../utils/private/vm.mjs';
import '../../../composables/index.mjs';
import { hSlot } from '../../../utils/private/render.mjs';
import { position, pixelOffset, show } from '../../../utils/cesium-props.mjs';
import { makeCartesian3, makeCartesian2 } from '../../../utils/cesium-helpers.mjs';
import usePortal from '../../../composables/private/use-portal.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useCommon from '../../../composables/use-common/index.mjs';

const htmlOverlayProps = {
  ...position,
  ...pixelOffset,
  ...show,
  autoHidden: {
    type: Boolean,
    default: true
  },
  customClass: String,
  teleport: Object
};
const emits = {
  ...commonEmits,
  mouseenter: (evt) => true,
  mouseleave: (evt) => true,
  click: (evt) => true
};
var OverlayHtml = defineComponent({
  name: "VcOverlayHtml",
  props: htmlOverlayProps,
  emits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcOverlayHtml";
    instance.cesiumEvents = [];
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { $services } = commonState;
    const canRender = ref(false);
    const rootRef = ref(null);
    const rootStyle = reactive({});
    const offset = ref(null);
    const position2 = ref(null);
    const lastCanvasPosition = ref(null);
    let unwatchFns = [];
    unwatchFns.push(watch(() => props.position, (val) => {
      position2.value = makeCartesian3(val, $services.viewer.scene.globe.ellipsoid);
    }));
    unwatchFns.push(watch(() => props.pixelOffset, (val) => {
      offset.value = makeCartesian2(val);
    }));
    instance.createCesiumObject = async () => {
      return $(rootRef);
    };
    instance.mount = async () => {
      const { viewer } = $services;
      canRender.value = true;
      showPortal();
      offset.value = makeCartesian2(props.pixelOffset);
      position2.value = makeCartesian3(props.position, viewer.scene.globe.ellipsoid);
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
    onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    const renderContent = () => {
      if (canRender.value) {
        return h("div", {
          ref: rootRef,
          class: `vc-html-container${props.customClass ? " " + props.customClass : ""}`,
          style: rootStyle,
          onMouseenter,
          onMouseleave,
          onClick
        }, hSlot(ctx.slots.default));
      } else {
        return createCommentVNode("v-if");
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
    const { showPortal, hidePortal, renderPortal } = usePortal(instance, rootRef, renderPortalContent);
    if (props.teleport && props.teleport.to && !props.teleport.disabled) {
      return renderPortal;
    } else {
      return () => renderContent();
    }
  }
});

export { OverlayHtml as default, htmlOverlayProps };
//# sourceMappingURL=index.mjs.map
