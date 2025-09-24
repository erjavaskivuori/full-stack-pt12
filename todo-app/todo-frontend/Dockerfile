FROM node:20 AS build-stage 

WORKDIR /usr/src/app

COPY ./todo-frontend .

RUN npm ci

RUN npm run test

ARG VITE_BACKEND_URL=/api
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

RUN npm run build

FROM nginx:1.25-alpine

EXPOSE 80

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
