# 获取 Root

::: info
<!--@include: @/normal/danger_permissions/root/summary.md -->
:::

获取 Root 的方式有好多种，获取 Root 的工具也有好多种。

<!-- 本文章按照 Root 工具的顺序展开编写。 -->

本文章给出了很多链接。您可以点击那些链接查看更专业的教程。

::: tip
该文档有机型各自的文档，您可以点击以下链接查看

* [小米](./xiaomi/index.md)
* [华为](./huawei/index.md)
* 三星（敬请期待）
* 魅族（敬请期待）
* OPPO（敬请期待）
* Vivo（敬请期待）

您也可以使用百度搜索您的手机型号+root，查找您的设备专用的 root 方法（注意别点广告，部分资源实际上是免费的）。

<SearchBox content="红米 Note 11 5G root"/>

:::

::: tip
关于这些工具的详细介绍：[基础知识 > 危险权限 > Root](/normal/danger_permissions/root/index.md)
:::

## Root 工具

不同的工具有不同的安装方法。

### 兼容性表格

您的设备可能值支持里面一个或者多个工具，具体请见以下表格。

<!--@include: @/normal/danger_permissions/root/compatibility.md -->

除此之外，您的设备还可能需要特供的 root 包/软件。

### Magisk <Badge type="tip" text="推荐" />

Magisk，别名叫做“面具”

这是目前主流的 Root 方式

* **适用系统**：Android 6.0 - Android 13
* **相关链接**：
  * [Github 仓库](https://github.com/topjohnwu/Magisk) <Badge type="tip" text="官方" />
  * [Magisk 中文文档](https://jesse205.github.io/MagiskChineseDocument/)

#### 下载 Magisk

* [GitHub Releases](https://github.com/topjohnwu/Magisk/releases/latest) <Badge type="tip" text="官方" />
* [123云盘](https://www.123pan.com/s/G7a9-mjek.html) <Badge type="tip" text="本站搬运" />

#### 安装 Magisk

* [Installation](https://topjohnwu.github.io/Magisk/install.html) - Magisk <Badge type="tip" text="官方" />
* [安装](https://jesse205.github.io/MagiskChineseDocument/install.html) - Magisk 中文文档 <Badge type="warning" text="非官方" /> <Badge type="tip" text="本站汉化" />

### KernelSU <Badge type="tip" text="推荐" />

Android 上的内核级的 root 方案，这是新型 root 方案。目前正在完善

* **适用内核**: 内核 4.4+
* **下载**：
  * [GitHub Releases](https://github.com/tiann/KernelSU/releases) <Badge type="tip" text="官方" />
  * [酷安](https://www.coolapk.com/apk/me.weishu.kernelsu) <Badge type="tip" text="官方" />
* **安装**：
  * [官方教程](https://kernelsu.org/zh_CN/guide/installation.html) <Badge type="tip" text="官方" />
* **相关链接**：
  * [官方网站](https://kernelsu.org/) <Badge type="tip" text="官方" />
  * [GitHub 仓库](https://github.com/tiann/KernelSU) <Badge type="tip" text="官方" />

### SuperSU

::: warning
这是 Android 8 以及之前常用的 Root 获取方式

此工具几乎不适用于现代所有的手机
:::

SuperSU，别名叫做“超级权限”

* **适用系统**: Android 2.3 - Android 7

::: warning
部分手机需要专用刷机包，因此这段教程附带的文件，甚至是这段教程都可能不适用于您的手机
:::

#### 下载 SuperSU

* [非官方下载](https://supersuroot.org/download/)
* [123 云盘下载](https://www.123pan.com/s/G7a9-mpek) <Badge type="tip" text="本站搬运" />
* [百度网盘下载](https://pan.baidu.com/s/1D-xltDWSZHZmKbqULMknsw?pwd=jxnb) <Badge type="tip" text="提取码：jxnb" /> <Badge type="warning" text="本站搬运但未知安全性" />

#### 安装 SuperSU

敬请期待

### SuperUser

SuperUser，别名叫做“超级用户”。

* **适用系统**: 未知（敬请期待），至今仍旧有一部分系统在使用

#### 下载 SuperUser

敬请期待

#### 安装 SuperUser

敬请期待

### 一键 Root 工具

::: warning
这是 Android 5 之前常用的获取 Root 方法

此方法几乎不适用于现代所有的手机，请不要对一键 Root 抱有希望。
:::

使用一键 Root 工具就像开关机一样简单！

主流的一键工具有

* **360超级ROOT** <Badge type="warning" text="已停止运营" />：对 360 自家软件兼容友好 <Badge type="tip" text="老设备推荐" />
* **KingRoot** <Badge type="warning" text="已停止运营" />：覆盖机型广，但是有一点臃肿 <Badge type="tip" text="老设备推荐" />
* **YoRoot**：支持 Root 华为部分老机型

对于这些一键 Root 工具，机型不一样体验也不一样，建议都试试，有些 Root 工具至今也可以使用。

#### 手机一键 Root

使用手机端一键 Root，方便快捷。

1. 打开一键 Root 工具
2. 点击「开始 ROOT」（或者其他如“一键 Root”按钮）
3. 等待 ROOT 成功即可

::: tip
ROOT 过程中手机可能会重新启动，属于正常现象。
:::

::: warning
很多一键 Root 工具已停止维护，建议改用其他方法。
:::

#### 电脑一键 Root

部分手机会 Root 失败，这时候就需要使用电脑来 Root 了。

1. 安装一键 ROOT 工具对应的电脑端
2. 手机连接电脑，并安装驱动
3. 点击「开始 ROOT」（或者其他按钮）

### 内置 Root

在以前，许多 Rom 都内置了Root。比如 MIUI，百度云 OS 等，还有各种各样官改 ROM。您通常需要在设置内打开 Root 开关后即可使用 Root

| ROM 名称                                           | 开启路径                                                                     |
| -------------------------------------------------- | ---------------------------------------------------------------------------- |
| MIUI 开发版 <Badge type="warning" text="老版本" /> | 设置 > 应用设置 > 应用管理 > 权限 > root权限 > 开启 [查看详情][MIUI官方Root] |
| 百度云 OS                                          | 设置 > 安全 > Root申请 > 右上角开关打开                                      |
| 凤凰系统                                           | 开发者选项 > Root权限 > 开启 [查看详情][凤凰系统官方Root]                    |
| AOSP <Badge type="warning" text="部分版本" />      | 等待补充...                                                                  |
| VMOS                                               | 等待补充...                                                                  |
| 等待补充...                                        | 等待补充...                                                                  |

## 附录：救砖

您的设备在 Root 过程中**非常可能变砖**，但是别急，您可以[尝试救砖](/rescuing/index.md)。

## 相关链接

* [基础知识 > Root](/normal/danger_permissions/root/index.md)

## 参考链接

* [免工具获取凤凰安卓系统PhoenixOS电脑ROOT权限][凤凰系统官方Root] - 百度经验
* [小米手机开启root权限从头到尾的步骤][MIUI官方Root] - 知乎：@MMMRichest的章鱼

[凤凰系统官方Root]: https://jingyan.baidu.com/article/020278114e0fa01bcc9ce5ad.html
[MIUI官方Root]: https://zhuanlan.zhihu.com/p/499270772
