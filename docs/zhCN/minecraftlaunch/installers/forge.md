---
---

# Forge 安装器

在 ML 中，我们支持了几乎所有主流 Minecraft 版本的 Forge 自动化安装。
由于 Forge 团队在后续的版本中修改了 Forge 的打包规范以及安装流程,需要判断应该使用哪一种安装器,在 ML 中,我们为其做了自动化判断.(F**k Forge)

::: tip
ML 提供了 GetForgeBuildsOfVersionAsync 方法以获取指定Minecraft的所有 Forge 信息,此方法为静态方法,可不经过初始化直接调用
:::

## 获取 Forge 安装信息
您需要提前获取 Forge 的安装信息才能进行 Forge 的安装！示例如下：
```C#
var forgebuild = (await ForgeInstaller.GetForgeBuildsOfVersionAsync("1.12.2")).First();
```
First 方法会返回这个 Mc 版本最新的 Forge.

## 初始化安装器
初始化 Forge 安装器的方式非常简单,我们为其提供了一种构造方法：

```C#
ForgeInstaller()
ForgeInstaller(GameCoreToolkit coreLocator, ForgeInstallEntity build, string javaPath, string customId = null ,string packageFile = null)
```

|参数名|说明|
|:------:|:----:|
|gameCoreToolkit | 提供一个本地游戏定位器  |
|build | 要安装的Forge详细信息 |
|javaPath | 指定一个Java路径 |
|customId | 继承的游戏核心名,在不进行复合安装的情况下可以忽略 |
|packageFile | Forge 安装包的名字,可以忽略 |

## 开始安装
在您完成安装器的初始化后，您只需要调用 Forge 安装器的安装方法来完成安装。

在异步上下文中，使用 InstallAsync 来完成安装：
```C#
await installer.InstallAsync();
```

::: info
在安装完成后 InstallAsync 方法会返回这个游戏核心的相关信息,并返回安装成功情况.
:::

## 获取安装器当前进度
正常情况下，安装器会花费数分钟来下载并安装 Forge，您可以通过 `ProgressChanged` 事件获取当前下载进度，您只需在 `调用安装方法之前` 注册下面的事件：
```C#
installer.ProgressChanged += (_, x) => {
    Console.WriteLine(x.ProgressDescription);
};
```
其中， x.Progress 指示了安装器当前的进度 (不是百分比，需手动乘以100)，x.ProgressDescription 则是安装器当前进度的文字描述。

## 控制台示例
为了满足一些懒狗的模块（
``` C#

var forgebuild = (await ForgeInstaller.GetForgeBuildsOfVersionAsync("1.12.2")).First();
ForgeInstaller installer = new(".minecraft", forgebuild, "Your JavaPath");

installer.ProgressChanged += (_, x) => {
    Console.WriteLine(x.ProgressDescription);
};

var result = await installer.InstallAsync();

if (result.Success) {
    Console.WriteLine($"游戏核心 {res.GameCore.Id} 安装成功");
}

```

::: tip
由于 GameCoreToolkit 有个隐式转换器，您可以省略 `new GameCoreToolkit()` 的部分而直接使用 `"游戏路径"` 的方法实例化.
:::