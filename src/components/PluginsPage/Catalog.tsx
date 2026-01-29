import React, { useEffect, useState } from "react";
import stylesPlugin from "./styles.module.css";
import allPluginsData from "./PluginData";

export function Catalog() {

    interface CatalogItem {
        id?: string;
        name?: string;
        description?: string;
        logoSrc?: string;
        logoAlt?: string;
        githubURL?: string;
        href?: string;
    }

    const [items, setItems] = useState<CatalogItem[]>([]);



    useEffect(() => {
        async function fetchAndMap() {
            const charts = await allPluginsData;
            const mapped = charts.map((plugin) => ({
                id: plugin.package_id,
                name: plugin.displayName,
                description: plugin.description,
                logoSrc: plugin.logoURL,
                logoAlt: plugin.displayName || plugin.name,
                href: plugin.githubURL,

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
                        key={item.name}
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
                                        className={stylesPlugin.pluginLogo}
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
                            <p className={stylesPlugin.cardDescription}>{item.description}</p>
                        </div>
                        {item.href && (
                            <div className={stylesPlugin.cardFooter}>
                                <div className={stylesPlugin.cardActions}>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={stylesPlugin.primaryLink}
                                    >
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}