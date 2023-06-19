::: details 原始帮助文件

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
