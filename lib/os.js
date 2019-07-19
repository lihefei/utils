/**
 * 验证是否是安卓系统
 */
export function isAndroid() {
    return /(Android)/i.test(navigator.userAgent);
}

/**
 * 验证是否是ios系统
 */
export function isIos() {
    return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
}

/**
 * 验证是否是移动端
 */
export function isMobile() {
    return isIos() || isAndroid();
}

/**
 * 验证是否是原生WebView
 */
export function isNativeWebView() {
    return isMobile() && !!window.hello;
}

/**
 * 验证是否是在APP运行
 * param {Function} fn 验证为APP后的回调函数
 * param {Boolean} showMsg 是否显示提示框
 * param {String} msg 自定义提示文字
 */
export function nativeRun(fn, showMsg, msg) {
    if (isNativeWebView()) {
        typeof fn === 'function' && fn();
    } else {
        showMsg !== false && alert(msg || '请在APP内使用此功能');
    }
}

export default {
    isIos,
    isAndroid,
    isMobile,
    isNativeWebView,
    nativeRun
};
