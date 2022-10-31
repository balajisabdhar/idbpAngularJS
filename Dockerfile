### STAGE 1: Build ###
FROM node:14.15.3 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
###FROM nginx:alpine
FROM nginxinc/nginx-unprivileged

### COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src /usr/share/nginx/html