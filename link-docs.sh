#!/usr/bin/env sh
set -e

TARGET=${HEADLAMP_DOCS:-${1:-../headlamp/docs}}
TARGET_PATH=$(realpath "$TARGET")
LINK_PATH="./docs/latest"

mkdir -p $(dirname $LINK_PATH)

# Remove the existing link if it exists
if [ -L $LINK_PATH ]; then
  echo "Not creating docs link, ./docs/latest already exists"
  exit 0
fi

# Check if TARGET exists
if [ ! -e "$TARGET_PATH" ]; then
  echo "Error: Cannot create docs link to $TARGET_PATH; target does not exist."
  echo "You can set the HEADLAMP_DOCS environment variable to the correct path, or pass the path as an argument to $0."
  exit 1
fi

ln -sf $TARGET_PATH $LINK_PATH
echo "Created link $LINK_PATH -> $TARGET_PATH"
