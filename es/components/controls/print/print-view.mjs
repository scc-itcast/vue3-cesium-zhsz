import { defineComponent, ref, getCurrentInstance, onMounted, onUnmounted, h, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { useLocale } from '../../../composables/use-locale/index.mjs';

const VcPrintView = defineComponent({
  name: "VcPrintView",
  props: {
    options: Object
  },
  setup(props) {
    const ready = ref(false);
    const printingStarted = ref(false);
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcPrintView";
    const { t } = useLocale();
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
    onMounted(() => {
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
    onUnmounted(() => {
      stopCheckingForImages();
    });
    return () => {
      var _a, _b, _c, _d, _e, _f;
      const child = [];
      child.push(h("p", {}, h("img", {
        src: (_a = props.options) == null ? void 0 : _a.image,
        alt: t("vc.navigation.screenshot"),
        class: "vc-map-image"
      })));
      if (((_b = props.options) == null ? void 0 : _b.credits.length) && ((_c = props.options) == null ? void 0 : _c.showCredit)) {
        child.push(h("h1", {}, t("vc.navigation.credit")));
      } else {
        child.push(createCommentVNode("v-if"));
      }
      if (((_d = props.options) == null ? void 0 : _d.credits.length) && ((_e = props.options) == null ? void 0 : _e.showCredit)) {
        const inner = [];
        (_f = props.options) == null ? void 0 : _f.credits.forEach((credit) => {
          inner.push(h("li", {
            innerHTML: credit
          }));
        });
        child.push(h("ul", {}, inner));
      } else {
        child.push(createCommentVNode("v-if"));
      }
      return h("div", {}, child);
    };
  }
});

export { VcPrintView as default };
//# sourceMappingURL=print-view.mjs.map
