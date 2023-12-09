import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.SidebarItem[] = [ 
    {
        text: "指南",
        collapsed: false,
        items: [
            {text: "主页", link: "/"},
            {text: "我们的团队", link: '/zhCN/introduce'}
        ]
    },
    {
        text: "MinecraftLaunch",
        collapsed: false,
        items: [
            {text: "简介", link: "/zhCN/minecraftLaunch/"},
            { text: '安装', link: '/zhCN/minecraftlaunch/install' },
            { text: '启动器', link: '/zhCN/minecraftlaunch/launcher' },
            {
                text: "解析器",
                link: "/zhCN/projbobcat/resolvers/",
                items: [
                    {text: "游戏档案解析器", link: "/zhCN/minecraftlaunch/resolvers/"},
                    {text: "账户档案解析器", link: "/zhCN/minecraftlaunch/resolvers/"}
                ]
            },
            {
                text: "验证器",
                collapsed: false,
                link: "/zhCN/minecraftLaunch/authenticators/",
                items:[
                    {text: "Offline 验证器", link: "/zhCN/minecraftLaunch/authenticators/offline"},
                    {text: "Yggdrasil 验证器", link: "/zhCN/minecraftLaunch/authenticators/yggdrasil"},
                    {text: "Microsoft 验证器", link: "/zhCN/minecraftLaunch/authenticators/microsoft"}
                ]
            },
            {
                text: "安装器",
                collapsed: false,
                link: "/zhCN/minecraftLaunch/installers/",
                items: [
                    {text: "Fabric 安装器", link: "/zhCN/minecraftLaunch/installers/fabric"},
                    {text: "Forge 安装器", link: "/zhCN/minecraftLaunch/installers/forge"},
                    {text: "Optifine 安装器", link: "/zhCN/minecraftLaunch/installers/optifine"},
                    {text: "Quilt 安装器", link: "/zhCN/minecraftLaunch/installers/quilt"}
                ]
            },
            {
                text: "检查器",
                collapsed: false,
                link: "/zhCN/minecraftLaunch/checks/",
                items: [
                ]
            },
            {
                text: "搜寻器",
                collapsed: false,
                link: "/zhCN/minecraftLaunch/fetcher/",
                items: [
                ]
            },
        ]
    }
];

export default sidebar;