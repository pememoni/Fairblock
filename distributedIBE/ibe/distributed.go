package ibe

import (
	"math/big"
	"reflect"
)
import "github.com/zbh888/crypto/ibe"
import "vuvuzela.io/crypto/bn256"

type Commitment struct {
	Index uint32
	Value *bn256.G1
}

type SentShare struct {
	Index uint32
	Share *ibe.IdentityPrivateKey
}

// testing usage
func generateCommitment(share *big.Int, P *bn256.G1, index uint32) Commitment {
	return Commitment{index, new(bn256.G1).ScalarMult(P, share)}
}

func lagrangeCoefficient(signer uint32, S []uint32) *big.Int {
	nominator := big.NewInt(1)
	denominator := big.NewInt(1)
	for _, s := range S {
		if s != signer {
			nominator.Mul(nominator, big.NewInt(int64(s)))
			nominator.Mod(nominator, bn256.Order)

			denominator.Mul(denominator,
				big.NewInt(1).Add(
					big.NewInt(int64(s)),
					big.NewInt(1).Neg(big.NewInt(int64(signer)))))
			denominator.Mod(denominator, bn256.Order)
		}
	}
	return big.NewInt(1).Mul(
		nominator, big.NewInt(1).ModInverse(denominator, bn256.Order)) //Inverse will panic if denominator is 0
}

// The dealer should use this to make use of lagrange coefficient
func processSK(share SentShare, S []uint32) SentShare {

	lagrangeCoef := lagrangeCoefficient(share.Index, S)
	idenityKey := share.Share.ScalarMul(lagrangeCoef)
	return SentShare{share.Index, idenityKey}
}

// When player i sends its processed share
func validityCheck(c Commitment, s SentShare, G2 *bn256.G2) bool {

	// e(s1 * P, H(ID))
	a := bn256.Pair(c.Value, G2).Marshal()
	// e(P, s1 * H(ID))
	b := bn256.Pair(
		new(bn256.G1).ScalarBaseMult(big.NewInt(1)),
		s.Share.Value()).Marshal()
	return reflect.DeepEqual(a, b)
}
