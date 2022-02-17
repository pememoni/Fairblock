import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../fairblock/params";
import { Share } from "../fairblock/share";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Target } from "../fairblock/target";
import { Commit } from "../fairblock/commit";
import { Encryptedtx } from "../fairblock/encryptedtx";
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
export interface QueryGetCommitRequest {
    index: string;
}
export interface QueryGetCommitResponse {
    commit: Commit | undefined;
}
export interface QueryAllCommitRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCommitResponse {
    commit: Commit[];
    pagination: PageResponse | undefined;
}
export interface QueryGetEncryptedtxRequest {
    index: string;
}
export interface QueryGetEncryptedtxResponse {
    encryptedtx: Encryptedtx | undefined;
}
export interface QueryAllEncryptedtxRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllEncryptedtxResponse {
    encryptedtx: Encryptedtx[];
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
export declare const QueryGetCommitRequest: {
    encode(message: QueryGetCommitRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCommitRequest;
    fromJSON(object: any): QueryGetCommitRequest;
    toJSON(message: QueryGetCommitRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCommitRequest>): QueryGetCommitRequest;
};
export declare const QueryGetCommitResponse: {
    encode(message: QueryGetCommitResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCommitResponse;
    fromJSON(object: any): QueryGetCommitResponse;
    toJSON(message: QueryGetCommitResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCommitResponse>): QueryGetCommitResponse;
};
export declare const QueryAllCommitRequest: {
    encode(message: QueryAllCommitRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCommitRequest;
    fromJSON(object: any): QueryAllCommitRequest;
    toJSON(message: QueryAllCommitRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCommitRequest>): QueryAllCommitRequest;
};
export declare const QueryAllCommitResponse: {
    encode(message: QueryAllCommitResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCommitResponse;
    fromJSON(object: any): QueryAllCommitResponse;
    toJSON(message: QueryAllCommitResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCommitResponse>): QueryAllCommitResponse;
};
export declare const QueryGetEncryptedtxRequest: {
    encode(message: QueryGetEncryptedtxRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetEncryptedtxRequest;
    fromJSON(object: any): QueryGetEncryptedtxRequest;
    toJSON(message: QueryGetEncryptedtxRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetEncryptedtxRequest>): QueryGetEncryptedtxRequest;
};
export declare const QueryGetEncryptedtxResponse: {
    encode(message: QueryGetEncryptedtxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetEncryptedtxResponse;
    fromJSON(object: any): QueryGetEncryptedtxResponse;
    toJSON(message: QueryGetEncryptedtxResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetEncryptedtxResponse>): QueryGetEncryptedtxResponse;
};
export declare const QueryAllEncryptedtxRequest: {
    encode(message: QueryAllEncryptedtxRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllEncryptedtxRequest;
    fromJSON(object: any): QueryAllEncryptedtxRequest;
    toJSON(message: QueryAllEncryptedtxRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllEncryptedtxRequest>): QueryAllEncryptedtxRequest;
};
export declare const QueryAllEncryptedtxResponse: {
    encode(message: QueryAllEncryptedtxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllEncryptedtxResponse;
    fromJSON(object: any): QueryAllEncryptedtxResponse;
    toJSON(message: QueryAllEncryptedtxResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllEncryptedtxResponse>): QueryAllEncryptedtxResponse;
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
    /** Queries a Commit by index. */
    Commit(request: QueryGetCommitRequest): Promise<QueryGetCommitResponse>;
    /** Queries a list of Commit items. */
    CommitAll(request: QueryAllCommitRequest): Promise<QueryAllCommitResponse>;
    /** Queries a Encryptedtx by index. */
    Encryptedtx(request: QueryGetEncryptedtxRequest): Promise<QueryGetEncryptedtxResponse>;
    /** Queries a list of Encryptedtx items. */
    EncryptedtxAll(request: QueryAllEncryptedtxRequest): Promise<QueryAllEncryptedtxResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Share(request: QueryGetShareRequest): Promise<QueryGetShareResponse>;
    ShareAll(request: QueryAllShareRequest): Promise<QueryAllShareResponse>;
    Target(request: QueryGetTargetRequest): Promise<QueryGetTargetResponse>;
    TargetAll(request: QueryAllTargetRequest): Promise<QueryAllTargetResponse>;
    Commit(request: QueryGetCommitRequest): Promise<QueryGetCommitResponse>;
    CommitAll(request: QueryAllCommitRequest): Promise<QueryAllCommitResponse>;
    Encryptedtx(request: QueryGetEncryptedtxRequest): Promise<QueryGetEncryptedtxResponse>;
    EncryptedtxAll(request: QueryAllEncryptedtxRequest): Promise<QueryAllEncryptedtxResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
