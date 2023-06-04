# 华为解锁

## 硬件要求

* 装有 [ADB 工具](../../tools/platform-tools.md#adb-工具)的电脑
* 华为手机（系统为 EMUI 9 及以下，但是如果你的华为设备搭载 MTK 芯片的话，即使是鸿蒙系统也有可能解锁，比如华为畅享20系列，20se（PPA）除外）

## 解锁步骤

### 一、申请解锁码

#### 华为官方渠道

华为在2018年5月24日已关闭解锁码申请通道，如果您拥有时光机，请前往这个时间段前进入 EMUI 官网的[解锁](https://emui.huawei.com/cn/unlock_index)进行解锁

![关闭解锁的公告](./images/huawei_close_notice.png)

#### 第三方渠道

如果你没有时光机，则此渠道是获取你的华为手机的解锁码的唯一方法

##### PotatoNV

优点：免费

缺点：
- 只支持部分麒麟处理器的手机
- 需要拆后盖（甚至保护罩）短接刷机。需要有一定的动手能力。不具备条件的不建议尝试

官网：[PotatoNV](https://github.com/mashed-potatoes/PotatoNV)

方法：[部分华为麒麟手动获取BL解锁码 - 知乎](https://zhuanlan.zhihu.com/p/397173427)

##### 联系某贼大佬

优点：免费，支持绝大多数华为/荣耀手机

缺点：大佬有的时候不再，需要等，如果没这个时间请移步其他方法

方法：
联系 [@某贼](http://www.coolapk.com/u/3463951)
下载一个名为[云湖](https://www.yhchat.com/)的社交应用
找到群后联系大佬即可
[某贼的话](https://www.coolapk.com/feed/25219974?shareKey=ZDc3M2ExYmZlNjQ2NjA3MTc2ZGY~)
[华为解锁须知](https://www.kdocs.cn/l/cidkchLJHuYl)

##### 付费方式

优点：方便快捷

缺点：需要付费

方法：
- 某宝购买
- 联系酷安 @stuff233

::: tip
大佬们有时候可能不在，请耐心等待
:::

### 二、开始解锁

::: warning
华为部分手机无法通过 ADB 命令直接解锁，因此您可能需要 __通过第三方渠道解锁__。

以下方法只适用于老手机
:::

获取到解锁码后将手机用数据线连接电脑，进入 Fastboot 模式，打开 adb 工具包里的命令行，输入指令（不带尖括号）：

``` bash
fastboot oem unlock <解锁码>
```

> 如果您不会使用命令的话，请参考[《命令的使用》](../../help.md)

## 检查是否已解锁

* __fastboot 状态__: 如果显示红色的 `PHONE Unlocked`
* __开机第一屏之后__: 如果显示 `Your device has been unlocked and can't be trusted.` ，并且提示文字为橙色，则说明手机解锁成功

## 版权声明

本文档已获得 [某贼](https://www.coolapk.com/u/3463951) 授权搬运并修改整理

## 参考链接

* [如何Root你的华为旧机？](https://www.coolapk.com/feed/26320412?shareKey=YzZmMjdiZjEwNThjNjEwZDQ5MGI~&shareUid=3463951&shareFrom=com.coolapk.market_11.3)
