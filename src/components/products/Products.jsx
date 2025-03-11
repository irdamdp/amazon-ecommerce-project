import React, { useState, useEffect } from "react";
import Products_card from "./Products_card.jsx";
import axios from "axios";
import classes from "./products.module.css";
import Loader from "../loader/Loader.jsx";
function Products() {
  const [products, setProducts] = useState([]);
  const [isloader, setIsloader] = useState(false);

  useEffect(() => {
    setIsloader(true);

    axios
      .get("api/products")
      .then((res) => {
        setProducts(res.data);
        setIsloader(false);
      })
      .catch((err) => {
        console.error(
          "Error fetching data:",
          err.response?.data || err.message
        );
        setIsloader(false);
      });
  }, []);

  return (
    <>
      {isloader ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products.map((singleproduct) => (
            <Products_card
              product={singleproduct}
              key={singleproduct.id}
              renderdi={false}
              flex={true}
              remover={true}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Products;
