# 系统分区及结构

### odm 分区

此分区包含原始设计制造商 (ODM) 对片上系统 (SoC) 供应商板支持包 (BSP) 的定制。此类定制使 ODM 能够替换或定制 SoC 组件，并为特定于板的组件、守护程序和硬件抽象层 (HAL) 上的 ODM 特定功能实现内核模块。这个分区是可选的；通常，它用于包含自定义，以便设备可以将单个供应商映像用于多个硬件 SKU。有关详细信息，请参阅 [ODM 分区](https://source.android.com/docs/core/architecture/bootloader/partitions/odm-partitions?hl=zh-cn)。

### odm_dlkm 分区

此分区专用于存储 ODM 内核模块。将 ODM 内核模块存储在 `odm_dlkm` 分区（与 `odm` 分区相反）可以在不更新 `odm` 分区的情况下更新 ODM 内核模块。

### misc 分区

此分区由recovery 分区使用，大小为 4 KB 或更大。

### metadata 分区

当设备使用[元数据](https://source.android.com/docs/security/features/encryption/metadata?hl=zh-cn)加密时，此分区用于存储元数据加密密钥。大小为 16 MB 或更大。它未加密，其数据未快照。当设备恢复出厂设置时，它会被擦除。此分区的使用受到严格限制。

### vendor 分区

此分区包含任何不可分发到 AOSP 的二进制文件。如果设备不包含专有信息，您可以省略此分区。

### vendor_dlkm 分区
此分区专用于存储供应商内核模块。将供应商内核模块存储在 `vendor_dlkm` 分区（与 `vendor` 分区相反）可以在不更新 `vendor` 分区的情况下更新内核模块。

### radio 分区

此分区包含 radio 映像，并且只有在专用分区中包含带有无线电特定软件的无线电的设备才需要。

### tos 分区

此分区存储 Trusty OS 的二进制映像，仅在设备包含 Trusty 时使用。有关详细信息，请参阅 [TOS 分区](https://source.android.com/docs/core/architecture/bootloader/partitions/tos-partitions?hl=zh-cn)。
