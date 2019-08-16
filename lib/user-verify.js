import { isEmpty } from './common';
/**
 * 用户id、imei存储及验证
 * @param {Object}  route对象
 */
export default function(route) {
    /* 验证url与本地有无userId和imei参数 */
    if (verifyUrl()) {
        window.localStorage.setItem('project', JSON.stringify(route.query)); //userId和imei存本地存储
    } else if (!verifyLocal()) {
        //mui.toast('设备不存在');
    }

    /**
     * 验证url有无userId和imei参数
     * @returns {Boolean}  返回验证结果
     */
    function verifyUrl() {
        return verifyEffective(route.query);
    }

    /**
     * 验证本地有无userId和imei参数
     * @returns {Boolean}  返回验证结果
     */
    function verifyLocal() {
        return verifyEffective(JSON.parse(window.localStorage.project || '{}'));
    }

    /**
     * 验证数据有效性
     * @param {Object} data 需要验证的数据
     * @returns {Boolean}  返回验证结果
     */
    function verifyEffective(data) {
        if (Object.prototype.toString.call(data) !== '[object Object]' || isEmpty(data)) {
            return false;
        }
        for (let k in data) {
            if (isEmpty(data[k])) {
                return false;
            }
        }
        return true;
    }
}
