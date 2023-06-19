# RealmeGT Root教程 (ColorOS/RealmeUI)

## 一、前言

首先我们要了解什么是 Magisk，俗称面具
比较老的刷机人可能知道 SuperSU 等 Root 管理器，但他们都太老了，新时代，来临力（悲<Emoji name="shounuehuaji"/>
<!-- 如果你不需要Root或者不想学会Root，请自觉退出文章。 -->
<!-- Magisk is a suite of open source software for customizing Android, supporting devices higher than Android 5.0.
Some highlight features: -->

Magisk是一套用于自定义化安卓的开源软件，支持安卓5.0以上的设备
<!-- MagiskSU: Provide root access for applications -->
MagiskSU 可以为应用程序提供Root权限，基本可以理解为用户态的最高权限
Root权限不是你手机上的最高权限，详见https://www.coolapk.com/feed/32067805?shareKey=YjQ5Y2YzY2M4ZmEzNjQ2NTJmY2Y~&shareUid=1432137&shareFrom=com.coolapk.market_13.1.3
KernelSU通过编译自定义Kernel实现Root
Magisk通过修补ramdisk实现Root
如下图所示，Magisk核心修补代码替换了ramdisk中的init，添加了Magisk自定义的overlay.d
获取Root权限就是让/system/bin里有su binary，这个过程Magisk做到了systemless，即不在物理意义修改system分区
此外，Magisk还会对kernel进行patch，比如Force kernel to load rootfs，Remove Samsung defex/RKP等工作
Magisk Modules: Modify read-only partitions by installing modules
Magisk模块可以修改只读分区，从而做到替换温控，将应用变为系统应用等。这些修改一般是安全的，不会真的读写物理分区
MagiskBoot: The most complete tool for unpacking and repacking Android boot images
MagiskBoot 安卓Boot镜像解包/打包最完备的工具，这个暂时不用管，以后会用到[受虐滑稽]
Zygisk: Run code in every Android applications' processes
Zygisk可以在每个安卓应用进程中运行代码，从而做到注入指定内容修改进程/隐藏Root等操作。Zygisk寄生于Zygote，是Riru在新时代的继任者。在Android中，负责孵化新进程的这个进程叫做Zygote，安卓上其他的应用进程都是由它孵化的。
The result of Ramdisk determines whether your device has ramdisk in the boot partition. If your device does not have boot ramdisk, read the Magisk in Recovery section before continuing.
MagiskManager中的“Ramdisk”状态确定了你的设备的Boot分区里是否有Ramdisk
如果没有，你就要安装Magisk到Recovery分区里，这不是本教程的内容，详见
## 二、步骤
首先，你需要解锁BootLoader，这是一切玩机之根本。什么是BootLoader?详见
总之，如果BootLoader是锁定状态，非官方的固件不符合签名(signature)，会无法开机（有些机器有BootROM漏洞，可能可以启动）
我们这次选取的机器是RMX2202(RealmeGT)，没有这些漏洞，有Ramdisk，可以通过修补Boot镜像获取Root
第一步：解锁BootLoader
以下的内容只适用于真我GT，其他机器可以看对应板块的解锁教程
温馨提示:绿厂解锁BootLoader会自毁TEE
什么是 TEE(Trusted Execution Environment)
还是这篇文章

注意，这一步会清除手机所有数据！！！
下载对应安卓版本
https://wellqrg.lanzoui.com/b02ddjkoh 
提取码 h4sg
如果是 RealmeUI2.0，下载安卓 11 版本
如果是 RealmeUI3.0，下载安卓 12 版本
打开软件，申请深度测试，等待审核通过
打开设置→关于手机
狂点系统版本号（七次），打开开发者选项
启用OEM解锁
重启，按住电源键和音量下键进入BootLoader

