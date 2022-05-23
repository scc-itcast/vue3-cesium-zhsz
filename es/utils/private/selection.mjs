import { platform } from '../platform.mjs';

function clearSelection() {
  if (window.getSelection !== void 0) {
    const selection = window.getSelection();
    if ((selection == null ? void 0 : selection.empty) !== void 0) {
      selection.empty();
    } else if ((selection == null ? void 0 : selection.removeAllRanges) !== void 0) {
      selection.removeAllRanges();
      platform().isPhone !== true && selection.addRange(document.createRange());
    }
  } else if (document.selection !== void 0) {
    ;
    document.selection.empty();
  }
}

export { clearSelection };
//# sourceMappingURL=selection.mjs.map
