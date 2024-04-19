import { encodeSecp256k1Signature, rawSecp256k1PubkeyToRawAddress } from "@cosmjs/amino";
import { Secp256k1, sha256,keccak256 } from "@cosmjs/crypto";
import { Bech32, toHex } from "@cosmjs/encoding";
import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";

import { AccountData, DirectSignResponse, OfflineDirectSigner } from "./signer";
import { makeSignBytes } from "./signing";

/**
 * A wallet that holds a single secp256k1 keypair.
 *
 * If you want to work with BIP39 mnemonics and multiple accounts, use DirectSecp256k1HdWallet.
 */
export class DirectSecp256k1Wallet implements OfflineDirectSigner {
  /**
   * Creates a DirectSecp256k1Wallet from the given private key
   *
   * @param privkey The private key.
   * @param prefix The bech32 address prefix (human readable part). Defaults to "cosmos".
   */
  public static async fromKey(privkey: Uint8Array, prefix = "cosmos"): Promise<DirectSecp256k1Wallet> {
    const uncompressed = (await Secp256k1.makeKeypair(privkey)).pubkey;
	if(prefix=='uptick'){
		   return new DirectSecp256k1Wallet(privkey,Secp256k1.compressPubkey(uncompressed),uncompressed, prefix);
	}else{
		   return new DirectSecp256k1Wallet(privkey, Secp256k1.compressPubkey(uncompressed), new Uint8Array(), prefix);
	}
 
  }

  private readonly pubkey: Uint8Array;
  private readonly privkey: Uint8Array;
  private readonly uptickPubkey: Uint8Array;
  private readonly prefix: string;

  private constructor(privkey: Uint8Array, pubkey: Uint8Array,uptickPubkey: Uint8Array, prefix: string) {
    this.privkey = privkey;
    this.pubkey = pubkey;
	this.uptickPubkey = uptickPubkey;
    this.prefix = prefix;
  }

  private get address(): string {
	      if(this.prefix=='uptick'){
	              let wordsbyte = keccak256(this.uptickPubkey.slice(1)).slice(-20);
	            let  address = Bech32.encode(this.prefix, wordsbyte);
	            console.log("Uptick_address==",address);
	  
				  const address0x = `0x${toHex(keccak256(this.pubkey.slice(1)).slice(-20))}`;
				           
	              console.log("Uptick_0xaddress==",address0x);
	  
	  
	              return address;
	          }else{
	  
	              return  Bech32.encode(this.prefix, rawSecp256k1PubkeyToRawAddress(this.pubkey));
	  
	          }
			  
   // return Bech32.encode(this.prefix, rawSecp256k1PubkeyToRawAddress(this.pubkey));
  }

  public async getAccounts(): Promise<readonly AccountData[]> {
    return [
      {
        algo: "secp256k1",
        address: this.address,
        pubkey: this.pubkey,
      },
    ];
  }

  public async signDirect(address: string, signDoc: SignDoc): Promise<DirectSignResponse> {
    const signBytes = makeSignBytes(signDoc);
    if (address !== this.address) {
      throw new Error(`Address ${address} not found in wallet`);
    }
    // const hashedMessage = sha256(signBytes);
    const hashedMessage = keccak256(signBytes);
    const signature = await Secp256k1.createSignature(hashedMessage, this.privkey);
    const signatureBytes = new Uint8Array([...signature.r(32), ...signature.s(32)]);
    const stdSignature = encodeSecp256k1Signature(this.pubkey, signatureBytes);
    return {
      signed: signDoc,
      signature: stdSignature,
    };
  }
}
