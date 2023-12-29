# Unsupported Mods and Clients
Not everything that works on PC works on PojavLauncher. Below is a non-exhaustive list of mods that **may** not work.

## Performance Mods + Shaders
- [Sodium](https://www.curseforge.com/minecraft/mc-mods/sodium) **([patch](https://www.mediafire.com/folder/n004fh6pxuxk8/Sodium_1.17%2B) for GL4ES)**
- [Rubidium](https://www.curseforge.com/minecraft/mc-mods/rubidium/files) **([patch](https://www.mediafire.com/folder/jcyrf8l0osn4m/Rubidium_1.17%2B) for GL4ES)**
- [Chlorine](https://www.curseforge.com/minecraft/mc-mods/chlorine)
- [ShadersMod (GLSL Shaders)](https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/minecraft-mods/1286604-shaders-mod-updated-by-karyonix)
- [OptiFine](https://optifine.net/home)[^1]

## Skyblock Mods
- [Essential](https://essential.gg/)[^2]
- [Skytils](https://github.com/Skytils/SkytilsMod) **([1.3.0-pre5](https://github.com/Skytils/SkytilsMod/releases/download/v1.3.0-pre5/Skytils-1.3.0-pre5.jar) works)**
- [Patcher](https://github.com/Sk1erLLC/Patcher) **([1.6.1](https://www.mediafire.com/file/7a3gubce278k338/Patcher-1.6.1_1.8.9.jar/file) works)**
- [NotEnoughUpdates](https://github.com/Moulberry/NotEnoughUpdates/releases) **([2.1.1-pre-1](https://www.mediafire.com/file/u0l09df4riulu2w/NotEnoughUpdates-2.1.1-pre-1.jar/file) works)**
- [Skyblock Extras](https://sbewebsite.appspot.com/)

## Input-related Mods
- [MidnightControls](https://github.com/TeamMidnightDust/MidnightControls/releases)
- [Controllable](https://www.curseforge.com/minecraft/mc-mods/controllable)
- [MouseTweaks](https://www.curseforge.com/minecraft/mc-mods/mouse-tweaks)
- almost all of them don't work because they aren't made with Android's inputs in mind

## Other Mods
- [Create](https://www.curseforge.com/minecraft/mc-mods/create)[^3]
- [Flywheel](https://www.curseforge.com/minecraft/mc-mods/flywheel)[^3]
- [Physics Mod](https://www.curseforge.com/minecraft/mc-mods/physics-mod)[^4]
- [Scannable](https://www.curseforge.com/minecraft/mc-mods/scannable)[^5]
- [Colormatic](https://www.curseforge.com/minecraft/mc-mods/colormatic)
- ItemPhysic (**[Lite](https://www.curseforge.com/minecraft/mc-mods/itemphysic-lite) works**)
- RandomPatches [**(Forge)**](https://www.curseforge.com/minecraft/mc-mods/randompatches-forge) [**(Fabric)**](https://www.curseforge.com/minecraft/mc-mods/randompatches-fabric)
- [Smooth Font](https://www.curseforge.com/minecraft/mc-mods/smooth-font)
- [MrCrayfish's Gun Mod **(1.16.5)**](https://www.curseforge.com/minecraft/mc-mods/mrcrayfishs-gun-mod)
- [Applied Energistics](https://mcarchive.net/mods/applied-energistics?gvsn=), [Applied Energistics 2](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2)
- [Zombe](https://forum.feed-the-beast.com/threads/zombe-mod-for-ftb-1-4-7.18012/)
- [Dynamic Surroundings](https://www.curseforge.com/minecraft/mc-mods/dynamic-surroundings)[^6]
- Sex mod[^7] 
- [Immersive Vehicles](https://www.curseforge.com/minecraft/mc-mods/minecraft-transport-simulator)[^8]
- [Immersive Engineering](https://www.curseforge.com/minecraft/mc-mods/immersive-engineering)[^5]
- [Immersive Portals](https://www.curseforge.com/minecraft/mc-mods/immersive-portals-mod)
- [Immersive Railroading](https://www.curseforge.com/minecraft/mc-mods/immersive-railroading)
- [Immersive Engineering](https://www.curseforge.com/minecraft/mc-mods/immersive-engineering)
- [DiscordRPC](https://www.curseforge.com/minecraft/mc-mods/discordrpc)[^9]

## Unsupported Clients

- [BatMod](https://batmod.com/)
- [LabyMod](https://www.labymod.net/en)
- [MysteryMod](https://mysterymod.net/)
- [Lunar Client](https://www.lunarclient.com/)[^10]
- [Badlion Client](https://client.badlion.net/)[^10]
- [Salwyrr Client](https://www.salwyrr.com/)[^10]
- [Meteor Client](https://meteorclient.com/)
- [Pizza Client](https://qolhub.kieruken.dev/) 
- [Cheeto Client](https://qolhub.kieruken.dev/)
- [3arthh4ck](https://github.com/3arthqu4ke/3arthh4ck) ([patched](https://www.mediafire.com/file/n7ey56j5aued7r0/3arthh4ck-1.8.7-release.jar/file) version here)
- [Ares Client](https://www.aresclient.com/)
# Credits

- [Mathias Boulay](https://github.com/Mathias-Boulay/) and all the people in issue [#1948](https://github.com/PojavLauncherTeam/PojavLauncher/issues/1948)

- [ZenZenXDz](https://github.com/ZenZenXDz)

- [revoscode](https://github.com/revoscode)

- [GaucovyAero](https://github.com/GaucovyAero)

- [Renegade4339](https://github.com/Renegade4339)

[^1]:(**Render Regions don't work**, everything else does) - Big note here. The only supported shaders are [Open4ES](https://www.mediafire.com/folder/cp87zpb3ichj7/Open4ES) for GL4ES. It works best with Adreno graphics (found in Qualcomm Snapdragon SoCs) and PowerVR graphics, with required patches (found in several low-end MediaTek SoCs). Mali GPUs are not supported. Below is a list of smartphones that are tested and works with Open4ES:

	- **Xiaomi Poco F3** (Snapdragon 870)
	- **Xiaomi Poco X5 Pro** (Snapdragon 778G)
	- **Xiaomi Redmi Note 8** (Snapdragon 665)
	- **Oppo A53** (Snapdragon 460)
 [^2]: Only on certain devices as of this writing. Should it not work in your device, please inform it in our issue tracker or in our Discord server.
 [^3]: Disable the Flywheel backend by either one of the two steps (Although despite this, it's completely incompatible with GL4ES on devices with Mali GPUs.):

	- Go to `.../config/flywheel.json` and set the `backend` option to `OFF`.
	- Have a render set to anything but GL4ES, launch the game, go to any world and execute this command: `/flywheel backend off`
 [^4]: Works on IOS and not Android.
 [^5]: Works in 1.12.2
 [^6]: White textures on 1.12
 [^7]: **Thanks *@Adiixyz*** and no, we will NOT provide the link. Go figure.
 [^8]: Forge Only
 [^9]: Big note here. If your PvP/Hack Client crashes because of this, contact their developers for a fix.
 [^10]: Obvious reason: ".exe".
