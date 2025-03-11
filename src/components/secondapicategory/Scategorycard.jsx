import React from "react";
import classes from "./Scategory.module.css";
import { Link } from "react-router-dom";

function Scategorycard({ data }) {
  // console.log(data.name);
  return (
    <>
      <div className={classes.category_card}>
        <Link to={`/categorys/${data.name.toLowerCase()}`}>
          <span>
            <h2>{data?.title}</h2>
          </span>
          <img src={data?.imgLink} alt="" />
          <p>shop now</p>
        </Link>
      </div>
    </>
  );
}

export default Scategorycard;
