---
title: Mac OS Installation
sidebar_label: Mac OS
sidebar_position: 2
---

## Install via Homebrew

Once you have the [Homebrew package manager](https://brew.sh/) itself installed, you can install the latest Headlamp release by running the following command:

```sh
brew install --cask headlamp
```

### Upgrading

To upgrade Headlamp when it's installed via Homebrew, run:

```sh
brew upgrade headlamp
```

For more information on upgrading packages with Homebrew, including automatic updates, please
read the [official documentation](https://docs.brew.sh/Manpage).

## Install via Github Releases

For Mac OS we provide a _.dmg_ file, so you need to download it from the [releases page](https://github.com/headlamp-k8s/headlamp/releases)
and then follow the below steps :

1. Double click the downloaded file to make its content available (name will show up in the Finder sidebar), usually a window opens showing the content as well
2. Drag the application from the _DMG_ window into /Applications to install wait for the copy process to finish.

Once the installation process is completed you can find Headlamp as a desktop app in Applications directory.

### Upgrading

Until we have an automatic update, to upgrade Headlamp when it's installed directly via the releases page, you have to download any newer version and re-install it.
