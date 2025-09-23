import React, { useState, useEffect } from "react";
import stylesPlugin from "./styles.module.css";
import { fetchAndCreateFeaturedCards, FeaturedPluginCard } from "./pluginInfo";

export function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [items, setItems] = useState<FeaturedPluginCard[]>([]);

    const featuredItems = fetchAndCreateFeaturedCards();
    useEffect(() => {
        async function fetchItems() {
            const data = await featuredItems;
            setItems(data);
        }
        fetchItems();
    }, []);

    if (items.length === 0) {
        return <div>Loading...</div>;
    }

    const prevIndex = (activeIndex === 0 ? items.length - 1 : activeIndex - 1);
    const nextIndex = (activeIndex === items.length - 1 ? 0 : activeIndex + 1);

    return (
        <section className={stylesPlugin.pluginHero}>
            <header style={{ textAlign: "center", padding: "4rem 1rem 2rem 1rem" }}>
                <h1>Headlamp Plugins</h1>

            </header>

            <section className={stylesPlugin.section}>
                <p>
                    Headlamp plugins are designed to help you personalize and extend your Kubernetes dashboard.
                    With plugins, you can add new features, monitor cluster resources, and integrate external tools to streamline your workflow.
                </p>
            </section>

            <section aria-labelledby="plugins-carousel-heading" className={stylesPlugin.wrap}>
                <h2
                    id="plugins-carousel-heading"
                    className={stylesPlugin.carouselTitle}
                >
                    Featured Plugins
                </h2>

                <div className={stylesPlugin.carouselContainer}>
                    <article
                        key={items[activeIndex].id}
                        className={stylesPlugin.featureCard}
                        aria-labelledby={`${items[activeIndex].id}-title`}
                        aria-describedby={`${items[activeIndex].id}-desc`}
                    >
                        <div>
                            <a href={items[activeIndex].href} className={stylesPlugin.cardLink} target="_blank" rel="noreferrer">
                                <img src={items[activeIndex].imageSrc} alt={items[activeIndex].imageAlt} className={stylesPlugin.cardImage} loading="lazy" />
                            </a>
                        </div>
                        <div className={stylesPlugin.featureCardBody}>
                            <h3 id={`${items[activeIndex].id}-title`} className={stylesPlugin.cardTitle}>
                                {items[activeIndex].logoSrc && (
                                    <img
                                        src={items[activeIndex].logoSrc}
                                        alt={items[activeIndex].logoAlt}
                                        style={{
                                            width: "2rem",
                                            height: "2rem",
                                            objectFit: "contain",
                                            verticalAlign: "middle",
                                            marginRight: "0.5rem"
                                        }}
                                    />
                                )}
                                <a href={items[activeIndex].href} className={stylesPlugin.cardLink} target="_blank" rel="noreferrer">{items[activeIndex].name}</a>
                            </h3>
                            <p id={`${items[activeIndex].id}-desc`} className={stylesPlugin.featureCardDescription}>{items[activeIndex].featDescription}</p>
                            <div className={stylesPlugin.cardFooter}>
                                <div className={stylesPlugin.cardActions}>
                                    <a
                                        href={items[activeIndex].githubURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={stylesPlugin.primaryLink}
                                    >
                                        GitHub
                                    </a>
                                    {!items[activeIndex].onlyGithub && (
                                        <a
                                            href={items[activeIndex].artifactHubURL}
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
                </div>

                <div className={stylesPlugin.cardTracker} role="group" aria-label="Carousel card tracker">
                    {items.map((_, idx) => (
                        <span
                            key={idx}
                            className={
                                idx === activeIndex
                                    ? stylesPlugin.trackerCircleActive
                                    : stylesPlugin.trackerCircle
                            }
                        />
                    ))}
                </div>

                <div className={stylesPlugin.carouselControls} role="group" aria-label="Carousel controls">
                    <button className={stylesPlugin.navButton} onClick={() => setActiveIndex(prevIndex)} aria-label="Previous"> Previous </button>
                    <button className={stylesPlugin.navButton} onClick={() => setActiveIndex(nextIndex)} aria-label="Next"> Next </button>
                </div>
            </section>

        </section>
    );
}