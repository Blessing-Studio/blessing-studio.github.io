import { defineConfig } from 'vitepress'
import { zhConfig } from './zh_CN'
import { enConfig } from './en_US'

export default // withPwa(
defineConfig({
  title: 'BSTA',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  locales: {
    root: { label: '简体中文', lang: 'zh-CN', link: '/zh_CN/', ...zhConfig },
    ruRU: { label: 'Русский', lang: 'ru-RU', link: '/ru_RU/' },
    enUS: { label: 'English(US)', lang: 'en-US', link: '/en_US/', ...enConfig },
  }

  // markdown: {
  //   lineNumbers: true,
  //   config: (md) => {
  //     md.use(Container, 'theorem', {
  //       render: (tokens: Token[], idx: number) => {
  //         const token = tokens[idx]
  //         const info = token.info.trim().slice(7).trim()
  //         if (token.nesting === 1) {
  //           const title = md.renderInline(info)
  //           return `<div class="theorem"><p class="title">${title}</p>\n`
  //         } else {
  //           return `</div>\n`
  //         }
  //       }
  //     })
  //   }
  // },
  // themeConfig: {
  //   logo: './logo.png',
  //   collapsible: true,
  //   // smoothScroll: true,
  //   // nav: require("./nav"),
  //   outlineTitle: '本页目录',
  //   lastUpdatedText: '最后更新',
  //   docFooter: {
  //     prev: '上一篇',
  //     next: '下一篇'
  //   },
  //   socialLinks: [
  //     {
  //       icon: {
  //         svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741 0 31.345-16.136 72.247-51.051 101.786 16.842 5.192 54.843 19.167 45.803 34.421-7.316 12.343-125.51 7.881-159.632 4.037-34.122 3.844-152.316 8.306-159.632-4.037-9.045-15.25 28.918-29.214 45.783-34.415-34.92-29.539-51.059-70.445-51.059-101.792 0 0-33.334 54.134-44.859 52.741-5.37-.65-12.424-29.644 9.347-99.704 10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963 18.118 45.223 29.912 72.85 40.144 105.778 21.768 70.06 14.716 99.053 9.346 99.704z"/></svg>'
  //       },
  //       link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=_fJXd6gh_hS7Cg6aGsMRa5F9M-XngW3Y&authKey=U%2FXTT5q2CpwLkwJmO4o7XoF4K8FqVyvOy4XyYHKaqZ4UP7TcRB20enNMEXAZD8H0&noverify=0&group_code=682528253'
  //     },
  //     { icon: 'github', link: 'https://github.com/Blessing-Studio' }
  //   ],
  //   nav: [
  //     // Nav 1
  //     {
  //       text: '首页',
  //       link: '/'
  //     },
  //     {
  //       text: 'MinecraftLaunch',
  //       link: '/minecraftlaunch/'
  //     },
  //     // Nav 2
  //   ],
  //   footer: {
  //     message: '本文档遵循 MIT 协议，来点个 Star 嘛~',
  //     copyright: 'Copyright © 2023 Blessing Studio'
  //   },
  //   sidebar: [
  //     {
  //       text: '指南',
  //       collapsible: true,
  //       items: [
  //         { text: '主页', link: '/' },
  //         { text: '关于我们', link: '/introduce' }
  //       ]
  //     },
  //     {
  //       text: 'MinecraftLaunch 开发文档',
  //       collapsible: true,
  //       items: [
  //         { text: '简介', link: '/minecraftlaunch/' },
  //         { text: '安装', link: '/minecraftlaunch/install' },
  //         { text: '启动器', link: '/minecraftlaunch/launcher' },
  //         { 
  //           text: '安装器', 
  //           collapsible: true,
  //           link: '/minecraftlaunch/installers/',
  //           items: [
  //             { text: 'Vanllia 安装器', link: '/minecraftlaunch/installers/vanllia' },
  //             { text: 'Forge 安装器', link: '/minecraftlaunch/installers/forge' },
  //             { text: 'OptiFine 安装器', link: '/minecraftlaunch/installers/optifine' },
  //             { text: 'Fabric 安装器', link: '/minecraftlaunch/installers/fabric' },
  //             { text: 'Quilt 安装器', link: '/minecraftlaunch/installers/quilt' },
  //             { text: 'NeoForged 安装器', link: '/minecraftlaunch/installers/neoforge' },
  //             { text: 'CurseForge 整合包安装器', link: '/minecraftlaunch/installers/modpacks' },
  //           ]
  //         },
  //         { text: '监视器', link: '/minecraftlaunch/watcher' },
  //         { 
  //           text: '工具组件', 
  //           collapsible: true,
  //           link: '/minecraftlaunch/utils/',
  //           items: [
  //             { text: 'CurseForge 操作工具', link: '/minecraftlaunch/utils/curseforge' },
  //             { text: 'Modrinth 操作工具', link: '/minecraftlaunch/utils/modrinth' },
  //             { text: 'Java 操作工具', link: '/minecraftlaunch/utils/java' },
  //             { text: '模组操作工具', link: '/minecraftlaunch/utils/modpack' },
  //             { text: '存档操作工具', link: '/minecraftlaunch/utils/save' },
  //             { text: '资源包操作工具', link: '/minecraftlaunch/utils/resourcepack' },
  //             { text: '游戏核心操作工具', link: '/minecraftlaunch/utils/gamecore' },
  //             { text: '网络操作工具', link: '/minecraftlaunch/utils/http' },
  //           ]
  //         },
  //         { text: '分析器', link: '/minecraftlaunch/analyzers' },
  //         { 
  //           text: '验证器', 
  //           collapsible: true,
  //           link: '/minecraftlaunch/authenticators/',
  //           items: [
  //             { text: '离线验证器', link: '/minecraftlaunch/authenticators/offline' },
  //             { text: '外置验证器', link: '/minecraftlaunch/authenticators/yggdrasil' },
  //             { text: '微软验证器', link: '/minecraftlaunch/authenticators/microsoft' },
  //           ]
  //         }
  //       ]
  //     },
  //   ],
  //   editLink: {
  //     pattern:
  //       'https://github.com/Blessing-Studio',
  //     text: '本页内容有误？修改本页...'
  //   }
  //   // lastUpdated: "最后更新",

  //   // searchMaxSuggestoins: 10,
  // }
})
