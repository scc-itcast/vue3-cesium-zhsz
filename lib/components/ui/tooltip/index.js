'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useAnchor = require('../../../composables/private/use-anchor.js');
var useScrollTarget = require('../../../composables/private/use-scroll-target.js');
var useModelToggle = require('../../../composables/private/use-model-toggle.js');
var usePortal = require('../../../composables/private/use-portal.js');
var useTransition = require('../../../composables/private/use-transition.js');
var useTick = require('../../../composables/private/use-tick.js');
var useTimeout = require('../../../composables/private/use-timeout.js');
var scroll = require('../../../utils/private/scroll.js');
var touch = require('../../../utils/private/touch.js');
var event = require('../../../utils/private/event.js');
var selection = require('../../../utils/private/selection.js');
var render = require('../../../utils/private/render.js');
var positionEngine = require('../../../utils/private/position-engine.js');
var platform = require('../../../utils/platform.js');

const tooltipProps = {
  ...useAnchor.useAnchorProps,
  ...useModelToggle.useModelToggleProps,
  ...useTransition.useTransitionProps,
  maxHeight: {
    type: String,
    default: null
  },
  maxWidth: {
    type: String,
    default: null
  },
  transitionShow: {
    type: String,
    default: "jump-down"
  },
  transitionHide: {
    type: String,
    default: "jump-up"
  },
  anchor: {
    type: String,
    default: "bottom middle",
    validator: positionEngine.validatePosition
  },
  self: {
    type: String,
    default: "top middle",
    validator: positionEngine.validatePosition
  },
  offset: {
    type: Array,
    default: () => [14, 14],
    validator: positionEngine.validateOffset
  },
  scrollTarget: String,
  delay: {
    type: Number,
    default: 0
  },
  hideDelay: {
    type: Number,
    default: 0
  },
  persistent: {
    type: Boolean
  }
};
var Tooltip = vue.defineComponent({
  name: "VcTooltip",
  inheritAttrs: false,
  props: tooltipProps,
  emits: [...useModelToggle.useModelToggleEmits],
  setup(props, { slots, emit, attrs }) {
    let unwatchPosition, observer;
    const vm = vue.getCurrentInstance();
    const innerRef = vue.ref(null);
    const showing = vue.ref(false);
    const anchorOrigin = vue.computed(() => positionEngine.parsePosition(props.anchor, true));
    const selfOrigin = vue.computed(() => positionEngine.parsePosition(props.self, true));
    const hideOnRouteChange = vue.computed(() => props.persistent !== true);
    const { registerTick, removeTick, prepareTick } = useTick["default"]();
    const { registerTimeout, removeTimeout } = useTimeout["default"]();
    const { transition, transitionStyle } = useTransition["default"](props, showing);
    const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget["default"](props, configureScrollTarget);
    const { anchorEl, canShow, anchorEvents } = useAnchor["default"]({ showing, configureAnchorEl, avoidEmit: void 0 });
    const { show, hide } = useModelToggle["default"]({
      showing,
      canShow,
      handleShow,
      handleHide,
      hideOnRouteChange,
      processOnMount: true
    });
    Object.assign(anchorEvents, { delayShow, delayHide });
    const { showPortal, hidePortal, renderPortal } = usePortal["default"](vm, innerRef, renderPortalContent);
    function handleShow(evt) {
      removeTick();
      removeTimeout();
      showPortal();
      registerTick(() => {
        observer = new MutationObserver(() => updatePosition());
        observer.observe(innerRef.value, { attributes: false, childList: true, characterData: true, subtree: true });
        updatePosition();
        configureScrollTarget();
      });
      prepareTick();
      if (unwatchPosition === void 0) {
        unwatchPosition = vue.watch(() => props.self + "|" + props.anchor, updatePosition);
      }
      registerTimeout(() => {
        emit("show", evt);
      }, props.transitionDuration);
    }
    function handleHide(evt) {
      removeTick();
      removeTimeout();
      anchorCleanup();
      registerTimeout(() => {
        hidePortal();
        emit("hide", evt);
      }, props.transitionDuration);
    }
    function anchorCleanup() {
      if (observer !== void 0) {
        observer.disconnect();
        observer = void 0;
      }
      if (unwatchPosition !== void 0) {
        unwatchPosition();
        unwatchPosition = void 0;
      }
      unconfigureScrollTarget();
      event.cleanEvt(anchorEvents, "tooltipTemp");
    }
    function updatePosition() {
      const el = innerRef.value;
      if (anchorEl.value === void 0 || !el) {
        return;
      }
      positionEngine.setPosition({
        el,
        offset: props.offset,
        anchorEl: anchorEl.value,
        anchorOrigin: anchorOrigin.value,
        selfOrigin: selfOrigin.value,
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth
      });
    }
    function delayShow(evt) {
      if (platform.platform().isPhone === true) {
        selection.clearSelection();
        document.body.classList.add("non-selectable");
        const target = touch.getTouchTarget(anchorEl.value);
        const evts = ["touchmove", "touchcancel", "touchend", "click"].map((e) => [target, e, "__delayHide", "passiveCapture"]);
        event.addEvt(anchorEvents, "tooltipTemp", evts);
      }
      registerTimeout(() => {
        show(evt);
      }, props.delay);
    }
    function delayHide(evt) {
      removeTimeout();
      if (platform.platform().isPhone === true) {
        event.cleanEvt(anchorEvents, "tooltipTemp");
        selection.clearSelection();
        setTimeout(() => {
          document.body.classList.remove("non-selectable");
        }, 10);
      }
      registerTimeout(() => {
        hide(evt);
      }, props.hideDelay);
    }
    function configureAnchorEl() {
      if (props.noParentEvent === true || anchorEl.value === void 0) {
        return;
      }
      const evts = platform.platform().isPhone === true ? [[anchorEl.value, "touchstart", "delayShow", "passive"]] : [
        [anchorEl.value, "mouseenter", "delayShow", "passive"],
        [anchorEl.value, "mouseleave", "delayHide", "passive"]
      ];
      event.addEvt(anchorEvents, "anchor", evts);
    }
    function configureScrollTarget() {
      if (anchorEl.value !== void 0 || props.scrollTarget !== void 0) {
        localScrollTarget.value = scroll.getScrollTarget(anchorEl.value, props.scrollTarget);
        const fn = props.noParentEvent === true ? updatePosition : hide;
        changeScrollEvent(localScrollTarget.value, fn);
      }
    }
    function getTooltipContent() {
      return showing.value === true ? vue.h("div", {
        ...attrs,
        ref: innerRef,
        class: ["vc-tooltip vc-tooltip--style vc-position-engine no-pointer-events", attrs.class],
        style: transitionStyle.value,
        role: "complementary"
      }, render.hSlot(slots.default)) : null;
    }
    function renderPortalContent() {
      return vue.h(vue.Transition, {
        name: transition.value,
        appear: true
      }, getTooltipContent);
    }
    vue.onBeforeUnmount(anchorCleanup);
    Object.assign(vm == null ? void 0 : vm.proxy, { updatePosition });
    return renderPortal;
  }
});

exports["default"] = Tooltip;
exports.tooltipProps = tooltipProps;
//# sourceMappingURL=index.js.map
