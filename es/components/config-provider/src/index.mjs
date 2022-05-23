import { defineComponent, renderSlot } from 'vue';
import { provideGlobalConfig } from '../../../composables/use-global-config/index.mjs';
import defaultLang from '../../../locale/lang/zh-hans.mjs';

var ConfigProvider = defineComponent({
  name: "VcConfigProvider",
  props: {
    locale: {
      type: Object,
      default: () => defaultLang
    },
    cesiumPath: {
      type: String,
      default: "https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js"
    },
    accessToken: {
      type: String,
      default: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OGE2MjZlOC1mMzhiLTRkZjQtOWEwZi1jZTE0MWY0YzhlMTAiLCJpZCI6MjU5LCJpYXQiOjE2NDM3MjU1NzZ9.ptZ5tVXvMmuWRC0WhjtYTg-17nQh14fgxBsx0HJiVXQ"
    }
  },
  setup(props, { slots }) {
    const config = provideGlobalConfig(props);
    return () => renderSlot(slots, "default", { config: config == null ? void 0 : config.value });
  }
});

export { ConfigProvider as default };
//# sourceMappingURL=index.mjs.map
