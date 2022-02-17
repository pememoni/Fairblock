package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/pememoni/FairBlock/x/fairblock/types"
)

// SetCommit set a specific commit in the store from its index
func (k Keeper) SetCommit(ctx sdk.Context, commit types.Commit) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommitKeyPrefix))
	b := k.cdc.MustMarshal(&commit)
	store.Set(types.CommitKey(
		commit.Index,
	), b)
}

// GetCommit returns a commit from its index
func (k Keeper) GetCommit(
	ctx sdk.Context,
	index string,

) (val types.Commit, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommitKeyPrefix))

	b := store.Get(types.CommitKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCommit removes a commit from the store
func (k Keeper) RemoveCommit(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommitKeyPrefix))
	store.Delete(types.CommitKey(
		index,
	))
}

// GetAllCommit returns all commit
func (k Keeper) GetAllCommit(ctx sdk.Context) (list []types.Commit) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommitKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Commit
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
