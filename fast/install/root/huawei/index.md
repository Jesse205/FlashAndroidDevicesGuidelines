# 华为手机/平板获取 Root

::: info
<!--@include: @/normal/danger_permissions/root/summary.md -->
:::

> 有人说刷机已经成为过去时，我看不尽然。虽然刷机的人少了，但我认为，只要厂商的系统还做不到尽善尽美，只要有人还有尝鲜的需求，刷机就有存在的理由。而且越是老机型，越有刷机的必要。这篇就是华为老机型的Root教程，当年错过的可以试试，希望能让你的旧机重获新生。
>

::: tip
本教程适用于大多数情况，**但仍无法避免小部分机型不适用**。

如果您的设备不小心变砖了，您可以尝试[救砖](/rescuing/index.md)。

您也可以使用百度搜索您的手机型号+root，查找您的设备专用的 root 方法（注意别点广告，部分资源实际上是免费的）。

<SearchBox content="华为 P10 root"/>
:::

## 开始之前先来了解一些必备技能

首先，了解一下手机的各种模式

- [基础知识 > 华为的各个模式](/normal/modes/huawei.md)

## 准备的东西

- 电脑
- 手机
- [数据线](/faq/knowledge.md#数据线-是什么-和-充电线-有什么区别)
- [ADB工具包](/tools/platform-tools.md#adb-下载)
- [Magisk](../index.md#下载-magisk) 或 SuperSU（Android 4 到 6 使用，部分手机需要专用刷机包）

## 操作步骤

### 一、解锁BL锁

这是首要且必要的条件。手机进入 Fastboot 模式，如果显示红色 `Unlocked` 即为已解锁，显示绿色 `Locked` 即为未解锁，需要解锁。

请参考[《华为解锁》](/fast/unlock/huawei/index.md)

### 二、刷入 TWRP

首先你要找到适用于你手机的 TWRP。比如我要找荣耀 7的，那就[百度“荣耀 7 TWRP”](https://www.baidu.com/s?word=%E8%8D%A3%E8%80%80+7+TWRP)，就能找到很多：

这么多 TWRP 选哪个，我个人首推**花粉俱乐部**（花粉俱乐部内所有相关帖子已屏蔽，请从**荣耀俱乐部**内查找）里发布的，品质有保障。

> 向 HRT 团队致敬！

- 下载之后如果是 `zip` 格式压缩包，就全部解压，里面一般有一键刷入 `.bat` 或者 `Run.bat` 之类的一键刷入脚本。运行它按照提示刷入即可。
- 如果下载下来只有 `img` 文件，那就需要手动刷入。继续回到 Fastboot，输入命令：

:::: details 🛠命令生成器
您可以在这里直接生成您的命令。

1. 将信息填写到输入框，如果是文件则可以拖入输入框。
2. 选择系统版本
3. 复制命令，将命令粘贴到终端内
4. 运行命令

::: tip
注：如果使用生成器生成的命令，需要将终端工作目录切换至文件所在的目录才能继续使用。
:::

<CGFileInput @change="imgFilePath = $event" holder="<img文件名或路径>">.img 文件</CGFileInput>

::::

::: code-group

``` shell-vue :no-line-numbers [EMUI 5 及之前]
fastboot flash recovery {{imgFilePath}}
```

``` shell-vue :no-line-numbers [EMUI 8 及之后]
fastboot flash recovery_ramdisk {{imgFilePath}}
```

:::

然后回车即可。一般出现两个 `OKAY` 即为刷入成功。

::: tip
如果第一条命令报错 `partition length get error`，可以尝试用另外一条命令。

（此处感谢 @魅族美学6 老哥测试！）
:::

之后用[进入 Recovery 的方法](/normal/modes/huawei.md#recovery-模式)进入 TWRP。

::: tip 注意

- TWRP 文件名里**不能有空格**，如果有就改名去掉。（对于小白）
- 如果刷完 TWRP 直接重启进系统，则 TWRP 可能**被官方 Recovery 覆盖**，需要重新刷入。
- 留住 TWRP 的方法就是刷完进去 Root 一下，这样以后就不会自动被官方覆盖。

:::

### 三、刷入 Root

刷入 Root有两种方法：

- 使用第三方 recovery 安装
- 修补镜像。

对于小白，推荐使用第三方 recovery 安装。

#### 使用第三方 recovery 安装法

::: info
刷入的 Root 包，Android 4~6 建议用 SuperSU，Android 7 及以上建议用 Magisk 20.4。

**Root 包不需要解压！**

| 名称    | Root 包文件名                  | 下载地址                             |
| ------- | ------------------------------ | ------------------------------------ |
| Magisk  | Magisk-vXXXX.zip               | [查看详情](../index.md#下载-magisk)  |
| SuperSU | SuperSU-vXXXX-YYYYMMDDXXXX.zip | [查看详情](../index.md#安装-supersu) |

:::

如果你的 TWRP 可以正常读取内部存储，那直接把 Root 包拷到内部存储内安装就行了。

但是很多 TWRP 不能读取存储，所以需要使用 adb sideload 直接刷入电脑中的文件。

手机进入TWRP连接电脑，点击高级，点击「adb sideload」或者「adb 线刷」，不需要选清除直接滑动开始。电脑在命令行输入：

:::: details 🛠命令生成器
您可以在这里直接生成您的命令。

1. 将信息填写到输入框，如果是文件则可以拖入输入框。
2. 复制命令，将命令粘贴到终端内
3. 运行命令

::: tip
注：如果使用生成器生成的命令，需要将终端工作目录切换至文件所在的目录才能继续使用。
:::

<CGFileInput @change="rootZipFilePath = $event" holder="<合适的Root包>">.zip 格式的 Root 包</CGFileInput>

::::

``` shell-vue :no-line-numbers
adb sideload {{rootZipFilePath}}
```

然后回车，等待刷入完成。

完成后就可以开机了。

<!-- - ，打开 Magisk/SuperSU 的 zip 包，打开 common 文件夹，找到 Magisk.apk 或 Superuser.apk 解压出来，[安装到手机即可](/normal/installApk/index.md#安装电脑或其他设备上的软件)。 -->

:::: warning
面具就用 20.4，不要升级。底层和管理器都不要升级。升级底层有变砖的风险，升级管理器可能出现无法授权的问题。

> 虽然话是这么说，但是部分机型/系统仍然可以使用最新版本。
> 以下是经过测试的版本

::: details
<!--@include: ./tested.md -->
:::
::::

#### 修补镜像法

> SuperSU 不支持使用修补镜像法

1. 按照以下表格提取镜像，不同系统需要提取不同的镜像。

| 系统          | 提取镜像                              | 分区名           |
| ------------- | ------------------------------------- | ---------------- |
| EMUI 5 及以下 | BOOT.img                              | `boot`             |
| EMUI 8        | RAMDISK.img                           | `ramdisk`          |
| EMUI 9 及以上 | RECOVERY_RAMDIS.img（这不是拼写错误） | `recovery_ramdisk` |

::: tip
对于 EMUI 9+ 设备，`ramdisk` 分区不再存在。作为解决方法，Magisk 将安装到 recovery 内，也就是 `recovery_ramdisk` 分区。

*注意：正如在 荣耀 View 10 上测试的那样，华为的内核似乎无法在早期启动时捕获按键事件，因此长按音量增大不会在我的设备上**不会**启动到 Recovery。 您的体验可能会有所不同。*

**警告：Magisk 将覆盖第三方 Recovery。**
:::

2. 使用 Magisk 修补提取的镜像：
   - [修补映像](https://jesse205.github.io/MagiskChineseDocument/install.html#%E4%BF%AE%E8%A1%A5%E6%98%A0%E5%83%8F) - Magisk 中文文档
3. 将手机重启至 [fastboot](/normal/modes/index.md#fastboot-模式)：
   - **按键进入**：将手机与电脑连接，关机状态下长按 音量减 和 电源键。
4. 使用命令将新文件刷入到设备，注意不同系统分区名也不一样。

:::: details 🛠命令生成器
您可以在这里直接生成您的命令。

1. 将信息填写到输入框，如果是文件则可以拖入输入框。
2. 复制命令，将命令粘贴到终端内
3. 运行命令

::: tip
注：如果使用生成器生成的命令，需要将终端工作目录切换至文件所在的目录才能继续使用。
:::

<CGInput @change="ramdiskPartitionName = $event" holder="ramdisk">分区名</CGInput>
<CGFileInput @change="magiskPatchedFilePath = $event" holder="<magisk_patched.img路径>">magisk_patched.img</CGFileInput>

::::

``` shell-vue :no-line-numbers
fastboot flash {{ramdiskPartitionName}} {{magiskPatchedFilePath}}
```

## 特别说明

- 恢复出厂/格式化data
  - 如果你使用的是官方系统，请**避免在 TWRP 里双清以及格式化 data**！
  - 由于华为喜欢把某些系统组件放到 data 里，使用 TWRP 格式化会**导致这些组件丢失**，甚至**不能开机**。
  - 如果需要格式化，可以恢复官方 Recovery 然后格式化。
  - 如果你介意官方系统不能格式化 data 或者无法解密无法挂载 data 的问题，可以刷官改或第三方系统试试。
  - 或者如果你动手能力比较强，可以尝试官方系统格式化 data 然后刷解密包 查看链接 ，但这样有一定的风险。如果格后丢 WebView 可以参考我这篇图文拯救 [查看链接](https://www.coolapk.com/feed/25896735?shareKey=MDgxOTJmYmQyMzU5NjA3MjYxMTI~&shareUid=3463951&shareFrom=com.coolapk.market_11.0.2)
- Magisk/SuperSU 管理器
  - 如果开机后弹出 Magisk/SuperSU 安装提示，按照提示操作。
  - 如果开机后桌面上没有 Magisk/SuperSU，下载一个对应的 APK 软件然后安装就行了，一般会在下载 zip 包的附近有提供。

## 常见问题

详情请见[《常见问题与解答》](/faq/index.md)与[《华为手机 常见问题与解答》](/faq/huawei.md)

## 版权声明

本文档已获得 [@某贼](http://www.coolapk.com/u/3463951) 授权搬运并修改整理

## 参考链接

- [如何Root你的华为旧机？](https://www.coolapk.com/feed/26320412?shareKey=YzFmYzFkM2MxNzBlNjNkNjVhODE~) - 酷安：@某贼
- [安装](https://jesse205.github.io/MagiskChineseDocument/install.html) - Magisk中文文档

[MagiskInstallFromRecovery]: https://jesse205.github.io/MagiskChineseDocument/install.html#%E7%AC%AC%E4%B8%89%E6%96%B9-recovery
[MagiskInRecovery]:https://jesse205.github.io/MagiskChineseDocument/install.html#recovery-%E4%B8%AD%E7%9A%84-magisk

<script setup>
import {ref} from 'vue'

const imgFilePath = ref('')
const rootZipFilePath = ref('')
const magiskPatchedFilePath = ref('')
const ramdiskPartitionName = ref('')
</script>
