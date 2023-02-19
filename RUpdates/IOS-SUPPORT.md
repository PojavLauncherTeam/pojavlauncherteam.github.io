# System support in future versions of PojavLauncher iOS
*This announcement will be covering the next 3 releases of PojavLauncher iOS.*

We've made some great strides with the iOS port of PojavLauncher: fixing [1.17 and newer](./OGL32.md), bringing [OpenJDK 8 to iOS](./JDK8.md), and now unveiling an [unjailbroken variant](./UNJAIL.md). However, all of the advancements we're making also stirred up old conversations, and we've come to a final conclusion: 

**A future release of PojavLauncher will require iOS 14.0 and later.**

## But why?
Supporting iOS 12.0 and newer was a feat of engineering. However, it created multiple issues with feature support and user experience. We need to verify that our code works on iOS 12 before going ahead and compiling--if it does not, this complicates our development as we are faced with two options: dropping the feature on older versions, or importing external libraries. This causes slower development times, or lack of the feature entirely for our users.

We also took a look at the userbase currently playing on PojavLauncher. Most of the users asking for support in our Discord server (which is many times more active than the Issues tab on the GitHub repository) are already running iOS 14.0 or newer, and a few cases of users on iOS 13. We barely see users running iOS 12 anymore, and now that PojavLauncher works unjailbroken, users can update to a newer release of iOS while still retaining Java Edition.

This decision also comes after we understood that we don't really have the ability to test on these older versions anymore. Our devices are already running iOS 14.0+, and so are most of our testers.

## So what happens now?
Things are going to get somewhat complex, but this document will sort these things out.

::: details PojavLauncher 2.1 - Recap
PojavLauncher 2.1 was largely unchanged from its original plans. Just to recap, its key features:

* New split user interface to allow switching menus with ease
* Rewritten preferences menu
* Transitioned code to Objective-C from Java
* First release with compatibility unjailbroken
* Final release with jailbreak-specific packages

This release will also begin to warn users with 1GB of memory about the incoming end-of-life.
:::
::: details PojavLauncher 2.2 - 1GB EOL
PojavLauncher 2.2 was already planned to drop the Apple A7-equipped devices from support, due to performance and stability issues. This has been extended all devices with less than 1 gigabyte of total memory:

* iPhone 5s
* iPhone 6
* iPhone 6 Plus
* iPad mini (2nd generation)
* iPad mini (3rd generation)
* iPad Air (1st generation)
* iPod touch (6th generation)

The `a7_allow` boolean in the preferences file has been replaced with `force_unsupported_launch` to reflect the change. As stated before, support for these devices will end 3 weeks after 2.2 releases, or immediately, for you, if this boolean is toggled.

This release will also begin to warn users on iOS 12 or 13 about the incoming end-of-life. If you are using a device that is capable of running iOS 14 or later, the warning will additionally tell you to upgrade to a newer version of iOS.
:::
::: details PojavLauncher 2.3 - iOS 14.0+ begins
PojavLauncher 2.3 will begin the end-of-life process for iOS 12/13 users. Taking a similar approach to 2.2, the `force_unsupported_launch` boolean can be toggled to override the behaviour of the launcher not opening. Support for these versions will end 3 weeks after 2.3 releases, or immediately, for you, if this boolean is toggled.

As part of this deprecation, beta builds of PojavLauncher 2.4 will move to iOS 14.0 and newer APIs. Moving to these APIs may break the boolean's ability to continue launching the application.
:::
::: details PojavLauncher 2.4 - iOS 14.0+ completed
PojavLauncher 2.4 will complete the transition to iOS 14.0 APIs and be incompatible with iOS 12/13 without modification to the source code. 
:::