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

func CmdCommitDecryption() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "commit-decryption [plaintext-hash] [plaintext-decryptor-hash]",
		Short: "Broadcast message commit-decryption",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argPlaintextHash := args[0]
			argPlaintextDecryptorHash := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCommitDecryption(
				clientCtx.GetFromAddress().String(),
				argPlaintextHash,
				argPlaintextDecryptorHash,
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
