FROM node:16-alpine as builder

WORKDIR /usr/src/app

COPY . .

RUN npm ci
RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/app/public /usr/share/nginx/html

RUN sed -i \
  -e s/\#error_page/error_page/g \
  /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
