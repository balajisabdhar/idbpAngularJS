### STAGE 1: Build ###
FROM node:14-alpine3.15 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
###FROM nginx:1.17.1-alpine
FROM nginxinc/nginx-unprivileged

### COPY nginx.conf /etc/nginx/nginx.conf
RUN cd /usr/src
RUN ls
RUN cd app
RUN ls
RUN cd dist
RUN ls
RUN cd carbon-angular-tutorial
RUN ls
COPY --from=build /usr/src/app/dist/carbon-angular-tutorial /usr/share/nginx/html