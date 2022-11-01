### STAGE 1: Build ###
FROM node:14-alpine3.15 AS build
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install -g @angular/cli 
RUN ng build
### STAGE 2: Run ###
# FROM nginx:1.17.1-alpine
####FROM nginxinc/nginx-unprivileged

FROM nginx

COPY --from=build /usr/src/app/dist/carbon-angular-tutorial /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
