import React, { useState } from "react";
import stylesPlugin from "./styles.module.css";
import type { PluginCard } from "./pluginInfo";
type Props = { items: PluginCard[]; title?: string };

export function Carousel({ items, title = "Featured Plugins" }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);

    const prevIndex = (activeIndex === 0 ? items.length - 1 : activeIndex - 1);
    const nextIndex = (activeIndex === items.length - 1 ? 0 : activeIndex + 1);

    return (
        <section aria-labelledby="plugins-carousel-heading" className={stylesPlugin.wrap}>
            <h3
                id="plugins-carousel-heading"
                className={stylesPlugin.carouselTitle}
            >
                {title}
            </h3>

            <div className={stylesPlugin.carouselContainer}>
                {[prevIndex, activeIndex, nextIndex].map((idx, i) => {
                    const item = items[idx];
                    let cardClass = stylesPlugin.card;
                    if (idx === activeIndex) {
                        cardClass += ` ${stylesPlugin.activeCard}`;
                    } else {
                        cardClass += ` ${stylesPlugin.peekCard}`;
                    }
                    return (
                        <article
                            key={item.id}
                            className={cardClass}
                            aria-labelledby={`${item.id}-title`}
                            aria-describedby={`${item.id}-desc`}
                        >
                            <div>
                                <a href={item.href} className={stylesPlugin.cardLink} target="_blank" rel="noreferrer">
                                    <img src={item.imageSrc} alt={item.imageAlt} className={stylesPlugin.cardImage} loading="lazy" />
                                </a>
                            </div>
                            <div className={stylesPlugin.cardBody}>
                                <h3 id={`${item.id}-title`} className={stylesPlugin.cardTitle}>
                                    <a href={item.href} className={stylesPlugin.cardLink} target="_blank" rel="noreferrer">{item.name}</a>
                                </h3>
                                <p id={`${item.id}-desc`} className={stylesPlugin.cardDescription}>{item.featDescription}</p>
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
                            </div>
                        </article>
                    );
                })}
            </div>

            <div className={stylesPlugin.carouselControls} role="group" aria-label="Carousel controls">
                <button className={stylesPlugin.navButton} onClick={() => setActiveIndex(prevIndex)} aria-label="Previous"> Previous </button>
                <button className={stylesPlugin.navButton} onClick={() => setActiveIndex(nextIndex)} aria-label="Next"> Next </button>
            </div>
        </section>
    );
}