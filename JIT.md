# iOS and "JIT"

## What is JIT and why do I care?
JIT stands for **just-in-time compilation**, and (although not specific to Java), it serves as a method of executing Java code quicker then its alternatives, by compiling *essential instructions* at runtime, rather than its slower alternatives that compile *all* code at runtime repeatedly or writing in a less portable, hardware-level format. It is the fastest™ method to running Minecraft: Java Edition on mobile devices, essentially required for a more pleasant gaming experience.

On Apple's mobile platforms (iOS, iPadOS, tvOS, in our case), a security feature known as **code-signing** is deeply rooted in the operating system. It serves to verify that applications haven't been tampered with after they were installed by a user, done so that malicious payload cannot be installed after-the-fact by a malicious user(e.g. hackers). However, due to the process in which code-signing works, this prevents JIT from functioning properly as it mainly requires reading code, modifying it, and then executing it in some fashion (whether that be by copying the code to a new location in memory, executing directly, or mirroring it).

## What does this mean for PojavLauncher?

### Jailbroken devices
Users with Jailbroken devices don't need to worry about JIT requirements, as PojavLauncher is specially built to detect jailbreaks and automatically enable new features.

### Unjailbroken devices
Users with Unjailbroken devices can see two different outcomes, based on what they used to sideload PojavLauncher.

#### TrollStore
If you used TrollStore to sideload PojavLauncher, good news: PojavLauncher takes advantage of the extended entitlements with TrollStore and automatically enables JIT when launched.

#### Normal sideload
If you sideload normally, you will need to enable JIT in some way. The most common method is to attach a debug server to the application while it's running - AltStore, SideStore, SideJITServer, and Jitterbug all of these use this method to enable JIT. 

The only downside to this method is that you are required to be connected to a WiFi network in order to enable JIT. (*)

(*) - Enabling JIT on iOS 17.0.1+ & iOS 18 betas (at the moment) can only be enabled through different various methods listed below that utilize pymobiledevice3 to enable JIT due to changes in iOS. 

## What are the methods to enable JIT?

The methods to enable JIT can be found [here](https://github.com/ItAnthon/JIT-on-iOS).

Methods not listed here are not confirmed or recommended by us for use with PojavLauncher.

## So how do I enable JIT?

- [TrollStore Lite](https://havoc.app/package/trollstorelite) (!)

- [TrollStore](https://ios.cfw.guide/installing-trollstore) (@)

- [AltStore AltJIT](https://faq.altstore.io/how-to-use-altstore/altjit) (#)

- [Jitterbug](https://github.com/osy/Jitterbug/tree/main/Jitterbug) ($)

- [SideStore](https://docs.sidestore.io/docs/faq#can-i-activate-jit) ($)

- [SideJITServer](https://github.com/nythepegasus/SideJITServer) (%)

(!) - Limited to Jailbroken devices only. (JIT is granted by the Jailbreak itself)

(@) - Limited to devices with the CoreTrust bug. (iOS 14.0 - iOS 16.6.1 & iOS 17.0)

(#) - AltJIT for iOS 17.x & iOS 18 betas only works on macOS. Requires pymobiledevice3.

($) - Does not work for iOS 17.x & iOS 18 betas, as enabling JIT will be done with pymobiledevice3.

(%) - Does not work for iOS 16.x or below, use the other methods listed above to enable JIT. This method is meant for iOS 17.x & iOS 18 betas.

## Methods coming Soon:

- JITStreamer 2.0 (^)

- UTM SE (^)

(^) - iOS 17.4+ Only
