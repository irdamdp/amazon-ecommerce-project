import React from "react";
import { PulseLoader } from "react-spinners";
function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <PulseLoader color="#52e4f3" speedMultiplier={0.8} />
    </div>
  );
}

export default Loader;
