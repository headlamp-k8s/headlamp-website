// created via add-plugin.js
const headlamp_kubescape = {
    "version": "v0.10.3",
    "name": "headlamp_kubescape",
    "displayName": "Kubescape",
    "createdAt": "2025-08-07T07:22:50Z",
    "description": "Kubescape compliance and vulnerabilities in Headlamp.",
    "homeURL": "https://github.com/kubescape/headlamp-plugin",
    "logoURL": "https://avatars.githubusercontent.com/u/100554170",
    "links": [
        {
            "name": "Headlamp",
            "url": "https://headlamp.dev/"
        },
        {
            "name": "Kubescape operator",
            "url": "https://kubescape.io/docs/operator/"
        }
    ],
    "screenshots": [
        {
            "title": "Compliance",
            "url": "https://raw.githubusercontent.com/kubescape/headlamp-plugin/693d664b433f3f3c03e7a8337cd665eb4be32b8e/demo/compliance.png"
        },
        {
            "title": "Vulnerabilities",
            "url": "https://raw.githubusercontent.com/kubescape/headlamp-plugin/693d664b433f3f3c03e7a8337cd665eb4be32b8e/demo/vulnerabilities.png"
        }
    ],
    "annotations": {
        "headlamp/plugin/archive-url": "https://github.com/kubescape/headlamp-plugin/releases/download/v0.10.3/headlamp-plugin-v0.10.3.tar.gz",
        "headlamp/plugin/archive-checksum": "SHA256:8f9b3fd307a56dd8a34cc7cc7a5b8f07a4d2c5870aa1c95afbc1526e4025bebd",
        "headlamp/plugin/version-compat": ">=0.29",
        "headlamp/plugin/distro-compat": "in-cluster,web,docker-desktop,desktop"
    },
    "readme": "\n## Kubescape Headlamp plugin\n\nThe Kubescape Headlamp plugin provides an open source plugin for Headlamp.\n\n[Kubescape](https://kubescape.io/docs/operator/) is a security platform protecting against configuration issues and image vulnerabilities.\n[Headlamp](https://kubescape.io/) is a dashboard for Kubernetes, and is extensible with plugins. \n\nThe Kubescape Headlamp plugin provides views in Headlamp for configuration and vulnerabilities scanning, based on information delivered by the Kubescape operator.\n\n## Prerequisites\n\n- [Kubescape operator](https://kubescape.io/docs/operator/) should be installed in the k8s cluster and enabled for configuration and image scanning.\n  We recommend Kubescape operator with `capabilities.continuousScan: enable`.\n\n  If the operator is working, custom resources are generated. You can test this with e.g. `kubectl get workloadconfigurationscans -A`.\n\n- [Headlamp](https://headlamp.dev/) should be installed in the k8s cluster or workstation. For a quick test the desktop version is recommended.\n\nThe plugin has been tested with current versions of Headlamp (browser and desktop) and Kubescape operator.\n\n## Installation \n\nDesktop Headlamp \n- Install Headlamp (https://headlamp.dev/docs/latest/installation/desktop/)\n- Open Plugin Catalog \n- Select the KubeScape Headlamp plugin and click the install button\n- After install you may need to restart Headlamp \n\nIn-cluster Headlamp \n- Install Headlamp (https://headlamp.dev/docs/latest/installation/in-cluster/)\n- Deploy the container image `quay.io/kubescape/headlamp-plugin` as a sidecar container to the headlamp deployment. See [example helm values](https://github.com/kubescape/headlamp-plugin/blob/main/examples/headlamp-helm-values.yaml).\n\n## Functionality\n\n- Compliancy overview page with views on controls, resources and namespaces.\n- Vulnerabilities overview with views on CVEs, resources and images.\n- Generated Network policies viewer.\n- Playground for Validation Admission Policies.\n- eBPF-based runtime threat detection\n- Custom frameworks and exceptions\n\nThe queries to the Kubescape database use Headlamps feature `Allowed namespaces`, supporting multi tenant clusters. Configuration of this setting is done per user in Settings/Cluster.\n",
    "install": "Desktop Headlamp \n- Install Headlamp (https://headlamp.dev/docs/latest/installation/desktop/)\n- Open Plugin Catalog \n- Select the KubeScape Headlamp plugin and click the install button\n- After install you may need to restart Headlamp \n\nIn-cluster Headlamp \n- Install Headlamp (https://headlamp.dev/docs/latest/installation/in-cluster/)\n- Add an initContainer to the headlamp deployment to download the kubescape-plugin files. See [example helm values](https://github.com/kubescape/headlamp-plugin/blob/main/examples/headlamp-helm-values.yaml).\n",
    "githubURL": "https://github.com/kubescape/headlamp-plugin/blob/main"
};

export default headlamp_kubescape;
