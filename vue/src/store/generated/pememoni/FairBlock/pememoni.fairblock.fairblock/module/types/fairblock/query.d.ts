import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../fairblock/params";
import { Share } from "../fairblock/share";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Target } from "../fairblock/target";
export declare const protobufPackage = "pememoni.fairblock.fairblock";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
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
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetShareRequest: {
    encode(message: QueryGetShareRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetShareRequest;
    fromJSON(object: any): QueryGetShareRequest;
    toJSON(message: QueryGetShareRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetShareRequest>): QueryGetShareRequest;
};
export declare const QueryGetShareResponse: {
    encode(message: QueryGetShareResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetShareResponse;
    fromJSON(object: any): QueryGetShareResponse;
    toJSON(message: QueryGetShareResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetShareResponse>): QueryGetShareResponse;
};
export declare const QueryAllShareRequest: {
    encode(message: QueryAllShareRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllShareRequest;
    fromJSON(object: any): QueryAllShareRequest;
    toJSON(message: QueryAllShareRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllShareRequest>): QueryAllShareRequest;
};
export declare const QueryAllShareResponse: {
    encode(message: QueryAllShareResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllShareResponse;
    fromJSON(object: any): QueryAllShareResponse;
    toJSON(message: QueryAllShareResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllShareResponse>): QueryAllShareResponse;
};
export declare const QueryGetTargetRequest: {
    encode(message: QueryGetTargetRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTargetRequest;
    fromJSON(object: any): QueryGetTargetRequest;
    toJSON(message: QueryGetTargetRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTargetRequest>): QueryGetTargetRequest;
};
export declare const QueryGetTargetResponse: {
    encode(message: QueryGetTargetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTargetResponse;
    fromJSON(object: any): QueryGetTargetResponse;
    toJSON(message: QueryGetTargetResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTargetResponse>): QueryGetTargetResponse;
};
export declare const QueryAllTargetRequest: {
    encode(message: QueryAllTargetRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTargetRequest;
    fromJSON(object: any): QueryAllTargetRequest;
    toJSON(message: QueryAllTargetRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTargetRequest>): QueryAllTargetRequest;
};
export declare const QueryAllTargetResponse: {
    encode(message: QueryAllTargetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTargetResponse;
    fromJSON(object: any): QueryAllTargetResponse;
    toJSON(message: QueryAllTargetResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTargetResponse>): QueryAllTargetResponse;
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Share(request: QueryGetShareRequest): Promise<QueryGetShareResponse>;
    ShareAll(request: QueryAllShareRequest): Promise<QueryAllShareResponse>;
    Target(request: QueryGetTargetRequest): Promise<QueryGetTargetResponse>;
    TargetAll(request: QueryAllTargetRequest): Promise<QueryAllTargetResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
