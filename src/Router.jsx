import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layoutt from "./components/layout/Layoutt";
import Landings from "./pages/landing/Landings";
// import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/Auth/Signup";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/payment/Payment";
import Orders from "./pages/Orders/Orders";
import Results from "./pages/Results/Results";
function Routering() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layoutt />}>
            <Route index element={<Landings />} />
            <Route path="auth" element={<SignUp />} />
            <Route path="cart" element={<Cart />} />
            <Route path="payment" element={<Payment />} />
            <Route path="orders" element={<Orders />} />
            <Route path="/category/:categoryName" element={<Results/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default Routering;
