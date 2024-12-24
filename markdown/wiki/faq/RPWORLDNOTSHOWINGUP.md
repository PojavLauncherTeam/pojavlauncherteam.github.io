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
