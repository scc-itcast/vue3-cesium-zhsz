import ConfigProvider from './src/index.mjs';

ConfigProvider.install = (app) => {
  app.component(ConfigProvider.name, ConfigProvider);
};
const _ConfigProvider = ConfigProvider;
const VcConfigProvider = _ConfigProvider;

export { VcConfigProvider, _ConfigProvider as default };
//# sourceMappingURL=index.mjs.map
