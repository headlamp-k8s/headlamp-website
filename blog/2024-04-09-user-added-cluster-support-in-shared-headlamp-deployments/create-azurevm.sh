#!/bin/bash

set -euo pipefail
set -x

export VM_NAME=stateless
export RESOURCE_GROUP=headlamp-stateless
export LOCATION="EAST US"
export IMAGE="Ubuntu2204"
export VM_SIZE=Standard_D8as_v5
# Create a key value pair for the ssh key with name headlamp and no password
ssh-keygen -t ed25519 -C "headlmap.dev" -f ~/.ssh/headlamp -N ""
export SSH_KEY=$(cat ~/.ssh/headlamp.pub)
export VM_USER="headlamp"

# Create a resource group
az group create \
    --name "${RESOURCE_GROUP}" \
    --location "${LOCATION}"

# Create a VM
az vm create \
    --name "$VM_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --location "$LOCATION" \
    --image "$IMAGE" \
    --size "$VM_SIZE" \
    --ssh-key-values "$SSH_KEY" \
    --admin-username "$VM_USER" \

# Get the public IP of the VM
PUBLIC_IP=$(az vm show \
  --resource-group "$RESOURCE_GROUP" \
  --name "$VM_NAME" \
  --show-details \
  --query 'publicIps' \
  --output tsv)

echo $PUBLIC_IP;

# Connect to the VM
ssh $VM_USER@$PUBLIC_IP -v