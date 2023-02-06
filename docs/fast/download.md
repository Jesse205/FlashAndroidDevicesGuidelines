# 下载 ROM

## 入门

在搞机爱好者眼中安卓系统大致分两种，「官方系统」和「第三方系统」。

### 官方系统

官方系统指手机出厂时搭载的系统，比如小米手机的 MIUI，欧加的 ColorOS，三星的 OneUI，华为的 EMUI/HarmonyOS，Vivo/iQOO 的 OriginOS/FuntouchOS，魅族的 flyme 等。

> 注意：官方系统一般有国内版和海外版（国际版）之分！

#### 下载官方系统

##### MIUI

小米官方**不开放**国内版 MIUI 的下载，不过可以通过 MIUI 的「系统更新」程序手动下载，方法如图：

![如何下载 MIUI 官方系统包](https://cdn.magiskcn.com/wp-content/uploads/2022/10/b0b8a954f9c76a3.jpg)

图片来自于 [Magisk 中文网](https://magiskcn.com/get-miui)。

小米官方**部分开放**国际版 MIUI 的下载，具体为只开放新上市机型的 MIUI 下载，而旧机型（比如小米 4）则没有开放下载链接。

你可以在[这里](https://new.c.mi.com/global/miuidownload/index)找到 MIUI 卡刷包的下载（点击右边的 「Select...」，选择你的手机名称，点击右边的「Submit」，点击「Download Full Rom」即可下载），在[这里](https://new.c.mi.com/global/miuidownload/detail/guide/1)找到 MIUI 线刷包的下载（左上角切换到「Fastboot Update」，在「STEP 2」下面即可找到 MIUI 线刷包的下载链接「手机名称 Latest 区域 Stable Version Fastboot File Download」）

> 提示： 如果网页打不开则需要全局代理

关于卡刷包和线刷包的内容会在后面讲到

> 注意：对于部分红米机型，它们在海外可能会以 POCO 的身份出现，比如红米 K40 （alioth）在海外就叫 POCO F3 / Mi 11X

> 提示：如果小米官方没有开放你对机型对应的下载链接，那么你应该可以在很多第三方 MIUI 下载站下载你的手机的 MIUI 官方包，比如 [MIUIROM.org](https://miuirom.org/), [Xiaomiom.com](https://xiaomirom.com/)等。

##### 欧加

ColorOS [国内版下载](https://www.coloros.com/rom)，[国际版下载](https://support.oppo.com/in/software-update/)

[氢 OS 下载](https://www.oneplus.com/cn/support/softwareupgrade)，[氧 OS 下载](https://service.oneplus.com/global/search/search-detail?id=2096329&articleIndex=1)

##### Reamle UI

真我似乎不开放 Reamle UI 国内版的[下载](https://www.realme.com/cn/support/kw/doc/2029300)，不过 Reamle UI 的国际版可以在[这里](https://www.realme.com/in/support/software-update)下载

<!--

未完待续

##### OriginOS/FuntouchOS

...

##### EMUI/HarmonyOS

...

##### Flyme

...

##### OneUI

...

##### MyUI

...

##### ZUI

...

-->

##### Pixel

https://developers.google.com/android/ota

### 第三方系统

第三方系统指非手机厂商给手机做的系统。

第三方系统又可以分两类，为「官改」和「类原生」。

官改，指在官方系统的基础上增加一些的更改，比如删除无用软件，添加 root 权限等，或者是把其他手机的官方系统移植到别的手机上，比如在小米手机上用 Flyme。

而「类原生」则是指在界面，操作逻辑等非常接近原生安卓（即AOSP）但是又有一些小的修改的安卓系统（因为原生安卓太过简陋所以基本没有人做），你可以在下面找到它们的下载链接。

#### 下载链接

这些类原生主要可以分为两类，分别为「带 Gapps 的」和「不带 Gapps 的」。

##### 带 Gapps 的
* __[PixelExperience](https://download.pixelexperience.org/)__: 拥有 Pixel 的体验，附带谷歌的 APP，有时会简称为pe。
* __[PixelOS](https://pixelos.net/)__: 基于 pe 和 AOSP 的 ROM，旨在提供最好的 Pixel 体验。
* __[PixelExtended](https://pixelextended.tech/)__: 基于 pe 的 ROM，正在尝试通过在 PE 中添加一些您一直想要的必要实用功能来为您提供最好的 Pixel 体验。 
* __[PixelPlusUI](https://ppui.site/home)__: 基于 pe 的 ROM，自定义丰富，快速，流畅，支持强大。
* __[PixelOS](https://pixelos.net/)__: 基于 pe 和 AOSP 的 ROM，旨在提供最好的 Pixel 体验
* __[Evolution X](https://evolution-x.org/)__: Pixel UI、Android 13、自定义等等。 我们是 Evolution X！
* __[DerpFest](https://derpfest.org/)__: 由一些新手共同为您带来的，基于AOSiP，它融合了周围最好的功能，并渴望以其独特的功能和贡献来支持社区。
* __[Project Arcana](https://projectarcana-aosp.github.io/)__: 一款基于 AOSP 定制的手机操作系统，专注于提升用户体验，带有一点点情趣。
* __[Cherish OS](https://cherishos.com/)__: CherishOS 3.x 基于 AOSP，灵感来自 Google Pixel。有 Hung Phan 的 Pixel UI 面条。 您可能无法在任何 ROM 中找到如此多的功能。 所有您梦寐以求的和您永远需要的。 只需刷入并享受...

##### 不带 Gapps 的

* __[ArrowOS]https://arrowos.net/()__: 在所有不带 Gapps 的类原生里 ArrowOS 是我最喜欢的一个，一个基于 AOSP 的项目开始时的目标是保持简单、干净和有条理。我们添加了有助于长期运行的功能，同时旨在提供流畅的性能和更长的电池寿命。
> 提示： ArrowOS 也有带 Gapps 的版本，在下载时选择「GAPPS build」即可，不过不是所有 ArrowOS 官方支持的设备都有的
* __[LineageOS](https://lineageos.org/)__: 在所有类原生中，LineageOS 绝对是老爷级的存在，有很多优秀的类原生都派生自此项目。LineageOS 的历史可以追溯至2009年的 CyanogenMod （有时简称为cm），只不过后来cm由于搞商业化失败后解散了，一些原cm的开发者才成立了 LineageOS，这个基于 Android 移动平台的适用于各种设备的免费开源操作系统。你可以[直接下载](https://download.lineageos.org/)或[下载历史版本](http://lineageosroms.com/)

<!--
未完待续

* __[]()__: 
* __[]()__: 
* __[]()__: 
* __[]()__: 
* __[]()__: 
* __[]()__: 
* __[]()__: 
* __[]()__: 
* __[]()__: 
-->
* __[Havoc OS](https://havoc-os.com/)__: Havoc-OS 是一款基于 AOSP 的售后固件，可用于 20 多家 OEM 的 150 多款设备。灵感来自具有精致的 Material Design UI 的 Google Pixel。为您的设备提供流畅稳定的体验，并提供一组精选的令人惊叹的功能，这些功能可提供卓越的用户体验。通用系统映像 (GSI) 也可用，因此即使您的设备当前不受支持，您也可以试用我们的 ROM。 我们的设备名册不断增加，支持每月添加更多设备。自定义功能丰富。您也可以通过您的设备代号[直接下载](https://download.havoc-os.com/)

##### 已停更的

* __[CyanogenMod](https://web.archive.org/web/20161225043707/https://www.cyanogenmod.org/)__: （官网已无法访问，这是 Wayback Machine 上的备份）类原生的鼻祖，CyanogenMod 是适用于许多基于开源 Android 操作系统的手机的售后市场固件。它提供了供应商基于 Android 的官方固件所没有的功能。
* __[Resurrection Remix OS](https://resurrectionremix.com/)__: （已停更，最新版本为安卓10）自定义功能特别丰富，致力于让您的 Android 体验优雅。精心挑选的功能精美地打包在一个操作系统中。您也可以[直接下载最新版本](https://sourceforge.net/projects/resurrectionremix-ten/files/)
* ~~__[魔趣 ROM](https://www.mokeedev.com/)__: 中国的安卓开源系统~~
  
## 各种ROM专用下载站

对于老机型，您可以到这些地方下载 ROM。

* [奇兔ROM市场](http://rom.7to.cn/)

::: warning
您需要特别注意您在此处下载到的ROM，因为里面极有可能内置推广软件和病毒（部分ROM）
:::
