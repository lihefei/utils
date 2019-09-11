/**
 * 判断是否为数组
 * @param  {*}  val 任意数据类型
 * @return {Boolean}     数组类型返回true，否则返回false
 */
export function isArray(val) {
    return Array.prototype.isPrototypeOf(val);
}

export default {
    isArray
};
