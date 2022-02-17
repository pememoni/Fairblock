package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/pememoni/FairBlock/x/fairblock/types"
	"github.com/spf13/cobra"
)

func CmdListEncryptedtx() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-encryptedtx",
		Short: "list all encryptedtx",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllEncryptedtxRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.EncryptedtxAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowEncryptedtx() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-encryptedtx [index]",
		Short: "shows a encryptedtx",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argIndex := args[0]

			params := &types.QueryGetEncryptedtxRequest{
				Index: argIndex,
			}

			res, err := queryClient.Encryptedtx(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
