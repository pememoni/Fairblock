package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/pememoni/FairBlock/x/fairblock/types"
)

func (k msgServer) SubmitTarget(goCtx context.Context, msg *types.MsgSubmitTarget) (*types.MsgSubmitTargetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_ = ctx

	// create a new block key share from the information in the message
	var target = types.Target{
		Index:        msg.Description,
		Description:  msg.Description,
		TargetHeight: msg.TargetHeight,
	}
	k.SetTarget(ctx, target)
	return &types.MsgSubmitTargetResponse{}, nil
}
