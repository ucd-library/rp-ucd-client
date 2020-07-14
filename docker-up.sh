#! /bin/bash
docker run --rm -ti -p 3000:3000 -v $(pwd)/client:/server/client -v $(pwd)/lib:/server/lib -v $(pwd)/controllers:/server/controllers -v $(pwd)/index.js:/server/index.js rp-ucd-client bash
