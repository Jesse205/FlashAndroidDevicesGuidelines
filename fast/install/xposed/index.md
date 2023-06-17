# 安装 Xposed

::: info
<!--@include: ../../../normal/danger_permissions/xposed/summary.md -->
:::

::: tip
关于这些工具的详细介绍：[Xposed](../../../normal/danger_permissions/xposed/index.md)
:::

## 兼容性表格

<!--@include: ../../../normal/danger_permissions/xposed/compatibility.md -->

## LSPosed <Badge type="tip" text="推荐" />

* [仓库地址](https://github.com/LSPosed/LSPosed)
* [文档](https://github.com/LSPosed/LSPosed/wiki) <Badge type="tip" text="官方" />

## EdXposed

基于 Riru 的 ART hook 框架 (最初用于 Android Pie) ，提供与原版 Xposed 相同的 API, 使用 YAHFA (或 SandHook) 进行 hook, supports Android 8.0 ~ 11.

* [仓库地址](https://github.com/ElderDrivers/EdXposed)
* [文档](https://github.com/ElderDrivers/EdXposed/wiki) <Badge type="tip" text="官方" />

### 下载 EdXposed

Edxposed 拥有三个不同的版本

* Stable：经过测试的稳定版, 适合一般用户，更新缓慢.
***在 [Magisk Manager] 中的 [下载] 页中下载 Stable 版本***

* Alpha: 多次提交更新的测试版.
***在 [[Github Releases](https://github.com/ElderDrivers/EdXposed/releases)] 中下载 Alpha 版本***

* Canary: 由 CI 自动生成的测试版.（因为是自动生成的，所以里面可能会包含不受欢迎的代码，包括盗号，格机）
***在 [[EdXposed Manager](https://github.com/ElderDrivers/EdXposedManager)] 中下载 Canary 版本***

### 安装 EdXposed

1. 安装 Magisk v21+
2. 在 Magisk 仓库中安装 [Riru](https://github.com/RikkaApps/Riru/releases) v23 或更高版本（不能太高了，否则无法识别）.
3. 下载并在恢复模式(Recovery)或经由 Magisk Manager 安装 EdXposed.
4. 安装 [EdXposed Manager](https://github.com/ElderDrivers/EdXposedManager).
5. 重启手机.
6. 完成 :)

## Xposed Framework

敬请期待

## 参考链接

* [EdXposed Framework](https://github.com/ElderDrivers/EdXposed/blob/master/index_CN.md) - GitHub

[EDXPAAV]: https://github.com/ElderDrivers/EdXposed/wiki/%E5%8F%AF%E7%94%A8%E7%9A%84-Android-%E7%89%88%E6%9C%AC
