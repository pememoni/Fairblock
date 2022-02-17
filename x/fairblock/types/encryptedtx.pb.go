// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: fairblock/encryptedtx.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Encryptedtx struct {
	Index        string `protobuf:"bytes,1,opt,name=index,proto3" json:"index,omitempty"`
	MessageHash  string `protobuf:"bytes,2,opt,name=messageHash,proto3" json:"messageHash,omitempty"`
	Encryption   string `protobuf:"bytes,3,opt,name=encryption,proto3" json:"encryption,omitempty"`
	Plaintext    string `protobuf:"bytes,4,opt,name=plaintext,proto3" json:"plaintext,omitempty"`
	TargetHeight string `protobuf:"bytes,5,opt,name=targetHeight,proto3" json:"targetHeight,omitempty"`
	Deposit      string `protobuf:"bytes,6,opt,name=deposit,proto3" json:"deposit,omitempty"`
	Decryptor    string `protobuf:"bytes,7,opt,name=decryptor,proto3" json:"decryptor,omitempty"`
}

func (m *Encryptedtx) Reset()         { *m = Encryptedtx{} }
func (m *Encryptedtx) String() string { return proto.CompactTextString(m) }
func (*Encryptedtx) ProtoMessage()    {}
func (*Encryptedtx) Descriptor() ([]byte, []int) {
	return fileDescriptor_176cc2463594fd24, []int{0}
}
func (m *Encryptedtx) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Encryptedtx) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Encryptedtx.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Encryptedtx) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Encryptedtx.Merge(m, src)
}
func (m *Encryptedtx) XXX_Size() int {
	return m.Size()
}
func (m *Encryptedtx) XXX_DiscardUnknown() {
	xxx_messageInfo_Encryptedtx.DiscardUnknown(m)
}

var xxx_messageInfo_Encryptedtx proto.InternalMessageInfo

func (m *Encryptedtx) GetIndex() string {
	if m != nil {
		return m.Index
	}
	return ""
}

func (m *Encryptedtx) GetMessageHash() string {
	if m != nil {
		return m.MessageHash
	}
	return ""
}

func (m *Encryptedtx) GetEncryption() string {
	if m != nil {
		return m.Encryption
	}
	return ""
}

func (m *Encryptedtx) GetPlaintext() string {
	if m != nil {
		return m.Plaintext
	}
	return ""
}

func (m *Encryptedtx) GetTargetHeight() string {
	if m != nil {
		return m.TargetHeight
	}
	return ""
}

func (m *Encryptedtx) GetDeposit() string {
	if m != nil {
		return m.Deposit
	}
	return ""
}

func (m *Encryptedtx) GetDecryptor() string {
	if m != nil {
		return m.Decryptor
	}
	return ""
}

func init() {
	proto.RegisterType((*Encryptedtx)(nil), "pememoni.fairblock.fairblock.Encryptedtx")
}

func init() { proto.RegisterFile("fairblock/encryptedtx.proto", fileDescriptor_176cc2463594fd24) }

var fileDescriptor_176cc2463594fd24 = []byte{
	// 259 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0x90, 0xb1, 0x4e, 0xc3, 0x30,
	0x10, 0x86, 0x63, 0xa0, 0xad, 0xea, 0x32, 0x59, 0x0c, 0x96, 0xa8, 0xac, 0xaa, 0x13, 0x53, 0x32,
	0xf0, 0x06, 0x95, 0x40, 0x65, 0x65, 0x64, 0x73, 0x92, 0x23, 0x39, 0xd1, 0xd8, 0x96, 0x7d, 0x48,
	0xe9, 0x5b, 0xf0, 0x58, 0x8c, 0x1d, 0xd9, 0x40, 0xc9, 0x8b, 0x20, 0x5c, 0xda, 0xb4, 0x9b, 0xef,
	0xfb, 0x7f, 0xdf, 0x49, 0x1f, 0xbf, 0x7d, 0xd5, 0xe8, 0xf3, 0x8d, 0x2d, 0xde, 0x32, 0x30, 0x85,
	0xdf, 0x3a, 0x82, 0x92, 0xda, 0xd4, 0x79, 0x4b, 0x56, 0xcc, 0x1d, 0x34, 0xd0, 0x58, 0x83, 0xe9,
	0xb1, 0x35, 0xbc, 0x96, 0xdf, 0x8c, 0xcf, 0x1e, 0x86, 0x3f, 0xe2, 0x86, 0x8f, 0xd0, 0x94, 0xd0,
	0x4a, 0xb6, 0x60, 0x77, 0xd3, 0xe7, 0xfd, 0x20, 0x16, 0x7c, 0xd6, 0x40, 0x08, 0xba, 0x82, 0xb5,
	0x0e, 0xb5, 0xbc, 0x88, 0xd9, 0x29, 0x12, 0x8a, 0xf3, 0xff, 0xd3, 0x68, 0x8d, 0xbc, 0x8c, 0x85,
	0x13, 0x22, 0xe6, 0x7c, 0xea, 0x36, 0x1a, 0x0d, 0x41, 0x4b, 0xf2, 0x2a, 0xc6, 0x03, 0x10, 0x4b,
	0x7e, 0x4d, 0xda, 0x57, 0x40, 0x6b, 0xc0, 0xaa, 0x26, 0x39, 0x8a, 0x85, 0x33, 0x26, 0x24, 0x9f,
	0x94, 0xe0, 0x6c, 0x40, 0x92, 0xe3, 0x18, 0x1f, 0xc6, 0xbf, 0xdd, 0x25, 0xc4, 0x4b, 0xd6, 0xcb,
	0xc9, 0x7e, 0xf7, 0x11, 0xac, 0x9e, 0x3e, 0x3b, 0xc5, 0x76, 0x9d, 0x62, 0x3f, 0x9d, 0x62, 0x1f,
	0xbd, 0x4a, 0x76, 0xbd, 0x4a, 0xbe, 0x7a, 0x95, 0xbc, 0x64, 0x15, 0x52, 0xfd, 0x9e, 0xa7, 0x85,
	0x6d, 0xb2, 0x83, 0xa4, 0xec, 0x51, 0xa3, 0x5f, 0x45, 0x95, 0x6d, 0x36, 0x68, 0xa5, 0xad, 0x83,
	0x90, 0x8f, 0xa3, 0xd1, 0xfb, 0xdf, 0x00, 0x00, 0x00, 0xff, 0xff, 0x15, 0x9c, 0xd5, 0xf3, 0x70,
	0x01, 0x00, 0x00,
}

