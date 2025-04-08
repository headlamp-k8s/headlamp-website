#!/bin/bash

set -euo pipefail
set -x

# Clone headlamp repository from github
git clone https://github.com/kubernetes-sigs/headlamp.git --depth=1 && cd headlamp

echo '
version: "3"
services: 
  headlamp:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "4466:4466"
    command: ["-enable-dynamic-clusters", "-plugins-dir=/build/plugins"]
    volumes:
      - headlamp-plugins:/build/plugins
    user: "100:101"
    init: true
    depends_on:
      - init-container
  init-container:
    build:
      context: .
      dockerfile: Dockerfile.plugins
    volumes:
      - headlamp-plugins:/plugins
volumes:
  headlamp-plugins:
' | tee docker-compose.yaml

# Start headlamp
docker-compose up