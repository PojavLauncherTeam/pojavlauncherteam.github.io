# Problematic mods and common fixes
## RLCraft

### In order to run RLCraft you have to remove these mods:

* Custom Main Menu

* Fancy Block Particles

* Dynamic Surroundings

* Sound Filters

**credits to [kasrarouhi](https://github.com/kasrarouhi)**

## Better Than Wolves (BTW)

### Android

#### WARNING: This is the short version of the guide. It is recommended to use the [full version.](https://www.mediafire.com/file/3ex8b12pvwb2g9m/INSTALL_BTW_updated_v1.2.pdf/file)

1. Download Acode Editor, ZArchiver and RAR from the Google Play Store if you haven’t already. 

2. Download the [BTW Installer](https://github.com/BTW-Community/legacy-fabric-installer/releases/tag/1.1.1-btw).

3. Go into PojavLauncher, execute the .jar and install it.

4. Launch the game (should crash that’s normal).

5. Check the .jar in "***.minecraft/versions/cursed-fabric-btw-version-name***". If it doesn’t have 5MB, it is corrupted. You must replace it with the vanilla 1.5.2 .jar and name it "***cursed-fabric-btw-version-name.jar***".

6. **The long guide explains it better (with screenshots).**

	Create a new 1.5.2-custom version by copying the vanilla version and renaming the files inside that directory, then remove `client` downloads, change the `id` to 1.5.2-custom, change `mainClass` from `net.minecraft.launchwrapper.Launch` to `net.minecraft.client.Minecraft`, then remove the `asm-all` dependency downloads.

7. **The long guide explains it better (with screenshots).**

	To fix your username, add `"minecraftArguments": "--assetsDir ${assets_root} --username $
{auth_player_name} --session ${auth_session}",` to your ***cursed-fabric-loader-btw-version-name.json***.

8. Download the [BTW Mod](https://github.com/BTW-Community/Cursed-BTW/releases/tag/v0.5-beta-v2.1.1) .jar and put the .jar in the mods folder.

9. Now we have to patch a Cursed Fabric .jar that's located in "***/.minecraft/libraries/com/github/minecraft-cursed-legacy/cursed-fabric-loader/btw-version-name/cursed-fabric-loader-btw-version-name.jar***".

	Download this file: [AppletMain](https://github.com/ItAnthon/AppletMain-Patch) not running into your downloads folder, then grab the patched AppletMain file from here and copy it into this location: "***/net/fabricmc/loader/entrypoint/applet/AppletMain.class***" (inside of the unpatched .jar file using RAR).

10. Grab the patched .jar file and replace the old one inside of "***/.minecraft/libraries/com/github/minecraft-cursed-legacy/cursed-fabric-loader/btw-version-name/cursed-fabric-loader-btw-version-name.jar***". Please be sure that it has the same name as the original .jar file.

11. Done, launch the game.

**credits to [GaucovyAero](https://github.com/gaucovyaero/) and [ItAnthon](https://github.com/ItAnthon)**
   

## Valkyrien Skies 2
### Android

As of 2024/09/09, there is no way to run VS2 on Android in Singleplayer, so your only option is to join a VS2 server. You can host a server capable of running VS2 on Android inside Termux, but it's not very easy to setup. 

There's a script created by [sa1672ndo](https://github.com/sa1672ndo) that automates this entire process to make the installation easier.

The script can be found [here](https://github.com/sa1672ndo/vs2termux).

**credits to [sa1672ndo](https://github.com/sa1672ndo)**

## Distant Horizons
### Android 

#### 2.0+

Add this [mod](https://www.mediafire.com/file/t9ipmw6af750efi/UNZIP-ME_DH-2.0_android-patch_fabric-forge_1.16.5-1.21.zip/file)

#### <2.0
All versions below 2.0 do not have any known issues

**credits to [sa1672ndo](https://github.com/sa1672ndo)**
