package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/pememoni/FairBlock/x/fairblock/types"
)

func (k msgServer) CommitDecryption(goCtx context.Context, msg *types.MsgCommitDecryption) (*types.MsgCommitDecryptionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	// create a new commit from the information in the message
	var commit = types.Commit{
		Index:                  msg.PlaintextDecryptorHash,
		PlaintextHash:          msg.PlaintextHash,
		PlaintextDecryptorHash: msg.PlaintextDecryptorHash,
	}
	// try getting a commit from the store using the hash as the key
	_, isFound := k.GetCommit(ctx, commit.PlaintextDecryptorHash)
	// return an error if a commit already exists in the store
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Commit with that hash already exists")
	}
	// write commit to the store
	k.SetCommit(ctx, commit)
	return &types.MsgCommitDecryptionResponse{}, nil
}
