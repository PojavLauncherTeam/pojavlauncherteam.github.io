const { description } = require('../package')
const vuepressBar = require('vuepress-bar');

const { sidebar } = vuepressBar({
  addReadMeToFirstGroup: false,
});

module.exports = {
    title: 'PojavLauncher',
	description: 'A flexible, fast and open-source Minecraft Java Edition launcher for Android and iOS',
    head: [
		['meta', {
			name: 'theme-color',
			content: '#ffffff',
			media: '(prefers-color-scheme: light)'
		}],
		['meta', {
			name: 'theme-color',
			content: '#25262b',
			media: '(prefers-color-scheme: dark)'
		}],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/',
    dest: './docs',

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
	    }
	  },

	markdown: {
		extendMarkdown: md => {
			md.use(require('markdown-it-multimd-table'), {
				rowspan: true,
			});
		}
	},

    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/PojavLauncherTeam/PojavLauncherTeam.github.io/',
		docsDir: '',
		docsBranch: 'lunaveux-patch-1',
		editLinks: true,
		editLinkText: 'Help us improve this page!',
        logo: 'logo.png',

        sidebar: [
        {
            title: 'Wiki', // Category for information
            collapsable: false,
            
            children: [
				{
					title: 'Getting Started', // Subcategory for starting off.
					collapsable: false, // Don't allow collapsing.
					sidebarDepth: 1,
					children: [
					    'INSTALL', // Installing PojavLauncher.
                        'BUILD-FROM-SOURCE', // Building PojavLauncher from source.
						'SIGN-IN', // Signing in.
						'INSTALL-MC', // Downloading Minecraft.
						'CUSTOM-CONTROLS', // Customizing the on-screen controls.
						'SOCIALMEDIA', // Official PojavLauncher social medias.
					]
				},
				{
					title: 'Frequently Asked Questions', // Subcategory for FAQ.
					collapsable: true, 
					sidebarDepth: 1,
					children: [
						{
							title: 'iOS-specific', // Subcategory for iOS FAQ.
							collapsable: true, // Don't allow collapsing.
							sidebarDepth: 1,
							children: [
								'JIT', // iOS and "JIT".
								'APPSTORE', // Will PojavLauncher ever come to App Store for iOS?
							]
						},
						{
							title: 'Android-specific', // Subcategory for Android FAQ.
							collapsable: true, // Don't allow collapsing.
							sidebarDepth: 1,
							children: [
								'PARSINGERROR', // "Error while parsing the package" error fix.
								'REFUSALOFINSTALL', // "App not installed" error fix (very uncommon).
								'CANTFINDLOG', // Can't find the log file (non-root).
								'CANTFINDMINECRAFT', // Can't find .minecraft (non-root).
								'ZINKNOTWORKING', // Zink doesn't work.
								'MODCRASHING', // Installing any mod results in a crash.
								'MODNOTSHOWINGUP', // My mods don't show up in-game.
								'JAVARUNTIMES', // Installing Java runtimes manually.
								'JARCRASHED', // Crash when executing a jar.
								'32BIT', // Platform and performance limitations (32bit).
								'FFMPEG', // Setting up FFMPEG, for Replay Mod.
								'SHADERS', // Look what we got here.
								'RENDERERS', // I have no idea what they do and why PojavLauncher needs it.
							]
						},
						// FAQ that applies to both platforms goes here
							'INSTALLATIONOFMODSRPWORLDS', // Installation of mods, resource packs, worlds in their correct form.
							'CRASHES', // Random crashes during gameplay.
							'MODCONFLICT', // I have a mod conflict.
							'JAVAVERSION', // Which Java version to use?
							'CANTLOGIN', // Can't log in.
					]
		
				},
				{
					title: 'Going further', // Subcategory for getting deeper in the launcher.
					collapsable: true, 
					sidebarDepth: 1,
					children: [
						'OPTIMIZATION', // Optimizing the game.
						'CUSTOM-MC', // Custom Minecraft!
						'MODPACKS', // Everything you need to know about Modpacks support.
						'PROBLEMATIC-MODS-COMMON-FIXES', // List of available fixes for popular modpacks.
						'ENV-VARS', // Using environment variables.
						'JAVA-ARGS', // Adding custom Java arguments.
					]
		
				},
				
            ]

        },
        {
            title: 'About PojavLauncher', // Category about the project.
            collapsable: false,
            sidebarDepth: 1,
            children: [
				'LEGAL', // Legal + Security.
				'DEVICES', // Supported Devices.
				'MCVERS', // Supported Minecraft Versions.
				'MODS-UNSUPPORTED', // Unsupported Mods.
            ]

        },
		{
            title: 'Contributing', // Category about contributing.
            collapsable: false,
            sidebarDepth: 1,
            children: [
				'CONT-WEBSITE', // Contributing to this website.
               			'CONT-TRANSLATIONS', //Contributing to PojavLauncher translations, hopefully website translations later on.
            ]

        },
        {
            title: 'Recent Updates', // Category about recent developments.
            collapsable: false,
            sidebarDepth: 1,
            children: [
				'UNJAIL', // Bringing PojavLauncher to unjailbroken iOS.
				'IOS-SUPPORT', // System support in future versions of PojavLauncher iOS.
				'LOCAL-MODE', // Offline mode is going places.
            ]

        },
        ],
    },
    plugins: [
		['vuepress-plugin-code-copy', true],
		['flexsearch'],
                ['code-switcher'],
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-smooth-scroll',
        ['vuepress-plugin-medium-zoom',
        {
        	selector: "img",
        	options: {
            	background: 'var(--bodyBgColor)'
            }
        }],
    ]
}
