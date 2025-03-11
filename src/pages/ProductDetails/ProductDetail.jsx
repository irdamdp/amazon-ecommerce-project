import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import Loader from "../../components/loader/Loader";
import Products_card from "../../components/products/Products_card";
function ProductDetail() {
  const { ProductsId } = useParams();
  const [detail, setDetail] = useState({});
  const [isloading, setIsloading] = useState(false);


  
  useEffect(() => {
    setIsloading(true);
    axios
      .get(`/api/products/${ProductsId}`)
      .then((res) => {
        setDetail(res.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false);
      });
  }, []); 

  return (
    <>
      {isloading ? (
        <Loader />
      ) : detail && Object.keys(detail).length > 0 ? (
        <Products_card product={detail} flex={true} renderdi={true} remover={true} />
      ) : (
        ""
      )}
    </>
  );
}

export default ProductDetail;
