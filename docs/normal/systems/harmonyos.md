# HarmomyOS

<img class="banner-img" src="./images/logo/hmos.png" alt="LOGO"/>

HarmonyOS 是新一代的智能终端操作系统，为不同设备的智能化、互联与协同提供了统一的语言，带来简捷、流畅、连续、安全可靠的全场景交互体验。

* __官方网站__：<https://www.harmonyos.com/>
  * __HarmonyOS 3 官网__：<https://consumer.huawei.com/cn/harmonyos-3/>
  * __HarmonyOS 2 官网__：<https://consumer.huawei.com/cn/harmonyos/>
* __下载地址__：
  * __官方__：官方未提供
  * __Huawei Firm Finder__ <Badge type="warning" text="第三方" /> ：<https://professorjtj.github.io/>

## 屏幕截图

* __HarmonyOS 2__：

<img src="https://developer.harmonyos.com/resource/image/release2/design/pic_developer_design_24-617.jpg" width="600" alt="概览" title="概览"/>
<img src="https://genk.mediacdn.vn/139269124445442048/2021/2/5/8-1-1612512545597369019106.jpg" width="350" alt="早期关于" title="早期关于"/>
<img src="https://i0.wp.com/techtrendske.co.ke/wp-content/uploads/2021/02/harmony-os-with-emui-03.jpg?fit=1208%2C906&ssl=1&is-pending-load=1" width="350" alt="设置与浏览器搜索" title="设置与浏览器搜索"/>
<img src="https://5gmobilephone.net/wp-content/uploads/2021/06/HarmonyOS-2.0-Service.jpg" width="600" alt="平板桌面" title="平板桌面"/>
<img src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/harmonyos/harmonyos2/img/interactive/controlCenter-ie.png" width="600" alt="平板控制中心" title="平板控制中心"/>

## 兼容 Android

华为自 HarmonyOS 2 开始，已不再是一个 EMUI 对应一个版本。以下是 HarmonyOS 对应的安卓版本：

| HarmonyOS 版本 \ Android 版本 | Android 9 | Android 10 | Android 11 | Android 12 |
| ----------------------------- | --------- | ---------- | ---------- | ---------- |
| HarmonyOS 3.1                 | 未知      | 未知       | 未知       | 未知       |
| HarmonyOS 3.0                 | 未知      | √          | 未知       | √          |
| HarmonyOS 2.0                 | √         | √          | 未知       | 未知       |

## 设计

### 用户界面：HarmonyOS Design

* [设计文档](https://developer.harmonyos.com/cn/design/)

### 字体：HarmonyOS Sans

* [官网下载](https://developer.harmonyos.com/resource/image/design/resource/download/general/HarmonyOS-Sans.zip)

### 动画

* [鸿蒙动画解析][animation]

## 评价

<meter id="fuel" min="0" max="50" low="25" high="40" optimum="45" :value="average*10"></meter>
{{ average }} 分（{{ scoredBy }} 人打分）

::: tip
如果您需要打分，请点击文末“帮助我们改善此页面”手动编辑此页进行打分。
:::

### 优点

* 拥有统一的设计风格

### 缺点

* 无法关闭纯净模式，限制安装软件
* 广告多，系统臃肿
* 系统版本无法准确对应安卓版本
* 限制用户更换桌面

## 参考链接

* [Harmonyos Logo](https://cn.bing.com/images/search?q=Harmonyos+Logo) - Bing images
* [harmonyos界面](https://image.baidu.com/search/index?tn=baiduimage&word=harmonyos%E7%95%8C%E9%9D%A2) - 百度图片搜索
* [华为鸿蒙HarmonyOS评测：不仅仅是手机系统](https://ee.ofweek.com/2021-06/ART-8330-2818-30502841.html)
* [几斤几两？华为鸿蒙系统动画超细解析（对比iOS/MIUI）【STRAY】][animation] - 哔哩哔哩

[animation]: https://www.bilibili.com/video/BV1rr4y1C7Nz/

声明：图片均来源于网络。如果侵犯了您的权力，请[联系我](mailto:jesse205@qq.com)，我会尽快删除。

<script setup>
import { h, ref } from 'vue'

// 在这里添加数据即可打分
const scoreList = [
    {
        name: "jesse205",
        score: 3.5
    },
]

let allScore = 0

for (let item of scoreList){
    allScore += item.score
}

const average = allScore/scoreList.length
const scoredBy = scoreList.length

</script>
