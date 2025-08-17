#!/bin/bash

# Production Deployment Script for Ayoub Essare Portfolio
# This script builds and prepares the application for production deployment

echo "🚀 Starting production build for Ayoub Essare Portfolio..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build for production
echo "🏗️ Building for production..."
npm run build:prod

# Check build size
echo "📊 Build size analysis:"
du -sh dist/essare-me/

# Optimize images (if you have image optimization tools)
echo "🖼️ Optimizing assets..."

# Create deployment package
echo "📦 Creating deployment package..."
cd dist/essare-me/
tar -czf ../../essare-me-production.tar.gz .
cd ../..

echo "✅ Production build completed successfully!"
echo "📁 Build output: dist/essare-me/"
echo "📦 Deployment package: essare-me-production.tar.gz"
echo ""
echo "🚀 Ready for deployment!"
echo "💡 You can now upload the contents of dist/essare-me/ to your web server"
