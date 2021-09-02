# Minecraft version support

With each new Minecraft release comes questions: how well does it play nice with PojavLauncher?

The iOS/iPadOS port does not yet support versions before 1.6, and modded versions before 1.16.

The Android port supports most versions, from rd-132211 to snapshot 21w09a.

## Pre-1.6 and modded versions

The reason iOS/iPadOS can't play any versions before 1.6 for vanilla and 1.16 for modded Minecraft is because of the need to use OpenJDK 16, which was already ported to iOS/iPadOS by [@Diatrus](https://twitter.com/diatrus). 

The team of iOS/iPadOS developers is currently working on porting OpenJDK 8 to iOS/iPadOS to bring compatibility to these versions.

## Snapshot 21w10a and higher

Mojang changed the required OpenGL Profile (the graphics backend for Minecraft) to 3.2 with the release of this snapshot. Due to how GL4ES uses OpenGL 2.1 to render, these snapshots are currently unable to be opened. 

There are many potential routes of fixing this issue, but we are currently slowing the process of solving this down as we await feedback from the GL4ES creator, ptitSeb.
