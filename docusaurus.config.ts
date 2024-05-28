import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Headlamp",
  tagline: "Headlamp is a user-friendly Kubernetes UI focused on extensibility",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://headlamp.dev/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "headlamp-k8s", // Usually your GitHub org/user name.
  projectName: "headlamp", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  plugins: ["docusaurus-lunr-search"],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    format: "detect",
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/headlamp-k8s/headlamp-website",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      logo: {
        alt: "Headlamp logo",
        src: "img/logo-dark.svg",
        srcDark: "img/logo-light.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "mainSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://kubernetes.slack.com/messages/headlamp",
          label: "Slack",
          position: "right",
        },
        {
          href: "https://github.com/headlamp-k8s/headlamp",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      logo: {
        alt: "Headlamp logo",
        src: "img/logo-dark.svg",
        srcDark: "img/logo-light.svg",
      },
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Slack",
              href: "https://kubernetes.slack.com/messages/headlamp",
            },
            {
              label: "Contribute",
              href: "https://headlamp.dev/docs/latest/contributing/",
            },
            {
              label: "Github",
              href: "https://github.com/kinvolk/headlamp",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/headlamp_ui",
            },
          ],
        },
        {
          title: "Documentation",
          items: [
            {
              label: "In-Cluster Deployment",
              to: "/docs/latest/installation/in-cluster",
            },
            {
              label: "Desktop App Installation",
              href: "/docs/latest/installation/desktop",
            },
            {
              label: "Plugin Development",
              href: "/docs/latest/development/plugins",
            },
            {
              label: "F.A.Q.",
              href: "/docs/latest/faq",
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} The Headlamp Contributors<br />
      The Linux Foundation® (TLF) has registered trademarks and uses trademarks.<br />
      For a list of TLF trademarks, see <a href="https://www.linuxfoundation.org/legal/trademark-usage" target="_blank">
      Trademark Usage</a>`,
    },
    prism: {
      additionalLanguages: ["bash", "yaml", "docker"],
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
