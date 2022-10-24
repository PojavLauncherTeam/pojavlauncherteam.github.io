const { description } = require('../package')
const vuepressBar = require('vuepress-bar');

const { sidebar } = vuepressBar({
  addReadMeToFirstGroup: false,
});

module.exports = {
    title: 'PojavLauncher',
	description: 'Minecraft: Java Edition, meet mobile devices.',
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
        repo: 'https://github.com/PojavLauncherTeam/pojav-site/',
		docsDir: '',
		docsBranch: 'main',
		editLinks: true,
		editLinkText: 'Help us improve this page!',
        logo: 'logo.png',

        sidebar: [
		{
            title: 'About PojavLauncher', // Category about the project
            collapsable: false,
            sidebarDepth: 1,
            children: [
				'LEGAL', // Legal + Security
				'DEVICES', // Supported Devices
				'MCVERS', // Supported Minecraft Versions
				'MODS-UNSUPPORTED', // Unsupported Mods
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
								'JETSAM', // Dealing with iOS memory limits
								'JIT', // iOS and "JIT"
							]
						},
						{
							title: 'Android-specific', // Subcategory for Android FAQ
							collapsable: true, // Don't allow collapsing
							sidebarDepth: 1,
							children: [
								// Android-only FAQ goes here
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
						'CUSTOM-MC', // Installing custom versions of Minecraft
						'CUSTOM-CONTROLS', // Customizing the on-screen controls
						'OPTIMIZATION', // Optimizing the game
						'ENV-VARS', // Using environment variables
						'JAVA-ARGS', // Adding custom Java arguments
						'DEBUG-LOG', // Debugging issues with the launcher
					]
		
				},
				'ROADMAP',
            ]

        },
		{
            title: 'Contributing', // Category about contributing
            collapsable: false,
            sidebarDepth: 1,
            children: [
                'CONT-POJAV', // Contributing to PojavLauncher itself
				'CONT-WEBSITE', // Contributing to this website
            ]

        },
        ],
    },
    plugins: [
		['vuepress-plugin-code-copy', true],
		['flexsearch'],
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
