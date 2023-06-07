# PixelExperience

<img class="cover-img" src="./images/logo/pe_cover.webp" alt="LOGO"/>

拥有 Pixel 的体验，附带谷歌的 APP，有时会简称为 PE。

* __官方网站__：<https://download.pixelexperience.org/>
* __官方下载__：<https://download.pixelexperience.org/>

## 屏幕截图

* __Android 12L__：

<ScreenshotList :items="a12LScreenshotList" />

::: details 历史版本

* __Android 9.0__：

<ScreenshotList :items="a9ScreenshotList" />

:::

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

* 完美的 Material Design 设计，并且为 Google 风格
* 拥有录音机、录屏、计算器等常用工具
* 适配积极（包括第三方）
* 内置 Gapps

### 缺点

* 系统相对简陋

## 参考链接

* [\[ROM\]\[9.0\]\[UNOFFICIAL\] Pixel Experience 9.0 \[09 Feb 2019\]](https://forum.xda-developers.com/t/rom-9-0-unofficial-pixel-experience-9-0-09-feb-2019.3876747/) - XDA Forums
* [\[EOL\] \[ROM\] \[A12L\] Pixel Experience | UNOFFICIAL | HAYDN/IN | - by Termination5646](https://forum.xda-developers.com/t/eol-rom-a12l-pixel-experience-unofficial-haydn-in-by-termination5646.4421237/) - XDA Forums
* [\[ROM\] \[13\] \[lavender\] \[OFFICIAL\] PixelExperience \[AOSP\]](https://forum.xda-developers.com/t/rom-13-lavender-official-pixelexperience-aosp.4470689/)

声明：图片均来源于网络。如果侵犯了您的权力，请[联系我](mailto:jesse205@qq.com)，我会尽快删除。

<script setup>
import { h, ref } from 'vue'

// Score
// 在这里添加数据即可打分
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

// Screenshot
const a12LScreenshotList = [
    {
        src: 'https://forum.xda-developers.com/attachments/screenshot_20220324-202403_settings-png.5569961/',
        title: '关于'
    },
    {
        src: 'https://forum.xda-developers.com/attachments/screenshot_20220324-202448_settings-png.5569955/',
        title: '铃声设置'
    },
    {
        src: 'https://forum.xda-developers.com/attachments/screenshot_20220324-202445_settings-png.5569957/',
        title: '铃声设置'
    }
]

const a9ScreenshotList = [
    {
        src: 'https://forum.xda-developers.com/attachments/screenshot_20181208-052947-jpg.4660871/',
        title: '主页面'
    },
    {
        src: 'https://forum.xda-developers.com/attachments/screenshot_20181208-050904-png.4660872/',
        title: '关于'
    }
]
</script>
