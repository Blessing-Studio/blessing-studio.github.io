import nav from "./navBar/enUS";
import { sidebar } from "./sidebar/enUS";
import { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    description: 'Blessing Studio Terminal Archive',
    themeConfig: {
        nav,
        sidebar,

        docFooter: {
            prev: 'Previous',
            next: 'Next',
        },

        sidebarMenuLabel: 'Archive',
        lastUpdatedText: 'Last updated on',
        darkModeSwitchLabel: 'Switch light/dark mode',
        returnToTopLabel: 'Return to top',

        editLink: {
            pattern: `https://github.com/Blessing-Studio/blessing-studio.github.io/docs/edit/main/:path`,
            text: 'Edit this page on GitHub',
        },

        footer: {
            message: 'Follow the MIT license. Add a star, please!',
            copyright: `Copyright © ${new Date().getFullYear()} Blessing Studio`
        }
    }
};