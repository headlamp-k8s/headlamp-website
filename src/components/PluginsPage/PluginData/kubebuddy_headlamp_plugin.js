// created via add-plugin.js
    const kubebuddy_headlamp_plugin = {
    "version": "0.5.1",
    "name": "kubebuddy-headlamp-plugin",
    "category": "security",
    "displayName": "KubeBuddy",
    "createdAt": "2026-06-23T00:00:00Z",
    "description": "KubeBuddy checks for Headlamp. This plugin evaluates Kubernetes resources visible to Headlamp and surfaces findings directly in the UI.",
    "logoURL": "https://raw.githubusercontent.com/KubeDeckio/KubeBuddy/main/images/KubeBuddy.png",
    "homeURL": "https://kubebuddy.io",
    "keywords": [
        "headlamp",
        "headlamp-plugin",
        "kubebuddy",
        "kubernetes",
        "security",
        "troubleshooting",
        "cluster-health"
    ],
    "links": [
        {
            "name": "Documentation",
            "url": "https://kubebuddy.io"
        },
        {
            "name": "Source",
            "url": "https://github.com/KubeDeckio/KubeBuddy"
        },
        {
            "name": "Releases",
            "url": "https://github.com/KubeDeckio/KubeBuddy/releases"
        }
    ],
    "install": "Install from Headlamp Desktop:\n\n1. Open Headlamp Desktop.\n2. Go to Plugin Catalog.\n3. Search for KubeBuddy.\n4. Open the plugin details page and click Install.\n5. Restart Headlamp if prompted.\n6. Open KubeBuddy from the cluster sidebar.\n\nInstall in-cluster with the Headlamp plugin manager:\n\n```yaml\nconfig:\n  watchPlugins: true\n\npluginsManager:\n  enabled: true\n  configContent: |\n    plugins:\n      - name: kubebuddy-headlamp-plugin\n        source: https://artifacthub.io/packages/headlamp/kubebuddy/kubebuddy-headlamp-plugin\n        version: 0.5.1\n    installOptions:\n      parallel: true\n      maxConcurrent: 2\n```\n\nInstall with the Headlamp plugin CLI:\n\n```bash\nnpx @kinvolk/headlamp-plugin install https://artifacthub.io/packages/headlamp/kubebuddy/kubebuddy-headlamp-plugin\n```\n",
    "changes": [
        {
            "kind": "added",
            "description": "Initial Headlamp plugin release with browser-side Kubernetes checks, summary scoring, findings, CSV and JSON export, and YAML config import/export."
        }
    ],
    "maintainers": [
        {
            "name": "Richard Hooper",
            "email": "richard.hooper@pixelrobots.co.uk"
        }
    ],
    "provider": {
        "name": "KubeDeck"
    },
    "annotations": {
        "headlamp/plugin/archive-url": "https://github.com/KubeDeckio/KubeBuddy/releases/download/headlamp-plugin-v0.5.1/kubebuddy-headlamp-plugin-0.5.1.tar.gz",
        "headlamp/plugin/archive-checksum": "SHA256:05c79b920386c46f2501e04ca53d51cc2fed293f13d1f83a4e27d8fd8615b95e",
        "headlamp/plugin/version-compat": ">=0.22",
        "headlamp/plugin/distro-compat": "in-cluster,web,docker-desktop,desktop",
        "kubebuddy.io/checks-version": "v0.0.36"
    },
    "githubURL": "https://github.com/KubeDeckio/KubeBuddy/blob/main/headlamp-plugin"
};

    export default kubebuddy_headlamp_plugin;
    