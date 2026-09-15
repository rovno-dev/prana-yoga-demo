#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

echo "[1/4] Removing broken/partial dependencies..."
rm -rf node_modules .next

# Remove a possibly half-written lockfile from a failed install.
rm -f package-lock.json

echo "[2/4] Checking npm cache..."
npm cache verify >/dev/null

echo "[3/4] Installing dependencies from package.json..."
npm install --no-audit --no-fund

echo "[4/4] Done. Start the site with: npm run dev"
