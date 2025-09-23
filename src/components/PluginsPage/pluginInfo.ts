export type PluginCard = {
    id?: string;
    name: string;
    // normal description for catalog display (best at around 20 words)
    description?: string;
    // author of the plugin, mandatory for non-artifactHub plugins
    author?: string;
    logoSrc?: string;
    logoAlt?: string;
    href?: string;
    // default URL to use for links, not every plugin has an artifactHub URL
    githubURL?: string;
    artifactHubURL?: string;
}

export type FeaturedPluginCard = PluginCard & {
    // boolean to indicate if the plugin is listed on ArtifactHub
    // note: you will need to manually check if this plugin is on ArtifactHub or not
    onlyGithub: boolean;
    // longer description for featured display (best at around 40 words)
    featDescription?: string;
    imageSrc?: string;
    imageAlt?: string;
    href?: string;
    artifactHubURL?: string;
}


// these are manually curated featured plugins, the API will gather the rest of the info
// important: for instances that a plugin is only on github and not on ArtifactHub, we will need to manually add it here
export const featuredPlugins: FeaturedPluginCard[] = [
    {
        id: "featured-plugin-ai-assistant",
        name: "AI Assistant",
        featDescription: "The Headlamp AI Assistant is a plugin that integrates AI capabilities directly into Headlamp. It provides a conversational interface to interact with your Kubernetes clusters, helping you manage resources, troubleshoot issues, and understand complex configurations through natural language.",
        imageSrc: "img/pluginImages/AIPluginImage.png",
        imageAlt: "AI Assistant Plugin",
        onlyGithub: false,
    },
    {
        id: "featured-plugin-app-catalog",
        name: "App Catalog",
        featDescription: "The App Catalog plugin brings ArtifactHub and Helm into Headlamp, letting users browse, search, and install Helm charts from the dashboard. It streamlines Kubernetes app deployment, offering a smooth experience for discovering, installing, and managing charts directly within Headlamp’s interface.",
        imageSrc: "img/pluginImages/AppCatalogImage.png",
        imageAlt: "App Catalog Plugin",
        onlyGithub: true,
        githubURL: "https://github.com/headlamp-k8s/plugins/tree/main/app-catalog",
    },
    {
        id: "featured-plugin-cert-manager",
        name: "cert-manager",
        featDescription: "The cert-manager plugin for Headlamp adds a sidebar item for cert-manager, allowing users to view and manage cert-manager resources directly from the dashboard. This integration simplifies the management of TLS certificates in Kubernetes, providing an easy-to-use interface for handling certificate issuance, renewal, and overall lifecycle management within Headlamp.",
        imageSrc: "img/pluginImages/CertManagerImage.png",
        imageAlt: "cert-manager Plugin",
        onlyGithub: false,
    },
];

export async function fetchAndCreateFeaturedCards() {
    const featureCardData = []
    // our data from the API
    const charts = await filterHeadlampCharts();
    // the featured plugins above
    featuredPlugins.forEach(
        (plugin) => {
            if (plugin.onlyGithub) {
                featureCardData.push(plugin);
            } else {
                const match = charts.find(
                    (chart) => chart.display_name === plugin.name || chart.name === plugin.name
                )

                if (match) {
                    // if the display_name has a space in it we need to format it
                    const formattedDisplayName = match.display_name.toLowerCase().replace(/\s+/g, '-');

                    const card = {
                        featDescription: plugin.featDescription,
                        imageSrc: plugin.imageSrc,
                        imageAlt: plugin.imageAlt,
                        href: `https://artifacthub.io/packages/helm/${match.repository.name}/${match.name}`,
                        artifactHubURL: `https://artifacthub.io/packages/helm/${match.repository.name}/${match.name}`,
                        githubURL: `${match.repository.url}tree/main/${formattedDisplayName}`,
                        logoSrc: match.logo_image_id
                            ? `https://artifacthub.io/image/${match.logo_image_id}`
                            : undefined,
                        logoAlt: match.display_name || match.name,
                        ...match
                    }
                    featureCardData.push(card);
                }
            }
        })

    return featureCardData;
}

export async function fetchChartsFromArtifact(
    search: string = '',
    verified: boolean = true,
    limit: number = 50,
) {
    // note: we are currently defaulting to search by verified and official as default
    const url = new URL('https://artifacthub.io/api/v1/packages/search');
    // url.searchParams.set('offset', 0);
    url.searchParams.set('limit', limit.toString());
    url.searchParams.set('facets', 'true');
    // 21 is the kind for headlamp plugins
    url.searchParams.set('kind', '21');
    url.searchParams.set('ts_query_web', search);
    url.searchParams.set('sort', 'relevance');
    url.searchParams.set('deprecated', 'false');
    url.searchParams.set('verified_publisher', verified.toString());

    const response = await fetch(url.toString());
    const total = response.headers.get('pagination-total-count');
    const dataResponse = await response.json();

    return dataResponse;
}

export async function filterHeadlampCharts() {
    const data = await fetchChartsFromArtifact();
    const packages: any[] = data.packages || [];
    const headlampCharts = packages.filter(
        pkg => pkg.repository &&
            pkg.repository.organization_name === "headlamp" &&
            pkg.display_name.toLowerCase().includes('test') === false);

    return headlampCharts;
}
