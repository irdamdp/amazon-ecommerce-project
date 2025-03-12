import React, { useContext } from "react";
import classes from "./spro.module.css";
import Currencyformat from "../currencyformat/Currencyformat";
import { Link } from "react-router-dom";
// import { Scategoryinfo } from "../secondapicategory/scategory.js";

import { DataContext } from "../Dataprovider/Dataprovider";
import { Type } from "../../Utility/actiontype";

function Sproductcard({ categorized, flex, renderdi, remover, alter }) {
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

export default Sproductcard;
