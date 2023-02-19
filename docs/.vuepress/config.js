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
                    { text: '解锁 Bootloader', link: '/fast/unlock/' },
                    { text: '下载刷机包', link: '/fast/download/' },
                    { text: '刷入系统', link: '/fast/flash/system.md' },
                ]
            },
            {
                text: '基础知识',
                children: [
                    { text: '选购手机', link: '#' },
                    { text: '安装软件', link: '#' },
                    { text: '名词集', link: '/normal/noun.html' },
                    { text: '分区和映像', link: '/normal/partitions/' },
                    { text: 'ADB', link: '#' },
                    { text: '刷机包', link: '#' },
                ]
            },
            {
                text: '深入指南',
                children: [
                    { text: '高级名词集', link: '#' },
                    { text: '系统分区及结构', link: '#' },
                    {
                        text: '编译 ROM',
                        children: [
                            { text: '配置环境', link: '#' },
                            { text: '同步源代码', link: '#' },
                            { text: '获取设备源代码', link: '#' },
                            { text: '编译', link: '#' },
                            { text: '排错', link: '#' },
                        ]
                    }
                ]
            }
        ],
        repo: 'https://gitee.com/Jesse205/FlashAndroidDevicesGuidelines',
        repoLabel: 'Gitee',
        editLink: true,
        editLinkText: '帮助我们改善此页面！',
        docsRepo: 'https://gitee.com/Jesse205/FlashAndroidDevicesGuidelines',
        docsBranch: 'master',
        docsDir: 'docs',
        lastUpdated: true,
        lastUpdatedText: '最近更新',
        contributors: true,
        contributorsText: '贡献者',
        tip: '提示',
        warning: '警告',
        danger: '危险',
        backToHome: '返回首页',
        openInNewWindow: '在新标签页内打开',
        toggleColorMode: '夜间模式',
        toggleSidebar: '切换侧边栏',

    })
})

