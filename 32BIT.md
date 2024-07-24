# PojavLauncher's 32-bit support
Most of you, Android users, who are reading this now, won't be bothered by this documentation, but for the poor souls who have a 32-bit device, let's press ~~L~~ F to pay respects to them.

Before ARM transitioned into the more-powerful, more-utilizing `arm64/aarch64` architecture; everyone was using `arm/aarch32`

We're not here to give you historical information of it, but feel free to read [this documentary about the ARM platform.](https://en.m.wikipedia.org/wiki/ARM_architecture_family)

**You may encounter issues while using PojavLauncher on 32-bit devices. Here's a list of things that are known to be problematic:**

## RAM Allocation

**Real 32-bit devices (32-bit hardware and firmware), can't allocate more than 768MB of RAM to PojavLauncher. This can't be changed even if the device has more free RAM.**

* Examples of real 32-bit SoCs: Qualcomm Snapdragon 801, 800, 600, 400, S4, S3, S2, S1

**64-bit devices limited to 32-bit firmware can't allocate more than ~1000MB of RAM. As said earlier, this can't be changed.**

* Examples of 64-bit SoCs limited to 32-bit firmware: MediaTek Helio G37, G35, G25, P35, P25, P23, P22

## Performance
Due to 32-bit's processing speed limit, Minecraft's performance is always compromised. Even with optimization mods installed, you may get big stutters even on lowest settings. Decreasing RAM Allocation may help performance in certain scenarios.

## Compatibility
As of snapshot [24w14a](https://minecraft.wiki/w/Java_Edition_24w14a), Minecraft has officially dropped support for the 32-Bit architecture, If you own a 32-Bit device you will not be able to run Minecraft 1.20.5+ on said device.
