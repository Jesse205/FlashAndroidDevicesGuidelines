# Root

Root，也称为根用户，是 Unix (如 Solaris、AIX、BSD）和类 UNIX 系统(如 Linux、QNX 等)，及 Android 和 iOS 移动设备系统中的唯一的超级用户，因其可对根目录执行读写和执行操作而得名。其具有系统中的最高权限。

一般来说，ROOT 可以表示一种较高级的 Android 用户权限，即“根权限”。也可以表示获取根权限的动作。

Android 删除了 `su` 程序，所以 Root 的过程就是把 `su` 文件放到 `/system/bin/` ，`Superuser.apk` 放到 `/system/app` 下面，还需要设置一些权限。（Android 5.0 之前的方法）

ROOT 的权限高于 [ADB（Android Debug Bridge）](../tools/platform-tools.md#adb-工具)权限，因此 ADB 无法完全代替 ROOT。

::: tip

有些时候您的需求不必使用 Root。您可以选择以下工具使用其他权限代替 Root。

* 您可以使用 [Shizuku](https://shizuku.rikka.app/zh-hans/) 将 ADB 权限共享给其他应用
* 您可以使用 [Dhizuku](https://github.com/iamr0s/Dhizuku) 将 DeviceOwner (设备所有者) 权限共享给其他应用

:::

## 常见 ROOT 工具及 ROOT 管理工具

* __Magisk__（内置 MagiskSU）: Magisk，别名叫做“面具”。这是目前主流的 Root 方式。<Badge type="tip" text="推荐" />
* __KernelSU__: 这是新型 Root 方式。目前正在完善。<Badge type="tip" text="推荐" />
* __SuperSU__: 别名为“超级权限”。这是 Android 8.0 及之前管理 Root 的工具。<Badge type="warning" text="现如今几乎不可用" />
* __SuperUser__: 别名为“超级用户”，这是很多官方系统内置的授权管理工具（如 Phoenix OS，VMOS，天天模拟器）
* __一键 Root 工具__:这是 Android 5 之前常用的获取 Root 方法 <Badge type="warning" text="现如今几乎不可用" />

### Magisk

![Magisk Logo](./images/magisk.png)

Magisk，别名叫做“面具”

这是目前主流的 Root 方式

* __一些突出特点__：
  * __MagiskSU__：为应用程序提供 root 访问权限
  * __Magisk 模块__：通过安装模块修改只读分区
  * __MagiskBoot__：用于解压缩和重新打包 Android 启动映像的最完整工具
  * __Zygisk__：在每个 Android 应用程序的进程中运行代码
* __相关链接__：
  * [刷入 Magisk](../../fast/install/root/index.md#magisk)
  * [Github 仓库](https://github.com/topjohnwu/Magisk) <Badge type="tip" text="官方" />
  * [GitHub Releases](https://github.com/topjohnwu/Magisk/releases/latest) <Badge type="tip" text="官方" />
  * [Magisk 中文文档](https://jesse205.github.io/MagiskChineseDocument/) <Badge type="tip" text="本站翻译" />

### KernelSU

![KernelSU Logo](./images/kernelsu.png)

KernelSU 是 Android GKI 设备的 root 解决方案，它工作在内核模式，并直接在内核空间中为用户空间应用程序授予 root 权限。

这是新型 root 方案。目前正在完善

* __一些突出特点：__
  * __基于内核__：KernelSU 运行在内核空间，对用户空间应用有更强的掌控。
  * __白名单访问控制__：只有被授权的 App 才可以访问 `su`，而其他 App 无法感知其存在。
  * __模块支持__：KernelSU 支持通过 overlayfs 修改 /system，它甚至可以使 /system 可写。
  * __开源__：KernelSU 是 GPL-3 许可下的开源项目。
* __相关链接：__
  * [刷入 KernelSU](../../fast/install/root/index.md#kernelsu)
  * [官方网站](https://kernelsu.org/zh_CN/)
  * [GitHub Releases](https://github.com/tiann/KernelSU/releases) <Badge type="tip" text="官方" />

### SuperSU

__相关链接：__：

* [非官方网站](https://supersuroot.org/)
* __下载地址：__
  * [非官方下载](https://supersuroot.org/download/)
  * [123 云盘下载](https://www.123pan.com/s/G7a9-mpek) <Badge type="warning" text="搬运" />
  * [百度网盘下载](https://pan.baidu.com/s/1D-xltDWSZHZmKbqULMknsw?pwd=jxnb)（提取码：jxnb） <Badge type="warning" text="搬运" />

### 兼容性

<!--@include: ./compatibility.md -->

## 相关链接

* [获取 Root](../fast/install/root/index.md)

## 参考链接

* [root](https://baike.baidu.com/item/root/73226) - 百度百科
