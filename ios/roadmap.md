# Roadmap for the future

PojavLauncher is always looking to improve itself with better compatibility, smoother gameplay, and more features for you to enjoy. The iOS version was made with limited resources and yet it's still a powerful Java Edition launcher, and we hope to see more come from it.

### Custom controls
The Android launcher has support for custom controls and button implementations, and we're hard at work trying to do the same for iOS. Everyone is different, and we hope to embrace that with custom controls that can be tailored for your needs and wants.

### External gamepads, keyboards, and mice
iOS 13 brought native support for DualShock 4 and Xbox One controllers, which was expanded to the DualSense and Xbox Series controllers with iOS 14.5. Many games have updated to support external controller gameplay to allow a better, console-like experience to the palm of your hand. iPadOS has also gained true support for mice and keyboards as well--features we wish to bring to the game.

### Better compatibility
PojavLauncher is currently using Procursus' OpenJDK 16 package. While a beast in later versions of vanilla Minecraft, this presents compatibility issues with older and modded versions. With OpenJDK 16, PojavLauncher only supports 1.6 or later for vanilla, and 1.16 or later for Forge and Fabric. We've made porting OpenJDK 8 our top priority and are sooo close to getting it done and hope to get it in your hands soon.

### Optimizing for memory usage
While PojavLauncher, by default, only allocates 1/4 of your system memory, iOS can still have issues and kill the process for violating its limits. Doregon is getting to work on optimizing PojavLauncher for use on iOS/iPadOS, where memory can be tight and it's a war between jetsam and the user. He's also planning on building in a script that automatically sets the memory limits for PojavLauncher--so that iOS/iPadOS doesn't crash over a few buildings more.

### A refreshed UI
We admit it: the UI is a bit unintuitive. We plan on beginning a step towards a new one, with a version selector, settings screen, and direct access to files so you don't have to leave the game for a log or to change Java arguments.

### 1.17 and beyond
Mojang switched things up with snapshot 21w10a: OpenGL 3.2. PojavLauncher uses GL4ES, which is based off of OpenGL 2.1, which means that 21w10a don't work yet. We're aware and have began the process of integrating new frameworks to make 1.17--and beyond--work with PojavLauncher.
