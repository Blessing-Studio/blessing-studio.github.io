# Java 搜寻器

在 `ML` 中，我们提供了 `JavaUtil` 类来对已安装的 Java 进行获取等操作

:::tip
`JavaUtil` 类中的方法和属性均为静态方法静态属性，无需实例化此类。
:::

## 基本信息
`JavaUtil` 类提供了 3 种方法进行不同的常用基本的 Java 操作

|方法名|说明|
|:---:|:---:|
|Fetch()和FetchAsync()|异步或同步在磁盘中搜索已安装的Java|
|GetJavaInfo(string)|异步获取一个已安装Java的信息（如版本，是否为64位）|
|GetCurrentJava(IEnumerable\<JavaEntry>, GameEntry)|从提供的Java列表中选择适合启动选定游戏的Java|

## 用法

### Fetch()和FetchAsync()

#### 讲解

执行这个方法后，它会返回类型为 “IEnumerable\<JavaEntry>” 的一个列表，这个列表包含了大部分磁盘上的 Java 信息。（如果一些Java所在的位置没有被词典所收录，那么这个Java将不会搜索到。）Fetch()和FetchAsync()的区别是FetchAsync()为异步方法，Fetch()为同步方法，异步方法不会堵塞主线程，这不会导致您的应用会有短时间的卡死。

无需担心跨平台，这个方法可以自动识别您的应用在什么操作系统上运行，从而使用正确的方法运行。

您可以通过 “JavaEntry” 类来获取 Java 的版本，位数等信息。

:::tip
JavaEntry类包含的属性有：

- JavaVersion：Java的详细版本号，如：17.0.9

- JavaSlugVersion：Java的简略版本号，如：17

- Is64Bit：类型为bool，检查是否为64为的Java

- JavaPath：javaw.exe的可执行文件路径

- JavaDirectoryPath：javaw.exe所在的文件夹路径
:::

#### 示例代码

``` C#
//引用
using MinecraftLaunch.Classes.Models.Game;
using MinecraftLaunch.Components.Fetcher;
...

//实例化
JavaFetcher javaFetcher = new JavaFetcher();

//搜索磁盘里的Java并把它们存储到一个集合里
 var JavaList = javaFetcher.Fetch();

 //输出
 Debug.WriteLine("您的设备总共有" + JavaList.Length + "个Java，它们是：");

 //遍历集合
 foreach(JavaEntry javalist in JavaList)
 {
    //输出Java的信息
     Console.WriteLine("Java路径：" + javalist.JavaPath + "，Java版本：" + javalist.JavaVersion + "，是否为64位：" + javalist.Is64Bit);
 }
 //异步方法这里不做示例。
```

#### 输出

假设您的设备里有两个Java，它们分别为

- JRE 1.8.0_391 - 32bit，放在“C:\Program Files (x86)\Java\jre1.8.0_391”里

- JDK 17.0.9 - 64bit，放在“C:\Program Files\Java\jdk-17.0.9”里

那么，这些代码应该返回：

``` 
您的设备总共有2个Java，它们是：
Java路径：C:\Program Files (x86)\Java\jre1.8.0_391\bin\javaw.exe，Java版本：1.8.0_391，是否为64位：False
Java路径：C:\Program Files\Java\jdk-17.0.9\bin\javaw.exe，Java版本：17.0.9，是否为64位：True
```

### GetJavaInfo(string)

这个方法需要一个字符串：string，也就是说您需要提供javaw.exe可执行文件的路径。
执行这个方法后，它会返回一个类型为JavaEntry的对象，这个对象包含了 Java 的版本，位数等信息，您可以在GetJavas的用法中找到JavaEntry的使用方法。

#### 示例代码

``` C#
//引用
using MinecraftLaunch.Utilities;

...

//获取Java信息
var javaEmpty = JavaUtil.GetJavaInfo(@"Java路径\javaw.exe");

//输出
Console.WriteLine("获取到的Java信息：" + "Java路径：" + javaEmpty.JavaPath + "，Java版本：" + javaEmpty.JavaVersion + "，是否为64位：" + javaEmpty.Is64Bit);
```

#### 输出

假设您的电脑里有个Java，它的路径为C:\Program Files\Java\jdk-17.0.9\bin\javaw.exe，那么，这些代码应该返回：

```
获取到的Java信息：Java路径：C:\Program Files\Java\jdk-17.0.9\bin\javaw.exe，Java版本：17.0.9，是否为64位：True
```

### GetCurrentJava(IEnumerable\<JavaEntry>, GameEntry)

#### 讲解

这个方法需要一个类型为IEnumerable\<JavaEntry>的对象，以及一个类型为GameEntry的对象，您可以在“(西路我不知道您帮我写QAQ)”找到更多关于GameCore的信息。
这个方法会返回一个类型为JavaEntry的对象，这个对象包含了 Java 的版本，位数等信息，返回的Java适合运行提供的核心的游戏，您可以在GetJavas的用法中找到JavaEntry的使用方法。

#### 示例代码


``` C#
//引用
using MinecraftLaunch.Classes.Interfaces;
using MinecraftLaunch.Components.Fetcher;
using MinecraftLaunch.Components.Resolver;
using MinecraftLaunch.Utilities;

...

// 搜索电脑里已有的Java并把它们以JavaEmpty的类型存储在一个集合里
JavaFetcher javaFetcher = new JavaFetcher();
var JavaList = javaFetcher.Fetch();

//获取.minecraft文件夹里的所有版本
IGameResolver gameResolver = new GameResolver(@"C:\Users\stars\AppData\Roaming\.minecraft");
//选定最适合启动1.20.2的Java
var Java = JavaUtil.GetCurrentJava(JavaList, gameResolver.GetGameEntity("1.20.2-Fabric 0.15.5-OptiFine_I7_pre1"));
//输出
Console.WriteLine(Java.JavaPath + ", " + Java.JavaVersion + ", " + Java.Is64Bit);
```

#### 输出

假如您的.minecraft文件夹的路径为C:\Users\stars\AppData\Roaming\.minecraft，里面有一个版本：1.20.2-Fabric 0.15.5-OptiFine_I7_pre1，并且您的电脑有两个Java，它们分别是：
JDK 17.0.8
JRE 1.8.0_391
那么，这些代码应该返回：

```
D:\Android\openjdk\jdk-17.0.8.101-hotspot\bin\javaw.exe, 17.0.8.1, True
```

以上就是关于Java操作工具的全部介绍，祝大家写码愉快😉