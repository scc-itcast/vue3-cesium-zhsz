'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var config = require('../../utils/config.js');
var vue = require('vue');
var util = require('../../utils/util.js');
var shared = require('@vue/shared');

const cache = vue.ref({});
function useGlobalConfig(key) {
  const config$1 = vue.inject(config.configProviderContextKey, cache);
  if (key) {
    return shared.isObject(config$1.value) && shared.hasOwn(config$1.value, key) ? vue.computed(() => config$1.value[key]) : vue.ref(void 0);
  } else {
    return config$1;
  }
}
const provideGlobalConfig = (config$1, app) => {
  var _a;
  const inSetup = !!vue.getCurrentInstance();
  const oldConfig = inSetup ? useGlobalConfig() : void 0;
  const provideFn = (_a = app == null ? void 0 : app.provide) != null ? _a : inSetup ? vue.provide : void 0;
  if (!provideFn) {
    console.warn("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const context = vue.computed(() => {
    const cfg = vue.unref(config$1);
    if (!oldConfig)
      return cfg;
    return util.merge(oldConfig.value, cfg);
  });
  provideFn(config.configProviderContextKey, context);
  cache.value = context.value;
  return context;
};

exports.provideGlobalConfig = provideGlobalConfig;
exports.useGlobalConfig = useGlobalConfig;
//# sourceMappingURL=index.js.map
