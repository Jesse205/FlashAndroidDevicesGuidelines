---
titleTemplate: false
---

# 刷机指南

## 介绍

这个是 [Jesse205](https://gitee.com/Jesse205) 搬运并整理的刷机指南。\
文档仓库在 Gitee 上，欢迎 Star！

- 此刷机指南不仅仅提供刷机的指南，接受手机、电视和电脑等的内容，还提供各种各样玩机教程！
- 本教程尽量保证所有资源都有一手资源获取渠道，因此您可以放心下载。<small>（有时为了提速可能会提供二手下载渠道）</small>

::: tip
此刷机指南侧重于安卓。如果您需要有关 Windows、Linux 或 Mac OS 的刷机指南，敬请期待。
:::

::: info
虽然这是个万能的指南，但内容主要以小米和华为为主（因为我只有这两种手机）。

如果条件允许，希望您可以帮我完善一下此文档（其实吧我是小白😂）

> 该文档旨在编写全国免费、实用、最严谨、最完善、最准确的文档。如果您遇到文档中的错误或者不严谨的地方，欢迎纠正！
:::

::: warning

刷机千万次，安全第一条\
刷机不规范，机主两行泪

[点击此处查看翻车案例](./rollover/index.md)

---

在浏览本文档前，请先浏览[《文档说明》（点击此处开始浏览）](./faq/documents.md)与[《注意事项》](./normal/notes/index.md)，以防止您迷茫或翻车。

在浏览本文档时，请务必仔细文档内容。**因您操作失误导致的损失我们不负责。**

本文档持续编写中。。。。 (**什么时候这段文字消失了，就代表我已完工、本文档已基本可以阅读了**) 。。。。。
:::

## 快速开始

::: warning

- 对于新手，强烈建议**使用备用机**尝试以下操作，以免因刷机解锁干扰您的正常生活。
- 部分操作会**丢失用户数据**，请在敏感操作前确保您已经备份您的数据
- 如果您手机可以使用 SD 卡，建议将您的个人数据（比如：视频、照片、音乐、工程文件、刷机包等）存储在您的 SD 卡内，避免因操作失误丢失您的数据。

:::

1. [解锁 Bootloader](./fast/unlock/index.md)
2. [下载刷机包](./fast/download/index.md)
3. [刷入系统](./fast/flash/system.md)

更多教程

- [刷入 Recovery](./fast/flash/recovery.md)
- [获取 Root](./fast/install/root/index.md)
- [安装 Xposed](./fast/install/xposed/index.md)

## 基础知识

1. 手机的选购
2. [安装第三方软件](./normal/installApk/index.md) <Badge type="tip" text="不通过自带的应用市场" />
3. [操作系统概览](./normal/systems/index.md)
4. [名词集](./normal/noun.md)
5. [分区和映像](./normal/partitions/index.md)
6. [ADB 工具的使用](./normal/danger_permissions/adb/index.md)
7. 刷机包的说明

## 深入“刷机”

1. 更多名词集
2. 系统分区及结构

### 编译属于自己的 ROM

1. 配置环境
2. 同步源代码
3. 获取设备源代码
4. 编译
5. 排错

### 多设备互联与协同

敬请期待

## 其他教程

- [Magisk 中文文档](https://jesse205.github.io/MagiskChineseDocument/) <Badge type="tip" text="本站翻译" />
- [Android 开发者](https://developer.android.google.cn/?hl=zh-cn)
- [Android 开源项目](https://source.android.google.cn/?hl=zh-cn)

## 其他内容

- [翻车案例](./rollover/index.md)
- [基本知识](./faq/knowledge.md)
- [常见问题与解答](./faq/index.md)
- [常用工具](./tools/index.md)
- 常用社区：这些是刷机/手机爱好者聚集地，您可以在这些社区了解更多内容
  - **[酷安](https://www.coolapk.com/)**: 分享应用的乐趣
  - **[XDA Forums](https://forum.xda-developers.com/)**: 一个全球玩机的网站
  - **[GitHub](https://github.com/)**: 开发者的代码托管平台
  - 等待补充......
  - [查看更多](/normal/discussions.md)
- 常用操作系统
  - **[LineageOS](https://lineageos.org/)**: 基于 Android 移动平台的各种设备的免费开源操作系统。[查看详情](/normal/systems/lineageos.md)
  - **[Havoc OS](https://havoc-os.com/)**: 完美的 Material Design，自定义功能丰富。[查看详情](/normal/systems/havocos.md)
  - **[PixelExperience](https://download.pixelexperience.org/)**: 拥有 Pixel 的体验，附带谷歌的 APP。[查看详情](/normal/systems/pixelexperience.md)
  - ~~**[魔趣 ROM](https://www.mokeedev.com/)**: 中国的安卓开源系统。~~（已跑路）
  - [查看更多](/normal/systems/index.md)
- 常用 Recovery
  - **[TWRP](https://twrp.me/)**: 可以触屏的 Recovery
  - **[OrangeFox Recovery](https://wiki.orangefox.tech/en/home)**: 精美的 Recovery
  - **ClockworkMod**: 很早以前非常流行的rec
  - [查看更多](/normal/recoveries/index.md)

## 参与贡献

1. Fork [本仓库](https://gitee.com/Jesse205/FlashAndroidDevicesGuidelines)
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request

::: tip
您可以直接编辑文件，Gitee 会自动处理一些东西。
:::

::: tip
如果您不使用 Gitee，也可以使用 GitHub。但是使用 GitHub 修改代码后需要同步到 Gitee 内，否则您的文档会被覆盖。如果您发现此类问题，您可以联系我解决。
:::

> 由于本人刷机知识短浅，文档中出现不完善的地方很正常。希望您可以帮我改进此文档，非常感谢！

### 特别感谢

- [@某贼](https://www.coolapk.com/u/3463951)
- [@灬只会刷机养老](http://www.coolapk.com/u/11090720)

## 友情链接

- [Magisk 资源分享](https://main.suchenqaq.club/)
- [Edde 系列](https://jesse205.github.io/)
