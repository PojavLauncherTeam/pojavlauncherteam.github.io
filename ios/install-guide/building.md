# Getting PojavLauncher from source

PojavLauncher is open-source, and whether it be that you wish to test code changes or try out the newest features manually, you can!

## Prerequesites
We've recently overhauled our build system to use Makefiles rather than shell scripts, so regardless of the build OS, you're going to need `make`.

Since you can compile PojavLauncher on more than one operating system, you'll need to get the required dependencies according to your setup.

**macOS**
- Xcode 11.7 or higher
    - This version runs on macOS Catalina 10.15.2 or later.
- Homebrew or Procursus dependencies
    - `cmake`, for compiling the Objective-C part of the app
    - `openjdk`, for compiling the Java part of the app
        - JDK 8 is recommended as building with a higher version will force you to use Java 16 when playing the game.
    - `ldid`, for pseudo-codesigning. 
    - `dpkg`, for packaging
        - With Procursus, this is automatically installed for you.
    - `fakeroot`, for packaging
        - `fakeroot` is not available from Homebrew on Apple Silicon.

**iOS/iPadOS**
- A jailbreak with Procursus
    - `cmake`, for compiling the Objective-C part of the app
    - `openjdk`, for compiling the Java part of the app
        - JDK 8 is recommended as building with a higher version will force you to use Java 16 when playing the game.
    - `ldid`, for pseudo-codesigning. 
    - `dpkg-dev`, for packaging
    - `fakeroot`, for packaging
    - `build-essential` for an SDK
        - When installing `cmake`, this is also installed for you

## Building
It's time to get through the actual building process and cover each option.

**macOS Note:** If you wish to use some of these options, run `export DEVICE_IP=<your.idevice.ip.here> DEVICE_PORT=<your ssh port>`. This way you can take full advantage of the Makefile.

### make
The option simply runs everything else (except deploy or install). 

### make native
This option compiles the Objective-C code that is used to draw the UI and interface with Java (located in `Natives`). 

### make java
This option compiles the Java code that is used to interface with Minecraft itself (located in `JavaApp`).

### make extras
This options compiles the assets and storyboards that are used as the foundation of the app (located in `Natives/Assets.xcassets` and `Natives/en.lproj`).

**Note:** If compiling on iOS/iPadOS, this option is disabled as the required tools are not available. Pre-compiled versions are used instead when packaging.

### make package
***Requires `native`, `java`, and `extra`.***
This option creates a .deb package from the completed app. It requires that you have compiled native, java, and extra before packaging. 

**Note:** If compiling with an M1 Mac, you may have issues with `fakeroot` not being available due to Homebrew dropping support. We recommend you use Procursus' macOS bootstrap instead

### make deploy
***Requires `native` and `java`.***
This option "piggybacks" an existing install of PojavLauncher and only copies the newly built natives. It requires that you have compiled native. If you're on macOS, it connects to your iDevice and copies to there.

### make install
***Requires `package`.***
This option uninstalls any other versions and installe your newly compiled .deb. This required that you have compiled package. If you're on macOS, it connects to your iDevice and installs there.

**Note:** If this option fails, you can still manually copy the package contents and run `uicache -p /Applications/PojavLauncher.app`
