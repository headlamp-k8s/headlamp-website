// created via add-plugin.js
    const headlamp_trivy = {
    "version": "v0.3.1",
    "name": "headlamp_trivy",
    "displayName": "Trivy Headlamp Plugin",
    "createdAt": "2025-04-19T18:04:53Z",
    "description": "Trivy compliance and vulnerabilities in Headlamp.",
    "homeURL": "https://github.com/kubebeam/trivy-headlamp-plugin",
    "logoURL": "https://raw.githubusercontent.com/aquasecurity/trivy-docker-extension/refs/heads/main/trivy.svg",
    "links": [
        {
            "name": "Headlamp",
            "url": "https://github.com/headlamp-k8s/headlamp"
        },
        {
            "name": "Trivy operator",
            "url": "https://aquasecurity.github.io/trivy-operator/"
        }
    ],
    "screenshots": [
        {
            "title": "Compliance",
            "url": "https://raw.githubusercontent.com/kubebeam/trivy-headlamp-plugin/e6680316a37adc8082eca1078271429ada62d1f3/demo/compliance.png"
        },
        {
            "title": "Vulnerabilities",
            "url": "https://raw.githubusercontent.com/kubebeam/trivy-headlamp-plugin/e6680316a37adc8082eca1078271429ada62d1f3/demo/vulnerabilities.png"
        }
    ],
    "annotations": {
        "headlamp/plugin/archive-url": "https://github.com/kubebeam/trivy-headlamp-plugin/releases/download/v0.3.1/trivy-headlamp-plugin-v0.3.1.tar.gz",
        "headlamp/plugin/archive-checksum": "SHA256:33824ed4a315da1d7d89b2bd15ca7c1e857a252c81a418124905780951cbbc5a",
        "headlamp/plugin/version-compat": ">=0.25",
        "headlamp/plugin/distro-compat": "in-cluster,web,docker-desktop,desktop"
    },
    "install": "## Desktop Headlamp\n- Install Headlamp (https://headlamp.dev/docs/latest/installation/desktop/).\n- Open Plugin Catalog.\n- Select the Trivy Headlamp plugin and click the install button.\n- After install you may need to restart Headlamp.\n\n## In-cluster Headlamp\n- Install Headlamp (https://headlamp.dev/docs/latest/installation/in-cluster/).\n- Configure helm values for Headlamp to add an initContainer for downloading the tarball. See [example helm values](https://github.com/Kubebeam/kubescape-headlamp-plugin/blob/main/examples/headlamp-helm-values.yaml). The tarball for the plugin is saved in the asset list for the [release](https://github.com/kubebeam/trivy-headlamp-plugin/releases).\n- Alternatively follow the guidance from headlamp to create a container image with the plugin artifacts: https://headlamp.dev/blog/2022/10/20/best-practices-for-deploying-headlamp-with-plugins/.\n",
    "readme": "# Trivy Headlamp Plugin\n\nThe Trivy Headlamp plugin provides an open source plugin for Headlamp. It builds upon the work of [Trivy Operator](https://aquasecurity.github.io/trivy-operator) and [Headlamp](https://github.com/headlamp-k8s/headlamp).\n\nHeadlamp is a dashboard for Kubernetes, and is extensible with plugins. Trivy Operator is a security platform protecting against configuration issues and image vulnerabilities.\n\nThe Trivy Headlamp plugin provides views in Headlamp for configuration and vulnerabilities scanning, based on information delivered by the Trivy operator.\n\n## Prerequisites\n\n- [Trivy operator](https://aquasecurity.github.io/trivy-operator/) should be installed in the k8s cluster and enabled for configuration and image scanning.\n- [Headlamp](https://github.com/headlamp-k8s/headlamp) should be installed in the k8s cluster or workstation. For a quick test the desktop version is recommended.\n\nThe plugin has been tested with Headlamp v0.25.0 (browser and desktop) and Trivy operator helm chart v0.24.1.\n\n## Use cases\n\nThe plugin provides view pages for Trivy custom resources, such as clustercompliance, configaudit, exposedsecret, infraassessment, rbacassessment, sbomreport and vulnerabilityreports.\n\n## Installation\n\n#### Desktop Headlamp\n\n- Install Headlamp (https://headlamp.dev/docs/latest/installation/desktop/).\n- Open Plugin Catalog.\n- Select the Trivy Headlamp plugin and click the install button.\n- After install you may need to restart Headlamp.\n\n#### In-cluster Headlamp\n\n- Install Headlamp (https://headlamp.dev/docs/latest/installation/in-cluster/)\n- Add an initContainer to the headlamp deployment to download the trivy-plugin files. See [example helm values](examples/headlamp-helm-values.yaml).\n",
    "githubURL": "https://github.com/kubebeam/trivy-headlamp-plugin/blob/main"
};

    export default headlamp_trivy;
    