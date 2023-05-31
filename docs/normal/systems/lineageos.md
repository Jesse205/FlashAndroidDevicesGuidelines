# Lineage OS

<img class="banner-img" src="./images/logo/lineage.svg" alt="LOGO"/>

* 官网链接：<https://lineageos.org/>
* 官方下载地址：<https://wiki.lineageos.org/devices/>
* LineageOS ROMs（第三方）：<http://lineageosroms.com/>（下载历史版本）

## 屏幕截图

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

* 拥有统一的设计风格
* 拥有录音机、录屏、计算器等常用工具
* 适配积极（包括第三方）
* 系统版本可以准确对应安卓版本

### 缺点

* 系统相对简陋

## 参考链接

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
