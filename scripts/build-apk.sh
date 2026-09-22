#!/usr/bin/env bash
set -e

echo "=========================================="
echo "  TaxiMaster TVT — Android Build Script"
echo "  v1.0.0 · NUVANDA"
echo "=========================================="

# Export Java 21 Home
export JAVA_HOME="/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home"
export PATH="$JAVA_HOME/bin:$PATH"

BUILD_TYPE="${1:-debug}"

# 1. Build Static Export
echo ""
echo "📦 Step 1: Building Next.js Static Export..."
CAPACITOR_BUILD=1 npm run build

# 2. Sync with Capacitor Android Shell
echo ""
echo "🔄 Step 2: Syncing Capacitor Android Assets..."
npx cap sync android

# 3. Build based on type
cd android

if [ "$BUILD_TYPE" = "release" ]; then
  # Release AAB for Google Play Store
  echo ""
  echo "🔨 Step 3: Building RELEASE Android App Bundle (AAB)..."
  ./gradlew bundleRelease

  AAB_SRC="app/build/outputs/bundle/release/app-release.aab"
  AAB_DEST="../../TaxiMaster-TVT.aab"

  if [ -f "$AAB_SRC" ]; then
    cp "$AAB_SRC" "$AAB_DEST"
    echo ""
    echo "✅ RELEASE AAB BUILD SUCCESSFUL!"
    echo "📦 Google Play Store AAB ready at:"
    echo "   -> /Users/hegazy/Desktop/NUVANDA/Taxi exams/TaxiMaster-TVT.aab"
  else
    echo "⚠️ AAB not found at expected path"
  fi

  # Also build release APK for sideloading
  echo ""
  echo "🔨 Step 3b: Also building signed release APK for sideloading..."
  ./gradlew assembleRelease

  APK_SRC="app/build/outputs/apk/release/app-release.apk"
  APK_DEST="../../TaxiMaster-TVT.apk"

  if [ -f "$APK_SRC" ]; then
    cp "$APK_SRC" "$APK_DEST"
    echo ""
    echo "✅ RELEASE APK ready at:"
    echo "   -> /Users/hegazy/Desktop/NUVANDA/Taxi exams/TaxiMaster-TVT.apk"
  fi

else
  # Debug APK for testing
  echo ""
  echo "🔨 Step 3: Compiling Debug Android APK..."
  ./gradlew assembleDebug

  APK_SRC="app/build/outputs/apk/debug/app-debug.apk"
  APK_DEST="../../TaxiMaster-TVT.apk"

  if [ -f "$APK_SRC" ]; then
    cp "$APK_SRC" "$APK_DEST"
    echo ""
    echo "✅ DEBUG BUILD SUCCESSFUL!"
    echo "📱 Installable APK ready at:"
    echo "   -> /Users/hegazy/Desktop/NUVANDA/Taxi exams/TaxiMaster-TVT.apk"
  else
    echo "⚠️ APK generated at android/app/build/outputs/apk/debug/app-debug.apk"
  fi
fi

echo ""
echo "=========================================="
echo "  Build complete! $(date)"
echo "=========================================="
