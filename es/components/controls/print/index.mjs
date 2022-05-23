import { defineComponent, getCurrentInstance, ref, reactive, watch, nextTick, h, createCommentVNode } from 'vue';
import { getVcParentInstance, $, getInstanceListener } from '../../../utils/private/vm.mjs';
import usePosition from '../../../composables/private/use-position.mjs';
import { captureScreenshot } from '../../../utils/cesium-helpers.mjs';
import { VcIcon, VcTooltip, VcBtn } from '../../ui/index.mjs';
import '../../../composables/index.mjs';
import createPrintView from './createPrintView.mjs';
import printDefaultProps from './defaultProps.mjs';
import printWindow from './printWindow.mjs';
import '../../../utils/util.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useCommon from '../../../composables/use-common/index.mjs';
import { useLocale } from '../../../composables/use-locale/index.mjs';
import { isPlainObject } from '@vue/shared';

const emits = {
  ...commonEmits,
  printEvt: (evt) => true
};
const printProps = printDefaultProps;
var Print = defineComponent({
  name: "VcPrint",
  props: printProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcPrint";
    instance.cesiumEvents = [];
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { t } = useLocale();
    const { $services } = commonState;
    const rootRef = ref(null);
    const tooltipRef = ref(null);
    const btnRef = ref(null);
    const positionState = usePosition(props, $services);
    const creatingPrintView = ref(false);
    const parentInstance = getVcParentInstance(instance);
    const hasVcNavigation = ((_a = parentInstance.proxy) == null ? void 0 : _a.$options.name) === "VcNavigation";
    const canRender = ref(hasVcNavigation);
    const rootStyle = reactive({});
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
    instance.createCesiumObject = async () => {
      return new Promise((resolve, reject) => {
        canRender.value = true;
        nextTick(() => {
          const { viewer } = $services;
          if (!hasVcNavigation) {
            const viewerElement = viewer._element;
            viewerElement.appendChild($(rootRef));
            resolve($(rootRef));
          } else {
            resolve($(rootRef));
          }
        });
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
      const viewerElement = $services.viewer._element;
      if (!hasVcNavigation) {
        viewerElement.contains($(rootRef)) && viewerElement.removeChild($(rootRef));
      }
      const { viewer } = $services;
      (_a2 = viewer.viewerWidgetResized) == null ? void 0 : _a2.raiseEvent({
        type: instance.cesiumClass,
        status: "unmounted",
        target: $(rootRef)
      });
      return true;
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
      const { viewer } = $services;
      captureScreenshot(viewer).then((imgSrc) => {
        if (props.downloadAutomatically) {
          const link = document.createElement("a");
          link.download = props.screenshotName || t("vc.navigation.print.screenshot");
          link.style.display = "none";
          link.href = imgSrc;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
        if (props.printAutomatically || props.showPrintView) {
          if (props.showPrintView) {
            showPrintView(imgSrc);
          } else if (props.printAutomatically) {
            print(imgSrc);
          }
        }
        const listener = getInstanceListener(instance, "printEvt");
        listener && ctx.emit("printEvt", {
          type: "capture",
          image: imgSrc,
          status: "end"
        });
      });
    };
    const print = (image) => {
      create(true, true, image);
    };
    const showPrintView = (image) => {
      create(false, false, image);
    };
    const create = (hidden, printAutomatically, image) => {
      creatingPrintView.value = true;
      let iframe;
      if (hidden) {
        iframe = document.createElement("iframe");
        document.body.appendChild(iframe);
      }
      const { viewer } = $services;
      createPrintView({
        image,
        showCredit: props.showCredit,
        credits: getCredits(viewer),
        printWindow: iframe ? iframe.contentWindow : void 0,
        title: t("vc.navigation.print.printViewTitle"),
        readyCallback: (windowToPrint) => {
          if (printAutomatically) {
            printWindow(windowToPrint).catch((e) => {
              commonState.logger.warn(e);
            }).then(() => {
              if (iframe) {
                document.body.removeChild(iframe);
              }
              if (hidden) {
                creatingPrintView.value = false;
              }
            });
          }
        },
        closeCallback: (windowToPrint) => {
          if (hidden) {
            creatingPrintView.value = false;
          }
        }
      });
      if (!hidden) {
        creatingPrintView.value = false;
      }
    };
    const getCredits = (viewer) => {
      const credits = viewer.scene.frameState.creditDisplay._currentFrameCredits.screenCredits.values.concat(viewer.scene.frameState.creditDisplay._currentFrameCredits.lightboxCredits.values);
      return credits.map((credit) => credit.html);
    };
    const onTooltipBeforeShow = (e) => {
      if (creatingPrintView.value) {
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
          }, () => h("strong", null, isPlainObject(props.tooltip) && props.tooltip.tip || t("vc.navigation.print.printTip"))));
        } else {
          inner.push(createCommentVNode("v-if"));
        }
        const child = [
          h(VcBtn, {
            ref: btnRef,
            size: props.size,
            disabled: creatingPrintView.value,
            flat: props.flat,
            stack: props.stack,
            round: props.round,
            style: { color: props.color, background: props.background },
            dense: true,
            onClick: onHandleClick
          }, () => inner)
        ];
        return h("div", {
          ref: rootRef,
          class: "vc-print " + positionState.classes.value,
          style: rootStyle
        }, child);
      } else {
        return createCommentVNode("v-if");
      }
    };
  }
});

export { Print as default, printProps };
//# sourceMappingURL=index.mjs.map
