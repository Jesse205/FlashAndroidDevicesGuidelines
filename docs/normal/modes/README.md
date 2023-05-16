# 安卓中的各种开机模式

::: warning
部分手机的开机模式名称以及种类可能不同，本章仅介绍了安卓中一般都有的几种模式
:::

## Recovery 模式

* 使用 [ADB](../../tools/README.md#adb) 进入

``` bash
adb reboot recovery
```

## Fastboot 模式

* 使用 ADB 进入

``` bash
adb reboot bootloader
```

## 安全模式

待补充

目前我总结出的方法是在开机时瞎按音量键即可进入
