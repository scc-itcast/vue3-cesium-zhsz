'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var version = require('./version.js');
var index = require('./composables/use-global-config/index.js');
var useLog = require('./composables/private/use-log.js');

const logger = useLog["default"](void 0);
const INSTALLED_KEY = Symbol("INSTALLED_KEY");
const makeInstaller = (components = []) => {
  const install = (app, opts) => {
    if (app[INSTALLED_KEY])
      return;
    const defaultConfig = {
      cesiumPath: "https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js",
      accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OGE2MjZlOC1mMzhiLTRkZjQtOWEwZi1jZTE0MWY0YzhlMTAiLCJpZCI6MjU5LCJpYXQiOjE2NDM3MjU1NzZ9.ptZ5tVXvMmuWRC0WhjtYTg-17nQh14fgxBsx0HJiVXQ"
    };
    app[INSTALLED_KEY] = true;
    components.forEach((c) => {
      app.use(c, opts);
    });
    const options = Object.assign(defaultConfig, opts);
    index.provideGlobalConfig(options, app);
    if (process.env.NODE_ENV === "development") {
      logger.capsule("VueCesium", `v${version.version}`);
      logger.success("VueCesium  https://github.com/zouyaoji/vue-cesium");
      logger.success("Document  https://zouyaoji.top/vue-cesium");
      logger.success(`If you like it, give it a star reward, ^_^`);
      logger.success(`\u8868\u793A\u8D5E\uFF0C\u7ED9\u5B83\u4E00\u4E2A\u661F\u661F\u5956\u52B1\uFF0C^_^`);
    }
  };
  return {
    version: version.version,
    install
  };
};

exports["default"] = makeInstaller;
//# sourceMappingURL=make-installer.js.map
