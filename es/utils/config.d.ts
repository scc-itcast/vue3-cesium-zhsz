import type { Language } from 'vue-cesium/es/locale';
import type { InjectionKey, Ref } from 'vue';
import type { AnyObject } from './types';
export interface ConfigProviderContext {
    cesiumPath?: string;
    accessToken?: string;
    locale?: Language;
    cfg?: AnyObject;
    __scriptPromise?: Promise<unknown>;
    __viewerUnloadingPromise?: Promise<boolean>;
}
declare const vcKey: string | symbol;
declare const fabKey: string | symbol;
declare const measurementKey: string | symbol;
export { vcKey, fabKey, measurementKey };
export declare const configProviderContextKey: InjectionKey<Ref<ConfigProviderContext>>;
