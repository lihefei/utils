/**
 * 判断是否为数组
 * @param  {*}  val 任意数据类型
 * @return {Boolean}     数组类型返回true，否则返回false
 */
export function isArray(val) {
    return Array.prototype.isPrototypeOf(val);
}

/**
 * 合并任意参数去重并输出数组
 * @param {*} params  任意参数，支持多个
 * @returns {Array} 合并后的数组
 */
export function mergeArray(...params) {
    let set = new Set();
    params.forEach(item => {
        if (item instanceof Array) {
            item.forEach(val => {
                set.add(val);
            });
        } else {
            set.add(item);
        }
    });

    return Array.from(set);
}

/**
 * 删除数组中的值
 * @param {Array} arr  原始数组
 * @param  {*}  params 需要删除的值，支持多个
 * @returns {Array} 处理后的数组
 */
export function removeArray(arr, ...params) {
    if (!(arr && arr.length)) {
        return arr;
    }

    params.forEach(item => {
        if (item instanceof Array) {
            item.forEach(val => {
                let index = arr.indexOf(val);
                arr.splice(index, 1);
            });
        } else {
            let index = arr.indexOf(item);
            arr.splice(index, 1);
        }
    });

    return arr;
}

/**
 * 删除数组中指定下标的值
 * @param {Array} arr  原始数组
 * @param  {Number}  index 需要删除的下标
 * @returns {Array} 处理后的数组
 */
export function removeArrayIndex(arr, index) {
    if (!(arr && arr.length && typeof index === 'number' && !Number.isNaN(index))) {
        return arr;
    }
    arr.splice(index, 1);
    return arr;
}

export default {
    isArray,
    mergeArray,
    removeArray,
    removeArrayIndex
};
