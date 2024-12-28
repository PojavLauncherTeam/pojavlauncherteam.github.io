// Sidebar Arrays
const android_FAQ = {
	title: 'Android-specific', // Subgroup for Android FAQ
	collapsable: true, sidebarDepth: 1,
	path: 'android', // Do not add a trailing slash here unless this also has a child nested in it with its own path
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
}

const ios_FAQ = {
	title: 'iOS-specific', // Subgroup for iOS FAQ
	collapsable: true,
	sidebarDepth: 1,
	path: 'ios', // Do not add a trailing slash here unless this also has a child nested in it with its own path
	children: [
		'JIT', // iOS and "JIT".
		'APPSTORE', // Will PojavLauncher ever come to App Store for iOS?
	]
}

export const FAQ = {
	title: 'FAQ', // Group for FAQ
	collapsable: true,
	path: '/wiki/faq/', // Trailing slash is required
	children: [
		'INSTALLATIONOFMODSRPWORLDS', // Installation of mods, resource packs, worlds in their correct form.
		'CRASHES', // Random crashes during gameplay.
		'MODCONFLICT', // I have a mod conflict.
		'JAVAVERSION', // Which Java version to use?
		'CANTLOGIN', // Can't log in.
		// FAQ that applies to both platforms ends here
		android_FAQ, // Subgroup for Android-specific FAQ. See Above to configure.
		ios_FAQ, // Subgroup for iOS-specific FAQ. See Above to configure.
	]
}

export const Getting_Started = {
	title: 'Getting Started',
	path: '/wiki/getting_started/',
	collapsable: true,
	children: [
		'INSTALL', // Installing PojavLauncher.
		'BUILD-FROM-SOURCE', // Building PojavLauncher from source.
		'SIGN-IN', // Signing in.
		'INSTALL-MC', // Downloading Minecraft.
		'CUSTOM-CONTROLS', // Customizing the on-screen controls.
		'SOCIALMEDIA', // Official PojavLauncher social medias.
	],
}

export const Going_Further = {
	title: 'Going Further',
	path: '/wiki/going_further/',
	collapsable: true,
	children: [
		'OPTIMIZATION', // Optimizing the game.
		'CUSTOM-MC', // Custom Minecraft!
		'MODPACKS', // Everything you need to know about Modpacks support.
		'PROBLEMATIC-MODS-COMMON-FIXES', // List of available fixes for popular modpacks.
		'ENV-VARS', // Using environment variables.
		'JAVA-ARGS', // Adding custom Java arguments.
	]

}

//// These are used to change the sidebar of their corresponding navbar counterpart. These don't use sidebar groups, instead they use the header as the title of the sidebar group (see Vuepress Documentation for more information on this behaviour). These sections are simple enough to not need custom shenanigans.

export const about = [
	'LEGAL', // Legal + Security.
	'DEVICES', // Supported Devices.
	'MCVERS', // Supported Minecraft Versions.
	'MODS-UNSUPPORTED', // Unsupported Mods.
]

export const contribute = [
	'CONT-WEBSITE', // Contributing to this website.
	'CONT-TRANSLATIONS', // Contributing to PojavLauncher translations, hopefully website translations later on.
]

export const patchnotes = [
	'UNJAIL', // Bringing PojavLauncher to unjailbroken iOS.
	'IOS-SUPPORT', // System support in future versions of PojavLauncher iOS.
	'LOCAL-MODE', // Offline mode is going places.
]

// Configuration Arrays

export const GroupOrder = [
	// This defines how groups are ordered within specific paths. So far, only the /wiki/ path uses this as it is the only path with sidebar groups.
	[	// /wiki/
		'Getting_Started', 'FAQ', 'Going_Further'
	],
	[	// Unused
		'about'
	],
	[	// Unused
		'contribute'
	],
	[	// Unused
		'patchnotes'
	]
]

// This is just the regular nav configuration but it's in here instead of config.js because it makes more sense that way.
export const NavBar = [
	{ text: 'Wiki', link: '/wiki/' },
	{ text: 'About Pojavlauncher', link: '/about/DEVICES' },
	{ text: 'Contributing', link: '/contribute/CONT-TRANSLATIONS' },
	{ text: 'Recent Updates', link: '/patchnotes/IOS-SUPPORT' },

]
