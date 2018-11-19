FROM node:alpine as builder
MAINTAINER david.zuluaga@bitsamericas.com
RUN apk update && apk add --no-cache make git
WORKDIR /app
ADD package.json /app/
RUN cd /app && npm cache clean --force && npm install
ADD . /app
RUN cd /app && npm run build:ssr -- --output-path=./dist/ && ls

FROM node:alpine
MAINTAINER david.zuluaga@bitsamericas.com
RUN apk update && apk add --no-cache make 
WORKDIR /app
#RUN ls /app/
RUN mkdir /app/dist
COPY --from=builder /app/dist/ .
RUN mv ./browser dist/ && mv ./server dist/
CMD ["node", "server.js"]