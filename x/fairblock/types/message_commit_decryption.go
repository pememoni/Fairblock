package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCommitDecryption = "commit_decryption"

var _ sdk.Msg = &MsgCommitDecryption{}

func NewMsgCommitDecryption(creator string, plaintextHash string, plaintextDecryptorHash string) *MsgCommitDecryption {
	return &MsgCommitDecryption{
		Creator:                creator,
		PlaintextHash:          plaintextHash,
		PlaintextDecryptorHash: plaintextDecryptorHash,
	}
}

func (msg *MsgCommitDecryption) Route() string {
	return RouterKey
}

func (msg *MsgCommitDecryption) Type() string {
	return TypeMsgCommitDecryption
}

func (msg *MsgCommitDecryption) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCommitDecryption) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCommitDecryption) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
