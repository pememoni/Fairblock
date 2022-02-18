package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ShareKeyPrefix is the prefix to retrieve all Share
	ShareKeyPrefix = "Share/value/"
)

// ShareKey returns the store key to retrieve a Share from the index fields
func ShareKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
