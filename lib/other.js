// 创建guid
export function generateID() {
  return Date.now().toString() + randomNum(5);
}

/**
 * 随机数
 * @param {Number} n 位数
 * @returns {Number} 返回随机数
 */
export function randomNum(n) {
  var t = '';
  for (var i = 0; i < n; i++) {
    t += Math.floor(Math.random() * 10);
  }
  return t;
}

export default {
  generateID,
  randomNum
};
