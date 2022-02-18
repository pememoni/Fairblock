package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/pememoni/FairBlock/x/fairblock/types"
)

// SetShare set a specific share in the store from its index
func (k Keeper) SetShare(ctx sdk.Context, share types.Share) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ShareKeyPrefix))
	b := k.cdc.MustMarshal(&share)
	store.Set(types.ShareKey(
		share.Index,
	), b)
}

// GetShare returns a share from its index
func (k Keeper) GetShare(
	ctx sdk.Context,
	index string,

) (val types.Share, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ShareKeyPrefix))

	b := store.Get(types.ShareKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveShare removes a share from the store
func (k Keeper) RemoveShare(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ShareKeyPrefix))
	store.Delete(types.ShareKey(
		index,
	))
}

// GetAllShare returns all share
func (k Keeper) GetAllShare(ctx sdk.Context) (list []types.Share) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ShareKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Share
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
