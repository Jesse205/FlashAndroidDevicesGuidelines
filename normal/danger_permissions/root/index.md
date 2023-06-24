# Root

<!--@include: ./summary.md -->

一般来说，ROOT 可以表示一种较高级的 Android 用户权限，即“根权限”。也可以表示获取根权限的动作。

Android 删除了 `su` 程序，所以 Root 的过程就是把 `su` 文件放到 `/system/bin/` ，`Superuser.apk` 放到 `/system/app` 下面，还需要设置一些权限。（Android 5.0 之前的方法）

ROOT 的权限高于 [ADB（Android Debug Bridge）](/tools/platform-tools.md#adb-工具)权限，因此 ADB 无法完全代替 ROOT。

::: tip

有些时候您的需求不必使用 Root。您可以选择以下工具使用其他权限代替 Root。

* 您可以使用 [Shizuku](https://shizuku.rikka.app/zh-hans/) 将 [ADB 权限](../adb/index.md) 共享给其他应用
* 您可以使用 [Dhizuku](https://github.com/iamr0s/Dhizuku) 将 [Device Owner (设备所有者) 权限](../device_owner/index.md) 共享给其他应用

:::

## 常见 ROOT 工具及 ROOT 管理工具

### 兼容性

<!--@include: ./compatibility.md -->

### Magisk <Badge type="tip" text="推荐" />

![Magisk Logo](./images/magisk.png)

Magisk，别名叫做“面具”

这是目前主流的 Root 方式

* **一些突出特点**：
  * **MagiskSU**：为应用程序提供 root 访问权限
  * **Magisk 模块**：通过安装模块修改只读分区
  * **MagiskBoot**：用于解压缩和重新打包 Android 启动映像的最完整工具
  * **Zygisk**：在每个 Android 应用程序的进程中运行代码
* **[Github 仓库](https://github.com/topjohnwu/Magisk)**
* **[安装教程](/fast/install/root/index.md#magisk)**
* **下载地址：**
  * [GitHub Releases](https://github.com/topjohnwu/Magisk/releases/latest) <Badge type="tip" text="官方" />
* **相关链接**：
  * [刷入 Magisk](/fast/install/root/index.md#magisk)
  * [Magisk 中文文档](https://jesse205.github.io/MagiskChineseDocument/) <Badge type="tip" text="本站翻译" />

### KernelSU <Badge type="tip" text="推荐" />

![KernelSU Logo](./images/kernelsu.png)

KernelSU 是 Android GKI 设备的 root 解决方案，它工作在内核模式，并直接在内核空间中为用户空间应用程序授予 root 权限。

这是新型 root 方案。目前正在完善

* **一些突出特点：**
  * **基于内核**：KernelSU 运行在内核空间，对用户空间应用有更强的掌控。
  * **白名单访问控制**：只有被授权的 App 才可以访问 `su`，而其他 App 无法感知其存在。
  * **模块支持**：KernelSU 支持通过 overlayfs 修改 /system，它甚至可以使 /system 可写。
  * **开源**：KernelSU 是 GPL-3 许可下的开源项目。
* **[官方网站](https://kernelsu.org/zh_CN/)**
* **[安装教程](/fast/install/root/index.md#kernelsu)**
* **下载地址：**
  * [GitHub Releases](https://github.com/tiann/KernelSU/releases) <Badge type="tip" text="官方" />
* **相关链接：**
  * [刷入 KernelSU](/fast/install/root/index.md#kernelsu)
  
## SuperUser

别名为“超级用户”，这是很多官方系统内置的授权管理工具（如 Phoenix OS，VMOS，天天模拟器）

### SuperSU

* **下载地址：**
  * [非官方下载](https://supersuroot.org/download/)
  * [123 云盘下载](https://www.123pan.com/s/G7a9-mpek) <Badge type="warning" text="搬运" />
  * [百度网盘下载](https://pan.baidu.com/s/1D-xltDWSZHZmKbqULMknsw?pwd=jxnb)（提取码：jxnb） <Badge type="warning" text="搬运" />
* **相关链接：**：
  * [非官方网站](https://supersuroot.org/)
  * [让 SuperSU 接管权限](./to_supersu.md)

### 一键 Root 工具

::: warning
这是 Android 5 之前常用的获取 Root 方法

此方法几乎不适用于现代所有的手机，请不要对一键 Root 抱有希望。
:::

主流的一键工具有

* **360超级ROOT** <Badge type="warning" text="已停止运营" />：对 360 自家软件兼容友好 <Badge type="tip" text="老设备推荐" />
* **KingRoot** <Badge type="warning" text="已停止运营" />：覆盖机型广，但是有一点臃肿 <Badge type="tip" text="老设备推荐" />
* **YoRoot**：支持 Root 华为部分老机型

对于这些一键 Root 工具，机型不一样体验也不一样，建议都试试，有些 Root 工具至今也可以使用。

* **[安装教程](/fast/install/root/index.md#一键-root-工具)**

## Root 原理

敬请期待

## Awesome Root | 令人惊叹的 Root

<!--@include: ./awesome.md -->

## 相关链接

* 快速上手：[获取 Root](/fast/install/root/index.md)

## 参考链接

* [root](https://baike.baidu.com/item/root/73226) - 百度百科
