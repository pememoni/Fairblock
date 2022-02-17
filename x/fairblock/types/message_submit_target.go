package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSubmitTarget = "submit_target"

var _ sdk.Msg = &MsgSubmitTarget{}

func NewMsgSubmitTarget(creator string, description string, targetHeight string) *MsgSubmitTarget {
	return &MsgSubmitTarget{
		Creator:      creator,
		Description:  description,
		TargetHeight: targetHeight,
	}
}

func (msg *MsgSubmitTarget) Route() string {
	return RouterKey
}

func (msg *MsgSubmitTarget) Type() string {
	return TypeMsgSubmitTarget
}

func (msg *MsgSubmitTarget) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSubmitTarget) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSubmitTarget) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
