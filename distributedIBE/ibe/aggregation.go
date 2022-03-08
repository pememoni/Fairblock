package ibe

import (
	"github.com/zbh888/crypto/ibe"
	"math/big"
	"vuvuzela.io/crypto/bn256"
)

// http://cryptojedi.org/papers/dclxvi-20100714.pdf

// https://github.com/vuvuzela/crypto/blob/master/bn256/bn256.go

// https://github.com/vuvuzela/crypto/blob/master/ibe/ibe.go

// publish Public key,
func AggregationPK(Commitments []Commitment, S []uint32) *ibe.MasterPublicKey {
	PkShares := []*ibe.MasterPublicKey{}
	for _, c := range Commitments {
		Pk := new(ibe.MasterPublicKey).SetValue(new(bn256.G1).ScalarMult(c.Value, lagrangeCoefficient(c.Index, S)))
		PkShares = append(PkShares, Pk)
	}
	PK := new(ibe.MasterPublicKey).Aggregate(PkShares...)
	return PK
}

// sender process the share and send to the dealer
func SecretShareProcess(share *big.Int, ID string, sender uint32) SentShare {
	retSk := new(ibe.MasterPrivateKey).SetValue(share)
	retIdentityK := ibe.Extract(retSk, []byte(ID))
	return SentShare{sender, retIdentityK}
}

func AggregationSK(ReceivedShares []SentShare, Commitments []Commitment, ID string, S []uint32) (*ibe.IdentityPrivateKey, []uint32) {
	SkShares := []*ibe.IdentityPrivateKey{}
	Invalid := []uint32{}
	Valid := []uint32{}
	ValidShare := []SentShare{}
	for i, _ := range ReceivedShares {
		receivedShare := ReceivedShares[i]
		commitment := Commitments[i]
		G2 := new(bn256.G2).HashToPoint([]byte(ID))
		if validityCheck(commitment, receivedShare, G2) {
			Valid = append(Valid, receivedShare.Index)
			ValidShare = append(ValidShare, receivedShare)
		} else {
			Invalid = append(Invalid, commitment.Index)
		}
	}

	for _, r := range ValidShare {
		processedShare := processSK(r, Valid)
		SkShares = append(SkShares, processedShare.Share)
	}

	SK := new(ibe.IdentityPrivateKey).Aggregate(SkShares...)
	return SK, Invalid
}
