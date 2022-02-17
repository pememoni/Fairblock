import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSubmitEncrypted } from "./types/fairblock/tx";
import { MsgCommitDecryption } from "./types/fairblock/tx";
import { MsgSubmitShare } from "./types/fairblock/tx";
import { MsgSubmitTarget } from "./types/fairblock/tx";
import { MsgRevealDecryption } from "./types/fairblock/tx";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgSubmitEncrypted: (data: MsgSubmitEncrypted) => EncodeObject;
    msgCommitDecryption: (data: MsgCommitDecryption) => EncodeObject;
    msgSubmitShare: (data: MsgSubmitShare) => EncodeObject;
    msgSubmitTarget: (data: MsgSubmitTarget) => EncodeObject;
    msgRevealDecryption: (data: MsgRevealDecryption) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
