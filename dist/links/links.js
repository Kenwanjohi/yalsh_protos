"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksClient = exports.LinksService = exports.GetLinksResponse = exports.GetLinksRequest = exports.CreateLinkResponse = exports.CreateLinkRequest = exports.Link = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_js_1 = __importDefault(require("protobufjs/minimal.js"));
const timestamp_js_1 = require("../google/protobuf/timestamp.js");
exports.protobufPackage = "linksPackage";
function createBaseLink() {
    return { linkId: 0, url: "", key: "", clicks: 0 };
}
exports.Link = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.linkId !== 0) {
            writer.uint32(8).int32(message.linkId);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        if (message.key !== "") {
            writer.uint32(26).string(message.key);
        }
        if (message.clicks !== 0) {
            writer.uint32(32).int32(message.clicks);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLink();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.linkId = reader.int32();
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
                    message.clicks = reader.int32();
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
            linkId: isSet(object.linkId) ? globalThis.Number(object.linkId) : 0,
            url: isSet(object.url) ? globalThis.String(object.url) : "",
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            clicks: isSet(object.clicks) ? globalThis.Number(object.clicks) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.linkId !== 0) {
            obj.linkId = Math.round(message.linkId);
        }
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.clicks !== 0) {
            obj.clicks = Math.round(message.clicks);
        }
        return obj;
    },
    create(base) {
        return exports.Link.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseLink();
        message.linkId = (_a = object.linkId) !== null && _a !== void 0 ? _a : 0;
        message.url = (_b = object.url) !== null && _b !== void 0 ? _b : "";
        message.key = (_c = object.key) !== null && _c !== void 0 ? _c : "";
        message.clicks = (_d = object.clicks) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseCreateLinkRequest() {
    return { userId: 0, url: "", key: "", expiresAt: undefined, password: undefined };
}
exports.CreateLinkRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.userId !== 0) {
            writer.uint32(8).int32(message.userId);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        if (message.key !== "") {
            writer.uint32(26).string(message.key);
        }
        if (message.expiresAt !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.password !== undefined) {
            writer.uint32(42).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
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
                    if (tag !== 34) {
                        break;
                    }
                    message.expiresAt = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.password = reader.string();
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
            expiresAt: isSet(object.expiresAt) ? fromJsonTimestamp(object.expiresAt) : undefined,
            password: isSet(object.password) ? globalThis.String(object.password) : undefined,
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
        if (message.expiresAt !== undefined) {
            obj.expiresAt = message.expiresAt.toISOString();
        }
        if (message.password !== undefined) {
            obj.password = message.password;
        }
        return obj;
    },
    create(base) {
        return exports.CreateLinkRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCreateLinkRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : 0;
        message.url = (_b = object.url) !== null && _b !== void 0 ? _b : "";
        message.key = (_c = object.key) !== null && _c !== void 0 ? _c : "";
        message.expiresAt = (_d = object.expiresAt) !== null && _d !== void 0 ? _d : undefined;
        message.password = (_e = object.password) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
function createBaseCreateLinkResponse() {
    return { linkId: 0 };
}
exports.CreateLinkResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.linkId !== 0) {
            writer.uint32(8).int32(message.linkId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
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
function createBaseGetLinksRequest() {
    return { userId: 0 };
}
exports.GetLinksRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.userId !== 0) {
            writer.uint32(8).int32(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLinksRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.userId = reader.int32();
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
        return { userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== 0) {
            obj.userId = Math.round(message.userId);
        }
        return obj;
    },
    create(base) {
        return exports.GetLinksRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetLinksRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseGetLinksResponse() {
    return { links: [] };
}
exports.GetLinksResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.links) {
            exports.Link.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
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
        requestSerialize: (value) => Buffer.from(exports.GetLinksRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetLinksRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetLinksResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetLinksResponse.decode(value),
    },
};
exports.LinksClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.LinksService, "linksPackage.Links");
function toTimestamp(date) {
    const seconds = Math.trunc(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new globalThis.Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof globalThis.Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new globalThis.Date(o);
    }
    else {
        return fromTimestamp(timestamp_js_1.Timestamp.fromJSON(o));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
