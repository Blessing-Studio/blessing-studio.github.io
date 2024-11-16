# 游戏核心操作工具

在 ML 中，我们提供了 `GameCoreUtil` 类来对游戏核心进行一些基本操作

## 实例化工具

要实例化游戏核心工具类也非常容易，我们为其提供了三种构造方法：

```C#
GameCoreUtil();
GameCoreUtil(string path);
GameCoreUtil(DirectoryInfo root);
```

|参数名|说明|
|:---:|:---:|
|path/root|游戏目录|

:::tip
我们为 `GameCoreUtil` 类型的参数提供了隐式转换器，在需要使用 `GameCoreUtil` 类型的参数时，可以传入 `string` 类型， `DirectoryInfo` 类型， `GameCore` 类型的参数，其将会被装箱为`GameCoreUtil`类型，例如：
`GameCoreInstaller installer = new(".minecraft", "1.12.2");`
:::

## 基本信息

在完成了实例化后，您就可以正式使用了，首先，我将为您叙述 ML 的操作逻辑，共有6种操作游戏核心的方法

下表列出的是 `GameCoreUtil` 的所有方法：
|方法名|说明|
|:---:|:---:|
|ReName|重命名游戏核心|
|GetGameCore|获取单个游戏核心实例|
|Delete|删除游戏核心|
|GetGameCores|获取游戏核心列表|
|GameCoreScearh|搜索游戏核心|
|CreateLaunchScriptAsync|异步生成启动脚本|

## 详细信息
:::tip
`ReName`, `GetGameCore`, `GetGameCores`和`Delete`方法提供了静态重载，可以直接通过类名访问，但需要添加一个参数`root`用以指定游戏文件夹。
:::

### ReName

此方法用于修改游戏核心名称，返回值类型 `GameCore`。

+ 代码示例
    ```C#
    var core = gcu.ReName("游戏核心原名", "您要修改的名字");
    ```

### GetGameCore

此方法用于获取单个核心实例，返回值类型 `GameCore`。

+ 代码示例
    ```C#
    var core = gcu.GetGameCore("游戏核心id");
    ```


### Delete

此方法用于删除指定的游戏核心。

+ 代码示例
    ```C#
    gcu.Delete("游戏核心id");
    ```

### GetGameCores

此方法用于获取游戏核心列表 ,返回值类型为 `IEnumerable<GameCore>`。

+ 代码示例
    ```C#
    var cores = gcu.GetGameCores();
    ```

### GameCoreScearh

此方法用于筛查符合检索条件的游戏核心（拼音或含有指定的字符串），并返回符合条件的游戏核心列表 `IEnumerable<GameCore>`。

+ 代码示例
    ```C#
    var cores = gcu.GameCoreScearh("筛查条件");
    ```

### CreateLaunchScriptAsync

此方法用于异步生成启动脚本，返回值类型为 `bool`，此方法为静态方法。

+ 代码示例
    ```C#
    await GameCoreUtil.CreateLaunchScriptAsync(GameCore core, LaunchConfig config, string stringPath);
    ```
