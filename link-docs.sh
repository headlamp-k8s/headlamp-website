#!/usr/bin/env sh
set -e

TARGET=${HEADLAMP_DOCS:-${1}}

# Clone the repository if the TARGET doesn't exist
if [ ! -e "$TARGET" ]; then
  if [ ! -e "./headlamp" ]; then
    echo "Cloning headlamp/docs repository..."
    git clone --depth 1 https://github.com/headlamp-k8s/headlamp.git ./headlamp
  elif [ -d "./headlamp/.git" ]; then
    echo "Updating headlamp/docs repository..."
    git -C ./headlamp pull
  fi
  make docs -C ./headlamp

  TARGET=$(realpath ./headlamp/docs)
fi

TARGET_PATH=$(realpath "$TARGET")
LINK_PATH="./docs/latest"

echo "Using Headlamp docs target: $TARGET_PATH"

mkdir -p $(dirname $LINK_PATH)

# Remove the existing link if it exists
if [ -L $LINK_PATH ]; then
  echo "Not creating docs link, already exists: ./docs/latest -> $(readlink -f $LINK_PATH)"
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
