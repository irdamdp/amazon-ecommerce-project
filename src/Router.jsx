import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layoutt from "./components/layout/Layoutt";
import Landings from "./pages/landing/Landings";
import Auth from "./pages/Auth/Auth";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/payment/Payment";
import Orders from "./pages/Orders/Orders";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetails/ProductDetail";
import Sproduct from "./pages/secondapiproduct/Sproduct";

import Sproductdetails from "./pages/sproductdetail/Sproductdetails";

function Routering() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layoutt />}>
            <Route index element={<Landings />} />
            <Route path="auth" element={<Auth />} />
            <Route path="cart" element={<Cart />} />
            <Route path="payment" element={<Payment />} />
            <Route path="orders" element={<Orders />} />
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
