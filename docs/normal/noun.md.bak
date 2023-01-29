# 名词集

## Bootloader锁

* [解锁 Bootloader](/fast/unlock.md)

BootLoader 锁，简称“BL锁”。从字面意义上理解，是手机厂商对 BootLoader 程序运行的一种限制/锁定。

### 作用

防止“篡改”官方 recovery 或“滥用” fastboot。

> 由于官方 recovery 的功能单一，且刷入刷机包时的签名验证十分严格，所以可以说是搞机路程上的第一道阻碍。

对于只想安安心心用手机，保护数据安全的普通用户，也起了到一定的保护作用。

### 背景

在智能手机刚刚兴起的年代，手机厂商对于 BL 锁以及 ROOT 的管理和限制十分宽松。同期许多圈外人也尝试着 ROOT 手机，借助各种需要 ROOT 权限的 app，把手机玩的十分炫酷（可以算是一种潮流）。在这时期，一部分不法分子利用圈外人知识浅薄、安全意识薄弱，恶意编写并包装一些病毒勒索程序，并且诱骗用户获取 ROOT 权限，从而进行勒索敲诈。由于技术门槛低，当时市面上的勒索病毒泛滥，人们的隐私和数据安全遭到严重侵害。所以在后期，手机厂商为了减少社会舆论的诟病，调整了 BL 限制。

### 用意

至于现在，仍然有部分手机厂商锁死 ROOT 权限。我“捏造”了以下几点原因。首先，在获取 ROOT 权限后，各种的系统问题接踵而至，成砖，卡米的机器越来越多。为了减少售后服务的压力和人员技术门槛，官方限制这一渠道。

再者，部分手机厂商秉持着“交个朋友，不赚钱”的理念，导致手机业务利润率降低，只能通过肆无忌惮的广告推送服务赚钱。所以为了防止用户 ROOT 后去除广告，就限制了 ROOT 权限。

## ROM、RAM、ramdisk

* __RAM__：全称 Random Access Memory，中文名随即存取存储器，是与 CPU 直接交互的存储结构，可以随意读取或写入，具有数据易丢失性（断电时存储在RAM中的数据会丢失），可以理解为 ROM 和 CPU 之间的临时桥梁，即运行内存。
* __ROM__：全称 Read Only Memory，中文名只读存储器，是手机的内部储存空间，存放着 Android 系统的所有分区及文件，当某文件需要交予 CPU 进行处理时，则需要先行写入 RAM 中，再被 CPU 所读取。（tip：在机友口中，刷机包也被称为 ROM 包，或简称为 ROM，也就是一个存放系统文件的文件包）
* __ramdisk__，中文虚拟内存，本质上是借用了部分机身存储（ROM）的空间，存放系统的缓冲文件。而存放于 `system` 分区下的 `ramdisk` 分区可以镜像部分操作系统驱动文件，帮助跑通 BootLoader 和 kernel 等开机引导程序。当然，当前手机厂商大肆宣传的运行内存拓展技术，也是基于一个 `ramdisk` 分区（作者本人不建议开启相关内存拓展技术）

RAM 的性能和价格等各方面都高于 ROM，当然在手机上搭载的空间也更小。

ROM 的性能更弱，但是在空间大小和价格方面优势明显。

然而 ramdisk 需要让部分 `ROM` 空间进行 `RAM` 的功能，从硬件本身是支持的，但是无疑会损伤其寿命。同时 `ramdisk` 的性能相比于 RAM 也更加孱弱。（据说在电脑端还挺好用的，也有可能是这项技术在手机端开发并不成熟）

## ROOT

* [获取 Root](/fast/install/root.md)

Root，也称为根用户，是 Unix (如 Solaris、AIX、BSD）和类 UNIX 系统(如 Linux、QNX 等)，及 Android 和 iOS 移动设备系统中的唯一的超级用户，因其可对根目录执行读写和执行操作而得名。其相当于 Windows 系统中的 SYSTEM (XP 及以下)/TrustedInstaller (Vista 及以上)用户。其具有系统中的最高权限，如启动或停止一个进程，删除或增加用户，增加或者禁用硬件，新建文件、修改文件或删除所有文件等等。摘自[百度百科](https://baike.baidu.com/item/root/73226)

Android 删除了 `su` 程序，所以 Root 的过程就是把 `su` 文件放到 `/system/bin/` ，`Superuser.apk` 放到 `/system/app` 下面，还需要设置一些权限。（Android 5.0 之前常见的方法）

一般来说，ROOT 表示一种较高级的 Android 用户权限，即“根权限”。也可以表示获取根权限的动作。

ROOT 的权限高于 ADB（Android Debug Bridge）权限，因此您无法完全使用 ADB 代替 ROOT。

### 常见工具

* __Magisk__（内置 MagiskSU）: Magisk，别名叫做“面具”。这是目前主流的 Root 方式。
* __KernelSU__: 这是新型 Root 方式。目前正在完善。
* __SuperSU__: SuperSU，别名叫做“超级权限”。这是 Android 8.0。
* __SuperUser__: SuperUser，别名叫做“超级用户”，这是很多官方系统内置的授权管理工具（如 Phoenix OS，VMOS，天天模拟器）
* __一键 Root 工具__:这是 Android 5 之前常用的获取 Root 方法

兼容性表格

| 工具名称 | 最低安卓版本 | 最高版本 |
| ---- | ---- | ---- |
| Magisk | 未知 | Android 13 |
| KernelSU | 未知 | 未知 |
| SuperSU | 未知 | 未知 |
| 一键 Root 工具 | 未知 | Android 4.4.4 |

::: details 主流的一键工具

* __360超级ROOT__（已停止运营）: 对 360 自家软件兼容友好
* __KingRoot__（已停止运营）: 覆盖机型广，但是有一点臃肿

对于这些一键 Root 工具，机型不一样体验也不一样，建议都试试。
:::

## 版权声明

本文档已获得 [@灬只会刷机养老](http://www.coolapk.com/u/11090720) 授权搬运并修改整理

## 参考链接

* [【小白搞机入门】名词集-BootLoader锁（BL锁）](https://www.coolapk.com/feed/42674591?shareKey=YzQ2MThhNmI5MmNiNjNkNTcwOGM~)
* [【小白搞机入门】名词集-ROM、RAM、ramdisk](https://www.coolapk.com/feed/42682544?shareKey=ZjIwNzExZDUyYjczNjNkNTgzMTY~)