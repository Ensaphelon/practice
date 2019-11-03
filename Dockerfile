FROM node:12.2.0-alpine

RUN apk update && \
  apk add --no-cache util-linux vim

RUN mkdir /app
WORKDIR /app

COPY yarn.lock yarn.lock
COPY package.json package.json

ADD . /app

RUN yarn

RUN yarn build

EXPOSE 3000

VOLUME ["/app/dist"]

CMD yarn build
