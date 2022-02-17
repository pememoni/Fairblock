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

func CmdRevealDecryption() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "reveal-decryption [plaintext]",
		Short: "Broadcast message reveal-decryption",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argPlaintext := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRevealDecryption(
				clientCtx.GetFromAddress().String(),
				argPlaintext,
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
