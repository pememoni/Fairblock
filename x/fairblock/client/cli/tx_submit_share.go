package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/pememoni/FairBlock/x/fairblock/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdSubmitShare() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "submit-share [key-share] [target-height]",
		Short: "Broadcast message submit-share",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argKeyShare := args[0]
			argTargetHeight := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSubmitShare(
				clientCtx.GetFromAddress().String(),
				argKeyShare,
				argTargetHeight,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
