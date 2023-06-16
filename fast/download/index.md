---
prev:
  text: '解锁 Bootloader'
  link: '../unlock/'
next:
  text: '刷入 ROM'
  link: '../flash/system.html'
---

# 下载 ROM

本章展示了主流ROM的下载地址。在下载之前，您可以对比先[选择一下您比较感兴趣的系统](../../normal/systems/index.md)。

下载 ROM一般有几种方式

1. 官网下载：官方维护的版本，比较安全，并且 ROM 基本保持一致。
2. 刷机论坛下载：可能是第三方维护的版本。下载到的 ROM 可能不支持在线升级，并且 ROM 内可能经过 ROM 作者的定制，但是总类丰富。
3. 刷机包商店下载：与刷机论坛下载的唯一区别是刷机包可能加入了广告和病毒

ROM有几种类型可以选择

* 官方 ROM（预装 ROM）：由手机所属的手机厂商提供官方维护的 ROM。
* 第三方 ROM
  * 官改 ROM：改自官方 ROM，加入或精简了一些东西。
  * GSI：通用刷机包，几乎任何支持 Projet Trouble 的手机都能刷，但是也有一些例外情况。

::: tip
第三方 ROM 可能会导致刷机不开机，建议初学者使用与手机系统相同版本的官改 ROM 试试水。
:::

## 预装 ROM

| 名称                                            | 开发商 | 下载链接                                    | 本站搜集                 |
| ----------------------------------------------- | ------ | ------------------------------------------- | ------------------------ |
| MIUI                                            | 小米   | [查看详情](../../normal/systems/miui.md)    | /                        |
| 百度云 OS <Badge type="danger" text="已停更" /> | 百加   | [查看详情](../../normal/systems/baiduos.md) | [查看详情](./baiduos.md) |
| Pixel                                           | Google | [查看详情][Pixel官方下载]                   | /                        |

### ColorOS/氢 OS/氧 OS - Oppo/OnePlus

__官方下载__：

* ColorOS
  * [国内版下载](https://www.coloros.com/rom)
  * [国际版下载](https://support.oppo.com/in/software-update/)
* [氢 OS 下载](https://www.oneplus.com/cn/support/softwareupgrade)
* [氧 OS 下载](https://service.oneplus.com/global/search/search-detail?id=2096329&articleIndex=1)

### Reamle UI - 真我

__官方下载__：

真我似乎不提供 Reamle UI 国内版的[下载](https://www.realme.com/cn/support/kw/doc/2029300)，不过 Reamle UI 的国际版可以在以下地址下载

* [Software&Driver Update](https://www.realme.com/in/support/software-update)（Reamle UI 国际版）

### EMUI/HarmonyOS/MagicUI/MagicOS - 华为/荣耀

* [HarmonyOS 更多信息](../../normal/systems/harmonyos.md)

__官方下载__：

* [华为搜索：固件](https://consumer.huawei.com/cn/support/search/?keyword=%E5%9B%BA%E4%BB%B6&t=SearchClick&product_class=CMCG10000002)

__第三方下载__：

华为 __在 EMUI4 之后不再提供__ 固件下载，因此您需要到第三方固件下载站下载最新固件。

* [华为固件下载站](https://professorjtj.github.io/)

## 第三方 ROM

### 通用系统映像

| 名称     | 下载链接                       | 本站搜集 |
| -------- | ------------------------------ | -------- |
| AOSP     | [官方下载][AOSP官方GSI下载]    | /        |
| Havoc OS | [官方下载][HavocOS官方GSI下载] | /        |

### LineageOS

> 在所有类原生中，LineageOS 绝对是老爷级的存在，有很多优秀的类原生都派生自此项目。LineageOS 的历史可以追溯至2009年的 CyanogenMod （有时简称为cm），只不过后来cm由于搞商业化失败后解散了，一些原cm的开发者才成立了 LineageOS，这个基于 Android 移动平台的适用于各种设备的免费开源操作系统。
>
> * [官方网站](https://lineageos.org/)
> * [更多信息](../../normal/systems/lineageos.md)

__官方下载__：

* [官网下载](https://download.lineageos.org/)

__第三方下载__：

* [LineageOS ROMs](http://lineageosroms.com/)（下载历史版本）

### PixelExperience

* [官方下载](https://download.pixelexperience.org/)

### PixelExtended

### PixelPlusUI

> 基于 pe 的 ROM，自定义丰富，快速，流畅，支持强大。
>
> * [官方网站](https://ppui.site/home)

### Evolution X

* [官方下载](https://evolution-x.org/download)

### DerpFest

* [官方下载](https://derpfest.org/#call-to-action)

### ArrowOS

* [更多信息](../../normal/systems/index.md#arrowos)

__官方下载__：

* [官网下载](https://arrowos.net/download)

::: tip
ArrowOS 也有带 Gapps 的版本，在下载时选择「GAPPS build」即可，不过不是所有 ArrowOS 官方支持的设备都有的
:::

### Havoc OS

* [更多信息](../../normal/systems/index.md#havoc-os)

__官方下载__：

* [官网下载](https://download.havoc-os.com/)

### CyanogenMod <Badge type="danger" text="已停更" />

* [更多信息](../../normal/systems/index.md#cyanogenmod)

### Resurrection Remix OS <Badge type="danger" text="已停更" />

* [更多信息](../../normal/systems/index.md#resurrection-remix-os)

::: tip
最新版本为 Android 10
:::

__官方下载__：

* [SourceForge](https://sourceforge.net/projects/resurrectionremix-ten/files/)

### 魔趣 ROM <Badge type="danger" text="已停更" />

* [更多信息](../../normal/systems/index.md#魔趣-rom)

__官方下载__：

* [SourceForge](https://sourceforge.net/projects/mokee/files/)

## 各种 ROM 专用下载站

对于老机型，您可以到这些地方下载 ROM。

* [奇兔ROM市场](http://rom.7to.cn/)

::: warning
您需要特别注意您在此处下载到的ROM，因为里面极有可能内置推广软件和病毒（部分ROM）
:::

## 相关链接

* [各式各样的 Android 以及类 Android 系统](../../normal/systems/index.md)

[Pixel官方下载]: https://developers.google.cn/android/ota?hl=zh-cn
[AOSP官方GSI下载]: https://developer.android.google.cn/topic/generic-system-image?hl=zh-cn
[HavocOS官方GSI下载]: https://havoc-os.com/download#gsi
