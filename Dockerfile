FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

#RUN rm -R dist/
#RUN ng build --prod
#CMD [ "ng","build","--prod" ]

WORKDIR /usr/share/nginx/html

COPY dist/logger .