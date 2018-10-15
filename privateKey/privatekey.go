package main

import "fmt"
import "github.com/ethereum/go-ethereum/crypto"
import "encoding/hex"

func main() {
key, _ := crypto.GenerateKey()

// Get the private key
privateKey := hex.EncodeToString(key.D.Bytes())
fmt.Println(privateKey)
}

