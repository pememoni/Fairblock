/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "pememoni.fairblock.fairblock";
const baseTarget = { index: "", description: "", targetHeight: "" };
export const Target = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTarget };
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
    fromJSON(object) {
        const message = { ...baseTarget };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.targetHeight !== undefined && object.targetHeight !== null) {
            message.targetHeight = String(object.targetHeight);
        }
        else {
            message.targetHeight = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.description !== undefined &&
            (obj.description = message.description);
        message.targetHeight !== undefined &&
            (obj.targetHeight = message.targetHeight);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTarget };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.targetHeight !== undefined && object.targetHeight !== null) {
            message.targetHeight = object.targetHeight;
        }
        else {
            message.targetHeight = "";
        }
        return message;
    },
};
