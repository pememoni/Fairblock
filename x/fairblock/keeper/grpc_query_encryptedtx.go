package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/pememoni/FairBlock/x/fairblock/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) EncryptedtxAll(c context.Context, req *types.QueryAllEncryptedtxRequest) (*types.QueryAllEncryptedtxResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var encryptedtxs []types.Encryptedtx
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	encryptedtxStore := prefix.NewStore(store, types.KeyPrefix(types.EncryptedtxKeyPrefix))

	pageRes, err := query.Paginate(encryptedtxStore, req.Pagination, func(key []byte, value []byte) error {
		var encryptedtx types.Encryptedtx
		if err := k.cdc.Unmarshal(value, &encryptedtx); err != nil {
			return err
		}

		encryptedtxs = append(encryptedtxs, encryptedtx)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllEncryptedtxResponse{Encryptedtx: encryptedtxs, Pagination: pageRes}, nil
}

func (k Keeper) Encryptedtx(c context.Context, req *types.QueryGetEncryptedtxRequest) (*types.QueryGetEncryptedtxResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetEncryptedtx(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetEncryptedtxResponse{Encryptedtx: val}, nil
}
