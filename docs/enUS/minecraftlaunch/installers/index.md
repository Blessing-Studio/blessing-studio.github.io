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
ML提供了 APIManager 类用于管理所有游戏下载组件的下载源,您可以通过更改 Current 字段来更改下载源，示例如下

``` C#
//切换下载源至官方
APIManager.Current = APIManager.Mojang;

//切换下载源至 BMCLAPI
APIManager.Current = APIManager.Bmcl;

//切换下载源至 MCBBS
APIManager.Current = APIManager.Mcbbs;
```