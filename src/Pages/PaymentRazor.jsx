import { useRazorpay } from "react-razorpay";
import { toast } from "react-toastify";

function PaymentButton({ totalData, Onpayment }) {
  const { error, isLoading, Razorpay } = useRazorpay();
  const keyId = import.meta.env.VITE_RAZOR_PAY_KEY_ID;
  const keySecret = import.meta.env.VITE_RAZOR_PAY_KEY_SECRET;

  const handlePayment = async () => {
    var options = {
      key: keyId,
      key_secret: keySecret,
      amount: (totalData + 180) * 100,
      currency: "INR",
      name: "Asian Fsahion",
      description: "Payment Process",
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        console.log("paymant id", paymentId);
        toast.success("payment is succesfully completed")
        //     toast.promise(
        //   Onpayment(),
        //   {
        //     pending: "Adding to cart...",
        //     success: "Added successfully 👌",
        //     error: "Failed to add ❌"
        //   }
        // );
        Onpayment()
      },
      theme: {
        color: "#A5FF00",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
  };

  return <button className="pay-order-btn" onClick={handlePayment}>
    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/1920px-Razorpay_logo.svg.png"} alt="razorpay" />
  </button>;
}

export default PaymentButton;