import GooglePayButton from "@google-pay/button-react";

export default function Payment({totalData,Onpayment}) {

  const handleSuccess = async () => {
   console.log("payment successfull")
   Onpayment()
  };

  return (
    <GooglePayButton
      environment="TEST"
      buttonColor="black"
      buttonType="pay"
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: "CARD",
            parameters: {
              allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
              allowedCardNetworks: ["VISA", "MASTERCARD"]
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {
                gateway: "example",
                gatewayMerchantId: "exampleGatewayMerchantId"
              }
            }
          }
        ],
        merchantInfo: {
          merchantId: "12345678901234567890",
          merchantName: "Demo Store"
        },
        transactionInfo: {
          totalPriceStatus: "FINAL",
          totalPrice: JSON.stringify(totalData+180),
          currencyCode: "INR"
        }
      }}
      onLoadPaymentData={async paymentData => {
        console.log("Payment Data", paymentData);

        // const orderId = await createOrder();
        await handleSuccess();
      }}
    />
  );
}
