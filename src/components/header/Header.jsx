import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HeadClass from "./header.module.css";
import Lowerheader from "./Lowerheader";
import { SlLocationPin } from "react-icons/sl";
import { HiSearch } from "react-icons/hi";
import { DataContext } from "../Dataprovider/Dataprovider";
import { PiShoppingCartLight } from "react-icons/pi";
import { auth } from "../../Utility/firebase";

const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalitem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <>
      <section className={HeadClass.fixed}>
        <section>
          <div className={HeadClass.head_container}>
            <div className={HeadClass.logo_container}>
              <Link to="/">
                <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                  alt="amazon log"
                />
              </Link>
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
              <select style={{ backgroundColor: "white" }} name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" name="" id="" placeholder="Search Amazon" />
              <HiSearch size={35.5} /> 
            </div>
            <div className={HeadClass.order_container}>
              {/* right side link */}
              <Link to="" className={HeadClass.language_container}>
                <img
                  src="https://pngimg.com/uploads/flags/small/flags_PNG14592.png"
                  alt=""
                />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </Link>

              <Link to={!user && "/auth"}>
                <div>
                  {user ? (
                    <>
                      <p>Hello, {user?.email?.split("@")[0]}</p>
                      <small
                        style={{ marginLeft: "8px" }}
                        onClick={() => auth.signOut()}
                      >
                        Sign Out
                      </small>
                    </>
                  ) : (
                    <>
                      <p>Hello, Sign in</p>
                      <span>Account & Lists</span> 
                    </>
                  )}
                </div>
              </Link>

              <Link to="/orders">
                <p>returns</p>
                <span>& orders</span>
              </Link>

              <Link to="/cart" className={HeadClass.cart_container}>
                {/* cart */}
                <PiShoppingCartLight size={35} />
                <span> {totalitem} </span>
              </Link>
            </div>
          </div>
        </section>
        <Lowerheader />
      </section>
    </>
  );
};

export default Header;
