package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CommitKeyPrefix is the prefix to retrieve all Commit
	CommitKeyPrefix = "Commit/value/"
)

// CommitKey returns the store key to retrieve a Commit from the index fields
func CommitKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
