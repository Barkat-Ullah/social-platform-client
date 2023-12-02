import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_key)
const Payment = () => {
    return (
        <div className="py-20">
            {/* <h2>this is payment page</h2> */}
            <Elements stripe={stripePromise}>
                <CheckoutForm/>
            </Elements>
            
        </div>
    );
};

export default Payment;