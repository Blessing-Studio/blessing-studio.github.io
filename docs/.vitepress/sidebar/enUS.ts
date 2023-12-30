import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.SidebarItem[] = [ 
    {
        text: "Introduction",
        collapsed: false,
        items: [
            {text: "Home", link: "/"},
            {text: "Our Team", link: '/enUS/introduce'}
        ]
    },
    {
        text: "MinecraftLaunch",
        collapsed: false,
        items: [
            {text: "简介", link: "/enUS/minecraftlaunch/"},
            { text: '安装', link: '/enUS/minecraftlaunch/install' },
            { text: '启动器', link: '/enUS/minecraftlaunch/launcher' },
            {
                text: "解析器",
                link: "/enUS/minecraftlaunch/resolvers/",
                items: [
                    {text: "游戏档案解析器", link: "/enUS/minecraftlaunch/resolvers/"},
                    {text: "账户档案解析器", link: "/enUS/minecraftlaunch/resolvers/"}
                ]
            },
            {
                text: "验证器",
                collapsed: false,
                link: "/zhCN/minecraftlaunch/authenticators/",
                items:[
                    {text: "Offline 验证器", link: "/enUS/minecraftlaunch/authenticators/offline"},
                    {text: "Yggdrasil 验证器", link: "/enUS/minecraftlaunch/authenticators/yggdrasil"},
                    {text: "Microsoft 验证器", link: "/enUS/minecraftlaunch/authenticators/microsoft"}
                ]
            },
            {
                text: "安装器",
                collapsed: false,
                link: "/enUS/minecraftlaunch/installers/",
                items: [
                    {text: "Fabric 安装器", link: "/enUS/minecraftlaunch/installers/fabric"},
                    {text: "Forge 安装器", link: "/enUS/minecraftlaunch/installers/forge"},
                    {text: "Optifine 安装器", link: "/enUS/minecraftlaunch/installers/optifine"},
                    {text: "Quilt 安装器", link: "/enUS/minecraftlaunch/installers/quilt"}
                ]
            },
            {
                text: "检查器",
                collapsed: false,
                link: "/enUS/minecraftlaunch/checks/",
                items: [
                ]
            },
            {
                text: "搜寻器",
                collapsed: false,
                link: "/enUS/minecraftlaunch/fetcher/",
                items: [
                ]
            },
        ]
    }
];

export default sidebar;