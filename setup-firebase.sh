#!/bin/bash

# Firebase Project Setup Script for Ayoub Essare Portfolio
# This script helps set up Firebase project and configuration

echo "🚀 Setting up Firebase for Ayoub Essare Portfolio..."

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI is not installed. Installing now..."
    npm install -g firebase-tools
fi

# Check if user is logged in to Firebase
if ! firebase projects:list &> /dev/null; then
    echo "🔐 Please login to Firebase..."
    firebase login
fi

echo "📋 Available Firebase projects:"
firebase projects:list

echo ""
echo "🔧 Setting up Firebase project..."

# Initialize Firebase (this will create .firebaserc if it doesn't exist)
if [ ! -f ".firebaserc" ]; then
    echo "📝 Initializing Firebase project..."
    firebase init hosting --project essare-me --public dist/essare-me/browser --yes
else
    echo "✅ Firebase project already initialized"
fi

echo ""
echo "🎯 Next steps:"
echo "1. If project 'essare-me' doesn't exist, create it in Firebase Console:"
echo "   https://console.firebase.google.com/"
echo ""
echo "2. Or use an existing project by updating .firebaserc:"
echo "   firebase use YOUR_PROJECT_ID"
echo ""
echo "3. Deploy your application:"
echo "   ./deploy-firebase.sh"
echo ""
echo "✅ Firebase setup completed!"
