# 华为的开机模式

<!--@include: ./tips.md -->

| 名称                   | 进入方法                                                                      |
| ---------------------- | ----------------------------------------------------------------------------- |
| Recovery 恢复模式      | 不连接电脑，关机状态长按电源键和音量加，出现 logo 后只松开电源键，直到进入 。 |
| eRecovery 系统恢复模式 | 用数据线连接电脑，关机状态长按电源键和音量加。                                |
| Fastboot               | 用数据线连接电脑，关机状态长按电源键和音量减。                                |
| 升级模式（三键强刷）   | 关机状态下，长按电源键，音量加和音量减。插不插线无所谓。                      |

## Recovery 模式

这个 Recovery 就是[我们常见的 Recovery](./index.md#recovery-模式)。

* 进入方法：
  * 支持[通用方法](./index.md#recovery-模式)，但是稍微不一样：
    * **按键进入**：不连接电脑，关机状态长按电源键和音量加，出现 logo 后松开电源键（部分机型也可以松开音量键）。
    * **一键进入**：EMUI 系统中仅 KangVIP 制作的第三方 EMUI 拥有此功能，官方 EMUI 无此功能。
* 退出方法：
  * 与[通用方法](./index.md#recovery-模式)保持一致。
* 分区名：`recovery`（EMUI 5 及之前）、`recovery_ramdisk`（EMUI 8 及以后）

## eRecovery 模式 <Badge type="tip" text="EMUI4.0+" />

eRecovery 是华为特有专门用于恢复操作系统的 recovery 模式。在 eRecovery 里可以连接 WiFi 下载适用于你的手机的系统包并自动安装恢复。

eRecovery 只有下载系统恢复包并恢复的作用，其他的清除数据这些操作都是自动重启到 Recovery 后操作的。因此如果您的 Recovery 已损坏，请不要尝试在此模式下清除数据，否则可能会造成严重事故。

* 进入方法：
  * **按键进入**：将手机使用数据线连接到电脑，然后长按 音量增大 + 电源键 进入 eRecovery 模式
  * **命令进入**：也可以使用此下命令进入：`adb reboot erecovery`
* 退出方法：
  * 与 [Recovery](#recovery-模式) 的退出方法保持一致
* 分区名：`erecovery`（EMUI 5 及之前）、`erecovery_ramdisk`（EMUI 8 及以后）

::: tip
使用 eRecovery 救砖时，可能因为华为撤包导致无法使用
:::

::: details Recovery 和 eRecovery 是有区别的。

* Recovery 就是我们熟知的那个 Recovery，而 eRecovery 是独立于 Recovery 的另一个 Recovery 分区。也就是说华为相当于有两个恢复模式。
* 二者功能不同，在 Recovery 里我们可以做恢复出厂，清除 cache 等本地操作，而在 eRecovery 里可以连接 WiFi 下载适用于你的手机的系统包并自动安装恢复。

:::

## 升级模式（三键强刷）

此模式通常用于升级或者刷入官方系统，除此之外很少用得到。

升级模式是 Recovery 的一部分，第三方 Recovery 可能会破坏此模式。

* 进入方法：
  * 关机状态下，长按电源键、音量加和音量减。（插不插线无所谓，部分第三方Recovery只支持不插线进入）
* 退出方法：
  * 点击界面中的“确定”、“关机”或“重启”按钮
  * 或长按电源键强制重启 <Badge type="warning" text="更新过程中退出可能损坏系统" />

## 安全模式

* 支持[通用方法](./index.md#安全模式)，但是**部分机型不支持**在电源菜单中长按进入。
* EMUI 9.1 及以上版本：开机过程中长按电源键和音量上键。
* EMUI 9.1 以下版本：在开机过程中同时电源键和音量下键完成开机。
* Mate30 Pro 系列：手机开机振动后，连续按电源键5次进入。

## 版权声明

本文档已获得 [某贼](https://www.coolapk.com/u/3463951) 授权搬运并修改整理

## 参考链接

* [如何Root你的华为旧机？](https://www.coolapk.com/feed/26320412?shareKey=YzZmMjdiZjEwNThjNjEwZDQ5MGI~&shareUid=3463951&shareFrom=com.coolapk.market_11.3)
* [华为手机/平板安全模式简介](https://consumer.huawei.com/cn/support/content/zh-cn00737976/) - 华为官网
