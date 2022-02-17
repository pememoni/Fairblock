package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/pememoni/FairBlock/x/fairblock/types"
)

func (k msgServer) SubmitTarget(goCtx context.Context, msg *types.MsgSubmitTarget) (*types.MsgSubmitTargetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgSubmitTargetResponse{}, nil
}