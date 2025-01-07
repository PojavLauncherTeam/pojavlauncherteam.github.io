(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{399:function(t,a,e){"use strict";e.r(a);var r=e(13),s=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"building-from-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-from-source"}},[t._v("#")]),t._v(" Building from source")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Even though it is well-explained, building from source requires skill, internet and time.")])]),t._v(" "),a("li",[a("p",[t._v("You can try building on Android with "),a("a",{attrs:{href:"https://termux.dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Termux"),a("OutboundLink")],1),t._v(", but no support will be included for it.")])]),t._v(" "),a("li",[a("p",[t._v("It is recommended to clone the PojavLauncher repository before starting "),a("RouterLink",{attrs:{to:"/wiki/getting_started/BUILD_FROM_SOURCE.html#setting-up-jre"}},[t._v("Setting Up JRE")])],1)]),t._v(" "),a("li",[a("p",[a("code",[t._v("git clone https://github.com/PojavLauncherTeam/PojavLauncher")])])])]),t._v(" "),a("h2",{attrs:{id:"setting-up-jre"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-jre"}},[t._v("#")]),t._v(" Setting up JRE")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("You can download it from "),a("a",{attrs:{href:"https://github.com/PojavLauncherTeam/android-openjdk-build-multiarch/actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("CI Auto Builds"),a("OutboundLink")],1),t._v(" if you don't want to/can't build.")])]),t._v(" "),a("li",[a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PojavLauncherTeam/android-openjdk-build-multiarch",target:"_blank",rel:"noopener noreferrer"}},[t._v("PojavLauncherTeam/android-openjdk-build-multiarch"),a("OutboundLink")],1)])])]),t._v(" "),a("h3",{attrs:{id:"android"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android"}},[t._v("#")]),t._v(" Android")]),t._v(" "),a("ul",[a("li",[t._v("Clone the git repository of PojavLauncherTeam/android-openjdk-build-multiarch")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clone https://github.com/PojavLauncherTeam/android-openjdk-build-multiarch\n")])])]),a("ul",[a("li",[t._v("Change the directory to the cloned repository")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd android-openjdk-build-multiarch\n")])])]),a("ul",[a("li",[t._v("Download Android NDK r10e from "),a("a",{attrs:{href:"https://github.com/android/ndk/wiki/Unsupported-Downloads#r10e",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(" and place it in this directory with a file explorer. (Can't automatically download because of EULA)")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Do not attempt to build using a newer or older NDK, it will lead to compilation errors.")])]),t._v(" "),a("h3",{attrs:{id:"ios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios"}},[t._v("#")]),t._v(" iOS")]),t._v(" "),a("ul",[a("li",[t._v("Get the latest "),a("a",{attrs:{href:"https://developer.apple.com/xcode/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Xcode"),a("OutboundLink")],1),t._v(" (tested with Xcode 12).")])]),t._v(" "),a("h4",{attrs:{id:"platform-and-architecture-specific-environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#platform-and-architecture-specific-environment-variables"}},[t._v("#")]),t._v(" Platform and architecture specific environment variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Platform")]),t._v(" "),a("th",[t._v("Architecture")]),t._v(" "),a("th",[t._v("Target")]),t._v(" "),a("th",[t._v("Target_JDK")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Android")]),t._v(" "),a("td",[t._v("armv8/aarch64")]),t._v(" "),a("td",[t._v("aarch64-linux-android")]),t._v(" "),a("td",[t._v("aarch64")])]),t._v(" "),a("tr",[a("td",[t._v("Android")]),t._v(" "),a("td",[t._v("armv7/aarch32")]),t._v(" "),a("td",[t._v("arm-linux-androideabi")]),t._v(" "),a("td",[t._v("arm")])]),t._v(" "),a("tr",[a("td",[t._v("Android")]),t._v(" "),a("td",[t._v("x86/i686")]),t._v(" "),a("td",[t._v("i686-linux-android")]),t._v(" "),a("td",[t._v("x86")])]),t._v(" "),a("tr",[a("td",[t._v("Android")]),t._v(" "),a("td",[t._v("x86_64/amd64")]),t._v(" "),a("td",[t._v("x86_64-linux-android")]),t._v(" "),a("td",[t._v("x86_64")])]),t._v(" "),a("tr",[a("td",[t._v("iOS/iPadOS")]),t._v(" "),a("td",[t._v("armv8/aarch64")]),t._v(" "),a("td",[t._v("aarch64-macos-ios")]),t._v(" "),a("td",[t._v("aarch64")])])])]),t._v(" "),a("h4",{attrs:{id:"building-jre-java-runtime-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-jre-java-runtime-environment"}},[t._v("#")]),t._v(" Building JRE (Java Runtime Environment)")]),t._v(" "),a("CodeSwitcher",{attrs:{languages:{android:"Android",ios:"iOS"}},scopedSlots:t._u([{key:"android",fn:function(){return[a("div",{staticClass:"language-android extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("export BUILD_IOS=0\n")])])])]},proxy:!0},{key:"ios",fn:function(){return[a("div",{staticClass:"language-ios extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("export BUILD_IOS=1\n")])])])]},proxy:!0}])}),t._v(" "),a("p",[a("code",[t._v("export BUILD_FREETYPE_VERSION=[2.10.4]")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("You can use versions "),a("strong",[t._v("between 2.6.2 and 2.10.4")]),t._v(" but "),a("strong",[t._v("2.10.4")]),t._v(" is preferred.")])]),t._v(" "),a("p",[a("code",[t._v("export JDK_DEBUG_LEVEL=[release]")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("You can use "),a("strong",[t._v("release")]),t._v(", "),a("strong",[t._v("fastdebug")]),t._v(" and "),a("strong",[t._v("debug")]),t._v(", but "),a("strong",[t._v("release")]),t._v(" is preferred")])]),t._v(" "),a("p",[a("code",[t._v("export JVM_VARIANTS=[client]")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("You can use "),a("strong",[t._v("client")]),t._v(" and "),a("strong",[t._v("server")]),t._v(" variants, "),a("strong",[t._v("Client")]),t._v(" is for "),a("strong",[t._v("aarch32")]),t._v(" and "),a("strong",[t._v("server")]),t._v(" is for "),a("strong",[t._v("other architectures")])])]),t._v(" "),a("p",[t._v("(Android only)")]),t._v(" "),a("p",[a("code",[t._v("./extractndk.sh")])]),t._v(" "),a("p",[a("code",[t._v("./maketoolchain.sh")])]),t._v(" "),a("h5",{attrs:{id:"get-cups-freetype-and-build-freetype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-cups-freetype-and-build-freetype"}},[t._v("#")]),t._v(" Get CUPS, Freetype and build Freetype")]),t._v(" "),a("p",[a("code",[t._v("./getlibs.sh")])]),t._v(" "),a("p",[a("code",[t._v("./buildlibs.sh")])]),t._v(" "),a("h5",{attrs:{id:"clone-jdk-run-once"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone-jdk-run-once"}},[t._v("#")]),t._v(" Clone JDK, run once")]),t._v(" "),a("p",[a("code",[t._v("./clonejdk.sh")])]),t._v(" "),a("h5",{attrs:{id:"configure-jdk-and-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-jdk-and-build"}},[t._v("#")]),t._v(" Configure JDK and build")]),t._v(" "),a("p",[a("code",[t._v("./buildjdk.sh")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If no configuration is changed, run "),a("code",[t._v("sh makejdkwithoutconfigure.sh")]),t._v(" instead")])]),t._v(" "),a("h5",{attrs:{id:"pack-the-built-jdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pack-the-built-jdk"}},[t._v("#")]),t._v(" Pack the built JDK")]),t._v(" "),a("p",[a("code",[t._v("./removejdkdebuginfo.sh")])]),t._v(" "),a("p",[a("code",[t._v("./tarjdk.sh")])]),t._v(" "),a("h2",{attrs:{id:"lwjgl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lwjgl"}},[t._v("#")]),t._v(" LWJGL")]),t._v(" "),a("ul",[a("li",[t._v("Coming soon")])]),t._v(" "),a("h2",{attrs:{id:"building-the-launcher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-the-launcher"}},[t._v("#")]),t._v(" Building the Launcher")]),t._v(" "),a("h3",{attrs:{id:"updating-translations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-translations"}},[t._v("#")]),t._v(" Updating translations")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Updating translations is easier thanks to language list updater scripts")])]),t._v(" "),a("li",[a("p",[t._v("Just run this command and it'll be automatically updated from Crowdin.")])])]),t._v(" "),a("CodeSwitcher",{attrs:{languages:{win:"Windows",linuxmac:"Linux/MacOS"}},scopedSlots:t._u([{key:"win",fn:function(){return[a("div",{staticClass:"language-win extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("scripts\\languagelist_updater.bat\n")])])])]},proxy:!0},{key:"linuxmac",fn:function(){return[a("div",{staticClass:"language-linuxmac extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("chmod +x scripts/languagelist_updater.sh\nbash scripts/languagelist_updater.sh\n")])])])]},proxy:!0}])}),t._v(" "),a("h3",{attrs:{id:"build-glfw-stub"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-glfw-stub"}},[t._v("#")]),t._v(" Build GLFW Stub")]),t._v(" "),a("CodeSwitcher",{attrs:{languages:{win:"Windows",linuxmac:"Linux/MacOS"}},scopedSlots:t._u([{key:"win",fn:function(){return[a("div",{staticClass:"language-win extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./gradlew :jre_lwjgl3glfw:build\n")])])])]},proxy:!0},{key:"linuxmac",fn:function(){return[a("div",{staticClass:"language-linuxmac extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("gradle :jre_lwjgl3glfw:build\n")])])])]},proxy:!0}])}),t._v(" "),a("h3",{attrs:{id:"build-the-launcher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-the-launcher"}},[t._v("#")]),t._v(" Build the Launcher")]),t._v(" "),a("CodeSwitcher",{attrs:{languages:{win:"Windows",linuxmac:"Linux/MacOS"}},scopedSlots:t._u([{key:"win",fn:function(){return[a("div",{staticClass:"language-win extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./gradlew.bat :app_pojavlauncher:assembleDebug\n")])])])]},proxy:!0},{key:"linuxmac",fn:function(){return[a("div",{staticClass:"language-linuxmac extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./gradlew :app_pojavlauncher:assembleDebug\n")])])])]},proxy:!0}])})],1)}),[],!1,null,null,null);a.default=s.exports}}]);