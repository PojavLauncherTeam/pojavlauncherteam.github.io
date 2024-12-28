# How to install mods, Resource packs and worlds into PojavLauncher
 ## Mods
1. Click on the "Create new profile" button in the version selector.
2. Select a modding platform you want your mods to be, install any version you want.
3. Head to GooglePlay and search for "files by Marc", download the first "files" app that will pop up.
4. Open the app and press on the 3 lines in the upper-left corner, scroll down and select PojavLauncher.
5. Press on the 3 dots on the upper-right corner and enable "show hidden files".
6. Then you will see `.minecraft` folder, inside you will find the `mods` folder.
7. Paste your mods there.

 ## Resource packs 
1. Head to GooglePlay and search for "files by Marc", download the first "files" app that will pop up.
2. Open the app and press on the 3 lines in the upper-left corner, scroll down and select PojavLauncher.
3. Press on the 3 dots on the upper-right corner and enable "show hidden files".
4. Then you will see `.minecraft` folder, inside you will find the `resourcepacks` folder.
5. Paste your resource packs there.

## Worlds
1. Head to GooglePlay and search for "files by Marc", download the first "files" app that will pop up.
2. Open the app and press on the 3 lines in the upper-left corner, scroll down and select PojavLauncher.
3. Press on the 3 dots on the upper-right corner and enable "show hidden files".
4. Then you will see `.minecraft` folder, inside you will find the `saves` folder.
5. Paste your world there.

# Resource pack or world doesn't show up
Read carefully and check the structure of the archives (zips) or folders (directories), make sure there are no additional ones.

## Resource pack
**Wrong:**
pack.zip → pack (folder) → pack.mcmeta
pack (folder) → pack (folder) → pack.mcmeta

**Correct:**
pack.zip → pack.mcmeta
pack (folder) → pack.mcmeta

## World
The world cannot be zipped inside the saves folder.

**Wrong:**
  world.zip → level.dat
  world.zip → world (directory) → level.dat

**Correct:**
  world (directory) → level.dat
