# FairBlock

**FairBlock** is a front-running protection mechanism for blockchain applications.
While blockchain systems are quickly gaining popularity, front-running remains a major obstacle to fair exchange and other blockchain applications. FairBlock shows how to apply Identity-Based Encryption (IBE) to prevent front-running with minimal bandwidth overheads. In our approach, to decrypt a block of N transaction, the number of messages sent across the network only grows linearly with the size of decrypting committees, S. That is, to decrypt a set of N transactions sequenced at a specific block, a committee only needs to exchange $S$ decryption shares (independent of N). In comparison, previous solutions based on the threshold encryption schemes, where each transaction in a block must be decrypted separately by the committee, resulting in bandwidth overhead of N * S. This project has implemented FairBlock in the consensus layer i.e. consensus validators are also the ones who are responsible for extracting a private key for decrypting encrypted transactions in each block target. This project  
The blockchain for this application is built using Cosmos SDK and created with Starport. In an alternative [approach](https://github.com/pememoni/FairBlock-SC), FairBlock is implemented using smart contracts as the communication layer for smart contract blockchains such as Avalanche and Ethereum.

![Original Logo](https://user-images.githubusercontent.com/34263018/186832886-c4d7659c-3f31-43c1-ac04-39a9f3ef6b3d.png)


Check out my publications on FairBlock: 
[SecureComm 2022 paper](https://eprint.iacr.org/2022/1066)
[Thesis on FairBlock](https://uwspace.uwaterloo.ca/handle/10012/18554)


## Get started
### Blockchain
##### - Install Starport:
```
curl https://get.starport.network/starport@v0.19.2! | bash
```

##### - Set correct GOPATH:
```
export PATH=$PATH:$(go env GOPATH)/bin
```

##### - Run FairBlock Blockchain:
```
starport chain serve
```
`serve` command installs dependencies, builds, initializes, and starts FairBlock.


### Transactions

##### - Set target for encrypted messages e.g. buying an NFT, Auction, MEV opportunity:
```
FairBlockd tx fairblock submit-target "description of target" "block height that IBE private key should be extracted" --from "client"
```
##### - Submit encrpyted messages (bids, offers, or any other sensitive information that can be used for front-running attacks if leaked)
```
FairBlockd tx fairblock submit-encrypted "plaintext for message" "IBE Encrpytion of message with public key derived from target block height" "deposit"  --from "sender of encrypted message" 
```
plaintext of message will be converted to SHA256 on the client as a cryptographic commitment. The messages are never leaked to any public entity which might want to front-run

##### - Validators Submit their IBE private key share for target block height
```
FairBlockd tx fairblock submit-share "IBE key share for alice" "target block height" --from "alice"
```
##### - Original sender submits a commitment for his/her plaintext of encrypted message OR a decrpytor uses IBE private key shares and computes a private key to decrypt the encrypted message with the incentive of taking the original sender's deposit
```
FairBlockd tx fairblock commit-decryption "plaintext of message"  --from "sender or decryptor"
```
The plaintext of commited decryption will be converted to SHA256 on the client side so the plaintexts are never leaked to any public entity which might want to front-run
##### - Original sender or the decryptor Reveals the plaintext of his/her commited decryption to take back or win the deposit
```
FairBlockd tx fairblock reveal-decryption "plaintext of message" --from "sender or decryptor" 
```

### Queries

##### - Query current block information
```
FairBlockd q block
```

##### - Query target
```
FairBlockd q fairblock list-target --output json
```
##### - Query shares
```
FairBlockd q fairblock list-share --output json
```
##### - Query encrypted messages
```
FairBlockd q fairblock list-encryptedtx --output json
```
##### - Query commits
```
FairBlockd q fairblock list-commit --output json
```

### Configure

The blockchain in development can be configured with `config.yml`.

### Web Frontend

Run the following commands to install dependencies and start a Vue.js-based web app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages.

### Distributed Identity-Based Encryption

1. `cd distributedIBE/ibe`
2. `go mod tidy`
3. `go test`

* This project has been built based on Vuvuzela and tcpaillier projects
* This implementation has not been vetted for a production setting, use with caution
* This project has been tested on Linux
## Useful Resources

[Identity-Based Encryption](https://en.wikipedia.org/wiki/Identity-based_encryption)

[Boneh-Franklin IBE Scheme](https://crypto.stanford.edu/~dabo/papers/bfibe.pdf)

[DKG protocol on Blockchain for IBE without a trusted dealer](https://github.com/anoma/ferveo)

[Ethereum is a Dark Forest](https://www.paradigm.xyz/2020/08/ethereum-is-a-dark-forest)

[Front-running presentation by Phil Daian at IEEE Symposium on Security and Privacy](https://www.youtube.com/watch?v=vR1v7AQ8i3k&feature=youtu.be)

[Escaping the Dark Forest](https://samczsun.com/escaping-the-dark-forest/)
