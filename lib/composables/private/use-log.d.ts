import { VcComponentInternalInstance } from 'vue-cesium/es/utils/types';
export default function (vcInstance: VcComponentInternalInstance): {
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
