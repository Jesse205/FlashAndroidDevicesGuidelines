# 华为的开机模式

| 名称                 | 进入方法                                                                   |
| -------------------- | -------------------------------------------------------------------------- |
| Recovery             | 不连接电脑，关机状态长按电源键和音量加，出现 logo 后只松开电源键，直到进入 |
| eRecovery            | 用数据线连接电脑，关机状态长按电源键和音量加                               |
| Fastboot             | 用数据线连接电脑，关机状态长按电源键和音量减                               |
| 升级模式（三键强刷） | 关机状态下，长按电源键，音量加和音量减。插不插线无所谓。                   |

## Recovery 模式

这个 Recovery 就是[我们常见的 Recovery](./README.md#recovery-模式)。

### 进入 Recovery 模式的方法

* 支持[通用方法](./README.md#recovery-模式)，但是通过音量键进入的时候稍微不一样。
* 不连接电脑，关机状态长按电源键和音量加，出现 logo 后只松开电源键，直到进入

## eRecovery 模式 <Badge type="tip" text="EMUI4.0+" />

eRecovery 是华为特有专门用于恢复操作系统的 recovery 模式。在 eRecovery 里可以连接 WiFi 下载适用于你的手机的系统包并自动安装恢复。

eRecovery 只有下载系统恢复包并恢复的作用，其他的清除数据这些操作都是自动重启到 Recovery 后操作的。因此如果您的 Recovery 已损坏，请不要尝试在此模式下清除数据，否则可能会造成严重事故。

* 分区名：`erecovery`（EMUI 5 及之前）、`erecovery_ramdisk`（EMUI 8 及以后）

### 进入 eRecovery 模式的方法

* 将手机使用数据线连接到电脑，然后长按 音量增大 + 电源键 进入 eRecovery 模式
* 也可以使用以下命令进入此模式

``` shell
adb reboot erecovery
```

::: tip
使用 eRecovery 救砖时，可能因为华为撤包导致无法使用
:::

::: details Recovery 和 eRecovery 是有区别的。

* Recovery 就是我们熟知的那个 Recovery，而 eRecovery 是独立于 Recovery 的另一个 Recovery 分区。也就是说华为相当于有两个恢复模式。
* 二者功能不同，在 Recovery 里我们可以做恢复出厂，清除 cache 等本地操作，而在 eRecovery 里可以连接 WiFi 下载适用于你的手机的系统包并自动安装恢复。

:::

## 安全模式

* 支持[通用方法](./README.md#安全模式)，但是不支持在电源菜单中长按进入
* EMUI 9.1 及以上版本是开机过程中长按电源键和音量上键。
* EMUI 9.1 以下版本在开机过程中同时电源键和音量下键完成开机。
* Mate30 Pro 系列是手机开机振动后，连续按电源键5次进入。

## 参考链接

* [华为手机/平板安全模式简介](https://consumer.huawei.com/cn/support/content/zh-cn00737976/) - 华为官网
