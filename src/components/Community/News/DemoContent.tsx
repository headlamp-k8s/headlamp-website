import React from 'react';
import styles from './DemoContent.module.css';

interface DemoTile {
    id: string;
    title: string;
    description: string;
    href: string;
    category: 'blog' | 'announcement' | 'video' | 'release-notes';
    date: string; // e.g., "Nov 10th 2025"
    imageSrc?: string;
    imageAlt?: string;
}

const demoTiles: DemoTile[] = [
    // Newest → Oldest by date
    { id: 'video-plugin-builder', title: 'Video: Build a Plugin in 10 Minutes', description: 'Live-coding session showing how to scaffold and hot-reload a Headlamp plugin.', href: '#', category: 'video', date: 'Nov 10th 2025', imageSrc: '/img/demos/plugin-builder.jpg', imageAlt: 'Plugin builder interface' },
    { id: 'announce-ai-assistant', title: 'Introducing the Headlamp AI Assistant', description: 'Conversational help inside the UI for faster troubleshooting and exploration.', href: '/blog/2025/08/07/introducing-the-headlamp-ai-assistant', category: 'announcement', date: 'Aug 7th 2025', imageSrc: '/img/demos/events-stream.jpg', imageAlt: 'Assistant chat interface' },
    { id: 'video-keda', title: 'Video: KEDA Autoscaling Deep Dive', description: 'Inspect scaled objects, triggers, and scaling history right from Headlamp.', href: '#', category: 'video', date: 'Jul 25th 2025', imageSrc: '/img/demos/keda-autoscaling.jpg', imageAlt: 'KEDA autoscaling metrics' },
    { id: 'notes-1-2-0', title: 'Release Notes v1.2.0', description: 'Highlights: Flux UI updates, plugin settings improvements, and security-focused UX changes.', href: '#', category: 'release-notes', date: 'Mar 26th 2025', imageSrc: '/img/demos/flux-gitops.jpg', imageAlt: 'Flux UI status board' },
    { id: 'blog-map-view', title: 'Making Sense of Kubernetes with Map View', description: 'Walkthrough of the new topology map and how it clarifies relationships between workloads and services.', href: '/blog/2025/01/17/making-sense-of-kubernetes-with-headlamps-map-view', category: 'blog', date: 'Jan 17th 2025', imageSrc: '/img/demos/map-view.jpg', imageAlt: 'Topology map view' },
    { id: 'announce-unified-settings', title: 'Announcing Unified Settings in Headlamp', description: 'A single, consistent place to manage app, plugin, and cluster settings.', href: '/blog/2024/12/06/unified-settings', category: 'announcement', date: 'Dec 6th 2024', imageSrc: '/img/demos/cluster-overview.jpg', imageAlt: 'Settings UI screenshot' },
    { id: 'notes-1-1-0', title: 'Release Notes v1.1.0', description: 'Map View, improved plugin management, and new OpenCost integration.', href: '#', category: 'release-notes', date: 'Nov 13th 2024', imageSrc: '/img/demos/cost-optimization.jpg', imageAlt: 'Cost optimization charts' },
    { id: 'announce-backstage', title: 'Integrated Backstage + Headlamp Experience', description: 'A streamlined developer portal experience with Kubernetes visibility.', href: '/blog/2024/11/11/introducing-an-integrated-backstage-and-headlamp-experience', category: 'announcement', date: 'Nov 11th 2024', imageSrc: '/img/demos/resource-quotas.jpg', imageAlt: 'Backstage integration' },
    { id: 'blog-plugin-settings', title: 'Plugin Settings: Best Practices', description: 'How to design plugin settings that are discoverable, safe-by-default, and easy to audit.', href: '/blog/2024/05/27/plugin-settings', category: 'blog', date: 'May 27th 2024', imageSrc: '/img/demos/security-audit.jpg', imageAlt: 'Plugin settings UI' },
    { id: 'blog-testing-plugins', title: 'Testing Headlamp Plugins Effectively', description: 'Patterns and tooling to speed up plugin testing with confidence.', href: '/blog/2023/11/07/testing-plugins', category: 'blog', date: 'Nov 7th 2023', imageSrc: '/img/demos/pod-logs.jpg', imageAlt: 'Pod logs viewer' },
];

export default function DemoContent() {
    return (
        <section className={styles.demoSection} aria-labelledby="community-demos-heading">
            <header className={styles.header}>
                <h2 id="community-demos-heading">What's new in Headlamp</h2>
                <p className={styles.intro}>
                    Explore example use-cases built with Headlamp plugins, integrations, and best practices. These demos illustrate how you can extend and customize your Kubernetes experience.
                </p>
            </header>
            <div className={styles.grid} role="list">
                {demoTiles.map(tile => (
                    <article
                        key={tile.id}
                        className={styles.card}
                        role="listitem"
                        aria-labelledby={`${tile.id}-title`}
                        aria-describedby={`${tile.id}-desc`}
                    >
                        <a href={tile.href} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                            <div
                                className={styles.cardImage}
                                aria-label={tile.imageAlt || `${tile.title} screenshot`}
                                style={{
                                    background:
                                        tile.category === 'blog' ? '#e6f0ff'
                                            : tile.category === 'announcement' ? '#fff3cd'
                                                : tile.category === 'video' ? '#e8f7f0'
                                                    : tile.category === 'release-notes' ? '#f1e6ff'
                                                        : '#f5f5f7',
                                    width: '100%',
                                    height: '140px',
                                    display: 'block',
                                }}
                            />
                            <div className={styles.cardBody}>
                                <div className={styles.cardMeta}>
                                    <span
                                        className={
                                            `${styles.badge} ` +
                                            (tile.category === 'blog' ? styles.badgeBlog
                                                : tile.category === 'announcement' ? styles.badgeAnnouncement
                                                    : tile.category === 'video' ? styles.badgeVideo
                                                        : styles.badgeReleaseNotes)
                                        }
                                    >
                                        {tile.category}
                                    </span>
                                    <span className={styles.dateText}>{tile.date}</span>
                                </div>
                                <h3 id={`${tile.id}-title`} className={styles.cardTitle}>{tile.title}</h3>
                                <p id={`${tile.id}-desc`} className={styles.cardDesc}>{tile.description}</p>
                                <span className={styles.cardCta} aria-hidden="true">View more →</span>
                            </div>
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}