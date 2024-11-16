# CurseForge 操作工具

在 ML 中，我们提供了 `CurseForgeUtil` 类来对 Curseforge Api 进行一些基本操作

::: warning

此工具类需要 Curseforge 的 Api Key，如果没有请[前往注册](https://support.curseforge.com/en/support/solutions/articles/9000208346-about-the-curseforge-api-and-how-to-apply-for-a-key)

:::

## 实例化工具
要实例化 CurseForge 工具类也非常容易，详细如下所示：

```C#

CurseForgeUtil util = new("您的 API Key");

```

## 基本信息
在完成了实例化后，您就可以正式使用了，首先，我将为您叙述 ML 的操作逻辑，搜索方法共有5种，分别用来搜索模组、
资源包、整合包以及地图，它们都使用 `SearchResourceAsync` 这个基础搜索方法来进行简化搜索操作.

下表列出的是 `CurseForgeUtil` 的所有方法

|方法名|说明|
|:------:|:----:|
|SearchModpackAsync | 异步模组搜索方法  |
|SearchGameMapAsync | 异步地图搜索方法 |
|SearchModpacksAsync | 异步整合包搜索方法 |
|SearchResourcePackAsync | 异步资源包搜索方法 |
|GetFeaturedsAsync | 获取热门资源方法 |
|GetCategories | 获取资源类别方法 |
|GetModpackDownloadUrlAsync | 获取模组下载链接方法（通常用于安装 Curseforge 格式整合包） |
|GetModDescriptionHtmlAsync | 获取资源描述 Html 文本方法 |


## 搜索资源
在上表所述的搜索方法中都有许多的参数，但它们得使用方式大同小异，下面是详细实例

```C#
//模组搜索
await util.SearchModpackAsync("JEI", ModLoaderType.Any, "1.12.2", -1);

//地图搜索
await util.SearchGameMapAsync("OneBlock", "1.12.2", -1);

//整合包搜索
await util.SearchModpacksAsync("All The Mod", ModLoaderType.Any, "1.12.2", -1);

//资源包搜索
await util.SearchResourcePackAsync("Xray Ultimate", "1.12.2", -1);
```

如上方所示，它们得使用方法基本一致，但 `SearchGameMapAsync`和`SearchResourcePackAsync`方法不一样得原因是因为它们不需要指定模组加载器类型，这里不过多赘述

对某些人来说可能不知道那些参数是什么意思，这里我为大家列了个表：

|参数名(按先后顺序)|说明|
|:------:|:----:|
|searchFilter | 提供您要搜索得资源名，如示例的 JEI  |
|modLoaderType | 限定模组加载器类型 |
|gameVersion | 限定游戏版本 |
|category | 指定资源类型 |

::: tip

`SearchGameMapAsync`和`SearchResourcePackAsync`这两个方法也适用上表，但需剔除 `modLoaderType` 参数

:::

## 获取热门资源
获取热门资源非常简单，只需要调用上表中的 `GetFeaturedsAsync` 方法即可，示例如下

```C#

var result = await util.GetFeaturedsAsync();//返回的就是资源集合

```

## 其它方法
这里是一些不常用的方法，在开发中您可以忽略这些方法，由于使用起来无困难，这里不过多赘述

