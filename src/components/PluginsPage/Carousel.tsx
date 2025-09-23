import React, { useState, useEffect } from "react";
import stylesPlugin from "./styles.module.css";
import { fetchPluginInfo } from "./pluginInfo";
import Link from "@docusaurus/Link";

export function Carousel() {

    interface FeaturedItem {
        href?: string;
        imageSrc?: string;
        imageAlt?: string;
        logoURL?: string;
        displayName?: string;
        name?: string;
        featDescription?: string;
        githubURL?: string;
        isFeatured?: boolean;
    }


    const [activeIndex, setActiveIndex] = useState(0);
    const [items, setItems] = useState<FeaturedItem[]>([]);

    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const { featuredPlugins } = await fetchPluginInfo();
                if (!mounted) return;
                if (Array.isArray(featuredPlugins)) {
                    setItems(featuredPlugins);
                } else {
                    console.warn("fetchPluginInfo returned non-array:", featuredPlugins);
                    setItems([]);
                }
            } catch (e) {
                console.error("Failed to load plugins:", e);
                if (mounted) setItems([]);
            }
        })();
        return () => { mounted = false; };
    }, []);

    if (items.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <section className={stylesPlugin.pluginHero}>
            <header style={{ textAlign: "center", padding: "4rem 1rem 2rem 1rem" }}>
                <h1>Headlamp Plugins</h1>

            </header>

            <section className={stylesPlugin.section}>
                <p>
                    Headlamp plugins are designed to help you personalize and extend your Kubernetes UI.
                    Add new features, monitor cluster resources, and integrate external tools to streamline your workflow.
                    A lot of plugins are for CNCF Kubernetes extensions.
                    See the {" "} <Link to="/docs/latest/development/plugins/getting-started">Plugins Development Documentation</Link> to get started developing plugins,
                    or the <Link to="/docs/latest/installation/desktop/plugins-install-desktop">Using Plugins Documentation</Link>.
                    See below for what plugins are available.
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
                        key={items[activeIndex].name}
                        className={stylesPlugin.featureCard}
                        aria-labelledby={`${items[activeIndex].displayName}-title`}
                        aria-describedby={`${items[activeIndex].displayName}-desc`}
                    >
                        <div>
                            <a href={items[activeIndex].href} className={stylesPlugin.cardLink} target="_blank" rel="noreferrer">
                                <img src={items[activeIndex].imageSrc} alt={items[activeIndex].imageAlt} className={stylesPlugin.cardImage} loading="lazy" />
                            </a>
                        </div>
                        <div className={stylesPlugin.featureCardBody}>
                            <h3 id={`${items[activeIndex].name}-title`} className={stylesPlugin.cardTitle}>
                                {items[activeIndex].logoURL && (
                                    <img
                                        src={items[activeIndex].logoURL}
                                        alt={`${items[activeIndex].displayName} logo`}
                                        style={{
                                            width: "2rem",
                                            height: "2rem",
                                            objectFit: "contain",
                                            verticalAlign: "middle",
                                            marginRight: "0.5rem"
                                        }}
                                    />
                                )}
                                <div>
                                    <a href={items[activeIndex].href} className={stylesPlugin.cardLink} target="_blank" rel="noreferrer">{items[activeIndex].displayName || items[activeIndex].name}</a>
                                </div>
                            </h3>
                            <p id={`${items[activeIndex].name}-desc`} className={stylesPlugin.featureCardDescription}>{items[activeIndex].featDescription}</p>
                            <div className={stylesPlugin.cardFooter}>
                                <div className={stylesPlugin.cardActions}>
                                    <a
                                        href={items[activeIndex].githubURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={stylesPlugin.primaryLink}
                                    >
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                <div className={stylesPlugin.cardTracker} role="group" aria-label="Carousel card tracker">
                    {items.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            className={
                                idx === activeIndex
                                    ? stylesPlugin.trackerCircleActive
                                    : stylesPlugin.trackerCircle
                            }
                            aria-label={`Show card ${idx + 1}`}
                            aria-current={idx === activeIndex ? "true" : undefined}
                            onClick={() => setActiveIndex(idx)}
                            style={{
                                padding: 0,
                                cursor: "pointer",
                            }}
                        />
                    ))}
                </div>

            </section>

        </section>
    );
}