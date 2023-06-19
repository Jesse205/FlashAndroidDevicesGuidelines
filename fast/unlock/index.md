---
next:
  text: '下载 ROM'
  link: '../download/'
---
# 解锁 Bootloader

::: details 本页内容
[[toc]]
:::

解锁一般指的是解锁 Bootloader。

::: warning

**您正在浏览的是通用文档，可能会对您的手机无效，甚至可能会变砖！！**

每家手机厂商解锁方式不一样，您可以直接跳转到他们自己的部分

* [小米](xiaomi.md)
* [华为](huawei.md)
* 三星（敬请期待）
* 魅族（敬请期待）
* OPPO（敬请期待）
* Vivo（敬请期待）
* 一加（敬请期待）
:::

::: tip

* 部分特别老的手机或者杂牌机没有 Bootloader 锁，甚至连 Bootloader 都没有。如果您正在操作一款像 Lenovo A788T 这样的手机，您可以直接跳过这篇。

:::

::: danger

* **所有用户数据将会被清除，包括内部存储，切记备份！！！**
* 部分手机解锁后将会熔断，无法还原。
* 部分手机解锁后会失去保修资格。

| 厂商 | 步骤            | 后果     |
| ---- | --------------- | -------- |
| Oppo | 解锁 BootLoader | 自毁 TEE |

:::

## 申请解锁

::: tip
每个品牌的申请方式不一样，这段只列举了一般的方法，您的手机具体操作步骤可能有略微的不同，建议您点击下面的链接查看他们各自的内容。

* [小米](./xiaomi.md)
* ~~华为~~ （已停止解锁服务，请通过[其他渠道](huawei.md#一-申请解锁码)获取）
* 三星（敬请期待）

:::

* 情况一 解锁工具方法：[小米](./xiaomi.md#解锁步骤)、真我 GT
  1. 下载并打开深度测试 APP，申请深度测试，等待审核通过 <Badge type="tip" text="真我 GT" />
  2. 在手机上寻找有关解锁选项，并全部设置为允许解锁的状态（一般在开发人员选项内）
  3. 官网下载解锁工具 <Badge type="tip" text="小米" />
* 情况二 解锁码方法：~~华为~~
  1. 在手机上寻找有关解锁选项，并全部设置为允许解锁的状态（一般在开发人员选项内）<Badge type="tip" text="华为除外" />
  2. 官网申请解锁码
* 情况三：杂牌手机
  1. 在手机上寻找有关解锁选项，并全部设置为允许解锁的状态（一般在开发人员选项内）
* 其他情况：等待补充

## 开始解锁 Bootloader

::: tip
每个厂家的解锁步骤不一样，这段只列举了一般的方法，您的手机具体操作步骤可能有略微的不同，建议您点击下面的链接查看他们各自的内容。

* [小米](./xiaomi.md#解锁步骤)
* [华为](./huawei.md#二-开始解锁)
* 三星（敬请期待）
* 魅族（敬请期待）
* OPPO（敬请期待）
* Vivo（敬请期待）
:::

* 情况一 解锁工具方法：[小米](./xiaomi.md#解锁步骤)
  1. 手机连接电脑
  2. 打开解锁工具，按照提示解锁
* 情况二 解锁码方法：~~华为~~
  1. 手机连接电脑
  2. 安装 [Platform-tools][PlatformTools] 工具，进入 CMD，输入 `fastboot unlock <解锁码>`
  3. 手机上选择“确认解锁”
* 情况三：杂牌手机、真我 GT
  1. 手机连接电脑
  2. 安装 [Platform-tools][PlatformTools] 工具
  3. 进入 CMD，输入 `fastboot unlock`
  4. 或输入 `fastboot flashing unlock` <Badge type="tip" text="真我 GT" />
  5. 手机上选择“确认解锁”
* 其他情况：等待补充

## 检查是否已解锁

您可以根据手机表现的一系列特征判断手机是否解锁

通常情况下，Fastboot 状态有显示解锁状态

* 小米
  * **关机状态**：开机时第一屏如果显示一个打开的锁的图标或 `unlock`（较老款手机），表明解锁成功。
  * **开机状态**：进入 `设置-更多设置-开发者选项-设备解锁状态` 查看，若显示“当前设备已解锁”，表明解锁成功。
* 华为
  * **fastboot 状态**: 如果显示红色的 `PHONE Unlocked`
  * **开机第一屏之后**: 如果显示 `Your device has been unlocked and can't be trusted.` ，并且提示文字为橙色，则说明手机解锁成功

## 相关链接

* [[名词集] Bootloader 锁](/normal/noun.md)

[PlatformTools]: /tools/platform-tools.md

## 版权声明

本文档已获得 [@灬只会刷机养老](http://www.coolapk.com/u/11090720)、[@然后成为老弟二号](http://www.coolapk.com/u/14103126) 授权搬运并修改整理

## 参考链接

* [【小白搞机入门】名词集-BootLoader锁（BL锁）](https://www.coolapk.com/feed/42674591?shareKey=YzQ2MThhNmI5MmNiNjNkNTcwOGM~) - 酷安
* [RealmeGT Root教程(ColorOS/RealmeUI)](https://www.coolapk.com/feed/42977573?shareKey=YzgwZGU2MTg1ZmMwNjQ5MDQxMjY~)
* [杂牌机搞机之旅（一）——获得root权限（刷入magisk）](https://www.cnblogs.com/stars-one/p/10638548.html) - 博客园
