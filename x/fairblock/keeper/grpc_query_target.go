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

func (k Keeper) TargetAll(c context.Context, req *types.QueryAllTargetRequest) (*types.QueryAllTargetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var targets []types.Target
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	targetStore := prefix.NewStore(store, types.KeyPrefix(types.TargetKeyPrefix))

	pageRes, err := query.Paginate(targetStore, req.Pagination, func(key []byte, value []byte) error {
		var target types.Target
		if err := k.cdc.Unmarshal(value, &target); err != nil {
			return err
		}

		targets = append(targets, target)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTargetResponse{Target: targets, Pagination: pageRes}, nil
}

func (k Keeper) Target(c context.Context, req *types.QueryGetTargetRequest) (*types.QueryGetTargetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetTarget(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetTargetResponse{Target: val}, nil
}
