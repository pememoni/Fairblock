/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "pememoni.fairblock.fairblock";

export interface Commit {
  index: string;
  plaintextHash: string;
  plaintextDecryptorHash: string;
}

const baseCommit: object = {
  index: "",
  plaintextHash: "",
  plaintextDecryptorHash: "",
};

export const Commit = {
  encode(message: Commit, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.plaintextHash !== "") {
      writer.uint32(18).string(message.plaintextHash);
    }
    if (message.plaintextDecryptorHash !== "") {
      writer.uint32(26).string(message.plaintextDecryptorHash);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Commit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommit } as Commit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.plaintextHash = reader.string();
          break;
        case 3:
          message.plaintextDecryptorHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Commit {
    const message = { ...baseCommit } as Commit;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.plaintextHash !== undefined && object.plaintextHash !== null) {
      message.plaintextHash = String(object.plaintextHash);
    } else {
      message.plaintextHash = "";
    }
    if (
      object.plaintextDecryptorHash !== undefined &&
      object.plaintextDecryptorHash !== null
    ) {
      message.plaintextDecryptorHash = String(object.plaintextDecryptorHash);
    } else {
      message.plaintextDecryptorHash = "";
    }
    return message;
  },

  toJSON(message: Commit): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.plaintextHash !== undefined &&
      (obj.plaintextHash = message.plaintextHash);
    message.plaintextDecryptorHash !== undefined &&
      (obj.plaintextDecryptorHash = message.plaintextDecryptorHash);
    return obj;
  },

  fromPartial(object: DeepPartial<Commit>): Commit {
    const message = { ...baseCommit } as Commit;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.plaintextHash !== undefined && object.plaintextHash !== null) {
      message.plaintextHash = object.plaintextHash;
    } else {
      message.plaintextHash = "";
    }
    if (
      object.plaintextDecryptorHash !== undefined &&
      object.plaintextDecryptorHash !== null
    ) {
      message.plaintextDecryptorHash = object.plaintextDecryptorHash;
    } else {
      message.plaintextDecryptorHash = "";
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
