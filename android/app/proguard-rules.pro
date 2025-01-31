# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:
-keep class com.react_native_features.** { *; }
-dontwarn com.react_native_features.**

# Keep Reanimated classes and methods
-keep class com.swmansion.reanimated.** { *; }

# Prevent obfuscation of Reanimated native methods
-keepclassmembers class * {
    @com.swmansion.reanimated.annotations.* <methods>;
}

# Keep JNI (Java Native Interface) methods used by Reanimated
-keepclassmembers class * {
    native <methods>;
}

# Avoid stripping required classes used by Reanimated
-keep class com.facebook.react.bridge.* { *; }
-keep class com.facebook.react.uimanager.* { *; }
-keep class com.facebook.jni.* { *; }
-keep class com.swmansion.reanimated.* { *; }

# Ensure React Native and Hermes work correctly
-keep class com.facebook.hermes.unicode.* { *; }
-keep class com.facebook.react.** { *; }

# Keep annotations (important for Reanimated)
-keepattributes *Annotation*

# Preserve class names used in reflection
-keepnames class com.swmansion.reanimated.** { *; }
-keepclassmembers class com.swmansion.reanimated.** { *; }
