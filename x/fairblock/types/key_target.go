package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// TargetKeyPrefix is the prefix to retrieve all Target
	TargetKeyPrefix = "Target/value/"
)

// TargetKey returns the store key to retrieve a Target from the index fields
func TargetKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
