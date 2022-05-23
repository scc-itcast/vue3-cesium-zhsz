import { ConfigProviderContext } from 'vue-cesium/es/utils/config';
import type { Ref, App } from 'vue';
import { MaybeRef } from 'vue-cesium/es/utils/types';
export declare function useGlobalConfig<K extends keyof ConfigProviderContext>(key: K): Ref<ConfigProviderContext[K]>;
export declare function useGlobalConfig(): Ref<ConfigProviderContext>;
export declare const provideGlobalConfig: (config: MaybeRef<ConfigProviderContext>, app?: App) => import("vue").ComputedRef<ConfigProviderContext>;
