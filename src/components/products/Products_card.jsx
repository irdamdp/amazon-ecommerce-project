import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import classes from "./products.module.css";
import Currencyformat from "../currencyformat/Currencyformat";
import { Link } from "react-router-dom";
// import { categoryInfo } from "../category/categoryFullinfos";
import { DataContext } from "../Dataprovider/Dataprovider";
import { Type } from "../../Utility/actiontype";

function Products_card({ product, flex, renderdi, remover }) {
  if (!product || Object.keys(product).length === 0) return <p>Loading...</p>;

  const { image, title, id, rating, price, description } = product;

  const [state, dispatch] = useContext(DataContext);

  const addtocart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      alterer: true,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <>
      <div
        className={`${classes.card_container} ${
          flex ? classes.product_flex : ""
        }`}
      >
        <Link to={`/products/${id}`}>
          <img src={image} alt="" />
        </Link>

        <div className={classes.card_info}>
          <h3>{title}</h3>
          {renderdi && <div style={{ maxWidth: "550px" }}> {description} </div>}

          <div className={classes.rating}>
            {/* Rating */}
            <Rating value={rating.rate} precision={0.1} />
            <small>{rating.count}</small>
          </div>
          <div> 
            {/* price not for everyone */}
            <Currencyformat amount={price} />
          </div>

          <button
            className={`${classes.button} ${remover ? "" : classes.hidden}`}
            onClick={remover ? addtocart : ""}
          >
            {remover ? (   
              "Add to cart"
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="16"
                  height="16"
                  style={{
                    marginRight: "8px",
                    verticalAlign: "middle",
                    transform: "rotate(90deg)  scaleY(-1)",
                  }}
                >
                  <path d="M448 240v96c0 3.1-.4 6.2-1.1 9.2l-32 136C410.7 499.2 394.6 512 376 512H168a40 40 0 0 1 -32.4-16.5l-128-176c-13-17.9-9-42.9 8.8-55.9 17.9-13 42.9-9 55.9 8.8L104 316V40c0-22.1 17.9-40 40-40s40 17.9 40 40v200h8v-40c0-22.1 17.9-40 40-40s40 17.9 40 40v40h8v-24c0-22.1 17.9-40 40-40s40 17.9 40 40v24h8c0-22.1 17.9-40 40-40s40 17.9 40 40zm-256 80h-8v96h8v-96zm88 0h-8v96h8v-96zm88 0h-8v96h8v-96z" />
                </svg>
                <span>Here is your product!</span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Products_card;
