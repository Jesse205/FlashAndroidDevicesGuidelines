module.exports = {
    title: '刷机指南',
    description: '很详细的刷机指南',
    themeConfig: {
        nav: [
            {
                text: '快速开始',
                items: [
                    { text: '解锁 Bootloader', link: '/fast/unlock/' },
                    { text: '下载刷机包', link: '/fast/download.html' },
                    { text: '刷入刷机包', link: '/fast/flash.html' },
                ]
            },
            {
                text: '基础知识',
                items: [
                    { text: '名词集', link: '/normal/noun.html' },
                ]
            },
            {
                text: '深入指南',
                items: [

                ]
            }
        ],
        sidebar: 'auto',
        lastUpdated:'最后更新',
        repo: 'https://gitee.com/Jesse205/FlashAndroidDevicesGuidelines',
        repoLabel: 'Gitee',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！'
    }
}