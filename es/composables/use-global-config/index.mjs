import { configProviderContextKey } from '../../utils/config.mjs';
import { ref, inject, computed, getCurrentInstance, provide, unref } from 'vue';
import { merge } from '../../utils/util.mjs';
import { isObject, hasOwn } from '@vue/shared';

const cache = ref({});
function useGlobalConfig(key) {
  const config = inject(configProviderContextKey, cache);
  if (key) {
    return isObject(config.value) && hasOwn(config.value, key) ? computed(() => config.value[key]) : ref(void 0);
  } else {
    return config;
  }
}
const provideGlobalConfig = (config, app) => {
  var _a;
  const inSetup = !!getCurrentInstance();
  const oldConfig = inSetup ? useGlobalConfig() : void 0;
  const provideFn = (_a = app == null ? void 0 : app.provide) != null ? _a : inSetup ? provide : void 0;
  if (!provideFn) {
    console.warn("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const context = computed(() => {
    const cfg = unref(config);
    if (!oldConfig)
      return cfg;
    return merge(oldConfig.value, cfg);
  });
  provideFn(configProviderContextKey, context);
  cache.value = context.value;
  return context;
};

export { provideGlobalConfig, useGlobalConfig };
//# sourceMappingURL=index.mjs.map
