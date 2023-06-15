# 百度云 OS <Badge type="danger" text="已停更" />

<img class="banner-img" src="./images/logo/baiduos.jpg" alt="LOGO"/>

百度云 OS，原百度云 ROM

百度云 OS 是基于 Android 4.0 及以上版本进行开发的第三方智能手机系统，诞生于2012年6月4日。

已经发布 6 个正式版本，迭代了 67 个公测版本，共适配 150+ 款机型。初次刷机需要使用到百度云一键刷机工具，熟悉的云友也可以卡刷，而后可以通过 OTA 方式进行无线升级。

百度云OS公测版每两周更新一次，正式版约一季度更新一次。云友可以在“系统更新”中检查OTA版本的升级。

::: warning
[百度云 OS 于 2015 年 3 月 11 日起，暂停更新][2]。您的系统可能会无法接收安全补丁而充满漏洞，建议您更换其他操作系统。
:::

* __官方网站__：未知，且以已关闭
* __下载地址__：
  * __奇兔刷机__ <Badge type="warning" text="第三方" /> ：<http://rom.7to.cn/search.html?key=55m+5bqm5LqR>
  * [本站整理](../../fast/download/baiduos.md) <Badge type="warning" text="第三方" />

## 系统截图

* __公测版 V6__：

<div class="screenshotList">
<img src="http://file.7to.cn/uploads/romimages/201504/15/27666/a2.png" alt="主页面" title="主页面"/>
<img src="https://clubimg.club.vmall.com/data/attachment/forum/201502/26/232623ze9309999vxx490k.png" alt="应用抽屉" title="应用抽屉"/>
<img src="https://pcs4.clubstatic.lenovo.com.cn/data/attachment/forum/201503/14/223111t05acccqp08p52xc.png" alt="公测版67期 应用抽屉" title="公测版67期 应用抽屉"/>
</div>

## 评价

<meter id="fuel" min="0" max="50" low="25" high="40" optimum="45" :value="average*10"></meter>
{{ average }} 分（{{ scoredBy }} 人打分）

::: tip
如果您需要打分，请点击文末“在 Gitee 上编辑此页面”手动编辑此页进行打分。
:::
<Score />

### 优点

* 拥有统一的设计风格

### 缺点

* 跑路太快
* 系统版本无法准确对应安卓版本

## 参考链接

* [百度云OS][1] - 百度百科
* [百度云os](https://image.baidu.com/search/index?tn=baiduimage&word=%E7%99%BE%E5%BA%A6%E4%BA%91os) - 百度图片搜索
* [百度云os](https://cn.bing.com/images/search?q=%E7%99%BE%E5%BA%A6%E4%BA%91os) - Bing images

[1]: https://baike.baidu.com/item/%E7%99%BE%E5%BA%A6%E4%BA%91OS/15843959
[2]: https://xueshu.baidu.com/usercenter/paper/show?paperid=97bc40ae30fb3961ba6a4eeab48c1ab6&tn=SE_baiduxueshu_c1gjeupa&ie=utf-8&site=baike

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
