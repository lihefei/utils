/**
 * 在字符串中插入新字符串
 * @param {string} soure 源字符
 * @param {string} index 插入字符的位置
 * @param {string} newStr 需要插入的字符
 * @returns {string} 返回新生成的字符
 */
export function insertStr(soure, index, newStr) {
    var str = soure.slice(0, index) + newStr + soure.slice(index);
    return str;
}

/**
 * 中划线名称转驼峰式
 * @param {string} soure 源字符
 * @returns {string} 返回转换完成的字符
 */
export function midlineToHump(soure) {
    var reg = /-(\w)/g;
    var str = soure.replace(reg, function ($, $1) {
        return $1.toUpperCase();
    });
    return str;
}

/**
 * 中划线或下划线名称转驼峰式
 * @param {string} soure 源字符
 * @param {string} line 线字符
 * @returns {string} 返回转换完成的字符
 */
export function lineToHump(soure, line = '-_') {
  const reg = new RegExp(`[${line}](\\w)`, 'g');

  let str = soure.replace(reg, ($, $1) => {
    return $1.toUpperCase();
  });
  return str;
}

/**
 * 驼峰转大写下划线格式
 * @param {string} str 源字符
 * @returns {string} 返回转换完成的字符
 */
export function toUpperCaseUnderlined(str) {
    let uppercase = '';
    if (str && typeof str === 'string') {
        let len = str.length;

        for (let i = 0; i < len; i++) {
            let character = str.charAt(i);
            let isLetter = /[a-zA-Z]/.test(character); //是否是字母
            if (isLetter) {
                let isUppercase = /[A-Z]/.test(character); //是否是大写

                uppercase += isUppercase && i && i != len - 1 ? '_' + character : character.toUpperCase();
                //如果是大写字母而且不是第一个或最后一个在大写字母前面追加下划线，如果是小写字母则转大写字母
            } else {
                uppercase += character;
            }
        }
    }

    return uppercase;
}

/**
 * 小驼峰转中划线连字符
 * @param {string} soure 源字符
 * @param {string} line 线字符
 * @returns {string} 返回转换完成的字符
 */
export function camelCase2KebabCase(soure, line = '-') {
  const reg = new RegExp(`([A-Z])`, 'g');
  let str = soure.replace(reg, ($, $1) => {
    return line + $1.toLowerCase();
  });
  return str;
}


/**
 * 16进制颜色转RGB\RGBA字符串
 * @param  {String} val 16进制颜色值
 * @param  {Number} opa 不透明度，取值0~1
 * @return {String}     转换后的RGB或RGBA颜色值
 */
export function colorToRGB(val, opa) {
    var pattern = /^(#?)[a-fA-F0-9]{6}$/; //16进制颜色值校验规则
    var isOpa = typeof opa == 'number'; //判断是否有设置不透明度

    if (!pattern.test(val)) {
        //如果值不符合规则返回空字符
        return '';
    }

    var v = val.replace(/#/, ''); //如果有#号先去除#号
    var rgbArr = [];
    var rgbStr = '';

    for (var i = 0; i < 3; i++) {
        var item = v.substring(i * 2, i * 2 + 2);
        var num = parseInt(item, 16);
        rgbArr.push(num);
    }

    rgbStr = rgbArr.join();
    rgbStr = 'rgb' + (isOpa ? 'a' : '') + '(' + rgbStr + (isOpa ? ',' + opa : '') + ')';
    return rgbStr;
}


/**
 * 解析url地址的参数为对象
 * @param {String} url 地址
 * @returns {Object} 参数对象
 */
export function parseQueryParams(url) {
  try {
    url = url.match(/\?([^#]+)/)[1];
    const obj = {};
    const arr = url.split('&');
    for (let i = 0; i < arr.length; i++) {
      let subArr = arr[i].split('=');
      let key = decodeURIComponent(subArr[0]);
      let value = decodeURIComponent(subArr[1]);
      /^\d+$/.test(value) && (value = Number(value));
      obj[key] = value;
    }
    return obj;
  } catch (err) {
    return null;
  }
}

/**
 * 将对象转换为url参数字符串
 * @param {Object} params 参数对象
 * @returns {String} 参数字符串
 */
export function stringifyQueryParams(params) {
  let queryString = '';

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      let value = params[key];

      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          queryString +=
            encodeURIComponent(key) + '=' + encodeURIComponent(value[i]) + '&';
        }
      } else {
        queryString +=
          encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
      }
    }
  }

  return queryString.slice(0, -1); // 去掉末尾的 '&'
}


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
 * 生成随机数
 * param {String} val 需要过滤的字符
 * return {String} 过滤后的字符
 */
export function randomString(len = 32) {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let max = chars.length;
    let str = '';
    for (let i = 0; i < len; i++) {
        str += chars.charAt(Math.floor(Math.random() * max));
    }

    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }

    return '';
}

export default {
    insertStr,
    midlineToHump,
    toUpperCaseUnderlined,
    lineToHump,
    camelCase2KebabCase,
    colorToRGB,
    parseQueryParams,
    stringifyQueryParams,
    specialSymbolFilter
};
