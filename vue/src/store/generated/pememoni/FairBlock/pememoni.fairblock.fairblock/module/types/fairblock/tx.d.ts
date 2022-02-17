import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "pememoni.fairblock.fairblock";
export interface MsgSubmitEncrypted {
    creator: string;
    messageHash: string;
    encryption: string;
    targetHeight: string;
    deposit: string;
}
export interface MsgSubmitEncryptedResponse {
}
export interface MsgCommitDecryption {
    creator: string;
    plaintextHash: string;
    plaintextDecryptorHash: string;
}
export interface MsgCommitDecryptionResponse {
}
export declare const MsgSubmitEncrypted: {
    encode(message: MsgSubmitEncrypted, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSubmitEncrypted;
    fromJSON(object: any): MsgSubmitEncrypted;
    toJSON(message: MsgSubmitEncrypted): unknown;
    fromPartial(object: DeepPartial<MsgSubmitEncrypted>): MsgSubmitEncrypted;
};
export declare const MsgSubmitEncryptedResponse: {
    encode(_: MsgSubmitEncryptedResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSubmitEncryptedResponse;
    fromJSON(_: any): MsgSubmitEncryptedResponse;
    toJSON(_: MsgSubmitEncryptedResponse): unknown;
    fromPartial(_: DeepPartial<MsgSubmitEncryptedResponse>): MsgSubmitEncryptedResponse;
};
export declare const MsgCommitDecryption: {
    encode(message: MsgCommitDecryption, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCommitDecryption;
    fromJSON(object: any): MsgCommitDecryption;
    toJSON(message: MsgCommitDecryption): unknown;
    fromPartial(object: DeepPartial<MsgCommitDecryption>): MsgCommitDecryption;
};
export declare const MsgCommitDecryptionResponse: {
    encode(_: MsgCommitDecryptionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCommitDecryptionResponse;
    fromJSON(_: any): MsgCommitDecryptionResponse;
    toJSON(_: MsgCommitDecryptionResponse): unknown;
    fromPartial(_: DeepPartial<MsgCommitDecryptionResponse>): MsgCommitDecryptionResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    SubmitEncrypted(request: MsgSubmitEncrypted): Promise<MsgSubmitEncryptedResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CommitDecryption(request: MsgCommitDecryption): Promise<MsgCommitDecryptionResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SubmitEncrypted(request: MsgSubmitEncrypted): Promise<MsgSubmitEncryptedResponse>;
    CommitDecryption(request: MsgCommitDecryption): Promise<MsgCommitDecryptionResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
