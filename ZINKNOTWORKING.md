# Zink doesn't work
If Zink worked for you before the `foxglove` update, this might get it running on your device. It doesn't help on devices which don't fulfill the base Zink requirements.

**/storage/emulated/0/Android/data/net.kdt.pojavlaunch/files/custom_env.txt**
	(if this file does not exist, create it)

```
MESA_GL_VERSION_OVERRIDE=4.6
MESA_GLSL_VERSION_OVERRIDE=460
```
