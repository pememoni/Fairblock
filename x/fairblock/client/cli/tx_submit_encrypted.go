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

func CmdSubmitEncrypted() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "submit-encrypted [message-hash] [encryption] [target-height] [deposit]",
		Short: "Broadcast message submit-encrypted",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argMessageHash := args[0]
			argEncryption := args[1]
			argTargetHeight := args[2]
			argDeposit := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSubmitEncrypted(
				clientCtx.GetFromAddress().String(),
				argMessageHash,
				argEncryption,
				argTargetHeight,
				argDeposit,
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
