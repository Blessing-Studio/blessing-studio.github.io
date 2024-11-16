# 微软验证器

微软验证器提供给用于 Minecraft 正版的用户，允许进入正版验证的服务器


## 参数详解

|   参数名    |         说明        |
|:--------:|:------------------:|
| account  |        微软账户信息     |
| clientId | 在 Azure 中获取的 AppID |

- 初始化代码示例

``` C#
//构造方法一 适用于设备流验证
MicrosoftAuthenticator authenticator = new("Your Client ID");

//构造方法一 适用于刷新验证
MicrosoftAccount account;//此处的Account是您的旧的微软账户信息
MicrosoftAuthenticator authenticator = new(account);
```

除此之外，验证器还提供了一个 'IsCheckOwnership' 属性用于确定是否检查游戏所有权


## 获取验证代码以及 Microsoft 访问令牌
在初始化完毕后即可获取验证代码

- 代码示例

``` C#

await authenticator.DeviceFlowAuthAsync(dc => {
    //在获取到一次性代码后要执行的代码
});

```


## 验证
在获取访问令牌后即可开始验证步骤

- 代码示例

``` C#

var userProfile = await authenticator.AuthenticateAsync();

```

在上述示例中，'AuthenticateAsync' 方法的返回值便是构建好的账户信息类，可以直接用于启动游戏

## 完整示例

- 代码示例

``` C#
//设备流验证
MicrosoftAuthenticator authenticator = new("Your Client ID");
await authenticator.DeviceFlowAuthAsync(dc => {
    //在获取到一次性代码后要执行的代码
    Console.WriteLine(dc.UserCode);
});

var userProfile = await authenticator.AuthenticateAsync();


//刷新验证
MicrosoftAuthenticator authenticator = new(account);//account为您的旧的微软账户信息
var userProfile = await authenticator.AuthenticateAsync();
```

::: tip

若出现 await 报错，请在您的方法中添加 async 关键字合理解决

:::