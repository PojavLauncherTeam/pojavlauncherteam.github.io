# PLACEHOLDER COMMIT, will be removed, changed, or reverted as PR progresses.
# Building from source

* Even though it is well-explained, building from source requires skill, internet and time.

* You can try building on Android with [Termux](https://termux.dev), but no support will be included for it.

* It is recommended to clone the PojavLauncher repository before starting [Setting Up JRE](BUILD_FROM_SOURCE.html#setting-up-jre)

* ```git clone https://github.com/PojavLauncherTeam/PojavLauncher```

## Setting up JRE

* You can download it from [CI Auto Builds](https://github.com/PojavLauncherTeam/android-openjdk-build-multiarch/actions) if you don't want to/can't build.

* Source: [PojavLauncherTeam/android-openjdk-build-multiarch](https://github.com/PojavLauncherTeam/android-openjdk-build-multiarch)

### Android

* Clone the git repository of PojavLauncherTeam/android-openjdk-build-multiarch

```
git clone https://github.com/PojavLauncherTeam/android-openjdk-build-multiarch
```

* Change the directory to the cloned repository

```
cd android-openjdk-build-multiarch
```

* Download Android NDK r10e from [here](https://github.com/android/ndk/wiki/Unsupported-Downloads#r10e) and place it in this directory with a file explorer. (Can't automatically download because of EULA)

::: warning
Do not attempt to build using a newer or older NDK, it will lead to compilation errors.
:::

### iOS

* Get the latest [Xcode](https://developer.apple.com/xcode/) (tested with Xcode 12).

#### Platform and architecture specific environment variables

| Platform | Architecture | Target | Target_JDK |
| --------- | ---------- | ---------- | --------- |
| Android | armv8/aarch64 | aarch64-linux-android | aarch64 |
| Android | armv7/aarch32 | arm-linux-androideabi | arm |
| Android | x86/i686 | i686-linux-android | x86 |
| Android | x86_64/amd64 | x86_64-linux-android | x86_64 |
| iOS/iPadOS | armv8/aarch64 | aarch64-macos-ios | aarch64 |

#### Building JRE (Java Runtime Environment)

<CodeSwitcher :languages="{android:'Android',ios:'iOS'}">
<template v-slot:android>

```android
export BUILD_IOS=0
```

</template>
<template v-slot:ios>

```ios
export BUILD_IOS=1
```

</template>
</CodeSwitcher>

```export BUILD_FREETYPE_VERSION=[2.10.4]```

::: tip
You can use versions **between 2.6.2 and 2.10.4** but **2.10.4** is preferred.
:::

```export JDK_DEBUG_LEVEL=[release]```

::: tip
You can use **release**, **fastdebug** and **debug**, but **release** is preferred
:::

```export JVM_VARIANTS=[client]```

::: tip
You can use **client** and **server** variants, **Client** is for **aarch32** and **server** is for **other architectures**
:::

(Android only)

```./extractndk.sh```

```./maketoolchain.sh```

##### Get CUPS, Freetype and build Freetype

```./getlibs.sh```

```./buildlibs.sh```

##### Clone JDK, run once

```./clonejdk.sh```

##### Configure JDK and build

```./buildjdk.sh```

::: tip
If no configuration is changed, run ```sh makejdkwithoutconfigure.sh``` instead
:::

##### Pack the built JDK

```./removejdkdebuginfo.sh```

```./tarjdk.sh```

## LWJGL

* Coming soon

## Building the Launcher

### Updating translations

* Updating translations is easier thanks to language list updater scripts

* Just run this command and it'll be automatically updated from Crowdin.

<CodeSwitcher :languages="{win:'Windows',linuxmac:'Linux/MacOS'}">
<template v-slot:win>

```win
scripts\languagelist_updater.bat
```

</template>
<template v-slot:linuxmac>

```linuxmac
chmod +x scripts/languagelist_updater.sh
bash scripts/languagelist_updater.sh
```

</template>
</CodeSwitcher>

### Build GLFW Stub

<CodeSwitcher :languages="{win:'Windows',linuxmac:'Linux/MacOS'}">
<template v-slot:win>

```win
./gradlew :jre_lwjgl3glfw:build
```

</template>
<template v-slot:linuxmac>

```linuxmac
gradle :jre_lwjgl3glfw:build
```

</template>
</CodeSwitcher>

### Build the Launcher

<CodeSwitcher :languages="{win:'Windows',linuxmac:'Linux/MacOS'}">
<template v-slot:win>

```win
./gradlew.bat :app_pojavlauncher:assembleDebug
```

</template>
<template v-slot:linuxmac>

```linuxmac
./gradlew :app_pojavlauncher:assembleDebug
```

</template>
</CodeSwitcher>
