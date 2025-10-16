import allPluginsData from "./PluginData";

export type PluginInfo = {
    displayName: string;
    featDescription: string;
    imageSrc: string;
    imageAlt: string;
}

export const featuredPluginsInfo: PluginInfo[] = [
    {
        displayName: "AI Assistant",
        featDescription: "The Headlamp AI Assistant is a plugin that integrates AI capabilities directly into Headlamp. It provides a conversational interface to interact with your Kubernetes clusters, helping you manage resources, troubleshoot issues, and understand complex configurations through natural language.",
        imageSrc: "img/pluginImages/AIPluginImage.png",
        imageAlt: "AI Assistant Plugin",
    },
    {
        displayName: "Flux",
        featDescription: "The Flux plugin visualizes Flux in Headlamp, enabling GitOps by syncing clusters with config sources (e.g., Git) and auto-updating configs when new code is deployed.",
        imageSrc: "img/pluginImages/flux.png",
        imageAlt: "Flux Plugin",
    },
    {
        displayName: "Gatekeeper",
        featDescription: "A Headlamp plugin for viewing and managing OPA Gatekeeper policies, violations, and a library of community-sourced templates in Kubernetes clusters.",
        imageSrc: "img/pluginImages/gatekeeper.png",
        imageAlt: "Gatekeeper Plugin",
    },
    {
        displayName: "Kubescape",
        featDescription: "The Kubescape Headlamp plugin provides views in Headlamp for configuration and vulnerabilities scanning, based on information delivered by the Kubescape operator.",
        imageSrc: "img/pluginImages/kubescape.png",
        imageAlt: "Kubescape Plugin",
    },
];

// Function that updates allPluginsData with featured plugin info
function updateFeaturedPlugins() {
    const currentData = [...allPluginsData];

    for (const plugin of currentData) {
        const match = featuredPluginsInfo.find(fp => fp.displayName === plugin.displayName);
        if (match) {
            plugin.featDescription = match.featDescription;
            plugin.imageSrc = match.imageSrc;
            plugin.imageAlt = match.imageAlt;
            plugin.isFeatured = true;
        }
    }

    return currentData;
}

export function getFeaturedPlugins(): any[] {
    const updated = updateFeaturedPlugins();
    return updated.filter((p: any) => p.isFeatured === true);
}

export async function fetchPluginInfo() {

    const allData = await updateFeaturedPlugins();
    const featuredPlugins = await getFeaturedPlugins();

    return { allData, featuredPlugins };

}
