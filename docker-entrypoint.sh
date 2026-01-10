#!/bin/sh
set -e

echo "Starting Yoonet Sales Onboarding..."

# Check if database exists, if not copy from template
if [ ! -f "./data/yoonet.db" ]; then
    echo "Database not found. Copying template database..."
    cp ./data/yoonet.db.template ./data/yoonet.db
    echo "Database initialized successfully!"
else
    echo "Database found. Using existing data."
fi

echo "Starting server..."
exec "$@"
