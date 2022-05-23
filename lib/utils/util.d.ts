import { camelize, capitalize, extend, hasOwn, isArray, isObject, isString, looseEqual, isFunction, isPlainObject } from '@vue/shared';
import { isUndefined, camelCase } from 'lodash-unified';
import { AnyObject } from './types';
export declare function getFileNameByPath(path: string): string;
export declare function dirname(path: string): string;
export declare function removeEmpty(obj: any): AnyObject;
export declare function isEmptyObj(obj: unknown): boolean;
export declare const kebabCase: (str: string) => string;
export declare function getObjClassName(obj: AnyObject): string;
/**
 * 验证是否是经纬度。
 * @param {Number} longitude
 * @param {Number} latitude
 * @returns {Boolean}
 */
export declare function lnglatValidator(longitude: number, latitude: number): boolean;
export declare function defaultValue(a: any, b: any): any;
export declare function inherit(base: any, derived: any): void;
export declare function getDefaultOptionByProps<T>(props: any, ignores?: Array<string>): T;
declare const addCustomProperty: (obj: any, options: any, ignores?: Array<string>) => void;
export declare const merge: <T extends Record<string, any>>(a: T, b: T) => T;
export declare function isArrayLike(obj: any): boolean;
export { hasOwn, isObject, isPlainObject, isArray, isString, capitalize, camelize, looseEqual, extend, isUndefined, isFunction, camelCase, addCustomProperty };
