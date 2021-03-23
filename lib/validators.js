//https://github.com/aweiu/element-ui-verify 一个校验插件

//^[1-9]{1}[0-9]*$  ==> 首位不为0的正整数
//^0{1}\.{1}[0-9]+$ ==> 首位为0的正小数
//^[1-9]{1}[0-9]*\.{1}[0-9]+$ ==> 首位非0的正小数
//^[1-9]{1}[0-9]*$|^0{1}\.{1}[0-9]+$|^[1-9]{1}[0-9]*\.{1}[0-9]+$ ==>大于0的数字

/**
 * 只允许输入中文，英文，数字，特殊字符@*.#-_且1-20个字符
 * @param {String} val 待验证字符串
 * @returns {Boolean} 验证结果
 */
export function isName(val) {
    return /^([\u4E00-\u9FA5A-Za-z0-9\@\*\.\#\-\_]){1,20}$/.test(val);
}

/**
 * 只允许输入数字
 * @param {String} val 待验证字符串
 * @returns {Boolean} 验证结果
 */
const isNumber = (val) => {
    return /^\d+$/.test(val);
};

/**
 * 验证手机号码格式
 * @param {Number|String} val 需要验证的手机号
 * @returns {boolean} 验证结果
 */
export function isPhone(val) {
    return /^1[3-9]\d{9}$/.test(val);
}

/**
 * 验证是否为有效值
 * @param {*} val 需要验证的值
 * @return {Boolean} 验证结果
 */
export function isEmpty(val) {
    if (
        (typeof val === 'string' && val.trim() === '') ||
        val === null ||
        val === undefined ||
        Number.isNaN(val) ||
        val === false ||
        (Array.isArray(val) && !val.length) ||
        (Object.prototype.toString.call(val) === '[object Object]' && !Object.keys(val).length)
    ) {
        return true;
    }
    return false;
}

/**
 * 验证是否由数字和字母组合
 * @param {*} val 需要验证的值
 * @return {Boolean} 返回验证结果
 */
export function isNumAndLetter(val) {
    return /[0-9]+[a-zA-Z]+[0-9a-zA-Z]*|[a-zA-Z]+[0-9]+[0-9a-zA-Z]*/.test(val);
}

/**
 * 验证是否为邮箱地址
 * @param {*} val 需要验证的值
 * @return {Boolean} 返回验证结果
 */
export function isEmail(val) {
    return /^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/.test(val);
}

/**
 * 身份证
 * @param {*} val 需要验证的值
 * @return {Boolean} 返回验证结果
 */
export function isIdentity(val) {
    return /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)|[A-Za-z]{1}\d{6}[(\d)]{3}/.test(val);
}

/**
 * 车牌
 * @param {*} val 需要验证的值
 * @return {Boolean} 返回验证结果
 */
export function isCarCard(val) {
    return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/.test(val);
}

/**
 * 固定电话
 * @param {*} val 需要验证的值
 * @return {Boolean} 返回验证结果
 */
export function isFixdTel(val) {
    return /^0?(13[0-9]|15[0-9]|17[013678]|18[0-9]|14[57])[0-9]{8}$/.test(val);
}

/**
 * 验证是否是IP
 * @param {*} val 需要验证的值
 * @return {Boolean} 返回验证结果
 */
export function isIP(val) {
    return /^((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))$/.test(val);
}

/**
 * 验证是否是端口
 * @param {*} val 需要验证的值
 * @return {Boolean} 返回验证结果
 */
export function isPort(val) {
    return /^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/.test(val);
}

/**
 * 验证是否是中文
 * @param {*} val 需要验证的值
 * @return {Boolean} 返回验证结果
 */
export function isChinese(val) {
    return /^[\u4E00-\u9FFF]+$/.test(val);
}

/**
 * 验证是否是QQ号码
 * @param {*} val 需要验证的值
 * @return {Boolean} 返回验证结果
 */
export function isQQ(val) {
    return /^[1-9][0-9]{4,10}$/.test(val);
}

/**
 * 验证是否是微信号码
 * @param {*} val 需要验证的值
 * @return {Boolean} 返回验证结果
 */
export function isWechat(val) {
    return /^[a-zA-Z]([\w-]{5,19})+$/.test(val);
}

/**
 * 验证是否是金额（保留两位小数）
 * @param {*} val 需要验证的值
 * @return {Boolean} 返回验证结果
 */
export function isMoney(val) {
    return /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(val);
}

export default {
    isName,
    isNumber,
    isPhone,
    isEmpty,
    isNumAndLetter,
    isEmail,
    isIdentity,
    isCarCard,
    isFixdTel,
    isIP,
    isPort,
    isChinese,
    isQQ,
    isWechat,
    isMoney,
};
