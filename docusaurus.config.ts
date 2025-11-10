import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { githubA11yLight } from "./src/prismColorTheme";

const dateForRedirects = new Date(2024, 7, 1);

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

  customFields: {
    // Companies must be listed in alphabetical order by name
    adopters: [
      {
        name: "Microsoft",
        logo: "microsoft-logo.svg",
        logoDark: "microsoft-logo-white.svg",
        url: "https://www.microsoft.com",
      },
      {
        name: "Millennium BCP",
        logo: "mbcp-logo.png",
        url: "https://www.millenniumbcp.pt/",
      },
      {
        name: "Oracle Cloud Native Environment",
        logo: "ocne-logo.svg",
        logoDark: "ocne-logo-white.svg",
        url: "https://docs.oracle.com/en/learn/ocne-ui/index.html",
      },
      {
        name: "Swisscom",
        logo: "swisscom-logo.png",
        logoDark: "swisscom-logo-white.png",
        url: "https://www.swisscom.com",
      },
      {
        name: "Whizus",
        logo: "whizus-logo.png",
        logoDark: "whizus-logo-white.png",
        url: "https://www.whizus.com",
      },
    ],
  },

  plugins: [
    "docusaurus-lunr-search",
    function (context, options) {
      return {
        name: "webpack-configuration-plugin",
        configureWebpack(config, isServer, utils) {
          return {
            resolve: {
              symlinks: false,
            },
          };
        },
      };
    },
    [
      "@docusaurus/plugin-client-redirects",
      {
        createRedirects(existingPath) {
          // Redirect /docs/ to /docs/latest/
          if (existingPath === "/docs/latest/") {
            return ["/docs/"];
          }

          // Check if the path matches /blog/YYYY/MM/DD/...
          const blogPostRegex = /^\/blog\/(\d{4})\/(\d{2})\/(\d{2})\/(.+)/;
          const match = existingPath.match(blogPostRegex);
          if (match) {
            const [_, year, month, _day, path] = match;

            // Only redirect for posts before July 2024, when we launched the new website,
            // with the new blog post URL structure.
            const postDate = new Date(year, month);
            if (postDate < dateForRedirects) {
              // Redirect to /blog/YYYY/MM/...
              return [`/blog/${year}/${month}/${path}`];
            }
          }

          return undefined;
        },
      },
    ],
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    format: "detect",
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: (docPathInfo) => {
            const docPathStr = docPathInfo.docPath;

            if (docPathStr) {
              // Remove 'latest' from the docPath
              const pathWithoutLatest = docPathStr.replace(
                /^latest\//,
                "/docs/"
              );
              return `https://github.com/kubernetes-sigs/headlamp/edit/main${pathWithoutLatest}`;
            }

            // Return an empty string if docPath is not valid
            return "";
          },
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
    announcementBar: {
      id: 'support_us',
      content:
        'Important: Warnings from Mac and Windows when running the Headlamp desktop apps. <a target="_blank" href="/docs/latest/installation/desktop/">Read more about unsigned apps</a>',
      backgroundColor: '#f2e600',
      textColor: '#070f7f',
      isCloseable: false,
    },
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
        { to: "/plugins", label: "Plugins", position: "left" },
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
          href: "https://github.com/kubernetes-sigs/headlamp",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      logo: {
        alt: "Headlamp logo",
        src: "img/kubernetes-horizontal-color.svg",
        srcDark: "img/kubernetes-horizontal-white-text.svg",
        width: "180",
        height: "48",
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
              href: "https://github.com/kubernetes-sigs/headlamp",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/headlamp_ui",
            },
            {
              label: "Mastodon",
              href: "https://fosstodon.org/@headlamp",
            },
            {
              label: "Bluesky",
              href: "https://bsky.app/profile/headlamp.dev",
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
      copyright: `Copyright ${new Date().getFullYear()} The Kubernetes Authors<br />
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
