# Class: Role

[lib/k8s/role](../modules/lib_k8s_role.md).Role

## Hierarchy

- `any`

  ↳ **`Role`**

  ↳↳ [`ClusterRole`](lib_k8s_clusterRole.ClusterRole.md)

## Constructors

### constructor

• **new Role**(`json`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`KubeRole`](../interfaces/lib_k8s_role.KubeRole.md) |

#### Inherited from

makeKubeObject<KubeRole\>('role').constructor

#### Defined in

[lib/k8s/cluster.ts:317](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/cluster.ts#L317)

## Properties

### apiEndpoint

▪ `Static` **apiEndpoint**: `Object`

#### Index signature

▪ [other: `string`]: `any`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `scale?` | { `get`: (`namespace`: `string`, `name`: `string`, `clusterName?`: `string`) => `Promise`<`any`\> ; `put`: (`body`: { `metadata`: [`KubeMetadata`](../interfaces/lib_k8s_cluster.KubeMetadata.md) ; `spec`: { `replicas`: `number`  }  }, `clusterName?`: `string`) => `Promise`<`any`\>  } |
| `scale.get` | (`namespace`: `string`, `name`: `string`, `clusterName?`: `string`) => `Promise`<`any`\> |
| `scale.put` | (`body`: { `metadata`: [`KubeMetadata`](../interfaces/lib_k8s_cluster.KubeMetadata.md) ; `spec`: { `replicas`: `number`  }  }, `clusterName?`: `string`) => `Promise`<`any`\> |

#### Defined in

[lib/k8s/role.ts:15](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/role.ts#L15)

___

### className

▪ `Static` **className**: `string`

#### Inherited from

makeKubeObject<KubeRole\>('role').className

#### Defined in

[lib/k8s/cluster.ts:318](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/cluster.ts#L318)

## Accessors

### rules

• `get` **rules**(): `any`

#### Returns

`any`

#### Defined in

[lib/k8s/role.ts:17](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/role.ts#L17)

## Methods

### apiList

▸ `Static` **apiList**(`onList`, `onError?`, `opts?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onList` | (`arg`: `any`[]) => `void` |
| `onError?` | (`err`: [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void` |
| `opts?` | [`ApiListSingleNamespaceOptions`](../interfaces/lib_k8s_cluster.ApiListSingleNamespaceOptions.md) |

#### Returns

`any`

#### Inherited from

makeKubeObject<KubeRole\>('role').apiList

#### Defined in

[lib/k8s/cluster.ts:293](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/cluster.ts#L293)

___

### getAuthorization

▸ `Static` `Optional` **getAuthorization**(`arg`, `resourceAttrs?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `string` |
| `resourceAttrs?` | [`AuthRequestResourceAttrs`](../interfaces/lib_k8s_cluster.AuthRequestResourceAttrs.md) |

#### Returns

`any`

#### Inherited from

makeKubeObject<KubeRole\>('role').getAuthorization

#### Defined in

[lib/k8s/cluster.ts:320](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/cluster.ts#L320)

___

### getErrorMessage

▸ `Static` **getErrorMessage**(`err?`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err?` | ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md) |

#### Returns

``null`` \| `string`

#### Inherited from

makeKubeObject<KubeRole\>('role').getErrorMessage

#### Defined in

[lib/k8s/cluster.ts:316](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/cluster.ts#L316)

___

### useApiGet

▸ `Static` **useApiGet**(`onGet`, `name`, `namespace?`, `onError?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onGet` | (...`args`: `any`) => `void` |
| `name` | `string` |
| `namespace?` | `string` |
| `onError?` | (`err`: [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void` |

#### Returns

`void`

#### Inherited from

makeKubeObject<KubeRole\>('role').useApiGet

#### Defined in

[lib/k8s/cluster.ts:303](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/cluster.ts#L303)

___

### useApiList

▸ `Static` **useApiList**(`onList`, `onError?`, `opts?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onList` | (`arg`: `any`[]) => `void` |
| `onError?` | (`err`: [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void` |
| `opts?` | [`ApiListOptions`](../interfaces/lib_k8s_cluster.ApiListOptions.md) |

#### Returns

`any`

#### Inherited from

makeKubeObject<KubeRole\>('role').useApiList

#### Defined in

[lib/k8s/cluster.ts:298](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/cluster.ts#L298)

___

### useGet

▸ `Static` **useGet**(`name`, `namespace?`): [`any`, ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md), (`item`: `any`) => `void`, (`err`: ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `namespace?` | `string` |

#### Returns

[`any`, ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md), (`item`: `any`) => `void`, (`err`: ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void`]

#### Inherited from

makeKubeObject<KubeRole\>('role').useGet

#### Defined in

[lib/k8s/cluster.ts:312](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/cluster.ts#L312)

___

### useList

▸ `Static` **useList**(`opts?`): [`any`[], ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md), (`items`: `any`[]) => `void`, (`err`: ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ApiListOptions`](../interfaces/lib_k8s_cluster.ApiListOptions.md) |

#### Returns

[`any`[], ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md), (`items`: `any`[]) => `void`, (`err`: ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void`]

#### Inherited from

makeKubeObject<KubeRole\>('role').useList

#### Defined in

[lib/k8s/cluster.ts:309](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/cluster.ts#L309)
