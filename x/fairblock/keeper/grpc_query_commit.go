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

func (k Keeper) CommitAll(c context.Context, req *types.QueryAllCommitRequest) (*types.QueryAllCommitResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var commits []types.Commit
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	commitStore := prefix.NewStore(store, types.KeyPrefix(types.CommitKeyPrefix))

	pageRes, err := query.Paginate(commitStore, req.Pagination, func(key []byte, value []byte) error {
		var commit types.Commit
		if err := k.cdc.Unmarshal(value, &commit); err != nil {
			return err
		}

		commits = append(commits, commit)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCommitResponse{Commit: commits, Pagination: pageRes}, nil
}

func (k Keeper) Commit(c context.Context, req *types.QueryGetCommitRequest) (*types.QueryGetCommitResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCommit(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetCommitResponse{Commit: val}, nil
}
