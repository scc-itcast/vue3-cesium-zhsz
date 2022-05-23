import type { App, Plugin } from 'vue';
import type { ConfigProviderContext } from 'vue-cesium/es/utils/config';
declare const makeInstaller: (components?: Plugin[]) => {
    version: string;
    install: (app: App, opts: ConfigProviderContext) => void;
};
export default makeInstaller;
