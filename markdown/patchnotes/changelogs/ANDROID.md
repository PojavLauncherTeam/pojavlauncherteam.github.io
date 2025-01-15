# "Gladiolus" release (latest)


- Added new renderer: LTW
- Refactored screen size management
- Added the new "Quick Settings" menu to the in-game sidebar
- Improved default settings
- Improved download progress display
- Improved ReplayMod support (available by installing the FFMpeg plugin)
- UI changes
- Other bug fixes



# "Foxglove" release (20th June 2024)


- Launcher Features:
  - Support for versions requiring Java 21
Custom profile icons !
  - Login screen improvement
  - small UI changes to keep things consistent
  - better modrinth search results
  - A lot of fixes !
  - Support for 1.6.X assets sounds

- Custom control changes:
  - Better notch handling for notches taller than wider
  - Switch controller support
  - small fixes and improvements

- Input changes:
  - Refactored to make crafting easier than ever !

- Renderer changes:
  - More compatibility with server resource packs. A lot of time has been spent on tricky cases for this feature.
  - small optimizations



# "Edelweiss" Release (27th September 2023)


- New launcher features: 
   - Added automatic Forge/Fabric/Quilt/OptiFine installation
   - Added modpack search and installation from CurseForge or Modrinth
   - Added 1.20.2 support

- New Custom Controls features:
   - Added customizable on-screen joystick
   - Now sub-buttons in "FREE" orientation drawers can be resized independently
   - Now buttons can be configured to be hidden or shown when you are in the game or in a menu.

- Custom Controls changes:  
   - Control button border thickness is now independent from button size
   - The highlight for rounded buttons does not show outside of the button border

- Input changes:
   - Refactored the input system for higher efficiency
 
- Renderer changes: 
   - GL4ES 1.1.4 was replaced with a fork of GL4ES 1.1.5 with fixes and extended shader support
   - Removed the VirGL renderer
   - Re-added Zink renderer (supports Mali-Gx7+, Adreno 6xx, Adreno 7xx)
   - Upgraded LWJGL from 3.2.3 to 3.3.1
   - Added support for VulkanMod (requires patching)



# "Dahlia" GPlay update (28th May 2022)


- New launcher features:
   - Added automatic Forge/Fabric/Quilt/OptiFine installation
   - Added modpack search and installation from CurseForge or Modrinth
   - Added 1.20.2 support
     
- New Custom Controls features:   
   - Added customizable on-screen joystick
   - Now sub-buttons in "FREE" orientation drawers can be resized independently
   - Now buttons can be configured to be hidden or shown when you are in the game or in a menu.
     
- Custom Controls changes:
   - Control button border thickness is now independent from button size
   - The highlight for rounded buttons does not show outside of the button border
 
- Input changes:
   - Refactored the input system for higher efficiency

- Renderer changes: 
   - GL4ES 1.1.4 was replaced with a fork of GL4ES 1.1.5 with fixes and extended shader support
   - Removed the VirGL renderer
   - Re-added Zink renderer (supports Mali-Gx7+, Adreno 6xx, Adreno 7xx)
   - Upgraded LWJGL from 3.2.3 to 3.3.1
   - Added support for VulkanMod (requires patching)



# "Crocus" gplay release (31st August 2021)


- Resolver changes

  - Modified ResConfHack to read resolv data from the Java property
  - Added auto-unpacking of premade resolv.conf and setting the Java property
(Now SRV resolving should work on Java 17 by default)
