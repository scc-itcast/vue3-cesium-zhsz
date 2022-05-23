'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const createComponent = (raw) => vue.markRaw(vue.defineComponent(raw));
const createDirective = (raw) => vue.markRaw(raw);

exports.createComponent = createComponent;
exports.createDirective = createDirective;
//# sourceMappingURL=create.js.map
