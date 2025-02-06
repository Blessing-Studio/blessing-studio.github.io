# Java 工具

在 `ML` 中，我们提供了 `JavaUtil` 类来对已安装的 Java 进行获取等操作

:::tip
`JavaUtil` 类中的方法和属性均为静态方法静态属性，无需实例化此类。
:::

## 基本信息

`JavaUtil` 类提供了 3 种方法进行不同的常用基本的 Java 操作

|方法名|说明|
|:---:|:---:|
|GetJavas()|异步在磁盘中搜索已安装的Java|
|GetJavaInfo(string)|异步获取一个已安装Java的信息（如版本，是否为64位）|
|GetCorrectOfGameJava(IEnumerable\<JavaInfo>, GameCore)|从提供的Java列表中选择适合启动选定游戏的Java|

## 用法

### GetJavas()

#### 讲解

执行这个方法后，它会返回类型为 “IEnumerable\<JavaInfo>” 的一个列表，这个列表包含了大部分磁盘上的 Java 信息。（如果一些Java所在的位置没有被词典所收录，那么这个Java将不会搜索到。）

您可以通过 “JavaInfo” 类来获取 Java 的版本，位数等信息。

:::tip
JavaInfo类包含的属性有：

- JavaVersion：Java的详细版本号，如：17.0.9

- JavaSlugVersion：Java的简略版本号，如：17

- Is64Bit：类型为bool，检查是否为64为的Java

- JavaPath：javaw.exe的可执行文件路径

- JavaDirectoryPath：javaw.exe所在的文件夹路径

:::

#### 示例代码

``` cs
using MinecraftLaunch.Modules.Utilities;

...

//搜索磁盘里的Java
IEnumerable<JavaInfo> JavaList = JavaUtil.GetJavas();

//输出
Debug.WriteLine("您的Java数量为：" + JavaList.Count());
```

#### 输出

假设您的电脑里有两个Java，它们分别为

- JRE 1.8.0_391 - 32bit

- JDK 17.0.9 - 64bit

那么，这些代码应该返回：

``` text
您的Java数量为：2
```

### GetJavaInfo(string)

#### 用法

这个方法需要一个字符串：string，也就是说您需要提供javaw.exe可执行文件的路径。
执行这个方法后，它会返回一个类型为JavaInfo的对象，这个对象包含了 Java 的版本，位数等信息，您可以在GetJavas的用法中找到JavaInfo的使用方法。

#### 示例代码

``` cs
//引用
using MinecraftLaunch.Modules.Utilities;
...

//获取Java信息
JavaInfo javaInfo = JavaUtil.GetJavaInfo(javaw.exe所在的文件夹\javaw.exe);

//输出
Console.WriteLine(javaInfo.JavaPath + ", " + javaInfo.JavaVersion + ", " + javaInfo.Is64Bit);
```

#### 输出

假设您的电脑里有个Java，它的路径为 `C:\Program Files\Java\jdk-17.0.9\bin\javaw.exe` ，那么，这些代码应该返回：

``` text
C:\Program Files\Java\jdk-17.0.9\bin\javaw.exe, 17.0.9, True
```

### GetCorrectOfGameJava(IEnumerable\<JavaInfo>, GameCore)

#### 讲解

这个方法需要一个类型为IEnumerable\<JavaInfo>的对象，以及一个类型为GameCore的对象，您可以在“游戏核心操作工具”找到更多关于GameCore的信息。
这个方法会返回一个类型为JavaInfo的对象，这个对象包含了 Java 的版本，位数等信息，返回的Java适合运行提供的核心的游戏，您可以在GetJavas的用法中找到JavaInfo的使用方法。

#### 示例代码

``` cs
//引用
using MinecraftLaunch.Modules.Utilities;
...

//首先实例化GameCoreUtil类，这里提供了.minecraft文件夹的路径
GameCoreUtil gameCoreUtil = new GameCoreUtil("C:\\Users\\Starcloudsea\\AppData\\Roaming\\.minecraft");

//使用SearchJava方法搜索磁盘里的Java
IEnumerable<JavaInfo> JavaList = Java.SearchJava();

//选定最适合启动1.20.2的Java
var JavaList = JavaUtil.GetCorrectOfGameJava(a, gameCoreUtil.GetGameCore("1.20.2"));

//输出
Console.WriteLine(javaInfo.JavaPath + ", " + javaInfo.JavaVersion + ", " + javaInfo.Is64Bit);
```

#### 输出

假如您的.minecraft文件夹的路径为 `C:\Users\Starcloudsea\AppData\Roaming\\.minecraft` ，里面有一个版本：1.20.2，并且您的电脑有两个Java，它们分别是：
JDK 17.0.8
JRE 1.8.0_391
那么，这些代码应该返回：

``` text
D:\Android\openjdk\jdk-17.0.8.101-hotspot\bin\javaw.exe, 17.0.8.1, True
```

以上就是关于Java操作工具的全部介绍，祝大家写码愉快😉
