import React, { useState, useEffect } from "react";
import Products_card from "./Products_card.jsx";
import axios from "axios";
import classes from "./products.module.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        setProducts(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className={classes.products_container}>
        {products.map((singleproduct) => (
          <Products_card product={singleproduct} key={singleproduct.id} />
        ))}
      </section>
    </>
  );
}

export default Products;
