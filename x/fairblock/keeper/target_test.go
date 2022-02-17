package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/pememoni/FairBlock/testutil/keeper"
	"github.com/pememoni/FairBlock/testutil/nullify"
	"github.com/pememoni/FairBlock/x/fairblock/keeper"
	"github.com/pememoni/FairBlock/x/fairblock/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNTarget(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Target {
	items := make([]types.Target, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetTarget(ctx, items[i])
	}
	return items
}

func TestTargetGet(t *testing.T) {
	keeper, ctx := keepertest.FairblockKeeper(t)
	items := createNTarget(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetTarget(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestTargetRemove(t *testing.T) {
	keeper, ctx := keepertest.FairblockKeeper(t)
	items := createNTarget(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTarget(ctx,
			item.Index,
		)
		_, found := keeper.GetTarget(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestTargetGetAll(t *testing.T) {
	keeper, ctx := keepertest.FairblockKeeper(t)
	items := createNTarget(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllTarget(ctx)),
	)
}
