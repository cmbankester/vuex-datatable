FROM node:7-alpine
MAINTAINER Christian Michael Paul Bankester <cbankester@immense.net>
WORKDIR /code
COPY package.json yarn.lock ./
RUN yarn install
COPY lib ./lib
COPY webpack.config.js ./