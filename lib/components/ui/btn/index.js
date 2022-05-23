'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index$1 = require('../icon/index.js');
require('../spinner/index.js');
require('../../../directives/index.js');
var useBtn = require('./use-btn.js');
var render = require('../../../utils/private/render.js');
var event = require('../../../utils/private/event.js');
var touch = require('../../../utils/private/touch.js');
var keyComposition = require('../../../utils/private/key-composition.js');
var index = require('../../../directives/ripple/index.js');
var spinner = require('../spinner/spinner.js');

const { passiveCapture } = event.listenOpts;
let touchTarget, keyboardTarget, mouseTarget;
const btnProps = {
  ...useBtn.useBtnProps,
  percentage: {
    type: Number,
    default: 0
  },
  darkPercentage: Boolean
};
var Btn = vue.defineComponent({
  name: "VcBtn",
  props: btnProps,
  emits: ["click", "keydown", "touchstart", "mousedown", "keyup"],
  setup(props, { slots, emit }) {
    var _a;
    const proxy = (_a = vue.getCurrentInstance()) == null ? void 0 : _a.proxy;
    const { classes, style, innerClasses, attributes, isActionable } = useBtn["default"](props);
    const rootRef = vue.ref(null);
    const blurTargetRef = vue.ref(null);
    let localTouchTargetEl = null, avoidMouseRipple, mouseTimer;
    const hasLabel = vue.computed(() => props.label !== void 0 && props.label !== null && props.label !== "");
    const ripple = vue.computed(() => props.ripple === false ? false : {
      keyCodes: 13,
      ...props.ripple === true ? {} : props.ripple
    });
    const percentageStyle = vue.computed(() => {
      const val = Math.max(0, Math.min(100, props.percentage));
      return val > 0 ? { transition: "transform 0.6s", transform: `translateX(${val - 100}%)` } : {};
    });
    const onEvents = vue.computed(() => {
      if (props.loading === true) {
        return {
          onMousedown: onLoadingEvt,
          onTouchstart: onLoadingEvt,
          onClick: onLoadingEvt,
          onKeydown: onLoadingEvt,
          onKeyup: onLoadingEvt
        };
      } else if (isActionable.value === true) {
        return {
          onClick,
          onKeydown,
          onMousedown,
          onTouchstart
        };
      }
      return {};
    });
    const directives = vue.computed(() => {
      return [[index["default"], ripple.value, void 0, { center: props.round }]];
    });
    const nodeProps = vue.computed(() => ({
      ref: rootRef,
      class: "vc-btn vc-btn-item non-selectable no-outline " + classes.value,
      style: style.value,
      ...attributes.value,
      ...onEvents.value
    }));
    function onClick(e) {
      var _a2;
      if (e !== void 0) {
        if (e.defaultPrevented === true) {
          return;
        }
        const el = document.activeElement;
        if (props.type === "submit" && el !== document.body && ((_a2 = rootRef.value) == null ? void 0 : _a2.contains(el)) === false && (el == null ? void 0 : el.contains(rootRef.value)) === false) {
          rootRef.value.focus();
          const onClickCleanup = () => {
            document.removeEventListener("keydown", event.stopAndPrevent, true);
            document.removeEventListener("keyup", onClickCleanup, passiveCapture);
            rootRef.value !== null && rootRef.value.removeEventListener("blur", onClickCleanup, passiveCapture);
          };
          document.addEventListener("keydown", event.stopAndPrevent, true);
          document.addEventListener("keyup", onClickCleanup, passiveCapture);
          rootRef.value.addEventListener("blur", onClickCleanup, passiveCapture);
        }
      }
      const go = () => {
      };
      emit("click", e, go);
    }
    function onKeydown(e) {
      var _a2, _b, _c;
      if (keyComposition.isKeyCode(e, [13, 32]) === true) {
        event.stopAndPrevent(e);
        if (keyboardTarget !== rootRef.value) {
          keyboardTarget !== null && cleanup();
          (_a2 = rootRef.value) == null ? void 0 : _a2.focus();
          keyboardTarget = rootRef.value;
          (_b = rootRef.value) == null ? void 0 : _b.classList.add("vc-btn--active");
          document.addEventListener("keyup", onPressEnd, true);
          (_c = rootRef.value) == null ? void 0 : _c.addEventListener("blur", onPressEnd, passiveCapture);
        }
      }
      emit("keydown", e);
    }
    function onTouchstart(e) {
      if (touchTarget !== rootRef.value) {
        touchTarget !== null && cleanup();
        touchTarget = rootRef.value;
        localTouchTargetEl = touch.getTouchTarget(e.target);
        localTouchTargetEl == null ? void 0 : localTouchTargetEl.addEventListener("touchcancel", onPressEnd, passiveCapture);
        localTouchTargetEl == null ? void 0 : localTouchTargetEl.addEventListener("touchend", onPressEnd, passiveCapture);
      }
      avoidMouseRipple = true;
      clearTimeout(mouseTimer);
      mouseTimer = setTimeout(() => {
        avoidMouseRipple = false;
      }, 200);
      emit("touchstart", e);
    }
    function onMousedown(e) {
      var _a2;
      if (mouseTarget !== rootRef.value) {
        mouseTarget !== null && cleanup();
        mouseTarget = rootRef.value;
        (_a2 = rootRef.value) == null ? void 0 : _a2.classList.add("vc-btn--active");
        document.addEventListener("mouseup", onPressEnd, passiveCapture);
      }
      e.qSkipRipple = avoidMouseRipple === true;
      emit("mousedown", e);
    }
    function onPressEnd(e) {
      var _a2;
      if (e !== void 0 && e.type === "blur" && document.activeElement === rootRef.value) {
        return;
      }
      if (e !== void 0 && e.type === "keyup") {
        if (keyboardTarget === rootRef.value && keyComposition.isKeyCode(e, [13, 32]) === true) {
          const evt = new MouseEvent("click", e);
          evt.qKeyEvent = true;
          e.defaultPrevented === true && event.prevent(evt);
          e.cancelBubble === true && event.stop(evt);
          (_a2 = rootRef.value) == null ? void 0 : _a2.dispatchEvent(evt);
          event.stopAndPrevent(e);
          e.qKeyEvent = true;
        }
        emit("keyup", e);
      }
      cleanup();
    }
    function cleanup(destroying) {
      const blurTarget = blurTargetRef.value;
      if (destroying !== true && (touchTarget === rootRef.value || mouseTarget === rootRef.value) && blurTarget !== null && blurTarget !== document.activeElement) {
        blurTarget.setAttribute("tabindex", "-1");
        blurTarget.focus();
      }
      if (touchTarget === rootRef.value) {
        if (localTouchTargetEl !== null) {
          localTouchTargetEl.removeEventListener("touchcancel", onPressEnd, passiveCapture);
          localTouchTargetEl.removeEventListener("touchend", onPressEnd, passiveCapture);
        }
        touchTarget = localTouchTargetEl = null;
      }
      if (mouseTarget === rootRef.value) {
        document.removeEventListener("mouseup", onPressEnd, passiveCapture);
        mouseTarget = null;
      }
      if (keyboardTarget === rootRef.value) {
        document.removeEventListener("keyup", onPressEnd, true);
        rootRef.value !== null && rootRef.value.removeEventListener("blur", onPressEnd, passiveCapture);
        keyboardTarget = null;
      }
      rootRef.value !== null && rootRef.value.classList.remove("vc-btn--active");
    }
    function onLoadingEvt(evt) {
      event.stopAndPrevent(evt);
      evt.qSkipRipple = true;
    }
    vue.onBeforeUnmount(() => {
      cleanup(true);
    });
    Object.assign(proxy, {
      click: onClick
    });
    return () => {
      let inner = [];
      props.icon !== void 0 && inner.push(vue.h(index$1["default"], {
        name: props.icon,
        left: props.stack === false && hasLabel.value === true,
        role: "img",
        "aria-hidden": "true"
      }));
      hasLabel.value === true && inner.push(vue.h("span", { class: "block" }, [props.label]));
      inner = render.hMergeSlot(slots.default, inner);
      if (props.iconRight !== void 0 && props.round === false) {
        inner.push(vue.h(index$1["default"], {
          name: props.iconRight,
          right: props.stack === false && hasLabel.value === true,
          role: "img",
          "aria-hidden": "true"
        }));
      }
      const child = [
        vue.h("span", {
          class: "vc-focus-helper",
          ref: blurTargetRef
        })
      ];
      if (props.loading === true && props.percentage !== void 0) {
        child.push(vue.h("span", {
          class: "vc-btn__progress absolute-full overflow-hidden"
        }, [
          vue.h("span", {
            class: "vc-btn__progress-indicator fit block" + (props.darkPercentage === true ? " vc-btn__progress--dark" : ""),
            style: percentageStyle.value
          })
        ]));
      }
      child.push(vue.h("span", {
        class: "vc-btn__content text-center col items-center vc-anchor--skip " + innerClasses.value
      }, inner));
      props.loading !== null && child.push(vue.h(vue.Transition, {
        name: "vc-transition--fade"
      }, () => props.loading === true ? [
        vue.h("span", {
          key: "loading",
          class: "absolute-full flex flex-center"
        }, slots.loading !== void 0 ? slots.loading() : [vue.h(spinner["default"])])
      ] : null));
      return render.hDir("button", nodeProps.value, child, "ripple", props.disable !== true && props.ripple !== false, () => directives.value);
    };
  }
});

exports.btnProps = btnProps;
exports["default"] = Btn;
//# sourceMappingURL=index.js.map
