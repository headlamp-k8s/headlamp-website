# Class: MutatingWebhookConfiguration

[lib/k8s/mutatingWebhookConfiguration](../modules/lib_k8s_mutatingWebhookConfiguration.md).MutatingWebhookConfiguration

## Hierarchy

- `any`

  ↳ **`MutatingWebhookConfiguration`**

## Constructors

### constructor

• **new MutatingWebhookConfiguration**(`json`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`KubeMutatingWebhookConfiguration`](../interfaces/lib_k8s_mutatingWebhookConfiguration.KubeMutatingWebhookConfiguration.md) |

#### Inherited from

makeKubeObject<KubeMutatingWebhookConfiguration\>(
  'MutatingWebhookConfiguration'
).constructor

#### Defined in

[lib/k8s/cluster.ts:317](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/cluster.ts#L317)

## Properties

### apiEndpoint

▪ `Static` **apiEndpoint**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiInfo` | { `group`: `string` ; `resource`: `string` ; `version`: `string`  }[] |
| `delete` | (`name`: `string`, `queryParams?`: [`QueryParameters`](../interfaces/lib_k8s_apiProxy.QueryParameters.md), `cluster?`: `string`) => `Promise`<`any`\> |
| `get` | (`name`: `string`, `cb`: [`StreamResultsCb`](../modules/lib_k8s_apiProxy.md#streamresultscb), `errCb`: [`StreamErrCb`](../modules/lib_k8s_apiProxy.md#streamerrcb), `queryParams?`: [`QueryParameters`](../interfaces/lib_k8s_apiProxy.QueryParameters.md), `cluster?`: `string`) => `Promise`<() => `void`\> |
| `isNamespaced` | `boolean` |
| `list` | (`cb`: [`StreamResultsCb`](../modules/lib_k8s_apiProxy.md#streamresultscb), `errCb`: [`StreamErrCb`](../modules/lib_k8s_apiProxy.md#streamerrcb), `queryParams?`: [`QueryParameters`](../interfaces/lib_k8s_apiProxy.QueryParameters.md), `cluster?`: `string`) => `Promise`<() => `void`\> |
| `patch` | (`body`: `OpPatch`[], `name`: `string`, `queryParams?`: [`QueryParameters`](../interfaces/lib_k8s_apiProxy.QueryParameters.md), `cluster?`: `string`) => `Promise`<`any`\> |
| `post` | (`body`: [`KubeObjectInterface`](../interfaces/lib_k8s_cluster.KubeObjectInterface.md), `queryParams?`: [`QueryParameters`](../interfaces/lib_k8s_apiProxy.QueryParameters.md), `cluster?`: `string`) => `Promise`<`any`\> |
| `put` | (`body`: [`KubeObjectInterface`](../interfaces/lib_k8s_cluster.KubeObjectInterface.md), `queryParams?`: [`QueryParameters`](../interfaces/lib_k8s_apiProxy.QueryParameters.md), `cluster?`: `string`) => `Promise`<`any`\> |

#### Defined in

[lib/k8s/mutatingWebhookConfiguration.ts:48](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/mutatingWebhookConfiguration.ts#L48)

___

### className

▪ `Static` **className**: `string`

#### Inherited from

makeKubeObject<KubeMutatingWebhookConfiguration\>(
  'MutatingWebhookConfiguration'
).className

#### Defined in

[lib/k8s/cluster.ts:318](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/cluster.ts#L318)

## Accessors

### webhooks

• `get` **webhooks**(): { `admissionReviewVersions`: `string`[] ; `clientConfig`: [`KubeWebhookClientConfig`](../interfaces/lib_k8s_mutatingWebhookConfiguration.KubeWebhookClientConfig.md) ; `failurePolicy?`: `string` ; `matchPolicy?`: `string` ; `name`: `string` ; `namespaceSelector?`: { `matchExpressions`: `undefined` \| { `key`: `string` ; `operator`: `string` ; `values`: `string`[]  }[] ; `matchLabels`: `undefined` \| { `[key: string]`: `string`;  }  } ; `objectSelector?`: { `matchExpressions`: `undefined` \| { `key`: `string` ; `operator`: `string` ; `values`: `string`[]  }[] ; `matchLabels`: `undefined` \| { `[key: string]`: `string`;  }  } ; `reinvocationPolicy?`: `string` ; `rules?`: [`KubeRuleWithOperations`](../interfaces/lib_k8s_mutatingWebhookConfiguration.KubeRuleWithOperations.md)[] ; `sideEffects?`: `string` ; `timeoutSeconds?`: `number`  }[]

#### Returns

{ `admissionReviewVersions`: `string`[] ; `clientConfig`: [`KubeWebhookClientConfig`](../interfaces/lib_k8s_mutatingWebhookConfiguration.KubeWebhookClientConfig.md) ; `failurePolicy?`: `string` ; `matchPolicy?`: `string` ; `name`: `string` ; `namespaceSelector?`: { `matchExpressions`: `undefined` \| { `key`: `string` ; `operator`: `string` ; `values`: `string`[]  }[] ; `matchLabels`: `undefined` \| { `[key: string]`: `string`;  }  } ; `objectSelector?`: { `matchExpressions`: `undefined` \| { `key`: `string` ; `operator`: `string` ; `values`: `string`[]  }[] ; `matchLabels`: `undefined` \| { `[key: string]`: `string`;  }  } ; `reinvocationPolicy?`: `string` ; `rules?`: [`KubeRuleWithOperations`](../interfaces/lib_k8s_mutatingWebhookConfiguration.KubeRuleWithOperations.md)[] ; `sideEffects?`: `string` ; `timeoutSeconds?`: `number`  }[]

#### Defined in

[lib/k8s/mutatingWebhookConfiguration.ts:54](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/mutatingWebhookConfiguration.ts#L54)

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

makeKubeObject<KubeMutatingWebhookConfiguration\>(
  'MutatingWebhookConfiguration'
).apiList

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

makeKubeObject<KubeMutatingWebhookConfiguration\>(
  'MutatingWebhookConfiguration'
).getAuthorization

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

makeKubeObject<KubeMutatingWebhookConfiguration\>(
  'MutatingWebhookConfiguration'
).getErrorMessage

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

makeKubeObject<KubeMutatingWebhookConfiguration\>(
  'MutatingWebhookConfiguration'
).useApiGet

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

makeKubeObject<KubeMutatingWebhookConfiguration\>(
  'MutatingWebhookConfiguration'
).useApiList

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

makeKubeObject<KubeMutatingWebhookConfiguration\>(
  'MutatingWebhookConfiguration'
).useGet

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

makeKubeObject<KubeMutatingWebhookConfiguration\>(
  'MutatingWebhookConfiguration'
).useList

#### Defined in

[lib/k8s/cluster.ts:309](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/cluster.ts#L309)
