# 安装 WonderLab

[WonderLab Releases 页](https://github.com/Blessing-Studio/WonderLab.Override/releases)

## Releases 打包规则

### 自动构建版本 - master & 自动构建版本 - bugFixing

| 系统 | 打包结果名称 | 注释 |
| ---- | ------------ | ---- |
| Windows   | wonderlab.`版本号`.win.-`架构`.installer.exe | 安装文件 |
| Windows   | wonderlab.`版本号`.linux-`架构`.zip          | zip压缩文件 |
| Linux通用 | wonderlab.`版本号`.linux-`架构`.AppImage     | AppImage可执行文件 |
| Debian系  | wonderlab.`版本号`.linux-`架构`.deb          | deb安装文件 |
| RedHat系  | wonderlab.`版本号`.linux-`架构`.rpm          | rpm安装文件 |
| Mac OS    | wonderlab.`版本号`.osx.-`架构`.zip           | zip压缩文件 |
| Mac OS    | wonderlab.`版本号`.osx.app.-`架构`.zip       | app应用程序 |

### feature 分支 - 测试渠道

| 系统 | 打包结果名称 | 注释 |
| ---- | ------------ | ---- |
| Windows   | WonderLab.Desktop.`版本号`.linux-`架构`.zip          | zip压缩文件 |
| Linux | WonderLab.`版本号`.linux-`架构`.AppImage     | AppImage可执行文件 |
| Mac OS    | WonderLab.Desktop.`版本号`.osx.-`架构`.zip           | zip压缩文件 |
| Mac OS    | WonderLab.Desktop.`版本号`.osx.app.-`架构`.zip       | app应用程序 |

## Windows 平台

通过本页的表格在 Releases 页中找到合适的文件下载，安装/解压 后即可食用

## Linux 平台

下载所需要的 `AppImage` 可执行文件

增加 `AppImage` 文件的可执行权

```zsh
chmod +x AppImage的路径
```

然后在终端中输入 AppImage 的路径即可打开

Arch Linux 系安装
> 请先确保您已经添加了 `AUR` 仓库，参考[这里](https://mirrors.tuna.tsinghua.edu.cn/help/archlinuxcn/)

master

```zsh
paru -S wonderlab-appimage
```

feature

```zsh
paru -S wonderlab-appimage-feature
```

## Mac 平台
