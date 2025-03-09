import React from "react";
import numeral from "numeral";

const Currencyformat = ({ amount }) => {
  const formattedamount = numeral(amount).format("$0,0.00");
  return <div>{formattedamount}</div>;
};

export default Currencyformat;
