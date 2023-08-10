/**
 * 判断两个对象是否键值相同
 * @param  {Object}  a 第一个对象
 * @param  {Object}  b 第一个对象
 * @return {Boolean}   相同返回true，否则返回false
 */
export function isObjectEqual(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length !== bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

/**
 * 对象深拷贝
 * @param {Object} obj 对象
 * @param {Map} map 记录循环引用关系
 * @returns {Object} 深拷贝后的对象
 */
export function deepClone(obj, map = new Map()) {
  let cloneObj = null;
  if (obj && typeof obj === 'object') {
    cloneObj = Array.isArray(obj) ? [] : {};

    if (map.get(obj)) {
      cloneObj = map.get(obj);
    } else if (obj instanceof Date) {
      return new Date(obj);
    } else if (obj instanceof RegExp) {
      cloneObj = new RegExp(obj);
    } else {
      map.set(obj, cloneObj);

      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] && typeof obj[key] === 'object') {
            cloneObj[key] = deepClone(obj[key], map);
          } else {
            cloneObj[key] = obj[key];
          }
        }
      }
    }
  } else {
    cloneObj = obj;
  }
  return cloneObj;
}


/**
 * 对象深合并
 * @param {Object} target 目标对象
 * @param {Object} obj2 原始对象
 * @returns {Object} 深合并后的数据
 */
export function deepMerge(target, source) {
  // 遍历源对象的属性
  for (let key in source) {
    // 检查目标对象是否也有相同的属性
    if (source.hasOwnProperty(key)) {
      // 检查属性值是否为对象，如果是则递归合并
      if (
        typeof source[key] === 'object' &&
        source[key] !== null &&
        !Array.isArray(source[key])
      ) {
        // 如果目标对象没有该属性，则直接赋值
        if (!target.hasOwnProperty(key)) {
          target[key] = source[key];
        } else {
          // 目标对象已经有该属性，递归合并
          deepMerge(target[key], source[key]);
        }
      } else {
        // 属性值不为对象，直接赋值给目标对象
        target[key] = source[key];
      }
    }
  }
  return target;
}


export default {
    isObjectEqual,
    deepClone,
    deepMerge
};
