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
					title: 'Getting Started', // Subcategory for starting off
					collapsable: false, // Don't allow collapsing
					sidebarDepth: 1,
					children: [
					    'INSTALL', // Installing PojavLauncher
                        'BUILD-FROM-SOURCE', // Building PojavLauncher from source
						'SIGN-IN', // Signing in
						'INSTALL-MC', // Downloading Minecraft
						'DEFAULT-CONTROLS', // Taking a look at the controls
					]
				},
				{
					title: 'Frequently Asked Questions', // Subcategory for FAQ
					collapsable: true, 
					sidebarDepth: 1,
					children: [
						{
							title: 'iOS-specific', // Subcategory for iOS FAQ
							collapsable: true, // Don't allow collapsing
							sidebarDepth: 1,
							children: [
								'JIT', // iOS and "JIT"
							]
						},
						{
							title: 'Android-specific', // Subcategory for Android FAQ
							collapsable: true, // Don't allow collapsing
							sidebarDepth: 1,
							children: [
								'PARSINGERROR', // "Error while parsing the package" error fix
								'REFUSALOFINSTALL', // "App not installed" error fix (very uncommon)
								'32BIT', // Platform and performance limitations (32bit)
								'NOTCHFIX', // Pojav's notch-detection system on crap chinese spinoff phones
								'FFMPEG', // Setting up FFMPEG, for Replay Mod
								'ZINK', // What's Zink, and why it's not what you think
								'SHADERS', // Look what we got here.
								'RENDERERS', // I have no idea what they do and why PojavLauncher needs it.
								'3PTYCLIENTS', // Reminders about installing third party clients from unknown sources
								'117CC', // Basics to get 21w10(?)a+ running. Useless
							]
						},
						// FAQ that applies to both platforms goes here
					]
		
				},
				{
					title: 'Going further', // Subcategory for getting deeper in the launcher
					collapsable: true, 
					sidebarDepth: 1,
					children: [
						'CUSTOM-CONTROLS', // Customizing the on-screen controls
						'OPTIMIZATION', // Optimizing the game
						'CUSTOM-MC', // Custom Minecraft!
						'MODPACKS', // Everything you need to know about Modpacks support
						'ENV-VARS', // Using environment variables
						'JAVA-ARGS', // Adding custom Java arguments
						'DEBUG-LOG', // Debugging issues with the launcher
					]
		
				},
				
            ]

        },
        {
            title: 'About PojavLauncher', // Category about the project
            collapsable: false,
            sidebarDepth: 1,
            children: [
				'LEGAL', // Legal + Security
				'DEVICES', // Supported Devices
				'MCVERS', // Supported Minecraft Versions
				'MODS-UNSUPPORTED', // Unsupported Mods
				'ROADMAP', // The road ahead for PojavLauncher
            ]

        },
		{
            title: 'Contributing', // Category about contributing
            collapsable: false,
            sidebarDepth: 1,
            children: [
                'CONT-POJAV', // Contributing to PojavLauncher itself
				'CONT-WEBSITE', // Contributing to this website
                'CONT-TRANSLATIONS', //Contributing to PojavLauncher translations, hopefully website translations later on
            ]

        },
        {
            title: 'Recent Updates', // Category about recent developments
            collapsable: false,
            sidebarDepth: 1,
            children: [
				'UNJAIL', // Bringing PojavLauncher to unjailbroken iOS
				'IOS-SUPPORT', // System support in future versions of PojavLauncher iOS
				'LOCAL-MODE', // Offline mode is going places
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
