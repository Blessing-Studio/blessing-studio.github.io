# 监视器

ML 集成了游戏核心监视器以实时检测游戏文件的变动

## 使用方法

```cs
GameCoresWatcher watcher = new(".minecraft");
watcher.GameCoresChanged += (_, x) => {
    //游戏核心变动时将执行里面的代码块
}

watcher.StartWatch();
```
