# 解锁 Bootloader

解锁一般指的是解锁 Bootloader。

::: tip
该文档有机型各自的文档，您可以点击以下链接查看

* 小米
* [华为](unlock/huawei.md)
* 三星
* 魅族
* OPPO
* Vivo
:::

## 申请解锁

* [小米](https://www.miui.com/unlock/index.html)
* ~~华为~~ （已停止解锁服务）
* 三星

## 解锁 Bootloader
解锁操作可大致分为手机端-电脑端两步，时间跨度较长，请规划好时间

每个品牌的解锁步骤不同，请参考对应的文档

* [小米](xiaomi.md)
* [华为](huawei.md)
* 三星
* 魅族
* OPPO
* Vivo

## 检查是否解除 BL

### 小米

* __关机状态__：开机时第一屏如果显示一个打开的锁的图标或 `unlock`（较老款手机），表明解锁成功。
* __开机状态__：进入 `设置-更多设置-开发者选项-设备解锁状态` 查看，若显示“当前设备已解锁”，表明解锁成功。

### 华为

* fastboot 状态: 如果显示红色的 `PHONE Unlocked`
* 开机第一屏之后: 如果显示 `Your device has been unlocked and can't be trusted.` ，并且文字提示为橙色，则说明手机解锁成功

## 版权声明

本文档已获得 [@灬只会刷机养老](http://www.coolapk.com/u/11090720) 授权搬运并修改整理

## 参考链接

* [【小白搞机入门】名词集-BootLoader锁（BL锁）](https://www.coolapk.com/feed/42674591?shareKey=YzQ2MThhNmI5MmNiNjNkNTcwOGM~)
