'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var lodashUnified = require('lodash-unified');

const wrapperKey = Symbol();
const propKey = "__vcPropsReservedKey";
function buildProp(option, key) {
  if (!shared.isObject(option) || !!option[propKey])
    return option;
  const { values, required, default: defaultValue, type, validator } = option;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = [...values, defaultValue];
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      vue.warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  return {
    type: typeof type === "object" && Object.getOwnPropertySymbols(type).includes(wrapperKey) ? type[wrapperKey] : type,
    required: !!required,
    default: defaultValue,
    validator: _validator,
    [propKey]: true
  };
}
const buildProps = (props) => lodashUnified.fromPairs(Object.entries(props).map(([key, option]) => [key, buildProp(option, key)]));
const definePropType = (val) => ({ [wrapperKey]: val });
const keyOf = (arr) => Object.keys(arr);
const mutable = (val) => val;

exports.buildProp = buildProp;
exports.buildProps = buildProps;
exports.definePropType = definePropType;
exports.keyOf = keyOf;
exports.mutable = mutable;
exports.propKey = propKey;
//# sourceMappingURL=props.js.map
