import React, { useContext } from "react";
import classes from "./spro.module.css";
import Currencyformat from "../currencyformat/Currencyformat";
import { Link } from "react-router-dom";
// import { Scategoryinfo } from "../secondapicategory/scategory.js";

import { DataContext } from "../Dataprovider/Dataprovider";
import { Type } from "../../Utility/actiontype";

function Sproductcard({ categorized, flex, renderdi, remover  }) {
  const { image, title, id, price, model, brand, description } = categorized;

  const [state, dispatch] = useContext(DataContext);

  const addtocart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      alterer: false,
      item: {
        image,
        title,
        id,
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
        <Link to={`/product/${id}`}>
          <img src={image} alt="" />
        </Link>
        <div className={classes.card_info}>
          <h3>{title}</h3>
          {renderdi && <div style={{ maxWidth: "750px" }}> {description}</div>}
          {!alter && (
            <div style={{ fontWeight: "bold", paddingTop: "5px" }}>
              Model:- {model}, {brand}
            </div>
          )}

          <div className={classes.rating}></div>
          <div>
            {/* price */}
            <Currencyformat amount={price} />
          </div>
          {remover ? (
            <button className={classes.button} onClick={addtocart}>
              add to cart
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Sproductcard;
