package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/pememoni/FairBlock/x/fairblock/types"
)

func (k msgServer) CommitDecryption(goCtx context.Context, msg *types.MsgCommitDecryption) (*types.MsgCommitDecryptionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCommitDecryptionResponse{}, nil
}
