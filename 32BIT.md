# 32Bit: Platform Limitations
Most of you (Android) who are reading this now won't be bothered by this documentation, but for the poor souls who has a 32bit device, let's press ~~L~~ F to pay respect to them.

Before ARM transitioned into the theoretically more-powerful, more-utilizing aarch64/ARM64; most phone manufacturers started out with it's base form: `arm`

Well, we're not here to give you historical information of it, but feel free to read [this documentary about the ARM platform.](https://en.m.wikipedia.org/wiki/ARM_architecture_family)

# PojavLauncher's 32bit support
Most of PojavLauncher's features on 32bit devices are either limited or capped:

## RAM Allocation
for True 32Bit devices (32bit hardware and firmware), the allocation is automatically capped into ~1100MBs (1.1GB), and can't be changed further, even if the device has more free RAM.

## Performance
Due to 32bit's processing speed, Minecraft's performance is always compromised; even with OptiFine or any optimization mods installed

## Dynamic RAM allocation capping
~1100MB wasn't always the allocation limit, as some platforms tends to change it.

64bit MediaTek processors that are limited to 32bit functions causes the alloc cap to remove it's extra 100 MB, while hard Snapdragon processors, or some 32bit chips, caps it down to 768MB. Damn, not even enough to play RLCraft.
