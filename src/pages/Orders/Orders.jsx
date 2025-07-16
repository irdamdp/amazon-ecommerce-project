import React, { useContext, useState, useEffect } from "react";
import { db } from "../../Utility/firebase";
import classes from "./orders.module.css";
import { DataContext } from "../../components/Dataprovider/Dataprovider";
import Products_card from "../../components/products/Products_card";
import Sproductcard from "../../components/secondapiproduct/Sproductcard";
function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log("Orders fetched:", snapshot.docs);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
      // console.log("Orders state updated:", orders);
    } else {
      // If user is not logged in, redirect to login or show a message}
      setOrders([]);
    }
  }, []);
  return (
    <>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Your Orders</h2>
          {/* ordered items will be displayed here  */}
          {orders?.length == 0 && (
            <div style={{ padding: "20px" }}>You don't have orders yet.</div>
          )}
          <div>
            {orders?.map((order) => {
              return (
                <div key={order.id}>
                  <hr />
                  <p> Order ID: {order?.id} </p>
                  {order?.data?.basket?.map((item, i) => {
                    return (
                      <div>
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
                            remover={false}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Orders;
