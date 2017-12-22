FROM node:8.9-alpine

MAINTAINER Vitor Cassiano

ADD . /app

WORKDIR app/

RUN npm i --production

CMD ["npm", "run", "production"]
