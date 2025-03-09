import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { img } from "./images/data";
import classes from './carousel.module.css'

function Carousell() {
  return (
    <>
      <div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={true}
          showStatus={false}
          showThumbs={false}
        >
          {img.map((imgItemlink, index) => {
            return <img src={imgItemlink} alt="carousel" key={index} />;
          })}
        </Carousel>
        <div className={classes.hero_img}></div>
      </div>
    </>
  );
}

export default Carousell;
