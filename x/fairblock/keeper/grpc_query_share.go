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

func (k Keeper) ShareAll(c context.Context, req *types.QueryAllShareRequest) (*types.QueryAllShareResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var shares []types.Share
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	shareStore := prefix.NewStore(store, types.KeyPrefix(types.ShareKeyPrefix))

	pageRes, err := query.Paginate(shareStore, req.Pagination, func(key []byte, value []byte) error {
		var share types.Share
		if err := k.cdc.Unmarshal(value, &share); err != nil {
			return err
		}

		shares = append(shares, share)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllShareResponse{Share: shares, Pagination: pageRes}, nil
}

func (k Keeper) Share(c context.Context, req *types.QueryGetShareRequest) (*types.QueryGetShareResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetShare(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetShareResponse{Share: val}, nil
}
