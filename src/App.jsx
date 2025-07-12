import React, { useContext, useEffect } from "react";
import Routering from "./Router.jsx";
import "./App.css";
import { Type } from "./Utility/actiontype";

import { auth } from "./Utility/firebase";
import { DataContext } from "./components/Dataprovider/Dataprovider";
function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("User is logged in", authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <Routering />
    </>
  );
}

export default App;
