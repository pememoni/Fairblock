package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/pememoni/FairBlock/x/fairblock/types"
)

func (k msgServer) RevealDecryption(goCtx context.Context, msg *types.MsgRevealDecryption) (*types.MsgRevealDecryptionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgRevealDecryptionResponse{}, nil
}
