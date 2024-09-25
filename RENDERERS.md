# Renderers
Minecraft runs on OpenGL, and mobile devices generally only support OpenGL ES (GLES). And since Minecraft won't run on GLES, we have to use renderers as compatibility layers between OpenGL ES and OpenGL.
> All of the following renderers were tested using the same environment; Minecraft 1.21.1 with Optifine, 8 chunks, running on a Snapdragon 778g at 80% resolution scale, with Fast graphics and smooth lighting.
## Holy GL4ES
- Optimized for performance, Holy GL4ES is the default renderer in PojavLauncher and should be used in almost all scenrarios. 
- Supports OpenGL 2.1 and has shader converting capabilities, thus makes up for about 1/8 of the OpenGL 3.x standard.
- Works on all versions of vanilla Minecraft.
### A screenshot of Holy GL4ES running Minecraft 1.21.1
![holygl4es](https://raw.githubusercontent.com/whal-whales/random-imgs-repo-for-stuff/refs/heads/main/2024-09-22_12.32.23.png)
## ANGLE
- Slower than Holy GL4ES(*), runs on Vulkan. Should be used only in specific cases, where a server resource pack or a mod fails to run due to missing OpenGL extensions.
- Supports OpenGL 3.2 only.
- Only works on Minecraft 1.17+
> On iOS devices, ANGLE can provide faster performance than Holy GL4ES.

### A screenshot of ANGLE running Minecraft 1.21.1
![angle](https://raw.githubusercontent.com/whal-whales/random-imgs-repo-for-stuff/refs/heads/main/Screenshot_20240922_124430_PojavLauncher%20(Minecraft%20Java%20Edition%20for%20Android).jpg)
## Zink
- Mid. It's only useful for mods that don't run due to missing OpenGL extensions and for running shaders.
- Supports OpenGL 4.5 on Adreno GPUs with Turnip, and OpenGL 3.1/3.2(*) on Mali GPUs. Adreno GPUs without Turnip
**will** face crashes when using Zink.
- Works on all vanilla versions of Minecraft.

> (*) Most Mali GPUs can only run OpenGL 3.1

### A screenshot of Zink running Minecraft 1.21.1
![Zink](https://raw.githubusercontent.com/whal-whales/random-imgs-repo-for-stuff/refs/heads/main/2024-09-22_12.38.14.png)
