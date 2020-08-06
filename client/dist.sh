#! /bin/bash

rm -rf dist
mkdir -p dist

cp ./public/index.html ./dist
cp -r ./public/loader ./dist
cp -r ./public/images ./dist

webpack --config webpack-dist.config.cjs