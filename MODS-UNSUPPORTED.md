# Unsupported Mods and Clients (+ Workarounds/Fixes)
Not everything that works on PC works on PojavLauncher. Below is a non-exhaustive list of mods that **may** not work, along with fixes or workarounds.

## Performance Mods + Shaders
- [Sodium](https://modrinth.com/mod/sodium)
	- [GL4ES Patch](https://www.mediafire.com/folder/n004fh6pxuxk8/Sodium_1.17%2B)
	- 0.5.x and later does not work without disabling the terrain optimization mixins. It's not recommended and therefore isn't faster than Vanilla/Optifine
- [Embeddium](https://modrinth.com/mod/embeddium)
	- Same problem as Sodium
- [Rubidium](https://www.curseforge.com/minecraft/mc-mods/rubidium/files) 
	- [Gl4ES Patch](https://www.mediafire.com/folder/jcyrf8l0osn4m/Rubidium_1.17%2B) for GL4ES, otherwise same as the previous two
- [Chlorine](https://www.curseforge.com/minecraft/mc-mods/chlorine)
- [ShadersMod (GLSL Shaders)](https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/minecraft-mods/1286604-shaders-mod-updated-by-karyonix)
- [Iris](https://www.curseforge.com/minecraft/mc-mods/irisshaders), [Iris Installer](https://irisshaders.net/download)
- [OptiFine](https://optifine.net/home)
	- Render Regions don't work
- **Optifine Shaders:** The only supported shaders are [Open4ES](https://www.mediafire.com/folder/cp87zpb3ichj7/Open4ES) for GL4ES. It works best with Adreno graphics (found in Qualcomm Snapdragon SoCs) and PowerVR graphics, with required patches (found in several low-end MediaTek SoCs). Mali GPUs are not supported. Below is a list of smartphones that are tested and works with Open4ES:
	- **Xiaomi Poco F3** (Snapdragon 870)
	- **Xiaomi Poco X5 Pro** (Snapdragon 778G)
	- **Xiaomi Redmi Note 8** (Snapdragon 665)
	- **Oppo A53** (Snapdragon 460)

## Skyblock Mods
- [Essential](https://essential.gg/)
- [Skytils](https://github.com/Skytils/SkytilsMod) 
	- [1.3.0-pre5](https://github.com/Skytils/SkytilsMod/releases/download/v1.3.0-pre5/Skytils-1.3.0-pre5.jar) works
- [Patcher](https://github.com/Sk1erLLC/Patcher) 
	- [1.6.1](https://www.mediafire.com/file/7a3gubce278k338/Patcher-1.6.1_1.8.9.jar/file) works
- [NotEnoughUpdates](https://github.com/Moulberry/NotEnoughUpdates/releases) 
	- [2.1.1-pre-1](https://www.mediafire.com/file/u0l09df4riulu2w/NotEnoughUpdates-2.1.1-pre-1.jar/file) works
- [Skyblock Extras](https://sbewebsite.appspot.com/)

## Input-related Mods
- [MidnightControls](https://github.com/TeamMidnightDust/MidnightControls/releases)
- [Controllable](https://www.curseforge.com/minecraft/mc-mods/controllable)
- [MouseTweaks](https://www.curseforge.com/minecraft/mc-mods/mouse-tweaks)
	- Almost all of them don't work because they aren't made with Android's inputs in mind

## Other Mods
- [Legacy4J](https://modrinth.com/mod/legacy4j)
	- Set `selectedControllerHandler` in options.txt to 0
- [Create](https://www.curseforge.com/minecraft/mc-mods/create)
	- Disable Flywheel.
- [Flywheel](https://www.curseforge.com/minecraft/mc-mods/flywheel)
- [Physics Mod](https://www.curseforge.com/minecraft/mc-mods/physics-mod)
- [Scannable](https://www.curseforge.com/minecraft/mc-mods/scannable) 
	- Works on 1.12
- [Colormatic](https://www.curseforge.com/minecraft/mc-mods/colormatic)
- [ItemPhysic](https://www.curseforge.com/minecraft/mc-mods/itemphysic)
	- [Lite](https://www.curseforge.com/minecraft/mc-mods/itemphysic-lite) works
- RandomPatches [**(Forge)**](https://www.curseforge.com/minecraft/mc-mods/randompatches-forge) [**(Fabric)**](https://www.curseforge.com/minecraft/mc-mods/randompatches-fabric)
- [Smooth Font](https://www.curseforge.com/minecraft/mc-mods/smooth-font)
- [MrCrayfish's Gun Mod](https://www.curseforge.com/minecraft/mc-mods/mrcrayfishs-gun-mod)
	- 1.16.5 is broken
- [Applied Energistics](https://mcarchive.net/mods/applied-energistics?gvsn=), [Applied Energistics 2](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2)
- [Zombe](https://forum.feed-the-beast.com/threads/zombe-mod-for-ftb-1-4-7.18012/)
- [ReplayMod](https://www.replaymod.com/) 
	- FFMPEG is wrongly placed
- [Dynamic Surroundings](https://www.curseforge.com/minecraft/mc-mods/dynamic-surroundings) 
	- White textures on 1.12
- Sex mod **(thanks *@Adiixyz*)** 
- [Immersive Vehicles](https://www.curseforge.com/minecraft/mc-mods/minecraft-transport-simulator)
	- Only broken on Forge
- [Immersive Engineering](https://www.curseforge.com/minecraft/mc-mods/immersive-engineering) 
	- Works on 1.12
- [Immersive Portals](https://www.curseforge.com/minecraft/mc-mods/immersive-portals-mod)
- [Immersive Railroading](https://www.curseforge.com/minecraft/mc-mods/immersive-railroading)
- [Immersive Engineering](https://www.curseforge.com/minecraft/mc-mods/immersive-engineering)
- [DiscordRPC](https://www.curseforge.com/minecraft/mc-mods/discordrpc) 
	- If your PvP/Hack Client crashes because of this, contact their developers for a fix.

## Unsupported Clients

- [BatMod](https://batmod.com/)
- [LabyMod](https://www.labymod.net/en)
- [MysteryMod](https://mysterymod.net/)
- [Lunar Client](https://www.lunarclient.com/) 
	- ".exe"
- [Badlion Client](https://client.badlion.net/) 
	- ".exe"
- [Salwyrr Client](https://www.salwyrr.com/) 
	- You can't use a launcher in a launcher
- [Meteor Client](https://meteorclient.com/)
- [Pizza Client](https://qolhub.kieruken.dev/) 
- [Cheeto Client](https://qolhub.kieruken.dev/)
- [3arthh4ck](https://github.com/3arthqu4ke/3arthh4ck) 
	- [Patched](https://www.mediafire.com/file/n7ey56j5aued7r0/3arthh4ck-1.8.7-release.jar/file) version
- [Ares Client](https://www.aresclient.com/)
# Credits

- https://github.com/Mathias-Boulay/ and all the people in issue [#1948](https://github.com/PojavLauncherTeam/PojavLauncher/issues/1948)
- https://github.com/ZenZenXDz
- https://github.com/revoscode
- https://github.com/GaucovyAero
