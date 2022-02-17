/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "pememoni.fairblock.fairblock";

export interface Target {
  index: string;
  description: string;
  targetHeight: string;
}

const baseTarget: object = { index: "", description: "", targetHeight: "" };

export const Target = {
  encode(message: Target, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.targetHeight !== "") {
      writer.uint32(26).string(message.targetHeight);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Target {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTarget } as Target;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.description = reader.string();
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

  fromJSON(object: any): Target {
    const message = { ...baseTarget } as Target;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.targetHeight !== undefined && object.targetHeight !== null) {
      message.targetHeight = String(object.targetHeight);
    } else {
      message.targetHeight = "";
    }
    return message;
  },

  toJSON(message: Target): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.description !== undefined &&
      (obj.description = message.description);
    message.targetHeight !== undefined &&
      (obj.targetHeight = message.targetHeight);
    return obj;
  },

  fromPartial(object: DeepPartial<Target>): Target {
    const message = { ...baseTarget } as Target;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
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
