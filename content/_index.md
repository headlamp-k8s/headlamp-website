---
title: '*Your* Kubernetes Experience'
link: https://kinvolk.github.io/headlamp/
logo: '/media/brand-logo.svg'
logo_bg_img: 'product-bg-1'
main_class: headlamp
tagline: ''
description: Headlamp is a user-friendly Kubernetes UI focused on extensibility
cta: Learn more
cta_aria_label: Learn more about Inspektor Gadget
docs:
  link: https://flatcar-linux.org/docs/latest/
  action_text: Get Started
support:
  link: https://flatcar-linux.org
  action_text: Visit Website
style:
  bgcolor: "#072365"
  fgcolor: "#ffffff"
  accent:
    bgcolor: "#041552"
    fgcolor: "#F4CB00"
hero:
  merge: true # Will merge these hero definitions into this section pages
  style:
    class: header-bg-headlamp
    fgcolor: '#F4CB00'
    bgcolor: '#002E33'
    titlecolor: '#F4CB00'
    descriptioncolor: white
  button:
    text: <i class="fab fa-github"></i>&nbsp;&nbsp;&nbsp;Get latest version
    link: https://github.com/kinvolk/headlamp/releases/latest
    class: btn-black
quick_features:
  title: What is Headlamp?
  description: |
    Out of the box, Headlamp is a fully functional Kubernetes UI. By leveraging its powerful plugin system, builders can shape Headlamp to fit their bespoke use-cases, products and environments.

  # shape_color: '#F5F5F5'
  # icon_color: 'black'
  # features:
  #   - text:  |
  #       No special credentials required for Headlamp to run. What users can do
  #       is dictated by their own role (RBAC).
  #     icon: filesystem
  #     shape: shape-blue-1
  #   - text: |
  #       The plugin system allows to extend the views to create a more custom user-experience.
  #     icon: container
  #     shape: shape-blue-2
  #   - text: |
  #       Can be used with a single or multiple clusters.
  #     shape: shape-blue-3
  #     icon: update
highlights:
  - icon: 'lock'
    title: Secure
    description: |
      Doesn't require setting up special credentials for it to run. What users can do
      is dictated by their own role (RBAC).
  - icon: 'wrench'
    title: Extensible
    description: |
      The plugin system allows to extend the views to create a more custom user-experience.
  - icon:
    title: Automated Updates
    description: Keep your cluster secure by always running an OS with the latest security updates and features
features:
  # - title: The Container Infrastructure OS
  #   icon: container-feature.svg
  #   style:
  #     fgcolor: '#01CBBA'
  #     bgcolor: '#002E33'
  #   description: 'Inspektor Gadget is designed from the ground up for running container workloads. It fully embraces the container paradigm, including only what is required to run containers.'
  #   highlights:
  #     - icon: feature-app
  #       title: Immutable infrastructure
  #       description: Your immutable infrastructure deserves an immutable Linux OS. With Inspektor Gadget, you manage your infrastructure, not your configuration.
  #     - icon: feature-app
  #       title: Designed to scale
  #       description: Inspektor Gadget includes tools to manage large-scale, global infrastructure. You can manage update polices, versions and group instances with ease.
  #     - icon: feature-app
  #       title: Reduced complexity
  #       description: With containers, dependencies are packaged and delivered in container images. This makes package managers unnecessary and simplifies the OS.
  # - title: Secure by Design
  #   icon: secure-feature.svg
  #   style:
  #     fgcolor: '#fddc60'
  #     bgcolor: '#002E33'
  #   description: Inspektor Gadget's built-in security features, minimal design and automated updates provide a strong foundation for your infrastructure's security strategy.
  #   highlights:
  #     - icon: feature-secure
  #       title: Security patch automation
  #       description: Running the latest security patches is crucial to removing potential vulnerabilities. Inspektor Gadget's automated updates does this for you.
  #     - icon: feature-secure
  #       title: Immutable filesystem
  #       description: By making the system partition read-only, Inspektor Gadget eliminates a whole class of high-impact security vulnerabilities.
  #     - icon: feature-secure
  #       title: Minimal attack surface
  #       description: Inspektor Gadget includes only what is required to run containers. By minimizing the size and complexity of the OS, the attack surface is also reduced.
  - title: A UI that adapts to your use-cases
    icon: round-dots.svg
    style:
      fgcolor: '#01CBBA'
      bgcolor: '#002E33'
    description: |
      Headlamp adapts not only to a user's cluster configuration (multiple or single cluster, permissions-based UI, etc.), but its powerful plugin system allows builders to customize the experience with new functionality that fits their products.
    highlights:
      - icon: headlamp-wrench
        title: Adaptable UI & Branding
        description: |
          Headlamp's plugin system makes it possible to create custom experiences with minimal effort; add/extend views, customize branding, etc.
      - icon: headlamp-secure
        title: RBAC-based Controls
        description: |
          Headlamp adapts to a user's cluster permissions. It checks RBAC and displays actions like *delete* or *edit* only if the user has the permissions to do so.
      - icon: headlamp-app
        title: Desktop and/or Web
        description: |
          Keeping with Headlamp's goal of supporting a fully customizable exprience, it can be run as a web app, desktop app, or both.
grid_statements:
  title: See it in action
  statements:
    - |
      ![GIF showing a quick tour of Headlamp's capabilities](https://raw.githubusercontent.com/kinvolk/headlamp/screenshots/videos/headlamp_quick_run.gif)
  resources_section:
    title: Do more with Flatcar
    description: Discover your infrastructure's potential
    style: light
    resources:
      - title: Case Studies
        icon: page-text
        link: /blog/2019/07/how-pubnative-is-saving-30-on-infrastructure-costs-with-kinvolk-packet-and-kubernetes/
      - title: Documentation
        icon: page-chart
        link: https://flatcar-linux.org/docs/latest/
      - title: Security
        icon: lock-black
        link: /flatcar-container-linux/security
      - title: FAQ
        icon: chat
        link: /flatcar-container-linux/faq
      - title: Release Notes
        icon: page-write
        link: /flatcar-container-linux/releases
  contact:
    message: '# Get in touch!'
    simple: true
---
