package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/pememoni/FairBlock/x/fairblock/types"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) SubmitEncrypted(goCtx context.Context, msg *types.MsgSubmitEncrypted) (*types.MsgSubmitEncryptedResponse, error) {
	// get context that contains information about the environment, such as block height
	ctx := sdk.UnwrapSDKContext(goCtx)
	// create a new scavenge from the data in the MsgSubmitScavenge message
	var encryptedtx = types.encryptedtx{
		Index:        msg.MessageHash,
		Sender:       msg.Creator,
		Encryption:   msg.Encryption,
		MessageHash:  msg.MessageHash,
		TargetHeight: msg.TargetHeight,
		Deposit:      msg.Deposit,
	}
	// try getting an encrypted message from the store using the solution hash as the key
	_, isFound := k.GetEncryptedtx(ctx, encryptedtx.MessageHash)
	// return an error if an encrypted already exists in the store
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "encrypted message with this hash already exists")
	}
	// get address of the module account
	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	// convert the message creator address from a string into sdk.AccAddress
	sender, err := sdk.AccAddressFromBech32(encryptedtx.Sender)
	if err != nil {
		panic(err)
	}
	// convert tokens from string into sdk.Coins
	deposit, err := sdk.ParseCoinsNormalized(encryptedtx.Deposit)
	if err != nil {
		panic(err)
	}
	// send tokens from the creator to the module account
	sdkError := k.bankKeeper.SendCoins(ctx, sender, moduleAcct, deposit)
	if sdkError != nil {
		return nil, sdkError
	}
	// write the encryptedtx to the store
	k.SetEncryptedtx(ctx, encryptedtx)
	return &types.MsgSubmitEncryptedResponse{}, nil
}
