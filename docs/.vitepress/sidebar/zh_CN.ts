import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.SidebarItem[] = [ 
    {
        text: "指南",
        collapsed: false,
        items: [
            {text: "主页", link: "/zh_CN/"},
            {text: "我们的团队", link: "/zh_CN/introduce"}
        ]
    },
    {
        text: "MinecraftLaunch",
        collapsed: false,
        items: [
            {text: "简介", link: "/zh_CN/minecraftlaunch/"},
            {text: "安装", link: "/zh_CN/minecraftlaunch/install" },
            {text: "启动器", link: "/zh_CN/minecraftlaunch/launcher" },
            {
                text: "解析器",
                link: "/zh_CN/minecraftlaunch/resolvers/",
                items: [
                    {text: "游戏档案解析器", link: "/zh_CN/minecraftlaunch/resolvers/"},
                    {text: "账户档案解析器", link: "/zh_CN/minecraftlaunch/resolvers/"}
                ]
            },
            {
                text: "验证器",
                collapsed: false,
                link: "/zh_CN/minecraftlaunch/authenticators/",
                items:[
                    {text: "Offline 验证器", link: "/zh_CN/minecraftlaunch/authenticators/offline"},
                    {text: "Yggdrasil 验证器", link: "/zh_CN/minecraftlaunch/authenticators/yggdrasil"},
                    {text: "Microsoft 验证器", link: "/zh_CN/minecraftlaunch/authenticators/microsoft"}
                ]
            },
            {
                text: "安装器",
                collapsed: false,
                link: "/zh_CN/minecraftlaunch/installers/",
                items: [
                    {text: "Vanllia 安装器", link: "/zh_CN/minecraftlaunch/installers/vanllia"},
                    {text: "Forge 安装器", link: "/zh_CN/minecraftlaunch/installers/forge"},
                    {text: "Fabric 安装器", link: "/zh_CN/minecraftlaunch/installers/fabric"},
                    {text: "Quilt 安装器", link: "/zh_CN/minecraftlaunch/installers/quilt"},
                    {text: "Optifine 安装器", link: "/zh_CN/minecraftlaunch/installers/optifine"}
                ]
            },
            {
                text: "检查器",
                collapsed: false,
                link: "/zh_CN/minecraftlaunch/checkers/",
                items: [
                    {text: "游戏资源检查器", link: "/zh_CN/minecraftlaunch/checkers/resource"},
                ]
            },
            {
                text: "搜寻器",
                collapsed: false,
                link: "/zh_CN/minecraftlaunch/fetchers/",
                items: [
                    {text: "Java 搜寻器", link: "/zh_CN/minecraftlaunch/fetchers/java"},
                    {text: "Curseforge 搜寻器", link: "/zh_CN/minecraftlaunch/fetchers/curseforge"},
                ]
            },
        ]
    },
    {
        text: "WonderLab",
        collapsed: false,
        items: [
            {text: "简介", link: "/zh_CN/wonderlab/index"},
            {text: "分支版本信息", link: "/zh_CN/wonderlab/branch_info"},
            {text: "安装步骤", link: "/zh_CN/wonderlab/install"},
            {text: "常见问题", link: "/zh_CN/wonderlab/faq"}
        ]
    }
];

export default sidebar;
