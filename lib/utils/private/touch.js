'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var platform = require('../platform.js');

const directions = ["left", "right", "up", "down", "horizontal", "vertical"];
const modifiersAll = {
  left: true,
  right: true,
  up: true,
  down: true,
  horizontal: true,
  vertical: true,
  all: true
};
function getModifierDirections(mod) {
  const dir = {};
  directions.forEach((direction) => {
    if (mod[direction]) {
      dir[direction] = true;
    }
  });
  if (Object.keys(dir).length === 0) {
    return modifiersAll;
  }
  if (dir.horizontal === true) {
    dir.left = dir.right = true;
  }
  if (dir.vertical === true) {
    dir.up = dir.down = true;
  }
  if (dir.left === true && dir.right === true) {
    dir.horizontal = true;
  }
  if (dir.up === true && dir.down === true) {
    dir.vertical = true;
  }
  if (dir.horizontal === true && dir.vertical === true) {
    dir.all = true;
  }
  return dir;
}
const getTouchTarget = platform.platform().isIOS || navigator.vendor.toLowerCase().indexOf("apple") > -1 ? () => document : (target) => target;
function shouldStart(evt, ctx) {
  return ctx.event === void 0 && evt.target !== void 0 && evt.target.draggable !== true && typeof ctx.handler === "function" && evt.target.nodeName.toUpperCase() !== "INPUT" && (evt.qClonedBy === void 0 || evt.qClonedBy.indexOf(ctx.uid) === -1);
}

exports.getModifierDirections = getModifierDirections;
exports.getTouchTarget = getTouchTarget;
exports.shouldStart = shouldStart;
//# sourceMappingURL=touch.js.map
