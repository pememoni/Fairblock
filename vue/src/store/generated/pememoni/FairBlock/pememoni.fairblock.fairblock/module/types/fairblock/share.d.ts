import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "pememoni.fairblock.fairblock";
export interface Share {
    index: string;
    keyShare: string;
    targetHeight: string;
}
export declare const Share: {
    encode(message: Share, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Share;
    fromJSON(object: any): Share;
    toJSON(message: Share): unknown;
    fromPartial(object: DeepPartial<Share>): Share;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
