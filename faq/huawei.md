# 华为刷机 常见问题与解答

[常规问题与解答](./index.md)

* [手机连电脑没反应怎么办](./knowledge.md#手机连电脑没反应怎么办)
* [sideload 失败，手机提示adb版本过低需要升级 (`you need adb 1.0.32 or newer to apply sideload`) 怎么办](./index.md#sideload-失败手机提示adb版本过低需要升级-you-need-adb-1032-or-newer-to-apply-sideload-怎么办)
* [如何判断 Magisk 或 SuperSU 有没有刷成功](./index.md#如何判断-magisk-或-supersu-有没有刷成功)
* [Xposed 框架怎么刷](./index.md#xposed-框架怎么刷)
* [指令无效](./knowledge.md#指令无效)

## 解锁失败提示 `Necessary to disable phone finder` 怎么办

关闭查找手机再回去解锁，如果已经关了就重新开关一次。再不行就恢复出厂再试。

## 解锁失败提示 `Command not allowed` 怎么办

同上，关闭查找手机再试。

## 解锁时提示 `Too many links` 显示失败怎么办

有时会出现这种情况，具体请查看 Fastboot 是否显示红色 Unlocked，若是则已解锁。

## 解锁失败提示 `password wrong` 怎么办

解锁码错误，请重新获取。

## 显示 `'fastboot' 不是内部或外部命令，也不是可运行的程序或批处理文件`

如果你是手写命令，请[检查输入是否正确](./knowledge.md#指令无效)。

## 刷 TWRP 报错 `partition length get error` 怎么办

具体原因未知，如果其他步骤没有问题，可以尝试用奇兔刷机刷（教程参考 查看链接 ），有些时候就可以。但是！请不要！刷奇兔刷机上的ROM或者用他救砖，变砖后果自负！

## 刷完 TWRP 重启进入华为官方 eRecovery，是不是没有刷进去

刷完 TWRP 请拔掉数据线再认真教程说的长按重启。如果进错了就再回 Fastboot 刷一次TWRP再重启。拔不拔线进的模式是不一样的。

## 面具一直检查更新怎么办

不管他，不影响使用，不要更新。

## 面具提示需要修复环境

修复就完了，实在修复不了也可以不修复。

## 双清/格式化data/恢复出厂之后需要重新刷 Root 吗

不需要，只需要重新安装对应 APP 即可。
