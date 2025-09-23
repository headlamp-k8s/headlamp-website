import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { Carousel } from "../components/PluginsPage/Carousel";
import { Catalog } from "../components/PluginsPage/Catalog";
import { featuredPlugins } from "../components/PluginsPage/pluginInfo";
import stylesPlugin from "../components/PluginsPage/styles.module.css"




export default function PluginsPage(): JSX.Element {

    return (
        <Layout title="Plugins" description="Headlamp Plugins">
            <main>


                <Carousel items={featuredPlugins} title="Featured Plugins" />

                <Catalog />

                <section style={{ textAlign: "center", padding: "4rem 1rem" }}>
                    <h2>Get Started with Plugins</h2>
                    <p>
                        Ready to enhance your Headlamp experience? Visit our{" "}
                        <Link to="/docs/latest/development/plugins/getting-started">Plugins Documentation</Link> to learn how to install and manage plugins.
                    </p>
                </section>

            </main>
        </Layout >
    )
}
