'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var selection = require('../../utils/private/selection.js');
var event = require('../../utils/private/event.js');
var touch = require('../../utils/private/touch.js');
var keyComposition = require('../../utils/private/key-composition.js');
var platform = require('../../utils/platform.js');

const useAnchorProps = {
  target: {
    type: [Boolean, String],
    default: true
  },
  noParentEvent: Boolean,
  contextMenu: Boolean
};
function useAnchor({
  showing,
  avoidEmit,
  configureAnchorEl
}) {
  const { props, proxy, emit } = vue.getCurrentInstance();
  const anchorEl = vue.ref(null);
  let touchTimer;
  function canShow(evt) {
    return anchorEl.value === null ? false : evt === void 0 || evt.touches === void 0 || evt.touches.length <= 1;
  }
  const anchorEvents = {};
  if (configureAnchorEl === void 0) {
    Object.assign(anchorEvents, {
      hide(evt) {
        ;
        proxy.hide(evt);
      },
      toggle(evt) {
        ;
        proxy.toggle(evt);
      },
      toggleKey(evt) {
        keyComposition.isKeyCode(evt, 13) === true && proxy.toggle(evt);
      },
      contextClick(evt) {
        ;
        proxy.hide(evt);
        vue.nextTick(() => {
          ;
          proxy.show(evt);
        });
        event.prevent(evt);
      },
      mobilePrevent: event.prevent,
      mobileTouch(evt) {
        var _a;
        anchorEvents.mobileCleanup(evt);
        if (canShow(evt) !== true) {
          return;
        }
        ;
        proxy.hide(evt);
        (_a = anchorEl.value) == null ? void 0 : _a.classList.add("non-selectable");
        const target = touch.getTouchTarget(evt.target);
        event.addEvt(anchorEvents, "anchor", [
          [target, "touchmove", "mobileCleanup", "passive"],
          [target, "touchend", "mobileCleanup", "passive"],
          [target, "touchcancel", "mobileCleanup", "passive"],
          [anchorEl.value, "contextmenu", "mobilePrevent", "notPassive"]
        ]);
        touchTimer = setTimeout(() => {
          ;
          proxy.show(evt);
        }, 300);
      },
      mobileCleanup(evt) {
        anchorEl.value.classList.remove("non-selectable");
        clearTimeout(touchTimer);
        if (showing.value === true && evt !== void 0) {
          selection.clearSelection();
        }
      }
    });
    configureAnchorEl = function(context = props.contextMenu) {
      if (props.noParentEvent === true || anchorEl.value === null) {
        return;
      }
      let evts;
      if (context === true) {
        if (platform.platform().isPhone === true) {
          evts = [[anchorEl.value, "touchstart", "mobileTouch", "passive"]];
        } else {
          evts = [
            [anchorEl.value, "click", "hide", "passive"],
            [anchorEl.value, "contextmenu", "contextClick", "notPassive"]
          ];
        }
      } else {
        evts = [
          [anchorEl.value, "click", "toggle", "passive"],
          [anchorEl.value, "keyup", "toggleKey", "passive"]
        ];
      }
      event.addEvt(anchorEvents, "anchor", evts);
    };
  }
  function unconfigureAnchorEl() {
    event.cleanEvt(anchorEvents, "anchor");
  }
  function setAnchorEl(el) {
    anchorEl.value = el;
    while (anchorEl.value.classList.contains("vc-anchor--skip")) {
      ;
      anchorEl.value = anchorEl.value.parentNode;
    }
    configureAnchorEl();
  }
  function pickAnchorEl() {
    if (props.target === false || props.target === "") {
      anchorEl.value = null;
    } else if (props.target === true) {
      setAnchorEl(proxy == null ? void 0 : proxy.$el.parentNode);
    } else {
      let el = props.target;
      if (typeof props.target === "string") {
        try {
          el = document.querySelector(props.target);
        } catch (err) {
          el = void 0;
        }
      }
      if (el !== void 0 && el !== null) {
        anchorEl.value = el.$el || el;
        configureAnchorEl();
      } else {
        anchorEl.value = null;
        console.error(`Anchor: target "${props.target}" not found`);
      }
    }
  }
  vue.watch(() => props.contextMenu, (val) => {
    if (anchorEl.value !== null) {
      unconfigureAnchorEl();
      configureAnchorEl(val);
    }
  });
  vue.watch(() => props.target, () => {
    if (anchorEl.value !== null) {
      unconfigureAnchorEl();
    }
    pickAnchorEl();
  });
  vue.watch(() => props.noParentEvent, (val) => {
    if (anchorEl.value !== null) {
      if (val === true) {
        unconfigureAnchorEl();
      } else {
        configureAnchorEl();
      }
    }
  });
  vue.onMounted(() => {
    pickAnchorEl();
    if (avoidEmit !== true && props.modelValue === true && anchorEl.value === null) {
      emit("update:modelValue", false);
    }
  });
  vue.onBeforeUnmount(() => {
    clearTimeout(touchTimer);
    unconfigureAnchorEl();
  });
  return {
    anchorEl,
    canShow,
    anchorEvents
  };
}

exports["default"] = useAnchor;
exports.useAnchorProps = useAnchorProps;
//# sourceMappingURL=use-anchor.js.map
