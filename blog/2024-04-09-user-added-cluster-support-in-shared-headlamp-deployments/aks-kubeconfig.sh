#!/bin/bash

set -euo pipefail
set -x

export RESOURCE_GROUP=headlamp-stateless
export LOCATION="EAST US"
export CLUSTER_NAME="headlamp"
export SSH_KEY=~/.ssh/headlamp.pub

# Create an AKS cluster
az aks create \
  --resource-group $RESOURCE_GROUP \
  --name $CLUSTER_NAME \
  --node-count 1 \
  --ssh-key-value $SSH_KEY

# Get the credentials for the AKS cluster
az aks get-credentials \
  --resource-group $RESOURCE_GROUP \
  --name $CLUSTER_NAME \
  --file kubeconfig

# Get the base64 value of kubeconfig
echo "$(base64 -i kubeconfig)"