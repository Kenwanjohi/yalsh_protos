#!/bin/bash
protoc --plugin=$(pnpm root)/.bin/protoc-gen-ts_proto \
 --ts_proto_out=dist \
 --ts_proto_opt=outputServices=grpc-js \
 -I=src/ src/**/*.proto