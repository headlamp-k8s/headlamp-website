---
title: "Where did my event go? Tracing Knative Eventing with Headlamp"
description: "When a Knative event never reaches its app, the Knative plugin for Headlamp shows you where it stopped."
tags: ["kubernetes", "headlamp", "plugins", "knative", "eventing", "serverless"]
image: ./eventing-map.png
authors: ["raj-prakash"]
---

[Knative Eventing](https://knative.dev/docs/eventing/) lets apps on Kubernetes talk to each other
through events. A Source sends them, a Broker collects them, and a Trigger hands each one to the app
that asked for it. Setting it up takes a few short YAML files.

Finding out why an event never arrived is harder. The first time it happened to me, I ran `kubectl
get` on Sources, Brokers, Triggers, Channels and Subscriptions, one kind at a time, and tried to
work out from the YAML how they fit together. Some of those objects I had never created. Knative had
made them for me.

That's what I worked on during my LFX mentorship. The
[Knative plugin for Headlamp](https://github.com/headlamp-k8s/plugins/tree/main/knative) already
covered Knative Serving, as an
[earlier post on the Kubernetes blog](https://kubernetes.io/blog/2026/06/25/headlamp-knative-plugin/)
showed. I added Eventing to it, so you can follow an event in Headlamp and see where it stopped.
Along the way I fixed a few things in Serving, and sent fixes to Knative for bugs in its own metrics.

Not all of this is released yet. [Try it](#try-it), near the end, says what's in the current release
and what ships in the next one.

<!-- truncate -->

## How an event travels

Here's one event going from a PingSource to an app, through a Broker:

```mermaid
%%{init: {"themeVariables": {"lineColor": "#8b949e"}}}%%
flowchart TD
    source["PingSource heartbeat"] --> broker["Broker default"]
    broker --> channel
    subgraph made["Created by Knative"]
        channel["InMemoryChannel"] --> subscription["Subscription, one per Trigger"]
    end
    subscription --> filter["Broker filter"]
    filter -- "event matches the Trigger's filter" --> app["Service event-display"]
    app -. "reply, if any" .-> broker
```

*Figure 1. One event's path through a Broker, including the objects Knative creates.*

You create the Source, the Broker and the Trigger. This Broker uses Knative's default class, so
Knative creates a Channel behind it and one Subscription for each Trigger. A Kafka Broker keeps
events in Kafka topics instead and creates neither. An event can stop at any of these objects, so
the plugin gives each one a page and links it to the objects on either side.

## Brokers and Triggers

The plugin adds Brokers, Triggers, Channels, Subscriptions and Sources to Headlamp's sidebar. Every
list shows whether an object is ready, and if it isn't, why. The Brokers list also shows each
Broker's class and the address producers send events to.

A Broker's page links to the ConfigMap that configures it. When a Broker isn't ready, its conditions
say which part failed: the ingress, the filter, the channel behind it, or the dead letter sink.

In the Triggers list, the Trigger dangling-subscriber points to a Service that doesn't exist. You
can see that before opening anything.

![The Triggers list, with three Triggers on the Broker orders-kafka-broker and five on the Broker default; dangling-subscriber is Not Ready because Knative is unable to get its subscriber, and broker-ref is Unknown](./triggers-list.png)

Its page shows the filter as you wrote it, the subscriber, and Knative's full message, which names
the missing Service.

![The page of the Trigger dangling-subscriber, with the subscriber Service does-not-exist, no subscriber URI, and a Ready condition that is Not Ready with the message failed to get object knative-eventing-test/does-not-exist](./trigger-detail.png)

The Brokers and Triggers lists also have a create button, if you're allowed to create them. It opens
Headlamp's create dialog with a form next to the YAML editor, and a change in one shows up in the
other. The Trigger form lets you pick the Broker and the subscriber by name, and Apply stays
disabled until the settings pass Knative's own checks.

![The Form tab of Create Trigger: the Trigger order-shipped in the namespace knative-eventing-test takes events from the Broker default, lets through events of type dev.example.order.shipped, and sends them to the Kubernetes Service event-display](./trigger-create-form.png)

## Channels and Subscriptions

A Channel's page lists its Subscriptions and whether each one is ready, so you can see which
subscriber is failing.

Remember the objects I had never created? Each Subscription that Knative makes for a Trigger says
which Trigger owns it, along with the Channel it reads from, where it sends events and where replies
go. These pages have no edit or delete buttons. Knative would undo any change, and deleting one by
hand can break the Broker or Trigger that owns it.

![Details of a Subscription that Knative created for the Trigger catch-all, showing the InMemoryChannel it reads from, the Broker filter address it sends to, and the Broker it replies to](./trigger-subscription.png)

## Sources

The Sources list puts every kind of Source in one table. That includes Sources from other projects,
which the plugin finds through the `duck.knative.dev/source=true` label on their
CustomResourceDefinitions. The PingSource missing-sink, for example, is marked Not Ready because
its sink Service doesn't exist.

A Source's page shows its sink, the address Knative resolved it to, and the settings for its kind,
such as a PingSource's schedule or the resources an ApiServerSource watches.

It also lists the type and source of each event the Source sends. Those are the values a Trigger's
filter has to match, so you don't have to guess what to put in the filter.

![The CloudEvent attributes of the ApiServerSource k8s-events: the event types dev.knative.apiserver.resource.add, delete and update, each from the API server's address](./source-event-types.png)

## Kafka and NATS channels

Knative can carry events over Apache Kafka or NATS JetStream instead of memory. The Channel
Implementations view shows every kind of channel in one table, with the Broker or Channel that
created each one.

![The Channel Implementations list, with two KafkaChannels, a NatsJetStreamChannel and four InMemoryChannels, their addresses, how many subscribers each has, and the Broker or Channel that owns some of them](./channel-implementations.png)

A KafkaChannel's page shows how many times a delivery is retried, how long it waits between tries,
the dead letter sink, and the Kafka settings.

## The whole path on the Map

Headlamp's Map draws resources and the links between them, and the plugin adds Eventing to it.
Sources point to their Broker, the Broker to its Triggers, and each Trigger to its subscriber.
Anything that isn't ready gets a badge, so the broken Trigger from earlier shows up as an error
right on the Map.

![Headlamp Map with the PingSource heartbeat sending to the Broker default, which fans out to five Triggers; the Trigger dangling-subscriber has an error badge and the Trigger broker-ref has a warning badge](./eventing-map.png)

Filter the Map to one namespace and it shows the Eventing objects in it. Objects that are linked to
each other share a stacked card, and cards that need attention carry a badge. A subscriber or sink
given only as a URI gets no edge, and Sources and channels of kinds the plugin doesn't know, such as
RabbitmqSource, aren't drawn. In both cases the path on the Map stops early even though nothing is
wrong.

Turn on Eventing Internals in the Map's filter and select the card for the Broker default, and the
Map draws Figure 1 with your real objects: the Channel behind the Broker and the Subscription
Knative made for each Trigger. The broken Trigger has none, because Knative only creates the
Subscription after it finds the subscriber.

![Headlamp Map with Eventing Internals shown for the Broker default: the PingSource heartbeat sends to the Broker, and the InMemoryChannel default-kne-trigger leads to the Subscriptions Knative created for the Triggers order-created, catch-all and uri-subscriber; the Trigger dangling-subscriber has no Subscription and carries an error badge](./eventing-map-internals.png)

## Did the events get through?

A Trigger can be Ready while every event sent to it fails. To see what's getting through, the plugin
works with Headlamp's Prometheus plugin and adds charts to the Eventing pages: deliveries that
succeeded or failed, how long they took, events waiting in a queue, and how busy Knative's
controllers are. Which charts a page has depends on the metrics Knative reports for that kind. A
PingSource, for example, has only the controller charts.

Here, one of the Broker's Triggers succeeds on every event and another fails on every event. The
failures are stacked on top of the successes, so neither hides the other.

![Deliveries chart for the Broker default, with a green band for succeeded deliveries and a red band for failed ones stacked on top](./broker-deliveries.png)

The queue chart shows when a subscriber falls behind. When I sent 100 events through Kafka to a
subscriber that never answers, the queue went down only as each event ran out of retries.
