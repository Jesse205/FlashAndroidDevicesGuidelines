# 分区和映像

Android 设备包含若干个分区，这些分区在启动过程中发挥不同的作用。为了支持 A/B 更新，设备需要为 boot、system、vendor 和 radio 分区分别单独配置一个槽位。

## 常见分区

### Boot

系统启动时引导的分区

::: tip
Android 8.0 以前刷机需要连同`boot.img` 一起刷入
:::

### System

存放 Android 系统的分区

### Recovery

## 参考链接

* [分区和映像](https://source.android.google.cn/docs/core/architecture/bootloader/partitions-images?hl=zh_cn) Android 开源项目
