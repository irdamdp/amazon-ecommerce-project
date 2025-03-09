import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../header/Header";
function Layoutt() {
  return (
    <>
      <Header />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </>
  );
}

export default Layoutt;
