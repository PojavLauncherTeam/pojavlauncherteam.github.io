# Adding custom Java arguments

## To add a JVM Argument

1. Select the profile you want to add JVM arguments.
2. Tap on JVM Arguments.
3. Fill in with the relevant JVM arguments you like.
4. Finally Save the Profile by clicking on Save button.

## Some Common JVM Arguments

`-XX:ActiveProcessorCount=8` helps if your SoC cores are not detected properly in Minecraft
(if Minecraft is reporting CPU as 5x null or 9x null)

`-Dsodium.checks.issue2561=false` Fixes some of the common crashes that could occur when using LTW renderer along with sodium
