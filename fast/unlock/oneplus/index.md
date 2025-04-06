---
next:
  text: '下载 ROM'
  link: '/fast/download/'
---
# 一加解锁

## 硬件要求

- Windows 电脑
- 手机
- 数据线

## 解锁步骤

### 一、手机端

1. 打开开发者模式：
   1. 打开系统 `设置 - 关于本机`。
   2. 找到 `版本信息 - 版本号` ，并连续点击此项，直至弹出提示“您已处于开发者模式，无需进行此操作”。
3. 回到 `设置` 一级菜单，进入 `系统与更新 - 开发者选项`，找到「OEM解锁」并勾选。
4. 连接电脑，并稍后重启至 fastboot（必须使用命令重启：`adb reboot bootloader`）。

::: tip
在解锁前请务必备份手机数据（因为解除 BL 锁会格式化 `data` 分区）。
:::

### 二、电脑端

1. 下载 [SDK Platform Tools](https://developer.android.google.cn/tools/releases/platform-tools)
2. 手机重启至 [fastboot](/normal/modes/xiaomi.md#fastboot-模式)（无法通过按键进入）
3. 连接手机，输入 `fastboot flashing unlock`。在手机端使用音量 + - 选择 `YES` 并使用电源键确认。

当电脑端提示完成后，无需触碰手机，自动重启并清除数据。

## 检查是否已解锁

- **关机状态**：开机时第一屏如果显示一行 `Orange State`表明解锁成功。
- **开机状态**：打开开发者模式，进入 `系统与更新 - 开发者选项`，找到「OEM解锁」并勾选。


## 解锁完成

解锁完成后可以刷入第三方 ROM、获取 Root 等操作了。

::: tip
如果你是新手，不妨先尝试一下[简单的 Root](/fast/install/root/index.md)，再考虑刷入其他 ROM！
:::

::: danger
解锁后**赶紧备份手机关键分区**。部分分区在每部手机内是独一无二的，丢了就真丢了，手机也真废了。
:::
