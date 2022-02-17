package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// EncryptedtxKeyPrefix is the prefix to retrieve all Encryptedtx
	EncryptedtxKeyPrefix = "Encryptedtx/value/"
)

// EncryptedtxKey returns the store key to retrieve a Encryptedtx from the index fields
func EncryptedtxKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
