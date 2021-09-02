# Getting Pojavlauncher manually

### Getting files

If you're on a Procursus jailbreak, you only need the .deb file for PojavLauncher. If not, you'll need the .deb file for OpenJDK as well.

1. Download the PojavLauncher file from one of the following links:
  * Latest release: [GitHub Releases](https://github.com/PojavLauncherTeam/PojavLauncher_iOS/releases)
  * Latest build: [GitHub Actions](https://github.com/PojavLauncherTeam/PojavLauncher_iOS/actions?query=branch%3Amain++) (requires a GitHub account to download)
  * For those without Procursus, OpenJDK [here](https://github.com/PojavLauncherTeam/PojavLauncher_iOS/releases/tag/v16-openjdk)
2. Save these to a spot you can remember.
  * iOS/iPadOS 13 or later - tap the Download icon next to the tab bar, and hit the search icon next to the .deb file name. Once it shows where your downloads went, tap and hold and choose to Share and Open in Filza.
3. Open each .deb file in Filza, and tap Install.
  * If you're on Procursus, you'll need to install `openjdk-16-jre` through Sileo before continuing. You can also open a terminal and type `sudo apt install openjdk-16-jre`.
  * If you're not on Procursus or chose to download the OpenJDK file, you'll need to install this one first.
  * When installing the PojavLauncher .deb through Filza, you need to run an extra command to see the icon on your home screen: `uicache -p /Applications/PojavLauncher.app`
