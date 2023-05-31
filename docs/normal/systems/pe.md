# PixelExperience

<img class="cover-img" src="./images/logo/pe_cover.webp" alt="LOGO"/>

拥有 Pixel 的体验，附带谷歌的 APP，有时会简称为 PE。

* [官方网站](https://download.pixelexperience.org/)

## 屏幕截图

* Android 12L

<div class="screenshotList">
<img src="https://forum.xda-developers.com/attachments/screenshot_20220324-202403_settings-png.5569961/" alt="关于" title="关于"/>
<img src="https://forum.xda-developers.com/attachments/screenshot_20220324-202448_settings-png.5569955/" alt="铃声设置" title="铃声设置"/>
<img src="https://forum.xda-developers.com/attachments/screenshot_20220324-202445_settings-png.5569957/" alt="铃声设置" title="铃声设置"/>
</div>

::: details 历史版本

* Android 9.0:

<div class="screenshotList">
<img src="https://forum.xda-developers.com/attachments/screenshot_20181208-052947-jpg.4660871/" alt="主页面" title="主页面"/>
<img src="https://forum.xda-developers.com/attachments/screenshot_20181208-050904-png.4660872/" alt="关于" title="关于"/>
</div>
:::

## 设计

### 用户界面：Material Design

* [M1 中文设计文档](https://www.mdui.org/design/)（非官方） - MDUI
* [M1 设计文档](https://m1.material.io/)
* [M2 设计文档](https://m2.material.io/)
* [M3 设计文档](https://m3.material.io/)

## 评价

<meter id="fuel" min="0" max="50" low="25" high="40" optimum="45" :value="average*10"></meter>
{{ average }} 分（{{ scoredBy }} 人打分）

::: tip
如果您需要打分，请点击末尾按钮请手动编辑此页进行打分。
:::

### 优点

* 拥有统一的设计风格，并且为 Google 风格
* 拥有录音机、录屏、计算器等常用工具
* 适配积极（包括第三方）

### 缺点

* 系统相对简陋

## 参考链接

* [\[ROM\]\[9.0\]\[UNOFFICIAL\] Pixel Experience 9.0 \[09 Feb 2019\]](https://forum.xda-developers.com/t/rom-9-0-unofficial-pixel-experience-9-0-09-feb-2019.3876747/) - XDA Developers
* [\[EOL\] \[ROM\] \[A12L\] Pixel Experience | UNOFFICIAL | HAYDN/IN | - by Termination5646](https://forum.xda-developers.com/t/eol-rom-a12l-pixel-experience-unofficial-haydn-in-by-termination5646.4421237/) - XDA Developers
* [\[ROM\] \[13\] \[lavender\] \[OFFICIAL\] PixelExperience \[AOSP\]](https://forum.xda-developers.com/t/rom-13-lavender-official-pixelexperience-aosp.4470689/)

声明：图片均来源于网络。如果侵犯了您的权力，请[联系我](mailto:jesse205@qq.com)，我会尽快删除。

<script setup>
import { h, ref } from 'vue'

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

</script>
