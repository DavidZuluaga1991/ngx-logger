FROM node:alpine as builder

MAINTAINER david.zuluaga@bitsamericas.com

RUN apk update && apk add --no-cache make git
# Create app directory
WORKDIR /app
# Install app dependencies
ADD package.json /app/
RUN cd /app && npm set progress=false && npm install
# Copy project files into the docker image
ADD . /app
RUN cd /app && npm run build:ssr -- --output-path=./dist/ && ls

FROM node:alpine
MAINTAINER david.zuluaga@bitsamericas.com
RUN apk update && apk add --no-cache make && mkdir /app/dist
WORKDIR /app
COPY --from=builder /app/dist/ .
RUN mv ./browser dist/ && mv ./server dist/
CMD ["node", "server.js"]