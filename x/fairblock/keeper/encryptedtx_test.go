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

func createNEncryptedtx(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Encryptedtx {
	items := make([]types.Encryptedtx, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetEncryptedtx(ctx, items[i])
	}
	return items
}

func TestEncryptedtxGet(t *testing.T) {
	keeper, ctx := keepertest.FairblockKeeper(t)
	items := createNEncryptedtx(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetEncryptedtx(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestEncryptedtxRemove(t *testing.T) {
	keeper, ctx := keepertest.FairblockKeeper(t)
	items := createNEncryptedtx(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveEncryptedtx(ctx,
			item.Index,
		)
		_, found := keeper.GetEncryptedtx(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestEncryptedtxGetAll(t *testing.T) {
	keeper, ctx := keepertest.FairblockKeeper(t)
	items := createNEncryptedtx(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllEncryptedtx(ctx)),
	)
}
