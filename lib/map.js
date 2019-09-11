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

export default {
    getRandomLatLng,
    getLocationLatLng
};
