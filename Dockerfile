FROM node:alpine

RUN apk add bash

RUN npm -g config set user root
RUN npm install -g nodemon

# Create app directory
RUN mkdir -p /var/www/media-api/node_modules && chown -R node:node /var/www/media-api
RUN chmod -R 777 /var/www/media-api
WORKDIR /var/www/media-api

# Install app dependencies

COPY yarn.lock ./
COPY package.json ./

RUN yarn install

USER node

# Bundle app source
COPY --chown=node:node . .

# Generate the ORM client
RUN npx prisma generate

EXPOSE 4445