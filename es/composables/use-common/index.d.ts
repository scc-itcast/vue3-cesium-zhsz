import type { VcReadyObject, VcComponentInternalInstance, VcViewerProvider } from 'vue-cesium/es/utils/types';
import { WatchStopHandle } from 'vue';
export default function (props: any, { emit }: {
    emit: any;
}, vcInstance: VcComponentInternalInstance): {
    $services: VcViewerProvider;
    load: () => Promise<boolean | VcReadyObject>;
    unload: () => Promise<boolean>;
    reload: () => Promise<boolean | VcReadyObject>;
    creatingPromise: Promise<boolean | VcReadyObject>;
    transformProp: (prop: any, value: any, childProps?: any) => any;
    transformProps: <T>(props: T, childProps?: any) => T;
    unwatchFns: WatchStopHandle[];
    setPropsWatcher: (register: any) => void;
    logger: {
        log: (...args: any[]) => void;
        warn: (...args: any[]) => void;
        error: (...args: any[]) => void;
        debug: (...args: any[]) => void;
        capsule: (title: any, info: any, type?: string) => void;
        success: (text: any) => void;
        warning: (text: any) => void;
        danger: (text: any) => void;
        primary: (text: any) => void;
    };
    getServices: () => any;
};
