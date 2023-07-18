# 华为刷机 常见问题与解答

[常见问题与解答](./index.md)

- [手机连电脑没反应怎么办](./knowledge.md#手机连电脑没反应怎么办)
- [sideload 失败，手机提示adb版本过低需要升级 (`you need adb 1.0.32 or newer to apply sideload`) 怎么办](./index.md#sideload-失败手机提示adb版本过低需要升级-you-need-adb-1032-or-newer-to-apply-sideload-怎么办)
- [如何判断 Magisk 或 SuperSU 有没有刷成功](./index.md#如何判断-magisk-或-supersu-有没有刷成功)
- [Xposed 框架怎么刷](./index.md#xposed-框架怎么刷)
- [指令无效](./knowledge.md#指令无效)
  - 显示 `'fastboot' 不是内部或外部命令，也不是可运行的程序或批处理文件`
  - 显示 `adb.exe: unknown command XXXX`
- [Magisk 一直检查更新怎么办](./index.md#magisk-一直检查更新怎么办)

## 解锁 BL 失败，提示错误信息

| 错误信息                            | 解决方法                                                                      |
| ----------------------------------- | ----------------------------------------------------------------------------- |
| `Necessary to disable phone finder` | 关闭查找手机再回去解锁，如果已经关了就重新开关一次。再不行就恢复出厂再试。    |
| `Command not allowed`               | 同上，关闭查找手机再试。                                                      |
| `Too many links`                    | 有时会出现这种情况，具体请查看 Fastboot 是否显示红色 Unlocked，若是则已解锁。 |
| `password wrong`                    | 解锁码错误，请重新获取解锁码。                                                |

## 刷 TWRP 报错 `partition length get error` 怎么办

具体原因未知，如果其他步骤没有问题，可以尝试[用奇兔刷机刷](http://rom.7to.cn/jiaochengdetail/11027)，有些时候就可以。

但是！请不要！刷奇兔刷机上的 ROM 或者用它救砖，变砖后果自负！

## 手机无限重启，刷官方包也没用

您可以尝试**解除校验**后再次启动手机。

至于为什么刷官方包也没用，我也不知道

## 刷完 TWRP 重启进入华为官方 eRecovery，是不是没有刷进去

刷完 TWRP 请拔掉数据线**再认真教程说的长按重启**。如果进错了就再回 Fastboot 刷一次 TWRP 再重启。拔不拔线进的模式是**不一样的**。

## Magisk 提示需要修复环境

修复就完了，实在修复不了也可以不修复。

## 双清/格式化data/恢复出厂之后需要重新刷 Root 吗

不需要，只需要重新安装对应 APP 即可。

如果不行可以再次 Root。

## 我可以直接恢复出厂/格式化 `data` 分区吗

**最好别！**

EMUI 部分系统文件储存在 `data` 分区内，恢复出厂或者格式化 data **可能会丢失这些文件**。

您可以先刷入官方 Recovery 后再恢复出厂。

如果您不小心格式化了 data，可以通过刷入小包的方式恢复这些文件。

## 版权声明

本文档已获得 [@某贼](https://www.coolapk.com/u/3463951) 授权搬运并修改整理

## 参考链接

- [如何Root你的华为旧机？](https://www.coolapk.com/feed/26320412?shareKey=YzZmMjdiZjEwNThjNjEwZDQ5MGI~&shareUid=3463951&shareFrom=com.coolapk.market_11.3) - 酷安：@某贼
