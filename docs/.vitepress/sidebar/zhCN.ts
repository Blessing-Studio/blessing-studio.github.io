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
            {text: "简介", link: "/zhCN/minecraftlaunch/"},
            { text: '安装', link: '/zhCN/minecraftlaunch/install' },
            { text: '启动器', link: '/zhCN/minecraftlaunch/launcher' },
            {
                text: "解析器",
                link: "/zhCN/minecraftlaunch/resolvers/",
                items: [
                    {text: "游戏档案解析器", link: "/zhCN/minecraftlaunch/resolvers/"},
                    {text: "账户档案解析器", link: "/zhCN/minecraftlaunch/resolvers/"}
                ]
            },
            {
                text: "验证器",
                collapsed: false,
                link: "/zhCN/minecraftlaunch/authenticators/",
                items:[
                    {text: "Offline 验证器", link: "/zhCN/minecraftlaunch/authenticators/offline"},
                    {text: "Yggdrasil 验证器", link: "/zhCN/minecraftlaunch/authenticators/yggdrasil"},
                    {text: "Microsoft 验证器", link: "/zhCN/minecraftlaunch/authenticators/microsoft"}
                ]
            },
            {
                text: "安装器",
                collapsed: false,
                link: "/zhCN/minecraftlaunch/installers/",
                items: [
                    {text: "Vanllia 安装器", link: "/zhCN/minecraftlaunch/installers/vanllia"},
                    {text: "Forge 安装器", link: "/zhCN/minecraftlaunch/installers/forge"},
                    {text: "Fabric 安装器", link: "/zhCN/minecraftlaunch/installers/fabric"},
                    {text: "Quilt 安装器", link: "/zhCN/minecraftlaunch/installers/quilt"},
                    {text: "Optifine 安装器", link: "/zhCN/minecraftlaunch/installers/optifine"}
                ]
            },
            {
                text: "检查器",
                collapsed: false,
                link: "/zhCN/minecraftlaunch/checks/",
                items: [
                ]
            },
            {
                text: "搜寻器",
                collapsed: false,
                link: "/zhCN/minecraftlaunch/fetchers/",
                items: [
                    {text: "Java 搜寻器", link: "/zhCN/minecraftlaunch/fetchers/java"},
                ]
            },
        ]
    }
];

export default sidebar;