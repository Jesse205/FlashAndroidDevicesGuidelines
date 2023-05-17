# 华为手机/平板获取 Root

>有人说刷机已经成为过去时，我看不尽然。虽然刷机的人少了，但我认为，只要厂商的系统还做不到尽善尽美，只要有人还有尝鲜的需求，刷机就有存在的理由。而且越是老机型，越有刷机的必要。这篇就是华为老机型的Root教程，当年错过的可以试试，希望能让你的旧机重获新生。

## 开始之前先来了解一些必备技能

### 华为的各个模式

* __Recovery__：不连接电脑，关机状态长按电源键和音量加，出现 logo 松开电源键继续按住音量加，直到进入。
* __eRecovery__：用数据线连接电脑的情况下，关机状态长按电源键和音量加
Fastboot：用数据线连接电脑的情况下，关机状态长按电源键和音量减
升级模式（所谓三键强刷）：关机状态下，长按电源键，音量加和音量减。插不插线无所谓。

Recovery 和 eRecovery 是有区别的。

Recovery 就是我们熟知的那个 Recovery，而 eRecovery 是独立于 Recovery 的另一个 Recovery 分区。也就是说华为相当于有两个恢复模式。

二者功能不同，在 Recovery 里我们可以做恢复出厂，清除 cache 等本地操作，而在 eRecovery 里可以连接 WiFi 下载适用于你的手机的系统包并自动安装恢复。

刷 TWRP 只是替换掉了 Recovery，eRecovery 仍然保留。

::: tip
使用 eRecovery 救砖时，可能因为华为撤包导致无法使用
:::

## 准备的东西

