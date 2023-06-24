# ADB

Android 调试桥 (adb) 是一种功能多样的命令行工具，可让您与设备进行通信。adb 命令可用于执行各种设备操作，例如安装和调试应用。

* [官方资料](https://developer.android.google.cn/studio/command-line/adb?hl=zh_cn)

::: tip
您可以使用 [Shizuku][Shizuku] 将 ADB 权限共享给其他应用

有关 Shizuku 启动的方法，请参考[Shizuku 的《用户手册》](https://shizuku.rikka.app/zh-hans/guide/setup/)。
:::

## 无线调试 (传统方法)

传统方法的无线调试需要 Root，或者其他设备辅助才能开启。

1. 将手机打开 ADB 调试，并与电脑连接，等待驱动自动安装成功。
2. 电脑安装 [Platform-Tools][PlatformTools]，然后打开终端，输入 `adb tcpid <端口>`，例如 `adb tcpid 5555`
    （重新启动 adbd，在 TCP上 监听 5555 端口）。
3. 将手机与电脑处于统一局域网下，电脑继续执行 `adb connect <手机内网IP>[:端口]`，例如 `adb connect 192.168.1.666:5555`
    （假设手机 IP 为 `192.168.1.666`，并且已监听 `5555` 端口）
    （通过 TCP/I P连接到一个设备\[默认端口=`5555`\]）
4. 至此，您的设备已通过WIFI连接到电脑。

::: tip
您可以使用 [WADB][WADB] 在**有 Root 的手机**上一键进行 `1` - `2` 步骤。
:::

## 无线调试 (新方法)

通过无线调试新方法适用于 Android 11 或以上版本。这种启动方式无需连接电脑。由于系统限制，每次重新连接 WIFI 后都需要重新开启。

::: tip
需要 ADB 30.0.0 或者以上版本。您可以输入以下代码查看 ADB 版本

```bash
adb --version
```

:::
敬请期待

## ADB 工具 ( `adb.exe` )

### ADB 工具下载与安装

因为 ADB 工具是 Platform-Tools 的一部分，所以您需要下载 Platform-Tools。

有关详细信息，请参阅 [Platform-Tools 下载](/tools/platform-tools.md#platform-tools-下载)

::: tip
Android Studio 会自动下载 Platform-Tools。如果您曾今使用过 Android Studio，则无需手动安装此工具。
:::

### 常见用法

#### ADB 安装软件

常见用法：`adb install -r 我的软件.apk`（重新安装 `我的软件.apk` 安装包并保留数据。）

使用 ADB 为安卓设备安装软件

请阅读[《安装电脑或其他设备上的软件》][adb安装软件]。

#### ADB sideload

使用 ADB 刷入刷机包

请阅读[《ADB Sideload》](/fast/flash/system.md#adb-sideload)

[adb安装软件]: ../../installApk/index.md#安装电脑或其他设备上的软件

## Awesome ADB | 令人惊叹的 ADB

<!--@include: ./awesome.md -->

### 权限分享/接收

* [Shizuku][Shizuku]：让你的应用直接使用系统 API <Badge type="tip" text="APP" />
* [Shizuku-API](https://github.com/RikkaApps/Shizuku-API)：Shizuku 和 Sui 的API和开发者指南。 <Badge type="tip" text="支持库" />

## 相关链接

* 常用工具：[Platform-Tools][PlatformTools]

[PlatformTools]: /tools/platform-tools.md
[WADB]: https://github.com/RikkaApps/WADB
[Shizuku]: https://shizuku.rikka.app/zh-hans/

## 参考链接

* [用户手册](https://shizuku.rikka.app/zh-hans/guide/setup/) - Shizuku
