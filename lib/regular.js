//https://github.com/aweiu/element-ui-verify 一个校验插件

//^[1-9]{1}[0-9]*$  ==> 首位不为0的正整数
//^0{1}\.{1}[0-9]+$ ==> 首位为0的正小数
//^[1-9]{1}[0-9]*\.{1}[0-9]+$ ==> 首位非0的正小数
//^[1-9]{1}[0-9]*$|^0{1}\.{1}[0-9]+$|^[1-9]{1}[0-9]*\.{1}[0-9]+$ ==>大于0的数字

/**
 * 验证手机号码格式
 * @param {number|string} num 需要验证的手机号
 * @returns {boolean} 正确为true，错误为false
 */
export function phone(num) {
    return /^1[3-9]\d{9}$/.test(num);
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
    phone,
    isEmpty
};