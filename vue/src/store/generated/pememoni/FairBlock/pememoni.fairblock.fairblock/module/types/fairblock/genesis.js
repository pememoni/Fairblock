/* eslint-disable */
import { Params } from "../fairblock/params";
import { Share } from "../fairblock/share";
import { Target } from "../fairblock/target";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "pememoni.fairblock.fairblock";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.shareList) {
            Share.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.targetList) {
            Target.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.shareList = [];
        message.targetList = [];
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.shareList = [];
        message.targetList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.shareList) {
            obj.shareList = message.shareList.map((e) => e ? Share.toJSON(e) : undefined);
        }
        else {
            obj.shareList = [];
        }
        if (message.targetList) {
            obj.targetList = message.targetList.map((e) => e ? Target.toJSON(e) : undefined);
        }
        else {
            obj.targetList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.shareList = [];
        message.targetList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
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
        return message;
    },
};
