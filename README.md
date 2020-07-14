# rp-ucd-client
Client application for UCD Davis Library research profiles

Note.  Both client and server are using esm modules supported in
Node v14.  Making Node v14 a min requirement for this project.

## Init

```
npm install
cd ./client/public
npm install
```

## Client Dev

```
npm run watch
```

## Run

```
node index.js
```

Or in docker:

```
docker build -t rp-ucd-client .
./docker-up.sh
```
which will put you in the container. Now run `node index.js`

App will be at http://localhost:3000/

Then run `npm run watch` on your local machine to watch for and make non-server changes.
Rerun 'node index.js' to put any server changes into effect.
