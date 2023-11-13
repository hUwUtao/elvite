#!/bin/bash

rm -rf dist

mkdir -p dist/bin

bun i
bun build src/index.ts --compile --outfile dist/bin/server --minify --sourcemap

cd client
bun i
bun run build
mv dist ../dist/public

# configure
