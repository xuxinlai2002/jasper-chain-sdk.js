const {
    getWallet,
    sendMsgsTx
} = require("./helper");

describe('signOptionPayment',  ()=> {

    beforeEach(function () {

    });

    describe('OptionPrice', async () => {
        it('signTx', async () => {

            try{

                const wallet = await getWallet();
                const accounts = await wallet.getAccounts();
                console.log("xxl accounts is ",accounts[0].address);

                let optionAsset = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
                let payload = "7b226e616d65223a224f7074696f6e5072696365222c2276657273696f6e223a227631222c22636861696e4964223a22313030222c22766572696679696e67436f6e7472616374223a22307830433134654631313532313642323630393741366339333865363445434230326434323133653538227d"
                let sender = accounts[0].address
                //-----sign with btc -------//                
                let msg =  {
                    typeUrl:"/jasper.vault.v1.MsgSignOptionPrice",
                    value:[optionAsset,payload,sender]
                }
            
                const result = await sendMsgsTx(wallet,sender, [msg], "1000000", "0x1234");
                console.log(result);

            }catch(error){
                console.error(error)
            }
        });



    });


});


// // MsgSignOptionPrice defines a Msg to sign option payment
// MsgSignOptionPrice defines a Msg to sign option payment
// message MsgSignOptionPrice {

//     // option asset address:eth btc
//     string optionAsset = 1;
  
//     // Option type: 0-call 1-put;
//     string payload = 2;
  
//     // sender of the sign option
//     string sender = 3;
  
// }


// jasperd tx vault sign-option-payment \
// "order00001" "tb1qjnauled3wxr5945tmazz3hvcexcz0npsq7vfj5" "tb1qgqflul3sjz3274s3sa7dgnyqmt9qtl2ydgthfk" "1000" "Btc_Testnet3" \
// "0x000001" "70736274ff01005202000000011ac879364e3cdf350eb628858601ccd2018c4355a6ae7781e1c9aca7df93dfa10000000000ffffffff015e0100000000000016001494fbcfe5b1718742d68bdf4428dd98c9b027cc30000000000001012be8030000000000002251206ecbba1aed529cf4ed64924d3d6a775f14e871fb8c81db37ee7b7703774be4fe4215c09591e537e76f92279e53141e15b65859b13167cc82a99c84f27d6ad040ff4cb162e7b06c0f2652826939cac96c06fcb55dab2b2e6f6e636dd3d339ab5b84a779232046a79f3846d0ecdd091b46de52bcb1a33fc680840a28fa579408f14f7bf12065acc00000" \
// --from jsp_test_creator \
// --home ./data/jasper_7000-1 \
// --keyring-backend=test -y