# Havoc OS

<img class="banner-img" src="./images/logo/havocos.png" alt="Havoc OS LOGO"/>

Havoc-OS 是一个基于安卓开源项目的售后固件，其灵感来自于谷歌 Pixel 的精致 Material Design 用户界面。我们为您的设备提供了流畅和稳定的体验，并精选了一系列令人惊叹的功能，提供了卓越的用户体验。

我们的ROM可用于 20 多个 OEM 厂商的 150 多个设备。

通用系统映像（GSI）是可用的，所以即使你的设备目前不被支持，你也可以尝试我们的 ROM。我们的设备名册不断增加，每月都有更多的设备支持。

* __官方网站__：<https://havoc-os.com/>
* __下载地址__：
  * __官网下载__：<https://download.havoc-os.com/>
  * __SourceForge__ <Badge type="tip" text="官方" /> ：<https://sourceforge.net/projects/havoc-os/files/>

## 屏幕截图

<div class="screenshotList">
<img src="https://havoc-os.com/src/img/screenshots/Screenshot_3.png" alt="桌面" title="桌面"/>
<img src="https://havoc-os.com/src/img/screenshots/Screenshot_10.png" alt="锁屏3" title="锁屏3"/>
<img src="https://havoc-os.com/src/img/screenshots/Screenshot_1.png" alt="锁屏" title="锁屏"/>
<img src="https://havoc-os.com/src/img/screenshots/Screenshot_2.png" alt="锁屏2" title="锁屏2"/>
<img src="https://havoc-os.com/src/img/screenshots/Screenshot_4.png" alt="通知栏" title="通知栏"/>
<img src="https://havoc-os.com/src/img/screenshots/Screenshot_5.png" alt="控制栏" title="控制栏"/>
<img src="https://havoc-os.com/src/img/screenshots/Screenshot_7.png" alt="设置页面" title="设置页面"/>
<img src="https://havoc-os.com/src/img/screenshots/Screenshot_8.png" alt="特色设置页面" title="特色设置页面"/>
<img src="https://havoc-os.com/src/img/screenshots/Screenshot_9.png" alt="任务管理" title="任务管理"/>
<img src="https://havoc-os.com/src/img/screenshots/Screenshot_6.png" alt="电源菜单" title="电源菜单"/>
</div>

::: details 历史版本
<div class="screenshotList">
<img src="https://a.fsdn.com/con/app/proj/havoc-os/screenshots/Screenshot_Ruthless_Launcher_20180803-133540.png/max/max/1" alt="桌面" title="桌面"/>
<img src="https://a.fsdn.com/con/app/proj/havoc-os/screenshots/Screenshot_Ruthless_Launcher_20180803-133603.png/max/max/1" alt="通知栏" title="通知栏"/>
<img src="https://a.fsdn.com/con/app/proj/havoc-os/screenshots/Screenshot_Ruthless_Launcher_20180803-133607.png/max/max/1" alt="控制栏" title="控制栏"/>
<img src="https://a.fsdn.com/con/app/proj/havoc-os/screenshots/Screenshot_Settings_20180803-133611.png/max/max/1" alt="设置页面" title="设置页面"/>
<img src="https://a.fsdn.com/con/app/proj/havoc-os/screenshots/Screenshot_Settings_20180803-012439.png/max/max/1" alt="关于页面" title="关于页面"/>
<img src="https://a.fsdn.com/con/app/proj/havoc-os/screenshots/Screenshot_Ruthless_Launcher_20180803-133626.png/max/max/1" alt="音量调节" title="音量调节"/>
</div>
:::

## Android 版本

| HavocOS | 4.0 - 4.10 | 3.4 - 3.9 | 2.8 - 2.9 |
| ------- | ---------- | --------- | --------- |
| Android | 11         | 10        | 9         |

## 特性

* __最新的__：经常更新最新的月度安全补丁
* __自定义__：广泛的有用功能和设置来定制你的设备
* __稳定性__：流畅和稳定，具有最佳的电池寿命和性能。
* __Material Design 用户界面__：简洁而精致的用户界面，灵感来自谷歌 Pixel。
* __支持__：在 Telegram 和 XDA 上提供对 ROM 的积极支持。
* __开放源代码__：ROM 的源代码可在我们 的GitHub 上找到。
* __OTA__：每月一次的空中更新，提供无忧无虑的体验。

## 设计

### 用户界面：Material Design <Badge type="tip" text="灵感来源" />

* [Material Design 3 设计文档](https://m3.material.io/)
* [Material Design 2 设计文档](https://m2.material.io/)
* [Material Design 1 设计文档](https://m1.material.io/)
* [Material Design 1 中文设计文档](https://www.mdui.org/design/)（非官方） - MDUI

## 评价

<meter id="fuel" min="0" max="50" low="25" high="40" optimum="45" :value="average*10"></meter>
{{ average }} 分（{{ scoredBy }} 人打分）

::: tip
如果您需要打分，请点击文末“在 Gitee 上编辑此页面”手动编辑此页进行打分。
:::

### 优点

* 完美的 Material Design 设计
* 拥有官方 GSI
* 自定义丰富
* 系统版本可以准确对应安卓版本
* 内置 Gapps <Badge type="tip" text="可选" />

### 缺点

* 系统相对简陋

## 参考链接

声明：图片均来源于网络。如果侵犯了您的权力，请[联系我](mailto:jesse205@qq.com)，我会尽快删除。

<script setup>
import { h, ref } from 'vue'

// 在这里添加数据即可打分
const scoreList = [
    {
        name: "jesse205",
        score: 5
    },
]

let allScore = 0

for (let item of scoreList){
    allScore += item.score
}

const average = allScore/scoreList.length
const scoredBy = scoreList.length

</script>
