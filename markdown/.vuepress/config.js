const vuepressBar = require("vuepress-bar");
const { SideBar, NavBar } = require("./bars.js");
const { sidebar } = vuepressBar({
  addReadMeToFirstGroup: false,
});

module.exports = {
  title: "PojavLauncher",
  description:
    "A flexible, fast and open-source Minecraft Java Edition launcher for Android and iOS",
  head: [
    [
      "meta",
      {
        name: "theme-color",
        content: "#ffffff",
        media: "(prefers-color-scheme: light)",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#25262b",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black",
      },
    ],
    [
      "link",
      {
        rel: "'stylesheet",
        href: "/styles/website.css",
      },
    ],
  ],
  base: "/",
  dest: "./docs",

  watch: {
    $page(newPage, oldPage) {
      if (newPage.key !== oldPage.key) {
        requestAnimationFrame(() => {
          if (this.$route.hash) {
            const element = document.getElementById(this.$route.hash.slice(1));

            if (element && element.scrollIntoView) {
              element.scrollIntoView();
            }
          }
        });
      }
    },
  },

  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-multimd-table"), {
        rowspan: true,
      });
    },
  },

  theme: "vuepress-theme-succinct",
  globalUIComponents: ["ThemeManager"],

  themeConfig: {
    displayAllHeaders: false,
    lastUpdated: true,
    repo: "https://github.com/PojavLauncherTeam/PojavLauncherTeam.github.io/",
    docsDir: "",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    logo: "/logo.png",
    sidebar: SideBar,
    nav: NavBar,
  },

  plugins: [
    ["vuepress-plugin-code-copy", true],
    ["flexsearch"],
    ["code-switcher"],
    "@vuepress/plugin-back-to-top",
    "vuepress-plugin-smooth-scroll",
    [
      "vuepress-plugin-medium-zoom",
      {
        selector: "img",
        options: {
          background: "var(--bodyBgColor)",
        },
      },
    ],
  ],
};
