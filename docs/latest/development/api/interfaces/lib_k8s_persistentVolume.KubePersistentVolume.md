# Interface: KubePersistentVolume

[lib/k8s/persistentVolume](../modules/lib_k8s_persistentVolume.md).KubePersistentVolume

## Hierarchy

- [`KubeObjectInterface`](lib_k8s_cluster.KubeObjectInterface.md)

  ↳ **`KubePersistentVolume`**

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

### spec

• **spec**: `Object`

#### Index signature

▪ [other: `string`]: `any`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `capacity` | { `storage`: `string`  } |
| `capacity.storage` | `string` |

#### Defined in

[lib/k8s/persistentVolume.ts:5](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/persistentVolume.ts#L5)

___

### status

• **status**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `phase` | `string` |
| `reason` | `string` |

#### Defined in

[lib/k8s/persistentVolume.ts:11](https://github.com/headlamp-k8s/headlamp/blob/65bfc11e/frontend/src/lib/k8s/persistentVolume.ts#L11)
