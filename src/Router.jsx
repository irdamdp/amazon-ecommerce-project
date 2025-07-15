import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layoutt from "./components/layout/Layoutt";
import Landings from "./pages/landing/Landings";
import Authh from "./pages/Auth/Auth.jsx";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/payment/Payment";
import Orders from "./pages/Orders/Orders";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetails/ProductDetail";
import Sproduct from "./pages/secondapiproduct/Sproduct";
import Protectedroute from "./components/protectedroute/Protectedroute.jsx";
import Sproductdetails from "./pages/sproductdetail/Sproductdetails";
import { CheckoutProvider, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51RE4O4RBvyWzU5kNrYSHCkCH5hokHdj5EMe9arWJ5q68PUJ0ywP6eJhoRTNFpTwMcraOPpkQbtlMVtuDILHMv0aA00Ulj5FZGA"
);

function Routering() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="auth" element={<Authh />} />
          <Route path="/" element={<Layoutt />}>
            <Route index element={<Landings />} />
            <Route path="cart" element={<Cart />} />

            <Route
              path="payments"
              element={
                <Protectedroute
                  msg={"You must login to proceed to payment!"}
                  redirect={"/payments"}
                >
                  <Elements stripe={stripePromise}>
                    <Payment />
                  </Elements>
                </Protectedroute>
              }
            />

            <Route
              path="/orders"
              element={
                <Protectedroute
                  msg={"You must login to access your orders!"}
                  redirect={"/orders"}
                >
                  <Orders />
                </Protectedroute>
              }
            />
            <Route path="/category/:categoryName" element={<Results />} />
            <Route path="/products/:ProductsId" element={<ProductDetail />} />
            <Route path="/categorys/:categoryName" element={<Sproduct />} />
            <Route path="/product/:ProductsId" element={<Sproductdetails />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default Routering;
