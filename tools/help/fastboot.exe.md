::: details fastboot 汉化版帮助文件

``` txt:no-line-numbers
使用方法： fastboot [ <选项> ] <命令>

命令:
  update <文件名>                          从 update.zip 中重新刷新设备
  flashall                                 刷入 boot + recovery + system
  flash <分区> [ <文件名> ]                将文件写到闪存分区
  erase <分区>                             擦除一个闪存分区
  format <分区>                            格式化一个闪存分区
  getvar <变量>                            显示一个 bootloader 变量
  boot <内核> [ <ramdisk> ]                下载并启动内核
  flash:raw boot <kernel> [ <ramdisk> ]    创建 bootimage 并刷入
  devices                                  列出所有连接的设备
  continue                                 继续进行自动启动
  reboot                                   正常重启设备
  reboot-bootloader                        重启设备进入 bootloader
  help                                     显示此帮助信息

选项:
  -w                                       擦除用户数据和缓存（如果分区类型支持，
                                           则进行格式化）。
  -u                                       格式化前不要先擦除分区
  -s <特定设备>                            指定设备序列号或设备端口的路径
  -l                                       伴随 "devices"，列出设备路径
  -p <产品>                                指定产品名称
  -c <命令行>                              覆盖内核命令行
  -i <vendor id>                           指定一个自定义的 USB 供应商 ID
  -b <base_addr>                           指定一个自定义的内核基址。 默认：0x10000000
  -n <page size>                           指定nand页的大小。 默认：2048
  -S <size>[K|M|G]                         自动疏散大于尺寸的文件。  0表示禁用
```

:::

::: details fastboot 原始帮助文件

``` txt:no-line-numbers
usage: fastboot [ <option> ] <command>

commands:
  update <filename>                        reflash device from update.zip
  flashall                                 flash boot + recovery + system
  flash <partition> [ <filename> ]         write a file to a flash partition
  erase <partition>                        erase a flash partition
  format <partition>                       format a flash partition
  getvar <variable>                        display a bootloader variable
  boot <kernel> [ <ramdisk> ]              download and boot kernel
  flash:raw boot <kernel> [ <ramdisk> ]    create bootimage and flash it
  devices                                  list all connected devices
  continue                                 continue with autoboot
  reboot                                   reboot device normally
  reboot-bootloader                        reboot device into bootloader
  help                                     show this help message

options:
  -w                                       erase userdata and cache (and format
                                           if supported by partition type)
  -u                                       do not first erase partition before
                                           formatting
  -s <specific device>                     specify device serial number
                                           or path to device port
  -l                                       with "devices", lists device paths
  -p <product>                             specify product name
  -c <cmdline>                             override kernel commandline
  -i <vendor id>                           specify a custom USB vendor id
  -b <base_addr>                           specify a custom kernel base address. default: 0x10000000
  -n <page size>                           specify the nand page size. default: 2048
  -S <size>[K|M|G]                         automatically sparse files greater than
                                           size.  0 to disable
```

:::
