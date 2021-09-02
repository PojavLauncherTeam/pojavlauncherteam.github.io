# Taking back your memory

iOS/iPadOS can get in the way of some truly amazing experiences in PojavLauncher, and to explain and solve why, it requires a bit of backstory.

## The backstory...
Darwin uses a memory management framework called Jetsam. This framework lays down some harsh laws upon the computer land, setting a memory limit for all processes to obey:

- If a process is using less memory than the limit, Jetsam leaves it alone and the process continues as normal.

- If a process is using more memory than the limit, Jetsam quickly kills the process and frees all of the memory that it used.

This is helpful for keeping the system responsive (customer service is a goal of Apple’s), but can pose a problem when it comes to processes requiring heavier loads.

## So what’s this mean?
Since this app requires a heavier resource load (as you’re using JDK and need to allocate some memory), you may come across issues with actually doing anything. I’ve tested and seen these issues come up as one of the following:

- The process was terminated for exceeding jetsam memory limits (a Cr4shed log)
- The app unexpectedly quitting but the logs don’t show any errors relating to OpenGL or don’t show errors at all

This issue only really affects devices with less than 4GB of memory, and may not happen on those with at least 2GB.

## What to do if it all goes south
It’s actually really simple to fix this issue, using a simple tool Doregon's found and adopted on GitHub. **We have seen Reddit posts about changing the jetsamproperties plist file,** but this doesn’t work well on iOS 14 and can lead to damage if you implement it incorrectly.

1. **Install overb0ard** from [Doregon's Repo](https://doregon.github.io/cydia).

2. Open PojavLauncher, but **don’t start the game.** We just need PJ open for now.

3. Open your favorite terminal or use SSH and type the following command:

```
jetsamctl -l 1024 PojavLauncher

# This command tells Jetsam that it's okay to allow PojavLauncher to use 1024 megabytes of memory--although the Launcher will only use 1/4 of the total device memory.
```

4. Profit! Switch back to PojavLauncher and start gaming!

## Streamlining things

Doregon is working on giving overb0ard the ability to permenantly set limits, but until then you'll have to enter the command every time you start the game again. If you're using iOS 12 or 13, you can use SnippetCommand and Activator to perform a gesture and automatically run the command on app launch. For iOS 14 users, try out CommandModule so you can tap a control center button to override limits.
