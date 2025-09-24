FROM node:20 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

FROM node:20-alpine AS production

WORKDIR /usr/src/app

COPY --from=build --chown=node:node /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

USER node

CMD ["npm", "start"]
