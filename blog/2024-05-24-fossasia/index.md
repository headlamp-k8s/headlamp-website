---
authors: ["kautilya-tripathi"]
description: "Headlamp at FOSSASIA Vietnam 2024"
tags: ["kubernetes", "ui", "headlamp", "events"]
title: "Headlamp at FOSSASIA Vietnam 2024"
image: ./splash.jpg
---

**This is a conference report by Kautilya Tripathi, one of Headlamp's core engineers.**

The open-source community came together at [FOSSASIA](https://fossasia.org/) Vietnam 2024. From April 8th to 10th, the event took place in Hanoi and brought together developers, enthusiasts, and industry leaders to share knowledge, network, and discover the latest developments in open-source technologies.

I had the honor of giving a talk titled "Illuminating Open Source: Navigating K8s with Headlamp" on the morning of April 9th during FOSSASIA Vietnam 2024. The talk attracted a lot of interest and excitement from the community with an engaged audience of 35-40 attendees.

I started with a basic introduction of Headlamp and how Headlamp seamlessly integrates with the open-source ecosystem. I explained a bit how Headlamp is vendor independent and has a Generic k8s UI (user interfaces) and its versatile development options. Then I went a little further to Headlamp’s multi cluster support and its extensibility with plugins which differentiates it from other UI dashboards in the open. Diving more into security we talked about Headlamp’s integration with k8s RBAC (role-based access control) for UI control. On accessibility I talked about its UI and how Headlamp has internationalization support for multiple languages. I also talked about Headlamp’s Prometheus metrics support and stateless clusters. I wrapped up the talk by further exploring these topics and how people can contribute to the project, concluding with upcoming features like a revamped UI, an AI plugin, a plugin store, and a demo of Headlamp running as a native application on Linux.
You can access more information about the talk [here](https://eventyay.com/e/55d2a466/session/9010).

The reaction and feedback received from the audience was encouraging. Many attendees wanted to learn more about the details of the Headlamp project, showing a genuine curiosity in its features and abilities. Post-talk conversations provided useful feedback and fostered meaningful connections within the community. One frequent question from the folks was regarding the size of Headlamp docker image since it has packaged lot of its features in its binary. Since we use multi-stage [docker](https://github.com/kubernetes-sigs/headlamp/blob/main/Dockerfile) build for building headlamp on top of alpine image, it is very small.

Another notable question was regarding running a large fleet of clusters and how Headlamp handles it in real- time. Headlamp heavily depends on webhooks for real- time updates between k8s cluster and its UI. It creates a webhook connection for different clusters. There is [ongoing work](https://github.com/kubernetes-sigs/headlamp/issues/1802) to support a single webhook connection to multiple clusters that will reduce RAM usage thus increasing speed of the application.

The event featured a dynamic mix of presentations, workshops, and interactive sessions, covering a broad range of topics from cloud computing and DevOps to artificial intelligence and web development.

FOSSASIA Vietnam 2024 was a proof of the vibrant culture of collaboration and innovation within the open-source community in all parts of the world. My sincere thanks to the organizers, attendees, and fellow speakers for making this event a memorable and valuable experience. As we continue our journey with Headlamp, I am eager to see the impact and contributions it will make in the ever-changing landscape of open-source technology.

For those who missed the opportunity to attend the talk at FOSSASIA Vietnam 2024 or wish to revisit the insights shared, fear not! You can now access the recorded session on [YouTube](https://youtu.be/o69Dzrs_Vq8?t=1933).

As we look back on the experience at FOSSASIA Vietnam 2024, exciting prospects lie ahead. I am delighted to announce that Headlamp will be making its next appearance at [KCD (Kubernetes Community Days) Europe 2024 in Munich](https://www.kcdmunich.de/schedule/). Stay tuned for more updates on our upcoming talk, where we will go deeper into the evolution of Headlamp and its role in shaping the future of Kubernetes management.
