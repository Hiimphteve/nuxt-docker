# Source: https://dev.to/sliplane/minimizing-nuxt-3-docker-images-5d5g

# Use a large Node.js base image to build the application and name it "builder"
FROM node:20-alpine as builder

# Exact same steps as before
WORKDIR /app

COPY package.json /app
COPY .env.prod /app

RUN yarn install

COPY . /app

# Build it with an env file of your choice
RUN yarn build --dotenv .env.prod

# Create a new Docker image and name it "runner"
FROM node:20-alpine as runner

WORKDIR /app

# Copy the built application from the "builder" image into the "runner" image
# This will only copy whatever is in the .output folder and ignore useless files like node_modules!
COPY --from=builder /app/.output /app/.output

# Start is the same as before
CMD ["node", ".output/server/index.mjs"]
