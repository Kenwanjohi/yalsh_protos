/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "linksPackage";

export interface NoParamRequest {
}

export interface Link {
  id: number;
  url: string;
  key: string;
  createdAt: number;
}

export interface CreateLinkRequest {
  userId: number;
  url: string;
  key: string;
  createdAt: number;
}

export interface CreateLinkResponse {
  linkId: number;
}

export interface GetLinksResponse {
  links: Link[];
}

function createBaseNoParamRequest(): NoParamRequest {
  return {};
}

export const NoParamRequest = {
  encode(_: NoParamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoParamRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(_: any): NoParamRequest {
    return {};
  },

  toJSON(_: NoParamRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<NoParamRequest>, I>>(base?: I): NoParamRequest {
    return NoParamRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NoParamRequest>, I>>(_: I): NoParamRequest {
    const message = createBaseNoParamRequest();
    return message;
  },
};

function createBaseLink(): Link {
  return { id: 0, url: "", key: "", createdAt: 0 };
}

export const Link = {
  encode(message: Link, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Link {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.createdAt = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Link {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
    };
  },

  toJSON(message: Link): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<Link>, I>>(base?: I): Link {
    return Link.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Link>, I>>(object: I): Link {
    const message = createBaseLink();
    message.id = object.id ?? 0;
    message.url = object.url ?? "";
    message.key = object.key ?? "";
    message.createdAt = object.createdAt ?? 0;
    return message;
  },
};

function createBaseCreateLinkRequest(): CreateLinkRequest {
  return { userId: 0, url: "", key: "", createdAt: 0 };
}

export const CreateLinkRequest = {
  encode(message: CreateLinkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateLinkRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.createdAt = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateLinkRequest {
    return {
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
    };
  },

  toJSON(message: CreateLinkRequest): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<CreateLinkRequest>, I>>(base?: I): CreateLinkRequest {
    return CreateLinkRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateLinkRequest>, I>>(object: I): CreateLinkRequest {
    const message = createBaseCreateLinkRequest();
    message.userId = object.userId ?? 0;
    message.url = object.url ?? "";
    message.key = object.key ?? "";
    message.createdAt = object.createdAt ?? 0;
    return message;
  },
};

function createBaseCreateLinkResponse(): CreateLinkResponse {
  return { linkId: 0 };
}

export const CreateLinkResponse = {
  encode(message: CreateLinkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.linkId !== 0) {
      writer.uint32(8).int32(message.linkId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateLinkResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): CreateLinkResponse {
    return { linkId: isSet(object.linkId) ? globalThis.Number(object.linkId) : 0 };
  },

  toJSON(message: CreateLinkResponse): unknown {
    const obj: any = {};
    if (message.linkId !== 0) {
      obj.linkId = Math.round(message.linkId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateLinkResponse>, I>>(base?: I): CreateLinkResponse {
    return CreateLinkResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateLinkResponse>, I>>(object: I): CreateLinkResponse {
    const message = createBaseCreateLinkResponse();
    message.linkId = object.linkId ?? 0;
    return message;
  },
};

function createBaseGetLinksResponse(): GetLinksResponse {
  return { links: [] };
}

export const GetLinksResponse = {
  encode(message: GetLinksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.links) {
      Link.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLinksResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLinksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.links.push(Link.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLinksResponse {
    return { links: globalThis.Array.isArray(object?.links) ? object.links.map((e: any) => Link.fromJSON(e)) : [] };
  },

  toJSON(message: GetLinksResponse): unknown {
    const obj: any = {};
    if (message.links?.length) {
      obj.links = message.links.map((e) => Link.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLinksResponse>, I>>(base?: I): GetLinksResponse {
    return GetLinksResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLinksResponse>, I>>(object: I): GetLinksResponse {
    const message = createBaseGetLinksResponse();
    message.links = object.links?.map((e) => Link.fromPartial(e)) || [];
    return message;
  },
};

export type LinksService = typeof LinksService;
export const LinksService = {
  createLink: {
    path: "/linksPackage.Links/CreateLink",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateLinkRequest) => Buffer.from(CreateLinkRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateLinkRequest.decode(value),
    responseSerialize: (value: CreateLinkResponse) => Buffer.from(CreateLinkResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateLinkResponse.decode(value),
  },
  getLinks: {
    path: "/linksPackage.Links/GetLinks",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: NoParamRequest) => Buffer.from(NoParamRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => NoParamRequest.decode(value),
    responseSerialize: (value: GetLinksResponse) => Buffer.from(GetLinksResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetLinksResponse.decode(value),
  },
} as const;

export interface LinksServer extends UntypedServiceImplementation {
  createLink: handleUnaryCall<CreateLinkRequest, CreateLinkResponse>;
  getLinks: handleUnaryCall<NoParamRequest, GetLinksResponse>;
}

export interface LinksClient extends Client {
  createLink(
    request: CreateLinkRequest,
    callback: (error: ServiceError | null, response: CreateLinkResponse) => void,
  ): ClientUnaryCall;
  createLink(
    request: CreateLinkRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateLinkResponse) => void,
  ): ClientUnaryCall;
  createLink(
    request: CreateLinkRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateLinkResponse) => void,
  ): ClientUnaryCall;
  getLinks(
    request: NoParamRequest,
    callback: (error: ServiceError | null, response: GetLinksResponse) => void,
  ): ClientUnaryCall;
  getLinks(
    request: NoParamRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetLinksResponse) => void,
  ): ClientUnaryCall;
  getLinks(
    request: NoParamRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetLinksResponse) => void,
  ): ClientUnaryCall;
}

export const LinksClient = makeGenericClientConstructor(LinksService, "linksPackage.Links") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): LinksClient;
  service: typeof LinksService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
