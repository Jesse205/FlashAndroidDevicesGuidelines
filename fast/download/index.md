---
prev:
  text: '解锁 Bootloader'
  link: '../unlock/'
next:
  text: '刷入 ROM'
  link: '../flash/system.html'
---

# 下载 ROM

本章展示了主流ROM的下载地址。在下载之前，您可以对比先[对比一下各类操作系统](/normal/systems/index.md)。

::: info 下载 ROM一般有如下几种方式

1. **官网下载** <Badge text="推荐" /> ：官方维护的版本，非常安全，并且 ROM 基本保持一致。
2. **刷机论坛下载** <Badge type="danger" text="危险" /> ：可能是第三方维护的版本。下载到的 ROM **可能不支持在线升级**，并且 ROM 内可能经过 ROM 作者的定制，但是总类丰富。
3. **刷机包商店下载** <Badge type="danger" text="危险" /> ：与刷机论坛下载的唯一区别是刷机包**可能加入了广告和病毒**。
:::

::: info ROM有几种类型可以选择

- **预装 ROM（官方 ROM）**：由手机所属的手机厂商提供官方维护的 ROM。
- **第三方 ROM**：所有不是由手机厂商提供的 ROM 都是第三方 ROM。
  - **官改 ROM**：改自官方 ROM，加入或精简了一些东西。
  - 通过移植/重新编译的 ROM，与官方 ROM 无关
    - **通用刷机包（GSI）**：，几乎任何支持 Projet Trouble 的手机都能刷，但是**也有一些例外情况**。
:::

::: tip
第三方 ROM 可能会导致刷机不开机，建议初学者使用**与手机系统相同版本的官改 ROM** 试试水。
:::

::: tip
由于文档结构设计失误，建议初学者**先从[获取 Root](/fast/install/root/index.md) 开始学习**。
:::

## 预装类 ROM

| 名称                                                                          | 开发商     | 下载链接 / 本站搜集       |
| ----------------------------------------------------------------------------- | ---------- | ------------------------- |
| [MIUI](/normal/systems/miui.md)                                               | 小米       | [查看详情](./miui.md)     |
| [Pixel][Pixel介绍]                                                            | Google     | [官方下载][Pixel官方下载] |
| [EMUI / HarmonyOS / MagicUI / MagicOS](/normal/systems/emui.md)               | 华为、荣耀 | [查看详情](./emui.md)     |
| [百度云 OS](/normal/systems/baiduos.md) <Badge type="danger" text="已停更" /> | 百度、百加 | [查看详情](./baiduos.md)  |

> 以下 ROM 不在该表格内

### ColorOS/氢 OS/氧 OS - Oppo/OnePlus

**官方下载**：

- ColorOS
  - [国内版下载](https://www.coloros.com/rom)
  - [国际版下载](https://support.oppo.com/in/software-update/)
- [氢 OS 下载](https://www.oneplus.com/cn/support/softwareupgrade)
- [氧 OS 下载](https://service.oneplus.com/global/search/search-detail?id=2096329&articleIndex=1)

### Reamle UI - 真我

**官方下载**：

真我似乎不提供 Reamle UI 国内版的[下载](https://www.realme.com/cn/support/kw/doc/2029300)，不过 Reamle UI 的国际版可以在以下地址下载

- [Software&Driver Update](https://www.realme.com/in/support/software-update)（Reamle UI 国际版）

## 第三方 ROM

| 名称                                                        | 下载链接                            | 本站搜集 |
| ----------------------------------------------------------- | ----------------------------------- | -------- |
| AOSP                                                        | [官方 GSI 下载][AOSP官方GSI下载]    | 敬请期待 |
| [PixelExperience][PixelExperience介绍]                      | [官方下载][PixelExperience官方下载] | 敬请期待 |
| PixelExtended                                               | 敬请期待                            | 敬请期待 |
| PixelPlusUI                                                 | [官方下载][PixelPlusUI官方下载]     | 敬请期待 |
| Evolution X                                                 | [官方下载][EvolutionX官方下载]      | 敬请期待 |
| DerpFest                                                    | 敬请期待                            | 敬请期待 |
| ArrowOS                                                     | 敬请期待                            | 敬请期待 |
| [Havoc OS][HavocOS官方下载]                                 | [官方下载][HavocOS官方下载]         | 敬请期待 |
| CyanogenMod <Badge type="danger" text="已停更" />           | /                                   | 敬请期待 |
| Resurrection Remix OS <Badge type="danger" text="已停更" /> | /                                   | 敬请期待 |

> 以下 ROM 不在该表格内

### LineageOS <Badge text="强烈推荐" />

> 在所有类原生中，LineageOS 绝对是老爷级的存在，有很多优秀的类原生都派生自此项目。LineageOS 的历史可以追溯至2009年的 CyanogenMod （有时简称为cm），只不过后来cm由于搞商业化失败后解散了，一些原cm的开发者才成立了 LineageOS，这个基于 Android 移动平台的适用于各种设备的免费开源操作系统。
>
> - [官方网站](https://lineageos.org/)
> - [系统介绍][LineageOS介绍]

**官方下载**：

- [官网下载][LineageOS官方下载]

**第三方下载**：

- [LineageOS ROMs](http://lineageosroms.com/)（下载历史版本）

### Evolution X

- [官方下载](https://evolution-x.org/download)

### DerpFest

- [官方下载](https://derpfest.org/#call-to-action)

### ArrowOS

- [官网下载](https://arrowos.net/download)

::: tip
ArrowOS 也有带 Gapps 的版本，在下载时选择「GAPPS build」即可，不过不是所有 ArrowOS 官方支持的设备都有的
:::

### Resurrection Remix OS <Badge type="danger" text="已停更" />

::: tip
最新版本为 Android 10
:::

**官方下载**：

- [SourceForge](https://sourceforge.net/projects/resurrectionremix-ten/files/)

### 魔趣 ROM <Badge type="danger" text="已停更" />

- [更多信息](../../normal/systems/index.md#魔趣-rom)

**官方下载**：

- [SourceForge](https://sourceforge.net/projects/mokee/files/)

## 各种 ROM 专用下载站

对于老机型，您可以到这些地方下载 ROM。

- [奇兔ROM市场](http://rom.7to.cn/)

::: warning
您需要特别注意您在此处下载到的 ROM，因为里面**极有可能内置推广软件和病毒**（部分ROM）
:::

## 相关链接

- [基础知识 - 操作系统（OS）](/normal/systems/index.md)

[Pixel官方下载]: https://developers.google.cn/android/ota?hl=zh-cn
[AOSP官方GSI下载]: https://developer.android.google.cn/topic/generic-system-image?hl=zh-cn
[HavocOS官方下载]: https://havoc-os.com/download
[LineageOS官方下载]: https://wiki.lineageos.org/devices/
[PixelExperience官方下载]: https://download.pixelexperience.org
[PixelPlusUI官方下载]: https://ppui.site/download
[EvolutionX官方下载]: https://evolution-x.org/download

[Pixel介绍]: /normal/systems/pixel.md
[LineageOS介绍]: /normal/systems/lineageos.md
[PixelExperience介绍]: /normal/systems/pixelexperience.md
