'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../../composables/use-global-config/index.js');
var zhHans = require('../../../locale/lang/zh-hans.js');

var ConfigProvider = vue.defineComponent({
  name: "VcConfigProvider",
  props: {
    locale: {
      type: Object,
      default: () => zhHans["default"]
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
    const config = index.provideGlobalConfig(props);
    return () => vue.renderSlot(slots, "default", { config: config == null ? void 0 : config.value });
  }
});

exports["default"] = ConfigProvider;
//# sourceMappingURL=index.js.map
