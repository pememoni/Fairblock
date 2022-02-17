package fairblock_test

import (
	"testing"

	keepertest "github.com/pememoni/FairBlock/testutil/keeper"
	"github.com/pememoni/FairBlock/testutil/nullify"
	"github.com/pememoni/FairBlock/x/fairblock"
	"github.com/pememoni/FairBlock/x/fairblock/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		ShareList: []types.Share{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		TargetList: []types.Target{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.FairblockKeeper(t)
	fairblock.InitGenesis(ctx, *k, genesisState)
	got := fairblock.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.ShareList, got.ShareList)
	require.ElementsMatch(t, genesisState.TargetList, got.TargetList)
	// this line is used by starport scaffolding # genesis/test/assert
}
