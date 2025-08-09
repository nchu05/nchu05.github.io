#!/bin/bash

set -e  # Exit on any error

echo "🔨 Building the React app..."
npm run build

echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo "🌐 Your site should be available at: https://nchu05.github.io/"
echo ""
echo "Note: It may take a few minutes for changes to appear on GitHub Pages."
