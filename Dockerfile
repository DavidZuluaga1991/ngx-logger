FROM scratch
RUN apt-get update \
    apt-get upgrade \
    apt install nodejs npm \
    apt install npm \
    npm install -g @angular/cli 

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN $(npm bin)/ng build --prod

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY dist/logger .