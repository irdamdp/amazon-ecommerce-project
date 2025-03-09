import React from "react";
import Rating from "@mui/material/Rating";
import classes from "./products.module.css";
import Currencyformat from "../currencyformat/Currencyformat";
function Products_card({ product }) {
  const { image, title, id, rating, price } = product;

  return (
    <>
      <div className={`${classes.card_container}`}>
        <a href="">
          <img src={image} alt="" />
        </a>
        <div className={classes.card_info}>
          <h3>{title}</h3>
          <div className={classes.rating}>
            {/* Rating */}
            <Rating value={rating.rate} precition={0.1} />
            <small>{rating.count}</small>
          </div>
          <div>
            {/* price */}
            <Currencyformat amount={price} />
          </div>
          <button className= {classes.button}>add to cart</button>
        </div>
      </div>
    </>
  );
}

export default Products_card;
