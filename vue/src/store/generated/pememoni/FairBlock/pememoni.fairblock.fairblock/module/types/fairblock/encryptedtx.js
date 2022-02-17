/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "pememoni.fairblock.fairblock";
const baseEncryptedtx = {
    index: "",
    messageHash: "",
    encryption: "",
    plaintext: "",
    targetHeight: "",
    deposit: "",
    decryptor: "",
};
export const Encryptedtx = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        if (message.messageHash !== "") {
            writer.uint32(18).string(message.messageHash);
        }
        if (message.encryption !== "") {
            writer.uint32(26).string(message.encryption);
        }
        if (message.plaintext !== "") {
            writer.uint32(34).string(message.plaintext);
        }
        if (message.targetHeight !== "") {
            writer.uint32(42).string(message.targetHeight);
        }
        if (message.deposit !== "") {
            writer.uint32(50).string(message.deposit);
        }
        if (message.decryptor !== "") {
            writer.uint32(58).string(message.decryptor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEncryptedtx };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.messageHash = reader.string();
                    break;
                case 3:
                    message.encryption = reader.string();
                    break;
                case 4:
                    message.plaintext = reader.string();
                    break;
                case 5:
                    message.targetHeight = reader.string();
                    break;
                case 6:
                    message.deposit = reader.string();
                    break;
                case 7:
                    message.decryptor = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEncryptedtx };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        if (object.messageHash !== undefined && object.messageHash !== null) {
            message.messageHash = String(object.messageHash);
        }
        else {
            message.messageHash = "";
        }
        if (object.encryption !== undefined && object.encryption !== null) {
            message.encryption = String(object.encryption);
        }
        else {
            message.encryption = "";
        }
        if (object.plaintext !== undefined && object.plaintext !== null) {
            message.plaintext = String(object.plaintext);
        }
        else {
            message.plaintext = "";
        }
        if (object.targetHeight !== undefined && object.targetHeight !== null) {
            message.targetHeight = String(object.targetHeight);
        }
        else {
            message.targetHeight = "";
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = String(object.deposit);
        }
        else {
            message.deposit = "";
        }
        if (object.decryptor !== undefined && object.decryptor !== null) {
            message.decryptor = String(object.decryptor);
        }
        else {
            message.decryptor = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.messageHash !== undefined &&
            (obj.messageHash = message.messageHash);
        message.encryption !== undefined && (obj.encryption = message.encryption);
        message.plaintext !== undefined && (obj.plaintext = message.plaintext);
        message.targetHeight !== undefined &&
            (obj.targetHeight = message.targetHeight);
        message.deposit !== undefined && (obj.deposit = message.deposit);
        message.decryptor !== undefined && (obj.decryptor = message.decryptor);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEncryptedtx };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        if (object.messageHash !== undefined && object.messageHash !== null) {
            message.messageHash = object.messageHash;
        }
        else {
            message.messageHash = "";
        }
        if (object.encryption !== undefined && object.encryption !== null) {
            message.encryption = object.encryption;
        }
        else {
            message.encryption = "";
        }
        if (object.plaintext !== undefined && object.plaintext !== null) {
            message.plaintext = object.plaintext;
        }
        else {
            message.plaintext = "";
        }
        if (object.targetHeight !== undefined && object.targetHeight !== null) {
            message.targetHeight = object.targetHeight;
        }
        else {
            message.targetHeight = "";
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = object.deposit;
        }
        else {
            message.deposit = "";
        }
        if (object.decryptor !== undefined && object.decryptor !== null) {
            message.decryptor = object.decryptor;
        }
        else {
            message.decryptor = "";
        }
        return message;
    },
};
