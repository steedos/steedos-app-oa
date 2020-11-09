#!/bin/bash
IMAGE_VERSION="steedos/steedos-project-oa:1.22.1"

docker rmi $IMAGE_VERSION
echo "=> Building image..."; echo;
docker build --no-cache=true -t $IMAGE_VERSION .

echo "=> Pushing image..."; echo;
docker push $IMAGE_VERSION
echo "=> Done."; echo;
