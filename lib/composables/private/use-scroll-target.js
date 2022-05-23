'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var event = require('../../utils/private/event.js');

function useScrollTarget(props, configureScrollTarget) {
  const localScrollTarget = vue.ref(null);
  let scrollFn;
  function changeScrollEvent(scrollTarget, fn) {
    const fnProp = `${fn !== void 0 ? "add" : "remove"}EventListener`;
    const fnHandler = fn !== void 0 ? fn : scrollFn;
    if (scrollTarget !== window) {
      scrollTarget[fnProp]("scroll", fnHandler, event.listenOpts.passive);
    }
    window[fnProp]("scroll", fnHandler, event.listenOpts.passive);
    scrollFn = fn;
  }
  function unconfigureScrollTarget() {
    if (localScrollTarget.value !== null) {
      changeScrollEvent(localScrollTarget.value);
      localScrollTarget.value = null;
    }
  }
  const noParentEventWatcher = vue.watch(() => props.noParentEvent, () => {
    if (localScrollTarget.value !== null) {
      unconfigureScrollTarget();
      configureScrollTarget();
    }
  });
  vue.onBeforeUnmount(noParentEventWatcher);
  return {
    localScrollTarget,
    unconfigureScrollTarget,
    changeScrollEvent
  };
}

exports["default"] = useScrollTarget;
//# sourceMappingURL=use-scroll-target.js.map
