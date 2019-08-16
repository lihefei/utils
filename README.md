# 介绍

> 常用工具包集合

# 工具清单

-   common
    -   **specialSymbolFilter** 过滤特殊字符，防止 xss 攻击
    -   **parseQueryStr** 把字符串参数转 json 对象
    -   **isEmpty** 验证是否为空值(如：undefind、null、空字符、isNaN、[]、{})
-   gps
    -   **GPSToChina** GPS 坐标转中国坐标
    -   **chinaToGPS** 中国坐标转 GPS 坐标
    -   **chinaToGPSExact** 中国坐标转 GPS 坐标 中国标准坐标转 GPS 坐标(高精度)
    -   **chinaToBaidu** 中国坐标转百度坐标
    -   **baiduToChina** 百度坐标转中国坐标
    -   **baiduToGPS** 百度坐标转 GPS 坐标
    -   **GPSToBaidu** GPS 坐标转百度坐标
    -   **GPSToMercator** GPS 坐标转墨卡托坐标
    -   **mercatorToGPS** 墨卡托坐标转 GPS 坐标
    -   **distance** 计算两个坐标点的距离
    -   **outOfChina** 计算坐标点是否在中国之外
-   os
    -   **isAndroid** 验证是否是安卓系统
    -   **isIos** 验证是否是 ios 系统
    -   **isMobile** 验证是否是移动端
    -   **isNativeWebView** 验证是否是原生 webview
    -   **nativeRun** 验证是否是在 APP 运行
-   userVerify
    -   **userVerify** 用户 id、imei 存储及验证
-   shortcut-time
    -   **getToday** 获取今天的开始结束时间
    -   **getYesterday** 获取昨天的开始结束时间
    -   **getCurrWeekDays** 获取本周的开始结束时间
    -   **getLastWeekDays** 获取上周的开始结束时间
    -   **getCurrMonthDays** 获取本月的开始结束时间
    -   **getLastMonthDays** 获取上月的开始结束时间
