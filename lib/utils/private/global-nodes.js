'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const globalNodes = [];
let target = document.body;
function createGlobalNode(id) {
  const el = document.createElement("div");
  if (id !== void 0) {
    el.id = id;
  }
  target.appendChild(el);
  globalNodes.push(el);
  return el;
}
function removeGlobalNode(el) {
  globalNodes.splice(globalNodes.indexOf(el), 1);
  el.remove();
}
function changeGlobalNodesTarget(el) {
  if (el !== target) {
    target = el;
    globalNodes.forEach((el2) => {
      if (el2.contains(target) === false) {
        target.appendChild(el2);
      }
    });
  }
}

exports.changeGlobalNodesTarget = changeGlobalNodesTarget;
exports.createGlobalNode = createGlobalNode;
exports.removeGlobalNode = removeGlobalNode;
//# sourceMappingURL=global-nodes.js.map
