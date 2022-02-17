/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "pememoni.fairblock.fairblock";
const baseShare = { index: "", keyShare: "", targetHeight: "" };
export const Share = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseShare };
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
    fromJSON(object) {
        const message = { ...baseShare };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        if (object.keyShare !== undefined && object.keyShare !== null) {
            message.keyShare = String(object.keyShare);
        }
        else {
            message.keyShare = "";
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
        message.keyShare !== undefined && (obj.keyShare = message.keyShare);
        message.targetHeight !== undefined &&
            (obj.targetHeight = message.targetHeight);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseShare };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        if (object.keyShare !== undefined && object.keyShare !== null) {
            message.keyShare = object.keyShare;
        }
        else {
            message.keyShare = "";
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
