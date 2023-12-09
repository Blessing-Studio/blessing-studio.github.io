# 微软验证器

微软验证器提供给用于 Minecraft 正版的用户，允许进入正版验证的服务器

## 初始化验证器

``` C#
MicrosoftAuthenticator = new(AuthType)
{
    ClientID
};
```

|   参数名    |         说明         |
|:--------:|:------------------:|
| AuthType |        验证类型        |
| ClientId | 在 Azure 中获取的 AppID |

- 初始化代码示例

``` C#

MicrosoftAuthenticator authenticator = new(MinecraftOAuth.Module.Enum.AuthType.Access)
{
    ClientId = "Your Client ID"
};
```

## 获取验证代码
在初始化完毕后即可获取验证代码

- 代码示例

``` C#

var deviceInfo = await authenticator.GetDeviceInfo();
Console.WriteLine(deviceInfo.UserCode);

```

## 获取 Microsoft 访问令牌
在获取验证验证代码后，即可获取 Microsoft 访问令牌

- 代码示例

``` C#

var token = await authenticator.GetTokenResponse(deviceInfo);

```

## 验证
在获取访问令牌后即可开始验证步骤，微软验证器只有 'AuthAsync' 方法

- 代码示例

``` C#

var userProfile = await authenticator.AuthAsync((a) =>
{
    Console.WriteLine(a);
});

```

在上述示例中，'AsyncAuth' 方法的返回值便是构建好的账户信息类，可以直接用于启动游戏

## 完整示例

- 代码示例

``` C#

MicrosoftAuthenticator authenticator = new(MinecraftOAuth.Module.Enum.AuthType.Access)
{
    ClientId = "Your Client ID"
};
var deviceInfo = await authenticator.GetDeviceInfo();
Console.WriteLine(deviceInfo.UserCode);
var token = await authenticator.GetTokenResponse(deviceInfo);
var userProfile = await authenticator.AuthAsync((a) =>
{
    Console.WriteLine(a);
});

```

::: tip

若出现 await 报错，请在你的方法中添加 async 关键字合理解决

:::