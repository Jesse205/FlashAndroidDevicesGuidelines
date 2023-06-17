# ADB

Android 调试桥 (adb) 是一种功能多样的命令行工具，可让您与设备进行通信。adb 命令可用于执行各种设备操作，例如安装和调试应用。

* [官方资料](https://developer.android.google.cn/studio/command-line/adb?hl=zh_cn)

::: tip
您可以使用 [Shizuku](https://shizuku.rikka.app/zh-hans/) 将 ADB 权限共享给其他应用
:::

## ADB 工具

ADB 工具是 Platform-Tools 的一部分。

### ADB 工具下载与安装

因为 ADB 工具是 Platform-Tools 的一部分，所以您需要下载 Platform-Tools。

有关详细信息，请参阅 [Platform-Tools 下载](../../../tools/platform-tools.md#platform-tools-下载)

::: tip
Android Studio 会自动下载 Platform-Tools。如果您曾今使用过 Android Studio，则无需手动安装此工具。
:::

## 常见用法

## 常见命令

| 命令                       | 说明                                                           |
| -------------------------- | -------------------------------------------------------------- |
| `adb install -r myapp.apk` | 重新安装 `myapp.apk` 安装包并保留数据。[更多详情][adb安装软件] |

### ADB 安装软件

使用 ADB 为安卓设备安装软件

请参考[《安装电脑或其他设备上的软件》][adb安装软件]

### ADB sideload

使用 ADB 刷入刷机包

请参考[《ADB Sideload》](../../../fast/flash/system.md#adb-sideload)

[adb安装软件]: ../../installApk/index.md#安装电脑或其他设备上的软件

## Awesome ADB | 令人惊叹的 ADB

暂无内容
