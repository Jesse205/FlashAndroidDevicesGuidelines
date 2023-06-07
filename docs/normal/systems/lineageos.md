# Lineage OS

<img class="banner-img" src="./images/logo/lineage.svg" alt="LOGO"/>

用于各种设备的免费和开源的操作系统，基于安卓移动平台。

* __官方网站__：<https://lineageos.org/>
* __下载地址__：
  * __官网下载__：<https://wiki.lineageos.org/devices/>
  * __LineageOS ROMs__ <Badge type="warning" text="第三方" /> ：<http://lineageosroms.com/>（下载历史版本）
* __文档__：<https://wiki.lineageos.org/>
* __论坛__：
  * __LineageOS中文论坛__ <Badge type="warning" text="第三方" /> ：<https://www.lineageos.org.cn/>

## 屏幕截图

* __LineageOS 18.1__：

<div class="screenshotList">
<img src="https://forum.xda-developers.com/attachments/screenshot_20210511-232130_trebuchet-png.5306555/" alt="桌面" title="桌面"/>
<img src="https://forum.xda-developers.com/attachments/screenshot_20210511-232134-png.5306557/" alt="锁屏" title="锁屏"/>
<img src="https://forum.xda-developers.com/attachments/screenshot_20210511-232119_settings-png.5306553/" alt="关于" title="关于"/>
</div>

## Android 版本

| LineageOS | 20.0 | 19.1 | 18.1 | 17.1 | 16.0 | 15.1 | 14.1 |
| --------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| Android   | 13   | 12L  | 11   | 10   | 9    | 8.1  | 7.1  |

## 设计

### 用户界面：Material Design

* [Material Design 3 设计文档](https://m3.material.io/)
* [Material Design 2 设计文档](https://m2.material.io/)
* [Material Design 1 设计文档](https://m1.material.io/)
* [Material Design 1 中文设计文档](https://www.mdui.org/design/)（非官方） - MDUI

## 评价

<meter id="fuel" min="0" max="50" low="25" high="40" optimum="45" :value="average*10"></meter>
{{ average }} 分（{{ scoredBy }} 人打分）

::: tip
如果您需要打分，请点击文末“帮助我们改善此页面”手动编辑此页进行打分。
:::

### 优点

* 拥有统一的设计风格
* 拥有录音机、录屏、计算器等常用工具
* 适配积极（包括第三方）
* 系统版本可以准确对应安卓版本

### 缺点

* 系统相对简陋

## 参考链接

* [\[ROM\]\[prague\]\[11\] LineageOS 18.1 for Huawei P8 Lite 2017](https://forum.xda-developers.com/t/rom-prague-11-lineageos-18-1-for-huawei-p8-lite-2017.4275551/) - XDA Forums
* [\[𝑹𝑶𝑴\]\[𝟏𝟑\]LineageOS 20.0 unofficial\[𝑶𝑵𝑬𝑷𝑳𝑼𝑺 𝟔&6T\]\[Gapps\]\[OTA updates\]\[SafetyNet\]\[TWRP\]](https://forum.xda-developers.com/t/rom-13-lineageos-20-0-unofficial-oneplus-6-6t-gapps-ota-updates-safetynet-twrp.4494053/) - XDA Forums
* [\[ROM\]\[I9190/I9192/I9195/L520/R890\]\[Unofficial\]\[10.0.0\] LineageOS 17.1 for S4 Mini](https://forum.xda-developers.com/t/rom-i9190-i9192-i9195-l520-r890-unofficial-10-0-0-lineageos-17-1-for-s4-mini.4045147/) - XDA Forums
* [Info about barbet](https://wiki.lineageos.org/devices/barbet/) - LineageOS Wiki

声明：图片均来源于网络。如果侵犯了您的权力，请[联系我](mailto:jesse205@qq.com)，我会尽快删除。

<script setup>
import { h, ref } from 'vue'

const scoreList = [
    {
        name: "jesse205",
        score: 4.5
    },
]

let allScore = 0

for (let item of scoreList){
    allScore += item.score
}

const average = allScore/scoreList.length
const scoredBy = scoreList.length

</script>
