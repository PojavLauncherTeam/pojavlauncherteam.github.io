# iOS and "JIT"

## What is JIT and why do I care?
JIT stands for **just-in-time compilation**, and (although not specific to Java), it serves as a method of executing Java code quicker then the alternatives, by compiling as-needed functions at runtime, rather than its slower alternatives to compile all code at runtime repeatedly or writing in a less portable, hardware-level format. It is the fastest method to running Minecraft: Java Edition on mobile devices, essentially required for a usable experience.

On Apple's mobile platforms (iOS, iPadOS, tvOS, in our case), a security feature known as **code-signing** is deeply rooted in the operation of the system. It serves to verify that applications haven't been tampered with after they were installed by a user, so that a malicious payload cannot be installed after-the-fact by a malicious someone. However, due to the process in which code-signing works, this prevents JIT from working properly as it works by reading code, modifying it, and then executing it in some fashion (whether that be by copying the code to a new location in memory, executing directly, or mirroring).

## What does this mean for PojavLauncher?

### Jailbroken devices
Jailbroken device users don't need to worry about JIT requirements, as PojavLauncher is built to detect jailbreaks and automatically enable new features.

### Unjailbroken devices
Unjailbroken users can see two different outcomes, based on what they used to sideload PojavLauncher.

#### TrollStore
If you used TrollStore to sideload PojavLauncher, good news: PojavLauncher takes advantage of the extended capabilities with TrollStore and automatically enables JIT when launched.

#### Normal sideload
If you sideload normally, you will need to enable JIT in some way. The most common method is to attach a debug server to the application while it's running - AltStore, SideStore, and Jitterbug all use this method with their JIT enabling functions. The only downside to this method is that you are required to be connected to a WiFi network in order to enable JIT.

You can also use [AltStore](https://faq.altstore.io/how-to-use-altstore/altjit), [SideStore](https://wiki.sidestore.io/guides/getting-started/#setting-up-wireguard), or, for more advanced users, [Jitterbug](https://github.com/osy/Jitterbug/tree/main/Jitterbug). Methods not listed here are not confirmed or recommended by us for use with PojavLauncher.
