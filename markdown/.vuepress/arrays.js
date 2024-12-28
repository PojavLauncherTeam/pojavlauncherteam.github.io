// Sidebar Arrays
const android_FAQ = {
	title: 'Android-specific', // Subgroup for Android FAQ
	collapsable: true, 	sidebarDepth: 1,
	path: 'android', // Do not add a trailing slash here unless this also has a child nested in it with its own path
	children: [
		'PARSINGERROR',
		'REFUSALOFINSTALL',
		'CANTFINDLOG',
		'CANTFINDMINECRAFT',
		'ZINKNOTWORKING',
		'MODCRASHING',
		'MODNOTSHOWINGUP',
		'JAVARUNTIMES',
		'JARCRASHED',
		'32BIT',
		'FFMPEG',
		'SHADERS',
		'RENDERERS',
	]
}

const ios_FAQ = {
	title: 'iOS-specific', // Subgroup for iOS FAQ
	collapsable: true,
	sidebarDepth: 1,
	path: 'ios', // Do not add a trailing slash here unless this also has a child nested in it with its own path
	children: [
		'JIT',
		'APPSTORE',
	]
}

export const FAQ = {
	title: 'FAQ', // Group for FAQ
	collapsable: true,
	path: '/wiki/faq/', // Trailing slash is required
	children: [
		android_FAQ, // Subgroup for Android-specific FAQ. See Above to configure.
		ios_FAQ, // Subgroup for iOS-specific FAQ. See Above to configure.
		// FAQ that applies to both platforms starts here
		'RPWORLDNOTSHOWINGUP',
		'CRASHES',
		'MODCONFLICT',
		'JAVAVERSION',
		'CANTLOGIN',
	]
}

export const Getting_Started = {
	title: 'Getting Started',
	path: '/wiki/getting_started/',
	collapsable: true,
	children: [
	'INSTALL',
	'BUILD-FROM-SOURCE',
	'SIGN-IN',
	'INSTALL-MC',
	'CUSTOM-CONTROLS',
	'DISCORD',
	],
}

export const Going_Further = {
	title: 'Going Further',
	path: '/wiki/going_further/',
	collapsable: true,
	children: [
		'OPTIMIZATION',
		'CUSTOM-MC',
		'MODPACKS',
		'PROBLEMATIC-MODS-COMMON-FIXES',
		'ENV-VARS',
		'JAVA-ARGS',
	]

}

// These are used to change the sidebar of their corresponding navbar counterpart. These don't use sidebar groups, instead they use the header as the title of the sidebar group (see Vuepress Documentation for more information on this behaviour). These sections are simple enough to not need custom shenanigans.

export const contribute = [
	'CONT-WEBSITE',
	'CONT-TRANSLATIONS',
]

export const about = [
	'LEGAL',
	'DEVICES',
	'MCVERS',
	'MODS-UNSUPPORTED',
]

export const patchnotes = [
	'UNJAIL',
	'IOS-SUPPORT',
	'LOCAL-MODE',
]

// Configuration Arrays

export const GroupOrder = [
	// This defines how groups are ordered within specific paths. So far, only the /wiki/ path uses this as it is the only path with sidebar groups.
	[	// /wiki/
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

// This is just the regular nav configuration but it's in here instead of config.js because it makes more sense that way.
export const NavBar = [
	{ text: 'Wiki', link: '/wiki/' },
	{ text: 'Contributing', link: '/contribute/CONT-TRANSLATIONS' },
	{ text: 'About Pojavlauncher', link: '/about/DEVICES' },
	{ text: 'Recent Updates', link: '/patchnotes/IOS-SUPPORT' },

]
