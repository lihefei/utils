/**
 * 进入全屏模式
 */
export function launchFullScreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

/**
 * 退出全屏模式
 */
export function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

/**
 * 监听全屏状态
 * @param {Function} 监听的回调函数
 */
export function watchFullScreen(fn) {
    document.addEventListener(
        'fullscreenchange',
        function() {
            let isFull =
                document.fullscreenElement ||
                document.msFullscreenElement ||
                document.mozFullScreenElement ||
                document.webkitFullscreenElement ||
                false;
            fn && fn(isFull);
        },
        false
    );

    document.addEventListener(
        'mozfullscreenchange',
        function() {
            let isFull = document.fullscreenElement || document.mozFullScreenElement || false;
            fn && fn(isFull);
        },
        false
    );

    document.addEventListener(
        'webkitfullscreenchange',
        function() {
            let isFull = document.fullscreenElement || document.webkitFullscreenElement || false;
            fn && fn(isFull);
        },
        false
    );

    document.addEventListener(
        'msfullscreenchange',
        function() {
            let isFull = document.fullscreenElement || document.msFullscreenElement || false;
            fn && fn(isFull);
        },
        false
    );
}

export default {
    launchFullScreen,
    exitFullScreen,
    watchFullScreen
};
