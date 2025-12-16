export const demoReleaseNotes = [
    {
        id: 'release-v1-9-0-2025-11',
        title: 'Headlamp Release v1.9.0',
        date: 'Nov 15th 2025',
        body: `Overview:\nThe 1.9.0 release is all about making multi-team cluster collaboration feel intentional. Project views provide a curated workspace boundary so platform, app, and data teams can operate without stepping on each other. Our community asked for clearer separation plus quick re-entry into previous context—this is our first major step. We also invested in anticipatory navigation and richer AI inputs so teams spend less time re-orienting when pivoting between projects. This groundwork sets up future flows like cross-project comparisons and delegated project ownership.\n\nMajor Features:\n- Project Views: Group namespaces, saved filters, favorite pages, and plugin panels.\n- Contextual AI: The assistant now pulls resource specs + recent events, raising suggestion relevance.\n- Navigation Prefetch: Anticipatory loading for heavy pages (Pods, Events, CRDs) cuts perceptual wait.\n\nCommunity Impact:\nEarly adopters report onboarding time down for new contributors and fewer accidental edits outside scope. Maintainers highlighted better hand-off clarity when sharing project URLs.\n\nChanges:\n- Added project selector with fuzzy search.\n- Introduced JSON export/import for project templates.\n- AI assistant embeddings expanded to include last 20 warning events per project.\n- Consolidated loading skeleton styles across resource lists.\n- Implemented fallback metrics panel when Prometheus queries partially fail.\n\nBreaking Changes:\n- Removed deprecated manifest diff experimental endpoint (use Deployments compare action).\n\nUpgrade Notes:\n- Existing saved filters auto-migrated into a default project; nothing to configure.\n\nContributors:\nHuge thanks to community testers in #projects-feedback who iterated on early UI sketches.\n`,
    },
    {
        id: 'release-v1-8-3-2025-11',
        title: 'Patch Update v1.8.3',
        date: 'Nov 5th 2025',
        body: `Overview:\nThe community reported intermittent empty Backstage service panels; this patch focuses on reliability and predictable refresh behavior. We traced issues to overlapping fetch cycles and token reuse under long-lived sessions, then added guardrails to smooth refresh cadence. By tightening backoff strategies and clarifying placeholder states, we aim to make catalog browsing boring—in a good way—so teams trust the surface without second guessing data freshness.\n\nFixes:\n- Race condition in parallel catalog + annotation fetch eliminated.\n- Stale token reuse on long sessions fixed (prevents sporadic 401s).\n- Layout jump removed when annotations missing (graceful placeholder).\n\nHardening:\n- Exponential backoff added to enrichment tasks to prevent thundering herd.\n- Structured single-line logging eases cluster-wide log aggregation.\n\nCommunity Impact:\nPortal integrators should see fewer manual refreshes and clearer error surfaces.\n\nUpgrade Notes:\n- No schema changes; restart plugin if running persistence layer.\n\nContributors:\nThanks to contributors who supplied reproduction clusters for debugging.\n`,
    },
    {
        id: 'release-v1-8-0-2025-10',
        title: 'Headlamp Release v1.8.0',
        date: 'Oct 20th 2025',
        body: `Overview:\nAfter months of beta feedback, the Plugin Catalog reaches GA with trust and safety improvements. We focused on surfacing meaningful maintenance signals and pre-install clarity so operators can evaluate risk quickly. The GA milestone also locks in a sandboxed startup path, paving the way for future multi-phase activation and richer permission negotiation without sacrificing security posture.\n\nMajor Features:\n- Trust Indicators: Maintenance status, release cadence, and compatibility badges shown pre-install.\n- Sandboxed Boot: Plugin side effects isolated until readiness signal emitted.\n\nImprovements:\n- Progressive index building lowers memory for large catalogs.\n- Permission diff UI clarifies requested capabilities.\n\nSecurity:\n- Manifest validation hardened against native binding injection attempts.\n\nCommunity Impact:\nAuthors gain clearer discovery, while operators feel more confident enabling new extensions.\n\nUpgrade Notes:\n- Beta entries auto-reclassified; no author action required.\n\nContributors:\nThanks to reviewers providing security audit feedback during RC phase.\n`,
    },
    {
        id: 'release-v1-7-2-2025-10',
        title: 'Patch Update v1.7.2',
        date: 'Oct 2nd 2025',
        body: `Overview:\nAddresses early migration friction and subtle runtime leaks surfaced by community plugin authors. We prioritized stability over new surface area, tightening lifecycle cleanup and providing tooling to cut manual migration toil. These fixes help ensure extension authors can focus on capability design rather than chasing elusive performance regressions.\n\nFixes:\n- Lifecycle unmount ordering corrected for chained panels.\n- Type mismatch for ResourceActionContext removed.\n- Watch subscription leak fixed (high-frequency update scenarios).\n\nTooling:\n- Added codemod to convert deprecated onActivate signatures automatically.\n\nCommunity Impact:\nExpect smoother v2 adoption and fewer memory spikes.\n\nContributors:\nAppreciation to maintainers submitting profiling traces.\n`,
    },
    {
        id: 'release-v1-7-0-2025-09',
        title: 'Headlamp Release v1.7.0',
        date: 'Sep 18th 2025',
        body: `Overview:\nExtension API v2 lands with clarity and safety improvements shaped by plugin author feedback. The redesign emphasizes predictable lifecycle semantics and composable data access patterns so complex plugins remain maintainable as they grow. By formalizing capability negotiation we set the stage for intelligent fallback behaviors when clusters lack optional APIs.\n\nMajor Features:\n- Explicit mount/unmount semantics reduce race conditions.\n- New data hooks: useWorkloadMetrics, useEventsStream unify patterns.\n- Capability negotiation enables conditional feature activation based on cluster APIs.\n\nDX Improvements:\n- Rich docblocks + generated reference site ease exploration.\n- Adapter layer helps incremental migration from v1.\n\nUpgrade Notes:\n- Migration guide estimates <15 min per plugin for common cases.\n\nCommunity Impact:\nHigher reliability and more predictable plugin lifecycle events.\n\nContributors:\nThanks to early adopters validating hook ergonomics.\n`,
    },
    {
        id: 'release-v1-6-4-2025-08',
        title: 'Patch Update v1.6.4',
        date: 'Aug 28th 2025',
        body: `Overview:\nFine-tunes the newly introduced Profiles feature, focusing on correctness under churn. Early adopters exercising rapid context switches surfaced filter drift and lost favorites; we addressed these systemic edge cases and trimmed redundant background work. This keeps Profiles feeling lightweight while clusters cycle namespaces aggressively.\n\nFixes:\n- Tag filter consistency for freshly created namespaces.\n- Favorite page persistence restored during rapid profile switches.\n- Removed redundant metrics fetch after restore.\n\nPerformance:\n- Cache reuse reduces cold start load times.\n\nCommunity Impact:\nTeams juggling many ephemeral namespaces gain steadier filtering.\n\nUpgrade Notes:\n- No manual intervention required; profiles reload seamlessly.\n`,
    },
    {
        id: 'release-v1-6-0-2025-08',
        title: 'Headlamp Release v1.6.0',
        date: 'Aug 12th 2025',
        body: `Overview:\nCluster Profiles deliver a long-requested workflow accelerator for multi-context operators. By capturing navigation state and surfacing a transparent switch banner, we aim to reduce navigation thrash and accidental edits in the wrong environment. Export/import flows enable sharing tried-and-true workspace setups across teams, seeding consistent operational baselines.\n\nMajor Features:\n- Snapshot navigation state (filters, favorites, active pages).\n- Export/import with signature validation for sharing presets.\n- Switch banner explains applied changes for transparency.\n\nImprovements:\n- Faster namespace filter evaluation in high-churn clusters.\n\nUpgrade Notes:\n- First run generates a default profile from recent session history.\n\nCommunity Impact:\nReduces cognitive overhead when bouncing between staging, prod, and test clusters.\n`,
    },
    {
        id: 'release-v1-5-3-2025-07',
        title: 'Patch Update v1.5.3',
        date: 'Jul 25th 2025',
        body: `Overview:\nFocus on polish for the new inline observability surfaces. After initial rollout we watched operators interact during high-frequency sampling and refined rendering stability, visual encoding, and tooltip behavior. These adjustments make embedded charts a reliable glanceable layer rather than a distraction during incident response.\n\nFixes:\n- Tooltip jitter under rapid sample updates eliminated.\n- Missing datapoints rendered as gaps (clearer than zero).\n- Duplicate warning event ingestion fixed.\n\nPolish:\n- Unified color palette with improved contrast ratios.\n\nCommunity Impact:\nOperators get cleaner signal during bursty workloads.\n`,
    },
    {
        id: 'release-v1-5-0-2025-07',
        title: 'Headlamp Release v1.5.0',
        date: 'Jul 8th 2025',
        body: `Overview:\nInline observability brings resource performance context directly into everyday management flows. Instead of jumping to external dashboards, teams can correlate resource health and recent warnings while executing routine tasks. This foundation will support deeper anomaly surfacing and predictive hints in future releases.\n\nMajor Features:\n- Embedded CPU/memory charts for pods, deployments, stateful sets.\n- Event surface: recent warnings inline with quick log pivot.\n\nPerformance:\n- Streaming aggregation avoids over-fetching stable time series.\n\nCommunity Impact:\nReduces tab switching and accelerates triage.\n`,
    },
    {
        id: 'release-v1-4-2-2025-06',
        title: 'Patch Update v1.4.2',
        date: 'Jun 18th 2025',
        body: `Overview:\nAddresses small UX wrinkles after the unified actions rollout. We gathered keyboard navigation traces and identified friction hotspots around nested submenu focus and visual stability. This tight feedback loop lets actions feel cohesive while paving the path for upcoming bulk-operation enhancements.\n\nFixes:\n- Focus ring restored after closing nested submenus.\n- Duplicate API calls removed for scale+restart sequences.\n- Label truncation corrected in narrow side panels.\n\nAccessibility:\n- ARIA roles clarified for destructive action groups.\n\nCommunity Impact:\nSmoother keyboard navigation and more predictable action execution.\n`,
    },
    {
        id: 'release-v1-4-0-2025-06',
        title: 'Headlamp Release v1.4.0',
        date: 'Jun 1st 2025',
        body: `Overview:\nIntroduces a cohesive actions surface improving discoverability and plugin extensibility. Consolidation reduces cognitive load and gives plugins a predictable slot for contextual operations. Deterministic ordering and clearer signaling around destructive actions enable safer, faster execution during routine maintenance or incident response.\n\nMajor Features:\n- Consolidated resource actions into one structured menu.\n- Extension slot for contextual plugin operations.\n- Deterministic ordering resolves conflicting priorities.\n\nDX:\n- New action schema with icon + danger-level hints.\n\nCommunity Impact:\nLess hunting for operations; quicker repetitive task execution.\n`,
    },
    {
        id: 'release-v1-3-1-2025-05',
        title: 'Patch Update v1.3.1',
        date: 'May 20th 2025',
        body: `Overview:\nPerformance and reliability tweaks targeting large-scale clusters using the new settings search. By offloading rebuild work and refining virtualization thresholds we reduce jank for administrators iterating configurations rapidly. These changes form a baseline for future semantic search boosts and role-aware filtering.\n\nFixes:\n- Non-blocking search index rebuild lowers perceived lag.\n- Experimental flag toggle persistence corrected.\n\nPerformance:\n- Virtualization thresholds tuned for medium clusters.\n- Reduced layout thrash on rapid filter changes.\n\nCommunity Impact:\nAdmins managing thousands of resources experience smoother navigation.\n`,
    },
    {
        id: 'release-v1-3-0-2025-05',
        title: 'Headlamp Release v1.3.0',
        date: 'May 5th 2025',
        body: `Overview:\nRefines configuration discoverability and safety within the unified settings panel. We applied information architecture feedback to cluster related controls and tuned fuzzy search ranking for practical operator queries. Stronger defaults and audit trails aim to reduce inadvertent risk while improving confidence in self-serve adjustments.\n\nMajor Features:\n- Global fuzzy search with ranked relevance.\n- Logical grouping (Access, UX, Metrics, Plugins).\n- Safer defaults shrink accidental permission overreach.\n\nSecurity:\n- Audit log entries for sensitive toggles.\n\nCommunity Impact:\nOperators spend less time hunting for rarely used controls.\n`,
    },
    {
        id: 'release-v1-2-2-2025-04',
        title: 'Patch Update v1.2.2',
        date: 'Apr 15th 2025',
        body: `Overview:\nTargets early stability feedback following the 1.2 release focus phase. We concentrated on memory behavior under sustained event ingestion and tightened hot reload cleanup to prevent lingering resource watchers. Clearer error messaging helps operators act quickly instead of spelunking logs for root causes.\n\nFixes:\n- Plugin hot reload orphan watcher leak plugged.\n- Lower memory footprint for aggregated event streams.\n- Clearer errors for failed CRD fetches (actionable messaging).\n\nMaintenance:\n- Security dependency bumps (yaml parser, HTTP client).\n\nCommunity Impact:\nImproved resource freshness and steadier long-lived sessions.\n`,
    },
    {
        id: 'release-v1-2-0-2025-03',
        title: 'Headlamp Release v1.2.0',
        date: 'Mar 26th 2025',
        body: `Overview:\nA consolidation release emphasizing polish and navigational consistency. We reduced layout shifts and clarified recovery flows so transient API errors feel less disruptive. The refreshed settings layout with inline guidance aims to cut trial-and-error time for less familiar configuration areas.\n\nHighlights:\n- Faster large pod list rendering via row memoization.\n- Plugin settings redesign (multi-column + inline help).\n- Recovery flows improved for transient API outages.\n- Consistent empty states reduce confusion.\n\nCommunity Impact:\nDaily operations feel snappier and more predictable.\n`,
    },
    {
        id: 'release-v1-1-3-2025-02',
        title: 'Patch Update v1.1.3',
        date: 'Feb 27th 2025',
        body: `Overview:\nImportant sandbox and identity fixes to keep plugin environments contained. Strengthening eval restrictions and stabilizing token refresh logic close loopholes that could degrade isolation guarantees. This security hardening pairs with UX fixes to keep exploration fluid without sacrificing boundaries.\n\nSecurity:\n- Restricted dynamic eval patterns inside plugin panel scope.\n- Token refresh race eliminated (consistent re-auth).\n\nFixes:\n- Map view overlay stuck state resolved.\n- Dark mode menu flicker removed.\n\nCommunity Impact:\nStronger isolation for experimental plugin development.\n`,
    },
    {
        id: 'release-v1-1-0-2025-02',
        title: 'Headlamp Release v1.1.0',
        date: 'Feb 5th 2025',
        body: `Overview:\nMap View evolves into a richer operations console. Grouping related workloads and surfacing live event badges turn static topology into an active situational awareness layer. Performance improvements ensure the visualization scales as clusters grow, setting the stage for future dependency impact highlighting.\n\nMajor Features:\n- Visual workload grouping clusters related pods/services.\n- Live event badges pulse for warnings/errors.\n- Improved zoom performance for large topologies.\n\nUsability:\n- Click-to-focus side drawer accelerates targeted inspection.\n\nCommunity Impact:\nEnhances spatial reasoning when diagnosing cross-service issues.\n`,
    },
    {
        id: 'release-v1-0-2-2025-01',
        title: 'Patch Update v1.0.2',
        date: 'Jan 17th 2025',
        body: `Overview:\nA post-GA refinement round ensuring smoother certificate workflows and modal interactions. We addressed early usability snags and tightened accessibility details so first impressions feel cohesive. These adjustments reinforce stability after the initial GA excitement while laying groundwork for more advanced certificate automation.\n\nFixes:\n- Cert Manager optional SAN validation corrected.\n- Sidebar spacing adjustments improve scanability.\n- Keyboard trap in modal close sequence fixed.\n\nMisc:\n- Improved onboarding docs link coverage.\n\nCommunity Impact:\nNew users experience fewer friction points during initial exploration.\n`,
    },
    {
        id: 'release-v1-0-0-2024-12',
        title: 'Headlamp Release v1.0.0',
        date: 'Dec 6th 2024',
        body: `Overview:\nHeadlamp reaches GA—solidifying foundations for extensibility, usability, and secure operations. This milestone follows extensive iteration on authentication flows, navigation coherency, and contributor APIs, giving teams confidence to standardize tooling around Headlamp. GA status signals a commitment to backward compatibility and measured evolution.\n\nHighlights:\n- Unified settings panel centralizes app + plugin + cluster config.\n- Hardened authentication flows with clearer error surfaces.\n- Navigation refinement: consistent sidebar grouping.\n- Plugin ecosystem baseline documented for contributors.\n\nStability:\n- Large cluster load tests validate performance targets.\n\nCommunity Impact:\nSets a dependable baseline for future extension investment.\n`,
    },
    {
        id: 'release-v0-19-5-2024-11',
        title: 'Patch Update v0.19.5',
        date: 'Nov 11th 2024',
        body: `Overview:\nFinal preparatory patch smoothing edges before GA. We refined accessibility contrast and removed legacy experimental flags to declutter the configuration surface, reducing friction ahead of broader adoption. Migration hooks position environments for a seamless shift to unified settings without manual intervention.\n\nPrep Work:\n- Contrast adjustments for dark & light themes (WCAG focus).\n- Migration hooks for unified settings transition.\n\nFixes:\n- Sidebar active state mismatch resolved.\n- Removed unused experimental feature flags to declutter config.\n\nCommunity Impact:\nImproves clarity for upcoming GA migrations.\n`,
    },
];

export default demoReleaseNotes;
