import React, { useEffect, useState } from "react";
import Sproductcard from "../../components/secondapiproduct/Sproductcard";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/loader/Loader";

function Sproductdetails() {
  const { ProductsId } = useParams();
  const [detail, setDetail] = useState([]);
  const [isloader, setIsloading] = useState(false);
  console.log(ProductsId);

  const filteredProducts =
    Array.isArray(detail) && detail.length > 0
      ? detail.filter(
          (singleproduct) => singleproduct.id === Number(ProductsId)
        )
      : [];

  console.log(filteredProducts);

  useEffect(() => {
    setIsloading(true);
    axios
      .get("https://fakestoreapi.in/api/products?limit=150")
      .then((res) => {
        setDetail(res.data.products);
        console.log(res.data.products);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false);
      });
  }, []);

  return (
    <>
      {isloader ? (
        <Loader />
      ) : filteredProducts.length > 0 ? (
        filteredProducts.map((singleproduct) => (
          <Sproductcard
            categorized={singleproduct}
            renderdi={true}
            flex={true}
            key={singleproduct.id}
            remover={true}
            alter ={false}
          />
        ))
      ) : (
        <p>No products found for "".</p>
      )}
    </>
  );
}

export default Sproductdetails;
