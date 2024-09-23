# Renderers
Minecraft runs on OpenGL, and mobile devices generally only support OpenGL ES (GLES). And since Minecraft won't run on GLES, we have to use renderers as compatibility layers between OpenGL ES and OpenGL.
> All of the following renderers were tested using the same environment; Minecraft 1.21.1 with Optifine, 8 chunks, running on a Snapdragon 778g at 80% resolution scale, with Fast graphics and smooth lighting.
## Holy GL4ES
- Optimized for performance, Holy GL4ES is the default renderer in PojavLauncher and should be used in almost all scenrarios. 
- Supports OpenGL 2.1 and has shader converting capabilities, thus makes up for about 1/8 of the OpenGL 3.x standard.
- Works on all versions of vanilla Minecraft.
### A screenshot of Holy GL4ES running Minecraft 1.21.1
![holygl4es](https://cdn.discordapp.com/attachments/729671788187091024/1287348906983952497/2024-09-22_12.32.23.png?ex=66f28a19&is=66f13899&hm=63c6388b26f3cc1d4fbe67d74216de09ccb5a0ad0b27d0a18004dc9d67ad81c7&)
## ANGLE
- Slower than Holy GL4ES(*), runs on Vulkan. Should be used only in specific cases, where a server resource pack or a mod fails to run due to missing OpenGL extensions.
- Supports OpenGL 3.2 only.
- Only works on Minecraft 1.17+
> On iOS devices, ANGLE can provide faster performance than Holy GL4ES.

### A screenshot of ANGLE running Minecraft 1.21.1
![angle](https://cdn.discordapp.com/attachments/729671788187091024/1287348906191093811/Screenshot_20240922_124430_PojavLauncher_Minecraft_Java_Edition_for_Android.jpg?ex=66f28a19&is=66f13899&hm=88e553848a800ce70b019fded18cbdfbe62b64fcdc1201c491966e74011b3938&)

## Zink
- Slow. It's only useful for mods that don't run due to missing OpenGL extensions and for running shaders.
- Supports OpenGL 4.5 on Adreno GPUs with Turnip, and OpenGL 3.3 on Mali GPUs. Adreno GPUs without Turnip **will** experience significant bugs or crashes when using Zink.
- Works on all vanilla versions of Minecraft.

### A screenshot of Zink running Minecraft 1.21.1
![Zink](https://cdn.discordapp.com/attachments/729671788187091024/1287348906606461000/2024-09-22_12.38.14.png?ex=66f28a19&is=66f13899&hm=9f1dc738d286463d1d2fcf7e9b055c06da027353ace6ddad043c22667b2d8f1f&)
