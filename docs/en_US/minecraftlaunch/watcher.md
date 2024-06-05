# Watcher
ML integrates game cores watcher to detect game file changes in real time

## Usage

```C#

GameCoresWatcher watcher = new(".minecraft");
watcher.GameCoresChanged += (_, x) => {
    // Will be excuted after the game core changed
}

watcher.StartWatch();

```