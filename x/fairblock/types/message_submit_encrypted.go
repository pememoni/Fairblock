package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSubmitEncrypted = "submit_encrypted"

var _ sdk.Msg = &MsgSubmitEncrypted{}

func NewMsgSubmitEncrypted(creator string, messageHash string, encryption string, targetHeight string, deposit string) *MsgSubmitEncrypted {
	return &MsgSubmitEncrypted{
		Creator:      creator,
		MessageHash:  messageHash,
		Encryption:   encryption,
		TargetHeight: targetHeight,
		Deposit:      deposit,
	}
}

func (msg *MsgSubmitEncrypted) Route() string {
	return RouterKey
}

func (msg *MsgSubmitEncrypted) Type() string {
	return TypeMsgSubmitEncrypted
}

func (msg *MsgSubmitEncrypted) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSubmitEncrypted) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSubmitEncrypted) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
