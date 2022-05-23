function platform() {
  const ua = navigator.userAgent;
  const isWindowsPhone = /(?:Windows Phone)/.test(ua);
  const isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
  const isAndroid = /(?:Android)/.test(ua);
  const isFireFox = /(?:Firefox)/.test(ua);
  const isChrome = /(?:Chrome|CriOS)/.test(ua);
  const isTablet = /(?:iPad|PlayBook)/.test(ua) || isAndroid && !/(?:Mobile)/.test(ua) || isFireFox && /(?:Tablet)/.test(ua);
  const isPhone = /(?:iPhone)/.test(ua) && !isTablet;
  const isPc = !isPhone && !isAndroid && !isSymbian;
  const isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  return {
    isTablet,
    isPhone,
    isAndroid,
    isPc,
    isChrome,
    isIOS,
    hasTouch: "ontouchstart" in window || window.navigator.maxTouchPoints > 0
  };
}

export { platform };
//# sourceMappingURL=platform.mjs.map
