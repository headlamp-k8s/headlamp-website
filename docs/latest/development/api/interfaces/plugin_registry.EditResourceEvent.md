# Interface: EditResourceEvent

[plugin/registry](../modules/plugin_registry.md).EditResourceEvent

Event fired when editing a resource.

## Properties

### data

• **data**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `resource` | `any` | The resource for which the deletion was called. |
| `status` | `OPENED` \| `CLOSED` | What exactly this event represents. 'OPEN' when the edit dialog is opened. 'CLOSED' when it is closed. |

#### Defined in

[redux/headlampEventSlice.ts:100](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/redux/headlampEventSlice.ts#L100)

___

### type

• **type**: `EDIT_RESOURCE`

#### Defined in

[redux/headlampEventSlice.ts:99](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/redux/headlampEventSlice.ts#L99)
