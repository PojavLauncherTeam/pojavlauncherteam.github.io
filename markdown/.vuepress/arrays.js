const android_FAQ = {
	title: 'Android-specific', // Subcategory for Android FAQ
	collapsable: true, // Don't allow collapsing
	sidebarDepth: 1,
	path: 'android',
	children: [
		'PARSINGERROR', // "Error while parsing the package" error fix.
		'REFUSALOFINSTALL', // "App not installed" error fix. (very uncommon)
		'CANTFINDLOG', // Can't find the log file. (non-root)
		'CANTFINDMINECRAFT', // Can't find .minecraft (non-root)
		'ZINKNOTWORKING', // Zink doesn't work.
		'MODCRASHING', // Installing any mod results in a crash.
		'MODNOTSHOWINGUP', // My mods don't show up in-game.
		'JAVARUNTIMES', // Installing Java runtimes manually.
		'JARCRASHED', // Crash when executing a jar.
		'32BIT', // Platform and performance limitations. (32bit)
		'FFMPEG', // Setting up FFMPEG, for Replay Mod.
		'SHADERS', // Look what we got here.
		'RENDERERS', // I have no idea what they do and why PojavLauncher needs it.
	]
}

const ios_FAQ = {
	title: 'iOS-specific', // Subcategory for iOS FAQ
	collapsable: true, // Don't allow collapsing
	sidebarDepth: 1,
	path: 'ios', // Do not add a trailing slash here unless this also has a child nested in it with its own path
	children: [
		'JIT', // iOS and "JIT"
		'APPSTORE', // Will PojavLauncher ever come to App Store for iOS?
	]
}

export const FAQ = {
	title: 'FAQ',
	path: '/wiki/faq/', // Trailing slash is required
	collapsable: true,
	children: [
		android_FAQ, // Children in the sidebar appears in-order
		ios_FAQ,
		// FAQ that applies to both platforms goes here
		'RPWORLDNOTSHOWINGUP', // Resource pack or world doesn't show up.
		'CRASHES', // Random crashes during gameplay.
		'MODCONFLICT', // I have a mod conflict.
		'JAVAVERSION', // Which Java version to use?
		'CANTLOGIN', // Can't log in.
	]
}

export const Getting_Started = {
	title: 'Getting Started', // Name of the collapsable that appears on the sidebar
	path: '/wiki/getting_started/', // The path where children are located based on the directory where .vuepress is located. Trailing slash is required.
	collapsable: true,
	children: [
	'INSTALL', // Installing PojavLauncher
	'BUILD-FROM-SOURCE', // Building PojavLauncher from source
	'SIGN-IN', // Signing in
	'INSTALL-MC', // Downloading Minecraft
	'CUSTOM-CONTROLS', // Customizing the on-screen controls
	'DISCORD', // Official PojavLauncher Discord server
	],
}

export const Going_Further = {
	title: 'Going Further', // Name of the collapsable that appears on the sidebar
	path: '/wiki/going_further/', // The path where children are located based on the root directory.
	collapsable: true,
	children: [
		'OPTIMIZATION', // Optimizing the game
		'CUSTOM-MC', // Custom Minecraft!
		'MODPACKS', // Everything you need to know about Modpacks support
		'PROBLEMATIC-MODS-COMMON-FIXES', // List of available fixes for popular modpacks
		'ENV-VARS', // Using environment variables
		'JAVA-ARGS', // Adding custom Java arguments

	]

}



export const contribute = [
	'CONT-WEBSITE', // Contributing to this website
	'CONT-TRANSLATIONS', // Contributing to PojavLauncher translations, hopefully website translations later on
]

export const about = [
	'LEGAL', // Legal + Security
	'DEVICES', // Supported Devices
	'MCVERS', // Supported Minecraft Versions
	'MODS-UNSUPPORTED', // Unsupported Mods
]

export const patchnotes = [
	'UNJAIL', // Bringing PojavLauncher to unjailbroken iOS
	'IOS-SUPPORT', // System support in future versions of PojavLauncher iOS
	'LOCAL-MODE', // Offline mode is going places
]

export const CategoryOrder = [
	[	// Wiki
		'Getting_Started','Going_Further','FAQ'
	],
	[	// Unused
		'contribute'
	],
	[	// Unused
		'about'
	],
	[	// Unused
		'patchnotes'
	]
]

export const NavBar = [
	{ text: 'Wiki', link: '/wiki/' },
	{ text: 'Contributing', link: '/contribute/CONT-TRANSLATIONS' },
	{ text: 'About Pojavlauncher', link: '/about/DEVICES' },
	{ text: 'Recent Updates', link: '/patchnotes/IOS-SUPPORT' },

]
