# Headlamp Website

Headlamp is a Kubernetes debugging tool that provides a visual interface for debugging applications in a Kubernetes cluster. This repository contains the source code for Headlamp's website.

Headlamp's website is built using [Docusaurus](https://docusaurus.io/).

## Development

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Documentation

This website shows Headlamp's documentation. The documentation is written in Markdown and is located in the `docs` directory of the [headlamp](https://github.com/headlamp-k8s/headlamp) repository.

When this website is build, it runs the script [link-docs.sh](./link-docs.sh) which creates symlinks to the documentation in the `docs` directory of the Headlamp repository.

### Linking docs

This script allows to set the documentation location in different ways.

The following command will link the documentation from the `docs` directory of the Headlamp repository:

```sh
$ ./link-docs.sh <path-to-docs-folder-in-a-headlamp-repo-clone>
```

This command will do the same but receive the documentation location as an environment variable:

```sh
$ HEADLAMP_DOCS=<path-to-docs-folder-in-a-headlamp-repo-clone> ./link-docs.sh
```

When run without arguments, the script will attempt to clone the Headlamp repository and link the documentation from the `docs` directory of that clone.

```sh
$ ./link-docs.sh
```

### Latest Docs Built

Latest docs build: [60f43fc](https://github.com/headlamp-k8s/headlamp/commit/60f43fcff390ed94ea8908eecf40679f905446a5)

The line below is updated automatically by a Github Action to point to the latest version of the documentation and trigger a new build of the website.

## License

Headlamp is licensed under the Apache License, Version 2.0. See [LICENSE](./LICENSE) for the full license text.
