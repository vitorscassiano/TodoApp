FROM node:8.9-alpine

MAINTAINER Vitor Cassiano

ADD . /app

WORKDIR app/

# INSTALL AND CONFIGURING NGINX
RUN apk update
RUN apk add nginx openrc --no-cache && rm -Rf /tmp/* /var/lib/cache/apk/*
RUN adduser -D -g 'www' www
RUN mkdir /www
RUN chown -R www:www /var/lib/nginx
RUN chown -R www:www /www

ADD ./nginx.conf /etc/nginx/nginx.conf.orig

RUN npm i && npm run production && rm -rf node_modules/
RUN cp ./public /www

CMD ["rc-service", "nginx", "start"]
