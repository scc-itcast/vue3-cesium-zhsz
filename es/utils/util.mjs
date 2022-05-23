import { isArray, hyphenate, isFunction, isPlainObject } from '@vue/shared';
export { camelize, capitalize, extend, hasOwn, isArray, isFunction, isObject, isPlainObject, isString, looseEqual } from '@vue/shared';
import { isUndefined, isNull } from 'lodash-unified';
export { camelCase, isUndefined } from 'lodash-unified';

function getFileNameByPath(path) {
  const posStart = path.lastIndexOf("/");
  const posEnd = path.lastIndexOf(".");
  return path.substring(posStart + 1, posEnd);
}
function dirname(path) {
  if (typeof path !== "string")
    path = path + "";
  if (path.length === 0)
    return ".";
  let code = path.charCodeAt(0);
  const hasRoot = code === 47;
  let end = -1;
  let matchedSlash = true;
  for (let i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      matchedSlash = false;
    }
  }
  if (end === -1)
    return hasRoot ? "/" : ".";
  if (hasRoot && end === 1) {
    return "/";
  }
  return path.slice(0, end);
}
function removeEmpty(obj) {
  const proto = Object.getPrototypeOf(obj);
  const finalObj = {};
  Object.setPrototypeOf(finalObj, proto);
  Object.keys(obj).forEach((key) => {
    const className = getObjClassName(obj[key]);
    if (obj[key] && isArray(obj[key]) || obj[key] instanceof Element) {
      finalObj[key] = obj[key];
    } else if (obj[key] && typeof obj[key] === "object" && !Cesium[className]) {
      const nestedObj = removeEmpty(obj[key]);
      if (Object.keys(nestedObj).length) {
        finalObj[key] = nestedObj;
      }
    } else if (obj[key] !== "" && obj[key] !== void 0 && obj[key] !== null) {
      finalObj[key] = obj[key];
    }
  });
  return finalObj;
}
function isEmptyObj(obj) {
  if (isUndefined(obj) || isNull(obj)) {
    return true;
  }
  if (obj instanceof Element) {
    return false;
  }
  const arr = Object.keys(obj);
  return arr.length === 0;
}
const kebabCase = hyphenate;
function getObjClassName(obj) {
  if (obj && obj.constructor) {
    const strFun = obj.constructor.toString();
    let className = strFun.substr(0, strFun.indexOf("("));
    className = className.replace("function", "");
    return className.replace(/(^\s*)|(\s*$)/gi, "");
  }
  return typeof obj;
}
function lnglatValidator(longitude, latitude) {
  const longreg = /^(-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,15})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,15}|180)$/;
  if (!longreg.test(longitude.toString())) {
    return false;
  }
  const latreg = /^(-|\+)?([0-8]?\d{1}\.\d{0,15}|90\.0{0,15}|[0-8]?\d{1}|90)$/;
  if (!latreg.test(latitude.toString())) {
    return false;
  }
  return true;
}
function defaultValue(a, b) {
  if (a !== void 0 && a !== null) {
    return a;
  }
  return b;
}
function inherit(base, derived) {
  function F() {
  }
  F.prototype = base.prototype;
  derived.prototype = new F();
  derived.prototype.constructor = derived;
}
function getDefaultOptionByProps(props, ignores = []) {
  const defaultOptions = {};
  Object.keys(props).forEach((key) => {
    if (ignores.indexOf(key) === -1) {
      const value = props[key];
      defaultOptions[key] = isFunction(value) ? void 0 : isPlainObject(value) ? isFunction(value.default) ? value.default() : value.default : value;
    }
  });
  return defaultOptions;
}
const addCustomProperty = (obj, options, ignores = []) => {
  for (const prop in options) {
    if (!obj[prop] && ignores.indexOf(prop) === -1) {
      obj[prop] = options[prop];
    }
  }
};
const merge = (a, b) => {
  var _a;
  const keys = [.../* @__PURE__ */ new Set([...Object.keys(a), ...Object.keys(b)])];
  const obj = {};
  for (const key of keys) {
    obj[key] = (_a = b[key]) != null ? _a : a[key];
  }
  return obj;
};
function isArrayLike(obj) {
  if (Array.isArray(obj))
    return true;
  if (typeof obj !== "object" || !obj)
    return false;
  const length = obj.length;
  return typeof length === "number" && length >= 0;
}

export { addCustomProperty, defaultValue, dirname, getDefaultOptionByProps, getFileNameByPath, getObjClassName, inherit, isArrayLike, isEmptyObj, kebabCase, lnglatValidator, merge, removeEmpty };
//# sourceMappingURL=util.mjs.map
