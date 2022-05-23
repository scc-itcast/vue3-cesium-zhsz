'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var create = require('../../utils/private/create.js');
var event = require('../../utils/private/event.js');
var selection = require('../../utils/private/selection.js');
var platform = require('../../utils/platform.js');

var TouchHold = create.createDirective({
  name: "touch-hold",
  beforeMount(el, binding) {
    const { modifiers } = binding;
    if (modifiers.mouse !== true && platform.platform().hasTouch !== true) {
      return;
    }
    const ctx = {
      handler: binding.value,
      noop: event.noop,
      mouseStart(evt) {
        if (typeof ctx.handler === "function" && event.leftClick(evt) === true) {
          event.addEvt(ctx, "temp", [
            [document, "mousemove", "move", "passiveCapture"],
            [document, "click", "end", "notPassiveCapture"]
          ]);
          ctx.start(evt, true);
        }
      },
      touchStart(evt) {
        var _a;
        if (evt.target !== void 0 && typeof ctx.handler === "function") {
          const target = evt.target;
          event.addEvt(ctx, "temp", [
            [target, "touchmove", "move", "passiveCapture"],
            [target, "touchcancel", "end", "notPassiveCapture"],
            [target, "touchend", "end", "notPassiveCapture"]
          ]);
          ctx.start(evt);
          (_a = binding == null ? void 0 : binding.touchStart) == null ? void 0 : _a.call(binding, evt);
        }
      },
      start(evt, mouseEvent) {
        ctx.origin = event.position(evt);
        const startTime = Date.now();
        if (platform.platform().isPhone === true) {
          document.body.classList.add("non-selectable");
          selection.clearSelection();
          ctx.styleCleanup = (withDelay) => {
            ctx.styleCleanup = void 0;
            const remove = () => {
              document.body.classList.remove("non-selectable");
            };
            if (withDelay === true) {
              selection.clearSelection();
              setTimeout(remove, 10);
            } else {
              remove();
            }
          };
        }
        ctx.triggered = false;
        ctx.sensitivity = mouseEvent === true ? ctx.mouseSensitivity : ctx.touchSensitivity;
        ctx.timer = setTimeout(() => {
          selection.clearSelection();
          ctx.triggered = true;
          ctx.handler({
            evt,
            touch: mouseEvent !== true,
            mouse: mouseEvent === true,
            position: ctx.origin,
            duration: Date.now() - startTime
          });
        }, ctx.duration);
      },
      move(evt) {
        const { top, left } = event.position(evt);
        if (Math.abs(left - ctx.origin.left) >= ctx.sensitivity || Math.abs(top - ctx.origin.top) >= ctx.sensitivity) {
          clearTimeout(ctx.timer);
        }
      },
      end(evt) {
        var _a;
        event.cleanEvt(ctx, "temp");
        ctx.styleCleanup !== void 0 && ctx.styleCleanup(ctx.triggered);
        if (ctx.triggered === true) {
          evt !== void 0 && event.stopAndPrevent(evt);
        } else {
          clearTimeout(ctx.timer);
        }
        (_a = binding == null ? void 0 : binding.touchEnd) == null ? void 0 : _a.call(binding, evt);
      }
    };
    const data = [600, 5, 7];
    if (typeof binding.arg === "string" && binding.arg.length > 0) {
      binding.arg.split(":").forEach((val, index) => {
        const v = parseInt(val, 10);
        v && (data[index] = v);
      });
    }
    ;
    [ctx.duration, ctx.touchSensitivity, ctx.mouseSensitivity] = data;
    el.__vctouchhold = ctx;
    modifiers.mouse === true && event.addEvt(ctx, "main", [[el, "mousedown", "mouseStart", `passive${modifiers.mouseCapture === true ? "Capture" : ""}`]]);
    platform.platform().hasTouch === true && event.addEvt(ctx, "main", [
      [el, "touchstart", "touchStart", `passive${modifiers.capture === true ? "Capture" : ""}`],
      [el, "touchend", "noop", "notPassiveCapture"]
    ]);
  },
  updated(el, binding) {
    const ctx = el.__vctouchhold;
    if (ctx !== void 0 && binding.oldValue !== binding.value) {
      typeof binding.value !== "function" && ctx.end();
      ctx.handler = binding.value;
    }
  },
  beforeUnmount(el) {
    const ctx = el.__vctouchhold;
    if (ctx !== void 0) {
      event.cleanEvt(ctx, "main");
      event.cleanEvt(ctx, "temp");
      clearTimeout(ctx.timer);
      ctx.styleCleanup !== void 0 && ctx.styleCleanup();
      delete el.__vctouchhold;
    }
  }
});

exports["default"] = TouchHold;
//# sourceMappingURL=index.js.map
