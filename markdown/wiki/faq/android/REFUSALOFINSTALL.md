# "App not installed"

The error message looks like this:

<img src="https://media.discordapp.net/attachments/755410958100201472/1081249821907750974/image.png?width=575&amp;height=146" alt="Image"/>

Not sure why this happens, but it only happened to one dev build for VenomousSteam81.

---

## Install with PC/Laptop

To fix, simply grab your PC/Laptop (unless you have Android 11 and above, continue to the next session), install [ADB](https://developer.android.com/studio/releases/platform-tools) for your OS. Then, search up how to use adb for your OS. After figuring that out, go ahead and connect your phone to your PC.

Now, download the PojavLauncher build you downloaded on your phone (or copy the one off of your phone), do `adb pm install path/to/pojavlauncher/apk.apk` (if that doesn't work and gives an error, use `adb shell pm install path/to/pojavlauncher/apk.apk`), and it should install. If not, please make an issue on the [wiki github](https://github.com/PojavLauncherTeam/pojavlauncherteam.github.io), making sure to mention VenomousSteam81.

---

## Install without PC/Laptop (Android 11 and newer only)

First, go to settings and enable developer options (not telling you how to do so), turn on wireless ADB, accept all the ADB stuff, [then either download and build it yourself](https://github.com/tytydraco/ladb) with termux, buy the app from the [play store](https://play.google.com/store/apps/details?id=com.draco.ladb), or go find some apk on the internet.

Next, download PojavLauncher from [GitHub Actions](https://github.com/PojavLauncherTeam/PojavLauncher/actions). Open LADB, accept the ADB connection, then type (or copy paste) `pm install path/to/pojavlauncher/apk.apk`. If that also doesn't work, please make an issue on the [wiki github](https://github.com/PojavLauncherTeam/pojavlauncherteam.github.io), making sure to mention VenomousSteam81.

Thank you for your time!
