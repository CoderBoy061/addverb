import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import Browser from "./Browser";

ReactDOM.render(
  <BrowserRouter>
    <Browser />,
  </BrowserRouter>,

  document.getElementById("root")
);
