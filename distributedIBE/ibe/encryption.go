package ibe

import (
	"encoding/hex"
	"errors"
	"github.com/zbh888/crypto/ibe"
	"vuvuzela.io/crypto/rand"
)

func encrypt(message string, pk *ibe.MasterPublicKey, ID string) (ibe.Ciphertext, error) {
	var C ibe.Ciphertext
	messageBytes, err := hex.DecodeString(message)
	if err != nil {
		return C, errors.New("hex decoding fails")
	}
	C = ibe.Encrypt(rand.Reader, pk, []byte(ID), messageBytes)
	return C, nil
}
