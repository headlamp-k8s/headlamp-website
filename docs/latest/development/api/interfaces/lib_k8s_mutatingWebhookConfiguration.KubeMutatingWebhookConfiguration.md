# Interface: KubeMutatingWebhookConfiguration

[lib/k8s/mutatingWebhookConfiguration](../modules/lib_k8s_mutatingWebhookConfiguration.md).KubeMutatingWebhookConfiguration

## Hierarchy

- [`KubeObjectInterface`](lib_k8s_cluster.KubeObjectInterface.md)

  ↳ **`KubeMutatingWebhookConfiguration`**

## Properties

### apiVersion

• `Optional` **apiVersion**: `string`

#### Inherited from

[KubeObjectInterface](lib_k8s_cluster.KubeObjectInterface.md).[apiVersion](lib_k8s_cluster.KubeObjectInterface.md#apiversion)

#### Defined in

[lib/k8s/cluster.ts:55](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/cluster.ts#L55)

___

### kind

• **kind**: `string`

Kind is a string value representing the REST resource this object represents.
Servers may infer this from the endpoint the client submits requests to.

In CamelCase.

Cannot be updated.

**`see`** [more info](https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds)

#### Inherited from

[KubeObjectInterface](lib_k8s_cluster.KubeObjectInterface.md).[kind](lib_k8s_cluster.KubeObjectInterface.md#kind)

#### Defined in

[lib/k8s/cluster.ts:54](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/cluster.ts#L54)

___

### metadata

• **metadata**: [`KubeMetadata`](lib_k8s_cluster.KubeMetadata.md)

#### Inherited from

[KubeObjectInterface](lib_k8s_cluster.KubeObjectInterface.md).[metadata](lib_k8s_cluster.KubeObjectInterface.md#metadata)

#### Defined in

[lib/k8s/cluster.ts:56](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/cluster.ts#L56)

___

### webhooks

• **webhooks**: { `admissionReviewVersions`: `string`[] ; `clientConfig`: [`KubeWebhookClientConfig`](lib_k8s_mutatingWebhookConfiguration.KubeWebhookClientConfig.md) ; `failurePolicy?`: `string` ; `matchPolicy?`: `string` ; `name`: `string` ; `namespaceSelector?`: { `matchExpressions`: `undefined` \| { `key`: `string` ; `operator`: `string` ; `values`: `string`[]  }[] ; `matchLabels`: `undefined` \| { `[key: string]`: `string`;  }  } ; `objectSelector?`: { `matchExpressions`: `undefined` \| { `key`: `string` ; `operator`: `string` ; `values`: `string`[]  }[] ; `matchLabels`: `undefined` \| { `[key: string]`: `string`;  }  } ; `reinvocationPolicy?`: `string` ; `rules?`: [`KubeRuleWithOperations`](lib_k8s_mutatingWebhookConfiguration.KubeRuleWithOperations.md)[] ; `sideEffects?`: `string` ; `timeoutSeconds?`: `number`  }[]

#### Defined in

[lib/k8s/mutatingWebhookConfiguration.ts:24](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/mutatingWebhookConfiguration.ts#L24)
