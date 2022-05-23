'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var create = require('../../utils/private/create.js');
var event = require('../../utils/private/event.js');
var selection = require('../../utils/private/selection.js');
var platform = require('../../utils/platform.js');
var keyComposition = require('../../utils/private/key-composition.js');

const keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  delete: [8, 46]
}, keyRegex = new RegExp(`^([\\d+]+|${Object.keys(keyCodes).join("|")})$`, "i");
function shouldEnd(evt, origin) {
  const { top, left } = event.position(evt);
  return Math.abs(left - origin.left) >= 7 || Math.abs(top - origin.top) >= 7;
}
var index = create.createDirective({
  name: "touch-repeat",
  beforeMount(el, { modifiers, value, arg, touchStart }) {
    const keyboard = Object.keys(modifiers).reduce((acc, key) => {
      if (keyRegex.test(key) === true) {
        const keyCode = isNaN(parseInt(key, 10)) ? keyCodes[key.toLowerCase()] : parseInt(key, 10);
        keyCode >= 0 && acc.push(keyCode);
      }
      return acc;
    }, []);
    if (modifiers.mouse !== true && platform.platform().hasTouch !== true && keyboard.length === 0) {
      return;
    }
    const durations = typeof arg === "string" && arg.length > 0 ? arg.split(":").map((val) => parseInt(val, 10)) : [0, 600, 300];
    const durationsLast = durations.length - 1;
    const ctx = {
      keyboard,
      handler: value,
      noop: event.noop,
      mouseStart(evt) {
        if (ctx.event === void 0 && typeof ctx.handler === "function" && event.leftClick(evt) === true) {
          event.addEvt(ctx, "temp", [
            [document, "mousemove", "move", "passiveCapture"],
            [document, "click", "end", "notPassiveCapture"]
          ]);
          ctx.start(evt, true);
        }
      },
      keyboardStart(evt) {
        if (typeof ctx.handler === "function" && keyComposition.isKeyCode(evt, keyboard) === true) {
          if (durations[0] === 0 || ctx.event !== void 0) {
            event.stopAndPrevent(evt);
            el.focus();
            if (ctx.event !== void 0) {
              return;
            }
          }
          event.addEvt(ctx, "temp", [
            [document, "keyup", "end", "notPassiveCapture"],
            [document, "click", "end", "notPassiveCapture"]
          ]);
          ctx.start(evt, false, true);
        }
      },
      touchStart(evt) {
        if (evt.target !== void 0 && typeof ctx.handler === "function") {
          const target = evt.target;
          event.addEvt(ctx, "temp", [
            [target, "touchmove", "move", "passiveCapture"],
            [target, "touchcancel", "end", "notPassiveCapture"],
            [target, "touchend", "end", "notPassiveCapture"]
          ]);
          ctx.start(evt);
          touchStart == null ? void 0 : touchStart(evt);
        }
      },
      start(evt, mouseEvent, keyboardEvent) {
        if (keyboardEvent !== true) {
          ctx.origin = event.position(evt);
        }
        function styleCleanup(withDelay) {
          ctx.styleCleanup = void 0;
          document.documentElement.style.cursor = "";
          const remove = () => {
            document.body.classList.remove("non-selectable");
          };
          if (withDelay === true) {
            selection.clearSelection();
            setTimeout(remove, 10);
          } else {
            remove();
          }
        }
        if (platform.platform().isPhone === true) {
          document.body.classList.add("non-selectable");
          selection.clearSelection();
          ctx.styleCleanup = styleCleanup;
        }
        ctx.event = {
          touch: mouseEvent !== true && keyboardEvent !== true,
          mouse: mouseEvent === true,
          keyboard: keyboardEvent === true,
          startTime: Date.now(),
          repeatCount: 0
        };
        const fn = () => {
          if (ctx.event === void 0) {
            return;
          }
          if (ctx.event.repeatCount === 0) {
            ctx.event.evt = evt;
            if (keyboardEvent === true) {
              ctx.event.keyCode = evt.keyCode;
            } else {
              ctx.event.position = event.position(evt);
            }
            if (platform.platform().isPhone !== true) {
              document.documentElement.style.cursor = "pointer";
              document.body.classList.add("non-selectable");
              selection.clearSelection();
              ctx.styleCleanup = styleCleanup;
            }
          }
          ctx.event.duration = Date.now() - ctx.event.startTime;
          ctx.event.repeatCount += 1;
          ctx.handler(ctx.event);
          const index = durationsLast < ctx.event.repeatCount ? durationsLast : ctx.event.repeatCount;
          ctx.timer = setTimeout(fn, durations[index]);
        };
        if (durations[0] === 0) {
          fn();
        } else {
          ctx.timer = setTimeout(fn, durations[0]);
        }
      },
      move(evt) {
        if (ctx.event !== void 0 && shouldEnd(evt, ctx.origin) === true) {
          clearTimeout(ctx.timer);
        }
      },
      end(evt) {
        if (ctx.event === void 0) {
          return;
        }
        ctx.styleCleanup !== void 0 && ctx.styleCleanup(true);
        evt !== void 0 && ctx.event.repeatCount > 0 && event.stopAndPrevent(evt);
        event.cleanEvt(ctx, "temp");
        clearTimeout(ctx.timer);
        ctx.event = void 0;
      }
    };
    el.__vctouchrepeat = ctx;
    modifiers.mouse === true && event.addEvt(ctx, "main", [[el, "mousedown", "mouseStart", `passive${modifiers.mouseCapture === true ? "Capture" : ""}`]]);
    platform.platform().hasTouch === true && event.addEvt(ctx, "main", [
      [el, "touchstart", "touchStart", `passive${modifiers.capture === true ? "Capture" : ""}`],
      [el, "touchend", "noop", "notPassiveCapture"]
    ]);
    keyboard.length > 0 && event.addEvt(ctx, "main", [[el, "keydown", "keyboardStart", `notPassive${modifiers.keyCapture === true ? "Capture" : ""}`]]);
  },
  updated(el, { oldValue, value }) {
    const ctx = el.__vctouchrepeat;
    if (ctx !== void 0 && oldValue !== value) {
      typeof value !== "function" && ctx.end();
      ctx.handler = value;
    }
  },
  beforeUnmount(el) {
    const ctx = el.__vctouchrepeat;
    if (ctx !== void 0) {
      clearTimeout(ctx.timer);
      event.cleanEvt(ctx, "main");
      event.cleanEvt(ctx, "temp");
      ctx.styleCleanup !== void 0 && ctx.styleCleanup();
      delete el.__vctouchrepeat;
    }
  }
});

exports["default"] = index;
//# sourceMappingURL=index.js.map
