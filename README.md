# The Pojavlauncher Wiki Repository

### If you are a Pojavlauncher user who wants to report an issue, please proceed to [![Pojavlauncher Repository](https://img.shields.io/badge/Pojavlauncher-grey?style=plastic&logo=github)](https://github.com/PojavLauncherTeam/PojavLauncher/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml&title=%5BBUG%5D+%3CShort+description%3E)

#### If you are/wish to be a Wiki Contributor, continue reading

The repository is using Vuepress V1, you can refer to [Vuepress Documentation](https://v1.vuepress.vuejs.org/) for more in-depth instruction.

The repository is structured like so
```
.
├── archived_pages
├── changelogs
└── markdown
    ├── .vuepress
    │    └── config
    ├── about
    ├── contribute
    ├── patchnotes
    └── wiki
        ├── faq
        │   ├── android
        │   └── ios
        ├── getting_started
        │   └── images
        │       └── Actions
        │           ├── android
        │           └── ios
        └── going_further

```

* `archived_pages` - Contains pages that are no longer in use but we keep around for historical reasons.

* `changelogs` - An orphaned directory, pay no mind

* `markdown` - The 'root' directory of the wiki itself. The root directory is structured to be similar to how you see it on the URL.

* `.vuepress/config` - Contains the configuration files for the wiki itself. For most editing you need only edit `arrays.js`.


`arrays.js` is self-explanatory for the most part. The path in each section tells you where to put the corresponding `.md` files into as well as showing you examples on how to add your own page.

If you have any questions feel free to ask on the discord! [![Discord](https://img.shields.io/discord/724163890803638273.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.com/invite/aenk3EUvER) 