* 电脑
* 手机
* [数据线](../../../normal/noun.md)
* [ADB工具包](../../../tools/platform-tools.md#adb-下载)
* [Magisk](README.md#下载-magisk)
* SuperSU（安卓4到6使用）
* 以及一双灵巧的双手。

## 解锁步骤

### 一、解锁BL锁

这是首要且必要的条件。手机进入Fastboot模式，如果显示红色Unlocked即为已解锁，显示绿色Locked即为未解锁，需要解锁。

解锁需要解锁码。还没有解锁码的机油可以[获取解锁码](https://www.coolapk.com/feed/25219974?shareKey=ZDc3M2ExYmZlNjQ2NjA3MTc2ZGY~)。

获取到解锁码后连接电脑，进入 Fastboot 模式，打开adb工具包里的命令行，输入指令：

``` shell
fastboot oem unlock 解锁码
```

假如你的解锁码是16个0，那就应该输入：

``` shell
fastboot oem unlock 0000000000000000
```

然后回车。老一点的机型一般直接就解锁了，新一点的手机上可能会出现这样的提示：

这时按音量加键调整到 Yes，再按电源键确认就可以了。如果手机重启或低级格式化，最终 Fastboot 上显示红色 Unlocked，即为解锁成功。

注意，解锁会清除手机里所有数据，请提前做好数据备份。解锁之前请关闭查找手机（不要只退出账号）否则无法解锁。解锁后出现黄色开机警告为正常现象。

### 二、刷入 TWRP

首先你要找到适用于你手机的TWRP。比如我要找荣耀7的，那就百度“荣耀7TWRP”，就能找到很多：

这么多TWRP选哪个，我个人首推花粉俱乐部里发布的，品质有保障。

> 向HRT团队致敬！

下载之后如果是zip格式压缩包，就全部解压，里面一般有一键刷入.bat或者Run.bat之类的一键刷入脚本。运行它按照提示刷入即可。

如果下载下来只有img文件，那就需要手动刷入。继续回到Fastboot，输入命令：

``` shell
fastboot flash recovery 此处拖入img文件
```

然后回车即可。一般出现两个OKAY即为刷入成功。
如果此命令报错 partition length get error，可以尝试用另外一条命令（一般为EMUI8及之后）：

``` shell
fastboot flash recovery_ramdisk 此处拖入img文件
```

（此处感谢@魅族美学6 老哥测试！）
之后用进入Recovery的方法进入TWRP。
注意：TWRP文件名里不能有空格，如果有就改名去掉。如果刷完TWRP直接重启进系统，则TWRP可能被官方Recovery覆盖，需要重新刷入。留住TWRP的方法就是刷完进去Root一下，这样以后就不会自动被官方覆盖。

### 三、刷入Root

刷入的 Root 包，Android 4~6 用 SuperSU，安卓7及以上用面具20.4。请对应你的安卓版本使用。Root 包不需要解压。

如果你的 TWRP 可以正常读取内部存储，那直接把 Root 包拷到内部存储内安装就行了。但是实际上很多 TWRP 不能读取存储，所以这里介绍一个通用的方法：adb sideload。

手机进入TWRP连接电脑，点击高级，点击「adb sideload」或者「adb 线刷」，不需要选清除直接滑动开始。电脑在命令行输入：

``` shell
adb sideload 此处拖入合适的Root包
```

然后回车，等待刷入完成。

adb sideload刷面具

完成后就可以开机了。如果开机之后弹出面具/SuperSU安装提示，安装就是了。如果开机桌面上没有面具/SuperSU也没关系，打开面具/SuperSU的zip包，打开common文件夹，找到Magisk.apk或Superuser.apk解压出来，开文件传输复制到手机里安装即可。

注意，面具就用20.4，不要升级。底层和管理器都不要升级。升级底层有变砖的风险，升级管理器可能出现无法授权的问题。

## 特别说明

如果你使用的是官方系统，请避免在 TWRP 里双清以及格式化 data！

由于华为喜欢把某些系统组件放到 data 里，使用 TWRP 格式化会导致这些组件丢失，甚至不能开机。

如果需要格式化，可以恢复官方 Recovery 来格式化。如果你介意官方系统不能格式化 data 或者无法解密无法挂载 data 的问题，可以刷官改或第三方系统试试。或者如果你动手能力比较强，可以尝试官方系统格式化 data 然后刷解密包 查看链接 ，但这样有一定的风险。如果格后丢 webview 可以参考我这篇图文拯救 查看链接

## 常见问题

__Q__：手机连电脑没反应怎么办<br/>
__A__：补驱动，换数据线，换电脑插口（台式机最好是后置插口），关闭USB选择性暂停。

__Q__：解锁失败提示 `Necessary to disable phone finder` 怎么办<br/>
__A__：关闭查找手机再回去解锁，如果已经关了就重新开关一次。再不行就恢复出厂再试。

__Q__：解锁失败提示 `Command not allowed` 怎么办<br/>
__A__：同上，关闭查找手机再试。

__Q__：解锁时提示 `Too many links` 显示失败怎么办<br/>
__A__：有时会出现这种情况，具体请查看 Fastboot 是否显示红色 Unlocked，若是则已解锁。

__Q__：解锁失败提示 `password wrong` 怎么办<br/>
__A__：解锁码错误，请重新获取。

__Q__：刷TWRP显示`“fastboot”不是内部或外部命令，也不是可运行的程序或批处理文件`<br/>
__A__：如果你用的是网上的一键刷入工具，请将压缩包完全解压再运行bat脚本。注意是完全解压而不是直接运行压缩包里的脚本。

__Q__：刷TWRP报错partition length get error怎么办<br/>
__A__：具体原因未知，如果其他步骤没有问题，可以尝试用奇兔刷机刷（教程参考 查看链接 ），有些时候就可以。但是！请不要！刷奇兔刷机上的ROM或者用他救砖，变砖后果自负！

__Q__：刷完TWRP重启进入华为官方eRecovery，是不是没有刷进去<br/>
__A__：刷完TWRP请拔掉数据线再认真按照上边说的长按重启。如果进错了就再回Fastboot刷一次TWRP再重启。拔不拔线进的模式是不一样的。

__Q__：sideload失败，手机提示adb版本过低需要升级（you need adb 1.0.32 or newer to apply sideload）怎么办<br/>
__A__：电脑使用的adb工具版本过低不支持sideload。使用我提供的版本即可。

__Q__：如何判断面具/SuperSU刷没刷成功<br/>
__A__：开机面具APP里当前版本有显示即为成功，SuperSU 打开不出现“您的手机尚未Root”弹窗即为成功。

__Q__：面具一直检查更新怎么办<br/>
__A__：不管他，不影响使用，不要更新。

__Q__：面具提示需要修复环境<br/>
__A__：修复就完了，实在修复不了也可以不修复。

__Q__：双清/格式化data/恢复出厂之后需要重新刷 Root 吗<br/>
__A__：不需要，只需要重新安装对应 APP 即可。

__Q__：框架怎么刷<br/>
__A__：如果要刷的话，Android 4~7 建议用 Xposed 框架，Android 8 建议用 EdXposed，但是刷后可能会出问题，新手不是刚需还是不建议尝试了。

刷机有风险，操作需谨慎。本教程适用于大多数情况，但仍无法避免小部分机型不适用，望知晓。

附上救砖教程一个：[查看链接](https://www.coolapk.com/feed/26205215?shareKey=ZjY1ZTBjY2E2MTdkNjA3Nzg5MjY~)

## 版权声明

本文档已获得 [@某贼](http://www.coolapk.com/u/3463951) 授权搬运并修改整理

## 参考链接

* [如何Root你的华为旧机？](https://www.coolapk.com/feed/26320412?shareKey=YzFmYzFkM2MxNzBlNjNkNjVhODE~)