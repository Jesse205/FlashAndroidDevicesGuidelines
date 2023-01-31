import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '刷机指南',
    description: '很详细的刷机指南',
    theme: defaultTheme({
        colorModeSwitch: true,
        navbar: [
            {
                text: '快速开始',
                children: [
                    { text: '解锁 Bootloader', link: '/fast/unlock/README.md' },
                    { text: '下载刷机包', link: '/fast/download.md' },
                    { text: '刷入刷机包', link: '/fast/flash.md' },
                ]
            },
            {
                text: '基础知识',
                children: [
                    { text: '名词集', link: '/normal/noun.md' },
                ]
            },
            {
                text: '深入指南',
                children: []
            }
        ],
        repo: 'https://gitee.com/Jesse205/FlashAndroidDevicesGuidelines',
        repoLabel: 'Gitee',
        editLink: true,
        editLinkText: '帮助我们改善此页面！',
        docsRepo: 'https://gitee.com/Jesse205/FlashAndroidDevicesGuidelines',
        docsBranch: 'master',
    })
})

