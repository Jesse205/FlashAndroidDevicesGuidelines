# 获取 Root

获取Root的方式有好多种，获取 Root 的工具也有好多种。本文章按照 Root 工具的顺序展开编写

本文章给出了很多链接。您可以点击那些链接查看更专业的教程。

::: tip
该文档有机型各自的文档，您可以点击以下链接查看

* [小米](./xiaomi/README.md)
* [华为](./huawei/README.md)
* 三星（敬请期待）
* 魅族（敬请期待）
* OPPO（敬请期待）
* Vivo（敬请期待）
:::

* 关于 Root 以及这些工具的介绍：[[名词集] ROOT](../../../normal/noun.md#root)

## 兼容性表格

这是兼容性表格，您可以根据您的需求选择不同版本的工具进行 Root：

| 工具名称       | 最低支持    | 最高支持      |
| -------------- | ----------- | ------------- |
| Magisk         | Android 5.0 | Android 13    |
| KernelSU       | 内核 4.4    | 未知          |
| SuperSU        | Android 2.3 | Android 7     |
| 一键 Root 工具 | 未知        | Android 4.4.4 |

## Magisk <Badge type="tip" text="推荐" />

Magisk，别名叫做“面具”

这是目前主流的 Root 方式

* __适用系统__：Android 5.0 - Android 13
* __相关链接__：
  * [[名词集] Magisk](../../../normal/noun.md#magisk)
  * [Github 仓库](https://github.com/topjohnwu/Magisk) <Badge type="tip" text="官方" />
  * [Magisk 中文文档](https://jesse205.github.io/MagiskChineseDocument/)

### 下载 Magisk

* [GitHub Releases](https://github.com/topjohnwu/Magisk/releases/latest) <Badge type="tip" text="官方" />

### 安装 Magisk

* [Installation](https://topjohnwu.github.io/Magisk/install.html) - Magisk <Badge type="tip" text="官方" />
* [安装](https://jesse205.github.io/MagiskChineseDocument/install.html) - Magisk 中文文档 <Badge type="warning" text="非官方" /> <Badge type="tip" text="本站汉化" />

## KernelSU <Badge type="tip" text="推荐" />

Android 上的内核级的 root 方案，这是新型 root 方案。目前正在完善

* __适用内核__: 内核 4.4+
* __下载__：
  * [GitHub Releases](https://github.com/tiann/KernelSU/releases) <Badge type="tip" text="官方" />
  * [酷安](https://www.coolapk.com/apk/me.weishu.kernelsu) <Badge type="tip" text="官方" />
* __安装__：
  * [安装](https://kernelsu.org/zh_CN/guide/installation.html) - KernelSU <Badge type="tip" text="官方" />
* __相关链接__：
  * [官方网站](https://kernelsu.org/) <Badge type="tip" text="官方" />
  * [GitHub 仓库](https://github.com/tiann/KernelSU) <Badge type="tip" text="官方" />

## SuperSU

::: warning
此工具几乎不适用于现代所有的手机
:::

SuperSU，别名叫做“超级权限”

这是 Android 9 之前常用的 Root 获取方式

* __适用系统__: 未知（敬请期待）

### 下载 SuperSU

* [非官方下载](https://supersuroot.org/download/)
* [123 云盘下载](https://www.123pan.com/s/G7a9-mpek)（搬运）
* [百度网盘下载](https://pan.baidu.com/s/1D-xltDWSZHZmKbqULMknsw?pwd=jxnb)（提取码：jxnb）（搬运）

## SuperUser

SuperUser，别名叫做“超级用户”。

* __适用系统__: 未知（敬请期待），至今仍旧有一部分系统在使用

## 一键 Root 工具

::: warning
此方法几乎不适用于现代所有的手机，请不要对一键 Root 抱有希望。
:::

这是 Android 5 之前常用的获取 Root 方法

主流的一键工具有

* __360超级ROOT__ <Badge type="warning" text="已停止运营" />：对 360 自家软件兼容友好 <Badge type="tip" text="老设备推荐" />
* __KingRoot__ <Badge type="warning" text="已停止运营" />：覆盖机型广，但是有一点臃肿 <Badge type="tip" text="老设备推荐" />
* __YoRoot__：支持 Root 华为部分老机型

对于这些一键 Root 工具，机型不一样体验也不一样，建议都试试，有些 Root 工具至今也可以使用。

### 手机端获取 Root

打开一键 Root 工具后，点击「开始 ROOT」（或者其他按钮），等待 ROOT成 功即可

::: tip
ROOT 过程中手机可能会重新启动，属于正常现象
:::

::: warning
很多一键 Root 工具已停止维护，建议改用其他方法。
:::

### 电脑辅助获取 Root

1. 安装一键 ROOT 工具对应的电脑端
2. 手机连接电脑，并安装驱动
3. 点击「开始 ROOT」（或者其他按钮）

## 内置 Root

在以前，许多 Rom 都内置了Root。比如 MIUI，百度云 OS 等，还有各种各样官改 ROM。您通常需要在设置内打开 Root 开关后即可使用 Root

| ROM 名称    | 开启路径                                                  |
| ----------- | --------------------------------------------------------- |
| 百度云 OS   | 设置 > 安全 > Root申请 > 右上角开关打开                   |
| 凤凰系统    | 开发者选项 > Root权限 > 开启 [查看详情][凤凰系统官方Root] |
| 等待补充... | 等待补充...                                               |

## 参考链接

* [免工具获取凤凰安卓系统PhoenixOS电脑ROOT权限][凤凰系统官方Root] - 百度经验

[凤凰系统官方Root]: https://jingyan.baidu.com/article/020278114e0fa01bcc9ce5ad.html
