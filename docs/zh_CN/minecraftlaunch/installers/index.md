---
---

# 安装器
在 ML 中，我们已经为开发者实现了您在 Minecraft 开发过程中可能遇到的大部分基础组件。

::: tip
ML 所有的 `加载器安装器`（比如 Forge、Fabric 等）会在安装前自动检查游戏核心是否存在并补全，不需要提前安装游戏！
:::

## 支持列表

|安装器名称|支持状态|
|:------:|:----:|
|Forge（新、旧） |  ✅ |
|Optifine |  ✅ |
|Fabric |  ✅ |
|Vanllia |  ✅ |
|Quilt |  ✅ |
|CurseForge 整合包 |  ✅ |
|Java |  ✅ |

## 下载源切换
ML 为每个安装器的构造方法提供了一个 `MirrorDownloadSource` 类型参数，不填写则为默认源，内置的镜像源位于 `MirrorDownloadManager` 里，以下是使用案例：

```C#
var bmclSource = MirrorDownloadManager.Bmcl;
var mcbbsSource = MirrorDownloadManager.Mcbbs;
```

::: warning
ML 默认不启用镜像源，在未启用的状态下，即使你给安装器指定了镜像源也不会生效，需要将 `MirrorDownloadManager` 的 `IsUseMirrorDownloadSource` 改为 true 才行。
:::