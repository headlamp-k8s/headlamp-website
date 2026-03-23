---
title: Headlamp Contribfest - KubeCon EU 2026
theme: white
css: custom.css
highlightTheme: github
revealOptions:
  transition: slide
  width: 1280
  height: 720
---

<div style="display: flex; align-items: center; gap: 2em;">
<div style="flex: 1;">

# Headlamp Contribfest

## KubeCon EU 2026

Amsterdam, March 25th

<div style="display: flex; gap: 4em; margin-top: 1em;">
<div>
<strong>Joaquim Rocha</strong><br>
<small>Founding Engineer<br>
Amutable<br>
<a href="https://joaquimrocha.com">joaquimrocha.com</a></small>
</div>
<div>
<strong>Santhosh Nagaraj</strong><br>
<small>Senior Software Engineer<br>
Microsoft</small>
</div>
</div>
</div>
<div style="flex: 0 0 auto;">
<img src="cover-image.png" style="max-height: 500px; border-radius: 12px;">
</div>
</div>

---

<!-- .slide: data-background-color="#326CE5" -->

<h2 style="color: #fff; border: none;">Welcome to the Headlamp Community!</h2>

---

## Plan

1. Join our Kubernetes Slack channel
2. Install & Run Headlamp
3. Create a plugin from examples
4. Examples of how to install Headlamp plugins
5. Contributing to Headlamp's core

---

## Join our Slack!

<div style="display: flex; align-items: center; gap: 2em;">
<div style="flex: 1;">

**First:** Join the Kubernetes Slack at [slack.k8s.io](https://slack.k8s.io)

Then, join **#headlamp** channel on Kubernetes Slack

Direct link also from [headlamp.dev](https://headlamp.dev) (top right)

</div>
<div style="flex: 0 0 auto;">
<img src="slack-qr.png" style="max-height: 350px;">
</div>
</div>

---

## Community

**GitHub**: [github.com/headlamp-k8s/headlamp](https://github.com/headlamp-k8s/headlamp)

**Chat**
- [#headlamp on Kubernetes Slack](https://kubernetes.slack.com/messages/headlamp)

**Social Media**
- [Bluesky](https://bsky.app/profile/headlamp.dev)
- [Mastodon](https://fosstodon.org/@headlamp)
- [Twitter](https://twitter.com/headlamp_ui)

**Contribution Guide:** [headlamp.dev/docs/contribution](https://headlamp.dev/docs/contribution)

**Plugin Development Docs:** [headlamp.dev/docs/.../plugins/publishing](https://headlamp.dev/docs/latest/development/plugins/publishing)

---

<!-- .slide: data-background-color="#326CE5" -->

<h2 style="color: #fff; border: none;">Let's get Headlamp!</h2>

---

## Getting Headlamp

- Go to [headlamp.dev/#download-platforms](https://headlamp.dev/#download-platforms)

| Windows | Mac | Linux |
|---------|-----|-------|
| `winget install headlamp` | `brew install headlamp` then: `xattr -d com.apple.quarantine /Applications/Headlamp.app` | Download a tarball, then: `tar xzf ./Headlamp-...tar.gz` then `./Headlamp-.../headlamp` |

---

## Getting development env for plugins

- What you need:
  - **node** and **npm** (use nvm) **LTS v22**
  - **kubernetes** (use [minikube](https://minikube.sigs.k8s.io/) or similar)

Check out more details:
[headlamp.dev/docs/latest/development/#dependencies-to-get-started](https://headlamp.dev/docs/latest/development/#dependencies-to-get-started)

---

<!-- .slide: data-background-color="#326CE5" -->

<h2 style="color: #fff; border: none;">Quick demo</h2>

---

<!-- .slide: data-background-color="#326CE5" -->

<h2 style="color: #fff; border: none;">Plugins in Headlamp</h2>

---

## Installing plugins

- Plugins are installed differently depending on whether we are using Headlamp for desktop or the web

- On desktop:
  - Plugins are installed via the plugin catalog (or manually by the user)

- On web:
  - Plugins need to be manually added (configured) by the admin who deploys the service

---

<!-- .slide: data-background-color="#326CE5" -->

<h2 style="color: #fff; border: none;">Let's hack some plugins!</h2>

---

## Hacking some plugins

- Create a new plugin:
  `npx --yes @kinvolk/headlamp-plugin create my-plugin`

- And run it:
  ```
  cd my-plugin
  npm install
  npm start
  ```

- See more info at
  [headlamp.dev/docs/.../plugins/building](https://headlamp.dev/docs/latest/development/plugins/building)

---

## Goal

- Create a new sidebar item for cluster views that shows pods

- Parts:
  - Sidebar entry
  - Route

- For reference:
  [headlamp.dev/docs/.../plugins/functionality](https://headlamp.dev/docs/latest/development/plugins/functionality)

---

## Get plugin examples

- Clone the Headlamp repo:
  `git clone https://github.com/headlamp-k8s/headlamp`

- Go to plugins/examples

- Choose a plugin and move to its folder (we recommend the change-logo), then:
  ```
  npm install
  npm start
  ```

---

## Using AI to create plugins

After scaffolding a plugin (`npx ... create my-plugin` + `npm install`), you already have everything an AI agent needs:

- **AGENTS.md** is included in the scaffolded plugin, guiding the agent on available scripts, API patterns, and development workflow
- **15 example plugins** bundled at `node_modules/@kinvolk/headlamp-plugin/examples/` (sidebar, pod-counter, tables, details-view, change-logo, etc.)
- **15 official plugins** bundled at `node_modules/@kinvolk/headlamp-plugin/official-plugins/` (flux, cert-manager, prometheus, keda, ai-assistant, etc.)

No need to clone extra repos -- just point your AI agent at the plugin folder and describe what you want.

---

## Using AI to create plugins -- workflow

1. Scaffold and install:
   ```
   npx --yes @kinvolk/headlamp-plugin create my-plugin
   cd my-plugin && npm install
   ```

2. Open the folder in your AI-enabled editor (Claude Code, Cursor, Copilot, etc.)

3. Describe what you want in natural language, e.g.:
   *"Create a sidebar entry that lists all pods with their status, using the pod-counter and sidebar examples as reference"*

4. The agent reads `AGENTS.md`, studies the bundled examples, and writes your plugin

5. Validate:
   ```
   npm run tsc
   npm run lint
   npm start
   ```

---

<!-- .slide: data-background-color="#326CE5" -->

<h2 style="color: #fff; border: none;">Contributing to Headlamp core</h2>

---

## Contributing to Headlamp core -- setup

- Install the dependencies:
  - **git**, **node and npm** (use nvm) **LTS v22**, **golang 1.22.8**, **kubernetes** (use minikube)

- After you have a clone of Headlamp, build it with:
  ```
  npm run install
  npm run install:all
  npm run build
  ```

- Run it with: `npm run start`

---

## Contributing to Headlamp core -- resources

- Please check our contribution guide:
  [headlamp.dev/docs/contribution](https://headlamp.dev/docs/contribution)
- [Good first issues - headlamp-k8s/headlamp](https://github.com/headlamp-k8s/headlamp/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

---

<!-- .slide: data-background-color="#326CE5" -->

<h2 style="color: #fff; border: none;">Join us by making a Headlamp plugin for your favorite CNCF tool</h2>

<p style="color: #fff; margin-top: 2em; font-size: 1.2em;">Thank you</p>
