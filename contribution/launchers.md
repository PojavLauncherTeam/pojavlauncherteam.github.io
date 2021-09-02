## Contributing to the launchers

PojavLauncher is completely open source, so we're happy to accept your contributions to our launcher repositories, whether it be code or not. Here's some things to do for contributions:

* Submit your changes through a pull request and be descriptive about what changed. This makes our jobs easier by helping us figure out what changed quicker.

* Try not to lump multiple, unrelated changes into one pull. This can make it harder for us to review the code or cause a situation where nothing too productive *actually* changed. If you're going to make multiple, unrelated changes, try seeing what can be grouped with another, and submit multiple pull requests instead.

* Be flexible and ready to change your code if required. We recommend keeping your fork healthy and up to date by creating pull requests on your repository (from PojavLauncherTeam to your fork) to grab the latest changes.

The following should help decipher how PojavLauncher works.

### iOS/iPadOS

* Uses OpenJDK 16 from Procursus to get a real Java environment 
* Uses MetalANGLE for OpenGL ES -> Metal translator.
* Uses GL4ES for OpenGL -> OpenGL ES translator.
* Uses our [LWJGL3 iOS/iPadOS port](https://github.com/PojavLauncherTeam/lwjgl3).
* Uses the same launch method as PojavLauncher Android.

### Android

* OpenJDK 8 Mobile port: ARM32, ARM64, x86, x86_64
* Mod installer headless
* Mod installer with GUI - uses Caciocavallo project for AWT without X11.
* OpenGL in OpenJDK environment
* OpenAL (work on most devices)
* Support Minecraft 1.12.2 and below - uses lwjglx, a LWJGL2 compatibility layer for LWJGL3.
* Support Minecraft 1.13 - uses GLFW stub.
* Game surface zooming.
* New input pipe rewritten to native code to boost performance.
