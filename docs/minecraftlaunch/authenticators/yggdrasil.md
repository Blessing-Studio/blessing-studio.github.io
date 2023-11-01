# 外置验证器

此验证器适用于所有基于 [AuthLib-Injector](https://github.com/yushijinhun/authlib-injector) 的第三方验证服务（例如 LittleSkin）

## 初始化验证器

``` C#
YggdrasilAuthenticator(string uri, string email, string password)
YggdrasilAuthenticator(bool isLittleSkin, string email, string password)
```

|参数名|说明|
|:------:|:----:|
|uri | 验证服务器地址 |
|email | 账户邮件 |
|password | 账户密码 |
|isLittleSkin | 是否直接使用 LittleSkin 验证服务器 |

- 初始化代码示例

``` C#

YggdrasilAuthenticator authenticator = new(true, "Your Email", "Your Password");
YggdrasilAuthenticator authenticator = new("Server Url", "Your Email", "Your Password");

```

## 验证
在初始化完毕后即可开始验证步骤，外置验证器建议使用 'AuthAsync' 方法

- 代码示例

``` C#

var result = await authenticator.AuthAsync();

```

在上述示例中，'Auth' 方法的返回值便是构建好的所有账户信息类，可以直接用于启动游戏