package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRevealDecryption = "reveal_decryption"

var _ sdk.Msg = &MsgRevealDecryption{}

func NewMsgRevealDecryption(creator string, plaintext string) *MsgRevealDecryption {
	return &MsgRevealDecryption{
		Creator:   creator,
		Plaintext: plaintext,
	}
}

func (msg *MsgRevealDecryption) Route() string {
	return RouterKey
}

func (msg *MsgRevealDecryption) Type() string {
	return TypeMsgRevealDecryption
}

func (msg *MsgRevealDecryption) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRevealDecryption) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRevealDecryption) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
