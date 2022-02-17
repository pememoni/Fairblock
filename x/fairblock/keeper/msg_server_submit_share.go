package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/pememoni/FairBlock/x/fairblock/types"
)

func (k msgServer) SubmitShare(goCtx context.Context, msg *types.MsgSubmitShare) (*types.MsgSubmitShareResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgSubmitShareResponse{}, nil
}
