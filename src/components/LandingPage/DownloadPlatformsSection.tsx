import { DownloadButton, DownloadButtonWithScript } from "./DownloadSection";
import styles from "./DownloadPlatformsSection.module.css";
import Link from "@docusaurus/Link";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import IconExternalLink from "@theme/Icon/ExternalLink";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import K8s from "./images/k8s.svg";

const FlexContent = ({ children }) => (
  <div className={styles.flexContent}>{children}</div>
);

export function DownloadPlatformsContent() {
  return (
    <>
      <h3>
        <FontAwesomeIcon icon={faDesktop} size="1x" height="20px" /> Desktop App
      </h3>
      <div>
        <div>
          Headlamp can be run as a desktop application, for users who don't want
          to deploy it in cluster, or those who want to manage unrelated
          clusters locally.
        </div>
        <Tabs>
          <TabItem value="win" label="Windows" default>
            <FlexContent>
              <div>
                Download binary
                <DownloadButton platform="win" secondary />
              </div>

              <div>
                Install using{" "}
                <Link href="https://learn.microsoft.com/en-us/windows/package-manager/winget/">
                  WinGet
                </Link>
                <CodeBlock language="bash">winget install headlamp</CodeBlock>
              </div>

              <div>
                Install using{" "}
                <Link href="https://chocolatey.org/">Chocolatey</Link>
                <div>
                  <CodeBlock language="bash">choco install headlamp</CodeBlock>
                </div>
              </div>
            </FlexContent>
          </TabItem>
          <TabItem value="linux" label="Linux">
            <FlexContent>
              <div>
                Download binary
                <DownloadButton platform="linux" secondary />
              </div>

              <div>
                Install using <Link href="https://flatpak.org/">Flatpak</Link>.
                Make sure you have{" "}
                <Link href="https://flathub.org/setup">set up the Flathub</Link>{" "}
                repository
                <CodeBlock language="bash">
                  flatpak install flathub io.kinvolk.Headlamp
                </CodeBlock>
              </div>
            </FlexContent>
          </TabItem>
          <TabItem value="mac" label="Mac">
            <FlexContent>
              <div>
                Download binary
                <DownloadButton platform="mac" secondary />
              </div>
              <div>
                Install using <Link href="https://brew.sh/">Homebrew</Link>
                <CodeBlock language="bash">
                  brew install --cask headlamp
                </CodeBlock>
              </div>
            </FlexContent>
          </TabItem>
        </Tabs>
      </div>

      <h3 className={styles.inClusterTitle}>
        <K8s /> <div style={{ height: "18px" }}>In-cluster</div>
      </h3>
      <div>
        <div>
          A common use-case for any Kubernetes web UI is to deploy it in-cluster
          and set up an ingress server for having it available to users.
        </div>
        <Tabs>
          <TabItem value="helm" label="Helm">
            <p>
              Install Headlamp in your cluster using{" "}
              <Link href="https://helm.sh/">Helm</Link>. Run the following:
            </p>
            <CodeBlock language="bash" className="fit-content">
              {`helm repo add headlamp https://headlamp-k8s.github.io/headlamp/
helm install my-headlamp headlamp/headlamp --namespace kube-system`}
            </CodeBlock>
            <Link to="/docs/latest/installation/in-cluster/#using-helm">
              Learn more about installing Headlamp with Helm
            </Link>
          </TabItem>
          <TabItem value="yaml" label="YAML Configuration">
            <p>
              Use configuration file for setting up a Headlamp deployment and
              service. Be sure to review it and change anything you need.
            </p>
            <CodeBlock language="bash" className="fit-content">
              kubectl apply -f
              https://raw.githubusercontent.com/headlamp-k8s/headlamp/main/kubernetes-headlamp.yaml
            </CodeBlock>
            <Link to="/docs/latest/installation/in-cluster/#using-simple-yaml">
              Learn more about installing Headlamp with kubectl apply
            </Link>
          </TabItem>
          <TabItem value="in-cluster" label="Minikube">
            <p>To enable Headlamp in Minikube, run the following commands:</p>
            <CodeBlock language="bash" className="fit-content">
              {`minikube addons enable headlamp\nminikube service headlamp -n headlamp`}
            </CodeBlock>
            <Link href="https://minikube.sigs.k8s.io/docs/handbook/addons/headlamp/">
              Learn more about installing Headlamp as a Minikube addon
            </Link>
          </TabItem>
          <TabItem value="docker-desktop" label="Docker Desktop">
            <p>Headlamp ships as a Docker Desktop extension</p>
            <Link href="https://hub.docker.com/extensions/headlamp/headlamp-docker-extension">
              Get the Docker Desktop Extension <IconExternalLink />
            </Link>
          </TabItem>
          <TabItem value="glasskube" label="Glasskube">
            <p>
              Install Headlamp in your cluster using{" "}
              <Link href="https://glasskube.dev/">Glasskube</Link>. Run the following:
            </p>
            <CodeBlock language="bash" className="fit-content">
              {`glasskube install headlamp`}
            </CodeBlock>
            <Link to="/docs/latest/installation/in-cluster/#using-glasskube">
              Learn more about installing Headlamp with Glasskube
            </Link>
          </TabItem>
        </Tabs>
      </div>
    </>
  );
}

function DownloadPlatformsSection() {
  return (
    <section className={styles.container} id="download-platforms">
      <h2 className={styles.title}>Get Headlamp</h2>
      <DownloadPlatformsContent />
    </section>
  );
}

export default DownloadPlatformsSection;
