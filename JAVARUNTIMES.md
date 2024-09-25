# Installing Java runtimes manually

If you for whatever reason decided to install `app-debug-noruntime` or you want to update for whatever reason, here's how you do it. 

1. Go to the **android-openjdk-build-multiarch** repo on GitHub, pick the branch you want (e. g. buildjre8 or buildjre17-21.)
2. Log into GitHub, else you won't be able to download the runtime.
3. Click on the name of the action, then download the `pojav` version of the runtime (e. g. `jre17-pojav`). Do not download jdk, your game might crash with it.
4. Extract the zip with your file manager. [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver) and [MiXplorer](https://mixplorer.com/) are recommended.
5. Open Pojav and go to Settings → Java Tweaks → Runtime Manager → Add new, then select the .tar.xz file you just extracted from the zip. 
