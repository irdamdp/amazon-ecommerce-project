import React from "react";
import Categorycard from "./Categorycard";
import { categoryInfo } from "./categoryFullinfos";
import classes from "./category.module.css";
function Categorys() {
  return (
    <>
      <section className={classes.category_container}>
        {categoryInfo.map((categoryItem, index) => (
          <Categorycard key={index} data={categoryItem} />
        ))}
      </section>
    </>
  );
}

export default Categorys;
