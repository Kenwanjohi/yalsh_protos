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
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "linksPackage";

export interface Link {
  linkId: number;
  url: string;
  key: string;
  clicks: number;
}

export interface CreateLinkRequest {
  userId: number;
  url: string;
  key: string;
  expiresAt?: Date | undefined;
  password?: string | undefined;
}

export interface CreateLinkResponse {
  linkId: number;
}

export interface GetLinksRequest {
  userId: number;
}

export interface GetLinksResponse {
  links: Link[];
}

function createBaseLink(): Link {
  return { linkId: 0, url: "", key: "", clicks: 0 };
}

export const Link = {
  encode(message: Link, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  fromJSON(object: any): Link {
    return {
      linkId: isSet(object.linkId) ? globalThis.Number(object.linkId) : 0,
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      clicks: isSet(object.clicks) ? globalThis.Number(object.clicks) : 0,
    };
  },

  toJSON(message: Link): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<Link>, I>>(base?: I): Link {
    return Link.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Link>, I>>(object: I): Link {
    const message = createBaseLink();
    message.linkId = object.linkId ?? 0;
    message.url = object.url ?? "";
    message.key = object.key ?? "";
    message.clicks = object.clicks ?? 0;
    return message;
  },
};

function createBaseCreateLinkRequest(): CreateLinkRequest {
  return { userId: 0, url: "", key: "", expiresAt: undefined, password: undefined };
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
    if (message.expiresAt !== undefined) {
      Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.password !== undefined) {
      writer.uint32(42).string(message.password);
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
          if (tag !== 34) {
            break;
          }

          message.expiresAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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

  fromJSON(object: any): CreateLinkRequest {
    return {
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      expiresAt: isSet(object.expiresAt) ? fromJsonTimestamp(object.expiresAt) : undefined,
      password: isSet(object.password) ? globalThis.String(object.password) : undefined,
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
    if (message.expiresAt !== undefined) {
      obj.expiresAt = message.expiresAt.toISOString();
    }
    if (message.password !== undefined) {
      obj.password = message.password;
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
    message.expiresAt = object.expiresAt ?? undefined;
    message.password = object.password ?? undefined;
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

function createBaseGetLinksRequest(): GetLinksRequest {
  return { userId: 0 };
}

export const GetLinksRequest = {
  encode(message: GetLinksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int32(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLinksRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): GetLinksRequest {
    return { userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0 };
  },

  toJSON(message: GetLinksRequest): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLinksRequest>, I>>(base?: I): GetLinksRequest {
    return GetLinksRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLinksRequest>, I>>(object: I): GetLinksRequest {
    const message = createBaseGetLinksRequest();
    message.userId = object.userId ?? 0;
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
    requestSerialize: (value: GetLinksRequest) => Buffer.from(GetLinksRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetLinksRequest.decode(value),
    responseSerialize: (value: GetLinksResponse) => Buffer.from(GetLinksResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetLinksResponse.decode(value),
  },
} as const;

export interface LinksServer extends UntypedServiceImplementation {
  createLink: handleUnaryCall<CreateLinkRequest, CreateLinkResponse>;
  getLinks: handleUnaryCall<GetLinksRequest, GetLinksResponse>;
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
    request: GetLinksRequest,
    callback: (error: ServiceError | null, response: GetLinksResponse) => void,
  ): ClientUnaryCall;
  getLinks(
    request: GetLinksRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetLinksResponse) => void,
  ): ClientUnaryCall;
  getLinks(
    request: GetLinksRequest,
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

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
