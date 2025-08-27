#!/usr/bin/env bash
git submodule update --init --recursive

docker buildx build $DOCKER_ARGS \
  .
