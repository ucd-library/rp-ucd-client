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
COPY client/public/index.html client/public/index.html
COPY client/public/login.html client/public/login.html
COPY client/public/src client/public/src
COPY client/public/elements client/public/elements

# build dist client
RUN npm run dist

# add server code
COPY index.js .
COPY lib lib
COPY controllers controllers

CMD node index.js