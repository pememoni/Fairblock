package fairblock

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/pememoni/FairBlock/x/fairblock/keeper"
	"github.com/pememoni/FairBlock/x/fairblock/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the share
	for _, elem := range genState.ShareList {
		k.SetShare(ctx, elem)
	}
	// Set all the target
	for _, elem := range genState.TargetList {
		k.SetTarget(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.ShareList = k.GetAllShare(ctx)
	genesis.TargetList = k.GetAllTarget(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
