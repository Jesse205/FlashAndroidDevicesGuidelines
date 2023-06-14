import { defineConfig } from 'vitepress'
import { DefaultTheme } from 'vitepress/types/default-theme.d'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "刷机指南",
  description: "不仅仅是刷机指南",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: '本页内容',
    lastUpdatedText: '更新时间',
    darkModeSwitchLabel: '深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    outline: [2, 3],
    nav: [
      {
        text: '快速开始',
        activeMatch: '/fast/',
        items: [
          { text: '解锁 Bootloader', link: '/fast/unlock/', },
          { text: '下载刷机包', link: '/fast/download/' },
          { text: '刷入系统', link: '/fast/flash/system.html' },
          {
            text: '更多教程',
            items: [
              { text: '刷入 Recovery', link: '/fast/flash/recovery.html' },
              { text: '获取 Root', link: '/fast/install/root/' },
              { text: '安装 Xposed', link: '/fast/install/xposed/' },
            ]
          }
        ]
      },
      {
        text: '基础知识',
        activeMatch: '/normal/',
        items: [
          // { text: '选购设备', link: '#' },
          { text: '安装软件', link: '/normal/installApk/' },
          { text: '操作系统', link: '/normal/systems/' },
          { text: '名词集', link: '/normal/noun.html' },
          { text: '分区和映像', link: '/normal/partitions/' },
          // { text: '刷机包', link: '#' },
        ]
      },
      {
        text: '深入“刷机”',
        activeMatch: '/details/',
        items: [
          // { text: '高级名词集', link: '#' },
          // { text: '系统分区及结构', link: '#' },
          { text: '工具的使用', link: '/tools/' },
          {
            text: '编译 ROM',
            items: [
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
        activeMatch: '/faq/|/rollover/|/tools/',
        items: [
          { text: '常见问题与解答', link: '/faq/' },
          { text: '基本知识', link: '/faq/knowledge.html' },
          { text: '翻车案例', link: '/rollover/' },
          { text: '常用工具', link: '/tools/' },
        ]
      }
    ],

    sidebar: {
      '/fast/': [
        {
          text: '快速开始',
          items: [
            {
              text: '解锁 Bootloader', link: '/fast/unlock/',
              items: [
                { text: '华为', link: '/fast/unlock/huawei.html' },
                { text: '小米', link: '/fast/unlock/xiaomi.html' },
              ]
            },
            { text: '下载 ROM', link: '/fast/download/' },
            { text: '刷入系统', link: '/fast/flash/system.html' },
          ],
        },
        {
          text: '更多教程',
          items: [
            { text: '刷入 Recovery', link: '/fast/flash/recovery.html' },
            { text: '获取 Root', link: '/fast/install/root/' },
            { text: '安装 Xposed', link: '/fast/install/xposed/' },

          ]
        }
      ],
      '/normal/systems': [
        {
          text: '操作系统',
          link: '/normal/systems/',
          items: [
            { text: 'HarmonyOS', link: '/normal/systems/harmonyos.html' },
            { text: 'MIUI', link: '/normal/systems/miui.html' },
            { text: 'LineageOS', link: '/normal/systems/lineageos.html' },
            { text: 'PixelExperience', link: '/normal/systems/pixelexperience.html' },
            { text: 'Havoc OS', link: '/normal/systems/havocos.html' },
            { text: 'Windows', link: '/normal/systems/windows.html' },
            { text: '百度云 OS', link: '/normal/systems/baiduos.html' },
            // '/normal/systems/harmonyos.html',
            // '/normal/systems/miui.html',
            // '/normal/systems/lineageos.html',
            // '/normal/systems/pixelexperience.html',
            // '/normal/systems/havocos.html',
            // '/normal/systems/windows.html',
            // '/normal/systems/baiduos.html',
          ],
        },
      ],
      '/normal/': [
        {
          text: '基础知识',
          items: [
            { text: '操作系统', link: '/normal/systems/' },
            // '/normal/installApk/',
            // '/normal/systems/',
            // '/normal/noun.html',
            // '/normal/partitions/',
          ],
        },
      ],
      '/faq/': [
        { text: '常见问题与解答', link: '/faq/' },
        { text: '常见知识', link: '/faq/knowledge.html' },
        { text: '翻车案例', link: '/rollover/' },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    editLink: {
      pattern: 'https://gitee.com/Jesse205/FlashAndroidDevicesGuidelines/edit/master/:path',
      text: '在 Gitee 上编辑此页面',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: "搜索"
          },
          modal: {
            displayDetails: '显示具详情信息',
            resetButtonTitle: '清空内容',
            backButtonTitle: '关闭搜索',
            noResultsText: '未找到',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '进入',
              navigateText: '导航',
              navigateUpKeyAriaLabel: '向上',
              navigateDownKeyAriaLabel: '向下',
              closeText: '关闭',
              closeKeyAriaLabel: '退出'
            }
          }
        }
      }
    }
  }
})
