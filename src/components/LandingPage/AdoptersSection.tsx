import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./AdoptersSection.module.css";

interface Adopter {
  name: string;
  logo: string;
  logoDark?: string;
  url: string;
}

const COMPANIES_DIR = "/img/companies/";

function AdoptersSection() {
  const { siteConfig } = useDocusaurusContext();
  const adopters = (siteConfig.customFields?.adopters as Adopter[]) || [];

  if (adopters.length === 0) {
    return null;
  }

  return (
    <section className={styles.container}>
      <div className="container">
        <Heading as="h2" className={styles.heading}>
          Trusted by Teams Worldwide
        </Heading>
        <p className={styles.description}>
          Entities that have adopted or support Headlamp
        </p>
        <div className={styles.logosGrid}>
          {adopters.map((adopter) => (
            <a
              key={adopter.name}
              href={adopter.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoLink}
              title={adopter.name}
            >
              {adopter.logoDark ? (
                <ThemedImage
                  alt={`${adopter.name} logo`}
                  sources={{
                    light: useBaseUrl(COMPANIES_DIR + adopter.logo),
                    dark: useBaseUrl(COMPANIES_DIR + adopter.logoDark),
                  }}
                  className={styles.logo}
                />
              ) : (
                <img
                  src={useBaseUrl(COMPANIES_DIR + adopter.logo)}
                  alt={`${adopter.name} logo`}
                  className={styles.logo}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdoptersSection;
