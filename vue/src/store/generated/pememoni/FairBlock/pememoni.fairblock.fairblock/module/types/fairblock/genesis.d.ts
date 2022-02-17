import { Params } from "../fairblock/params";
import { Share } from "../fairblock/share";
import { Target } from "../fairblock/target";
import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "pememoni.fairblock.fairblock";
/** GenesisState defines the fairblock module's genesis state. */
export interface GenesisState {
    params: Params | undefined;
    shareList: Share[];
    /** this line is used by starport scaffolding # genesis/proto/state */
    targetList: Target[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
