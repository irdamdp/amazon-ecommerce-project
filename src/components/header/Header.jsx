import React from "react";
import HeadClass from "./header.module.css";
import Lowerheader from "./Lowerheader";
import { SlLocationPin } from "react-icons/sl";
import { HiSearch } from "react-icons/hi";

import { PiShoppingCartFill } from "react-icons/pi";

const Header = () => {
  return (
    <>
      <section>
        <div className={HeadClass.head_container}>
          <div className={HeadClass.logo_container}>
            <a href="#">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="amazon log"
              />
            </a>
            <div className={HeadClass.delivery_container}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>


          <div className={HeadClass.search_container}>

            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search.p" />
            <HiSearch size={35.5} />
          </div>
          <div className={HeadClass.order_container}>
            {/* right side link */}
            <a href="" className={HeadClass.language_container}>
              <img
                src="https://pngimg.com/uploads/flags/small/flags_PNG14592.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>

            <a href="">
              <p>returns</p>
              <span>& orders</span>
            </a>

            <a href="" className={HeadClass.cart_container}>
              {/* cart */}
              <PiShoppingCartFill size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <Lowerheader />
    </>
  );
};

export default Header;
