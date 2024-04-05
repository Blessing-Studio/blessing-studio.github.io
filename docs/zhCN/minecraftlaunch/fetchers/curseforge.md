# Curseforge 资源搜寻器

它可以搜寻 [Curseforge](https://www.curseforge.com/minecraft) 上的任何资源

::: tip

在使用搜寻器前您需要先拥有 Curseforge 的 Api Key

:::

## 初始化

``` C#
CurseForgeFetcher(string apiKey)
```

|参数名|说明|
|:------:|:----:|
|apiKey | Curseforge 的 Api Key |

- 初始化代码示例

``` C#
var curseForgeFetcher = new("Your Api Key");
```

## 搜索资源

``` C#
SearchResourcesAsync(string searchFilter, int classId = 6,  int category = -1, string gameVersion = null,  LoaderType modLoaderType = LoaderType.Any)
```

|参数名|说明|
|:------:|:----:|
|searchFilter | 要搜寻的资源名字，例如 “JEI” |
|classId | 资源类别 |
|category | 资源类别 |
|gameVersion | 资源的 Minecraft 版本 |
|modLoaderType | 资源的加载器类别 |