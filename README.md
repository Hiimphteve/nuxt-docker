# Nuxt 3 and Docker
This repository shows how you can build an image of your Nuxt app and create a container running it. Additionally, it shows how to handle env variables while building the image and running a container.
## Building and running
### How to build an image
First of all make sure you have Docker installed.

To build an image run the following command in the project root.
```bash
docker build  -t nuxt/docker-demo:latest .
```
This command builds an image following the specifications in the Dockerfile without using any env vars.

### How to start a container from the image
Create and run a new container from the image you just build by running:
```bash
docker run -p 3000:3000 nuxt/docker-demo:latest
```

### How to start the container with different env variables
As long as you follow the naming conventions for the runtime config specified in [the nuxt documentation](https://nuxt.com/docs/guide/going-further/runtime-config#environment-variables) you can do so as such:
```bash
docker run --env NUXT_PUBLIC_SOME_VALUE="hello there!" -p 3000:3000 nuxt/docker-demo:latest
```
or as such
```bash
docker run --env-file ./.env.run -p 3000:3000 nuxt/docker-demo:latest
```
## Quick Docker reminder
You can list your images by running:
```bash
docker images
```
You can delete an image by running:
```bash
docker rmi <image_id>
```
You can list your containers by running:
```bash
docker ps -a
```
You can stop a containers by running:
```bash
docker stop <container_id>
```
You can list delete a container by running:
```bash
docker rm <container_id>
```
## Additional resources
- https://docs.docker.com/reference/cli/docker/container/run/
- https://docs.docker.com/reference/cli/docker/buildx/build/
- https://docs.docker.com/reference/cli/docker/container/ls/
- https://docs.docker.com/reference/cli/docker/container/run/
- https://docs.docker.com/reference/cli/docker/container/stop/
- https://docs.docker.com/reference/cli/docker/container/rm/
- https://docs.docker.com/reference/dockerfile/
- https://dev.to/sliplane/minimizing-nuxt-3-docker-images-5d5g
