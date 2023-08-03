# 启动器

启动器是ML的核心模块之一，其具有强大的跨平台支持，可以在Windows、MacOS、Liunx平台上启动所有版本的MC，但再好的工具也要合理的使用它，本章节将详细介绍ML的启动模块


## 初始化
这是在正式启动游戏前的核心步骤，如你在这个步骤出现问题，那么将无法正常启动MC

而初始化启动器的方法也非常简单，我们为其提供了两个构造方法：

```C#
JavaMinecraftLauncher();
JavaMinecraftLauncher(LaunchConfig launchSetting, GameCoreUtil gameCoreUtil);
```

|参数名|说明|
|:---:|:---:|
|launchSetting | 启动的配置选项 |
|gameCoreUtil | 提供一个本地游戏定位器 |



### 参数详解

+ LaunchConfig
    <div>这是游戏启动时大部分信息的配置项，是最重要的一个参数，这个参数里的核心信息如果有误将无法通过预启动检查，其完整的实例化演示如下：</div>


    ```C#
    LaunchConfig lc = new(){
        Account = Account.Default, //此处使用的为默认账户，如想自定义，请使用验证器！
        GameWindowConfig = new GameWindowConfig(){
            Width = <窗口宽度>,
            Height = <窗口高度>,
            IsFullscreen = false
        },
        JvmConfig = new JvmConfig("你的java路径"){
            MaxMemory = <最大内存>,
            MinMemory = <最小内存> 
        },
        ServerConfig = new ServerConfig(){
            Ip = <ip>, 
            Port = <port>
        },
        NativesFolder = null, //一般可以无视这个选项
        IsEnableIndependencyCore = true//是否启用版本隔离
    };
    
    ```

    如果你不需要太多的配置，或者嫌上面的方法太长，也可以使用下面的方法：
    ```C#
    LaunchConig lc = new(Account.Default, new("你的Java路径")， new(), new());
    ```

+ GameCoreUtil

    <div>这是预启动时信息检查用的游戏定位器，这个参数如果填错将无法开始预启动检查，其完整的实例化演示如下：</div>

    ```C#
    GameCoreUtil gcu = new("你的游戏目录"); //默认为.minecraft
    ```


+ 初始化代码示例
    ```C#
    JavaMinecraftLauncher jml = new(lc, gcu);
    ```

## 启动部分

初始化完成后即可开始启动步骤，使用'LaunchTaskAsync'方法
+ 代码示例
    ```C#
    using var res = await jml.LaunchTaskAsync("你要启动的游戏Id");
    ```

如果你需要查看当前启动的进度，请使用 LaunchTaskAsync 方法的另一个重载
+ 代码示例

    ```C#
    using var res = await jml.LaunchTaskAsync("你要启动的游戏Id", x =>
    {
        //在这里获取当前启动进度,利用x.Item1获取数字进度,x.Item2获取文字进度
    });
    ```
如果你用的是WinForm、WPF、Avalonia等图形化UI，在启动时程序整个卡死，请尝试使用 Task 合理解决
+ 代码示例
    ```C#
    await Task.Run(() =>
    {
    using var res = await jcl.LaunchTaskAsync("你要启动的游戏Id");
    });
    ```

### 错误处理
启动过程中难免会有点小意外，导致游戏启动失败，面对这种情况，我们要将错误信息反馈使用者，而这些信息就存在 LaunchTaskAsync 方法的返回值里
+ 代码示例
    ```C#
    if (res.State is LaunchState.Succeess)
    {
        //启动成功的情况下会执行的代码块
    }
    else
    {
        //启动失败的情况下会执行的代码块
    }
    ```

## 控制台示例
为了满足一些懒狗的模块（
```C#
OfflineAuthenticator authenticator = new("Player");

LaunchConfig lc = new(){
    Accout = authenticator.Auth(),
    GameWindowConfig = new GameWindowConfig(){
        Width = 854,
        Height = 480,
        IsFullScreen = false
    },
    JvmConfig = new JvmConfig("C:\\Program Files\\Java\\jdk1.8.0_202\\bin\\java.exe"){
        MaxMemory = 1024,
        MinMemory = 512 
    },
    NativesFolder = null,
    IsEnableIndependencyCore = true
};

GameCoreUtil gcu = new(".minecraft");

JavaMinecraftLauncher jml = new(lc, gcu);

using var res = await jml.LaunchTaskAsync("1.12.2", x => {
    Console.WriteLine(x.Item1);
    Console.WriteLine(x.Item2);
});

if(res.State is LaunchState.Success){
    Console.WriteLine("启动成功");
}
else{
    Console.WriteLine("启动失败");
    Console.WriteLine("详细异常信息：{0}",res.Exception);
}
```
