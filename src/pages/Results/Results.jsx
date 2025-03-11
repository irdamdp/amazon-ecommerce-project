import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Products_card from "../../components/products/Products_card";
import classes from "./results.module.css";
import Loader from "../../components/loader/Loader";
import axios from "axios";
function Results() {
  const [results, setResults] = useState([]);
  const [isloader, setIsloader] = useState(false);

  const { categoryName } = useParams();

  useEffect(() => {
    setIsloader(true);
    axios
      .get(`/api/products/category/${categoryName}`)
      .then((res) => {
        // console.log(res.data);
        setIsloader(false);
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsloader(false);
      });
  }, []);

  return (
    <>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName} </p>

        {isloader ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((productt) => (
              <Products_card product={productt} key={productt.id} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Results;
