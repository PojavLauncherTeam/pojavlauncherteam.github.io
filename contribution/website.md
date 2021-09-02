# Contributing to this website

We're always happy to accept help from our beloved community, and this website is no different. However, we want to cover some ground rules before you get started.

## What is Vuepress?
Vuepress is a static website generator, although it looks really good. It takes three things: a config file, markdown (.md) documents, and resources for images and such, and then compiles them into HTML for browser-friendly access.

## How do I use it?
Simple: edit or create a markdown file and insert your properly tuned syntax (use Discord? You know Markdown), then save and commit. It's that easy. If you want to see your changes on your fork, you'll have to either 1) rename the repo to `<yourusersname>.github.io` and set the Pages settings to build from the root of gh-pages, or 2) (if you have node installed), run `npm install && npm run build && npm run start`.

## What to do and not to do
You're allowed to pretty much change anything, as long as it follows all of these rules:

- Do not make any promises unless you were given permission from the developers.
- Do not spread misinformation and inaccurate content.
- Although you can change everything else, do not touch .vuepress/config.js. If you need to change something in there, let Doregon know.
- Never, never ever ever merge `gh-pages` and `main` into each other. gh-pages is the result, main is the rough draft.
- Do not delete any dot files (.nvmrc, .gitattributes, etc)

## Layout
The layout of this site can be confusing at first, but once you figure it out it's easy to decode. When you look at the root of the website git repository, you'll be staring at the top-most folders (the categories on the sidebar). As you click into deeper and deeper folders, you go deeper and deeper into the hierarchy of the sidebar.

With all of these in mind, you're free to help us out with our website!
