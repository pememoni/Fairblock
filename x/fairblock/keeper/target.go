package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/pememoni/FairBlock/x/fairblock/types"
)

// SetTarget set a specific target in the store from its index
func (k Keeper) SetTarget(ctx sdk.Context, target types.Target) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TargetKeyPrefix))
	b := k.cdc.MustMarshal(&target)
	store.Set(types.TargetKey(
		target.Index,
	), b)
}

// GetTarget returns a target from its index
func (k Keeper) GetTarget(
	ctx sdk.Context,
	index string,

) (val types.Target, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TargetKeyPrefix))

	b := store.Get(types.TargetKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveTarget removes a target from the store
func (k Keeper) RemoveTarget(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TargetKeyPrefix))
	store.Delete(types.TargetKey(
		index,
	))
}

// GetAllTarget returns all target
func (k Keeper) GetAllTarget(ctx sdk.Context) (list []types.Target) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TargetKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Target
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
