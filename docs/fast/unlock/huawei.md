# 华为解锁

## 硬件要求

* 装有 [ADB 工具](../../tools/platform-tools.md#adb-工具)的电脑
* 华为手机（系统为EMUI9及以下，但是如果你的华为设备搭载 MTK 芯片的话，即使是鸿蒙系统也有可能解锁，比如华为畅享20系列，20se（PPA）除外）

## 解锁步骤

### 一、申请解锁码

华为在2018年5月24日已关闭解锁码申请通道，如果您拥有时光机，请前往这个时间段前进入 EMUI 官网的[解锁](https://emui.huawei.com/cn/unlock_index)进行解锁
![关闭解锁的公告](./images/huawei_close_notice.png)

您也可以通过第三方渠道解锁 Bootloader

#### 花钱渠道

某宝，或者酷安@stuff233

#### 免费渠道

请联系 [@某贼](http://www.coolapk.com/u/3463951) 进行解锁。

> [某贼的话](https://www.coolapk.com/feed/25219974?shareKey=ZDc3M2ExYmZlNjQ2NjA3MTc2ZGY~)

::: tip
大佬有时候可能不在，请耐心等待
:::

### 二、开始解锁

::: warning
华为部分手机无法通过 ADB 命令直接解锁，因此您可能需要通过第三方渠道解锁。

以下方法只适用于老手机
:::

获取到解锁码后将手机用数据线连接电脑，进入 Fastboot 模式，打开 adb 工具包里的命令行，输入指令（不带尖括号）：

``` bash
fastboot oem unlock <解锁码>
```

> 如果您不会使用命令的话，请参考[《命令的使用》](../../help.md)

## 检查是否已解锁

* fastboot 状态: 如果显示红色的 `PHONE Unlocked`
* 开机第一屏之后: 如果显示 `Your device has been unlocked and can't be trusted.` ，并且提示文字为橙色，则说明手机解锁成功

## 版权声明

本文档已获得 [某贼](https://www.coolapk.com/u/3463951) 授权搬运并修改整理

## 参考链接

* ？？？？
