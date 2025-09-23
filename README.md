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

This website shows Headlamp's documentation. The documentation is written in Markdown and is located in the `docs` directory of the [headlamp](https://github.com/kubernetes-sigs/headlamp) repository.

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

### Documentation linting

You can use [Vale](https://vale.sh/) linter to check for common mistakes, spelling errors and validate with [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/).

To get started you need to [install vale](https://vale.sh/docs/vale-cli/installation/).

Then run this command to check a single document

```
vale docs/latest/path/to/your/page.md
```

or this command to check all documents

```
vale docs
```

Example output of the linter:

```
 docs/latest/installation/in-cluster/index.md
 9:4     suggestion  'Using Helm' should use         Microsoft.Headings
                     sentence-style capitalization.
 12:57   warning     Try to avoid using              Microsoft.We
                     first-person plural like
                     'our'.
 22:11   error       Use 'it's' instead of 'it is'.  Microsoft.Contractions
 ...
```

### Latest Docs Built

Latest docs build: [7f98a8d](https://github.com/kubernetes-sigs/headlamp/tree/7f98a8dc7c79a3a732d2a95b01a262443b37fcfe/docs)

The line below is updated automatically by a Github Action to point to the latest version of the documentation and trigger a new build of the website.

## License

Headlamp is licensed under the Apache License, Version 2.0. See [LICENSE](./LICENSE) for the full license text.

## Plugins

To add plugins to the featured plugins list to the plugins page:

- Be sure to use the link from the github page view of the plugin YAML file
  ex. https://github.com/headlamp-k8s/plugins/blob/main/example-change-logo/artifacthub-pkg.yml

```
npm run add-plugin <link-to-plugin-yaml>
```

This will download the plugin YAML file, parse it, and add it to the list of plugin data files in `src/components/PluginsPage/PluginData`.

### For adding featured plugins

- Run the same command as above (if not already added)
- Locate the `featuredPluginsInfo` object in `src/components/PluginsPage/pluginInfo.ts`
- Add a new entry to the `featuredPluginsInfo` array for the new plugin, using the same format as the existing entries
- Be sure to include `displayName`, `featDescription`, `imageSrc`, and `imageAlt` fields
- Please note that the `displayName` must match the `displayName` field in the plugin YAML file in `src/components/PluginsPage/PluginData` for the plugin to be recognized as featured
