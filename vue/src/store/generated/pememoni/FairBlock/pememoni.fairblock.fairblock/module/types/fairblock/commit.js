/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "pememoni.fairblock.fairblock";
const baseCommit = {
    index: "",
    plaintextHash: "",
    plaintextDecryptorHash: "",
};
export const Commit = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCommit };
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
    fromJSON(object) {
        const message = { ...baseCommit };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        if (object.plaintextHash !== undefined && object.plaintextHash !== null) {
            message.plaintextHash = String(object.plaintextHash);
        }
        else {
            message.plaintextHash = "";
        }
        if (object.plaintextDecryptorHash !== undefined &&
            object.plaintextDecryptorHash !== null) {
            message.plaintextDecryptorHash = String(object.plaintextDecryptorHash);
        }
        else {
            message.plaintextDecryptorHash = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.plaintextHash !== undefined &&
            (obj.plaintextHash = message.plaintextHash);
        message.plaintextDecryptorHash !== undefined &&
            (obj.plaintextDecryptorHash = message.plaintextDecryptorHash);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCommit };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        if (object.plaintextHash !== undefined && object.plaintextHash !== null) {
            message.plaintextHash = object.plaintextHash;
        }
        else {
            message.plaintextHash = "";
        }
        if (object.plaintextDecryptorHash !== undefined &&
            object.plaintextDecryptorHash !== null) {
            message.plaintextDecryptorHash = object.plaintextDecryptorHash;
        }
        else {
            message.plaintextDecryptorHash = "";
        }
        return message;
    },
};
