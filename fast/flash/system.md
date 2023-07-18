---
prev:
  text: '下载 ROM'
  link: '../download/'
---
# 刷入 ROM

刷入 ROM 之前，请确保您的手机已解锁。如果您的手机未解锁，[请先解锁](../unlock/index.md)。

::: danger

* 如果您的 ROM 的发布帖子内有说明其他步骤，或者与本文冲突，请**严格按照 ROM 发布帖内步骤操作**
* 此方法为通用方法，**不代表一定可以这样操作**。如果您买到了杂牌机，可以试试以下方法
* 您需要根**据您的手机的实际情况**和您要**刷入的 ROM** **按需增加/删除/修改**步骤，同一个型号不同版本**也有可能不一样**

:::

## 一、去校验、解密

部分手机会对 ROM 做校验，刷入第三方刷机包时可能会导致无法开机，因此您需要先去校验

解密是可选的，方便当手机变砖后导出数据。不过，如果您知道密码，或者您的 Recovery 支持自动解密，那么您可以跳过解密。

## 二、开始刷入

### GSI 包 <Badge type="tip" text="新的刷机包" />

GSI 包一般只有 `system.img` ，因此，您通常情况下最终会得到到一个以 `.img` 结尾的文件。

如果您下载的GSI不是以 `.img` 结尾（比如：`FluidOS-1.1-Rum-R-Hi6250-emui8.img.xz`），您需要考虑解压一下这个压缩包。

![装在压缩文件里面的 img 文件](./images/system_file/img_with_xz.png)

[谷歌官方指南](https://developer.android.google.cn/topic/generic-system-image?hl=zh-cn#flash-gsi)

### 普通刷机包 <Badge type="warning" text="老的刷机包" />

::: info
“普通刷机包”也称“卡刷包”
:::

普通刷机包一般以 `.zip` 结尾，里面一定包含 `META-INF` 文件夹，有时也包含 `boot.img` 、`system.img` 等文件，不同的刷机包里面的文件可能不一样。

::: warning
不要解压 `.zip` 文件
:::

::: tip
这种刷机包在**老机型**上用的比较多。如果您要刷的机是老机型，您很可能必须使用第三方 Recovery 才能刷入刷机包。
您可以阅读[《刷入 Recovery》](./recovery.md)，学习如何刷入第三方 Recovery。
:::

#### 直接刷入

1. 将您的刷机包复制到 SD 卡内
2. 然后在第三方 Recovery 内选择“安装”（橙狐 Recovery 的“安装”和“文件管理”功能合并，并且默认情况下展示的就是这个，可以跳过这个步骤）
3. 选择您的文件，滑动滑块刷入。

#### ADB Sideload

如果您没有 SD 卡，或者内部存储不方便解密，您可以选择这种方式**直接刷入电脑上 zip 刷机包**。

::: tip
这种方法需要您的 Recovery 支持 Sideload 功能，并且 ADB 版本处于 `??` 以上
:::

核心代码：

``` bash:no-line-numbers
adb sideload <OTA包路径>
```

1. 进入第三方 Recovery，选择“更多”，然后选择“ADB Sideload”
2. 您可以选择是否清除缓存。选择完毕后，向右滑动滑块继续。
3. 电脑端打开命令提示符，输入这段代码： `adb sideload <OTA包路径>`
4. 等待手机上进度条走完

### 救砖包

救砖包一般情况下用不到。
