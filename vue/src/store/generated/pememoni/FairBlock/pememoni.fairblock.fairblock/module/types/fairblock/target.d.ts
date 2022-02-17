import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "pememoni.fairblock.fairblock";
export interface Target {
    index: string;
    description: string;
    targetHeight: string;
}
export declare const Target: {
    encode(message: Target, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Target;
    fromJSON(object: any): Target;
    toJSON(message: Target): unknown;
    fromPartial(object: DeepPartial<Target>): Target;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
