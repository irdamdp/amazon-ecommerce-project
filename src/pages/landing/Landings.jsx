import React from "react";
import Carousell from "../../components/carousel/Carousel";
import Products from "../../components/products/Products";
import Categorys from "../../components/category/Categorys";
import Scategory from "../../components/secondapicategory/Scategory.jsx";
// import Sproduct from "../secondapiproduct/Sproduct.jsx";
function Landings() {
  return (
    <>
      <div>
        <Carousell />
        <Categorys />
        <Scategory />
        <Products />
        {/* <Sproduct /> */}
      </div>
    </>
  );
}

export default Landings;
