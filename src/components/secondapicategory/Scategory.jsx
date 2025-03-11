import React from "react";
import { Scategoryinfo } from "./scategory.js";
import Scategorycard from "./Scategorycard";
import classes from "./Scategory.module.css";
function Scategory() {
  return (
    <>
      <section className={classes.category_container}>
        {Scategoryinfo.map((categoryItem, index) => (
          <Scategorycard key={index} data={categoryItem} />
        ))}
      </section>
    </>
  );
}

export default Scategory;
