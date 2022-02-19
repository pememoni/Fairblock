package keeper

import (
	"context"
	"crypto/sha256"
	"encoding/hex"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/pememoni/FairBlock/x/fairblock/types"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) RevealDecryption(goCtx context.Context, msg *types.MsgRevealDecryption) (*types.MsgRevealDecryptionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	// concatenate a decryption and a decryptor address and convert it to bytes
	var plaintextDecryptorBytes = []byte(msg.Decryption + msg.Creator)
	// find the hash of solution and address
	var plaintextDecryptorHash = sha256.Sum256(plaintextDecryptorBytes)
	// convert the hash to a string
	var plaintextDecryptorHashString = hex.EncodeToString(plaintextDecryptorHash[:])
	// try getting a commit using the the hash plaintext message and address
	_, isFound := k.GetCommit(ctx, plaintextDecryptorHashString)
	// return an error if a commit doesn't exist
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Commit with that hash doesn't exists")
	}
	// find a hash of the solution
	var decryptionHash = sha256.Sum256([]byte(msg.Decryption))
	// encode the solution hash to string
	var decryptionHashString = hex.EncodeToString(decryptionHash[:])
	var encryptedtx types.Encryptedtx
	// get a encrypted message from the store using the plaintext hash
	encryptedtx, isFound = k.GetEncryptedtx(ctx, decryptionHashString)
	// return an error if the decryption doesn't exist
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Encrypted message with this decryption hash doesn't exists")
	}
	// check for a valid address
	_, err := sdk.AccAddressFromBech32(encryptedtx.Decryptor)
	// return an error if an encrypted message has already been decrypted
	if err == nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Message has already been decrypted")
	}
	// save the decryptor address to the encrypted message
	encryptedtx.Decryptor = msg.Creator
	// save the correct decryption to the encrypted message
	encryptedtx.Decryption = msg.Decryption
	// get address of the module account
	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	// convert decryptor address from string to sdk.AccAddress
	decryptor, err := sdk.AccAddressFromBech32(encryptedtx.Decryptor)
	if err != nil {
		panic(err)
	}
	// parse tokens from a string to sdk.Coins
	deposit, err := sdk.ParseCoinsNormalized(encryptedtx.Deposit)
	if err != nil {
		panic(err)
	}
	// send tokens from a module account to the decryptor
	sdkError := k.bankKeeper.SendCoins(ctx, moduleAcct, decryptor, deposit)
	if sdkError != nil {
		return nil, sdkError
	}
	// save the udpated encrypted message to the store
	k.SetEncryptedtx(ctx, encryptedtx)
	return &types.MsgRevealDecryptionResponse{}, nil
}
