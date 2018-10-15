var Wallet = require('ethereumjs-wallet');
var EthUtil = require('ethereumjs-util');

var args = process.argv.slice(2);

var privateKeyString = "0x"+args[0];
var privateKeyBuffer = EthUtil.toBuffer(privateKeyString);
var wallet = Wallet.fromPrivateKey(privateKeyBuffer);
var publicKey = wallet.getPublicKeyString();
console.log(publicKey);
var address = wallet.getAddressString();
console.log(address);
var keystoreFilename = wallet.getV3Filename();
console.log(keystoreFilename);

var keystore = wallet.toV3("123");
console.log(keystore);
