import Link from "@docusaurus/Link";
import CodeBlock from "@theme/CodeBlock";
import styles from "./DownloadSection.module.css";
import clsx from "clsx";
import { useState, useEffect } from "react";
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";

type Platform = "win" | "mac" | "linux" | "unknown";

interface DownloadInfo {
  label: string;
  /** In case we can't grab a release from github */
  fallbackDownloadLink: string;
  /** bash/powershell script to install headlamp */
  script?: string;
}

const downloadInfo: Record<Platform, DownloadInfo> = {
  win: {
    label: "Download for Windows",
    fallbackDownloadLink:
      "/docs/latest/installation/desktop/windows-installation",
    script: "winget install headlamp",
  },
  mac: {
    label: "Download for macOS",
    fallbackDownloadLink: "/docs/latest/installation/desktop/mac-installation",
    script: "brew install headlamp",
  },
  linux: {
    label: "Download for Linux",
    fallbackDownloadLink:
      "/docs/latest/installation/desktop/linux-installation",
    script: "flatpak install io.kinvolk.Headlamp",
  },
  unknown: {
    label: "Install on your platform",
    fallbackDownloadLink: "/docs/latest/installation",
  },
};

// Format bytes to human readable megabytes
const formatBytes = (bytes: number) => {
  return (bytes / 1024 / 1024).toFixed(2) + " MB";
};

const usePlatform = (): Platform => {
  const getPlatform = () => {
    if (typeof navigator === "undefined") return "unknown"; // for SSR (server side rendering)
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("win")) return "win";
    if (userAgent.includes("mac")) return "mac";
    if (userAgent.includes("linux")) return "linux";
    return "unknown";
  };

  const platform = getPlatform();

  return platform;
};

const latestReleasePromise = fetch(
  "https://api.github.com/repos/headlamp-k8s/headlamp/releases/latest"
).then((response) => response.json());

const useLatestRelease = () => {
  const [latestRelease, setLatestRelease] = useState(null);

  useEffect(() => {
    latestReleasePromise.then((data) => {
      setLatestRelease(data);
    });
  }, []);

  return latestRelease;
};

export function DownloadButton({
  platform,
  secondary,
}: {
  platform: Platform;
  secondary?: boolean;
}) {
  const platformInfo = downloadInfo[platform];
  const release = useLatestRelease();
  const assets = release?.assets?.filter((it) => it.name.includes(platform));
  const fallbackUrl = platformInfo.fallbackDownloadLink;

  const buttonClassName = clsx(
    secondary ? "button button--secondary" : "button button--primary",
    styles.downloadButton
  );

  return (
    <>
      {(!assets || assets?.length <= 1) && (
        <a
          className={buttonClassName}
          href={assets?.[0]?.browser_download_url ?? fallbackUrl}
        >
          <img
            src="/img/download.svg"
            alt="Download icon"
            width="13"
            height="13"
          />
          {platformInfo.label}
        </a>
      )}
      {assets && assets.length > 1 && (
        <MenuTrigger>
          <Button aria-label="Menu" className={buttonClassName}>
            <img
              src="/img/download.svg"
              alt="Download icon"
              width="13"
              height="13"
            />
            {platformInfo.label}
            <FontAwesomeIcon icon={faChevronDown} size="xs" />
          </Button>
          <Popover>
            <Menu className={styles.buttonMenu}>
              {assets?.map((it) => (
                <MenuItem
                  key={it.browser_download_url}
                  href={it.browser_download_url}
                  className={styles.buttonMenuItem}
                >
                  {it.name} ({formatBytes(it.size)})
                </MenuItem>
              ))}
            </Menu>
          </Popover>
        </MenuTrigger>
      )}
    </>
  );
}

function DownloadSection({ forcePlatform }: { forcePlatform?: Platform }) {
  const platform = forcePlatform ?? usePlatform();
  const platformInfo = downloadInfo[platform];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <DownloadButton platform={platform} />
        {platformInfo?.script !== undefined && (
          <>
            or
            <div>
              <CodeBlock className={styles.codeBlock}>
                {platformInfo?.script}
              </CodeBlock>
            </div>
          </>
        )}
      </div>
      {platform !== "unknown" && (
        <Link
          to="#download-platforms"
          style={{ marginTop: "1rem", display: "block" }}
        >
          Install on other platforms
        </Link>
      )}
    </section>
  );
}

export default function (props) {
  return (
    <BrowserOnly
      fallback={
        <a
          className={clsx("button button--primary", styles.downloadButton)}
          href={"/docs/latest/installation"}
        >
          Install on your platform
        </a>
      }
    >
      {() => <DownloadSection {...props} />}
    </BrowserOnly>
  );
}
