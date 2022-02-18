package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/pememoni/FairBlock/x/fairblock/types"
)

func (k msgServer) SubmitShare(goCtx context.Context, msg *types.MsgSubmitShare) (*types.MsgSubmitShareResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_ = ctx

	// create a new block key share from the information in the message
	var share = types.Share{
		Index:        msg.KeyShare,
		KeyShare:     msg.KeyShare,
		TargetHeight: msg.TargetHeight,
	}
	k.SetShare(ctx, share)
	return &types.MsgSubmitShareResponse{}, nil
}
