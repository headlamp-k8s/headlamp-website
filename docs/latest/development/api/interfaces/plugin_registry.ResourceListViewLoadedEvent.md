# Interface: ResourceListViewLoadedEvent

[plugin/registry](../modules/plugin_registry.md).ResourceListViewLoadedEvent

Event fired when a list view is loaded for a resource.

## Properties

### data

• **data**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | The error, if an error has occurred |
| `resourceKind` | `string` | The kind of resource that was loaded. |
| `resources` | `any`[] | The list of resources that were loaded. |

#### Defined in

[redux/headlampEventSlice.ts:255](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/redux/headlampEventSlice.ts#L255)

___

### type

• **type**: `LIST_VIEW`

#### Defined in

[redux/headlampEventSlice.ts:254](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/redux/headlampEventSlice.ts#L254)
