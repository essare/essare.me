#!/bin/bash

# Firebase Deployment Script for Ayoub Essare Portfolio
# This script builds and deploys the Angular application to Firebase Hosting

echo "🚀 Starting Firebase deployment for Ayoub Essare Portfolio..."

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI is not installed. Please install it first:"
    echo "npm install -g firebase-tools"
    exit 1
fi

# Check if user is logged in to Firebase
if ! firebase projects:list &> /dev/null; then
    echo "❌ Not logged in to Firebase. Please login first:"
    echo "firebase login"
    exit 1
fi

# Check if project exists and user has access
echo "🔍 Checking Firebase project access..."
if ! firebase projects:list | grep -q "essare-me"; then
    echo "❌ Project 'essare-me' not found or you don't have access."
    echo "Available projects:"
    firebase projects:list
    echo ""
    echo "Please either:"
    echo "1. Create the project 'essare-me' in Firebase Console"
    echo "2. Update the project ID in firebase.json and GitHub Actions"
    echo "3. Use a different existing project"
    exit 1
fi

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build for production
echo "🏗️ Building for production..."
npm run build:prod

# Check build size
echo "📊 Build size analysis:"
du -sh dist/essare-me/browser/

# Deploy to Firebase
echo "🚀 Deploying to Firebase Hosting..."
firebase deploy --only hosting

echo "✅ Firebase deployment completed successfully!"
echo "🌐 Your site should be live at: https://essare-me.web.app"
echo "📁 Build output: dist/essare-me/browser/"
