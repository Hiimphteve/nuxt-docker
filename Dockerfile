# Inspiration: https://dev.to/sliplane/minimizing-nuxt-3-docker-images-5d5g
ARG BASE_IMAGE=node:22-alpine

FROM $BASE_IMAGE as builder

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

RUN yarn build

FROM $BASE_IMAGE as runner

WORKDIR /app

COPY --from=builder /app/.output /app/.output

CMD ["node", ".output/server/index.mjs"]
