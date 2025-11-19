// Demo video data: 20 items (10 livestreams, 10 demos)
// Fields: id, title, date, link, category

function fmt(dateStr) {
    return dateStr; // Dates are already in display format with ordinals
}

export const demoVideoData = [
    // Livestreams (recent + upcoming relative to Nov 20th 2025)
    {
        id: 'livestream-cluster-health-deep-dive-2025-11-18',
        title: 'Cluster Health Deep Dive: Diagnosing Workload Hotspots',
        date: fmt('Nov 18th 2025'),
        link: 'http://localhost:3000/videos',
        image: '/img/videos/livestream-cluster-health-deep-dive.jpg',
        category: 'livestream',
    },
    {
        id: 'livestream-plugin-api-q-and-a-2025-11-13',
        title: 'Live Q&A: Extending Headlamp with the Plugin API',
        date: fmt('Nov 13th 2025'),
        link: 'http://localhost:3000/videos',
        image: '/img/videos/livestream-plugin-api-q-and-a.jpg',
        category: 'livestream',
    },
    {
        id: 'livestream-secure-cluster-access-2025-10-30',
        title: 'Secure Cluster Access Patterns with Headlamp',
        date: fmt('Oct 30th 2025'),
        link: 'http://localhost:3000/videos',
        image: '/img/videos/livestream-secure-cluster-access.jpg',
        category: 'livestream',
    },
    {
        id: 'livestream-ui-simplification-review-2025-10-16',
        title: 'UI Simplification Walkthrough & Feedback Loop',
        date: fmt('Oct 16th 2025'),
        link: 'http://localhost:3000/videos',
        image: '/img/videos/livestream-ui-simplification-review.jpg',
        category: 'livestream',
    },
    {
        id: 'livestream-map-view-origins-2025-09-24',
        title: 'Origins of the Map View: Design Decisions',
        date: fmt('Sep 24th 2025'),
        link: 'http://localhost:3000/videos',
        image: '/img/videos/livestream-map-view-origins.jpg',
        category: 'livestream',
    },
    {
        id: 'livestream-performance-tuning-2025-09-10',
        title: 'Performance Tuning Large Clusters Live Session',
        date: fmt('Sep 10th 2025'),
        link: 'http://localhost:3000/videos',
        image: '/img/videos/livestream-performance-tuning.jpg',
        category: 'livestream',
    },
    {
        id: 'livestream-plugin-security-boundaries-2025-08-21',
        title: 'Plugin Security Boundaries & Permission Scopes',
        date: fmt('Aug 21st 2025'),
        link: 'http://localhost:3000/videos',
        image: '/img/videos/livestream-plugin-security-boundaries.jpg',
        category: 'livestream',
    },
    {
        id: 'livestream-desktop-beta-feedback-2025-08-07',
        title: 'Desktop Beta Feedback Roundtable',
        date: fmt('Aug 7th 2025'),
        link: 'http://localhost:3000/videos',
        image: '/img/videos/livestream-desktop-beta-feedback.jpg',
        category: 'livestream',
    },
    {
        id: 'livestream-cert-manager-integration-2025-07-29',
        title: 'Integrating Certificate Management Workflows',
        date: fmt('Jul 29th 2025'),
        link: 'http://localhost:3000/videos',
        image: '/img/videos/livestream-cert-manager-integration.jpg',
        category: 'livestream',
    },
    {
        id: 'livestream-roadmap-prioritization-2025-07-10',
        title: 'Roadmap Prioritization: Community Signals',
        date: fmt('Jul 10th 2025'),
        link: 'http://localhost:3000/videos',
        image: '/img/videos/livestream-roadmap-prioritization.jpg',
        category: 'livestream',
    },

    // Demos (feature showcases)
    {
        id: 'demo-headlamp-map-view-overview-2025-11-06',
        title: 'Map View Overview: Navigating Cluster Topology',
        date: fmt('Nov 6th 2025'),
        link: 'http://localhost:3000/videos',
        image: '/img/videos/demo-headlamp-map-view-overview.jpg',
        category: 'demo',
    },
    {
        id: 'demo-plugin-settings-refinements-2025-10-28',
        title: 'Plugin Settings Refinements & Discoverability',
        date: fmt('Oct 28th 2025'),
        link: 'http://localhost:3000/videos',
        image: '/img/videos/demo-plugin-settings-refinements.jpg',
        category: 'demo',
    },
    {
        id: 'demo-unified-settings-tour-2025-10-09',
        title: 'Unified Settings Tour: Centralized Configuration',
        date: fmt('Oct 9th 2025'),
        link: 'http://localhost:3000/videos',
        image: '/img/videos/demo-unified-settings-tour.jpg',
        category: 'demo',
    },
    {
        id: 'demo-opencost-plugin-intro-2025-09-19',
        title: 'OpenCost Plugin Intro: Cost Visibility',
        date: fmt('Sep 19th 2025'),
        link: 'http://localhost:3000/videos',
        image: '/img/videos/demo-opencost-plugin-intro.jpg',
        category: 'demo',
    },
    {
        id: 'demo-flux-ui-integration-2025-09-05',
        title: 'Flux UI Integration: GitOps Panels',
        date: fmt('Sep 5th 2025'),
        link: 'http://localhost:3000/videos',
        image: '/img/videos/demo-flux-ui-integration.jpg',
        category: 'demo',
    },
    {
        id: 'demo-plugin-management-enhancements-2025-08-14',
        title: 'Plugin Management Enhancements Walkthrough',
        date: fmt('Aug 14th 2025'),
        link: 'http://localhost:3000/videos',
        image: '/img/videos/demo-plugin-management-enhancements.jpg',
        category: 'demo',
    },
    {
        id: 'demo-desktop-one-click-experience-2025-08-01',
        title: 'Desktop One-Click Local Experience',
        date: fmt('Aug 1st 2025'),
        link: 'http://localhost:3000/videos',
        image: '/img/videos/demo-desktop-one-click-experience.jpg',
        category: 'demo',
    },
    {
        id: 'demo-map-view-design-evolution-2025-07-18',
        title: 'Map View Design Evolution & Decisions',
        date: fmt('Jul 18th 2025'),
        link: 'http://localhost:3000/videos',
        image: '/img/videos/demo-map-view-design-evolution.jpg',
        category: 'demo',
    },
    {
        id: 'demo-cert-manager-plugin-preview-2025-07-03',
        title: 'Cert Manager Plugin Preview',
        date: fmt('Jul 3rd 2025'),
        link: 'http://localhost:3000/videos',
        image: '/img/videos/demo-cert-manager-plugin-preview.jpg',
        category: 'demo',
    },
    {
        id: 'demo-plugin-api-v2-panels-2025-06-20',
        title: 'Plugin API v2: Contextual Panels Demo',
        date: fmt('Jun 20th 2025'),
        link: 'http://localhost:3000/videos',
        image: '/img/videos/demo-plugin-api-v2-panels.jpg',
        category: 'demo',
    },
];

export default demoVideoData;
