#!/bin/bash

export PATH=$PATH:/www/server/nodejs/v20.17.0/bin

cd /www/wwwroot/beta.clearmymind.com || exit 1

echo "==== DEPLOY START $(date) ===="

# Pull latest code
echo "Pulling latest changes..."
git pull || exit 1

# Install dependencies
echo "Installing dependencies..."
npm install || exit 1

# Clear Next.js cache
echo "Clearing Next.js cache..."
rm -rf .next

# Build Next.js
echo "Building the app..."
npm run build || exit 1

# Manage PM2
if ! pm2 list | grep -q "next-app"; then
  echo "PM2 app not running. Starting..."
  pm2 start npm --name "next-app" -- run start
else
  echo "Restarting PM2 app..."
  pm2 restart next-app
fi

echo "==== DEPLOY COMPLETE $(date) ===="