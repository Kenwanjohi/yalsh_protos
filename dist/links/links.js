"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksClient = exports.LinksService = exports.GetLinksResponse = exports.CreateLinkResponse = exports.CreateLinkRequest = exports.Link = exports.NoParamRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "linksPackage";
function createBaseNoParamRequest() {
    return {};
}
exports.NoParamRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNoParamRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.NoParamRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseNoParamRequest();
        return message;
    },
};
function createBaseLink() {
    return { id: 0, url: "", key: "", createdAt: 0 };
}
exports.Link = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        if (message.key !== "") {
            writer.uint32(26).string(message.key);
        }
        if (message.createdAt !== 0) {
            writer.uint32(32).int64(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLink();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.id = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.createdAt = longToNumber(reader.int64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.Number(object.id) : 0,
            url: isSet(object.url) ? globalThis.String(object.url) : "",
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== 0) {
            obj.id = Math.round(message.id);
        }
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        return obj;
    },
    create(base) {
        return exports.Link.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseLink();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.url = (_b = object.url) !== null && _b !== void 0 ? _b : "";
        message.key = (_c = object.key) !== null && _c !== void 0 ? _c : "";
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseCreateLinkRequest() {
    return { userId: 0, url: "", key: "", createdAt: 0 };
}
exports.CreateLinkRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== 0) {
            writer.uint32(8).int32(message.userId);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        if (message.key !== "") {
            writer.uint32(26).string(message.key);
        }
        if (message.createdAt !== 0) {
            writer.uint32(32).int64(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateLinkRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.userId = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.createdAt = longToNumber(reader.int64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
            url: isSet(object.url) ? globalThis.String(object.url) : "",
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== 0) {
            obj.userId = Math.round(message.userId);
        }
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        return obj;
    },
    create(base) {
        return exports.CreateLinkRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCreateLinkRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : 0;
        message.url = (_b = object.url) !== null && _b !== void 0 ? _b : "";
        message.key = (_c = object.key) !== null && _c !== void 0 ? _c : "";
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseCreateLinkResponse() {
    return { linkId: 0 };
}
exports.CreateLinkResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.linkId !== 0) {
            writer.uint32(8).int32(message.linkId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateLinkResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.linkId = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { linkId: isSet(object.linkId) ? globalThis.Number(object.linkId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.linkId !== 0) {
            obj.linkId = Math.round(message.linkId);
        }
        return obj;
    },
    create(base) {
        return exports.CreateLinkResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreateLinkResponse();
        message.linkId = (_a = object.linkId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseGetLinksResponse() {
    return { links: [] };
}
exports.GetLinksResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.links) {
            exports.Link.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLinksResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.links.push(exports.Link.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { links: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.links) ? object.links.map((e) => exports.Link.fromJSON(e)) : [] };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.links) === null || _a === void 0 ? void 0 : _a.length) {
            obj.links = message.links.map((e) => exports.Link.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetLinksResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetLinksResponse();
        message.links = ((_a = object.links) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Link.fromPartial(e))) || [];
        return message;
    },
};
exports.LinksService = {
    createLink: {
        path: "/linksPackage.Links/CreateLink",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateLinkRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateLinkRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateLinkResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateLinkResponse.decode(value),
    },
    getLinks: {
        path: "/linksPackage.Links/GetLinks",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.NoParamRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.NoParamRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetLinksResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetLinksResponse.decode(value),
    },
};
exports.LinksClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.LinksService, "linksPackage.Links");
function longToNumber(long) {
    if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
