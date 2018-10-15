#!/bin/bash
go run privatekey.go > output.txt
while IFS='' read -r line || [[ -n "$line" ]]; do
    echo "$line"
    node keystore.js "$line"
done < "output.txt"
