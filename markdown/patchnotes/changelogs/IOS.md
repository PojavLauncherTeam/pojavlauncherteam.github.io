# PojavLauncher iOS

## 2.2 "Deepslate"
With this release of PojavLauncher, we refined features, fixed bugs, and implemented small additions to existing ones to buff user experience. While there are not many notable changes to discuss here, there are some we can show:
- Implemented a controller configurator
- Increased reliability in various places
- Added haptics to the on-screen controls
- Switched to new input methods to speed up control times
- Secured demo mode
- Added new preferences to control more of the app
- Resolve various issues with windowing in older versions
- and many, many more!

**This is the last major release of PojavLauncher that will support iOS 12 and 13.** Important security patches and bug fixes will be applied when required for a limited time, however take note that issues encountered will not be considered high priority. See more information in #547.

A full commit changelog is available [here](https://github.com/PojavLauncherTeam/PojavLauncher_iOS/compare/v2.1.3...v2.2).

## 2.1 "Sculk Catalyst"
Minor release, major changes!

### Jailbreak requirement
PojavLauncher no longer requires a jailbreak to work, so it will also work on the latest iOS version. While it works, certain features are limited:
- You will need a support app to launch with JIT enabled. JitStreamer integration is done to automate this task.
- Initial Wi-Fi connection is required to enable JIT. Cellular data isn’t supported, Wi-Fi hotspot might be a workaround.
- RAM allocation is limited. Attempt to go beyond the limit will result in random crashes while loading world chunks.

If installed with TrollStore, these limitations aren’t applied, as it has sandbox exceptions to bypass, so it works like when jailbroken.

### New features
* Added Demo mode support
* Automatic Java version and Renderer selection
* Cosmetica custom capes integration
* Complete Controller support
* Fullscreen AirPlay display support
* Keyboard and mouse support deepened
* Many settings that were missing from Android are added
* (iPadOS 16) Stage Manager support

### Security
* Patch log4shell exploit in client

### User interface
* Added vertical UI
* Redesigned Launcher UI to match Android
* The current login state will be shown in the title
* Play button is greyed out when launching
* Back button is hidden when launching
* Custom controls UI completed
* The control button editor is now a movable window
* When game crash occurs, Log Output will be shown for user to determine the problem in place
* Multilingual support: you can contribute your translation through Crowdin
* New switch to unlock iPadOS UI, allows iPhone users to unlock certain features that are only available on iPad (floating keyboard for example)

### Fixes
* Slight changes to error messages
* Fix Makefile errors in `deploy` and `ipa`
* Fix NullPointerException when launching ≤1.6.4
* Fix NullPointerException when setting inherited fields
* Fix “Share your logs” not working
* Fix Forge, Fabric 1.17+ not launching
* Fix postinst issue on Procursus

### Issues
* Nintendo Switch Joy-Con controllers are only officially supported since iOS 16.0
* Mouse support requires iOS 14.0 or later, keyboards require iOS 13.4 or later
* Old (pre-2.0) custom control .json files no longer work, remove to fix
* This is the last release that will support Apple devices with the A7 chip
* Mojang login has been removed with this release due to the March 10th deadline

## 2.0.1
This release is identical to v2.0, except with a fix for issues installing on Procursus jailbreak, and fixes for the depiction.

## 2.0 "Raw Iron"
### Changes
- The Login view has been simplified to three easy buttons
- The Offline Account has been replaced with [Local Account](https://pojavlauncherteam.github.io/updates/local.html). Installing Minecraft now requires a Mojang or Microsoft account logged in.
- New FAQ page to show quick answers to questions
- New About view to show quick details, links, and update history
- Ability to send logs from within the launcher
- The Select Account screen is now a pop-up window
- New picker view to switch versions without typing them manually
- Support to show your locally installed clients
- New settings page to manage preferences
- OpenJDK 8 support, to allow older versions of modded Minecraft
- New mod installer, built into the launcher
- Unfinished in-launcher custom controls (#292)
- Move to `/usr/share`, for better rootFS compatibility
- New packaging format (#291)
  - release, for iOS 14 and lower (full root access jailbreaks)
  - release-rootless, for iOS 15 (Procursus rootless jailbreak)
 
### Fixes
- WIP fix for typing on 1.12.2 and older
- The hotbar now works across GUI scales
- (With JDK 8) Forge 1.8.9 - 1.15.2 now work
- (With JDK 8) Vanilla 1.5.2 and under now work
- Buttons now scale correctly according to screen size
- Crash if login to Microsoft fails.

### Issues
- Old custom control .json files no longer work, remove to fix
- Custom controls settings page is not complete, there may be some issues!
- An unknown issue might cause Taurine, 14.3, and A12+ to crash on launch.

### A note for old iDevices
- If your device has only 1GB RAM (total), it might able to boot Minecraft to main screen, but might not able to join worlds or servers due to too little RAM. Higher RAM can be set (using the Java arguments preference and overb0ard), but you may need to close all apps and remove some tweaks in order to free up enough.
- 
## 1.2
### Changes
- Use new method for Microsoft login
- Added gl4es 1.1.5 as an option
- WIP custom controls (can be changed by placing at `/var/mobile/Documents/.pojavlauncher/controlmap/default.json`). Note that some functions may not work properly.
- WIP external mouse support
- Custom environment variables, in /var/mobile/Documents/.pojavlauncher/custom_env.txt
- Reduction of file size with removal of unused binaries
- Moved latestlog.txt and overrideargs.txt to /var/mobile/Documents/.pojavlauncher
### Fixes
- Fix file permission issues during install of package
- Hide home bar like Bedrock Edition
- Properly hide iPad status bar
### Known issues
- Crash if login to Microsoft fails.
- Control buttons notch offset seems doubled.
- Several Forge versions won’t work due to removed deprecated classes (see #67 and #68).
- Text input will not work on 1.12.2 and below.

### A note for old iDevices
- If your device has only 1GB RAM (total), it might able to boot Minecraft to main screen, but might not able to join worlds or servers due to too little RAM. Higher RAM can be set (using the overrideargs.txt file and jetsamctl), but we are unsure if iOS 12 will give enough free RAM. 

## 1.1
### Changes
- Added a place to customize JVM Flags, by create and edit `minecraft/overrideargs.txt` file.
- Changed button offset for avoiding notch cutout on iPhone X and newer.
- Forge 1.13+ (not all) and Fabric API are now supported.
- `launcher_profiles.json` is now automatically created.
- Minecraft 1.6.1 to 1.13.2 are now playable.
- Mojang authentication was re-written, so it should work now.

### Fixes
- Fixed random crashes occur while Minecraft is initializing.

### Known issues
- Crash if login to Microsoft fails.
- Several Forge versions won’t work due to removed deprecated classes (see #67 and #68).
- Text input will not work on 1.12.2 and below.

### A note for old iDevices
- If your device has only 1GB RAM (total), it might able to boot Minecraft to main screen, but might not able to join worlds due to too few RAM. Higher RAM can be set, but I'm unsure if iOS 12 will gives enough free RAM.

## 1.0
### Features
- Login with Mojang (might not work), Microsoft (not tested) or offline.
- Minecraft 1.14+ are playable.
- Multiplayer and joining servers works.
- Audio works (need enable ringer).
- Fabric and OptiFine works.
- Bedrock-like gestures: click to hotbar item; click to place block (trigger right mouse); hold and move to destroy blocks (trigger hold left mouse), but attacking entites is left mouse, so not same as Bedrock.
- Hold screen on UI will hold the left mouse, so it can also used for moving the scroll bar.
- On-screen control buttons.

### Limitations
- Jailbreak is required in order to install OpenJDK and PojavLauncher.
- Forge won't work.
- Fabric API won't work.
- [Tell us](https://github.com/PojavLauncherTeam/PojavLauncher_iOS/issues).

### Crashes
- ~~I've got some reports that JVM was crashing after press “Play” button.~~
- ~~Also, it seems that checkra1n jailbroken devices will get crashed at entering Minecraft (?)~~
- They were all random crashes and will be fixed in next release.
