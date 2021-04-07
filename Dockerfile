FROM node:alpine as builder

RUN apk update && apk add --no-cache make git python autoconf g++ libc6-compat libjpeg-turbo-dev libpng-dev nasm libtool automake

WORKDIR /usr/src/app
COPY . .

RUN npm ci
RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/app/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
