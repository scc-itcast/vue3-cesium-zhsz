'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defer = require('../../../utils/defer.js');

function printWindow(windowToPrint) {
  const deferred = defer["default"]();
  let printInProgressCount = 0;
  const timeout = setTimeout(function() {
    deferred.reject(false);
  }, 1e4);
  function cancelTimeout() {
    clearTimeout(timeout);
  }
  function resolveIfZero() {
    if (printInProgressCount <= 0) {
      deferred.resolve();
    }
  }
  if (windowToPrint.matchMedia) {
    windowToPrint.matchMedia("print").addListener(function(evt) {
      cancelTimeout();
      if (evt.matches) {
        ++printInProgressCount;
      } else {
        --printInProgressCount;
        resolveIfZero();
      }
    });
  }
  windowToPrint.onbeforeprint = function() {
    cancelTimeout();
    ++printInProgressCount;
  };
  windowToPrint.onafterprint = function() {
    cancelTimeout();
    --printInProgressCount;
    resolveIfZero();
  };
  const result = windowToPrint.document.execCommand("print", true, null);
  if (!result) {
    windowToPrint.print();
  }
  return deferred.promise;
}

exports["default"] = printWindow;
//# sourceMappingURL=printWindow.js.map
