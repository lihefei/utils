/**
 * 获取随机坐标
 * @returns {object} 返回包含经纬度的对象
 */
export function getRandomLatLng() {
    var lnglat = {};
    lnglat.lng = Math.round((Math.random() * 360 - 180) * 1000) / 1000; //经度取值范围-180~180
    lnglat.lat = Math.round((Math.random() * 180 - 90) * 1000) / 1000; //纬度取值范围-90~90
    return lnglat;
}

/**
 * 获取设备当前的坐标
 * @returns {object | null} 返回坐标对象或null
 */
export function getLocationLatLng() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            return {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
        });
    }
    return null;
}

/**
 * 验证经纬度数据
 * @param {BMap} BMap 地图构造类
 * @param {String|Array|Object} val 经纬度数据
 * @returns {Boolean} 验证结果
 */
export function isLatLng(BMap, val) {
    let pattern1 = /^\d+\.?\d+,\d+\.?\d+$/; //验证字符格式：123.456,23.45
    let pattern2 = /^\d+\.?\d+$/; //验证单个经度或纬度

    if (val === 'string') {
        return pattern1.test(val);
    }

    if (val instanceof Object) {
        return pattern2.test(val.lng) && pattern2.test(val.lat);
    }

    if (val instanceof Array && val.length === 2) {
        return pattern2.test(val[0]) && pattern2.test(val[1]);
    }

    return false;
}

/**
 * 经纬度数据转换为地图坐标点
 * @param {BMap} BMap 地图构造类
 * @param {String|Array|Object}  val 经纬度数据
 * @returns {Point|null} 转换后的百度坐标点
 */
export function pointParse(BMap, val) {
    if (isLatLng(val)) {
        return null;
    }

    if (typeof val === 'string') {
        let arr = val.split(',');
        return new BMap.Point(arr[0], arr[1]);
    }

    if (val instanceof Object) {
        return new BMap.Point(val.lng, val.lat);
    }

    if (val instanceof Array) {
        return new BMap.Point(val.lng, val.lat);
    }
}

export default {
    getRandomLatLng,
    getLocationLatLng,
    pointParse,
    isLatLng
};
