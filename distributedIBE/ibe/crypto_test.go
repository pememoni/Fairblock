package ibe

import (
	"crypto/rand"
	"github.com/zbh888/crypto/ibe"
	"log"
	"math/big"
	"reflect"
	"testing"
	"time"
	"vuvuzela.io/crypto/bn256"
)

// test for encryption, extracting private key for ID, and decryption with a centralized trusted third party
func TestIBE_Centralized(t *testing.T) {
	PK, secret := ibe.Setup(rand.Reader)
	message := "000000000000000000000000000000000000000000000000000000000000004000000000000000000000000037f20d96a0ed94e7ae25661ffdcb00155b27ca4d0000000000000000000000000000000000000000000000000000000000000002c0de000000000000000000000000000000000000000000000000000000000000"
	ID := "3000"
	SK := ibe.Extract(secret, []byte(ID))
	// Encryption
	Cipher, err := encrypt(message, PK, ID)
	if err != nil {
		t.Error(err)
	}
	m, err := decrypt(Cipher, SK)
	if err != nil {
		t.Error(err)
	}
	if !reflect.DeepEqual(message, m) {
		t.Error("Not equal")
	}

}

func f(x int64) *big.Int {
	return big.NewInt(1234 + 166*x + 94*x*x)
}

func getIndices(min, max int) []uint32 {
	a := make([]uint32, max-min+1)
	for i := range a {
		a[i] = uint32(min + i)
	}
	return a
}

const polynomialTestDegree = 667

// threshold 3, player 3, all honest
// These tests are built with the assumption that Distributed Key Generation have already been done by keepers
// For the sake of simplicity of tests, we assume a central TTP with a random msk for shamir secret sharing
// In practice, the TTP can be eliminated with a DKG protocol. Next steps will remain the same and tests are equally valid
func TestParties_AllHonest(t *testing.T) {
	msk, _ := rand.Int(rand.Reader, bn256.Order)
	p, err := createRandomPolynomial(polynomialTestDegree, msk, bn256.Order)
	if err != nil {
		t.Errorf("could not create a random polynomial")
		return
	}
	S := getIndices(1, 1000)
	indexShares := make([]*big.Int, 0)
	for _, element := range S {
		indexShares = append(indexShares, p.eval(big.NewInt(int64(element))))
	}

	secret := big.NewInt(0)
	for i, element := range S {
		indexShares[i].Mul(lagrangeCoefficient(element, S), indexShares[i])
	}
	for i := range S {
		secret.Add(secret, indexShares[i])
	}

	secret.Mod(secret, bn256.Order)

	// msk has been recovered
	if secret.Cmp(msk) != 0 {
		t.Error("failed to recover msk")
	}

	P := new(bn256.G1).ScalarBaseMult(big.NewInt(1))
	commitments := make([]Commitment, 0)
	for i, element := range S {
		commitments = append(commitments, generateCommitment(indexShares[i], P, element))
	}
	PK := AggregationPK(commitments, S)
	message := "000000000000000000000000000000000000000000000000000000000000004000000000000000000000000037f20d96a0ed94e7ae25661ffdcb00155b27ca4d0000000000000000000000000000000000000000000000000000000000000002c0de000000000000000000000000000000000000000000000000000000000000"
	ID := "3001"
	// Then they want to send the processed share
	sentshares := make([]SentShare, 0)
	for i, element := range S {
		sentshares = append(sentshares, SecretShareProcess(indexShares[i], ID, element))
	}

	Cipher, _ := encrypt(message, PK, ID)
	start := time.Now()
	SK, _ := AggregationSK(sentshares, commitments, ID, S)
	m, _ := decrypt(Cipher, SK)
	elapsed := time.Since(start)
	log.Printf("private key extraction and decryption took %s", elapsed)
	if !reflect.DeepEqual(message, m) {
		t.Error("not equal")
	}
}

// At least t + 1 honest parties is required to extract compute msk or extract private key for each ID
func TestParties_HonestLessT(t *testing.T) {
	S := []uint32{2, 4, 5}
	index2Share := f(2)
	index4Share := f(4)
	index5Share := f(5)
	P := new(bn256.G1).ScalarBaseMult(big.NewInt(1))
	c2 := generateCommitment(index2Share, P, 2)
	c4 := generateCommitment(index4Share, P, 4)
	c5 := generateCommitment(index5Share, P, 5)
	PK := AggregationPK([]Commitment{c2, c4, c5}, S)
	message := "000000000000000000000000000000000000000000000000000000000000004000000000000000000000000037f20d96a0ed94e7ae25661ffdcb00155b27ca4d0000000000000000000000000000000000000000000000000000000000000002c0de000000000000000000000000000000000000000000000000000000000000"
	ID := "3000"
	// Then they want to send the processed share
	s2 := SecretShareProcess(index2Share, ID, 2)
	s4 := SecretShareProcess(index4Share, ID, 4)
	Cipher, _ := encrypt(message, PK, ID)

	SK, _ := AggregationSK([]SentShare{s2, s4}, []Commitment{c2, c4}, ID, S)
	m, _ := decrypt(Cipher, SK)
	if reflect.DeepEqual(message, m) {
		t.Error("should be not equal")
	}
}

