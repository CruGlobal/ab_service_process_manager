#!/usr/bin/env bash
# Supply chain: --provenance and --sbom are required for Docker Hub attestations; they are preserved when using --push.

git submodule update --init --recursive

docker buildx build --provenance=true --sbom=true $DOCKER_ARGS .
