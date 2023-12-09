import nav from "./navBar/zhCN";
import { sidebar } from "./sidebar/enUS";
import { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    description: 'Blessing Studio Terminal Archive',
    themeConfig: {
        nav,
        sidebar,

        docFooter: {
            prev: '上一页',
            next: '下一页',
        },

        sidebarMenuLabel: '归档',
        lastUpdatedText: '更新于',
        darkModeSwitchLabel: '外观',
        returnToTopLabel: '返回顶部',

        editLink: {
            pattern: `https://github.com/Blessing-Studio/blessing-studio.github.io/docs/edit/main/:path`,
            text: '在 GitHub 上编辑此页',
        },

        footer: {
            message: '本文档遵循 MIT 协议，来点个 Star 嘛~',
            copyright: `Copyright © ${new Date().getFullYear()} Blessing Studio`
        }
    }
};