@kdifjrb 借用一下图片[受虐滑稽][受虐滑稽][受虐滑稽]
连接安装了fastboot驱动的电脑，预先安装platform-tools
https://developer.android.google.cn/studio/releases/platform-tools 
打开CMD，输入fastboot flashing unlock

按音量键选择UNLOCK THE BOOTLOADER，按电源键确认，请注意，这一步你的所有用户数据都会被清除，切记备份！！！
重启之后，如果开发者选项中的OEM解锁如图是灰色的，说明解锁成功力（喜
## 二、安装Magisk
下载Magisk
https://github.com/topjohnwu/Magisk/releases/tag/v25.2 
目前topjohnwu官方最新的稳定版是25.2，建议用这个版本(bug更少)
除此之外，还有很多第三方的Magisk也很优秀，比如Magisk Delta/Alpha

A.有TWRP
重启进入TWRP Recovery
对于RealmeGT，可以用@秋水105 的TWRP
我改了一下，升级了里面自带的Magisk版本
下载链接 https://www.123pan.com/s/k6eSVv-Zgysd 
fastboot boot twrp.img
对于Recovery在BOOT分区中的部分VAB机型，不可以fastboot flash boot twrp.img，原因详见
TWRP里有Root手机的选项，可以一键安装Magisk V25.2
重启，安装Magisk-v25.2.apk，如果当前不是“无法获取”，那么你获得了Root权限
这里顺便推荐一下我的TWRP安装模块
https://www.coolapk.com/feed/41984934?shareKey=NDFjYWJmMzA3OTU1NjNkYjg0ZjQ~&shareUid=14103126&shareFrom=com.coolapk.market_13.0.1 
[受虐滑稽]
B.没有TWRP
下载当前系统OTA包
RMX2202 OTA大全
(GDPR 欧版 EXPORT 印度版 domestic 国内版)
https://forum.xda-developers.com/t/rmx2202-realme-gt-5g-ui2-0-ui3-0-full-package-update-root-file.4356507/ 
下载对应版本号的系统，解压出里面的payload.bin
下载对应你电脑架构(architecture)和系统(OS)的release
https://github.com/ssut/payload-dumper-go/releases/tag/1.2.2 
目前最新是1.2.2
payload-dumper-go -p boot(提取boot分区) -o .(当前目录) payload.bin
把boot.img传输到手机里
打开Magisk-安装-选择并修补一个文件-选择boot.img

最后一行告诉了你patch(修补)后的boot镜像位置
把这个boot镜像传输到电脑
重启到bootloader（电源键加音量下键）
电脑上执行
fastboot flash boot 修补后的boot镜像.img
fastboot reboot (重启)
然后安装Magisk.apk
如果不是无法获取，那么你成功获取了Root权限
C.使用Root工具箱
可以使用@About_us 的Root工具箱
注意，不同版本Root工具箱不能混用！！！
虽然Root工具箱很方便，但是我仍然不建议用这个方法
这里也不是贬低Root工具箱作者的劳动成果，他们能用爱发电令我敬佩
但是，你要想想你Root是为了什么？只是为了获取Root权限而已吗？
显然不是，你享受的是折腾的乐趣，如果什么东西都可以让别人为你做，那么这样的生活是没有乐趣的
自己动手，丰衣足食[受虐滑稽]
有句老话叫，饭可以一日不吃，觉可以一日不睡，书不可以一日不读。会学习是人身上最宝贵的品质，折腾也是一种学习啊。
希望你们以后遇见问题先自己思考，找出自己是解决方案，学会独立思考。
活到老，学到老！
<!-- #ColorOS13# #Magisk# #Root# -->

## 版权声明

本文档已获得 [@然后成为老弟二号](http://www.coolapk.com/u/14103126) 授权搬运并修改整理

## 参考链接

* [RealmeGT Root教程(ColorOS/RealmeUI)](https://www.coolapk.com/feed/42977573?shareKey=YzgwZGU2MTg1ZmMwNjQ5MDQxMjY~)
