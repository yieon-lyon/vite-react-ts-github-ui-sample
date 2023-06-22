FROM node:18.16.1 as build

WORKDIR /app

COPY . /app

RUN yarn
RUN yarn build

FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
COPY --from=build /app/dist /var/www/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]