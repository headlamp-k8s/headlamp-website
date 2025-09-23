import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { Carousel } from "../components/PluginsPage/Carousel";
import { Catalog } from "../components/PluginsPage/Catalog";
import { featuredPlugins, allPlugins } from "../components/PluginsPage/pluginInfo";




export default function PluginsPage(): JSX.Element {

    return (
        <Layout title="Plugins" description="Headlamp Plugins">
            <main>
                <header style={{ textAlign: "center", padding: "4rem 1rem 2rem 1rem" }}>
                    <h1>Headlamp Plugins</h1>

                </header>

                <section style={{ textAlign: "center", padding: "0rem 10rem" }}>
                    <p>
                        Headlamp plugins are designed to help you personalize and extend your Kubernetes dashboard.
                        With plugins, you can add new features, monitor cluster resources, and integrate external tools to streamline your workflow.
                        Whether you want to visualize costs with OpenCost, add advanced charts with Prometheus, or create custom dashboards and views, plugins make it easy to adapt Headlamp to your organization’s needs.
                        You can even change color themes, automate tasks, and connect with other systems—all without modifying the core application.
                        Discover how plugins can transform your Headlamp experience and empower your team to work more efficiently.
                    </p>
                </section>

                <section style={{ textAlign: "center", padding: "2rem 1rem" }}>
                    <h2>Discover More Plugins</h2>
                    <p>
                        Explore our growing list of plugins to find tools that suit your needs.
                        If you're a developer, consider creating your own plugin to contribute to the community!
                    </p>
                </section>

                <Carousel items={featuredPlugins} title="Featured Plugins" />

                <Catalog items={allPlugins} />

                <section style={{ textAlign: "center", padding: "4rem 1rem" }}>
                    <h2>Get Started with Plugins</h2>
                    <p>
                        Ready to enhance your Headlamp experience? Visit our{" "}
                        <Link to="/docs/plugins/getting-started">Plugins Documentation</Link> to learn how to install and manage plugins.
                    </p>
                </section>

            </main>
        </Layout >
    )
}