func (m *Encryptedtx) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Encryptedtx) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Encryptedtx) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Decryptor) > 0 {
		i -= len(m.Decryptor)
		copy(dAtA[i:], m.Decryptor)
		i = encodeVarintEncryptedtx(dAtA, i, uint64(len(m.Decryptor)))
		i--
		dAtA[i] = 0x3a
	}
	if len(m.Deposit) > 0 {
		i -= len(m.Deposit)
		copy(dAtA[i:], m.Deposit)
		i = encodeVarintEncryptedtx(dAtA, i, uint64(len(m.Deposit)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.TargetHeight) > 0 {
		i -= len(m.TargetHeight)
		copy(dAtA[i:], m.TargetHeight)
		i = encodeVarintEncryptedtx(dAtA, i, uint64(len(m.TargetHeight)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.Plaintext) > 0 {
		i -= len(m.Plaintext)
		copy(dAtA[i:], m.Plaintext)
		i = encodeVarintEncryptedtx(dAtA, i, uint64(len(m.Plaintext)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Encryption) > 0 {
		i -= len(m.Encryption)
		copy(dAtA[i:], m.Encryption)
		i = encodeVarintEncryptedtx(dAtA, i, uint64(len(m.Encryption)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.MessageHash) > 0 {
		i -= len(m.MessageHash)
		copy(dAtA[i:], m.MessageHash)
		i = encodeVarintEncryptedtx(dAtA, i, uint64(len(m.MessageHash)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Index) > 0 {
		i -= len(m.Index)
		copy(dAtA[i:], m.Index)
		i = encodeVarintEncryptedtx(dAtA, i, uint64(len(m.Index)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintEncryptedtx(dAtA []byte, offset int, v uint64) int {
	offset -= sovEncryptedtx(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Encryptedtx) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Index)
	if l > 0 {
		n += 1 + l + sovEncryptedtx(uint64(l))
	}
	l = len(m.MessageHash)
	if l > 0 {
		n += 1 + l + sovEncryptedtx(uint64(l))
	}
	l = len(m.Encryption)
	if l > 0 {
		n += 1 + l + sovEncryptedtx(uint64(l))
	}
	l = len(m.Plaintext)
	if l > 0 {
		n += 1 + l + sovEncryptedtx(uint64(l))
	}
	l = len(m.TargetHeight)
	if l > 0 {
		n += 1 + l + sovEncryptedtx(uint64(l))
	}
	l = len(m.Deposit)
	if l > 0 {
		n += 1 + l + sovEncryptedtx(uint64(l))
	}
	l = len(m.Decryptor)
	if l > 0 {
		n += 1 + l + sovEncryptedtx(uint64(l))
	}
	return n
}

func sovEncryptedtx(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozEncryptedtx(x uint64) (n int) {
	return sovEncryptedtx(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Encryptedtx) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowEncryptedtx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Encryptedtx: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Encryptedtx: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEncryptedtx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEncryptedtx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEncryptedtx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Index = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field MessageHash", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEncryptedtx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEncryptedtx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEncryptedtx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.MessageHash = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Encryption", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEncryptedtx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEncryptedtx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEncryptedtx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Encryption = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Plaintext", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEncryptedtx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEncryptedtx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEncryptedtx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Plaintext = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TargetHeight", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEncryptedtx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEncryptedtx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEncryptedtx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.TargetHeight = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Deposit", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEncryptedtx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEncryptedtx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEncryptedtx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Deposit = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Decryptor", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEncryptedtx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEncryptedtx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEncryptedtx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Decryptor = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipEncryptedtx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthEncryptedtx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipEncryptedtx(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowEncryptedtx
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowEncryptedtx
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowEncryptedtx
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthEncryptedtx
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupEncryptedtx
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthEncryptedtx
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthEncryptedtx        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowEncryptedtx          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupEncryptedtx = fmt.Errorf("proto: unexpected end of group")
)