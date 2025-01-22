---
---

# Vanilla 安装器

::: warning
由于命名更新，在[此拉取请求](https://github.com/Blessing-Studio/MinecraftLaunch/pull/6)合并前的所有ML版本均不适用此文档。
如果你仍然想要使用旧版本ML，请将代码中所有的`Vanilla`替换为`Vanllia`.（不推荐）
:::

::: tip
ML 提供了 `EnumerableGameCoreAsync` 方法以获取所有 Minecraft 版本,此方法为静态方法,可不经过初始化直接调用
:::

## 初始化安装器
初始化 Vanilla 安装器的方式非常简单,我们为其提供了一种构造方法：

```C#
VanillaInstaller(IGameResolver gameFoloder, string gameId, MirrorDownloadSource source = default)
```

|参数名|说明|
|:------:|:----:|
| gameFoloder | 提供一个本地游戏定位器  |
| gameId | 要下载的版本 Id,例如:1.19.3 1.16.5 |
| source | 镜像源设置  |

## 开始安装
在您完成安装器的初始化后，您只需要调用 Vanilla 安装器的安装方法来完成安装。

在异步上下文中，使用 InstallAsync 来完成安装：
```C#
await VanillaInstaller.InstallAsync();
```

::: info
在安装完成后 InstallAsync 方法会返回安装结果.
:::

## 获取安装器当前进度
正常情况下，安装器会花费数分钟来下载游戏的支持库，您可以通过 `ProgressChanged` 事件获取当前下载进度，您只需在 `调用安装方法之前` 注册下面的事件：

```C#
VanillaInstaller.ProgressChanged += (_, x) => {
    Console.WriteLine(x.ProgressStatus);
};
```
其中， x.Progress 指示了安装器当前的进度 (不是百分比，需手动乘以100)，x.ProgressStatus 则是安装器当前进度的文字描述，x.Status 则是安装器当前状态

## 控制台示例
为了满足一些懒狗的模块（
``` C#

var resolver = new GameResolver(".minecraft");
var VanillaInstaller = new VanillaInstaller(resolver, "1.12.2");

VanillaInstaller.ProgressChanged += (_, x) => {
    Console.WriteLine(x.ProgressStatus);
};

var result = await installer.InstallAsync();

if (result) {
    Console.WriteLine($"游戏核心 1.12.2 安装成功");
}

```