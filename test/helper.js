const {
  SigningStargateClient
} = require('@uptsmart/stargate');

const {
    Slip10RawIndex
} = require("@cosmjs/crypto");
const {
  DirectSecp256k1HdWallet
} = require('@uptsmart/proto-signing')

const mnemonic='angry twist harsh drastic left brass behave host shove marriage fall update business leg direct reward object ugly security warm tuna model broccoli choice';
const rpcEndpoint = 'http://165.22.108.139:26657/'

function make60Path() {

  return [
    Slip10RawIndex.hardened(44),
    Slip10RawIndex.hardened(60),
    Slip10RawIndex.hardened(0),
    Slip10RawIndex.normal(0),
    Slip10RawIndex.normal(0),
  ];
}


async function getWallet(){

  const wallet = await  DirectSecp256k1HdWallet.fromMnemonic(mnemonic,{
    "hdPaths": [make60Path()],
    "prefix": "jasper",
  })
  return wallet;

}


async function sendMsgsTx(wallet,address, msgs, amount, data) {


  let fee = {
    amount: [{
        denom: 'ajasper',
        amount: amount,
    }],
    gas: '10000000',
  };

  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    wallet
  )

  const result = await client.sendMsgsTx(address, msgs, fee, data);
  return result;


}


module.exports = {

    make60Path,
    getWallet,
    rpcEndpoint,
    sendMsgsTx,
    SigningStargateClient

}