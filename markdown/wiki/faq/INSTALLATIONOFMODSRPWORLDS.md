# How to install mods, Resource packs and worlds into PojavLauncher

 ## Mods
1. Click on the "Create new profile" button in the version selector.
2. Select a modding platform you want your mods to be, install any version you want.
3. In the PojavLauncher menu, you will see "game directory" button, click it.
4. You will be automatically redirected to `.minecraft` folder.
5. Inside you will find the `mods` folder.
6. Paste your mods there.

```
.minecraft
│
└─── mods
     │ - mod1.jar
     │ - mod2.jar
     │   ...
```

 ## Resource packs 
1. In the PojavLauncher menu, you will see "game directory" button, click it.
2. You will be automatically redirected to `.minecraft` folder.
3. Inside you will find the `resourcepacks` folder.
4. Paste your resource packs there.

## Worlds
1. In the PojavLauncher menu, you will see "game directory" button, click it.
2. You will be automatically redirected to `.minecraft` folder.
3. Inside you will find the `saves` folder.
4. Paste your world there.

# Resource pack or world doesn't show up
Read carefully and check the structure of the archives (zips) or folders (directories), make sure there are no additional ones.

## Resource pack
**Wrong:**
pack.zip → pack (folder) → pack.mcmeta
pack (folder) → pack (folder) → pack.mcmeta

**Correct:**
pack.zip → pack.mcmeta
pack (folder) → pack.mcmeta

```
.minecraft
│
└─── resourcepacks
     │ ─ pack.zip
     └─── pack (folder)
          │ ─ pack.mcmeta
          │ ─ ...
```

## World
The world cannot be zipped inside the saves folder.

**Wrong:**
  world.zip → level.dat
  world.zip → world (directory) → level.dat

**Correct:**
  world (directory) → level.dat

```
.minecraft
│
└─── saves
     └─── world (folder)
          │   level.dat
          │   ...
```
