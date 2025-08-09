#!/bin/bash

echo "Building the React app..."
npm run build

echo "Deploying to GitHub Pages..."
npm run deploy

echo "Deployment complete!"
