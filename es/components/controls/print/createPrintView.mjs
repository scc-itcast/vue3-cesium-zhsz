import { createApp } from 'vue';
import VcPrintView from './print-view.mjs';

const styles = `
  .background {
    width: 100%;
    fill: rgba(255, 255, 255, 1.0);
  }

  .map-image {
    max-width: 95vw;
    max-height: 95vh;
  }

  .layer-legends {
    display: inline;
    float: left;
    padding-left: 20px;
    padding-right: 20px;
  }

  .layer-title {
    font-weight: bold;
  }

  h1, h2, h3 {
    clear: both;
  }
`;
const createPrintView = (options) => {
  const { printWindow = window.open(), closeCallback, title } = options;
  if (closeCallback) {
    printWindow.addEventListener("unload", () => {
      closeCallback(printWindow);
    });
  }
  printWindow.document.open();
  printWindow.document.close();
  printWindow.document.head.innerHTML = `
    <meta charset="UTF-8">
    <title>${options.title}</title>
    <style>${styles}</style>
    `;
  printWindow.document.body.innerHTML = '<div id="print"></div>';
  options.printWindow = options.printWindow || printWindow;
  const printViewProps = {
    options
  };
  const app = createApp(VcPrintView, printViewProps);
  app.mount(printWindow.document.getElementById("print"));
};

export { createPrintView as default };
//# sourceMappingURL=createPrintView.mjs.map
