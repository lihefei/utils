/**
 * 过滤特殊字符，防止xss攻击
 * param {String} val 需要过滤的字符
 * return {String} 过滤后的字符
 */
export function specialSymbolFilter(val) {
    if (val) {
        return val.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    return '';
}

/**
 * 把请求uri参数转json格式
 * param {String} queryStr 请求uri参数字符串
 * return {Object} 解析后输出的json格式
 */
export function parseQueryStr(queryStr) {
    const queryData = {};
    const queryStrList = queryStr.split('&');
    for (let [index, queryStr] of queryStrList.entries()) {
        let itemList = queryStr.split('=');
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData;
}

/**
 * 验证是否为有效值
 * param {*} val 需要验证的值
 * return {Boolean} 返回验证结果
 */
export function isEmpty(val) {
    if ((typeof val === 'string' && val.trim() === '') || val === null || val === undefined || Number.isNaN(val) || val === false || (Array.isArray(val) && !val.length) || (Object.prototype.toString.call(val) === '[object Object]' && !Object.keys(val).length)) {
        return true;
    }
    return false;
}

export default {
    specialSymbolFilter,
    parseQueryStr,
    isEmpty
};
