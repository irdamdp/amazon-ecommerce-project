import React, { useContext, useEffect } from "react";
import Products_card from "../../components/products/Products_card";
import Sproductcard from "../../components/secondapiproduct/Sproductcard";
import classes from "./cart.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../../components/Dataprovider/Dataprovider";
import Currencyformat from "../../components/currencyformat/Currencyformat";
import { Type } from "../../Utility/actiontype";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);

  // useEffect(() => {
  //   console.log("Updated Basket:", basket);
  // }, [basket]);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <>
      <section className={basket?.length !== 0 && classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello!</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p> Opps ! No item in your cart </p>
          ) : (
            basket?.map((item, i) => {
              return (
                <div className={classes.containimg}>
                  {item.alterer ? (
                    <Products_card
                      key={i}
                      product={item}
                      renderdi={false}
                      flex={true}
                      remover={false}
                    />
                  ) : (
                    <Sproductcard
                      categorized={item}
                      renderdi={false}
                      flex={true}
                      key={i}
                      remover={false}
                    />
                  )}
                  <div className={classes.btn_container}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      <FaAngleUp size={30} />
                    </button>
                    <span> {item.amount} </span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <FaAngleDown size={30} />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <section className={classes.containcart}>
            <div className={classes.subtotal}>
              <div>
                <p>Subtotal ({basket?.length} items) </p>
                <Currencyformat amount={total} />
              </div>
              <span>
                <input type="checkbox" />
                <small>This order contains a gift</small>
              </span>
              <Link to="/payments">Continue to checkout</Link>
            </div>
          </section>
        )}
      </section>
    </>
  );
}

export default Cart;
