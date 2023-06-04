# 解锁 Bootloader

::: details 本页内容
[[toc]]
:::

## 什么是 Bootloader 锁以及为什么要解锁 Bootloader

Bootloader（简称bl），意为「引导加载程序」，是负责引导计算机启动的程序。

在刷机中，解锁一般指的是解锁 Bootloader。

在解开bl锁之前，用户是无法自由进行刷机和 root 等操作的。大多数手机厂商为了限制用户刷机，保证手机的安全，为手机设置了bl锁，在没有解锁bl的情况下，用户是不能自行刷机或获取 root 权限的。

::: tip 注意
并非所有的手机都可以解锁bl，比如大部分的 Vivo 手机，部分的 OPPO 手机以及较新的华为手机等是无法解锁bl的，详细内容请查看对应的部分
:::

::: danger
__您正在浏览的是通用文档，可能会对您的手机无效，甚至可能会变砖！！__

每家手机厂商解锁方式不一样，您可以直接跳转到他们自己的部分

* [小米](xiaomi.md)
* [华为](huawei.md)
* 三星（敬请期待）
* 魅族（敬请期待）
* OPPO（敬请期待）
* Vivo（敬请期待）
* 一加（敬请期待）
:::

## 申请解锁

每个厂家的申请解锁方式不一样，请查看他们各自的内容

* [小米](https://www.miui.com/unlock/index.html)
* ~~华为~~ （已停止解锁服务，请通过[其他渠道](huawei.md#一申请解锁码)获取）
* [OPPO](https://www.oppo.cn/thread-397164526-1) （OPPO 官方称其为「深度测试」）
* 三星（敬请期待）

## 开始解锁 Bootloader

每个品牌的解锁步骤不同，请参考对应的文档

* [小米](xiaomi.md#解锁步骤)
* [华为](huawei.md#二开始解锁)
* 三星（敬请期待）
* 魅族（敬请期待）
* OPPO（敬请期待）
* Vivo（敬请期待）

## 检查是否已解锁

您可以根据手机表现的一系列特征判断手机是否解锁

通常情况下，Fastboot 状态有显示解锁状态

* 小米
  * __关机状态__：开机时第一屏如果显示一个打开的锁的图标或 `unlock`（较老款手机），表明解锁成功。
  * __开机状态__：进入 `设置-更多设置-开发者选项-设备解锁状态` 查看，若显示“当前设备已解锁”，表明解锁成功。
* 华为
  * __fastboot 状态__: 如果显示红色的 `PHONE Unlocked`
  * __开机第一屏之后__: 如果显示 `Your device has been unlocked and can't be trusted.` ，并且提示文字为橙色，则说明手机解锁成功

## 相关链接

* [[名词集] Bootloader 锁](../../normal/noun.md)

## 版权声明

本文档已获得 [@灬只会刷机养老](http://www.coolapk.com/u/11090720) 授权搬运并修改整理

## 参考链接

* [【小白搞机入门】名词集-BootLoader锁（BL锁）](https://www.coolapk.com/feed/42674591?shareKey=YzQ2MThhNmI5MmNiNjNkNTcwOGM~) - 酷安
