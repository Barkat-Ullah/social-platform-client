// import React from 'react';

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";


const CheckoutForm = () => {
    const [error, setError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [transaction, setTransaction] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    // const [cart, refetch] = useCart();
    const { user } = useAuth();
    
    // const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const totalPrice = 50;
    const axiosSecure = useAxiosSecure();
  
    useEffect(() => {
      if (totalPrice > 0) {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }
    }, [totalPrice, axiosSecure]);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      // console.log(event);
      
  
      if (!stripe || !elements) {
        return;
      }

      const confirmPayment = window.confirm('Do you want to proceed with the payment?');
      if (!confirmPayment) {
        return;
      }
  
      const card = elements.getElement(CardElement);
  
      if (card === null) {
        return;
      }
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });
      if (error) {
        console.log("payment err", error);
        setError(error.message);
      } else {
        console.log("payment success", paymentMethod);
        setError("");
      }
  
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || "anonymous",
              name: user?.name || "anonymous",
            },
          },
        });
  
      if (confirmError) {
        console.log("confirm error");
      } else {
        console.log("payment intent", paymentIntent);
        if (paymentIntent.status === "succeeded") {
          console.log("transaction id", paymentIntent.id);
          setTransaction(paymentIntent.id);
          const payment = {
            email: user.email,
            price:totalPrice,
            transaction: paymentIntent.id,
            date:new Date(),
            // member:isMember,
            // cartIds: cart.map(item => item._id),
            // menuIds: cart.map(item => item.menuId),
            status: 'pending'
          }
          try {
            const res = await axiosSecure.post('/payments', payment);
            console.log('payment data saved', res.data);
            // refetch()
          } catch (err) {
            console.error('Error saving payment data:', err);
          } 
        }
      }
  
  
    };
  
    return (
      <div className="my-10 text-center ml-5">
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded my-2"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
           <span className="text-white"> Pay</span>
          </button>
          <p className="my-2 text-center text-red-500">{error}</p>
          {transaction && (
            <p className="text-green-600"> Your transaction id: {transaction} </p>
          )}
        </form>
      </div>
    );
  };
  
  export default CheckoutForm;