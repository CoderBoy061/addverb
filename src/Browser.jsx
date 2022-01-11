import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import MoreDeatils from "./MoreDeatils";

const Browser = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/details/:name" element={<MoreDeatils />} />
      </Routes>
    </>
  );
};

export default Browser;
