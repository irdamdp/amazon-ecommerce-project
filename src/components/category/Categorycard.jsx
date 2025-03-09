import React from "react";
import classes from "./category.module.css";

function Categorycard({ data }) {
  return (
    <>
      <div className={classes.category_card}>
        <a href="">
          <span>
            <h2>{data.title}</h2>
          </span>
          <img src={data.imgLink} alt="" />
          <p>shop now</p>
        </a>
      </div>
    </>
  );
}

export default Categorycard;
