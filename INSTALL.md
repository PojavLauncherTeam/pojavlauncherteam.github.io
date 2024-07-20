# Installing the launcher

## Android
Instructions for installing PojavLauncher on Android devices.

::: details Google Play
You can grab PojavLauncher from the Google Play Store [here.](https://play.google.com/store/apps/details?id=net.kdt.pojavlaunch)
:::

::: details GitHub Actions
If you want the latest and greatest to test before the official release, you can grab a copy from GitHub Actions.

**Using nightly.link:**
1. Download the [Latest Artifact](https://nightly.link/PojavLauncherTeam/PojavLauncher/workflows/android/v3_openjdk/app-debug.zip) using this link.
2. Install as any usual .apk

**Using Github (requires an account):**

1. Start off by heading to the [PojavLauncher](https://github.com/PojavLauncherTeam/PojavLauncher) repository and switching to the "Actions" tab.

![](./images/Actions/android/Android-Actions-1.png)

2. Next, select "Android CI" in the workflow selection menu.

![](./images/Actions/android/Android-Actions-2.png)

3. Choose a build with a green or blue checkmark next to the branch you want to download.
    - `v3_openjdk` will be the one for most people.

![](./images/Actions/android/Android-Actions-3.png)

4. Under "Artifacts", choose the build type you wish to download.
    - `app-debug` will be the one for most people.

![](./images/Actions/android/Android-Actions-4.png)

5. Install as any usual .apk
:::

::: details Source
**Instructions coming in a future revision to this website.**
:::

## iOS
Instructions for installing PojavLauncher on Apple devices.

::: details Sideloading TrollStore (No PC/Mac)
Notes:
- It is **highly recommended** you install __AdGuard__ from the __App Store__ to block Scarlet’s annoying ads
- This will be an extremely lengthy guide, so you’ll need a bunch of spare time.
- Only compatible for iOS/iPadOS 16 - 16.6.1

1. Now that you have gotten __AdGuard__ from the __App Store__, you are going to want __open the **Settings** app__, scroll down to **Safari**, and tap on extensions.

__Enable **AdGuard**__, and **__allow all__** of its content blockers.

2. Open __[Scarlet](https://usescarlet.com/)__.

Scroll down to the bottom of the page and click the “**Install**” button.

next, click “**Direct install**”

wait the for 10 seconds. **Don’t do anything to the iDevice for 10 seconds**.

when prompted to open the page in iTunes, click Open.

When it displays the message:“would you like to install [insert random certificate here]” click install. you may now close the website.

**Note**: the random unnamed certificate is completely normal. scarlet uses random enterprise certificates to be able to sideload apps on device. 

Note: due to scarlet using random enterprise certificates, the will commonly get revoked. if it is revoked try to install scarlet every few hours.

3. Next, go to Settings, General, VPN and Device Management, and where it says “enterprise app” should be a random certificate that says “Not Trusted” click it, and click Trust “(Random Scarlet Certificate)”
when prompted to trust it, click “Trust”
you should now be able to open scarlet.

4. Download the [TrollinstallerX.ipa](https://github.com/alfiecg24/TrollInstallerX/releases/download/1.0.2/TrollInstallerX.ipa)
^ This is your TrollStore installer ^

5. Open the Scarlet app, click the bottom middle button, and click the button in the top right corner. in the file browser, open the .ipa from where you've had saved it (regularly it would be in the Downloads folder.) and sideload the [TrollinstallerX.ipa](https://github.com/alfiecg24/TrollInstallerX/releases/download/1.0.2/TrollInstallerX.ipa)

6. Once Scarlet is done installing [TrollinstallerX](https://github.com/alfiecg24/TrollInstallerX/releases/download/1.0.2/TrollInstallerX.ipa), open the installed app, and press "Install Trollstore", wait for a pop up that will show a list of System Apps, and pick one. (we suggest picking Tips)

7. After that, the next steps are in the [Github Actions Tab](https://pojavlauncherteam.github.io/INSTALL.html#ios)
![](./images/Actions/ios/TSNOPC.png)
Note: enable URL Schemes in TrollStore Settings.
:::

::: details Sideloading (TrollStore)
We recommend TrollStore for all users if possible. This method allows for automatic JIT enabling, more memory allocation, and non-revoking installs.

### TrollStore compatibility depends on whether your iDevice is arm64 (A8-A11) or arm64e (A12+/M1+)

   #### For arm64, TrollStore is compatible with the following iOS versions:
  
    - 14.0 to 16.6.1
    - 17.0
  
   #### For arm64e, TrollStore is compatible with the following iOS versions:
  
    - 14.0 to 16.6.1
    - 17.0 (*)

	(*) - No Installation Method.

1. Follow the steps to install [TrollStore](https://github.com/opa334/TrollStore).
 
2. Download the latest release from [here](https://github.com/PojavLauncherTeam/PojavLauncher_iOS/releases/latest/download/net.kdt.pojavlauncher.ipa).
    - For a specific release, you can find its package on the [Releases](https://github.com/PojavLauncherTeam/PojavLauncher_iOS/releases) page

3. Locate where the .ipa was downloaded, tap the Share icon, and choose TrollStore in the list of options available.

You can now enjoy Minecraft: Java Edition on your iDevice!
Note: enable URL Schemes in TrollStore Settings.
:::

::: details Sideloading (Unjailbroken)
**Requires an active Apple ID, that has signed into the [Developer Portal](https://developer.apple.com/account) at least once.**

PojavLauncher supports being sideloaded with AltStore, Sideloadly, and Xcode. Instructions to use AltStore are below--for other options, refer to their documentation.

1. Follow the official guide on installing AltStore itself:
    - Instructions for [Mac](https://faq.altstore.io/getting-started/how-to-install-altstore-macos) and [Windows](https://faq.altstore.io/getting-started/how-to-install-altstore-windows)
    
2. Install the latest release using this [Install with AltStore](altstore://install?url=https://github.com/PojavLauncherTeam/PojavLauncher_iOS/releases/latest/download/net.kdt.pojavlauncher.ipa) button.
    - For a specific release, you can find its button on the [Releases](https://github.com/PojavLauncherTeam/PojavLauncher_iOS/releases) page

Installing PojavLauncher is not the end for iOS devices. In order to play Minecraft itself, you will need to [enable JIT](./JIT.md).
:::

::: details Sideloading (Jailbroken)
**Currently, AppSync Unified is not supported.** There is an [issue](https://github.com/akemin-dayo/AppSync/issues/108) regarding the data directory when installed with AppSync.

You can follow the `Sideloading (TrollStore)` or `Sideloading (Unjailbroken)` steps to sideload on a jailbroken iDevice. Regardless of the method, you will benefit from automatic JIT enabling and more memory allocation.
:::

::: details GitHub Actions
**Requires a GitHub account in order to download.**

If you want the latest and greatest to test before the official release, you can grab a copy from GitHub Actions.

1. Start off by heading to the [PojavLauncher iOS](https://github.com/PojavLauncherTeam/PojavLauncher_iOS) repository and switching to the "Actions" tab.

![](./images/Actions/ios/iOS-Actions-1.png)

2. Next, select "Development Build" in the workflow selection menu.

![](./images/Actions/ios/iOS-Actions-2.png)

3. Choose a build with a green or blue checkmark next to the branch you want to download.
    - `main` will be the one for most people.

![](./images/Actions/ios/iOS-Actions-3.png)

4. Under "Artifacts", choose `net.kdt.pojavlauncher.ipa`

![](./images/Actions/ios/iOS-Actions-4.png)

Once you have an Actions build downloaded, you can now unzip the file and use this .ipa for TrollStore or sideloading.
:::

::: details Source
**Instructions coming in a future revision to this website.**
:::
