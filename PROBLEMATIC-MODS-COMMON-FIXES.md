## RLCraft 

In order to run RLCraft you have to remove these mods:

* custommainmenumod

* fancyblockparticles

* dynamic surroundings

* soundfilters


credits to @kasrarouhi on github.


## BTW (Better Than Wolfs Mod Android)


1. Download ZArchiver and RAR from the Google Play Store if you haven’t already. 

2. Download the [BTW Installer](https://github.com/BTW-Community/legacy-fabric-installer/releases/tag/1.1.1-btw).

3. Go into PojavLauncher and execute the .jar and install it.

4. Launch the game (should crash that’s normal).

5. Check the .jar in "***.minecraft/versions/cursed-fabric-btw-version-name***" if it doesn’t have 5MB it is corrupted. You must replace it with the vanilla 1.5.2 .jar and name it "***cursed-fabric-btw-version-name.jar***".

6. Download the [BTW Mod](https://github.com/BTW-Community/Cursed-BTW/releases/tag/v0.5-beta-v2.1.1) .jar and put the .jar in the mods folder.

7. Now we have to patch a cursed fabric .jar that is located in "***/.minecraft/libraries/com/github/minecraft-cursed-legacy/cursed-fabric-loader/btw-version-name/cursed-fabric-loader-btw-version-name.jar***".

Download this file: [AppletMain](https://www.mediafire.com/file/1fszcz85201dlmz/AppletMain.class/file) not running into your downloads folder, then grab the patched AppletMain file from here and copy it into this location: "***/net/fabricmc/loader/entrypoint/applet/AppletMain.class***" (inside of the unpatched .jar file Using RAR Application).

8. Now what you need to do is grab the patched .jar file and replace the old .jar file with the patched .jar file inside of "***/.minecraft/libraries/com/github/minecraft-cursed-legacy/cursed-fabric-loader/btw-version-name/cursed-fabric-loader-btw-version-name.jar***" please be sure that it has the same name as the original .jar file.

9. DONE.

## Valkyrien skies 2 (android)

Atm there is no way to run vs2 on android in singleplayer, so your only option is to join a server which has vs2 installed. You can host a server capable of running vs2 on android inside termux, it's just not easy to setup. 
That's why we made a script for automating this entire process.
The script can be found [here](https://github.com/sa1672ndo/vs2termux).
