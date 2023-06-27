# 让 SuperSU 接管权限

如果你使用了 kingroot、360 root 或者拥有来自 adb 的 root 权限，且安卓版本为 Android 7.1 或更低，可以通过以下 5 个步骤让 SuperSU 接管 root 权限。

> 接管会立即生效，**但重启后就失效**。想要重启后依然是 SuperSU 管理 root 权限，则**需要执行额外的第 6、7 步**。

## 操作步骤

1. 从酷安或者其他的地方下载并安装 SuperSU 软件。
2. 使用 `getenforce` 命令查看当前 SELinux 的开启状态。
   * 如果显示 `Disabled` 或 `Permissive` 则说明 SELinux 是关闭的。
   * 如果显示 `Enforcing` 则说明 SELinux 是开启的。对于显示 `Enforcing` 的情况，你需要执行 `setenforce 0` 命令来关闭 SELinux。
3. 挂载 `/system` 可读写，然后将 `SuperSU` 卡刷包内的 `/arm/su` 解压出来，重命名为 `sudaemon` ，然后移动到 `/system/xbin` 文件夹内，并修改文件权限为 `777` ( `xbin` 文件夹可能需要手动创建)。
4. 执行 `/system/xbin/sudaemon --auto-daemon &` 命令，来启动 `SuperSU` 的管理进程。
5. 解压 SuperSU 刷机包里的 `/arm/su` 文件，将它移动到 `/system/bin` (移动时如果提示已有此文件，就点击替换) 并修改文件权限为 `777` 。
    > 这一步做完后，原有的 root 权限管理软件 (如 Kingroot)会失效，**建议做完后连带做完第 6 步、第 7 步**。\
    > 至此已经完成接管！想要测试是否成功，就打开需要使用 root 权限的程序。如果出现 SuperSU 的 root 授权弹窗就说明成功了。但是这样的接管在重启后就会失效，所以建议做完第 6、7 步，让 SuperSU 彻底安装在设备上，重启后也可以继续使用。
6. 编辑 `/system/etc/install_recovery.sh` ，清空原有内容，然后加入这一行：

``` sh
/system/xbin/sudaemon --auto-daemon &
```

7. 将 SuperSU 刷机包中的 `/arm/libsupol.so` 文件解压，然后移动到 `/system/lib/` 中，并修改文件权限为 `777` 。

做完这五步之后，就可以重启设备了。<Emoji name="shounuehuaji"/> 祝酷友们成功开机 🙏🙏🙏

> (这个方法获得的 SuperSU root 权限，和在 TWRP 里刷 SuperSU 刷机包的原理和表现是完全一致的)

## 版权声明

本文档已获得 [无敌战神领主](http://www.coolapk.com/u/2638279) 授权搬运并修改整理

## 参考链接

* [让superSU接管root权限](https://www.coolapk.com/feed/42614008?shareKey=ZDJlYWEzY2ViY2E1NjQ2NTJlNzI~) - 酷安
