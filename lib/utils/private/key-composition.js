'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

let lastKeyCompositionStatus = false;
function onKeyDownComposition(evt) {
  lastKeyCompositionStatus = evt.isComposing === true;
}
function shouldIgnoreKey(evt) {
  return lastKeyCompositionStatus === true || evt !== Object(evt) || evt.isComposing === true || evt.qKeyEvent === true;
}
function isKeyCode(evt, keyCodes) {
  return shouldIgnoreKey(evt) === true ? false : [].concat(keyCodes).includes(evt.keyCode);
}

exports.isKeyCode = isKeyCode;
exports.onKeyDownComposition = onKeyDownComposition;
exports.shouldIgnoreKey = shouldIgnoreKey;
//# sourceMappingURL=key-composition.js.map
