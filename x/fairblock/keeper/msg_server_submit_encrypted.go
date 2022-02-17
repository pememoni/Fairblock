package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/pememoni/FairBlock/x/fairblock/types"
)

func (k msgServer) SubmitEncrypted(goCtx context.Context, msg *types.MsgSubmitEncrypted) (*types.MsgSubmitEncryptedResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgSubmitEncryptedResponse{}, nil
}
