ARG NODEJS_BASE
FROM ${NODEJS_BASE}

RUN mkdir /server
WORKDIR /server

# install server depends
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

# es modules seem to require this? :(
RUN npm link @ucd-lib/rp-node-utils

# client build
COPY client/dist.sh client/dist.sh
COPY client/webpack-dist.config.cjs client/webpack-dist.config.cjs

# client npm packages
COPY client/public/package.json client/public/package.json
COPY client/public/package-lock.json client/public/package-lock.json
RUN cd client/public && npm install
RUN cd client/public && ln -s node_modules/\@ucd-lib/cork-app-load/lib loader

# ucd client code
COPY client/public/images client/public/images
COPY client/public/fonts client/public/fonts
COPY client/public/index.html client/public/index.html
COPY client/public/login.html client/public/login.html
COPY client/public/external-loader.js client/public/external-loader.js
COPY client/public/src client/public/src
COPY client/public/elements client/public/elements

# add server code
COPY index.js .
COPY lib lib
COPY controllers controllers

# build dist client
# requires above lib dir
RUN npm run dist

# set build tags
ARG CLIENT_TAG
ENV CLIENT_TAG ${CLIENT_TAG}
ARG VESSEL_TAG
ENV VESSEL_TAG ${VESSEL_TAG}
ARG APP_VERSION
ENV APP_VERSION ${APP_VERSION}
ARG BUILD_NUM
ENV BUILD_NUM ${BUILD_NUM}
ARG BUILD_TIME
ENV BUILD_TIME ${BUILD_TIME}


CMD node index.js