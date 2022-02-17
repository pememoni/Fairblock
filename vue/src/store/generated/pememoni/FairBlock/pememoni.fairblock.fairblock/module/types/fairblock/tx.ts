/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "pememoni.fairblock.fairblock";

export interface MsgSubmitEncrypted {
  creator: string;
  messageHash: string;
  encryption: string;
  targetHeight: string;
  deposit: string;
}

export interface MsgSubmitEncryptedResponse {}

export interface MsgCommitDecryption {
  creator: string;
  plaintextHash: string;
  plaintextDecryptorHash: string;
}

export interface MsgCommitDecryptionResponse {}

export interface MsgRevealDecryption {
  creator: string;
  plaintext: string;
}

export interface MsgRevealDecryptionResponse {}

export interface MsgSubmitShare {
  creator: string;
  keyShare: string;
  targetHeight: string;
}

export interface MsgSubmitShareResponse {}

const baseMsgSubmitEncrypted: object = {
  creator: "",
  messageHash: "",
  encryption: "",
  targetHeight: "",
  deposit: "",
};

export const MsgSubmitEncrypted = {
  encode(
    message: MsgSubmitEncrypted,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.messageHash !== "") {
      writer.uint32(18).string(message.messageHash);
    }
    if (message.encryption !== "") {
      writer.uint32(26).string(message.encryption);
    }
    if (message.targetHeight !== "") {
      writer.uint32(34).string(message.targetHeight);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSubmitEncrypted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitEncrypted } as MsgSubmitEncrypted;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.messageHash = reader.string();
          break;
        case 3:
          message.encryption = reader.string();
          break;
        case 4:
          message.targetHeight = reader.string();
          break;
        case 5:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitEncrypted {
    const message = { ...baseMsgSubmitEncrypted } as MsgSubmitEncrypted;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.messageHash !== undefined && object.messageHash !== null) {
      message.messageHash = String(object.messageHash);
    } else {
      message.messageHash = "";
    }
    if (object.encryption !== undefined && object.encryption !== null) {
      message.encryption = String(object.encryption);
    } else {
      message.encryption = "";
    }
    if (object.targetHeight !== undefined && object.targetHeight !== null) {
      message.targetHeight = String(object.targetHeight);
    } else {
      message.targetHeight = "";
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = String(object.deposit);
    } else {
      message.deposit = "";
    }
    return message;
  },

  toJSON(message: MsgSubmitEncrypted): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.messageHash !== undefined &&
      (obj.messageHash = message.messageHash);
    message.encryption !== undefined && (obj.encryption = message.encryption);
    message.targetHeight !== undefined &&
      (obj.targetHeight = message.targetHeight);
    message.deposit !== undefined && (obj.deposit = message.deposit);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSubmitEncrypted>): MsgSubmitEncrypted {
    const message = { ...baseMsgSubmitEncrypted } as MsgSubmitEncrypted;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.messageHash !== undefined && object.messageHash !== null) {
      message.messageHash = object.messageHash;
    } else {
      message.messageHash = "";
    }
    if (object.encryption !== undefined && object.encryption !== null) {
      message.encryption = object.encryption;
    } else {
      message.encryption = "";
    }
    if (object.targetHeight !== undefined && object.targetHeight !== null) {
      message.targetHeight = object.targetHeight;
    } else {
      message.targetHeight = "";
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    } else {
      message.deposit = "";
    }
    return message;
  },
};

const baseMsgSubmitEncryptedResponse: object = {};

export const MsgSubmitEncryptedResponse = {
  encode(
    _: MsgSubmitEncryptedResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSubmitEncryptedResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSubmitEncryptedResponse,
    } as MsgSubmitEncryptedResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSubmitEncryptedResponse {
    const message = {
      ...baseMsgSubmitEncryptedResponse,
    } as MsgSubmitEncryptedResponse;
    return message;
  },

  toJSON(_: MsgSubmitEncryptedResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSubmitEncryptedResponse>
  ): MsgSubmitEncryptedResponse {
    const message = {
      ...baseMsgSubmitEncryptedResponse,
    } as MsgSubmitEncryptedResponse;
    return message;
  },
};

const baseMsgCommitDecryption: object = {
  creator: "",
  plaintextHash: "",
  plaintextDecryptorHash: "",
};

