'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vm = require('../../../utils/private/vm.js');
var usePosition = require('../../../composables/private/use-position.js');
var cesiumHelpers = require('../../../utils/cesium-helpers.js');
var index$2 = require('../../ui/index.js');
require('../../../composables/index.js');
var createPrintView = require('./createPrintView.js');
var defaultProps = require('./defaultProps.js');
var printWindow = require('./printWindow.js');
require('../../../utils/util.js');
var emits$1 = require('../../../utils/emits.js');
var index = require('../../../composables/use-common/index.js');
var index$1 = require('../../../composables/use-locale/index.js');
var shared = require('@vue/shared');

const emits = {
  ...emits$1.commonEmits,
  printEvt: (evt) => true
};
const printProps = defaultProps["default"];
var Print = vue.defineComponent({
  name: "VcPrint",
  props: printProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "VcPrint";
    instance.cesiumEvents = [];
    const commonState = index["default"](props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { t } = index$1.useLocale();
    const { $services } = commonState;
    const rootRef = vue.ref(null);
    const tooltipRef = vue.ref(null);
    const btnRef = vue.ref(null);
    const positionState = usePosition["default"](props, $services);
    const creatingPrintView = vue.ref(false);
    const parentInstance = vm.getVcParentInstance(instance);
    const hasVcNavigation = ((_a = parentInstance.proxy) == null ? void 0 : _a.$options.name) === "VcNavigation";
    const canRender = vue.ref(hasVcNavigation);
    const rootStyle = vue.reactive({});
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
    instance.createCesiumObject = async () => {
      return new Promise((resolve, reject) => {
        canRender.value = true;
        vue.nextTick(() => {
          const { viewer } = $services;
          if (!hasVcNavigation) {
            const viewerElement = viewer._element;
            viewerElement.appendChild(vm.$(rootRef));
            resolve(vm.$(rootRef));
          } else {
            resolve(vm.$(rootRef));
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
        target: vm.$(rootRef)
      });
      return true;
    };
    instance.unmount = async () => {
      var _a2;
      const viewerElement = $services.viewer._element;
      if (!hasVcNavigation) {
        viewerElement.contains(vm.$(rootRef)) && viewerElement.removeChild(vm.$(rootRef));
      }
      const { viewer } = $services;
      (_a2 = viewer.viewerWidgetResized) == null ? void 0 : _a2.raiseEvent({
        type: instance.cesiumClass,
        status: "unmounted",
        target: vm.$(rootRef)
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
        const btnTarget = (_a2 = vm.$(btnRef)) == null ? void 0 : _a2.$el;
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
      (_a2 = vm.$(tooltipRef)) == null ? void 0 : _a2.hide();
      const { viewer } = $services;
      cesiumHelpers.captureScreenshot(viewer).then((imgSrc) => {
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
        const listener = vm.getInstanceListener(instance, "printEvt");
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
      createPrintView["default"]({
        image,
        showCredit: props.showCredit,
        credits: getCredits(viewer),
        printWindow: iframe ? iframe.contentWindow : void 0,
        title: t("vc.navigation.print.printViewTitle"),
        readyCallback: (windowToPrint) => {
          if (printAutomatically) {
            printWindow["default"](windowToPrint).catch((e) => {
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
          }, () => vue.h("strong", null, shared.isPlainObject(props.tooltip) && props.tooltip.tip || t("vc.navigation.print.printTip"))));
        } else {
          inner.push(vue.createCommentVNode("v-if"));
        }
        const child = [
          vue.h(index$2.VcBtn, {
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
        return vue.h("div", {
          ref: rootRef,
          class: "vc-print " + positionState.classes.value,
          style: rootStyle
        }, child);
      } else {
        return vue.createCommentVNode("v-if");
      }
    };
  }
});

exports["default"] = Print;
exports.printProps = printProps;
//# sourceMappingURL=index.js.map
