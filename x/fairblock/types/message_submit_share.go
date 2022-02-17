package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSubmitShare = "submit_share"

var _ sdk.Msg = &MsgSubmitShare{}

func NewMsgSubmitShare(creator string, keyShare string, targetHeight string) *MsgSubmitShare {
	return &MsgSubmitShare{
		Creator:      creator,
		KeyShare:     keyShare,
		TargetHeight: targetHeight,
	}
}

func (msg *MsgSubmitShare) Route() string {
	return RouterKey
}

func (msg *MsgSubmitShare) Type() string {
	return TypeMsgSubmitShare
}

func (msg *MsgSubmitShare) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSubmitShare) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSubmitShare) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
