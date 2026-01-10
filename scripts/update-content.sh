#!/bin/bash

# Yoonet Sales Onboarding - Content Update Script
# This script helps manage content updates for the Docker deployment

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
DATA_DIR="$PROJECT_DIR/data"
SRC_DATA_DIR="$PROJECT_DIR/src/data"

echo "Yoonet Sales Onboarding - Content Manager"
echo "=========================================="
echo ""

case "${1:-help}" in
  init)
    echo "Initializing data directory..."
    mkdir -p "$DATA_DIR"
    cp "$SRC_DATA_DIR"/*.json "$DATA_DIR/"
    echo "Done! Edit files in $DATA_DIR to customize content."
    ;;

  sync)
    echo "Syncing content from data/ to src/data/..."
    cp "$DATA_DIR"/*.json "$SRC_DATA_DIR/"
    echo "Done! Content synced to source directory."
    ;;

  backup)
    BACKUP_FILE="$PROJECT_DIR/content-backup-$(date +%Y%m%d-%H%M%S).tar.gz"
    echo "Creating backup..."
    tar -czf "$BACKUP_FILE" -C "$DATA_DIR" .
    echo "Backup created: $BACKUP_FILE"
    ;;

  restore)
    if [ -z "$2" ]; then
      echo "Usage: $0 restore <backup-file>"
      exit 1
    fi
    echo "Restoring from $2..."
    tar -xzf "$2" -C "$DATA_DIR"
    echo "Done! Content restored."
    ;;

  validate)
    echo "Validating JSON files..."
    for file in "$DATA_DIR"/*.json; do
      if python3 -m json.tool "$file" > /dev/null 2>&1; then
        echo "  ✓ $(basename "$file")"
      else
        echo "  ✗ $(basename "$file") - INVALID JSON"
        exit 1
      fi
    done
    echo "All files valid!"
    ;;

  *)
    echo "Usage: $0 <command>"
    echo ""
    echo "Commands:"
    echo "  init      - Initialize data directory with default content"
    echo "  sync      - Sync content from data/ to src/data/"
    echo "  backup    - Create a backup of current content"
    echo "  restore   - Restore content from a backup file"
    echo "  validate  - Validate JSON syntax in all content files"
    echo ""
    echo "Content Files:"
    echo "  - content.json         : Company info, stages, team, automated content"
    echo "  - email-templates.json : Email templates for all stages"
    ;;
esac
