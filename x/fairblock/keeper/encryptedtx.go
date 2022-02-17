package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/pememoni/FairBlock/x/fairblock/types"
)

// SetEncryptedtx set a specific encryptedtx in the store from its index
func (k Keeper) SetEncryptedtx(ctx sdk.Context, encryptedtx types.Encryptedtx) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EncryptedtxKeyPrefix))
	b := k.cdc.MustMarshal(&encryptedtx)
	store.Set(types.EncryptedtxKey(
		encryptedtx.Index,
	), b)
}

// GetEncryptedtx returns a encryptedtx from its index
func (k Keeper) GetEncryptedtx(
	ctx sdk.Context,
	index string,

) (val types.Encryptedtx, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EncryptedtxKeyPrefix))

	b := store.Get(types.EncryptedtxKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveEncryptedtx removes a encryptedtx from the store
func (k Keeper) RemoveEncryptedtx(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EncryptedtxKeyPrefix))
	store.Delete(types.EncryptedtxKey(
		index,
	))
}

// GetAllEncryptedtx returns all encryptedtx
func (k Keeper) GetAllEncryptedtx(ctx sdk.Context) (list []types.Encryptedtx) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EncryptedtxKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Encryptedtx
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
