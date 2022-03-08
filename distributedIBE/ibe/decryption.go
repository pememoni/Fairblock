package ibe

import (
	"encoding/hex"
	"github.com/zbh888/crypto/ibe"
)

func decrypt(C ibe.Ciphertext, sk *ibe.IdentityPrivateKey) (string, error) {
	res, _ := ibe.Decrypt(sk, C)
	return hex.EncodeToString(res), nil
}
