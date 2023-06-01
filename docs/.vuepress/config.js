import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

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
                    { text: '刷入系统', link: '/fast/flash/system.html' },
                    {
                        text: '更多教程',
                        children: [
                            { text: '刷入 Recovery', link: '/fast/flash/recovery.html' },
                            { text: '获取 Root', link: '/fast/install/root/' },
                            { text: '安装 Xposed', link: '/fast/install/xposed/' },
                        ]
                    }
                ]
            },
            {
                text: '基础知识',
                children: [
                    // { text: '选购手机', link: '#' },
                    { text: '安装软件', link: '/normal/installApk/' },
                    { text: '操作系统概览', link: '/normal/systems/' },
                    { text: '名词集', link: '/normal/noun.html' },
                    { text: '分区和映像', link: '/normal/partitions/' },
                    // { text: '刷机包', link: '#' },
                ]
            },
            {
                text: '深入“刷机”',
                children: [
                    // { text: '高级名词集', link: '#' },
                    // { text: '系统分区及结构', link: '#' },
                    { text: '工具的使用', link: '/tools/' },
                    {
                        text: '编译 ROM',
                        children: [
                            // { text: '配置环境', link: '#' },
                            // { text: '同步源代码', link: '#' },
                            // { text: '获取设备源代码', link: '#' },
                            // { text: '编译', link: '#' },
                            // { text: '排错', link: '#' },
                        ]
                    }
                ]
            },
            {
                text: '其他内容',
                children: [
                    { text: '翻车案例', link: '/rollover/' },
                    { text: '常识问题与解答', link: '/faq.html' },
                    { text: '常见问题与解答', link: '/faq/' },
                    
                ]
            }
        ],
        sidebar: {
            '/fast/': [
                {
                    text: '快速开始',
                    children: [
                        '/fast/unlock/',
                        '/fast/download/',
                        '/fast/flash/system.html',
                    ],
                },
                {
                    text: '更多教程',
                    children: [
                        '/fast/flash/recovery.html',
                        '/fast/install/root/',
                        '/fast/install/xposed/'
                    ]
                }
            ],
            '/normal/': [
                {
                    text: '基础知识',
                    children: [
                        '/normal/installApk/',
                        '/normal/systems/',
                        '/normal/noun.html',
                        '/normal/partitions/',
                    ],
                },
            ],
            '/normal/systems': [
                {
                    text: '操作系统',

                    children: [
                        {
                            text: '概览',
                            link: '/normal/systems/',
                        },
                        '/normal/systems/harmonyos.html',
                        '/normal/systems/miui.html',
                        '/normal/systems/lineageos.html',
                        '/normal/systems/pixelexperience.html',
                        '/normal/systems/havocos.html',
                        '/normal/systems/windows.html',
                        '/normal/systems/baiduos.html',
                    ],
                },
            ],
            // '/': 'auto'// 有bug，添加了这句会导致无法构建
        },
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

    }),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索',
                },
            },
        }),
    ],
})

