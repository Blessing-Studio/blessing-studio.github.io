---
---

# Vanllia 安装器

::: tip
ML 提供了 GetGameCoresAsync 方法以获取所有 Minecraft 版本,此方法为静态方法,可不经过初始化直接调用
:::

## 初始化安装器
初始化 Vanllia 安装器的方式非常简单,我们为其提供了一种构造方法：

```C#
GameCoreInstaller(GameCoreToolkit gameCoreToolkit, string Id)
```

|参数名|说明|
|:------:|:----:|
|gameCoreToolkit | 提供一个本地游戏定位器  |
|Id | 要下载的版本 Id,例如:1.19.3 1.16.5 |

## 开始安装
在您完成安装器的初始化后，您只需要调用 Vanllia 安装器的安装方法来完成安装。

在异步上下文中，使用 InstallAsync 来完成安装：
```C#
await gci.InstallAsync();
```

::: info
在安装完成后 InstallAsync 方法会返回这个游戏核心的相关信息,并返回安装成功情况.
:::

## 获取安装器当前进度
正常情况下，安装器会花费数分钟来下载游戏的支持库，您可以通过 `ProgressChanged` 事件获取当前下载进度，您只需在 `调用安装方法之前` 注册下面的事件：
```C#
installer.ProgressChanged += (_, x) => {
    Console.WriteLine(x.ProgressDescription);
};
```
其中， x.Progress 指示了安装器当前的进度 (不是百分比，需手动乘以100)，x.ProgressDescription 则是安装器当前进度的文字描述。

## 控制台示例
为了满足一些懒狗的模块（
``` C#

GameCoreInstaller installer = new(".minecraft", "1.12.2");

installer.ProgressChanged += (_, x) => {
    Console.WriteLine(x.ProgressDescription);
};

var result = await installer.InstallAsync();

if (result.Success) {
    Console.WriteLine($"游戏核心 {result.GameCore.Id} 安装成功");
}

```

::: tip
由于 GameCoreToolkit 有个隐式转换器，您可以省略 `new GameCoreToolkit()` 的部分而直接使用 `"游戏路径"` 的方法实例化.
:::
