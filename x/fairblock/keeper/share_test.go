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

func createNShare(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Share {
	items := make([]types.Share, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetShare(ctx, items[i])
	}
	return items
}

func TestShareGet(t *testing.T) {
	keeper, ctx := keepertest.FairblockKeeper(t)
	items := createNShare(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetShare(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestShareRemove(t *testing.T) {
	keeper, ctx := keepertest.FairblockKeeper(t)
	items := createNShare(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveShare(ctx,
			item.Index,
		)
		_, found := keeper.GetShare(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestShareGetAll(t *testing.T) {
	keeper, ctx := keepertest.FairblockKeeper(t)
	items := createNShare(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllShare(ctx)),
	)
}
