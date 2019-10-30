/**
 * 判断是否为数组
 * @param  {*}  val 任意数据类型
 * @return {Boolean}     数组类型返回true，否则返回false
 */
export function isArray(val) {
    return Array.prototype.isPrototypeOf(val);
}

/**
 * 合并简单数组
 * @param {Array} arr1  数组1
 * @param {Array} arr2  数组2
 * @returns {Array} 合并后的数组
 */
export function mergeArray(arr1, arr2) {
    let arr = arr1.concat(arr2);
    return Array.from(new Set(arr));
}

/**
 * 删除数组中的值
 * @param {Array} arr  原始数组
 * @param  {*}  val 需要删除的值
 * @param  {Number}  index 需要删除的下标
 */
export function removeArray(arr, val, index) {
    if (!(arr && arr.length)) {
        return;
    }

    let i = arr.indexOf(val);
    arr.splice(i, 1);
    index !== undefined && arr.splice(index, 1);
}

export default {
    isArray,
    mergeArray,
    removeArray
};
