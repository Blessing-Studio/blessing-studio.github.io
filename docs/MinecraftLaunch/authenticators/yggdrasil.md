# 外置验证器

此验证器适用于所有基于 [AuthLib-Injector](https://github.com/yushijinhun/authlib-injector) 的第三方验证服务（例如 LittleSkin）

## 初始化验证器

|参数名|说明|
|:------:|:----:|
|uri | 验证服务器地址 |
|email | 用户账户邮件 |
|password | 用户账户密码 |
|account | 旧的 Yggdrasil 账户|

- 初始化代码示例

``` cs
//刷新验证
YggdrasilAuthenticator authenticator = new(account);//account为您的旧的Yggdrasil账户信息

//请求验证
YggdrasilAuthenticator authenticator = new("Server Url", "Your Email", "Your Password");
```

## 验证

在初始化完毕后即可开始验证步骤

- 代码示例

``` cs
var userProfile = await authenticator.AuthenticateAsync();
```

在上述示例中，'AuthenticateAsync' 方法的返回值便是构建好的所有账户信息类，可以直接用于启动游戏

## 完整示例

- 代码示例

``` cs
//刷新验证
YggdrasilAuthenticator authenticator = new(account);//account为您的旧的Yggdrasil账户信息
var userProfile = await authenticator.AuthenticateAsync();

//请求验证
YggdrasilAuthenticator authenticator = new("Server Url", "Your Email", "Your Password");
var userProfile = await authenticator.AuthenticateAsync();
```
