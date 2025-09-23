import React from "react";
import stylesPlugin from "./styles.module.css";
import { PluginCard } from "./pluginInfo";



type Props = { items: PluginCard[]; };

export function Catalog({ items }: Props) {
    return (
        <section style={{ textAlign: "center", padding: "4rem 1rem" }}>
            <h2 className={stylesPlugin.carouselTitle}>Available Plugins</h2>
            <p>We offer a variety of plugins to enhance your experience.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
                {items.map(item => (
                    <div
                        key={item.id}
                        className={stylesPlugin.card}
                        tabIndex={0}
                        aria-label={item.name}
                    >
                        <div className={stylesPlugin.cardBody}>
                            <h3 className={stylesPlugin.cardTitle}>{item.name}</h3>
                            <p className={stylesPlugin.cardDescription}>{item.description}</p>
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
                    </div>
                ))}
            </div>
        </section>
    );
}