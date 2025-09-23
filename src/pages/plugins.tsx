import React from "react";
import Layout from "@theme/Layout";
import { Carousel } from "../components/PluginsPage/Carousel";
import { Catalog } from "../components/PluginsPage/Catalog";


export default function PluginsPage(): JSX.Element {

    return (
        <Layout title="Plugins" description="Headlamp Plugins">
            <main>
                <Carousel />
                <Catalog />
            </main>
        </Layout >
    )
}
