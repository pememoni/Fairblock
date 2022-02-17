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
export interface MsgRevealDecryption {
    creator: string;
    plaintext: string;
}
export interface MsgRevealDecryptionResponse {
}
export interface MsgSubmitShare {
    creator: string;
    keyShare: string;
    targetHeight: string;
}
export interface MsgSubmitShareResponse {
}
export interface MsgSubmitTarget {
    creator: string;
    description: string;
    targetHeight: string;
}
export interface MsgSubmitTargetResponse {
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
export declare const MsgRevealDecryption: {
    encode(message: MsgRevealDecryption, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRevealDecryption;
    fromJSON(object: any): MsgRevealDecryption;
    toJSON(message: MsgRevealDecryption): unknown;
    fromPartial(object: DeepPartial<MsgRevealDecryption>): MsgRevealDecryption;
};
export declare const MsgRevealDecryptionResponse: {
    encode(_: MsgRevealDecryptionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRevealDecryptionResponse;
    fromJSON(_: any): MsgRevealDecryptionResponse;
    toJSON(_: MsgRevealDecryptionResponse): unknown;
    fromPartial(_: DeepPartial<MsgRevealDecryptionResponse>): MsgRevealDecryptionResponse;
};
export declare const MsgSubmitShare: {
    encode(message: MsgSubmitShare, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSubmitShare;
    fromJSON(object: any): MsgSubmitShare;
    toJSON(message: MsgSubmitShare): unknown;
    fromPartial(object: DeepPartial<MsgSubmitShare>): MsgSubmitShare;
};
export declare const MsgSubmitShareResponse: {
    encode(_: MsgSubmitShareResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSubmitShareResponse;
    fromJSON(_: any): MsgSubmitShareResponse;
    toJSON(_: MsgSubmitShareResponse): unknown;
    fromPartial(_: DeepPartial<MsgSubmitShareResponse>): MsgSubmitShareResponse;
};
export declare const MsgSubmitTarget: {
    encode(message: MsgSubmitTarget, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSubmitTarget;
    fromJSON(object: any): MsgSubmitTarget;
    toJSON(message: MsgSubmitTarget): unknown;
    fromPartial(object: DeepPartial<MsgSubmitTarget>): MsgSubmitTarget;
};
export declare const MsgSubmitTargetResponse: {
    encode(_: MsgSubmitTargetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSubmitTargetResponse;
    fromJSON(_: any): MsgSubmitTargetResponse;
    toJSON(_: MsgSubmitTargetResponse): unknown;
    fromPartial(_: DeepPartial<MsgSubmitTargetResponse>): MsgSubmitTargetResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    SubmitEncrypted(request: MsgSubmitEncrypted): Promise<MsgSubmitEncryptedResponse>;
    CommitDecryption(request: MsgCommitDecryption): Promise<MsgCommitDecryptionResponse>;
    RevealDecryption(request: MsgRevealDecryption): Promise<MsgRevealDecryptionResponse>;
    SubmitShare(request: MsgSubmitShare): Promise<MsgSubmitShareResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    SubmitTarget(request: MsgSubmitTarget): Promise<MsgSubmitTargetResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SubmitEncrypted(request: MsgSubmitEncrypted): Promise<MsgSubmitEncryptedResponse>;
    CommitDecryption(request: MsgCommitDecryption): Promise<MsgCommitDecryptionResponse>;
    RevealDecryption(request: MsgRevealDecryption): Promise<MsgRevealDecryptionResponse>;
    SubmitShare(request: MsgSubmitShare): Promise<MsgSubmitShareResponse>;
    SubmitTarget(request: MsgSubmitTarget): Promise<MsgSubmitTargetResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
