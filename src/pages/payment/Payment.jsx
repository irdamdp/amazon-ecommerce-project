import React, { useContext, useState } from "react";
import classes from "./payment.module.css";
import { DataContext } from "../../components/Dataprovider/Dataprovider";
import Products_card from "../../components/products/Products_card";
import Sproductcard from "../../components/secondapiproduct/Sproductcard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Currencyformat from "../../components/currencyformat/Currencyformat";
import { axiosinstance } from "../../Api/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [processing, setprocessing] = useState(false);
  const [error, setError] = useState(null);
  const [{ user, basket }] = useContext(DataContext);

  // Initialize Stripe and Elements
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  // Calculate total items in the basket

  const totalamount = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  // Calculate total price of items in the basket

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  // Handle changes in the card element

  const handleChange = (event) => {
    if (event.error) {
      // console.error("Card Element Error:", event.error.message);
      setError(event.error.message);
    } else {
      // console.log("Card Element Valid");
      setError(null);
    }
  };
  // Handle payment submission

  const handlePayment = async (e) => {
    e.preventDefault();

    // 1. backend || functions -----> contact to the client secret

    try {
      setprocessing(true);

      // Make a request to your backend to create a payment intent

      const response = await axiosinstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`, // Convert to cents
      });

      // console.log("Payment Intent Response:", response.data);
      const clientSecret = response.data?.clientSecret;

      // 2. client side ( react side confirmation of payment)
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      // console.log("Payment Confirmation:", confirmation);

      // 3. after payment success and confirmation ---> order firestore databases save , clear basket, redirect to orders page

      await db
        .collection("users")
        .doc(user?.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
          paymentIntent: paymentIntent.created,
        });

      setprocessing(false);
      navigate("/orders", { state: "you have placed new order" });
    } catch (error) {
      setprocessing(false);
      setError("Payment failed. Please try again.");
    }
    // console.error("Payment Error:", error);
  };

  // 4. if payment fails, show error message
  // Render the payment component
  return (
    <>
      <div>
        {/* header */}
        <div className={classes.payment_header}>
          Checkout({totalamount})items
        </div>
        {/* payment method */}
        <section className={classes.payment_section}>
          {/* address */}
          <div className={classes.payment_flex}>
            <h3>Delivery Address</h3>

            <div className={classes.payment_address}>
              <p>{user?.email}</p>
              <p>123 Main St</p>
              <p>City, State, ZIP</p>
            </div>
          </div>
        </section>

        {/* products */}
        <section className={classes.payment_flex}>
          {/* display products */}
          <h3>Review items and delivery</h3>
          <div className={""}>
            {basket?.map((item, i) => {
              return (
                <div key={i}>
                  {item.alterer ? (
                    <Products_card
                      product={item}
                      renderdi={false}
                      flex={true}
                      remover={false}
                    />
                  ) : (
                    <Sproductcard
                      categorized={item}
                      renderdi={false}
                      flex={true}
                      remover={false}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* card form  */}
        <div className={classes.payment_flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment_container}>
            <div className={classes.payment_form}>
              <form onSubmit={handlePayment}>
                {/* error  */}
                {error && <small className={classes.error}>{error}</small>}
                {/* the main card  */}
                <CardElement onChange={handleChange} />
                {/* price*/}
                <div className={classes.payment_price}>
                  <div>
                    <span>
                      <span style={{ display: "flex", gap: "5px" }}>
                        Total Order | <Currencyformat amount={total} />
                      </span>
                    </span>
                  </div>

                  <button className={classes.button} type="submit">
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="grey" size={13} />
                        <p style={{ size: "13" }}>Please Wait...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
