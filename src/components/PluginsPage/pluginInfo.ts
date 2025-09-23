export type PluginCard = {
    id: string;
    name: string;
    // longer description for featured display (best at around 40 words)
    featDescription?: string;
    // normal description for catalog display (best at around 20 words)
    description: string;
    imageSrc?: string;
    imageAlt?: string;
    href?: string;
    githubURL?: string;
    artifactHubURL?: string;
    embedUrl?: string;
}


export const featuredPlugins: PluginCard[] = [
    {
        id: "plugin-AIassistant",
        name: "AI Assistant",
        featDescription: "The Headlamp AI Assistant is a plugin that integrates AI capabilities directly into Headlamp. It provides a conversational interface to interact with your Kubernetes clusters, helping you manage resources, troubleshoot issues, and understand complex configurations through natural language.",
        description: "Interact with Kubernetes using AI. Manage resources, troubleshoot, and understand configs via a conversational interface in Headlamp.",
        imageSrc: "img/pluginImages/AIPluginImage.png",
        imageAlt: "AI Assistant Plugin",
        href: "https://artifacthub.io/packages/headlamp/headlamp-plugins/headlamp_ai_assistant",
        githubURL: "https://github.com/headlamp-k8s/plugins/tree/main/ai-assistant",
        artifactHubURL: "https://artifacthub.io/packages/headlamp/headlamp-plugins/headlamp_ai_assistant"
    },
    {
        id: "plugin-AppCatalog",
        name: "App Catalog",
        featDescription: "The App Catalog plugin brings ArtifactHub and Helm into Headlamp, letting users browse, search, and install Helm charts from the dashboard. It streamlines Kubernetes app deployment, offering a smooth experience for discovering, installing, and managing charts directly within Headlamp’s interface.",
        description: "Browse and install Helm charts from ArtifactHub directly in Headlamp. Easily deploy and manage Kubernetes apps from the dashboard.",
        imageSrc: "img/pluginImages/AppCatalogImage.png",
        imageAlt: "App Catalog Plugin",
        href: "https://github.com/headlamp-k8s/plugins/tree/main/app-catalog#app-catalog",
        githubURL: "https://github.com/headlamp-k8s/plugins/tree/main/app-catalog"
    },
    {
        id: "plugin-CertManager",
        name: "cert-manager",
        featDescription: "The cert-manager plugin for Headlamp adds a sidebar item for cert-manager, allowing users to view and manage cert-manager resources directly from the dashboard. This integration simplifies the management of TLS certificates in Kubernetes, providing an easy-to-use interface for handling certificate issuance, renewal, and overall lifecycle management within Headlamp.",
        description: "The cert-manager plugin for Headlamp adds a sidebar item for cert-manager, allowing users to view and manage cert-manager resources directly from the dashboard.",
        imageSrc: "img/pluginImages/CertManagerImage.png",
        imageAlt: "cert-manager Plugin",
        href: "https://artifacthub.io/packages/headlamp/headlamp-plugins/headlamp_cert-manager",
        githubURL: "https://github.com/headlamp-k8s/plugins/tree/main/cert-manager",
        artifactHubURL: "https://artifacthub.io/packages/headlamp/headlamp-plugins/headlamp_cert-manager"
    },

];

export const allPlugins: PluginCard[] = [
    ...featuredPlugins,
    {
        id: "plugin-PluginCatalog",
        name: "Plugin Catalog",
        description: "Discover and install Headlamp plugins from a curated catalog. Enhance your Kubernetes experience with new features and functionalities.",
        githubURL: "https://github.com/headlamp-k8s/plugins/tree/main/plugin-catalog",
    },
    {
        id: "plugin-Flux",
        name: "Flux",
        description: "Visualize Flux in Headlamp. Sync clusters with Git repositories and automate configuration updates for GitOps workflows and Kubernetes deployments.",
        githubURL: "https://github.com/headlamp-k8s/plugins/tree/main/flux",
        artifactHubURL: "https://artifacthub.io/packages/headlamp/headlamp-plugins/headlamp_flux"
    },
    {
        id: "plugin-OpenCost",
        name: "OpenCost",
        description: "Add cost monitoring to Headlamp with OpenCost. View resource costs in tables and charts to track and optimize cluster spending.",
        githubURL: "https://github.com/headlamp-k8s/plugins/tree/main/opencost",
        artifactHubURL: "https://artifacthub.io/packages/headlamp/headlamp-plugins/headlamp_opencost"
    },

    {
        id: "plugin-Prometheus",
        name: "Prometheus",
        description: "Add advanced charts to workload resource details in Headlamp. Requires Prometheus installed in your cluster for chart features to be enabled.",
        githubURL: "https://github.com/headlamp-k8s/plugins/tree/main/prometheus"
    },

    {
        id: "plugin-KEDA",
        name: "KEDA",
        description: "A UI for viewing and managing KEDA resources in Headlamp. Easily monitor and control Kubernetes event-driven autoscaling directly from your dashboard.",
        githubURL: "https://github.com/headlamp-k8s/plugins/tree/main/keda",
        artifactHubURL: "https://artifacthub.io/packages/headlamp/headlamp-plugins/headlamp_keda"
    },

    {
        id: "plugin-Kompose",
        name: "Kompose",
        description: "Use the Kompose tool from Headlamp to convert docker-compose files to Kubernetes YAML. The plugin adds a Kompose sidebar item, running jobs in the headlamp-tools namespace. If the namespace does not exist, it will be created. Future updates will allow running Kompose locally in the desktop version.",
        githubURL: "https://github.com/headlamp-k8s/plugins/tree/main/kompose",
        artifactHubURL: "https://artifacthub.io/packages/headlamp/headlamp-plugins/headlamp_kompose"
    },

];