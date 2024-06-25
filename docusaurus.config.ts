import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { githubA11yLight } from "./src/prismColorTheme";

const config: Config = {
  title: "Headlamp",
  tagline: "Headlamp is a user-friendly Kubernetes UI focused on extensibility",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://headlamp.dev/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

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

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "true",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@300..700&family=Overpass:ital,wght@0,100..900;1,100..900&display=swap",
      },
    },
  ],

  themeConfig: {
    image: "img/social-card.png",
    metadata: [
      { name: "og:url", content: "/" },
      { name: "og:site_name", content: "Your Kubernetes Experience" },
      { name: "og:image:width", content: "1200" },
      { name: "og:image:height", content: "600" },
      { name: "twitter:creator", content: "@headlamp_ui" },
      { name: "twitter:site", content: "@headlamp_ui" },
    ],
    navbar: {
      logo: {
        alt: "Headlamp logo",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
        width: "155",
        height: "32",
      },
      items: [
        {
          position: "left",
          to: "/",
          label: "Home",
          activeBaseRegex: `^\/$`,
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          type: "docSidebar",
          sidebarId: "mainSidebar",
          position: "left",
          label: "Docs",
        },
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
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
        width: "155",
        height: "32",
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
              href: "https://github.com/headlamp-k8s/headlamp",
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
      theme: githubA11yLight,
      darkTheme: prismThemes.oceanicNext,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
