# 安卓中的各种开机模式

::: tip
本章仅介绍了安卓中一般都有的几种模式，以及通用的启动与退出方法。

部分手机的开机模式名称以及种类可能不同，您可以点击下面的链接查看您的手机品牌的开机启动模式。

- [华为](./huawei.md)
- [小米](./xiaomi.md)

:::

<!--@include: ./tips.md -->

| 名称     | 按键进入方法（关机情况下）                      |
| -------- | ----------------------------------------------- |
| Recovery | 因机而异                                        |
| Fastboot | 因机而异                                        |
| 安全模式 | 目前我总结出的方法是在开机过程中 **瞎按音量键** |

## Recovery 模式

Recovery 模式，通常也叫“rec”、“恢复模式”，早些时候也有叫“刷机模式”的。

- **进入方法**：
  - **一键进入**：对于支持“**高级重启**”的操作系统，直接在电源菜单内选择“高级重启”（部分系统与“重启”合并），然后选择“Recovery 模式”或者“恢复模式”。
  - **按键进入**：开机前长按特定的组合键进入。这个因机而异。
  - **命令进入**：使用 ADB 进入：`adb reboot recovery` 。
- **退出方法**：
  - **强制退出**：长按电源键强制重启。
  - **正常退出**：在 Recovery 内找到“重启”，选择“系统”，即可退出。
  - **命令退出**：使用命令：`adb reboot` 。

## Fastboot 模式

Fastboot 模式，通常也叫“线刷模式”。

- **进入方法**：
  - **一键进入**：对于支持“**高级重启**”的操作系统，直接在电源菜单内选择“高级重启”（部分系统与“重启”合并），然后选择“Fastboot 模式”或者“线刷模式”。
  - **按键进入**：开机前长按特定的组合键进入。这个因机而异。
  - **命令进入**：使用 ADB 进入：`adb reboot bootloader` 。
- **退出方法**：
  - **强制退出**：长按电源键强制重启。
  - **命令退出**：使用命令：`fastboot reboot` 。

## 安全模式

手机/平板安全模式，是一种仅加载基本功能和预置应用的最小系统环境。和 Windows 的安全模式相似，在安全模式下可以修复手机系统的一些错误，比如因第三方安装时发生错误导致系统不停报错、无法正常开机等，可进入安全模式卸载异常应用并排查修复系统。

安全模式是 Android 系统的一个状态。如果 Android 系统本身无法使用，那么此模式自然也是无法使用的。

::: details 安全模式无法使用的情况

- 刷入了其他非 Android 系统，如：Windows、OpenHarmony、Ubuntu
- `system` 分区为空或者损坏
- 其他待补充

:::

::: warning
部分系统会打乱桌面布局，并恢复默认输入法请谨慎使用.

已知拥有此问题的系统：

- MIUI: 13
- 其他待补充

:::

- **进入方法**：
  - **按键进入**：目前我总结出的方法是在开机时 **瞎按音量键** 即可进入安全模式（部分系统可能不一样）。（MIUI 不支持）
  - **电源菜单一键进入**：对于支持“**高级重启**”的操作系统，直接在电源菜单内选择“高级重启”（部分系统与“重启”功能合并），然后选择“安全模式”（部分系统的“高级重启”功能不支持此模式）。
  - **电源菜单长按进入**：在电源菜单内，长按“关闭”或“重启”选项，接下来会弹出进入安全模式的弹窗，点击“确定”即可。
  - TIPS：开机后，屏幕左下角出现安全模式字样时，说明手机已进入安全模式。
- **退出方法**：
  - **正常退出**：重启手机即可。

::: tip

- 进入安全模式后，手机/平板自动进入飞行模式，退出后您关闭即可正常使用手机/平板。
- 进入安全模式后，左下角有安全模式标识。
- 安全模式不会损坏任何软件和个人数据。

:::

## 参考链接

- [Android手机如何进入&离开安全模式?](https://www.sohu.com/a/214393059_99967531) - 搜狐
- [华为手机/平板安全模式简介](https://consumer.huawei.com/cn/support/content/zh-cn00737976/) - 华为官网
