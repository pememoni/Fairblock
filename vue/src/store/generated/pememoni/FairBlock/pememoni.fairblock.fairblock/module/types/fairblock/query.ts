/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../fairblock/params";
import { Share } from "../fairblock/share";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Target } from "../fairblock/target";

export const protobufPackage = "pememoni.fairblock.fairblock";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetShareRequest {
  index: string;
}

export interface QueryGetShareResponse {
  share: Share | undefined;
}

export interface QueryAllShareRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllShareResponse {
  share: Share[];
  pagination: PageResponse | undefined;
}

export interface QueryGetTargetRequest {
  index: string;
}

export interface QueryGetTargetResponse {
  target: Target | undefined;
}

export interface QueryAllTargetRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllTargetResponse {
  target: Target[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetShareRequest: object = { index: "" };

export const QueryGetShareRequest = {
  encode(
    message: QueryGetShareRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetShareRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetShareRequest } as QueryGetShareRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetShareRequest {
    const message = { ...baseQueryGetShareRequest } as QueryGetShareRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetShareRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetShareRequest>): QueryGetShareRequest {
    const message = { ...baseQueryGetShareRequest } as QueryGetShareRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetShareResponse: object = {};

export const QueryGetShareResponse = {
  encode(
    message: QueryGetShareResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.share !== undefined) {
      Share.encode(message.share, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetShareResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetShareResponse } as QueryGetShareResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.share = Share.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetShareResponse {
    const message = { ...baseQueryGetShareResponse } as QueryGetShareResponse;
    if (object.share !== undefined && object.share !== null) {
      message.share = Share.fromJSON(object.share);
    } else {
      message.share = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetShareResponse): unknown {
    const obj: any = {};
    message.share !== undefined &&
      (obj.share = message.share ? Share.toJSON(message.share) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetShareResponse>
  ): QueryGetShareResponse {
    const message = { ...baseQueryGetShareResponse } as QueryGetShareResponse;
    if (object.share !== undefined && object.share !== null) {
      message.share = Share.fromPartial(object.share);
    } else {
      message.share = undefined;
    }
    return message;
  },
};

const baseQueryAllShareRequest: object = {};

export const QueryAllShareRequest = {
  encode(
    message: QueryAllShareRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllShareRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllShareRequest } as QueryAllShareRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllShareRequest {
    const message = { ...baseQueryAllShareRequest } as QueryAllShareRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllShareRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllShareRequest>): QueryAllShareRequest {
    const message = { ...baseQueryAllShareRequest } as QueryAllShareRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllShareResponse: object = {};

export const QueryAllShareResponse = {
  encode(
    message: QueryAllShareResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.share) {
      Share.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllShareResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllShareResponse } as QueryAllShareResponse;
    message.share = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.share.push(Share.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllShareResponse {
    const message = { ...baseQueryAllShareResponse } as QueryAllShareResponse;
    message.share = [];
    if (object.share !== undefined && object.share !== null) {
      for (const e of object.share) {
        message.share.push(Share.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllShareResponse): unknown {
    const obj: any = {};
    if (message.share) {
      obj.share = message.share.map((e) => (e ? Share.toJSON(e) : undefined));
    } else {
      obj.share = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllShareResponse>
  ): QueryAllShareResponse {
    const message = { ...baseQueryAllShareResponse } as QueryAllShareResponse;
    message.share = [];
    if (object.share !== undefined && object.share !== null) {
      for (const e of object.share) {
        message.share.push(Share.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetTargetRequest: object = { index: "" };

export const QueryGetTargetRequest = {
  encode(
    message: QueryGetTargetRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTargetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetTargetRequest } as QueryGetTargetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTargetRequest {
    const message = { ...baseQueryGetTargetRequest } as QueryGetTargetRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetTargetRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTargetRequest>
  ): QueryGetTargetRequest {
    const message = { ...baseQueryGetTargetRequest } as QueryGetTargetRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetTargetResponse: object = {};

export const QueryGetTargetResponse = {
  encode(
    message: QueryGetTargetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.target !== undefined) {
      Target.encode(message.target, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTargetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetTargetResponse } as QueryGetTargetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.target = Target.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTargetResponse {
    const message = { ...baseQueryGetTargetResponse } as QueryGetTargetResponse;
    if (object.target !== undefined && object.target !== null) {
      message.target = Target.fromJSON(object.target);
    } else {
      message.target = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetTargetResponse): unknown {
    const obj: any = {};
    message.target !== undefined &&
      (obj.target = message.target ? Target.toJSON(message.target) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTargetResponse>
  ): QueryGetTargetResponse {
    const message = { ...baseQueryGetTargetResponse } as QueryGetTargetResponse;
    if (object.target !== undefined && object.target !== null) {
      message.target = Target.fromPartial(object.target);
    } else {
      message.target = undefined;
    }
    return message;
  },
};

const baseQueryAllTargetRequest: object = {};

export const QueryAllTargetRequest = {
  encode(
    message: QueryAllTargetRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTargetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllTargetRequest } as QueryAllTargetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTargetRequest {
    const message = { ...baseQueryAllTargetRequest } as QueryAllTargetRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTargetRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTargetRequest>
  ): QueryAllTargetRequest {
    const message = { ...baseQueryAllTargetRequest } as QueryAllTargetRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllTargetResponse: object = {};

export const QueryAllTargetResponse = {
  encode(
    message: QueryAllTargetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.target) {
      Target.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTargetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllTargetResponse } as QueryAllTargetResponse;
    message.target = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.target.push(Target.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTargetResponse {
    const message = { ...baseQueryAllTargetResponse } as QueryAllTargetResponse;
    message.target = [];
    if (object.target !== undefined && object.target !== null) {
      for (const e of object.target) {
        message.target.push(Target.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTargetResponse): unknown {
    const obj: any = {};
    if (message.target) {
      obj.target = message.target.map((e) =>
        e ? Target.toJSON(e) : undefined
      );
    } else {
      obj.target = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTargetResponse>
  ): QueryAllTargetResponse {
    const message = { ...baseQueryAllTargetResponse } as QueryAllTargetResponse;
    message.target = [];
    if (object.target !== undefined && object.target !== null) {
      for (const e of object.target) {
        message.target.push(Target.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Share by index. */
  Share(request: QueryGetShareRequest): Promise<QueryGetShareResponse>;
  /** Queries a list of Share items. */
  ShareAll(request: QueryAllShareRequest): Promise<QueryAllShareResponse>;
  /** Queries a Target by index. */
  Target(request: QueryGetTargetRequest): Promise<QueryGetTargetResponse>;
  /** Queries a list of Target items. */
  TargetAll(request: QueryAllTargetRequest): Promise<QueryAllTargetResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "pememoni.fairblock.fairblock.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Share(request: QueryGetShareRequest): Promise<QueryGetShareResponse> {
    const data = QueryGetShareRequest.encode(request).finish();
    const promise = this.rpc.request(
      "pememoni.fairblock.fairblock.Query",
      "Share",
      data
    );
    return promise.then((data) =>
      QueryGetShareResponse.decode(new Reader(data))
    );
  }

  ShareAll(request: QueryAllShareRequest): Promise<QueryAllShareResponse> {
    const data = QueryAllShareRequest.encode(request).finish();
    const promise = this.rpc.request(
      "pememoni.fairblock.fairblock.Query",
      "ShareAll",
      data
    );
    return promise.then((data) =>
      QueryAllShareResponse.decode(new Reader(data))
    );
  }

  Target(request: QueryGetTargetRequest): Promise<QueryGetTargetResponse> {
    const data = QueryGetTargetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "pememoni.fairblock.fairblock.Query",
      "Target",
      data
    );
    return promise.then((data) =>
      QueryGetTargetResponse.decode(new Reader(data))
    );
  }

  TargetAll(request: QueryAllTargetRequest): Promise<QueryAllTargetResponse> {
    const data = QueryAllTargetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "pememoni.fairblock.fairblock.Query",
      "TargetAll",
      data
    );
    return promise.then((data) =>
      QueryAllTargetResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
