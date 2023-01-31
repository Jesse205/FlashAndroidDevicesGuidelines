# 华为解锁

## 硬件要求

* 装有 [ADB 工具](../../normal/adb.md)的电脑
* 华为手机（系统为EMUI9及一下）（[点击购买](https://www.vmall.com/)）

## 解锁步骤

::: tip
华为在2018年5月24日已关闭解锁通道，请联系 [@某贼](http://www.coolapk.com/u/3463951) 进行解锁。

> [某贼的话](https://www.coolapk.com/feed/25219974?shareKey=ZDc3M2ExYmZlNjQ2NjA3MTc2ZGY~)

如果您拥有时光机，请前往这个时间段前进入EMUI官网的[解锁](https://emui.huawei.com/cn/unlock_index)进行解锁
![关闭解锁的公告](/images/unlock/huawei/close_notice.png)
:::

### 一、申请解锁

### 二、开始解锁

获取到解锁码后连接电脑，进入 Fastboot 模式，打开adb工具包里的命令行，输入指令：

``` shell
fastboot oem unlock <解锁码>
```

（如果您不会使用命令的话，请参考[《命令的使用》](../../help.md)）