// Five keepers in total, threshold = 3, 4 of them participated in decryption
func TestIBE_Distributed(t *testing.T) {
	msk, _ := rand.Int(rand.Reader, bn256.Order)
	p, err := createRandomPolynomial(2, msk, bn256.Order)

	if err != nil {
		t.Errorf("could not create a random polynomial")
		return
	}

	//=============================== After DKG ================================
	// After DKG, they will have their secret shares
	index1Share := p.eval(big.NewInt(int64(1)))
	index2Share := p.eval(big.NewInt(int64(2)))
	index3Share := p.eval(big.NewInt(int64(3)))
	index4Share := p.eval(big.NewInt(int64(4)))
	index5Share := p.eval(big.NewInt(int64(5)))

	// P is the base of G1
	P := new(bn256.G1).ScalarBaseMult(big.NewInt(1))
	// Also after VSS, commitments are public to every one
	c1 := generateCommitment(index1Share, P, 1)
	c2 := generateCommitment(index2Share, P, 2)
	c3 := generateCommitment(index3Share, P, 3)
	c4 := generateCommitment(index4Share, P, 4)
	c5 := generateCommitment(index5Share, P, 5)
	// So they could simply compute the public key by aggregating commitments
	// Then users are able to use this key for encryption
	PK := AggregationPK([]Commitment{c1, c2, c3, c4, c5}, []uint32{1, 2, 3, 4, 5})

	//=============================== From User view ================================
	// The message: string in hex
	// ID         : Any string but in this setting, a specific block number
	message := "000000000000000000000000000000000000000000000000000000000000004000000000000000000000000037f20d96a0ed94e7ae25661ffdcb00155b27ca4d0000000000000000000000000000000000000000000000000000000000000002c0de000000000000000000000000000000000000000000000000000000000000"
	ID_round1 := "3000"
	ID_round2 := "4000"
	Cipher_round1, _ := encrypt(message, PK, ID_round1)
	Cipher_round1_byte, _ := Cipher_round1.MarshalBinary()
	Cipher_round2, _ := encrypt(message, PK, ID_round2)
	Cipher_round2_byte, _ := Cipher_round2.MarshalBinary()

	if reflect.DeepEqual(Cipher_round1_byte, Cipher_round2_byte) {
		t.Error("should not be equal")
	}
	// After encryption, user is able to submit its encrypted transaction

	//=============================== from keepers view ================================
	// keepers could generate the private key for the ID. ID represents a block or a range of blocks
	//that the private key should be computer for
	// keepers send the processed share

	// FIRST ROUND: ID is 3000,
	// index 3 is offline
	s1_round1 := SecretShareProcess(index1Share, ID_round1, 1)
	s2_round1 := SecretShareProcess(index2Share, ID_round1, 2)
	_ = SecretShareProcess(index3Share, ID_round1, 3)
	s4_round1 := SecretShareProcess(index4Share, ID_round1, 4)
	s5_round1 := SecretShareProcess(index5Share, ID_round1, 5)

	// SECOND ROUND: ID is 3001,
	// index 1 is offline, index 3 is malicious
	_ = SecretShareProcess(index1Share, ID_round2, 1)
	s2_round2 := SecretShareProcess(index2Share, ID_round2, 2)
	// Wrong share, and sent
	s3_round2 := SecretShareProcess(big.NewInt(3), ID_round2, 3)
	s4_round2 := SecretShareProcess(index4Share, ID_round2, 4)
	s5_round2 := SecretShareProcess(index5Share, ID_round2, 5)

	// Key generation
	SK_round1, _ := AggregationSK(
		[]SentShare{s1_round1, s2_round1, s4_round1, s5_round1},
		[]Commitment{c1, c2, c4, c5}, ID_round1,
		[]uint32{1, 2, 4, 5}) // keepers involved
	SK_round2, Invalid := AggregationSK(
		[]SentShare{s2_round2, s3_round2, s4_round2, s5_round2},
		[]Commitment{c2, c3, c4, c5}, ID_round2,
		[]uint32{2, 3, 4, 5}) // keepers involved
	if !reflect.DeepEqual(Invalid, []uint32{3}) {
		t.Error("the malicious user is 3")
	}

	// A Keeper pick the ciphertext from blockchain (consensus layer solution) or commitment contract (smart contract solution), and decrypt it
	// First it computes private key for ID
	Received_Cipher_round1 := new(ibe.Ciphertext)
	_ = Received_Cipher_round1.UnmarshalBinary(Cipher_round1_byte)
	Received_Cipher_round2 := new(ibe.Ciphertext)
	_ = Received_Cipher_round2.UnmarshalBinary(Cipher_round2_byte)

	// Then decryption happens here
	m1, _ := decrypt(*Received_Cipher_round1, SK_round1)
	m2, _ := decrypt(*Received_Cipher_round2, SK_round2)
	if !reflect.DeepEqual(message, m2) {
		t.Error("should be equal")
	}
	if !reflect.DeepEqual(message, m1) {
		t.Error("should be equal")
	}
}

// Tests the degree of the polynomial created is equal to the argument provided.
func TestPolynomial_Degree(t *testing.T) {
	p := newPolynomial(polynomialTestDegree)
	if p.getDegree() != polynomialTestDegree {
		t.Errorf("degree of polynomial is not the provided")
	}
}

func TestPolynomial_Eval(t *testing.T) {
	p := newPolynomial(3)
	p[3] = big.NewInt(6)
	p[2] = big.NewInt(7)
	p[1] = big.NewInt(3)
	p[0] = big.NewInt(8)

	expected := big.NewInt(6738)

	res := p.eval(big.NewInt(10))

	if expected.Cmp(res) != 0 {
		t.Errorf("the evaluations is not providing a correct result")
	}
}
