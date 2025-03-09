import React from "react";
import Carousell from "../../components/carousel/Carousel";
import Products from "../../components/products/Products";
import Categorys from "../../components/category/Categorys";

function Landings() {
  return (
    <>
      <div>
        <Carousell />
        <Categorys />
        <Products />
      </div>
    </>
  );
}

export default Landings;
