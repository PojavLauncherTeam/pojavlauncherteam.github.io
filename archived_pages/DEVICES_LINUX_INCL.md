# Supported Devices

## Android

Minimum requirements:
- 32-bit (aarch32 or 32-bit/i386) CPU
- Android 5.0
- 1 gigabyte of RAM

Recommended requirements:
- 64-bit (aarch64 or 64-bit/x86_64) CPU
- Android 8.0
- 4 gigabytes of RAM
- GPU with "Vulkan" API (support for `vulkanmod` and/or `v3_zink`)

### ChromeOS

Chromebooks have very similar system requirements, however Android version does not matter, as long as you can install Android apps.

### Linux

It is not recommended to run PojavLauncher on Linux. Though, you can try sideloading the app on your distribution by using Anbox or Waydroid. We won't provide support for it though.
- Installing Anbox
  - on Ubuntu (`snap` is required);
  ```
  snap install --devmode --beta anbox
  ```
   You'll have to install necessary kernel modules though, so check the official [Anbox wiki](https://docs.anbox.io/userguide/install_kernel_modules.html) about it.
  - on Arch-based (Manjaro, Endeavor, Garuda) distributions;
  
    Check the official [Arch wiki](https://wiki.archlinux.org/title/Anbox#:~:text=Project%20provides%20OpenGApps.-,Install%20Anbox,steps%20done%20to%20use%20Anbox!) about it, as it is a loooong tutorial to be included here.

## iOS

Minimum requirements:
- Apple A8 SoC
   - The Apple A7 SoC is losing support in PojavLauncher 2.2.
- iOS 12
- 1 gigabyte of RAM

Recommended requirements:
- Apple A10/A10X Fusion SoC
- iOS 14
- 2 gigabytes of RAM
