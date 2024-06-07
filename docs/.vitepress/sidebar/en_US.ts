import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.SidebarItem[] = [ 
    {
        text: "Introduction",
        collapsed: false,
        items: [
            {text: "Home", link: "/"},
            {text: "Our Team", link: "/en_US/introduce"}
        ]
    },
    {
        text: "MinecraftLaunch",
        collapsed: false,
        items: [
            {text: "Introduce", link: "/en_US/minecraftlaunch/"},
            {text: "Install", link: "/en_US/minecraftlaunch/install"},
            {text: "Launcher", link: "/en_US/minecraftlaunch/launcher"},
            {
                text: "解析器",
                link: "/en_US/minecraftlaunch/resolvers/",
                items: [
                    {text: "游戏档案解析器", link: "/en_US/minecraftlaunch/resolvers/"},
                    {text: "账户档案解析器", link: "/en_US/minecraftlaunch/resolvers/"}
                ]
            },
            {
                text: "验证器",
                collapsed: false,
                link: "/en_US/minecraftlaunch/authenticators/",
                items:[
                    {text: "Offline 验证器", link: "/en_US/minecraftlaunch/authenticators/offline"},
                    {text: "Yggdrasil 验证器", link: "/en_US/minecraftlaunch/authenticators/yggdrasil"},
                    {text: "Microsoft 验证器", link: "/en_US/minecraftlaunch/authenticators/microsoft"}
                ]
            },
            {
                text: "安装器",
                collapsed: false,
                link: "/en_US/minecraftlaunch/installers/",
                items: [
                    {text: "Fabric 安装器", link: "/en_US/minecraftlaunch/installers/fabric"},
                    {text: "Forge 安装器", link: "/en_US/minecraftlaunch/installers/forge"},
                    {text: "Optifine 安装器", link: "/en_US/minecraftlaunch/installers/optifine"},
                    {text: "Quilt 安装器", link: "/en_US/minecraftlaunch/installers/quilt"}
                ]
            },
            {
                text: "Checker",
                collapsed: false,
                link: "/en_US/minecraftlaunch/checks/",
                items: [
                ]
            },
            {
                text: "Searcher",
                collapsed: false,
                link: "/en_US/minecraftlaunch/fetcher/",
                items: [
                ]
            },
        ]
    },
    {
        text: "WonderLab",
        collapsed: false,
        items: [
            {text: "What's this", link: "/en_US/wonderlab/index"},
            {text: "Introduce", link: "/en_US/wonderlab/intro"},
            {text: "Branch & Version", link: "/en_US/wonderlab/branch_info"},
            {text: "Install", link: "/en_US/wonderlab/install"},
            {text: "Q & A", link: "/en_US/wonderlab/questions"}
        ]
    }
];

export default sidebar;