import { defineComponent, getCurrentInstance, ref, computed, watch, h, Transition, onBeforeUnmount } from 'vue';
import useAnchor, { useAnchorProps } from '../../../composables/private/use-anchor.mjs';
import useScrollTarget from '../../../composables/private/use-scroll-target.mjs';
import useModelToggle, { useModelToggleProps, useModelToggleEmits } from '../../../composables/private/use-model-toggle.mjs';
import usePortal from '../../../composables/private/use-portal.mjs';
import useTransition, { useTransitionProps } from '../../../composables/private/use-transition.mjs';
import useTick from '../../../composables/private/use-tick.mjs';
import useTimeout from '../../../composables/private/use-timeout.mjs';
import { getScrollTarget } from '../../../utils/private/scroll.mjs';
import { getTouchTarget } from '../../../utils/private/touch.mjs';
import { cleanEvt, addEvt } from '../../../utils/private/event.mjs';
import { clearSelection } from '../../../utils/private/selection.mjs';
import { hSlot } from '../../../utils/private/render.mjs';
import { validatePosition, validateOffset, parsePosition, setPosition } from '../../../utils/private/position-engine.mjs';
import { platform } from '../../../utils/platform.mjs';

const tooltipProps = {
  ...useAnchorProps,
  ...useModelToggleProps,
  ...useTransitionProps,
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
    validator: validatePosition
  },
  self: {
    type: String,
    default: "top middle",
    validator: validatePosition
  },
  offset: {
    type: Array,
    default: () => [14, 14],
    validator: validateOffset
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
var Tooltip = defineComponent({
  name: "VcTooltip",
  inheritAttrs: false,
  props: tooltipProps,
  emits: [...useModelToggleEmits],
  setup(props, { slots, emit, attrs }) {
    let unwatchPosition, observer;
    const vm = getCurrentInstance();
    const innerRef = ref(null);
    const showing = ref(false);
    const anchorOrigin = computed(() => parsePosition(props.anchor, true));
    const selfOrigin = computed(() => parsePosition(props.self, true));
    const hideOnRouteChange = computed(() => props.persistent !== true);
    const { registerTick, removeTick, prepareTick } = useTick();
    const { registerTimeout, removeTimeout } = useTimeout();
    const { transition, transitionStyle } = useTransition(props, showing);
    const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget(props, configureScrollTarget);
    const { anchorEl, canShow, anchorEvents } = useAnchor({ showing, configureAnchorEl, avoidEmit: void 0 });
    const { show, hide } = useModelToggle({
      showing,
      canShow,
      handleShow,
      handleHide,
      hideOnRouteChange,
      processOnMount: true
    });
    Object.assign(anchorEvents, { delayShow, delayHide });
    const { showPortal, hidePortal, renderPortal } = usePortal(vm, innerRef, renderPortalContent);
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
        unwatchPosition = watch(() => props.self + "|" + props.anchor, updatePosition);
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
      cleanEvt(anchorEvents, "tooltipTemp");
    }
    function updatePosition() {
      const el = innerRef.value;
      if (anchorEl.value === void 0 || !el) {
        return;
      }
      setPosition({
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
      if (platform().isPhone === true) {
        clearSelection();
        document.body.classList.add("non-selectable");
        const target = getTouchTarget(anchorEl.value);
        const evts = ["touchmove", "touchcancel", "touchend", "click"].map((e) => [target, e, "__delayHide", "passiveCapture"]);
        addEvt(anchorEvents, "tooltipTemp", evts);
      }
      registerTimeout(() => {
        show(evt);
      }, props.delay);
    }
    function delayHide(evt) {
      removeTimeout();
      if (platform().isPhone === true) {
        cleanEvt(anchorEvents, "tooltipTemp");
        clearSelection();
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
      const evts = platform().isPhone === true ? [[anchorEl.value, "touchstart", "delayShow", "passive"]] : [
        [anchorEl.value, "mouseenter", "delayShow", "passive"],
        [anchorEl.value, "mouseleave", "delayHide", "passive"]
      ];
      addEvt(anchorEvents, "anchor", evts);
    }
    function configureScrollTarget() {
      if (anchorEl.value !== void 0 || props.scrollTarget !== void 0) {
        localScrollTarget.value = getScrollTarget(anchorEl.value, props.scrollTarget);
        const fn = props.noParentEvent === true ? updatePosition : hide;
        changeScrollEvent(localScrollTarget.value, fn);
      }
    }
    function getTooltipContent() {
      return showing.value === true ? h("div", {
        ...attrs,
        ref: innerRef,
        class: ["vc-tooltip vc-tooltip--style vc-position-engine no-pointer-events", attrs.class],
        style: transitionStyle.value,
        role: "complementary"
      }, hSlot(slots.default)) : null;
    }
    function renderPortalContent() {
      return h(Transition, {
        name: transition.value,
        appear: true
      }, getTooltipContent);
    }
    onBeforeUnmount(anchorCleanup);
    Object.assign(vm == null ? void 0 : vm.proxy, { updatePosition });
    return renderPortal;
  }
});

export { Tooltip as default, tooltipProps };
//# sourceMappingURL=index.mjs.map
