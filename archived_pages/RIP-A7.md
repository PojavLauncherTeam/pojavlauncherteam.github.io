# Deprecating support for the Apple A7 chip

The Apple A7 chip was legendary for its technological advances in 2013. However, it's almost a decade since the introduction of the first device with this processor. Apple no longer supports these devices on the latest versions of iOS, and iOS 12 performs with noticeable performance issues already.

Due to these technical limitations imposed by the hardware and software on these devices, we're ending support for them with the release of PojavLauncher 2.2.

This means the following:
* **PojavLauncher 2.1** will warn A7 users about the upcoming deprecation, once upon every 30 launches of the app. This can be disabled by flipping the `a7_allow` preference to `YES`.

* **PojavLauncher 2.1's code** will be archived and moved to the `2.1-legacy` branch. Security fixes will be applied in 2.1 as needed, but no new features will be added to these releases. Third-party users can choose to continue support for A7-related issues, however unofficial forks of PojavLauncher will not be supported.

* **PojavLauncher 2.2** will disable support for A7 users on launch, requesting users to return to 2.1 or move to an A8+ device. This can also be overriden by flipping the `a7_allow` preference to `YES`, however support will not be provided for issues encountered while using an A7 device.
    * If the issue affects other devices as well, the issue will be deemed valid if logs from a supported device are available.
