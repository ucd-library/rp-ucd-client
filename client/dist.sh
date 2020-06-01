#! /bin/bash

rm -rf dist

cp ./public/index.html ./dist
cp -r ./public/loader ./dist

webpack --config webpack-dist.config.cjs