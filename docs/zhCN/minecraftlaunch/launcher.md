# 启动器

启动器是ML的核心模块之一，其具有强大的跨平台支持，可以在Windows、MacOS、Liunx平台上启动所有版本的MC，但再好的工具也要合理的使用它，本章节将详细介绍ML的启动模块

## 初始化
这是在正式启动游戏前的核心步骤，如你在这个步骤出现问题，那么将无法正常启动MC

而初始化启动器的方法也非常简单，我们为其提供了两个构造方法：

```C#
Launcher(IGameResolver resolver, LaunchConfig config);
```

|参数名|说明|
|:---:|:---:|
| config | 启动的配置选项 |
| resolver | 提供一个本地游戏定位器 |



### 参数类型详解

+ LaunchConfig
    <div>这是游戏启动时大部分信息的配置项，是最重要的一个参数，这个参数里的核心信息如果有误将无法启动，其完整的实例化演示如下：</div>


    ```C#
    LaunchConfig config = new LaunchConfig {
        Account = <账户信息>, //账户信息的获取请使用验证器，使用方法请跳转至验证器文档查看
        GameWindowConfig = new GameWindowConfig {
            Width = <窗口宽度>,
            Height = <窗口高度>,
            IsFullscreen = false
        },
        JvmConfig = new JvmConfig("Your java path") {
            MaxMemory = <最大内存>,
            MinMemory = <最小内存> 
        },
        
        ServerConfig = new(<端口号>, <ip地址>),
        IsEnableIndependencyCore = true//是否启用版本隔离
    };   
    ```

+ IGameResolver

    这是确定游戏信息用的游戏定位器接口，你需要手动指定实例化对象为 `GameResolver` 类型，这个参数如果填错将无法启动，其完整的实例化演示如下：

    ```C#
    IGameResolver gameResolver = new GameResolver("Your game folder");
    ```


+ 初始化代码示例
    ```C#
    Launcher launcher = new(config, gameResolver);
    ```

## 启动部分

初始化完成后即可开始启动步骤，使用'LaunchAsync'方法
+ 代码示例
    ```C#
     var gameProcessWatcher = await launcher.LaunchAsync("你要启动的游戏Id");
    ```

### 错误处理
如果你用的是WinForm、WPF、Avalonia等图形化UI，在启动时程序整个卡死，请尝试使用 Task 合理解决
+ 代码示例
    ```C#
    await Task.Run(() => {
        var gameProcessWatcher = await launcher.LaunchAsync("你要启动的游戏Id");
    });
    ```

## 控制台示例


```C#
    var account = new OfflineAuthenticator("Yang114").Authenticate();
    var resolver = new GameResolver(".minecraft");
    
    var config = new LaunchConfig {
        Account = account,
        IsEnableIndependencyCore = true,
        JvmConfig = new(@"C:\Program Files\Java\jdk1.8.0_301\bin\javaw.exe") {
            MaxMemory = 1024,
        }
    };
    
    Launcher launcher = new(resolver, config);
    var gameProcessWatcher = await launcher.LaunchAsync("1.12.2");
    
    //获取输出日志
    gameProcessWatcher.OutputLogReceived += (sender, args) => {
        Console.WriteLine(args.Text);
    };
    
    //检测游戏退出
    gameProcessWatcher.Exited += (sender, args) => {
        Console.WriteLine("exit");  
    };
```
