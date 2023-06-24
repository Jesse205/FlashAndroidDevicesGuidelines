import { ToolConfig } from '../ts/interfaces/tool.interfaces';

interface ToolCategory {
    items: ToolConfig[]
    title: string
}
const sortedTools: ToolCategory[] = [
    {
        title: '权限管理',
        items: [
            {
                name: 'Shizuku',
                url: 'https://shizuku.rikka.app/zh-hans/',
                license: 'Apache-2.0',
                info: '让你的应用直接使用系统 API'
            },
            {
                name: 'Dhizuku',
                url: 'https://github.com/iamr0s/Dhizuku',
                license: 'GPL-3.0',
                info: '参考 Shizuku 的设计思想，分享 DeviceOwner (设备所有者) 权限给其余应用'
            },
            {
                name: 'App Ops',
                url: 'https://appops.rikka.app/zh-hans/',
                developer: 'RikkaW',
                info: '方便地控制隐藏的 appops'
            }
        ]
    },
    {
        title: '编程开发',
        items: [
            {
                name: 'WADB',
                url: 'https://github.com/RikkaApps/WADB',
                license: 'Apache-2.0',
                info: '无线 ADB 的一个简单开关'
            },
            {
                name: 'Activity Manager',
                url: 'https://github.com/sdex/ActivityManager',
                license: 'Apache-2.0',
                info: '启动任何应用程序活动'
            },
        ]
    },
    {
        title: '冻结软件',
        items: [
            {
                name: '雹',
                url: 'https://github.com/aistra0528/Hail',
                license: 'GPL-3.0',
                info: '冻结 Android 应用',
                links: [
                    {
                        name: '酷安',
                        url: 'https://www.coolapk.com/apk/com.aistra.hail'
                    }
                ]
            }
        ]
    },
    {
        title: '应用安装器',
        items: [
            {
                name: 'InstallerX',
                url: 'https://github.com/iamr0s/InstallerX',
                license: 'GPL-3.0',
                info: '一款应用安装程序'
            },
            {
                name: 'SAI',
                url: 'https://github.com/Aefyr/SAI',
                license: 'GPL-3.0',
                info: '安卓分体式 APKs 安装程序'
            },
            {
                name: 'APK 安装程序-PC',
                url: 'https://github.com/Paving-Base/APK-Installer',
                license: 'GPL-3.0',
                info: '适用于 Windows 的安卓应用程序安装程序',
                links: [
                    {
                        name: 'Microsoft Store',
                        url: 'https://www.microsoft.com/store/productId/9P2JFQ43FPPG'
                    }
                ]
            }
        ]
    },
    {
        title: '文件管理',
        items: [
            {
                name: 'MT 管理器',
                url: 'https://mt2.cn/',
                info: 'Android 平台文件管理 & 逆向修改神器'
            },
            {
                name: '质感文件',
                url: 'https://github.com/zhanghai/MaterialFiles',
                license: 'GPL-3.0',
                info: '一个开源的 Material Design 文件管理器，适用于 Android 5.0+',
                links: [
                    {
                        name: '酷安',
                        url: 'https://www.coolapk.com/apk/me.zhanghai.android.files',
                    },
                    {
                        name: 'F-Droid',
                        url: 'https://f-droid.org/packages/me.zhanghai.android.files/'
                    }
                ]
            }
        ]
    },
    {
        title: '工具箱',
        items: [
            {
                name: '搞基工具箱',
                url: 'http://jamcz.com/gj2x2/',
                info: '一款源于PC版《搞机工具箱》的手机端工具'
            },
            {
                name: 'Mindows 工具箱-PC',
                url: 'https://mindows.cn/',
                info: '给你的 Android 设备刷上 Windows'
            },
            {
                name: 'Platform-Tools',
                commdline: true,
                url: '/tools/platform-tools.html',
                info: 'Android SDK 的一个组件'
            },
            {
                name: '搞基工具箱-PC',
                url: 'http://jamcz.com/gjgjx/',
                info: '利用 ADB 来控制手机的玩机工具'
            }
        ]
    },
    {
        title: '远程控制',
        items: [
            {
                name: 'Scrcpy-PC',
                url: 'https://github.com/Genymobile/scrcpy',
                info: '显示和控制你的安卓设备',
                license: 'ApaApache-2.0'
            }
        ]
    }
]
// 将sortedTools解包为tools
const tools: ToolConfig[] = []
sortedTools.forEach((category: ToolCategory) => {
    tools.push(...category.items)
})



export default tools