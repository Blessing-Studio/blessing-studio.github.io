import nav from "./navBar/zh_CN";
import { sidebar } from "./sidebar/zh_CN";
import { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
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
            pattern: `https://github.com/Blessing-Studio/blessing-studio.github.io/edit/master/docs/:path`,
            text: '在 GitHub 上编辑此页',
        },

        socialLinks: [
            {
              icon: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741 0 31.345-16.136 72.247-51.051 101.786 16.842 5.192 54.843 19.167 45.803 34.421-7.316 12.343-125.51 7.881-159.632 4.037-34.122 3.844-152.316 8.306-159.632-4.037-9.045-15.25 28.918-29.214 45.783-34.415-34.92-29.539-51.059-70.445-51.059-101.792 0 0-33.334 54.134-44.859 52.741-5.37-.65-12.424-29.644 9.347-99.704 10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963 18.118 45.223 29.912 72.85 40.144 105.778 21.768 70.06 14.716 99.053 9.346 99.704z"/></svg>'
              },
              link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=_fJXd6gh_hS7Cg6aGsMRa5F9M-XngW3Y&authKey=U%2FXTT5q2CpwLkwJmO4o7XoF4K8FqVyvOy4XyYHKaqZ4UP7TcRB20enNMEXAZD8H0&noverify=0&group_code=682528253'
            },
            { icon: 'github', link: 'https://github.com/Blessing-Studio' }
        ],

        footer: {
            message: '本文档遵循 MIT 协议，来点个 Star 嘛~',
            copyright: `Copyright © ${new Date().getFullYear()} Blessing Studio`
        }
    }
};