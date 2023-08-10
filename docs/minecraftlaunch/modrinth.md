# Modrinth 操作工具

在 ML 中，我们提供了 `ModrinthUtil` 类来对 ModrinthAPI 进行一些基本操作

## 基本信息
`ModrinthUtil` 中大多数方法是静态方法，调用示例如下：

``` C#

using MinecraftLaunch.Modules.Utils;

var foo = await ModrinthUtil.GetFeaturedModpacksAsync();

foreach (var category in foo.Hits)
{
    Console.WriteLine(category.Title);//输出的是 Mod 标题
}

```

下表列出的是 `ModrinthUtil` 的所有静态方法

|方法名|说明|
|:------:|:----:|
|GetFeaturedModpacksAsync() | 获取热门资源方法  |
|SearchAsync(string, string) | 异步搜索方法 |
|SearchModpacksAsync(string) | 异步整模组搜索方法 |
|SearchsAsync(string) | 异步整模组搜索方法 |
|GetCategories() | 异步获取资源类别方法|
|GetProject(string) | 异步获取项目方法 |
|GetProjectInfos(string) | 异步获取项目信息方法 |


## 使用例
在上表所述的搜索方法中参数已经标明白，下面是使用例。

```C#
//模组搜索
var foo = await ModrinthUtil.SearchAsync("JEI");

//根据 ID 搜索
var foo = await ModrinthUtil.GetProject("u6dRKJwZ");
```

## 获取热门资源
获取热门资源非常简单，只需要调用上表中的 `GetFeaturedsAsync` 方法即可，示例如下

```C#
await ModrinthUtil.GetFeaturedModpacksAsync();
```


## Schema

##### ModrinthProjectInfoSearchResult:
|属性|类型|说明|
|:------:|:----:|:-------:|
|ProjectId  | string  | 项目 Id |
|Author | striing |作者|
|Follows | int |粉丝|
|DateCreated | DateTime |创建时间|
|DateModified  | DateTime|管理时间|
|LatestVersion| string |最新版|
|License | string |许可证|

##### ModrinthProjectInfo:
|属性|类型|说明|
|:------:|:----:|:-------:|
|ProjectId  | string  | 项目 Id |
|TeamId  | string  | 团队 Id |
|Body | string  |  |
|BodyUrl | string  |  |
|Published | DateTime |发布时间|
|Updated | DateTime |修改时间|
|ModeratorMessage|string|管理员信息|
|License|LicenseInfo|许可证信息|
|Followers | int |粉丝|
|Status | string |状态|
|Author | string |作者|
|DateCreated | DateTime |创建时间|
|DateModified  | DateTime|管理时间|
|IssuesUrl| string |任务反馈网址|
|DiscordUrl | string |DC 群聊|
|DonationUrls | Objects[] | 捐助网址|