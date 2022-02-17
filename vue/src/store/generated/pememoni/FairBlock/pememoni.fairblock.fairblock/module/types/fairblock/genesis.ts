/* eslint-disable */
import { Params } from "../fairblock/params";
import { Share } from "../fairblock/share";
import { Target } from "../fairblock/target";
import { Commit } from "../fairblock/commit";
import { Encryptedtx } from "../fairblock/encryptedtx";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "pememoni.fairblock.fairblock";

/** GenesisState defines the fairblock module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  shareList: Share[];
  targetList: Target[];
  commitList: Commit[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  encryptedtxList: Encryptedtx[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.shareList) {
      Share.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.targetList) {
      Target.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.commitList) {
      Commit.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.encryptedtxList) {
      Encryptedtx.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.shareList = [];
    message.targetList = [];
    message.commitList = [];
    message.encryptedtxList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.shareList.push(Share.decode(reader, reader.uint32()));
          break;
        case 3:
          message.targetList.push(Target.decode(reader, reader.uint32()));
          break;
        case 4:
          message.commitList.push(Commit.decode(reader, reader.uint32()));
          break;
        case 5:
          message.encryptedtxList.push(
            Encryptedtx.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.shareList = [];
    message.targetList = [];
    message.commitList = [];
    message.encryptedtxList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.shareList !== undefined && object.shareList !== null) {
      for (const e of object.shareList) {
        message.shareList.push(Share.fromJSON(e));
      }
    }
    if (object.targetList !== undefined && object.targetList !== null) {
      for (const e of object.targetList) {
        message.targetList.push(Target.fromJSON(e));
      }
    }
    if (object.commitList !== undefined && object.commitList !== null) {
      for (const e of object.commitList) {
        message.commitList.push(Commit.fromJSON(e));
      }
    }
    if (
      object.encryptedtxList !== undefined &&
      object.encryptedtxList !== null
    ) {
      for (const e of object.encryptedtxList) {
        message.encryptedtxList.push(Encryptedtx.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.shareList) {
      obj.shareList = message.shareList.map((e) =>
        e ? Share.toJSON(e) : undefined
      );
    } else {
      obj.shareList = [];
    }
    if (message.targetList) {
      obj.targetList = message.targetList.map((e) =>
        e ? Target.toJSON(e) : undefined
      );
    } else {
      obj.targetList = [];
    }
    if (message.commitList) {
      obj.commitList = message.commitList.map((e) =>
        e ? Commit.toJSON(e) : undefined
      );
    } else {
      obj.commitList = [];
    }
    if (message.encryptedtxList) {
      obj.encryptedtxList = message.encryptedtxList.map((e) =>
        e ? Encryptedtx.toJSON(e) : undefined
      );
    } else {
      obj.encryptedtxList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.shareList = [];
    message.targetList = [];
    message.commitList = [];
    message.encryptedtxList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.shareList !== undefined && object.shareList !== null) {
      for (const e of object.shareList) {
        message.shareList.push(Share.fromPartial(e));
      }
    }
    if (object.targetList !== undefined && object.targetList !== null) {
      for (const e of object.targetList) {
        message.targetList.push(Target.fromPartial(e));
      }
    }
    if (object.commitList !== undefined && object.commitList !== null) {
      for (const e of object.commitList) {
        message.commitList.push(Commit.fromPartial(e));
      }
    }
    if (
      object.encryptedtxList !== undefined &&
      object.encryptedtxList !== null
    ) {
      for (const e of object.encryptedtxList) {
        message.encryptedtxList.push(Encryptedtx.fromPartial(e));
      }
    }
    return message;
  },
};

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
