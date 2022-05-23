import defer from '../../../utils/defer.mjs';

function printWindow(windowToPrint) {
  const deferred = defer();
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

export { printWindow as default };
//# sourceMappingURL=printWindow.mjs.map
