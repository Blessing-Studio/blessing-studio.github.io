# CurseForge 整合包安装器

:::tip
在 `ML` 中，我们提供了针对 CurseForge 格式整合包的安装器，与其它安装器不一样的是，此安装器不提供游戏核心的自动安装，也就是需要您提前手动安装好游戏核心
:::

:::info
注：此功能需要 CurseForge 的 Api Key，请自备！
:::

## 获取 CurseForge 整合包 安装信息

您需要提前获取整合包的安装信息才能判断整合包需要的 Mc 版本并安装，此过程是可选的！示例如下：

``` cs
var info = await installer.GetModsPacksInfoAsync();
```

## 初始化安装器

初始化 CurseForge 整合包安装器的方式非常简单,我们为其提供了一种构造方法：

``` cs
ModsPacksInstaller(string modPacksPath, string gamePath, string apiKey, string gameid = null)
```

|参数名|说明|
|:------:|:----:|
|modPacksPath | 整合包压缩文件  |
|gamePath |要保存的游戏目录 |
|apiKey | 您的apikey |
|gameid | 游戏名，不填默认整合包的名字 |

## 开始安装

在您完成安装器的初始化后，您只需要调用 CurseForge 整合包安装器的安装方法来完成安装。

在异步上下文中，使用 InstallAsync 来完成安装：

``` cs
await installer.InstallAsync();
```

:::info
在安装完成后 InstallAsync 方法会返回这个游戏核心的相关信息,并返回安装成功情况.
:::

## 获取安装器当前进度

正常情况下，安装器会花费数分钟来下载并安装 整合包 `ProgressChanged` 事件获取当前下载进度，您只需在 `调用安装方法之前` 注册下面的事件：

``` cs
installer.ProgressChanged += (_, x) => {
    Console.WriteLine(x.ProgressDescription);
};
```

其中， x.Progress 指示了安装器当前的进度 (不是百分比，需手动乘以100)，x.ProgressDescription 则是安装器当前进度的文字描述。

## 控制台示例

为了满足一些懒狗的模块（

``` cs
ModsPacksInstaller installer = new(“RLcraft.zip”,".minecraft","Api Key");

installer.ProgressChanged += (_, x) => {
    Console.WriteLine(x.ProgressDescription);
};

var result = await installer.InstallAsync();

if (result.Success) {
    Console.WriteLine($"游戏核心 {res.GameCore.Id} 安装成功");
}
```

:::tip
由于 GameCoreToolkit 有个隐式转换器，您可以省略 `new GameCoreToolkit()` 的部分而直接使用 `"游戏路径"` 的方法实例化.
:::
