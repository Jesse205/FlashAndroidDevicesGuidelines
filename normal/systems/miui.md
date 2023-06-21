# MIUI

<img class="banner-cover" src="./images/logo/miui.webp" alt="LOGO"/>

* **官方网站**：<https://home.miui.com/>
* **下载地址**：
  * **官方下载**：小米官方 **部分开放** 国际版 MIUI 的下载，具体为只开放新上市机型的 MIUI 下载，而旧机型（比如小米 4）则没有开放下载链接。
    * [MIUI 卡刷包](https://new.c.mi.com/global/miuidownload/index)：点击右边的 「Select...」，选择手机名称，点击右边的「Submit」，点击「Download Full Rom」即可下载
    * [MIUI 线刷包](https://new.c.mi.com/global/miuidownload/detail/guide/1)：左上角切换到「Fastboot Update」，在「STEP 2」下面即可找到 MIUI 线刷包的下载链接「手机名称 Latest 区域 Stable Version Fastboot File Download」
  * **第三方下载**：如果小米官方没有开放你对机型对应的下载链接，那么你应该可以在第三方 MIUI 下载站下载 MIUI 官方包：
    * **下载 ROM**：<https://xiaomirom.com/> <Badge type="tip" text="推荐" />
    * **MIUI ROM 最新下载**：<https://miuirom.org/>
    * **MIUI 历史版本**：<https://miuiver.com/> <Badge type="warning" text="需要登录，安全性未知" />
    * **[MIUI正式版刷机包汇总](https://xiaomishequ.feishu.cn/sheets/shtcnsRTbwSvpUsaei6B04ogI6Z)** <Badge type="tip" text="帖子汇总" />

## 屏幕截图

暂无截图

## Android 版本

| MIUI 版本 \ Android 版本 | Android 9 | Android 10 | Android 11 | Android 12 | Android 13 | Android 14 |
| ------------------------ | --------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| MIUI14                   | 未知      | 未知       | 未知       | 未知       | 未知       | 未知       |
| MIUI13                   | 未知      | 未知       | √          | √          | 未知       | 未知       |
| MIUI12                   | 未知      | 未知       | 未知       | 未知       | 未知       | 未知       |
| MIUI11                   | 未知      | 未知       | 未知       | 未知       | 未知       | 未知       |
| MIUI10                   | 未知      | 未知       | 未知       | 未知       | 未知       | 未知       |
| MIUI9                    | 未知      | 未知       | 未知       | 未知       | 未知       | 未知       |

### 字体

* Mi Sans
* 小米兰亭 Pro

### 动画

* [MIUI 动画解析][animation]

## 评价

<meter id="fuel" min="0" max="50" low="25" high="40" optimum="45" :value="average*10"></meter>
{{ average }} 分（{{ scoredBy }} 人打分）

::: tip
如果您需要打分，请点击文末“在 Gitee 上编辑此页面”手动编辑此页进行打分。
:::

<Score :scoreList="scoreList" />

### 优点

* 可以关闭纯净模式

### 缺点

* 无统一的设计风格
* 广告超多，系统臃肿，有牛皮癣
* 系统版本无法准确对应安卓版本
* 对系统工具开发者不友好
* 拥有 MIUI 专属的开屏广告

## 相关链接

* 百科
  * MIUI: [360百科](https://baike.so.com/doc/5369087-5604931.html), [百度百科](https://baike.baidu.com/item/MIUI/8150208), [搜狗百科](https://baike.sogou.com/v20466533.htm)
  * [小米MIUI系统历代版本（部分）](https://baike.baidu.com/starmap/view?nodeId=a642e1fb59464a392c6f812d) - 百度百科

## 参考链接

* [网传小米 MIUI 13 测试版曝光：安卓 12、安卓 11 两个版本][13-RS]
* [难分伯仲？iOS VS MIUI 动画解析对比（超详细）][animation] - 哔哩哔哩

[animation]: https://www.bilibili.com/video/BV12h411e7p1/
[13-RS]: https://post.smzdm.com/p/aenzx5xz/

声明：图片均来源于网络。如果侵犯了您的权力，请[联系我](mailto:jesse205@qq.com)，我会尽快删除。

<script setup>

// 在这里添加数据即可打分
const scoreList = [
    {
        name: "Jesse205",
        score: 3
    },
]

</script>
