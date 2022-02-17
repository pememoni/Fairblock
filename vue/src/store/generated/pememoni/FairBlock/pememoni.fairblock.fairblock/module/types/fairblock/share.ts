/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "pememoni.fairblock.fairblock";

export interface Share {
  index: string;
  keyShare: string;
  targetHeight: string;
}

const baseShare: object = { index: "", keyShare: "", targetHeight: "" };

export const Share = {
  encode(message: Share, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.keyShare !== "") {
      writer.uint32(18).string(message.keyShare);
    }
    if (message.targetHeight !== "") {
      writer.uint32(26).string(message.targetHeight);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Share {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseShare } as Share;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.keyShare = reader.string();
          break;
        case 3:
          message.targetHeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Share {
    const message = { ...baseShare } as Share;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.keyShare !== undefined && object.keyShare !== null) {
      message.keyShare = String(object.keyShare);
    } else {
      message.keyShare = "";
    }
    if (object.targetHeight !== undefined && object.targetHeight !== null) {
      message.targetHeight = String(object.targetHeight);
    } else {
      message.targetHeight = "";
    }
    return message;
  },

  toJSON(message: Share): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.keyShare !== undefined && (obj.keyShare = message.keyShare);
    message.targetHeight !== undefined &&
      (obj.targetHeight = message.targetHeight);
    return obj;
  },

  fromPartial(object: DeepPartial<Share>): Share {
    const message = { ...baseShare } as Share;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.keyShare !== undefined && object.keyShare !== null) {
      message.keyShare = object.keyShare;
    } else {
      message.keyShare = "";
    }
    if (object.targetHeight !== undefined && object.targetHeight !== null) {
      message.targetHeight = object.targetHeight;
    } else {
      message.targetHeight = "";
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
