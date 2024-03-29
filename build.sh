#!/bin/bash
protoc --plugin=$(pnpm root)/.bin/protoc-gen-ts_proto \
 --ts_proto_out=dist \
 --ts_proto_opt=outputServices=grpc-js \
 --ts_proto_opt=esModuleInterop=true \
 --ts_proto_opt=importSuffix=.js \
 -I=src/ src/**/*.proto