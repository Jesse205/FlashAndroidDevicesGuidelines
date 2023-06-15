# 分区和映像

Android 设备包含若干个分区，这些分区在启动过程中发挥不同的作用。为了支持 A/B 更新，设备需要为 boot、system、vendor 和 radio 分区分别单独配置一个槽位。

本片仅简单介绍几个常见分区，更多内容请参考[《系统分区及结构》](../../details/partitions/index.md)

## 常见分区

### boot 分区

系统启动时引导的分区

::: tip
Android 8.0 以前刷机需要连同 `boot.img` 一起刷入。之后由于引入了 [Project Treble](https://source.android.google.cn/docs/core/architecture/treble?hl=zh-cn) 的缘故，可以跳过此分区，直接刷 `system.img` 。
:::

### init_boot 分区 <Badge type="tip" text="Android 13+" />

此分区包含用于搭载 Android 13 及更高版本的设备的通用 ramdisk。

### system 分区

此分区包含 Android 框架。

### recovery 分区

此分区存储在 OTA 过程中启动的恢复映像。支持[无缝更新](https://source.android.com/docs/core/ota/ab?hl=zh-cn)的设备可以将恢复映像存储为 `boot` 或 `init_boot` 映像中包含的 ramdisk（而不是单独的映像）。

## 其他分区

### cache 分区

此分区存储临时数据，如果设备使用无缝更新，则该分区是可选的。缓存分区不需要可从引导加载程序写入，但需要可擦除。分区大小取决于设备类型和用户数据空间的 `userdata` ；通常，50 MB–100 MB 就足够了。

### vendor 分区

此分区包含任何不可分发到 AOSP 的二进制文件。如果设备不包含专有信息，您可以省略此分区。

## 更多分区

* [华为的分区和映像](huawei.md)
* 小米的分区和映像
* 三星的分区和映像
* [系统分区及结构](../../details/partitions/index.md)

## 相关链接

* [安卓中的各种开机模式](../modes/index.md)

## 参考链接

* [分区和映像](https://source.android.google.cn/docs/core/architecture/bootloader/partitions-images?hl=zh_cn) - Android 开源项目
