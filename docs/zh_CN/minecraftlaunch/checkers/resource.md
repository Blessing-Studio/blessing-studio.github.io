# 游戏资源检查器

游戏资源检查器用于检查 Minecraft 游戏实例的依赖库以及资源文件是否缺失。

## 初始化检查器

``` C#
IChecker resourceChecker = new ResourceChecker(GameEntry entry);
```

- 参数详解

|参数名|说明|
|:------:|:----:|
|entry | Minecraft 游戏实例 |

## 开始检查

在异步上下文中，使用 CheckAsync 来完成检查步骤：

```C#
await resourceChecker.CheckAsync();
```

::: info
在检查完成后 CheckAsync 方法会返回检查结果，如果返回值为 `false` 则可以通过类的 `MissingResources` 属性获取缺失的文件。
:::

## 控制台示例

为了满足一些懒狗的模块（

``` C#
IChecker resourceChecker = new ResourceChecker(GameEntry entry);
var result = await resourceChecker.CheckAsync();

if (!result) {
    Console.WriteLine($"有资源缺失，总计 {resourceChecker.MissingResources.Count} 个。");
}
```