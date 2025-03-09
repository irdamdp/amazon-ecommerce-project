import React from "react";
import Header from "./components/header/Header.jsx";
import Carousel from "./components/carousel/Carousel.jsx";
import Categorys from "./components/category/Categorys.jsx";
import Products from "./components/products/Products.jsx";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Categorys />
      <Products/>
    </div>
  );
}

export default App;
