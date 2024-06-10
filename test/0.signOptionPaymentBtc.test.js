const {
    getWallet,rpcEndpoint,SigningStargateClient,
    sendMsgsTx
} = require("./helper");

describe('signOptionPayment',  ()=> {

    beforeEach(function () {

    });

    describe('BTC', async () => {
        it('signTx', async () => {

            try{

                const wallet = await getWallet();
                const accounts = await wallet.getAccounts();
                console.log("xxl accounts is ",accounts[0].address);

                let orderId = "order00002"
                let from = "tb1qgqflul3sjz3274s3sa7dgnyqmt9qtl2ydgthfk"
                let to = "tb1qjnauled3wxr5945tmazz3hvcexcz0npsq7vfj5"
                let amount = "1000"
                let chain = "Btc_Testnet3"
                let payload = "70736274ff01005202000000011ac879364e3cdf350eb628858601ccd2018c4355a6ae7781e1c9aca7df93dfa10000000000ffffffff015e0100000000000016001494fbcfe5b1718742d68bdf4428dd98c9b027cc30000000000001012be8030000000000002251206ecbba1aed529cf4ed64924d3d6a775f14e871fb8c81db37ee7b7703774be4fe411446a79f3846d0ecdd091b46de52bcb1a33fc680840a28fa579408f14f7bf12065e9f021ccebdcac821c61d56e6c3461fc1a5c4949907dc33f7e2a8fa9fb36113e409034282f85d336d166ce3f64fa77c96f39135edd94b3d3bd461916b2a033dc5b172f7cc4ee9cb2e613b3f5a9bb814354497f24633031153637c6569c339f39534215c09591e537e76f92279e53141e15b65859b13167cc82a99c84f27d6ad040ff4cb162e7b06c0f2652826939cac96c06fcb55dab2b2e6f6e636dd3d339ab5b84a779232046a79f3846d0ecdd091b46de52bcb1a33fc680840a28fa579408f14f7bf12065acc00000"
                let proofs = "0x0002"
                let memo = "jest for test"
                let sender = accounts[0].address
                //-----sign with btc -------//                
                let msg =  {
                    typeUrl:"/jasper.vault.v1.MsgSignOptionPayment",
                    value:[orderId,from,to,amount,chain,payload,proofs,sender,memo]
                }
            
                const result = await sendMsgsTx(wallet,sender, [msg], "1000000", "0x1234");
                console.log(result);

            }catch(error){
                console.error(error)
            }
        });



    });


});


// // MsgSignOptionPayment defines a Msg to sign option payment
// message MsgSignOptionPayment {

//     // order id of option payment
//     string order_id = 1;
//     // from address to the payment
//     string from = 2;
//     // to address of the payment
//     string to = 3;
//     // amount for the payment
//     string amount = 4;
//     // chain information of the chain
//     string chain = 5;
//     // details of the transaction
//     string payload = 6;
//     // provide the proofs to support the sign
//     string proofs = 7;
//     // sender of the sign option
//     string sender = 8;
  
//   }


// jasperd tx vault sign-option-payment \
// "order00001" "tb1qjnauled3wxr5945tmazz3hvcexcz0npsq7vfj5" "tb1qgqflul3sjz3274s3sa7dgnyqmt9qtl2ydgthfk" "1000" "Btc_Testnet3" \
// "0x000001" "70736274ff01005202000000011ac879364e3cdf350eb628858601ccd2018c4355a6ae7781e1c9aca7df93dfa10000000000ffffffff015e0100000000000016001494fbcfe5b1718742d68bdf4428dd98c9b027cc30000000000001012be8030000000000002251206ecbba1aed529cf4ed64924d3d6a775f14e871fb8c81db37ee7b7703774be4fe4215c09591e537e76f92279e53141e15b65859b13167cc82a99c84f27d6ad040ff4cb162e7b06c0f2652826939cac96c06fcb55dab2b2e6f6e636dd3d339ab5b84a779232046a79f3846d0ecdd091b46de52bcb1a33fc680840a28fa579408f14f7bf12065acc00000" \
// --from jsp_test_creator \
// --home ./data/jasper_7000-1 \
// --keyring-backend=test -y