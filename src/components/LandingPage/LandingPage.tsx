import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from '@docusaurus/Head';
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";

import DownloadSection from "./DownloadSection";
import CncfLogo from "./images/cncf_light.svg";
import styles from "./LandingPage.module.css";
import DownloadPlatformsSection from "./DownloadPlatformsSection";
import SupportedClusters from "./SupportedClusters";
import { FeaturesDemo } from "./FeaturesDemo";
import { Features } from "./Features";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.title}>
          <em>Your</em> Kubernetes Experience
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <DownloadSection />
      </div>
    </header>
  );
}

export default function LandingPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout wrapperClassName={styles.layoutWrapper}>
      <Head>
        <meta name="description" content="Headlamp is a user-friendly Kubernetes UI focused on extensibility" />
      </Head>
      <main>
        <HomepageHeader />
        <section className={styles.videoContainer}>
          <video
            src="/hl-preview.webm"
            autoPlay
            loop
            muted
            className={styles.video}
            poster="/img/hero-poster.jpg"
          />
        </section>
        <Features />
        <DownloadPlatformsSection />
        <SupportedClusters />

        <section className={clsx(styles.aboutContainer)}>
          <div className={clsx("container", styles.about)}>
            <p>
              We are a{" "}
              <a href="https://cncf.io" target="_blank">
                Cloud Native Computing Foundation
              </a>{" "}
              project, as part of the Kubernetes SIG UI.
            </p>
            <div
              style={{
                display: "flex",
                background: "#FFF",
                padding: "16px",
                borderRadius: "8px",
                maxWidth: "100%",
              }}
            >
              <CncfLogo width="100%" />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
