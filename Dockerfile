#FROM scratch
#RUN apt-get update \
#    apt-get upgrade \
#    apt install nodejs npm \
#    apt install npm \
#    npm install -g @angular/cli 
#
#RUN mkdir /usr/src/app
#WORKDIR /usr/src/app
#COPY . .
#RUN $(npm bin)/ng build --prod

FROM tiangolo/node-frontend:10 as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

ARG configuration=production

RUN npm run build -- --output-path=./dist/out --configuration $configuration

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

#COPY dist/ .
COPY --from=build-stage /app/dist/out/ .