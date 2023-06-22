FROM node:18.16.1

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/

# Bundle app source
COPY . /usr/src/app

RUN yarn
RUN yarn build

EXPOSE 4173
CMD ["yarn", "preview"]