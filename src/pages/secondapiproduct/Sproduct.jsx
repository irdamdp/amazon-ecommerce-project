import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sproductcard from "../../components/secondapiproduct/Sproductcard.jsx";
import Loader from "../../components/loader/Loader.jsx";

import axios from "axios";
import classes from "../../components/secondapiproduct/spro.module.css";

function Sproduct() {
  const [Sproducts, setProducts] = useState([]);
  const [isloader, setIsloader] = useState(false);
  const { categoryName } = useParams();

  const filteredProducts = Sproducts.filter(
    (singleproduct) =>
      singleproduct.category.toLowerCase() === categoryName.toLowerCase()
  );

  useEffect(() => {
    setIsloader(true);

    axios
      .get("https://fakestoreapi.in/api/products?limit=150")
      .then((res) => {
        setProducts(res.data.products);
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
      ) : filteredProducts.length > 0 ? (
        <section className={classes.products_container}>
         { filteredProducts.map((singleproduct) => (
          <Sproductcard categorized={singleproduct} key={singleproduct.id} />
          ))}
        </section>
      ) : (
        <p>No products found for "{categoryName}".</p>
      )}
    </>
  );
}

export default Sproduct;


