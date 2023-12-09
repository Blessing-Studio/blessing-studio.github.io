# 离线验证器

离线账户可以使没有购买 Minecraft 正版的用户游玩，但无法进入开了正版验证的服务器

## 初始化验证器

``` C#
OfflineAuthenticator(string name, Guid uuid = default)
```

|参数名|说明|
|:------:|:----:|
|name | 账户名  |
|uuid | 账户的 Uuid，可以忽略 |

- 初始化代码示例

``` C#

OfflineAuthenticator authenticator = new("Your name");

```

## 验证
在初始化完毕后即可开始验证步骤，离线验证器建议使用 'Auth' 方法

- 代码示例

``` C#

var result = authenticator.Auth();

```

在上述示例中，'Auth' 方法的返回值便是构建好的账户信息类，可以直接用于启动游戏