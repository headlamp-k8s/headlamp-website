import React, { useEffect, useState } from "react";
import stylesPlugin from "./styles.module.css";
import { filterHeadlampCharts, PluginCard } from "./pluginInfo";

export function Catalog() {
    const [items, setItems] = useState<PluginCard[]>([]);

    useEffect(() => {
        async function fetchAndMap() {
            const charts = await filterHeadlampCharts();
            const mapped = charts.map((chart: any): PluginCard => ({
                id: chart.package_id,
                name: chart.display_name || chart.name,
                description: chart.description,
                author: chart.repository.organization_name,
                logoSrc: chart.logo_image_id
                    ? `https://artifacthub.io/image/${chart.logo_image_id}`
                    : undefined,
                logoAlt: chart.display_name || chart.name,
                href: `https://artifacthub.io/packages/helm/${chart.repository.name}/${chart.name}`,
                githubURL: `${chart.repository.url}tree/main/${chart.display_name.toLowerCase().replace(/\s+/g, '-')}`,
                artifactHubURL: `https://artifacthub.io/packages/helm/${chart.repository.name}/${chart.name}`,
            }));
            setItems(mapped);
        }
        fetchAndMap();
    }, []);

    return (
        <section style={{ textAlign: "center", padding: "4rem 1rem" }}>
            <h2 className={stylesPlugin.carouselTitle}>Available Plugins</h2>
            <p>
                Explore our growing list of plugins to find tools that suit your needs.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
                {items.map(item => (
                    <div
                        key={item.id}
                        className={stylesPlugin.card}
                        tabIndex={0}
                        aria-label={item.name}
                    >
                        <div className={stylesPlugin.cardBody}>
                            <h3 className={stylesPlugin.cardTitle}>
                                {item.logoSrc && (
                                    <img
                                        src={item.logoSrc}
                                        alt={item.logoAlt}
                                        style={{
                                            width: "2rem",
                                            height: "2rem",
                                            objectFit: "contain",
                                            verticalAlign: "middle",
                                            marginRight: "0.5rem"
                                        }}
                                    />
                                )}
                                <a href={item.href} target="_blank" rel="noreferrer" className={stylesPlugin.cardLink}>{item.name}</a>
                            </h3>
                            {item.author && <p className={stylesPlugin.Author}>by {item.author}</p>}
                            <p className={stylesPlugin.cardDescription}>{item.description}</p>
                        </div>
                        {item.githubURL && (
                            <div className={stylesPlugin.cardFooter}>
                                <div className={stylesPlugin.cardActions}>
                                    <a
                                        href={item.githubURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={stylesPlugin.primaryLink}
                                    >
                                        GitHub
                                    </a>
                                    {item.artifactHubURL && (
                                        <a
                                            href={item.artifactHubURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={stylesPlugin.primaryLink}
                                        >
                                            Artifact Hub
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}