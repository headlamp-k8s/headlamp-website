---
title: '*Your* Kubernetes Experience'
link: https://kinvolk.github.io/headlamp/
logo: '/media/brand-logo.svg'
logo_bg_img: 'product-bg-1'
main_class: headlamp
tagline: ''
description: Headlamp is a user-friendly Kubernetes UI focused on extensibility
cta: Learn more
cta_aria_label: Learn more about Headlamp
docs:
  link: https://headlamp.dev/docs/latest
  action_text: Get Started
support:
  link: https://github.com/inspektor-gadget/inspektor-gadget/issues
  action_text: File an issue
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
    Out of the box, Headlamp is a fully functional Kubernetes UI. By leveraging its powerful plugin system, builders can shape Headlamp to fit their bespoke use-cases, products, and environments.

    [Learn how to deploy Headlamp in a Kubernetes cluster](/docs/latest/installation/in-cluster)

    or
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
  contact:
    message: '# Get in touch!'
    simple: true
---
