/**
 * 函数节流器
 * @param  {Function} fn 需要执行性的函数
 * @param  {number} time 时间戳
 * @param  {number} interval 间隔时间
 */
export default function(fn, time, interval = 200) {
    if (time - (window.debounceTimestamp || 0) > interval) {
        fn && fn();
        window.debounceTimestamp = time;
    }
}
