import React from "react";
import { MdMenu } from "react-icons/md";
import HeadClass from "./header.module.css";
const Lowerheader = () => {
  return (
    <>
      <div className={HeadClass.lower_header}>
        <ul>
          <li>
            <MdMenu size={25}/>
            <p>All</p>
          </li>
          <li>Today's Deals</li>
          <li>Costumer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </div>
    </>
  );
};

export default Lowerheader;

