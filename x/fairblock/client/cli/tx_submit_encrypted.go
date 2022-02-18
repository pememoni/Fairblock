package cli

import (
	"crypto/sha256"
	"encoding/hex"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/pememoni/FairBlock/x/fairblock/types"
)

func CmdSubmitEncrypted() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "submit-encrypted [plaintextHash] [encryption] [targetHeight] [deposit]",
		Short: "Broadcast message submit-encrypted",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}
			// find a hash of the plaintext
			plaintextHash := sha256.Sum256([]byte(args[0]))
			// convert the hash to string
			plaintextHashString := hex.EncodeToString(plaintextHash[:])
			argsEncryption := string(args[1])
			argsTargetHeight := string(args[2])
			argsDeposit := string(args[3])
			// create a new message
			msg := types.NewMsgSubmitEncrypted(clientCtx.GetFromAddress().String(), string(plaintextHashString), string(argsEncryption), string(argsTargetHeight), string(argsDeposit))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			// broadcast the transaction with the message to the blockchain
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}
	flags.AddTxFlagsToCmd(cmd)
	return cmd
}
