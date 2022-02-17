import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "pememoni.fairblock.fairblock";
export interface Encryptedtx {
    index: string;
    messageHash: string;
    encryption: string;
    plaintext: string;
    targetHeight: string;
    deposit: string;
    decryptor: string;
}
export declare const Encryptedtx: {
    encode(message: Encryptedtx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Encryptedtx;
    fromJSON(object: any): Encryptedtx;
    toJSON(message: Encryptedtx): unknown;
    fromPartial(object: DeepPartial<Encryptedtx>): Encryptedtx;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
