ARG NODEJS_BASE
FROM ${NODEJS_BASE}

RUN mkdir /server
WORKDIR /server

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install --production

# es modules seem to require this? :(
RUN npm link @ucd-lib/rp-node-utils

COPY index.js .
COPY client client
COPY lib lib
COPY controllers controllers

CMD node index.js