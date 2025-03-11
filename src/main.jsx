import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Dataprovider } from "./components/Dataprovider/Dataprovider.jsx";
import { reducer, initialState } from "./Utility/reducer.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Dataprovider reducer= {reducer} initialState ={initialState} >
      <App />
    </Dataprovider>
  </StrictMode>
);
