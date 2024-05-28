import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import Head from "@docusaurus/Head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinux } from "@fortawesome/free-brands-svg-icons/faLinux";
import { faApple } from "@fortawesome/free-brands-svg-icons/faApple";
import { faWindows } from "@fortawesome/free-brands-svg-icons/faWindows";
import CncfLogo from "./images/cncf_light.svg";

function SmartDownloadButton() {
  const getPlatform = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("win")) return "win";
    if (userAgent.includes("mac")) return "mac";
    if (userAgent.includes("linux")) return "linux";
    return "unknown";
  };

  const platform = getPlatform();

  const platformName = {
    win: "Windows",
    mac: "MacOS",
    linux: "Linux",
  }[platform];

  return (
    <div>
      <DownloadButton
        platform={platformName}
        docPath={`${platform}-installation`}
        icon={
          {
            win: faWindows,
            mac: faApple,
            linux: faLinux,
            unknown: faGithub,
          }[platform]
        }
      />
      <Link
        to="/docs/latest/installation"
        style={{ marginTop: "1rem", display: "block" }}
      >
        Install on other platforms
      </Link>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--secondary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <em>Your</em> Kubernetes Experience
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <SmartDownloadButton />
        </div>
      </div>
    </header>
  );
}

function DownloadButton({
  platform,
  icon,
  docPath,
}: {
  platform: string;
  icon: any;
  docPath: string;
}) {
  return (
    <Link
      className="button button--secondary button--lg"
      style={{
        fontWeight: "normal",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem 1.5rem",
      }}
      to={`/docs/latest/installation/desktop/${docPath}`}
    >
      <FontAwesomeIcon size="2x" icon={icon} className="margin-right--sm" />
      <div
        style={{ display: "flex", flexDirection: "column", lineHeight: "1" }}
      >
        Install on <b>{platform}</b>
      </div>
    </Link>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout wrapperClassName={styles.layoutWrapper}>
      <HomepageHeader />
      <main>
        <img src="/img/landing-headlamp.png" className={styles.landingImage} />
        <section className={clsx("container", styles.about)}>
          <Heading as="h2" className={styles.aboutTitle}>
            What is Headlamp?
          </Heading>
          <p className={styles.aboutDescription}>
            Out of the box, Headlamp is a fully functional Kubernetes UI. By
            leveraging its powerful plugin system, builders can shape Headlamp
            to fit their bespoke use-cases, products, and environments.
          </p>
          <a
            href="/docs/installation/in-cluster"
            className={styles.clusterLink}
          >
            Learn how to deploy Headlamp in a Kubernetes cluster
          </a>
          <div>or</div>
          <div className={styles.downloadButtons}>
            <DownloadButton
              platform="Linux"
              docPath="linux-installation"
              icon={faLinux}
            />
            <DownloadButton
              platform="MacOS"
              docPath="mac-installation"
              icon={faApple}
            />
            <DownloadButton
              platform="Windows"
              docPath="win-installation"
              icon={faWindows}
            />
          </div>
          <div className={styles.cncfInfo}>
            <p>
              We are a{" "}
              <a href="https://cncf.io" target="_blank">
                Cloud Native Computing Foundation
              </a>{" "}
              Sandbox Project.
            </p>
            <div
              style={{
                display: "flex",
                background: "#FFF",
                padding: "16px",
                borderRadius: "8px",
              }}
            >
              <CncfLogo />
            </div>
          </div>
        </section>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
