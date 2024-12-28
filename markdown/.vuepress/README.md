# Configuration Manual

## Summary
The `./public` folder isn't anything special. Refer to [Vuepress Documentation](https://v1.vuepress.vuejs.org/guide/assets.html#public-files)
___
`config.js` is a lightly modified default configuration stemming from [vuepress-theme-succinct](https://github.com/Microflash/vuepress-theme-succinct). Refer to [Vuepress Documentation](https://v1.vuepress.vuejs.org/config/). Succinct Documentation contains nothing of note. Read the source if you must.
___
`bars.js` handles all the logic to properly parse `arrays.js` and exports them into the `NavBar` and `SideBar` variables used in `config.js`

This is required to have CommonJS syntax and is not allowed to use ESM or else the site fails to compile as `config.js` uses ESM due to being Vuepress v1. Other configuration files that are not directly `require()`'ed by `config.js` should be free to use ESM syntax.

The implementation of the path object is not exactly like the prefix object in Vuepress v2. Particularly with trailing slashes requiring some syntax to concatenate properly. Logic to fix should be implemented.

The path object was made to make `arrays.js` look less ugly. It does not at all follow how the prefix object was implemented in Vuepress v2 because I couldn't find where it was implemented to imitate it.
___
`arrays.js` is where all file information and how to display them on the sidebar and navbar should be stored but due to limitations, some part of the sidebar must be within `bars.js`.

The intended syntax goes like so if you intend to use `generateSidebar()` as defined in `bars.js`

```javascript
title: 'string'
path: 'path/to/children/' // The trailing slash is required for all objects containing nested children
collapsable: 'true' //  Default is true. Set to false when needed. Not required
sidebarDepth: '2' // Default and maximum is 2 according to Vuepress Documentation. Not required
children: [ 'child0', 'child1', 'child2' ] // Refer to Vuepress Documentation for more details
```

The other arrays that do not follow this syntax are used for something else. If you plan to add a new array to the file, please make it explicit in what it is for or detail it in a comment. Edit this README if you must.

### Variables

Getting_Started, FAQ, and Going_Further are self-explanatory, they are the sidebar groups in the Wiki directory. These are exported because `bars.js` imports them to process them.

The children of FAQ is an outlier. This was done to make it easier to switch around the order if needed. 

https://github.com/alexytomi/PojavlauncherWikiTesting/blob/7fa1deef1ff2623776110a915a79dd1f976de706/markdown/.vuepress/arrays.js#L1-L21

https://github.com/alexytomi/PojavlauncherWikiTesting/blob/7fa1deef1ff2623776110a915a79dd1f976de706/markdown/.vuepress/arrays.js#L23-L32

These still follow the rules that Getting_Started and Going_Further have. They're just put as children of FAQ instead of being their own group.

### Markdown Files Summary

#### Getting Started
- INSTALL - Installing PojavLauncher
- BUILD-FROM-SOURCE - Building PojavLauncher from source
- SIGN-IN - Signing in
- INSTALL-MC - Downloading Minecraft
- CUSTOM-CONTROLS - Customizing the on-screen controls
- DISCORD - Official PojavLauncher Discord server

WIP. Documenting this would be documenting stale files. Awaiting PR review.


