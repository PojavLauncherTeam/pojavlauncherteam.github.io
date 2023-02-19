# Supporting 1.17 and beyond 

After many days and nights spent working on a temporary solution (and trust me, this is definitely temporary), we've gotten something done: support for 1.17 is here. With backporting work done by artdeell and Java 17 ported by DuyKhanhTran, 1.17 is usable and playable with gl4es. This also applies with 1.17.1 and 1.18 experimental snapshots.

Here's how to get it to work. You need to have a **GitHub account** in order to download the builds and JRE. ~~Regardless of your platform, you'll need to download [this resource pack](https://cdn.discordapp.com/attachments/724164160761626624/860864619350065162/assets-v0.zip).~~ The resource pack seems to be no longer required as it is automated in newer builds. This is artdeell's patch for 1.17 on gl4es.

## Known issues
- [Android only] Crosshair icon and Block outline don't render.
- You can tell us in [our Discord server](https://discord.gg/6RpEJda) or open an issue if you found one.
- UPDATE: ~~32-bit platforms (ARMv7 and i386) are currently broken for various reasons. We are looking for a solution.~~ We finally found a gold bar under the sea! Although this [JRE17](https://www.mediafire.com/file/v0xcufgzwgga0jy/jre17-arm-20210914-termux.tar.xz/file) is not initially made for PojavLauncher, it works magically. Now you can use this JRE17 build to play 1.17.1 until we stabilize it and bring it to PojavLauncher. (Very soon.)

## Platform-specific instruction
### Android:
- Download latest build: [here](https://github.com/PojavLauncherTeam/PojavLauncher/actions?query=branch%3Av3_openjdk).
- Download JRE17: [here](https://github.com/PojavLauncherTeam/android-openjdk-build-multiarch/releases/tag/jre17-ec28559). You need to download the artifact that matches your device architecture: `jre17-<architecture>`, don’t pick jdk17 or debuginfo.
- When you install the APK, it will be displayed as second app if you have one installed before.
- Go to launcher settings.
- Choose Manage runtime -> Add new. Pick the downloaded JRE17 runtime there.
- Switch renderer to gl4es 1.1.5 - OpenGL ES 3.
- ~~On 32-bit, you need to add `-Xss1m` to JVM arguments, otherwise Java will crash.~~
- Now launch Minecraft 1.17 and enjoy!

### iOS:
- Install package `openjdk-16-jre` or `openjdk-17-jre` (if you have Procursus bootstrap)
- Get latest build from the [GitHub](https://github.com/PojavLauncherTeam/PojavLauncher_iOS/actions?query=branch%3Amain) or [Doregon's Repo](https://repo.doregon.gq).
- After install, go into PojavLauncher, sign in and choose the more icon to enter Preferences.
- Change Java version to 16 or 17, then restart the launcher in order to take effect. For 1.18 snapshots, Java 17 is recommended as Java 16 seems to cause a weird problem.
- Change Renderer to `tinygl4angle`.
- Now launch Minecraft 1.17 and enjoy!
- Since iOS uses `tinygl4angle` renderer which supports (most?) GLSL 1.50 functionally, this can also be applied to 21w37a+.

## Note for Minecraft 21w37a+ on Android (thanks to [@NotAHero04](https://github.com/NotAHero04))
- Since 21w37a, Mojang bumped the resource pack version to 8, which rendered the current assets-v0 patch unusable. [This](https://cdn.discordapp.com/attachments/724163890803638277/923349783589056522/assets-v0.zip) is the patch for those versions. Simply replace it to the existing assets-v0, and you’re good to go!
- A small note: When the popup about 1.17 appears, tap **Play Anyway**. Tapping OK **will overwrite the patch**.
- Another small note: 1.17.1 or below will simply not work with this patch. ~~I recommend using per-version config feature with it.~~ If you still want to play 1.17.1 or below, keep the original assets-v0 and follow this instruction:

1. Download the new assets-v0 on the PojavLauncher Discord server, or [here.](https://cdn.discordapp.com/attachments/724163890803638277/923349783589056522/assets-v0.zip)

2. Give it another name then move it to /sdcard/Android/data/net.kdt.pojavlaunch[.debug]/files/.minecraft/resourcepacks (on Android 10 or later) or /sdcard/games/PojavLauncher/.minecraft/resourcepacks (on Android 9 or below).

3. Modify the options.txt file.
With the file names above, change the resourcePacks key to:
resourcePacks:["assets-v0.zip","`new_patch_name`.zip"].

4. Now enjoy your game. Be sure to choose Play Anyway when the popup shows.

Until we get a more permenant solution to fix 1.17 and newer, this is what we have. It's not perfect, but it works. We hope to see a version of gl4es that translates OpenGL 3 to OpenGL ES, or continue to work on Zink as a backup method if all else fails.*

## Does OptiFine or Sodium works?
### OptiFine
- ~~OptiFine seems to not working on Android, as the patch resource pack gets ignored.~~ However, it works by putting patched shader files into the client.
  + Download [this patcher](https://cdn.discordapp.com/attachments/724163890803638277/922043517860212736/Pojav117AssetsPatcher.jar). Since OptiFine preloads some shader files, the `assets-v0` resource pack trick could not be applied.
  + Navigate to Options -> Launch a mod installer (the first option). Pick the downloaded patcher.
  + Select the installed OptiFine version that you want to patch.
  + Press "OK" to start the patch process.
  + The alert "Patched `version`" will be displayed once the patching process finished, otherwise, an alert will display with some error description. Report this to us if this happens.
  + Now go back to the launcher and press Play. When an alert displays about "install additional resources”, press “Play anyway”.
  + Enjoy OptiFine moment.

  **Known issue:** Render Regions crashes the game.

- OptiFine works on iOS. Render Regions works.

### Sodium
- Sodium is currently not working on both platforms.
