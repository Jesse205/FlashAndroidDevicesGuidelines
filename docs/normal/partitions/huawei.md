# 华为的分区和映像

## recovery_ramdisk 分区 <Badge type="tip" text="EMUI 8.0+" vertical="top" />

这相当于之前的 `recovery` 分区

## ramdisk 分区 <Badge type="tip" text="EMUI 8.0+" vertical="top" />

这相当于之前的 `boot` 分区

## erecovery 分区

专门用于恢复操作系统的 recovery 分区

::: tip
您可以将手机使用数据线连接到电脑，然后长按音量增大+电源键进入 eRecovery 模式

也可以使用以下命令进入此模式

``` shell
adb reboot erecovery
```

:::

## hw_product 分区
