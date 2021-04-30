FROM node:14.7.0-alpine3.12 as node

RUN mkdir -p /web

WORKDIR /web

COPY package.json yarn.lock /web/

RUN yarn install

COPY . /web

RUN yarn run build

EXPOSE 3000

#==================== Setting up stage ==================== 
# Create image based on the official nginx - Alpine image
FROM nginx:1.19.9-alpine

COPY --from=node /web/build/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf