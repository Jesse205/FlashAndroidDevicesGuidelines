import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "刷机指南",
  description: "不仅仅是刷机指南",
  lastUpdated: this,
  base: '/FlashAndroidDevicesGuidelines',
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
          { text: '下载 ROM', link: '/fast/download/' },
          { text: '刷入 ROM', link: '/fast/flash/system.html' },
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
          { text: '名词集', link: '/normal/noun.html' },
          { text: '操作系统', link: '/normal/systems/' },
          { text: '分区和映像', link: '/normal/partitions/' },
          { text: '各种模式', link: '/normal/modes/' },
          { text: '安装软件', link: '/normal/installApk/' },
          // { text: '刷机包', link: '#' },
        ]
      },
      {
        text: '深入“刷机”',
        activeMatch: '/details/',
        items: [
          // { text: '高级名词集', link: '#' },
          // { text: '系统分区及结构', link: '#' },,
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
        activeMatch: '/faq/|/tools/|/rollover/|/rescuing/',
        items: [
          { text: '常见问题与解答', link: '/faq/' },
          { text: '基本知识', link: '/faq/knowledge.html' },
          {
            text: '常用工具',
            link: '/tools/',
            activeMatch: '/tools/',
          },
          {
            text: '翻车案例',
            link: '/rollover/',
            activeMatch: '/rollover/',
          },
          {
            text: '救砖指南',
            link: '/rescuing/',
            activeMatch: '/rescuing/',
          },
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
              collapsed: true,
              items: [
                { text: '华为', link: '/fast/unlock/huawei.html' },
                { text: '小米', link: '/fast/unlock/xiaomi.html' },
              ]
            },
            { text: '下载 ROM', link: '/fast/download/' },
            { text: '刷入 ROM', link: '/fast/flash/system.html' },
          ],
        },
        {
          text: '更多教程',
          items: [
            { text: '刷入 Recovery', link: '/fast/flash/recovery.html' },
            {
              text: '获取 Root',
              link: '/fast/install/root/',
              collapsed: true,
              items: [
                { text: '华为', link: '/fast/install/root/huawei/' },
                { text: '小米', link: '/fast/install/root/xiaomi/' },
              ],
            },
            { text: '安装 Xposed', link: '/fast/install/xposed/' },

          ]
        }
      ],
      '/normal/': [
        {
          text: '基础知识',
          items: [
            { text: '名词集', link: '/normal/noun.html' },
            {
              text: '操作系统',
              link: '/normal/systems/',
              collapsed: true,
              items: [
                { text: 'HarmonyOS', link: '/normal/systems/harmonyos.html' },
                { text: 'MIUI', link: '/normal/systems/miui.html' },
                { text: 'LineageOS', link: '/normal/systems/lineageos.html' },
                { text: 'PixelExperience', link: '/normal/systems/pixelexperience.html' },
                { text: 'Havoc OS', link: '/normal/systems/havocos.html' },
                { text: 'Windows', link: '/normal/systems/windows.html' },
                { text: '百度云 OS', link: '/normal/systems/baiduos.html' },
              ],
            },
            {
              text: '分区和映像',
              link: '/normal/partitions/',
              collapsed: true,
              items: [
                { text: '华为', link: '/normal/partitions/huawei.html' },
              ]
            },
            {
              text: '各种模式',
              link: '/normal/modes/',
              collapsed: true,
              items: [
                { text: '华为', link: '/normal/modes/huawei.html' },
                { text: '小米', link: '/normal/modes/xiaomi.html' },
              ]
            },
            {
              text: '安装软件',
              link: '/normal/installApk/',
              collapsed: true,
              items: [
                { text: 'EMUI 类', link: '/normal/installApk/emui.html' },
              ]
            },

          ],
        },
        {
          text: '危险权限',
          items: [
            {
              text: 'Root',
              link: '/normal/danger_permissions/root/',
              collapsed: true,
              items: [
                { text: '让 SuperSU 接管权限', link: '/normal/danger_permissions/root/to_supersu.html' },
              ]
            },
            {
              text: 'Xposed',
              link: '/normal/danger_permissions/xposed/',
            },
            {
              text: 'ADB',
              link: '/normal/danger_permissions/adb/',
            },
            {
              text: '设备所有者',
              link: '/normal/danger_permissions/device_owner/',
            },
          ]
        }
      ],
      '/faq/|/rollover/': [
        {
          text: '常见问题与解答',
          link: '/faq/',
          items: [
            { text: '华为刷机', link: '/faq/huawei.html' },
          ]
        },
        {
          text: '其他内容',
          items: [
            { text: '基本知识', link: '/faq/knowledge.html' },
            { text: '文档说明', link: '/faq/documents.html' },
            { text: '翻车案例', link: '/rollover/' },
          ]
        }
      ],
      '/tools/': [
        {
          text: '常用工具',
          link: '/tools/',
          items: [
            { text: '华为专用', link: '/tools/huawei/' },
            { text: '小米专用', link: '/tools/xiaomi/' },
          ]
        },
        {
          text: '令人惊叹',
          items: [
            { text: 'Root 相关', link: '/normal/danger_permissions/root/index.md#awesome-root-令人惊叹的-root' },
            { text: 'Xposed 相关', link: '/normal/danger_permissions/xposed/index.md#awesome-xposed-令人惊叹的-xposed' },
            { text: 'ADB 相关', link: '/normal/danger_permissions/adb/index.md#awesome-adb-令人惊叹的-adb' },
            { text: '设备所有者相关', link: '/normal/danger_permissions/device_owner/index.md#awesome-device-owner-令人惊叹的设备所有者' },
          ]
        }
      ]
    },

    socialLinks: [
      {
        icon: {
          svg: '<svg role="img" t="1672577881896" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1932" width="128" height="128"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" p-id="1933"></path></svg>'
        },
        link: 'https://gitee.com/Jesse205/FlashAndroidDevicesGuidelines'
      },
      { icon: 'github', link: 'https://github.com/Jesse205/FlashAndroidDevicesGuidelines' }
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
  },
  markdown: {
    lineNumbers: true,
  }
})
