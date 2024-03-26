#!/bin/bash

set -euo pipefail
set -x

# Source: https://docs.docker.com/engine/install/ubuntu/

apt-get update
apt-get -y remove docker docker-engine docker.io containerd runc || true
apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common \
    byobu

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

apt-get update
apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose
groupadd docker
usermod -aG docker $USER
newgrp docker