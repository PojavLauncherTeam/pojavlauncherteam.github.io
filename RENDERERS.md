# Renderers
Minecraft runs on OpenGL, and mobile devices generally only support OpenGL ES (GLES). And since Minecraft won't run on GLES, we have to use renderers as compatibility layers between OpenGL ES and OpenGL.
## Holy GL4ES
- Designed for performance, Holy GL4ES is the default renderer in PojavLauncher and should be used in almost all scenrarios. 
- Supports OpenGL 2.1 and has shader converting capabilities, thus makes up for about 1/8 of the OpenGL 3.x standard.
- Works on all versions of vanilla Minecraft.

### A screenshot of Holy GL4ES running Minecraft 1.19.4
![holygl4es](https://cdn.discordapp.com/attachments/967462820012773466/1094267417980579890/Screenshot_2023-04-08-16-17-56-860_net.kdt.pojavlaunch.debug.jpg)

## ANGLE
- A bit slower than Holy GL4ES, runs on Vulkan. Should be used only in specific cases, where one can't load a server resource pack or a mod does not run because of missing OpenGL extensions.
- Supports OpenGL 3.2 only.
- Only works on Minecraft 1.17+

### A screenshot of ANGLE running Minecraft 1.19.4
![angle](https://cdn.discordapp.com/attachments/967462820012773466/1094267418236428288/Screenshot_2023-04-08-16-19-39-025_net.kdt.pojavlaunch.debug.jpg)

## virglrenderer
- Very slow, will soon be removed. It's only use cases are mods that don't run because of missing OpenGL extensions and running shaders.
- Supports OpenGL 4.3.
- Works on Minecraft 1.7+, can be extremely buggy.

### A screenshot of virglrenderer running Minecraft 1.12.2
![virglrenderer](https://cdn.discordapp.com/attachments/967462820012773466/1094267418517454858/Screenshot_2023-04-08-16-27-08-363_net.kdt.pojavlaunch.debug.jpg)
