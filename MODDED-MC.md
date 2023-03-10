# Installing custom versions of Minecraft

If you want an old mod or modpack to run (Minecraft 1.2.4 and older), this is for you. Warning, not for newcomers!

### Installation:

1. If you are on Android, install [**MiXplorer**](https://forum.xda-developers.com/showpost.php?p=23109280&postcount=2) and [**MiX Archive**](https://play.google.com/store/apps/details?id=com.mixplorer.addon.archive)
2. Make a copy of the Minecraft version you want to modify
3. Rename the custom version **folder**, **.jar** and **.json** to your desired custom version name (for example, **foo**, **foo.jar**, **foo.json**)
4. Open the custom version's **.json** with MiX's **Text Editor**
5. Remove `"downloads:{"client"...}` as shown in the screenshot

![custom2](https://user-images.githubusercontent.com/85581164/220926885-d25e911f-98c4-4989-af06-f1bd81acc7e2.jpg)

6. Change `"id": "1.2.4"` to `"id": "(your custom version name)"`
7. Change `"mainClass": "net.minecraft.launchwrapper.Launch"` to `"mainClass": "net.minecraft.client.Minecraft"`
8. Save the **.json**
9. Modify your **.jar** as desired, make sure to delete the `META-INF` folder afterwards.
10. Start up your custom version!

### Notes:
* If your game is stuck at the Mojang screen afterwards, try deleting **options.txt**
* This guide is **NOT** for Babric or Cursed Fabric!
