FROM node:14

RUN mkdir /server
WORKDIR /server

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install --production

COPY index.js .
COPY client client
COPY lib lib
COPY controllers controllers
