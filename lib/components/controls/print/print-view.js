'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var index = require('../../../composables/use-locale/index.js');

const VcPrintView = vue.defineComponent({
  name: "VcPrintView",
  props: {
    options: Object
  },
  setup(props) {
    const ready = vue.ref(false);
    const printingStarted = vue.ref(false);
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "VcPrintView";
    const { t } = index.useLocale();
    const checkForImagesReady = () => {
      var _a, _b;
      if (ready.value) {
        return;
      }
      const imageTags = (_a = props.options) == null ? void 0 : _a.printWindow.document.getElementsByTagName("img");
      if (imageTags.length === 0) {
        return;
      }
      let allImagesReady = true;
      for (let i = 0; allImagesReady && i < imageTags.length; ++i) {
        allImagesReady = imageTags[i].complete;
      }
      if (allImagesReady) {
        stopCheckingForImages();
        ready.value = allImagesReady;
        if (ready.value && !printingStarted.value) {
          if ((_b = props.options) == null ? void 0 : _b.readyCallback) {
            props.options.readyCallback(props.options.printWindow);
          }
          printingStarted.value = true;
        }
      }
    };
    let _stopCheckingForImages;
    const stopCheckingForImages = () => {
      if (_stopCheckingForImages) {
        _stopCheckingForImages();
      }
    };
    vue.onMounted(() => {
      var _a;
      const printWindow = (_a = props.options) == null ? void 0 : _a.printWindow;
      const mainWindow = window;
      const printWindowIntervalId = printWindow == null ? void 0 : printWindow.setInterval(checkForImagesReady, 200);
      const mainWindowIntervalId = mainWindow.setInterval(checkForImagesReady, 200);
      _stopCheckingForImages = () => {
        printWindow.clearInterval(printWindowIntervalId);
        mainWindow.clearInterval(mainWindowIntervalId);
        _stopCheckingForImages = void 0;
      };
    });
    vue.onUnmounted(() => {
      stopCheckingForImages();
    });
    return () => {
      var _a, _b, _c, _d, _e, _f;
      const child = [];
      child.push(vue.h("p", {}, vue.h("img", {
        src: (_a = props.options) == null ? void 0 : _a.image,
        alt: t("vc.navigation.screenshot"),
        class: "vc-map-image"
      })));
      if (((_b = props.options) == null ? void 0 : _b.credits.length) && ((_c = props.options) == null ? void 0 : _c.showCredit)) {
        child.push(vue.h("h1", {}, t("vc.navigation.credit")));
      } else {
        child.push(vue.createCommentVNode("v-if"));
      }
      if (((_d = props.options) == null ? void 0 : _d.credits.length) && ((_e = props.options) == null ? void 0 : _e.showCredit)) {
        const inner = [];
        (_f = props.options) == null ? void 0 : _f.credits.forEach((credit) => {
          inner.push(vue.h("li", {
            innerHTML: credit
          }));
        });
        child.push(vue.h("ul", {}, inner));
      } else {
        child.push(vue.createCommentVNode("v-if"));
      }
      return vue.h("div", {}, child);
    };
  }
});

exports["default"] = VcPrintView;
//# sourceMappingURL=print-view.js.map
