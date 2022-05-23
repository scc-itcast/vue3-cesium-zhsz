import '../../utils/util.mjs';
import { isString } from '@vue/shared';

function useLog(vcInstance) {
  var _a, _b, _c, _d;
  const makeLog = (prefix = "") => {
    return function(...args) {
      if (prefix) {
        if (isString(args[0])) {
          args[0] = prefix.trim() + " " + args[0];
        } else {
          args = [prefix.trim(), ...args];
        }
      }
      console.log(...args);
    };
  };
  const makeWarn = (prefix = "") => {
    return function(...args) {
      if (prefix) {
        if (isString(args[0])) {
          args[0] = prefix.trim() + " " + args[0];
        } else {
          args = [prefix.trim(), ...args];
        }
      }
      console.warn(...args);
    };
  };
  const makeError = (prefix = "") => {
    return function(...args) {
      if (prefix) {
        if (isString(args[0])) {
          args[0] = prefix.trim() + " " + args[0];
        } else {
          args = [prefix.trim(), ...args];
        }
      }
      console.error(...args);
    };
  };
  const makeDebug = (prefix = "") => {
    return function(...args) {
      if (prefix) {
        if (isString(args[0])) {
          args[0] = prefix.trim() + " " + args[0];
        } else {
          args = [prefix.trim(), ...args];
        }
      }
      if (process.env.NODE_ENV === "development") {
      }
    };
  };
  const typeColor = (type = "default") => {
    let color = "";
    switch (type) {
      case "default":
        color = "#35495E";
        break;
      case "primary":
        color = "#3488ff";
        break;
      case "success":
        color = "#43B883";
        break;
      case "warning":
        color = "#e6a23c";
        break;
      case "danger":
        color = "#f56c6c";
        break;
      default:
        break;
    }
    return color;
  };
  const capsule = (title, info, type = "primary") => {
    console.log(`%c ${title} %c ${info} %c`, "background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;", `background:${typeColor(type)}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`, "background:transparent");
  };
  const colorful = (textArr) => {
    console.log(`%c${textArr.map((t) => t.text || "").join("%c")}`, ...textArr.map((t) => `color: ${typeColor(t.type)};`));
  };
  const success = (text) => {
    colorful([{ text, type: "success" }]);
  };
  const warning = (text) => {
    colorful([{ text, type: "warning" }]);
  };
  const danger = (text) => {
    colorful([{ text, type: "danger" }]);
  };
  const primary = (text) => {
    colorful([{ text, type: "primary" }]);
  };
  return {
    log: makeLog(`[VueCesium] ${(_a = vcInstance == null ? void 0 : vcInstance.proxy) == null ? void 0 : _a.$options.name}`),
    warn: makeWarn(`[VueCesium] WARN ${(_b = vcInstance == null ? void 0 : vcInstance.proxy) == null ? void 0 : _b.$options.name}`),
    error: makeError(`[VueCesium] ERR ${(_c = vcInstance == null ? void 0 : vcInstance.proxy) == null ? void 0 : _c.$options.name}`),
    debug: makeDebug(`[VueCesium] Debug ${(_d = vcInstance == null ? void 0 : vcInstance.proxy) == null ? void 0 : _d.$options.name}`),
    capsule,
    success,
    warning,
    danger,
    primary
  };
}

export { useLog as default };
//# sourceMappingURL=use-log.mjs.map