export const MsgCommitDecryption = {
  encode(
    message: MsgCommitDecryption,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.plaintextHash !== "") {
      writer.uint32(18).string(message.plaintextHash);
    }
    if (message.plaintextDecryptorHash !== "") {
      writer.uint32(26).string(message.plaintextDecryptorHash);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCommitDecryption {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCommitDecryption } as MsgCommitDecryption;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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

  fromJSON(object: any): MsgCommitDecryption {
    const message = { ...baseMsgCommitDecryption } as MsgCommitDecryption;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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

  toJSON(message: MsgCommitDecryption): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.plaintextHash !== undefined &&
      (obj.plaintextHash = message.plaintextHash);
    message.plaintextDecryptorHash !== undefined &&
      (obj.plaintextDecryptorHash = message.plaintextDecryptorHash);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCommitDecryption>): MsgCommitDecryption {
    const message = { ...baseMsgCommitDecryption } as MsgCommitDecryption;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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

const baseMsgCommitDecryptionResponse: object = {};

export const MsgCommitDecryptionResponse = {
  encode(
    _: MsgCommitDecryptionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCommitDecryptionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCommitDecryptionResponse,
    } as MsgCommitDecryptionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCommitDecryptionResponse {
    const message = {
      ...baseMsgCommitDecryptionResponse,
    } as MsgCommitDecryptionResponse;
    return message;
  },

  toJSON(_: MsgCommitDecryptionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCommitDecryptionResponse>
  ): MsgCommitDecryptionResponse {
    const message = {
      ...baseMsgCommitDecryptionResponse,
    } as MsgCommitDecryptionResponse;
    return message;
  },
};

const baseMsgRevealDecryption: object = { creator: "", plaintext: "" };

export const MsgRevealDecryption = {
  encode(
    message: MsgRevealDecryption,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.plaintext !== "") {
      writer.uint32(18).string(message.plaintext);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRevealDecryption {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRevealDecryption } as MsgRevealDecryption;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.plaintext = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevealDecryption {
    const message = { ...baseMsgRevealDecryption } as MsgRevealDecryption;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.plaintext !== undefined && object.plaintext !== null) {
      message.plaintext = String(object.plaintext);
    } else {
      message.plaintext = "";
    }
    return message;
  },

  toJSON(message: MsgRevealDecryption): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.plaintext !== undefined && (obj.plaintext = message.plaintext);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRevealDecryption>): MsgRevealDecryption {
    const message = { ...baseMsgRevealDecryption } as MsgRevealDecryption;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.plaintext !== undefined && object.plaintext !== null) {
      message.plaintext = object.plaintext;
    } else {
      message.plaintext = "";
    }
    return message;
  },
};

const baseMsgRevealDecryptionResponse: object = {};

export const MsgRevealDecryptionResponse = {
  encode(
    _: MsgRevealDecryptionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRevealDecryptionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRevealDecryptionResponse,
    } as MsgRevealDecryptionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRevealDecryptionResponse {
    const message = {
      ...baseMsgRevealDecryptionResponse,
    } as MsgRevealDecryptionResponse;
    return message;
  },

  toJSON(_: MsgRevealDecryptionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRevealDecryptionResponse>
  ): MsgRevealDecryptionResponse {
    const message = {
      ...baseMsgRevealDecryptionResponse,
    } as MsgRevealDecryptionResponse;
    return message;
  },
};

const baseMsgSubmitShare: object = {
  creator: "",
  keyShare: "",
  targetHeight: "",
};

export const MsgSubmitShare = {
  encode(message: MsgSubmitShare, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.keyShare !== "") {
      writer.uint32(18).string(message.keyShare);
    }
    if (message.targetHeight !== "") {
      writer.uint32(26).string(message.targetHeight);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSubmitShare {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitShare } as MsgSubmitShare;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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

  fromJSON(object: any): MsgSubmitShare {
    const message = { ...baseMsgSubmitShare } as MsgSubmitShare;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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

  toJSON(message: MsgSubmitShare): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.keyShare !== undefined && (obj.keyShare = message.keyShare);
    message.targetHeight !== undefined &&
      (obj.targetHeight = message.targetHeight);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSubmitShare>): MsgSubmitShare {
    const message = { ...baseMsgSubmitShare } as MsgSubmitShare;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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

const baseMsgSubmitShareResponse: object = {};

export const MsgSubmitShareResponse = {
  encode(_: MsgSubmitShareResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSubmitShareResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitShareResponse } as MsgSubmitShareResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSubmitShareResponse {
    const message = { ...baseMsgSubmitShareResponse } as MsgSubmitShareResponse;
    return message;
  },

  toJSON(_: MsgSubmitShareResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSubmitShareResponse>): MsgSubmitShareResponse {
    const message = { ...baseMsgSubmitShareResponse } as MsgSubmitShareResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SubmitEncrypted(
    request: MsgSubmitEncrypted
  ): Promise<MsgSubmitEncryptedResponse>;
  CommitDecryption(
    request: MsgCommitDecryption
  ): Promise<MsgCommitDecryptionResponse>;
  RevealDecryption(
    request: MsgRevealDecryption
  ): Promise<MsgRevealDecryptionResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SubmitShare(request: MsgSubmitShare): Promise<MsgSubmitShareResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  SubmitEncrypted(
    request: MsgSubmitEncrypted
  ): Promise<MsgSubmitEncryptedResponse> {
    const data = MsgSubmitEncrypted.encode(request).finish();
    const promise = this.rpc.request(
      "pememoni.fairblock.fairblock.Msg",
      "SubmitEncrypted",
      data
    );
    return promise.then((data) =>
      MsgSubmitEncryptedResponse.decode(new Reader(data))
    );
  }

  CommitDecryption(
    request: MsgCommitDecryption
  ): Promise<MsgCommitDecryptionResponse> {
    const data = MsgCommitDecryption.encode(request).finish();
    const promise = this.rpc.request(
      "pememoni.fairblock.fairblock.Msg",
      "CommitDecryption",
      data
    );
    return promise.then((data) =>
      MsgCommitDecryptionResponse.decode(new Reader(data))
    );
  }

  RevealDecryption(
    request: MsgRevealDecryption
  ): Promise<MsgRevealDecryptionResponse> {
    const data = MsgRevealDecryption.encode(request).finish();
    const promise = this.rpc.request(
      "pememoni.fairblock.fairblock.Msg",
      "RevealDecryption",
      data
    );
    return promise.then((data) =>
      MsgRevealDecryptionResponse.decode(new Reader(data))
    );
  }

  SubmitShare(request: MsgSubmitShare): Promise<MsgSubmitShareResponse> {
    const data = MsgSubmitShare.encode(request).finish();
    const promise = this.rpc.request(
      "pememoni.fairblock.fairblock.Msg",
      "SubmitShare",
      data
    );
    return promise.then((data) =>
      MsgSubmitShareResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
