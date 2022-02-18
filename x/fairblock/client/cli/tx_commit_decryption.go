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

func CmdCommitDecryption() *cobra.Command {
	cmd := &cobra.Command{
		// pass a decryption as the only argument
		Use:   "commit-decryption [decryption]",
		Short: "Broadcast message commit-decryption",
		// set the number of arguments to 1
		Args: cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}
			decryption := args[0]
			// find a hash of the solution
			plaintextHash := sha256.Sum256([]byte(decryption))
			// convert the solution hash to string
			plaintextHashString := hex.EncodeToString(plaintextHash[:])
			// convert a decryptor address to string
			var decryptor = clientCtx.GetFromAddress().String()
			// find the hash of solution and scavenger address
			var plaintextDecryptorHash = sha256.Sum256([]byte(decryption + decryptor))
			// convert the hash to string
			var plaintextDecryptorHashString = hex.EncodeToString(plaintextDecryptorHash[:])
			// create a new message
			msg := types.NewMsgCommitDecryption(clientCtx.GetFromAddress().String(), string(plaintextHashString), string(plaintextDecryptorHashString))
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
